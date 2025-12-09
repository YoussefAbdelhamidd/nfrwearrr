'use client';

import { useEffect } from 'react';
import { useCart } from '../contexts/CartContext';
import { useLanguage } from '../contexts/LanguageContext';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CheckoutModal({ isOpen, onClose }: CheckoutModalProps) {
  const {
    items,
    getTotalPrice,
    promoCode,
    getDiscountPercentage,
    getDiscountAmount,
    getFinalPrice,
  } = useCart();
  const { t, language, dir } = useLanguage();

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
  // Format: Remove leading 0 and add country code (Egypt: +20)
  const phoneNumber = '201210462988';

  // Format cart items into WhatsApp message
  const formatWhatsAppMessage = () => {
    const isArabic = language === 'ar';
    
    let message = isArabic 
      ? 'مرحباً، أريد الطلب التالي:\n\n'
      : 'Hello, I would like to place the following order:\n\n';

    items.forEach((item, index) => {
      const itemName = isArabic && item.nameAr ? item.nameAr : item.name;
      const sizeLabel = isArabic ? 'المقاس' : 'Size';
      const quantityLabel = isArabic ? 'الكمية' : 'Quantity';
      const priceLabel = isArabic ? 'السعر' : 'Price';
      
      message += `${index + 1}. ${itemName}\n`;
      message += `   ${sizeLabel}: ${item.size}\n`;
      message += `   ${quantityLabel}: ${item.quantity}\n`;
      message += `   ${priceLabel}: ${item.price} LE\n`;
      message += `   ${isArabic ? 'المجموع' : 'Subtotal'}: ${(item.price * item.quantity).toFixed(2)} LE\n\n`;
    });

    message += '---\n';
    
    const subtotalLabel = isArabic ? 'المجموع الفرعي' : 'Subtotal';
    message += `${subtotalLabel}: ${totalPrice.toFixed(2)} LE\n`;

    if (hasPromoCode) {
      const promoLabel = isArabic ? 'كود الخصم' : 'Promo Code';
      const discountLabel = isArabic ? 'الخصم' : 'Discount';
      message += `${promoLabel}: ${promoCode.toUpperCase()}\n`;
      message += `${discountLabel} (${discountPercent}%): -${discountAmount.toFixed(2)} LE\n`;
    }

    const totalLabel = isArabic ? 'الإجمالي الكلي' : 'Total';
    message += `${totalLabel}: ${finalPrice.toFixed(2)} LE`;

    return encodeURIComponent(message);
  };

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${formatWhatsAppMessage()}`;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 p-4"
      onClick={onClose}
      dir={dir}
    >
      <div
        className="relative w-full max-w-md bg-white rounded-lg shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-white/90 rounded-full hover:bg-white transition-colors"
          aria-label={t('checkout.close')}
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
        <div className="p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-4 text-center">
            {t('checkout.title')}
          </h2>
          
          <p className="text-gray-700 text-center mb-6 leading-relaxed">
            {t('checkout.description')}
          </p>

          {/* Order Summary */}
          <div className="mb-6 p-4 bg-gray-50 rounded-lg">
            <h3 className="font-semibold text-black mb-3">
              {t('checkout.orderSummary')}:
            </h3>
            <div className="space-y-2 text-sm">
              {items.map((item) => {
                const itemName = language === 'ar' && item.nameAr ? item.nameAr : item.name;
                return (
                  <div key={`${item.id}-${item.size}`} className="flex justify-between">
                    <span className="text-gray-700">
                      {itemName} ({item.size}) × {item.quantity}
                    </span>
                    <span className="font-medium text-black">
                      {(item.price * item.quantity).toFixed(2)} LE
                    </span>
                  </div>
                );
              })}
              <div className="border-t border-gray-300 pt-2 mt-2 space-y-1">
                <div className="flex justify-between">
                  <span className="text-gray-700">{t('checkout.subtotal')}:</span>
                  <span className="text-black font-medium">{totalPrice.toFixed(2)} LE</span>
                </div>
                {hasPromoCode && (
                  <>
                    <div className="flex justify-between text-green-600">
                      <span>{t('checkout.promoCode')}: {promoCode.toUpperCase()}</span>
                      <span>-{discountAmount.toFixed(2)} LE</span>
                    </div>
                  </>
                )}
                <div className="flex justify-between font-bold pt-1 border-t border-gray-300">
                  <span className="text-black">{t('checkout.total')}:</span>
                  <span className="text-black">{finalPrice.toFixed(2)} LE</span>
                </div>
              </div>
            </div>
          </div>

          {/* WhatsApp Button */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 w-full py-4 px-6 bg-[#25D366] text-white font-semibold rounded-lg hover:bg-[#20BA5A] transition-colors shadow-lg"
            onClick={onClose}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-6 w-6"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            <span>{t('checkout.continueOnWhatsApp')}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
