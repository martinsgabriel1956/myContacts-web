import { useState, useEffect, useRef } from 'react';

export function useModalController(visible) {
  const [shouldRender, setShouldRender] = useState(false);
  const overlayRef = useRef(null);

  useEffect(() => {
    if (visible) {
      setShouldRender(true);
    }

    function handleAnimationEnd() {
      return () => {
        setShouldRender(false);
      };
    }

    const overlayRefElement = overlayRef.current;

    if (!visible && overlayRef.current) {
      overlayRefElement.addEventListener('animationend', handleAnimationEnd());
    }

    return () => {
      if (overlayRefElement) {
        overlayRefElement.removeEventListener(
          'animationend',
          handleAnimationEnd(),
        );
      }
    };
  }, [visible]);

  return {
    shouldRender,
    setShouldRender,
    overlayRef,
  };
}
