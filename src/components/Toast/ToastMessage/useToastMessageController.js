import { useEffect } from 'react';
import { useAnimateUnmount } from '../../../hooks/useAnimateUnmount';

export function useToastMessageController(onRemoveMessage, message, isLeaving) {
  const { shouldRender, elementRef } = useAnimateUnmount(!isLeaving);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onRemoveMessage(message.id);
    }, message.duration || 5000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [message, onRemoveMessage]);

  function handleRemoveToast() {
    onRemoveMessage(message.id);
  }

  return {
    handleRemoveToast,
    shouldRender,
    elementRef,
  };
}
