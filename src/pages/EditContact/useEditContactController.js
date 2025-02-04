import { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSafeAsyncAction } from '../../hooks/useSafeAsyncAction';
import ContactsService from '../../services/ContactsService';
import { toast } from '../../utils/toast';

export function useEditContactController() {
  const [isLoading, setIsLoading] = useState(true);
  const [contactName, setContactName] = useState('');
  const contactFormRef = useRef(null);
  const { id } = useParams();
  const safeAsyncAction = useSafeAsyncAction();
  const navigate = useNavigate();

  useEffect(() => {
    const controller = new AbortController();

    async function loadContact() {
      try {
        const contactData = await ContactsService.getContactById(
          id,
          controller.signal,
        );

        safeAsyncAction(() => {
          contactFormRef.current.setFieldsValues(contactData);
          setIsLoading(false);
          setContactName(contactData.name);
        });
      } catch (error) {
        if (error instanceof DOMException && error.name === 'AbortError') {
          return;
        }

        safeAsyncAction(() => {
          navigate('/', { replace: true });
          toast({
            type: 'danger',
            text: 'Contato não encontrado!',
          });
        });
      }
    }

    loadContact();

    return () => {
      controller.abort();
    };
  }, [id, navigate, safeAsyncAction]);

  async function handleSubmit(contact) {
    try {
      const contactData = await ContactsService.updateContact(id, contact);
      setContactName(contactData.name);

      toast({
        type: 'success',
        text: 'Contato editado com sucesso!',
      });
    } catch (error) {
      toast({
        type: 'danger',
        text: 'Ocorreu um erro ao editar o contato.',
      });
    }
  }

  return {
    contactName,
    contactFormRef,
    isLoading,
    handleSubmit,
  };
}
