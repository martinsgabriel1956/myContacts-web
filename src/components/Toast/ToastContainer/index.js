import { Container } from './styles';
import ToastMessage from '../ToastMessage';
import { useToastContainerController } from './useToastContainerController';

export function ToastContainer() {
  const {
    handleRemoveItem,
    renderList,
  } = useToastContainerController();

  return (
    <Container>
      {renderList((message, { isLeaving, animatedRef }) => (
        <ToastMessage
          key={message.id}
          message={message}
          onRemoveMessage={handleRemoveItem}
          isLeaving={isLeaving}
          animatedRef={animatedRef}
        />
      ))}
    </Container>
  );
}
