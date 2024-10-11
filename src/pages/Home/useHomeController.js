import {
  useCallback, useEffect, useState,
  useTransition,
} from 'react';

import ContactsService from '../../services/ContactsService';
import { toast } from '../../utils/toast';

export function useHomeController() {
  const [contacts, setContacts] = useState([]);
  const [orderBy, setOrderBy] = useState('asc');
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [contactBeingDeleted, setContactBeingDeleted] = useState(null);
  const [isLoadingDelete, setIsLoadingDelete] = useState(false);
  const [filteredContacts, setFilteredContacts] = useState([]);
  const [isPending, startTransition] = useTransition();

  // const filteredContacts = useMemo(() => contacts.filter((contact) => (
  //   contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  // )), [contacts, searchTerm]);

  const loadContacts = useCallback(async () => {
    try {
      setIsLoading(true);
      const contactsList = await ContactsService.listContacts(orderBy);
      setHasError(false);
      setContacts(contactsList);
      setFilteredContacts(contactsList);
    } catch (error) {
      setHasError(true);
      setContacts([]);
    } finally {
      setIsLoading(false);
    }
  }, [orderBy]);

  useEffect(() => {
    loadContacts();
  }, [loadContacts]);

  function handleTryAgain() {
    loadContacts();
  }

  const handleToggleOrderBy = useCallback(() => {
    setOrderBy((prevState) => (prevState === 'asc' ? 'desc' : 'asc'));
  }, []);

  function handleChangeSearchTerm(event) {
    const { value } = event.target;
    setSearchTerm(value);
    startTransition(() => {
      setFilteredContacts(contacts.filter((contact) => (
        contact.name.toLowerCase().includes(value.toLowerCase())
      )));
    });
  }

  const handleDeleteContact = useCallback((contact) => {
    setContactBeingDeleted(contact);
    setIsDeleteModalVisible(true);
  }, []);

  function handleCloseDeleteModal() {
    setIsDeleteModalVisible(false);
  }

  async function handleConfirmDeleteContact() {
    try {
      setIsLoadingDelete(true);
      await ContactsService.deleteContact(contactBeingDeleted.id);
      setContacts((prevState) => prevState.filter(
        (contact) => contact.id !== contactBeingDeleted.id,
      ));
      handleCloseDeleteModal();
      toast({
        type: 'success',
        text: 'Contato deletado com sucesso!',
      });
    } catch {
      toast({
        type: 'danger',
        text: 'Ocorreu um erro ao deletar o contato.',
      });
    } finally {
      setIsLoadingDelete(false);
    }
  }

  return {
    isPending,
    isLoading,
    hasError,
    contacts,
    filteredContacts,
    orderBy,
    searchTerm,
    isLoadingDelete,
    isDeleteModalVisible,
    contactBeingDeleted,
    handleTryAgain,
    handleToggleOrderBy,
    handleChangeSearchTerm,
    handleDeleteContact,
    handleCloseDeleteModal,
    handleConfirmDeleteContact,
  };
}
