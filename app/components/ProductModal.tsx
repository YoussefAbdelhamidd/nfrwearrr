'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useLanguage } from '../contexts/LanguageContext';
import { useCart } from '../contexts/CartContext';

interface Product {
  id: string;
  name: string;
  nameAr?: string;
  description: string;
  descriptionAr?: string;
  price: number;
  originalPrice?: number;
  image: string;
  images?: string[];
  sizes: string[];
  stock?: { [size: string]: number };
}

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (product: Product, size: string) => void;
}

export default function ProductModal({
  product,
  isOpen,
  onClose,
  onAddToCart,
}: ProductModalProps) {
  const { t, language, dir } = useLanguage();
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  const images = product?.images && product.images.length > 0 ? product.images : (product?.image ? [product.image] : []);

  useEffect(() => {
    if (isOpen && product) {
      setSelectedSize(product.sizes[0] || '');
      setCurrentImageIndex(0);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, product]);

  const nextImage = () => {
    if (images.length > 0) {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (images.length > 0) {
      setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    }
  };

  if (!isOpen || !product) return null;

  const handleAddToCart = () => {
    if (selectedSize) {
      onAddToCart(product, selectedSize);
      onClose();
    }
  };

  const productName = language === 'ar' && product.nameAr ? product.nameAr : product.name;
  const productDescription = language === 'ar' && product.descriptionAr ? product.descriptionAr : product.description;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
      onClick={onClose}
      dir={dir}
    >
      <div
        className="relative w-full max-w-4xl bg-white rounded-lg shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-white/90 rounded-full hover:bg-white transition-colors"
          aria-label={t('product.close')}
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {/* Image Section */}
          <div className="relative h-[400px] md:h-[600px] w-full overflow-hidden">
            {images.length > 0 && (
              <>
                <Image
                  src={images[currentImageIndex]}
                  alt={productName}
                  fill
                  className="object-cover"
                  priority
                />
                
                {/* Navigation Arrows */}
                {images.length > 1 && (
                  <>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        prevImage();
                      }}
                      className={`absolute top-1/2 ${dir === 'rtl' ? 'right-4' : 'left-4'} -translate-y-1/2 z-10 p-2 bg-white/80 hover:bg-white rounded-full transition-all`}
                      aria-label="Previous image"
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
                          d={dir === 'rtl' ? "M9 5l7 7-7 7" : "M15 19l-7-7 7-7"}
                        />
                      </svg>
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        nextImage();
                      }}
                      className={`absolute top-1/2 ${dir === 'rtl' ? 'left-4' : 'right-4'} -translate-y-1/2 z-10 p-2 bg-white/80 hover:bg-white rounded-full transition-all`}
                      aria-label="Next image"
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
                          d={dir === 'rtl' ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"}
                        />
                      </svg>
                    </button>
                  </>
                )}
                
                {/* Image Indicators */}
                {images.length > 1 && (
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
                    {images.map((_, index) => (
                      <button
                        key={index}
                        onClick={(e) => {
                          e.stopPropagation();
                          setCurrentImageIndex(index);
                        }}
                        className={`h-2 rounded-full transition-all ${
                          index === currentImageIndex
                            ? 'w-8 bg-white'
                            : 'w-2 bg-white/50 hover:bg-white/75'
                        }`}
                        aria-label={`Go to image ${index + 1}`}
                      />
                    ))}
                  </div>
                )}
              </>
            )}
          </div>

          {/* Content Section */}
          <div className="p-6 md:p-8 flex flex-col justify-between">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                {productName}
              </h2>
              
              <div className="mb-6">
                {product.originalPrice && product.originalPrice > product.price ? (
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="text-2xl md:text-3xl font-semibold text-black">
                      {t('product.price')}: {product.price} LE
                    </span>
                    <span className="text-xl md:text-2xl text-gray-500 line-through">
                      {product.originalPrice} LE
                    </span>
                    <span className="px-3 py-1 text-sm font-semibold bg-red-500 text-white rounded">
                      Sale
                    </span>
                  </div>
                ) : (
                  <p className="text-2xl md:text-3xl font-semibold text-black">
                    {t('product.price')}: {product.price} LE
                  </p>
                )}
              </div>

              <div className="mb-6">
                <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                  {productDescription}
                </p>
              </div>

              {/* Size Selection */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-black mb-3">
                  {t('product.selectSize')}:
                </label>
                <div className="flex flex-wrap gap-3">
                  {product.sizes.map((size) => {
                    const stockCount = product.stock?.[size];
                    const showStock = stockCount !== undefined && stockCount > 0;
                    return (
                      <div key={size} className="flex flex-col items-center gap-1">
                        <button
                          onClick={() => setSelectedSize(size)}
                          className={`px-6 py-3 border-2 rounded-lg font-medium transition-all ${
                            selectedSize === size
                              ? 'border-black bg-black text-white'
                              : 'border-gray-300 bg-white text-black hover:border-black'
                          }`}
                        >
                          {size}
                        </button>
                        {showStock && (
                          <span className="text-xs text-orange-600 font-semibold">
                            {t('product.onlyLeft', { count: stockCount })}
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              disabled={!selectedSize}
              className={`w-full py-4 px-6 rounded-lg font-semibold text-lg transition-all ${
                selectedSize
                  ? 'bg-black text-white hover:bg-gray-800'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              {t('product.addToCart')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
