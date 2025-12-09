'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import Link from 'next/link';

interface MenuItem {
  label: string;
  ariaLabel: string;
  link: string;
}

interface SocialItem {
  label: string;
  link: string;
}

interface StaggeredMenuProps {
  position?: 'left' | 'right';
  items: MenuItem[];
  socialItems?: SocialItem[];
  displaySocials?: boolean;
  displayItemNumbering?: boolean;
  menuButtonColor?: string;
  openMenuButtonColor?: string;
  changeMenuColorOnOpen?: boolean;
  colors?: string[];
  logoUrl?: string;
  accentColor?: string;
  onMenuOpen?: () => void;
  onMenuClose?: () => void;
  cartIcon?: React.ReactNode;
}

export default function StaggeredMenu({
  position = 'right',
  items,
  socialItems = [],
  displaySocials = false,
  displayItemNumbering = false,
  menuButtonColor = '#000',
  openMenuButtonColor = '#fff',
  changeMenuColorOnOpen = true,
  colors = ['#B19EEF', '#5227FF'],
  logoUrl,
  accentColor = '#ff6b6b',
  onMenuOpen,
  onMenuClose,
  cartIcon,
}: StaggeredMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (isOpen) {
      onMenuOpen?.();
      // Animate menu in
      gsap.to(overlayRef.current, {
        opacity: 1,
        duration: 0.3,
        ease: 'power2.out',
      });
      gsap.to(menuRef.current, {
        x: 0,
        backgroundColor: '#000000',
        opacity: 1,
        duration: 0.5,
        ease: 'power3.out',
      });
      // Stagger menu items
      gsap.fromTo(
        itemsRef.current?.children || [],
        {
          opacity: 0,
          x: position === 'right' ? 50 : -50,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.4,
          stagger: 0.1,
          ease: 'power2.out',
        }
      );
    } else {
      onMenuClose?.();
      // Animate menu out
      gsap.to(overlayRef.current, {
        opacity: 0,
        duration: 0.3,
        ease: 'power2.in',
      });
      gsap.to(menuRef.current, {
        x: position === 'right' ? '100%' : '-100%',
        backgroundColor: '#000000',
        opacity: 1,
        duration: 0.5,
        ease: 'power3.in',
      });
    }
  }, [isOpen, position, onMenuOpen, onMenuClose]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Hamburger Button */}
      <button
        ref={buttonRef}
        onClick={toggleMenu}
        className="relative z-[110] flex flex-col gap-1.5 p-2"
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        <span
          className={`h-0.5 w-6 transition-all duration-300 ${
            isOpen ? 'rotate-45 translate-y-2' : ''
          }`}
          style={{
            backgroundColor: changeMenuColorOnOpen && isOpen ? openMenuButtonColor : menuButtonColor,
          }}
        />
        <span
          className={`h-0.5 w-6 transition-all duration-300 ${
            isOpen ? 'opacity-0' : ''
          }`}
          style={{ backgroundColor: menuButtonColor }}
        />
        <span
          className={`h-0.5 w-6 transition-all duration-300 ${
            isOpen ? '-rotate-45 -translate-y-2' : ''
          }`}
          style={{
            backgroundColor: changeMenuColorOnOpen && isOpen ? openMenuButtonColor : menuButtonColor,
          }}
        />
      </button>

      {/* Overlay */}
      <div
        ref={overlayRef}
        className={`fixed inset-0 z-[90] bg-black md:bg-black/50 ${
          isOpen ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
        style={{ opacity: 0 }}
        onClick={handleItemClick}
      />

      {/* Menu Panel */}
      <div
        ref={menuRef}
        className={`fixed top-0 bottom-0 z-[100] h-screen w-full md:w-80 ${
          position === 'right' ? 'right-0' : 'left-0'
        }`}
        style={{
          transform: `translateX(${position === 'right' ? '100%' : '-100%'})`,
          backgroundColor: '#000000',
          opacity: 1,
          minHeight: '100vh',
        }}
      >
        <div className="flex h-full flex-col p-8 bg-black">
          {/* Logo */}
          {logoUrl && (
            <div className="mb-12">
              <img src={logoUrl} alt="Logo" className="h-12 w-auto" />
            </div>
          )}

          {/* Menu Items */}
          <div ref={itemsRef} className="flex flex-1 flex-col gap-6">
            {items.map((item, index) => (
              <Link
                key={item.link}
                href={item.link}
                onClick={handleItemClick}
                className="group flex items-center gap-4 text-2xl font-semibold text-white transition-transform hover:translate-x-2"
                aria-label={item.ariaLabel}
              >
                {displayItemNumbering && (
                  <span
                    className="text-sm opacity-50"
                    style={{ color: accentColor }}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>
                )}
                <span>{item.label}</span>
              </Link>
            ))}
            
            {/* Cart Icon */}
            {cartIcon && (
              <div className="mt-4 pt-6 border-t border-white/20">
                <button
                  onClick={handleItemClick}
                  className="flex items-center gap-4 text-2xl font-semibold text-white transition-transform hover:translate-x-2"
                  aria-label="Shopping cart"
                >
                  {displayItemNumbering && (
                    <span
                      className="text-sm opacity-50"
                      style={{ color: accentColor }}
                    >
                      {String(items.length + 1).padStart(2, '0')}
                    </span>
                  )}
                  <span className="flex items-center gap-2">
                    Cart
                    <span className="text-white/70">
                      {cartIcon}
                    </span>
                  </span>
                </button>
              </div>
            )}
          </div>

          {/* Social Items */}
          {displaySocials && socialItems.length > 0 && (
            <div className="flex gap-4 border-t border-white/20 pt-8">
              {socialItems.map((social) => (
                <a
                  key={social.label}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/70 transition-colors hover:text-white"
                >
                  {social.label}
                </a>
              ))}
            </div>
          )}
          </div>
        </div>
      </div>
    </>
  );
}

