'use client';

import { useState, useEffect } from 'react';
import Link from "next/link";
import StaggeredMenu from "./StaggeredMenu";
import { useLanguage } from '../contexts/LanguageContext';
import { useCart } from '../contexts/CartContext';

export default function Navbar() {
  const { language, setLanguage, t, dir } = useLanguage();
  const { getTotalItems, setIsOpen } = useCart();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  
  const cartItemCount = getTotalItems();

  const menuItems = [
    { label: t('nav.home'), ariaLabel: t('common.goToHome'), link: '/' },
    { label: t('nav.shop'), ariaLabel: t('common.viewShop'), link: '/shop' },
    { label: t('nav.hoodies'), ariaLabel: t('common.viewHoodies'), link: '/hoodies' },
    { label: t('nav.pants'), ariaLabel: t('common.viewPants'), link: '/pants' },
    { label: t('nav.bundles'), ariaLabel: t('common.viewBundles'), link: '/bundles' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show navbar when scrolling up or at the top
      if (currentScrollY < lastScrollY || currentScrollY < 10) {
        setIsVisible(true);
      } 
      // Hide navbar when scrolling down
      else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav 
      dir={dir}
      className={`fixed top-0 left-0 right-0 z-50 w-full border-b border-gray-200 bg-white transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-black">
          NFR
        </Link>
        

        {/* Desktop Navigation Tabs */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className="text-sm font-medium text-black transition-colors hover:text-black"
          >
            {t('nav.home')}
          </Link>
          <Link
            href="/shop"
            className="text-sm font-medium text-black transition-colors hover:text-black"
          >
            {t('nav.shop')}
          </Link>
          <Link
            href="/hoodies"
            className="text-sm font-medium text-black transition-colors hover:text-black"
          >
            {t('nav.hoodies')}
          </Link>
          <Link
            href="/pants"
            className="text-sm font-medium text-black transition-colors hover:text-black"
          >
            {t('nav.pants')}
          </Link>
          <Link
            href="/bundles"
            className="text-sm font-medium text-black transition-colors hover:text-black"
          >
            {t('nav.bundles')}
          </Link>
        </div>

        {/* Right side - Cart, Language Switcher and Mobile Menu */}
        <div className="flex items-center gap-4">
          {/* Language Switcher */}
          <button
            onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
            className="hidden md:flex items-center justify-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 transition-colors hover:text-black hover:bg-gray-100"
            aria-label="Switch language"
          >
            {language === 'en' ? 'عربي' : 'EN'}
          </button>

          {/* Cart Icon - Desktop Only */}
          <button
            onClick={() => setIsOpen(true)}
            className="hidden md:flex items-center justify-center text-gray-700 transition-colors hover:text-black relative"
            aria-label={t('nav.cart')}
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
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-black text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {cartItemCount > 99 ? '99+' : cartItemCount}
              </span>
            )}
          </button>

          {/* Mobile Menu - Hamburger */}
          <div className="md:hidden flex items-center gap-2">
            {/* Mobile Language Switcher */}
            <button
              onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
              className="flex items-center justify-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 transition-colors hover:text-black"
              aria-label="Switch language"
            >
              {language === 'en' ? 'عربي' : 'EN'}
            </button>
            <StaggeredMenu
              position={dir === 'rtl' ? 'left' : 'right'}
              items={menuItems}
              displaySocials={false}
              displayItemNumbering={false}
              menuButtonColor="#000"
              openMenuButtonColor="#fff"
              changeMenuColorOnOpen={true}
              colors={['#B19EEF', '#5227FF']}
              accentColor="#ff6b6b"
              onCartClick={() => setIsOpen(true)}
              cartIcon={
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
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                  />
                </svg>
              }
            />
          </div>
        </div>
      </div>
    </nav>
  );
}

