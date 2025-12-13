'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import ProductModal from './ProductModal';
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

interface ProductGalleryProps {
  products: Product[];
  title: string;
  titleAr?: string;
}

export default function ProductGallery({ products, title, titleAr }: ProductGalleryProps) {
  const { language, dir } = useLanguage();
  const { addToCart } = useCart();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Trigger animations on mount
    setIsVisible(true);
  }, []);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleAddToCart = (product: Product, size: string) => {
    addToCart({
      id: product.id,
      name: product.name,
      nameAr: product.nameAr,
      price: product.price,
      image: product.images && product.images.length > 0 ? product.images[0] : product.image,
      size: size,
    });
  };

  const displayTitle = language === 'ar' && titleAr ? titleAr : title;

  return (
    <div className="min-h-screen bg-white py-20" dir={dir}>
      <div className="container mx-auto px-4">
        <h1 
          ref={titleRef}
          className={`text-4xl md:text-5xl lg:text-6xl font-bold text-black text-center mb-12 transition-all duration-700 ${
            isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0'
          }`}
        >
          {displayTitle}
        </h1>
        
        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product, index) => {
            const productName = language === 'ar' && product.nameAr ? product.nameAr : product.name;
            return (
              <div
                key={product.id}
                onClick={() => handleProductClick(product)}
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  opacity: isVisible ? 1 : 0
                } as React.CSSProperties}
                className={`group cursor-pointer bg-white rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-[1.02] ${
                  isVisible ? 'animate-slide-in-scale' : ''
                }`}
              >
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={product.images && product.images.length > 0 ? product.images[0] : product.image}
                    alt={productName}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-2 right-2 px-2 py-1 text-xs font-semibold bg-black text-white rounded z-10">
                    Unisex
                  </div>
                </div>
                <div className="p-4 transition-all duration-300 group-hover:bg-gray-50">
                  <h3 className="text-xl font-semibold text-black mb-2 transition-colors duration-300 group-hover:text-gray-800">
                    {productName}
                  </h3>
                  <div className="flex items-center gap-2">
                    {product.originalPrice && product.originalPrice > product.price ? (
                      <>
                        <span className="text-lg font-bold text-black transition-transform duration-300 group-hover:scale-105">
                          {product.price} LE
                        </span>
                        <span className="text-sm text-gray-500 line-through">
                          {product.originalPrice} LE
                        </span>
                        <span className="px-2 py-1 text-xs font-semibold bg-red-500 text-white rounded animate-pulse">
                          Sale
                        </span>
                      </>
                    ) : (
                      <p className="text-lg font-bold text-black transition-transform duration-300 group-hover:scale-105">
                        {product.price} LE
                      </p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <ProductModal
          product={selectedProduct}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onAddToCart={handleAddToCart}
        />
      </div>
    </div>
  );
}
