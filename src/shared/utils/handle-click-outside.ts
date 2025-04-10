/**
 * Utility to detect clicks outside of a DOM element
 * @module handleClickOutside
 */

import { RefObject } from 'react';

/**
 * Creates and activates a click outside detector for a specific element
 * @param ref - The DOM element or CSS selector of the element to monitor
 * @param callback - Function to execute when a click outside is detected
 * @param options - Additional configuration options
 * @returns A function to remove the listener when it is no longer needed
 */
export function handleClickOutside<T extends HTMLElement = HTMLElement>(
  ref: RefObject<T | null>,
  callback: () => void,
  options: {
    events?: string[];
    active?: boolean;
    capture?: boolean;
  } = {}
): () => void {
  const { events = ['mousedown', 'touchstart'], active = true, capture = false } = options;

  if (!ref.current || !callback) {
    return () => {};
  }

  const handleClick = (event: MouseEvent | TouchEvent) => {
    const targetElement = ref.current;

    if (!targetElement) return;

    const target = event.target as Node;
    if (!targetElement.contains(target)) {
      callback();
    }
  };

  const addListeners = () => {
    if (!active) return;
    events.forEach((event) => {
      document.addEventListener(event, handleClick as EventListener, capture);
    });
  };

  const removeListeners = () => {
    events.forEach((event) => {
      document.removeEventListener(event, handleClick as EventListener, capture);
    });
  };

  addListeners();

  return removeListeners;
}
