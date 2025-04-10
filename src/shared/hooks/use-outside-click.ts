/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, RefObject } from 'react';
import { handleClickOutside } from '@/shared/utils/handle-click-outside';

/**
 * Hook that detects clicks outside of the referenced element and executes a callback function
 * @param ref Reference to the element we want to monitor
 * @param callback Function to execute when a click outside is detected
 * @param dependencies Additional dependencies for the useEffect hook
 */
export function useOutsideClick<T extends HTMLElement = HTMLElement>(
  ref: RefObject<T | null>,
  callback: () => void,
  dependencies: React.DependencyList = []
) {
  useEffect(() => {
    const cleanup = handleClickOutside(ref, callback);
    return cleanup;
  }, [ref, callback, ...dependencies]);
}
