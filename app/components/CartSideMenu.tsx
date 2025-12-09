'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useCart } from '../contexts/CartContext';
import { useLanguage } from '../contexts/LanguageContext';
import CheckoutModal from './CheckoutModal';

export default function CartSideMenu() {
  const {
    items,
    isOpen,
    setIsOpen,
    removeFromCart,
    updateQuantity,
    getTotalPrice,
    promoCode,
    setPromoCode,
    isValidPromoCode,
    getDiscountPercentage,
    getDiscountAmount,
    getFinalPrice,
  } = useCart();
  const { t, language, dir } = useLanguage();
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [promoInput, setPromoInput] = useState('');
  const [promoError, setPromoError] = useState('');

  const handleApplyPromo = () => {
    const code = promoInput.trim();
    if (!code) {
      setPromoError(t('cart.promoCodeRequired'));
      return;
    }

    if (isValidPromoCode(code)) {
      setPromoCode(code);
      setPromoError('');
      setPromoInput('');
    } else {
      setPromoError(t('cart.invalidPromoCode'));
    }
  };

  const handleRemovePromo = () => {
    setPromoCode('');
    setPromoInput('');
    setPromoError('');
  };

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

  const totalPrice = getTotalPrice();
  const discountPercent = getDiscountPercentage();
  const discountAmount = getDiscountAmount();
  const finalPrice = getFinalPrice();
  const hasPromoCode = !!promoCode;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/50 z-40"
        onClick={() => setIsOpen(false)}
      />

      {/* Side Menu */}
      <div
        className={`fixed top-0 ${dir === 'rtl' ? 'left-0' : 'right-0'} h-full w-full max-w-md bg-white shadow-2xl z-50 flex flex-col`}
        dir={dir}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-black">{t('cart.title')}</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label={t('cart.close')}
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
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-16 w-16 text-gray-400 mb-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
              <p className="text-black text-lg">{t('cart.empty')}</p>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => {
                const itemName = language === 'ar' && item.nameAr ? item.nameAr : item.name;
                return (
                  <div
                    key={`${item.id}-${item.size}`}
                    className="flex gap-4 pb-4 border-b border-gray-200 last:border-0"
                  >
                    {/* Image */}
                    <div className="relative w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden">
                      <Image
                        src={item.image}
                        alt={itemName}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Details */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-black mb-1 truncate">
                        {itemName}
                      </h3>
                      <p className="text-sm text-black mb-2">
                        {t('cart.size')}: {item.size}
                      </p>
                      <p className="text-lg font-bold text-black mb-3">
                        {item.price} LE
                      </p>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.size, item.quantity - 1)
                          }
                          className="w-8 h-8 flex items-center justify-center border border-black rounded hover:bg-gray-100 transition-colors text-black"
                          aria-label={t('cart.decreaseQuantity')}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="h-4 w-4"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M19.5 12h-15"
                            />
                          </svg>
                        </button>
                        <span className="w-8 text-center font-medium text-black">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.size, item.quantity + 1)
                          }
                          className="w-8 h-8 flex items-center justify-center border border-black rounded hover:bg-gray-100 transition-colors text-black"
                          aria-label={t('cart.increaseQuantity')}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="h-4 w-4"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 4.5v15m7.5-7.5h-15"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>

                    {/* Remove Button */}
                    <button
                      onClick={() => removeFromCart(item.id, item.size)}
                      className="self-start p-2 text-gray-400 hover:text-red-500 transition-colors"
                      aria-label={t('cart.remove')}
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
                          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                        />
                      </svg>
                    </button>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-gray-200 p-6 space-y-4">
            {/* Promo Code Section */}
            <div className="space-y-2">
              {hasPromoCode ? (
                <div className="flex items-center justify-between p-3 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="h-5 w-5 text-green-600"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="text-sm font-medium text-green-800">
                      {t('cart.promoCodeApplied')}: {promoCode.toUpperCase()}
                    </span>
                    <span className="text-sm text-green-600">
                      (-{discountPercent}%)
                    </span>
                  </div>
                  <button
                    onClick={handleRemovePromo}
                    className="text-green-600 hover:text-green-800 text-sm font-medium"
                  >
                    {t('cart.remove')}
                  </button>
                </div>
              ) : (
                <div className="space-y-2">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={promoInput}
                      onChange={(e) => {
                        setPromoInput(e.target.value);
                        setPromoError('');
                      }}
                      onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                          handleApplyPromo();
                        }
                      }}
                      placeholder={t('cart.enterPromoCode')}
                      className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent placeholder:text-gray-400"
                      dir="ltr"
                    />
                    <button
                      onClick={handleApplyPromo}
                      className="px-4 py-2 bg-gray-200 text-black rounded-lg hover:bg-gray-300 transition-colors font-medium"
                    >
                      {t('cart.apply')}
                    </button>
                  </div>
                  {promoError && (
                    <p className="text-sm text-red-600">{promoError}</p>
                  )}
                </div>
              )}
            </div>

            {/* Price Summary */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-lg">
                <span className="text-black">{t('cart.subtotal')}:</span>
                <span className="text-black font-medium">{totalPrice.toFixed(2)} LE</span>
              </div>
              {hasPromoCode && (
                <>
                  <div className="flex justify-between items-center text-sm text-green-600">
                    <span>{t('cart.discount')} ({promoCode.toUpperCase()}):</span>
                    <span>-{discountAmount.toFixed(2)} LE</span>
                  </div>
                </>
              )}
              <div className="flex justify-between items-center text-xl font-bold pt-2 border-t border-gray-200">
                <span className="text-black">{t('cart.total')}:</span>
                <span className="text-black">{finalPrice.toFixed(2)} LE</span>
              </div>
            </div>

            <button
              className="w-full py-4 px-6 bg-gray-200 text-black font-semibold rounded-lg hover:bg-gray-300 transition-colors"
              onClick={() => {
                setIsCheckoutOpen(true);
              }}
            >
              {t('cart.checkout')}
            </button>
          </div>
        )}
      </div>

      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
      />
    </>
  );
}
