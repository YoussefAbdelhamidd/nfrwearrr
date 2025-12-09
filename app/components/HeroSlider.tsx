'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '../contexts/LanguageContext';

interface Slide {
  id: number;
  image: string;
  titleKey: string;
  subtitleKey?: string;
  buttonTextKey: string;
  buttonLink: string;
}

export default function HeroSlider() {
  const { t, dir } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides: Slide[] = [
    {
      id: 1,
      image: '/hero.jpg',
      titleKey: 'hero.slide1.title',
      subtitleKey: 'hero.slide1.subtitle',
      buttonTextKey: 'hero.slide1.button',
      buttonLink: '/shop',
    },
    {
      id: 2,
      image: '/hero.jpg',
      titleKey: 'hero.slide2.title',
      subtitleKey: 'hero.slide2.subtitle',
      buttonTextKey: 'hero.slide2.button',
      buttonLink: '/hoodies',
    },
    {
      id: 3,
      image: '/hero.jpg',
      titleKey: 'hero.slide3.title',
      subtitleKey: 'hero.slide3.subtitle',
      buttonTextKey: 'hero.slide3.button',
      buttonLink: '/pants',
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section dir={dir} className="relative h-screen w-full overflow-hidden">
      {/* Slides */}
      <div className="relative h-full w-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={slide.image}
              alt={t(slide.titleKey)}
              fill
              className="object-cover"
              priority={index === 0}
            />
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-black/30" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="absolute inset-0 z-10 flex items-center justify-center px-4">
        <div className="flex w-full max-w-4xl flex-col items-center justify-center text-center text-white">
          <h1 className="mb-4 text-3xl font-bold md:text-7xl lg:text-8xl">
            {t(slides[currentSlide].titleKey)}
          </h1>
          {slides[currentSlide].subtitleKey && (
            <p className="mb-8 text-base md:text-2xl lg:text-3xl">
              {t(slides[currentSlide].subtitleKey!)}
            </p>
          )}
          <a
            href={slides[currentSlide].buttonLink}
            className="inline-block rounded-full bg-white px-6 py-3 text-base font-semibold text-black transition-all hover:bg-gray-100 hover:scale-105 md:px-8 md:py-4 md:text-lg"
          >
            {t(slides[currentSlide].buttonTextKey)}
          </a>
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className={`absolute ${dir === 'rtl' ? 'right-4' : 'left-4'} top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/20 p-4 text-white backdrop-blur-sm transition-all hover:bg-white/30`}
        aria-label={t('hero.prevSlide')}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className={`absolute ${dir === 'rtl' ? 'left-4' : 'right-4'} top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/20 p-4 text-white backdrop-blur-sm transition-all hover:bg-white/30`}
        aria-label={t('hero.nextSlide')}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
    </section>
  );
}

