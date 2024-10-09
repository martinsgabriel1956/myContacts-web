import { Container } from './styles';
import { ToastMessage } from '../ToastMessage';
import { useToastContainerController } from './useToastContainerController';

export function ToastContainer() {
  const {
    messages,
    handleRemoveMessage,
    pendingRemovalMessagesIds,
    handleAnimationEnd,
  } = useToastContainerController();

  return (
    <Container>
      {messages.map((message) => (
        <ToastMessage
          key={message.id}
          message={message}
          onRemoveMessage={handleRemoveMessage}
          isLeaving={pendingRemovalMessagesIds.includes(message.id)}
          onAnimationEnd={handleAnimationEnd}
        />
      ))}
    </Container>
  );
}
