'use client';

import { useLanguage } from '../contexts/LanguageContext';

export default function Footer() {
  const { dir, t } = useLanguage();

  return (
    <footer dir={dir} className="bg-black text-white py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Section */}
          <div className="flex flex-col">
            <h3 className="mb-4 text-2xl font-bold">NFR</h3>
            <p className="text-sm text-gray-400">
              {t('footer.brandDescription')}
            </p>
          </div>

          {/* Contact Section */}
          <div className="flex flex-col">
            <h4 className="mb-4 text-lg font-semibold">{t('footer.contactUs')}</h4>
            <div className="space-y-3">
              <a 
                href="tel:+201234567890" 
                className="flex items-center gap-3 text-sm text-gray-300 transition-colors hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
                <span dir="ltr">+20 120 462 988</span>
              </a>
              <a 
                href="mailto:contact@nfrwear.com" 
                className="flex items-center gap-3 text-sm text-gray-300 transition-colors hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
                <span dir="ltr">contact@nfrwear.com</span>
              </a>
              <div className="flex items-start gap-3 text-sm text-gray-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-5 w-5 mt-0.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
                <span dir="ltr">Alexandria, Egypt</span>
              </div>
            </div>
          </div>

          {/* Social Media Section */}
          <div className="flex flex-col">
            <h4 className="mb-4 text-lg font-semibold">{t('footer.followUs')}</h4>
            <div className="flex items-center gap-4">
              <a
                href="https://www.tiktok.com/@nfrwear"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 transition-colors hover:text-white"
                aria-label="TikTok"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="h-6 w-6"
                >
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/nfrwear"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 transition-colors hover:text-white"
                aria-label="Instagram"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 16.5a4.5 4.5 0 100-9 4.5 4.5 0 000 9z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 7.5h.01M4.5 12h15m-15 0a7.5 7.5 0 1015 0 7.5 7.5 0 00-15 0z"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col">
            <h4 className="mb-4 text-lg font-semibold">{t('footer.quickLinks')}</h4>
            <div className="space-y-2">
              <a href="/" className="block text-sm text-gray-300 transition-colors hover:text-white">
                {t('nav.home')}
              </a>
              <a href="/hoodies" className="block text-sm text-gray-300 transition-colors hover:text-white">
                {t('nav.hoodies')}
              </a>
              <a href="/pants" className="block text-sm text-gray-300 transition-colors hover:text-white">
                {t('nav.pants')}
              </a>
              <a href="/bundles" className="block text-sm text-gray-300 transition-colors hover:text-white">
                {t('nav.bundles')}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              {t('footer.copyright').replace('{year}', new Date().getFullYear().toString())}
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="transition-colors hover:text-white">
                {t('footer.privacyPolicy')}
              </a>
              <a href="#" className="transition-colors hover:text-white">
                {t('footer.termsOfService')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
