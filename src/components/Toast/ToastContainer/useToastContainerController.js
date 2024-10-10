import { useEffect } from 'react';
import { toastEventManager } from '../../../utils/toast';
import { useAnimatedList } from '../../../hooks/useAnimatedList';

export function useToastContainerController() {
  const {
    handleAnimationEnd,
    handleRemoveItem,
    pendingRemovalItemsIds,
    items: messages,
    setItems: setMessages,
  } = useAnimatedList();

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
  }, [setMessages]);

  return {
    messages,
    handleRemoveItem,
    pendingRemovalItemsIds,
    handleAnimationEnd,
  };
}
