'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

export interface CartItem {
  id: string;
  name: string;
  nameAr?: string;
  price: number;
  image: string;
  size: string;
  quantity: number;
}

// Promo codes - valid codes list
const PROMO_CODES: Record<string, boolean> = {
  nfr10: true,
  sayed10: true,
  laith10: true,
  farha10: true,
  sohaila10: true,
  thecreator15: true,
  mega10: true,
  shehab10: true,
  mariana10: true,
  mostafa10: true,
  gelo10: true,
  maro10: true,
  KOU10: true,
  fermo10: true,
};

interface CartContextType {
  items: CartItem[];
  addToCart: (item: Omit<CartItem, 'quantity'>) => void;
  removeFromCart: (id: string, size: string) => void;
  updateQuantity: (id: string, size: string, quantity: number) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
  promoCode: string;
  setPromoCode: (code: string) => void;
  isValidPromoCode: (code: string) => boolean;
  getDiscountPercentage: () => number;
  getDiscountAmount: () => number;
  getFinalPrice: () => number;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [promoCode, setPromoCode] = useState<string>('');

  const addToCart = (item: Omit<CartItem, 'quantity'>) => {
    setItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex(
        (i) => i.id === item.id && i.size === item.size
      );

      if (existingItemIndex >= 0) {
        // Item already exists, increase quantity
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex].quantity += 1;
        return updatedItems;
      } else {
        // New item, add to cart
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });
    setIsOpen(true);
  };

  const removeFromCart = (id: string, size: string) => {
    setItems((prevItems) =>
      prevItems.filter((item) => !(item.id === id && item.size === size))
    );
  };

  const updateQuantity = (id: string, size: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id, size);
      return;
    }

    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.size === size
          ? { ...item, quantity }
          : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const getTotalItems = () => {
    return items.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const isValidPromoCode = (code: string) => {
    const normalizedCode = code.toLowerCase().trim();
    return normalizedCode in PROMO_CODES;
  };

  const getDiscountPercentage = () => {
    // This function is kept for backward compatibility but returns 0
    // Discount is now calculated as fixed amounts per item
    return 0;
  };

  const getDiscountAmount = () => {
    if (!promoCode) return 0;
    const normalizedCode = promoCode.toLowerCase().trim();
    if (!PROMO_CODES[normalizedCode]) return 0;

    // Calculate discount: 50 L3 per single item, 100 L3 per bundle
    let discount = 0;
    items.forEach((item) => {
      const isBundle = item.id.toLowerCase().startsWith('bundle');
      const discountPerItem = isBundle ? 100 : 50;
      discount += discountPerItem * item.quantity;
    });

    return discount;
  };

  const getFinalPrice = () => {
    const total = getTotalPrice();
    const discount = getDiscountAmount();
    return total - discount;
  };

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getTotalItems,
        getTotalPrice,
        promoCode,
        setPromoCode,
        isValidPromoCode,
        getDiscountPercentage,
        getDiscountAmount,
        getFinalPrice,
        isOpen,
        setIsOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
