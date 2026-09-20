import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const saved = localStorage.getItem('zayka_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [promoCode, setPromoCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [promoMessage, setPromoMessage] = useState(null);
  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    try {
      localStorage.setItem('zayka_cart', JSON.stringify(cartItems));
    } catch (e) {
      // ignore
    }
  }, [cartItems]);

  const addToast = (message, type = 'gold') => {
    const id = Date.now() + Math.random();
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4000);
  };

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const addToCart = (dish, quantity = 1) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === dish.id);
      if (existing) {
        return prev.map((item) =>
          item.id === dish.id ? { ...item, quantity: item.quantity + quantity } : item
        );
      } else {
        return [...prev, { ...dish, quantity }];
      }
    });
    addToast(`Added "${dish.name}" to your Royal Cart!`, 'gold');
  };

  const removeFromCart = (dishId) => {
    setCartItems((prev) => prev.filter((item) => item.id !== dishId));
    addToast('Item removed from cart', 'info');
  };

  const updateQuantity = (dishId, delta) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.id === dishId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  const clearCart = () => {
    setCartItems([]);
    setPromoCode('');
    setDiscountPercent(0);
    setPromoMessage(null);
  };

  const applyPromo = (code) => {
    const cleanCode = code.trim().toUpperCase();
    if (cleanCode === 'ROYALZAYKA') {
      setDiscountPercent(15);
      setPromoCode(cleanCode);
      setPromoMessage({ text: 'VIP 15% Royal Discount Applied!', type: 'success' });
      addToast('15% VIP Promo Code Applied!', 'success');
    } else if (cleanCode === 'WELCOME10') {
      setDiscountPercent(10);
      setPromoCode(cleanCode);
      setPromoMessage({ text: '10% First Time Guest Discount Applied!', type: 'success' });
      addToast('10% Welcome Promo Code Applied!', 'success');
    } else {
      setPromoMessage({ text: 'Invalid Promo Code. Try ROYALZAYKA', type: 'error' });
    }
  };

  const getNumericPrice = (priceStr) => {
    if (typeof priceStr === 'number') return priceStr;
    if (!priceStr) return 0;
    return parseFloat(priceStr.replace(/[^0-9.]/g, '')) || 0;
  };

  const subtotal = cartItems.reduce((acc, item) => {
    return acc + getNumericPrice(item.price) * item.quantity;
  }, 0);

  const discountAmount = (subtotal * discountPercent) / 100;
  const tax = (subtotal - discountAmount) * 0.08;
  const total = subtotal - discountAmount + tax;
  const itemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        isCartOpen,
        setIsCartOpen,
        promoCode,
        discountPercent,
        promoMessage,
        applyPromo,
        subtotal,
        discountAmount,
        tax,
        total,
        itemCount,
        toasts,
        addToast,
        removeToast,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
