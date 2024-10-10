import { Container } from './styles';
import { ToastMessage } from '../ToastMessage';
import { useToastContainerController } from './useToastContainerController';

export function ToastContainer() {
  const {
    messages,
    handleAnimationEnd,
    handleRemoveItem,
    pendingRemovalItemsIds,
  } = useToastContainerController();

  return (
    <Container>
      {messages.map((message) => (
        <ToastMessage
          key={message.id}
          message={message}
          onRemoveMessage={handleRemoveItem}
          isLeaving={pendingRemovalItemsIds.includes(message.id)}
          onAnimationEnd={handleAnimationEnd}
        />
      ))}
    </Container>
  );
}
