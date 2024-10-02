import { useState } from 'react';
import { Container } from './styles';
import { ToastMessage } from '../ToastMessage';

export function ToastContainer() {
  const [messages] = useState([
    {
      id: Math.random(),
      text: 'Default toast',
      type: 'default',
    },
    {
      id: Math.random(),
      text: 'Danger toast',
      type: 'danger',
    },
    {
      id: Math.random(),
      text: 'Success toast',
      type: 'success',
    },
  ]);

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
