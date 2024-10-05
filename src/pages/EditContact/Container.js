import { useEffect, useRef, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useSafeAsyncAction } from '../../hooks/useSafeAsyncAction';
import ContactsService from '../../services/ContactsService';
import { toast } from '../../utils/toast';
import { Presentation } from './Presentation';

export function Container() {
  const [isLoading, setIsLoading] = useState(true);
  const [contactName, setContactName] = useState('');
  const contactFormRef = useRef(null);
  const { id } = useParams();
  const history = useHistory();
  const safeAsyncAction = useSafeAsyncAction();

  useEffect(() => {
    async function loadContact() {
      try {
        const contactData = await ContactsService.getContactById(
          id,
        );

        safeAsyncAction(() => {
          contactFormRef.current.setFieldsValues(contactData);
          setIsLoading(false);
          setContactName(contactData.name);
        });
      } catch (error) {
        safeAsyncAction(() => {
          history.push('/');
          toast({
            type: 'danger',
            text: 'Contato não encontrado!',
          });
        });
      }
    }

    loadContact();
  }, [id, history, safeAsyncAction]);

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

  return (
    <Presentation
      contactFormRef={contactFormRef}
      contactName={contactName}
      isLoading={isLoading}
      onSubmit={handleSubmit}
    />
  );
}
