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
                href="https://www.tiktok.com/@nfrwear1?_r=1&_t=ZS-926wSJkbbfk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 transition-colors hover:text-white"
                aria-label="TikTok"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 50 50"
                  className="h-6 w-6"
                  fill="currentColor"
                >
                  <path d="M41,4H9C6.243,4,4,6.243,4,9v32c0,2.757,2.243,5,5,5h32c2.757,0,5-2.243,5-5V9C46,6.243,43.757,4,41,4z M37.006,22.323 c-0.227,0.021-0.457,0.035-0.69,0.035c-2.623,0-4.928-1.349-6.269-3.388c0,5.349,0,11.435,0,11.537c0,4.709-3.818,8.527-8.527,8.527 s-8.527-3.818-8.527-8.527s3.818-8.527,8.527-8.527c0.178,0,0.352,0.016,0.527,0.027v4.202c-0.175-0.021-0.347-0.053-0.527-0.053 c-2.404,0-4.352,1.948-4.352,4.352s1.948,4.352,4.352,4.352s4.527-1.894,4.527-4.298c0-0.095,0.042-19.594,0.042-19.594h4.016 c0.378,3.591,3.277,6.425,6.901,6.685V22.323z"/>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/share/1L53JsCnEx/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 transition-colors hover:text-white"
                aria-label="Facebook"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 50 50"
                  className="h-6 w-6"
                  fill="currentColor"
                >
                  <path d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z"/>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/nfrwear?igsh=MTE2cWx0NjM2NHQ1cg=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 transition-colors hover:text-white"
                aria-label="Instagram"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 50 50"
                  className="h-6 w-6"
                  fill="currentColor"
                >
                  <path d="M 16 3 C 8.83 3 3 8.83 3 16 L 3 34 C 3 41.17 8.83 47 16 47 L 34 47 C 41.17 47 47 41.17 47 34 L 47 16 C 47 8.83 41.17 3 34 3 L 16 3 z M 37 11 C 38.1 11 39 11.9 39 13 C 39 14.1 38.1 15 37 15 C 35.9 15 35 14.1 35 13 C 35 11.9 35.9 11 37 11 z M 25 14 C 31.07 14 36 18.93 36 25 C 36 31.07 31.07 36 25 36 C 18.93 36 14 31.07 14 25 C 14 18.93 18.93 14 25 14 z M 25 16 C 20.04 16 16 20.04 16 25 C 16 29.96 20.04 34 25 34 C 29.96 34 34 29.96 34 25 C 34 20.04 29.96 16 25 16 z"/>
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
