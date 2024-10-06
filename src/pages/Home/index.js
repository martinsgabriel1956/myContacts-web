import { Loader } from '../../components/Loader';
import { InputSearch } from './components/InputSearchContainer';
import { Header } from './components/Header';
import { useHomeController } from './useHomeController';
import {
  Container,
} from './styles';

import { ErrorStatus } from './components/ErrorStatus';
import { EmptyList } from './components/EmptyList';
import { SearchNotFound } from './components/SearchNotFound';
import { ContactsList } from './components/ContactsList';
import { Modal } from '../../components/Modal';

export function Home() {
  const {
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
  } = useHomeController();

  const hasContacts = contacts.length > 0;
  const isListEmpty = !hasError && (!isLoading && !hasContacts);
  const isSearchEmpty = !hasError && (hasContacts && filteredContacts.length < 1);

  return (
    <Container>
      <Loader isLoading={isLoading} />

      {hasContacts && (
        <InputSearch
          onChange={handleChangeSearchTerm}
          value={searchTerm}
        />
      )}

      <Header
        hasError={hasError}
        qtdOfContacts={contacts.length}
        qtdOfFilteredContacts={filteredContacts.length}
      />

      {hasError && <ErrorStatus onTryAgain={handleTryAgain} />}

      {(isListEmpty) && <EmptyList />}
      {(isSearchEmpty) && <SearchNotFound searchTerm={searchTerm} />}

      {hasContacts && (
        <ContactsList
          filteredContacts={filteredContacts}
          orderBy={orderBy}
          onToggleOrderBy={handleToggleOrderBy}
          onDeleteContact={handleDeleteContact}
          contactBeingDeleted={contactBeingDeleted}
        />
      )}

      <Modal
        danger
        title={`Tem certeza que deseja remover o contato ${contactBeingDeleted?.name}?`}
        confirmLabel="Deletar"
        visible={isDeleteModalVisible}
        onConfirm={handleConfirmDeleteContact}
        onCancel={handleCloseDeleteModal}
        isLoading={isLoadingDelete}
      >
        <p>Esta ação não poderá ser desfeita</p>
      </Modal>
    </Container>
  );
}
