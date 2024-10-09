import { useState, useEffect, useCallback } from 'react';
import { toastEventManager } from '../../../utils/toast';

export function useToastContainerController() {
  const [messages, setMessages] = useState([]);
  const [pendingRemovalMessagesIds, setPendingRemovalMessagesIds] = useState([]);

  useEffect(() => {
    function handleAddToast({ type, text, duration }) {
      setMessages((prevState) => [
        ...prevState,
        {
          id: Math.random(),
          type,
          text,
          duration,
        },
      ]);
    }

    toastEventManager.on('addToast', handleAddToast);

    return () => {
      toastEventManager.removeListener('addToast', handleAddToast);
    };
  }, []);

  const handleRemoveMessage = useCallback((id) => {
    setPendingRemovalMessagesIds((prevState) => [...prevState, id]);
  }, []);

  const handleAnimationEnd = useCallback((id) => {
    setMessages((prevState) => prevState.filter((message) => message.id !== id));
    setPendingRemovalMessagesIds((prevState) => prevState.filter(
      (messageId) => messageId !== id,
    ));
  }, []);

  return {
    messages,
    handleRemoveMessage,
    pendingRemovalMessagesIds,
    handleAnimationEnd,
  };
}
