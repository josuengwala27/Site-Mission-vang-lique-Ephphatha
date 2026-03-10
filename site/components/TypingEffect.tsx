'use client';

import { useState, useEffect } from 'react';

interface TypingEffectProps {
  text: string;
  className?: string;
  speed?: number;
  pauseAtEnd?: number;
}

export function TypingEffect({ text, className = '', speed = 120, pauseAtEnd = 2500 }: TypingEffectProps) {
  const [display, setDisplay] = useState('');
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!text) return;

    if (index === text.length && !isDeleting) {
      const t = setTimeout(() => setIsDeleting(true), pauseAtEnd);
      return () => clearTimeout(t);
    }

    if (index === 0 && isDeleting) {
      setIsDeleting(false);
      return;
    }

    const delay = isDeleting ? speed / 2 : speed;
    const t = setTimeout(() => {
      if (isDeleting) {
        setIndex((i) => i - 1);
        setDisplay(text.slice(0, index - 1));
      } else {
        setIndex((i) => i + 1);
        setDisplay(text.slice(0, index + 1));
      }
    }, delay);

    return () => clearTimeout(t);
  }, [text, index, isDeleting, speed, pauseAtEnd]);

  useEffect(() => {
    setDisplay('');
    setIndex(0);
    setIsDeleting(false);
  }, [text]);

  return (
    <span className={className}>
      {display}
      <span className="typing-cursor inline-block" aria-hidden />
    </span>
  );
}
