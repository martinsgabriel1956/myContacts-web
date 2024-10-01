import { Container } from './styles';
import { ToastMessage } from '../ToastMessage';

export function ToastContainer() {
  return (
    <Container>
      <ToastMessage text="Default toast" />
      <ToastMessage type="danger" text="Error toast" />
      <ToastMessage type="success" text="Success toast" />
    </Container>
  );
}
