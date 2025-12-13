'use client';

import { useEffect, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export default function WelcomeModal() {
  const [isOpen, setIsOpen] = useState(false);
  const { t, dir } = useLanguage();

  useEffect(() => {
    // Check if user has visited before
    if (typeof window !== 'undefined') {
      const hasVisited = localStorage.getItem('nfr_has_visited');
      if (!hasVisited) {
        // Show modal after a short delay for better UX
        const timer = setTimeout(() => {
          setIsOpen(true);
          // Mark as visited
          localStorage.setItem('nfr_has_visited', 'true');
        }, 500);
        return () => clearTimeout(timer);
      }
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleCopyPromoCode = () => {
    navigator.clipboard.writeText('nfr10');
    // You could add a toast notification here if needed
  };

  return (
    <div
      className="fixed inset-0 z-[70] flex items-center justify-center bg-black/60 p-4"
      onClick={handleClose}
      dir={dir}
    >
      <div
        className="relative w-full max-w-md bg-white rounded-lg shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 p-2 bg-white/90 rounded-full hover:bg-white transition-colors"
          aria-label={t('welcome.close')}
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
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Content */}
        <div className="p-6 md:p-8 text-center">
          {/* Welcome Icon/Emoji */}
          <div className="text-6xl mb-4">🎉</div>
          
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
            {t('welcome.title')}
          </h2>
          
          <p className="text-gray-700 mb-6 leading-relaxed">
            {t('welcome.description')}
          </p>

          {/* Promo Code Box */}
          <div className="mb-6 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border-2 border-purple-200">
            <p className="text-sm text-gray-600 mb-2 font-medium">
              {t('welcome.promoCodeLabel')}
            </p>
            <div className="flex items-center justify-center gap-2">
              <code className="text-2xl font-bold text-purple-700 bg-white px-4 py-2 rounded border-2 border-purple-300">
                NFR10
              </code>
              <button
                onClick={handleCopyPromoCode}
                className="p-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition-colors"
                aria-label={t('welcome.copyPromoCode')}
                title={t('welcome.copyPromoCode')}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184"
                  />
                </svg>
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              {t('welcome.discountInfo')}
            </p>
          </div>

          {/* CTA Button */}
          <button
            onClick={handleClose}
            className="w-full py-3 px-6 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors"
          >
            {t('welcome.getStarted')}
          </button>
        </div>
      </div>
    </div>
  );
}
