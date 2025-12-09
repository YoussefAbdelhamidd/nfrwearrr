'use client';

import Image from 'next/image';
import { useLanguage } from '../contexts/LanguageContext';

export default function AboutUs() {
  const { t, dir } = useLanguage();

  return (
    <section dir={dir} className="bg-white py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Text Content - Left in LTR, Right in RTL */}
          <div className={`flex flex-col justify-center ${dir === 'rtl' ? 'lg:order-2' : 'lg:order-1'}`}>
            <h2 className="mb-6 text-3xl font-bold text-black md:text-4xl lg:text-5xl">
              {t('aboutUs.title')}
            </h2>
            <p className="mb-4 text-base leading-relaxed text-gray-700 md:text-lg">
              {t('aboutUs.description1')}
            </p>
            <p className="mb-4 text-base leading-relaxed text-gray-700 md:text-lg">
              {t('aboutUs.description2')}
            </p>
            <p className="text-base leading-relaxed text-gray-700 md:text-lg">
              {t('aboutUs.description3')}
            </p>
          </div>

          {/* Image - Right in LTR, Left in RTL */}
          <div className={`relative h-[400px] w-full overflow-hidden rounded-lg md:h-[500px] lg:h-[600px] ${dir === 'rtl' ? 'lg:order-1' : 'lg:order-2'}`}>
            <Image
               src="/aboutus.jpg"
              alt={t('aboutUs.imageAlt')}
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
