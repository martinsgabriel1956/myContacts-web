import { EventManager } from '../lib/EventManager';

export const toastEventManager = new EventManager();

export function toast({ type, text, duration }) {
  toastEventManager.emit('addToast', { type, text, duration });
}
