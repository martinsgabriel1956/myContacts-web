import { Link } from 'react-router-dom';
import PropsTypes from 'prop-types';
import { Container } from './styles';

import arrow from '../../assets/images/icons/arrow.svg';

export function PageHeader({ title }) {
  return (
    <Container>
      <Link to="/">
        <img src={arrow} alt="Back icon" />
        <span>Voltar</span>
      </Link>
      <h1>{title}</h1>
    </Container>
  );
}

PageHeader.propTypes = {
  title: PropsTypes.string.isRequired,
};
