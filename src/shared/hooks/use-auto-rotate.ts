import { useState, useEffect, useRef, useCallback } from 'react';

export interface AutoRotateOptions {
  interval?: number;
  initialIndex?: number;
  autoStart?: boolean;
}

export function useAutoRotate<T>(
  items: T[],
  { interval = 5000, initialIndex = 0, autoStart = true }: AutoRotateOptions = {}
) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isAutoRotating, setIsAutoRotating] = useState(autoStart);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isVisibleRef = useRef(document.visibilityState === 'visible');
  const isPausedRef = useRef(false);

  const selectedItem = items[currentIndex];

  const selectItem = (index: number) => {
    setCurrentIndex(index);

    if (isAutoRotating) {
      resetTimer();
    }
  };

  const selectItemByValue = (item: T) => {
    const index = items.findIndex((i) => i === item);
    if (index !== -1) {
      selectItem(index);
    }
  };

  const toggleAutoRotate = () => {
    setIsAutoRotating((prev) => !prev);
  };

  const pause = () => {
    setIsPaused(true);
  };

  const resume = () => {
    setIsPaused(false);
  };

  useEffect(() => {
    isPausedRef.current = isPaused;
  }, [isPaused]);

  const resetTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    timerRef.current = setInterval(() => {
      if (isVisibleRef.current && !isPausedRef.current) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
      }
    }, interval);
  }, [interval, items.length]);

  useEffect(() => {
    const handleVisibilityChange = () => {
      isVisibleRef.current = document.visibilityState === 'visible';
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  useEffect(() => {
    if (isAutoRotating) {
      resetTimer();
    } else if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isAutoRotating, interval, items.length, resetTimer]);

  return {
    selectedItem,
    currentIndex,
    isAutoRotating,
    isPaused,
    selectItem,
    selectItemByValue,
    toggleAutoRotate,
    pause,
    resume,
  };
}
