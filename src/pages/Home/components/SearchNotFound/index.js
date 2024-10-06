/* eslint-disable react/jsx-one-expression-per-line */
import PropTypes from 'prop-types';
import { Container } from './styles';
import magnifierQuestion from '../../../../assets/images/magnifier-question.svg';

export function SearchNotFound({ searchTerm }) {
  return (
    <Container>
      <img src={magnifierQuestion} alt="Icone de lupa com interrogação no meio vermelho" />
      <span>
        Nenhum resultado foi encontrado para <strong>&quot;{searchTerm}&quot;</strong>
      </span>
    </Container>
  );
}

SearchNotFound.propTypes = {
  searchTerm: PropTypes.string.isRequired,
};
