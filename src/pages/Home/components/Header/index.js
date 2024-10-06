/* eslint-disable no-nested-ternary */
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Container } from './styles';

export function Header({ hasError, qtdOfContacts, qtdOfFilteredContacts }) {
  const alignment = hasError
    ? 'flex-end'
    : (
      qtdOfContacts > 0
        ? 'space-between'
        : 'center'
    );

  return (
    <Container
      justifyContent={alignment}
    >
      {!!(!hasError && qtdOfContacts) && (
      <strong>
        {qtdOfFilteredContacts}
        {' '}
        {qtdOfFilteredContacts === 1 ? 'contato' : 'contatos'}
      </strong>
      )}
      <Link to="/new">Novo contato</Link>
    </Container>
  );
}

Header.propTypes = {
  hasError: PropTypes.bool.isRequired,
  qtdOfContacts: PropTypes.number.isRequired,
  qtdOfFilteredContacts: PropTypes.number.isRequired,
};
