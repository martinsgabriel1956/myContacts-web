import { useState, useEffect } from 'react';
import { Container } from './styles';
import { ToastMessage } from '../ToastMessage';
import { toastEventManager } from '../../../utils/toast';

export function ToastContainer() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    function handleAddToast({ type, text }) {
      setMessages((prevState) => [
        ...prevState,
        {
          id: Math.random(),
          type,
          text,
        },
      ]);
    }

    toastEventManager.on('addToast', handleAddToast);

    return () => {
      toastEventManager.removeListener('addToast', handleAddToast);
    };
  }, []);

  return (
    <Container>
      {messages.map((message) => (
        <ToastMessage
          key={message.id}
          text={message.text}
          type={message.type}
        />
      ))}
    </Container>
  );
}
