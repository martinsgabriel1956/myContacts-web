import { Container } from './styles';
import { ToastMessage } from '../ToastMessage';
import { useToastContainerController } from './useToastContainerController';

export function ToastContainer() {
  const {
    handleAnimationEnd,
    handleRemoveItem,
    renderList,
  } = useToastContainerController();

  return (
    <Container>
      {renderList((message, { isLeaving }) => (
        <ToastMessage
          key={message.id}
          message={message}
          onRemoveMessage={handleRemoveItem}
          isLeaving={isLeaving}
          onAnimationEnd={handleAnimationEnd}
        />
      ))}
    </Container>
  );
}
