/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-nested-ternary */
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button } from '../../components/Button';
import { Loader } from '../../components/Loader';
import { Modal } from '../../components/Modal';

import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';
import sad from '../../assets/images/sad.svg';
import emptyBox from '../../assets/images/emptyBox.svg';
import magnifierQuestion from '../../assets/images/magnifier-question.svg';

import {
  Container as StyledContainer,
  Card,
  EmptyListContainer,
  Header,
  InputSearchContainer,
  ListHeader,
  SearchNotFoundContainer,
  ErrorContainer,
} from './styles';

export function Presentation({
  values,
  actions,
}) {
  const {
    contactBeingDeleted,
    isLoadingDelete,
    isLoading,
    contacts,
    filteredContacts,
    searchTerm,
    hasError,
    orderBy,
    isDeleteModalVisible,
  } = values;
  const {
    handleChangeSearchTerm,
    handleTryAgain,
    handleToggleOrderBy,
    handleDeleteContact,
    handleConfirmDeleteContact,
    handleCloseDeleteModal,
  } = actions;

  return (
    <StyledContainer>
      <Loader isLoading={isLoading} />
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
      {contacts.length > 0 && (
      <InputSearchContainer>
        <input value={searchTerm} onChange={handleChangeSearchTerm} type="text" placeholder="Pesquise pelo nome" />
      </InputSearchContainer>
      )}

      <Header
        justifyContent={(
        hasError
          ? 'flex-end'
          : (
            contacts.length > 0
              ? 'space-between'
              : 'center'
          )
      )}
      >
        {!!(!hasError && contacts.length) && (
        <strong>
          {filteredContacts.length}
          {' '}
          {filteredContacts.length === 1 ? 'contato' : 'contatos'}
        </strong>
        )}
        <Link to="/new">Novo contato</Link>
      </Header>

      {hasError && (
      <ErrorContainer>
        <img src={sad} alt="Icone de tristeza da cor vermelha" />
        <div className="details">
          <strong>Ocorreu um erro ao obter os seus contatos!</strong>
          <Button
            type="button"
            onClick={handleTryAgain}
          >
            Tentar novamente
          </Button>
        </div>
      </ErrorContainer>
      )}

      {!hasError && (
      <>
        {(contacts.length < 1 && !isLoading) && (
        <EmptyListContainer>
          <img src={emptyBox} alt="Icone de caixa vazia" />
          <p>
            Você ainda não tem nenhum contato cadastrado!
            Clique no botão
            {' '}
            <strong>”Novo contato”</strong>
            {' '}
            à cima para cadastrar o seu primeiro!
          </p>
        </EmptyListContainer>
        )}

        {(contacts.length > 0 && filteredContacts.length < 1) && (
        <SearchNotFoundContainer>
          <img src={magnifierQuestion} alt="Icone de lupa com interrogação no meio vermelho" />
          <span>
            Nenhum resultado foi encontrado para
            {' '}
            <strong>
              &quot;
              {searchTerm}
              &quot
            </strong>
            ;
          </span>
        </SearchNotFoundContainer>
        )}

        {filteredContacts.length > 0 && (
        <ListHeader
          orderBy={orderBy}
        >
          <button
            type="button"
            onClick={handleToggleOrderBy}
          >
            <span>Nome</span>
            <img src={arrow} alt="Icone de Seta" />
          </button>
        </ListHeader>
        )}

        {filteredContacts.map((contact) => (
          <Card key={contact.id}>
            <div className="info">
              <div className="contact-name">
                <strong>{contact.name}</strong>
                {contact.category.name && (
                <small>{contact.category.name}</small>
                )}
              </div>
              <span>{contact.email}</span>
              <span>{contact.phone}</span>
            </div>

            <div className="actions">
              <Link to={`/edit/${contact.id}`}>
                <img src={edit} alt="Edit" />
              </Link>
              <button
                type="button"
                onClick={() => handleDeleteContact(contact)}
              >
                <img src={trash} alt="Delete" />
              </button>
            </div>
          </Card>
        ))}
      </>
      )}

    </StyledContainer>
  );
}

Presentation.propTypes = {
  values: PropTypes.shape({
    isLoadingDelete: PropTypes.bool,
    isLoading: PropTypes.bool,
    hasError: PropTypes.bool,
    isDeleteModalVisible: PropTypes.bool,
    orderBy: PropTypes.oneOf(['asc', 'desc']),
    searchTerm: PropTypes.string,
    contactBeingDeleted: PropTypes.shape(),
    contacts: PropTypes.shape(),
    filteredContacts: PropTypes.shape(),
  }).isRequired,
  actions: PropTypes.shape({
    handleChangeSearchTerm: PropTypes.func,
    handleTryAgain: PropTypes.func,
    handleToggleOrderBy: PropTypes.func,
    handleDeleteContact: PropTypes.func,
    handleConfirmDeleteContact: PropTypes.func,
    handleCloseDeleteModal: PropTypes.func,
  }).isRequired,
};
