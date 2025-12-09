'use client';

import ChromaGrid from './ChromaGrid';
import { useLanguage } from '../contexts/LanguageContext';

export default function ExploreOurItems() {
  const { t } = useLanguage();

  const items = [
    {
      image: '/bundles/budle1.jpg',
      title: t('exploreOurItems.bundles.title'),
      subtitle: t('exploreOurItems.bundles.subtitle'),
      handle: '@nfrwear',
      borderColor: '#000',
      gradient: 'linear-gradient(145deg, #000, #000)',
      url: '/bundles',
    },
    {
      image: '/pants/pants1.jpg',
      title: t('exploreOurItems.pants.title'),
      subtitle: t('exploreOurItems.pants.subtitle'),
      handle: '@nfrwear',
      borderColor: '#000',
      gradient: 'linear-gradient(180deg, #000, #000)',
      url: '/pants',
    },
    {
      image: '/hoodies/hoodie1.jpg',
      title: t('exploreOurItems.hoodies.title'),
      subtitle: t('exploreOurItems.hoodies.subtitle'),
      handle: '@nfrwear',
      borderColor: '#000',
      gradient: 'linear-gradient(145deg, #000, #000)',
      url: '/hoodies',
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-4xl font-bold text-black md:text-5xl lg:text-6xl">
          {t('exploreOurItems.title')}
        </h2>
        <div style={{ height: '600px', position: 'relative' }}>
          <ChromaGrid
            items={items}
            radius={300}
            damping={0.45}
            fadeOut={0.6}
            ease="power3.out"
          />
        </div>
      </div>
    </section>
  );
}
