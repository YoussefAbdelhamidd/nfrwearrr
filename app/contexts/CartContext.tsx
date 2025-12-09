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

// Promo codes with their discount percentages
const PROMO_CODES: Record<string, number> = {
  nfr10: 10,
  sayed10: 10,
  laith10: 10,
  farha10: 10,
  sohaila10: 10,
  thecreator15: 15,
  mega10: 10,
  shehab10: 10,
  mariana10: 10,
  mostafa10: 10,
  gelo10: 10,
  maro10: 10,
  KOU10:10,


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
    if (!promoCode) return 0;
    const normalizedCode = promoCode.toLowerCase().trim();
    return PROMO_CODES[normalizedCode] || 0;
  };

  const getDiscountAmount = () => {
    const total = getTotalPrice();
    const discountPercent = getDiscountPercentage();
    return (total * discountPercent) / 100;
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
