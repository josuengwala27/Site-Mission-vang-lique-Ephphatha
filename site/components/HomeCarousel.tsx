'use client';

import Image from 'next/image';
import { useState, useEffect, useCallback } from 'react';

const SLIDES = [
  { src: '/carousel/a.jpg', alt: 'Ephphatha – communauté et culte' },
  { src: '/carousel/b.jpg', alt: 'Louange et adoration' },
  { src: '/carousel/c.jpg', alt: 'Temps fort Ephphatha' },
  { src: '/carousel/d.jpg', alt: 'Rassemblement et enseignement' },
  { src: '/carousel/e.jpg', alt: 'Célébration et louange' },
  { src: '/carousel/f.jpg', alt: 'Buffet et communion' },
  { src: '/carousel/g.jpg', alt: 'Parole et témoignage' },
  { src: '/carousel/h.jpg', alt: 'Assemblée Ephphatha' },
  { src: '/carousel/i.jpg', alt: 'Prière et recueillement' },
  { src: '/carousel/j.jpg', alt: 'Message et présence' },
];

const INTERVAL_MS = 5000;

export default function HomeCarousel() {
  const [index, setIndex] = useState(0);

  const goTo = useCallback((i: number) => {
    setIndex((i + SLIDES.length) % SLIDES.length);
  }, []);

  useEffect(() => {
    const t = setInterval(() => goTo(index + 1), INTERVAL_MS);
    return () => clearInterval(t);
  }, [index, goTo]);

  return (
    <>
      {SLIDES.map((slide, i) => (
        <div
          key={slide.src}
          className="absolute inset-0 transition-opacity duration-1000 ease-out"
          style={{
            opacity: i === index ? 1 : 0,
            pointerEvents: i === index ? 'auto' : 'none',
          }}
          aria-hidden={i !== index}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            className={`object-cover transition-transform duration-2000 ease-out ${i === index ? 'scale-105' : 'scale-100'}`}
            sizes="100vw"
            priority={i === 0}
          />
        </div>
      ))}
      {/* Indicators */}
      <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center gap-2">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => goTo(i)}
            className="h-2 rounded-full transition-all duration-300 focus:outline-none"
            style={{
              width: i === index ? 24 : 8,
              backgroundColor: i === index ? 'rgb(239, 195, 10)' : 'rgba(255,255,255,0.5)',
            }}
            aria-label={`Photo ${i + 1} sur ${SLIDES.length}`}
          />
        ))}
      </div>
    </>
  );
}
