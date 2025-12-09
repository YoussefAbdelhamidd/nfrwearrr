'use client';

import { useState } from 'react';
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
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black text-center mb-12">
          {displayTitle}
        </h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => {
            const productName = language === 'ar' && product.nameAr ? product.nameAr : product.name;
            return (
              <div
                key={product.id}
                onClick={() => handleProductClick(product)}
                className="group cursor-pointer bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={product.images && product.images.length > 0 ? product.images[0] : product.image}
                    alt={productName}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-black mb-2">
                    {productName}
                  </h3>
                  <div className="flex items-center gap-2">
                    {product.originalPrice && product.originalPrice > product.price ? (
                      <>
                        <span className="text-lg font-bold text-black">
                          {product.price} LE
                        </span>
                        <span className="text-sm text-gray-500 line-through">
                          {product.originalPrice} LE
                        </span>
                        <span className="px-2 py-1 text-xs font-semibold bg-red-500 text-white rounded">
                          Sale
                        </span>
                      </>
                    ) : (
                      <p className="text-lg font-bold text-black">
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
