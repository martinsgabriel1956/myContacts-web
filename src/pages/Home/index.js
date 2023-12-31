import { Link } from 'react-router-dom';

import {
  Card, Container, InputSearchContainer, Header, ListContainer,
} from './styles';

import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';

export function Home() {
  return (
    <Container>
      <InputSearchContainer>
        <input type="text" placeholder="Pesquise pelo nome" />
      </InputSearchContainer>

      <Header>
        <strong>3 contatos</strong>
        <Link to="/new">Novo contato</Link>
      </Header>

      <ListContainer>
        <header>
          <button type="button">
            <span>Nome</span>
            <img src={arrow} alt="Icone de Seta" />
          </button>
        </header>

        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Gabriel Martins</strong>
              <small>instagram</small>
            </div>
            <span>martinsgabriel1956@gmail.com</span>
            <span>(21) 99999-9999</span>
          </div>

          <div className="actions">
            <Link to="/edit/2132">
              <img src={edit} alt="Edit" />
            </Link>
            <button
              type="button"
            >
              <img src={trash} alt="Delete" />
            </button>
          </div>
        </Card>
      </ListContainer>

    </Container>
  );
}

fetch('http://localhost:3000')
  .then((response) => console.log({ response }))
  .catch((error) => console.log({ error }));
