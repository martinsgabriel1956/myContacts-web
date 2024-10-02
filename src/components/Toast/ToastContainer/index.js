import { useState, useEffect } from 'react';
import { Container } from './styles';
import { ToastMessage } from '../ToastMessage';

export function ToastContainer() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    function handleAddToast({ detail }) {
      const { type, text } = detail;

      setMessages((prevState) => [
        ...prevState,
        {
          id: Math.random(),
          type,
          text,
        },
      ]);
    }

    document.addEventListener('addToast', handleAddToast);

    return () => {
      document.removeEventListener('addToast', handleAddToast);
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
