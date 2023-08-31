import { Container, Overlay, Footer } from './styles';
import { Button } from '../Button';

export function Modal() {
  return (
    <Overlay>
      <Container>
        <h1>Título do modal</h1>
        <p>Corpo</p>
        <Footer>
          <button type="button" className="cancel-button">
            Cancelar
          </button>
          <Button type="button">
            Deletar
          </Button>
        </Footer>
      </Container>
    </Overlay>
  );
}
