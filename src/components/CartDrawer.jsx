import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingBag, Plus, Minus, Trash2, Tag, ArrowRight, CheckCircle2, Utensils, Sparkles, Truck, Clock } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function CartDrawer() {
  const {
    cartItems,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    clearCart,
    subtotal,
    discountAmount,
    tax,
    total,
    promoCode,
    promoMessage,
    applyPromo,
  } = useCart();

  const [inputCode, setInputCode] = useState('');
  const [orderType, setOrderType] = useState('dastarkhwan'); // 'dastarkhwan' or 'delivery'
  const [isCheckoutSubmitted, setIsCheckoutSubmitted] = useState(false);
  const [receiptData, setReceiptData] = useState(null);

  const handleApply = (e) => {
    e.preventDefault();
    if (inputCode) applyPromo(inputCode);
  };

  const handleCheckout = () => {
    const orderId = 'ZYK-ORD-' + Math.floor(100000 + Math.random() * 900000);
    setReceiptData({
      orderId,
      items: [...cartItems],
      subtotal,
      discountAmount,
      tax,
      total,
      orderType: orderType === 'dastarkhwan' ? 'Table Service Pre-Order' : 'VIP Chauffeur Delivery',
      date: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    });
    setIsCheckoutSubmitted(true);
    clearCart();
  };

  if (!isCartOpen) return null;

  return (
    <AnimatePresence>
      {isCartOpen && (
        <div className="fixed inset-0 z-[90] flex justify-end">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          />

          {/* Drawer Content */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="relative w-full max-w-md bg-royal-obsidian border-l border-gold-500/30 text-stone-200 h-full flex flex-col shadow-2xl z-10"
          >
            {/* Header */}
            <div className="p-4 sm:p-5 border-b border-gold-500/20 flex items-center justify-between bg-royal-surface/80">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-gold-500/20 border border-gold-400/50 flex items-center justify-center text-gold-400">
                  <ShoppingBag className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-base text-white tracking-wide">
                    Royal Pre-Order <span className="text-gold-gradient">Cart</span>
                  </h3>
                  <p className="text-[10px] text-stone-400 uppercase tracking-widest">
                    {cartItems.length} {cartItems.length === 1 ? 'Dish' : 'Dishes'} Selected
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsCartOpen(false)}
                className="w-8 h-8 rounded-full bg-stone-900 border border-gold-500/20 text-stone-400 hover:text-white hover:border-gold-400 flex items-center justify-center transition-all"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Receipt Modal View if submitted */}
            {isCheckoutSubmitted && receiptData ? (
              <div className="p-6 flex-1 overflow-y-auto flex flex-col justify-between">
                <div>
                  <div className="text-center mb-6">
                    <div className="w-14 h-14 mx-auto rounded-full bg-gold-500/20 border-2 border-gold-400 flex items-center justify-center text-gold-400 mb-3 shadow-[0_0_25px_rgba(212,175,55,0.4)]">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h4 className="font-serif text-xl font-bold text-white">Order Confirmed!</h4>
                    <p className="text-xs text-gold-300 tracking-wider mt-1 font-mono">
                      {receiptData.orderId}
                    </p>
                    <p className="text-[11px] text-stone-400 mt-1">
                      {receiptData.orderType} • Placed at {receiptData.date}
                    </p>
                  </div>

                  {/* Status Timeline */}
                  <div className="bg-royal-surface/90 border border-gold-500/20 rounded-xl p-3.5 mb-5 space-y-3">
                    <div className="flex items-center gap-3 text-xs text-gold-300">
                      <div className="w-2.5 h-2.5 rounded-full bg-gold-400 animate-ping" />
                      <span className="font-serif font-medium">Head Chef Preparing Wazwan Feast</span>
                    </div>
                    <div className="w-full bg-stone-800 h-1 rounded-full overflow-hidden">
                      <div className="bg-gold-500 h-full w-2/3 animate-pulse" />
                    </div>
                  </div>

                  {/* Order Items summary */}
                  <div className="space-y-2 border-t border-stone-800 pt-3">
                    <h5 className="text-[10px] uppercase font-serif tracking-widest text-gold-400 mb-2">
                      Order Breakdown
                    </h5>
                    {receiptData.items.map((item) => (
                      <div key={item.id} className="flex justify-between text-xs text-stone-300">
                        <span>
                          {item.quantity}x {item.name}
                        </span>
                        <span className="font-mono text-gold-300 font-medium">{item.price}</span>
                      </div>
                    ))}
                  </div>

                  {/* Pricing Total */}
                  <div className="border-t border-stone-800 mt-4 pt-3 space-y-1.5 text-xs">
                    <div className="flex justify-between text-stone-400">
                      <span>Subtotal</span>
                      <span>${receiptData.subtotal.toFixed(2)}</span>
                    </div>
                    {receiptData.discountAmount > 0 && (
                      <div className="flex justify-between text-emerald-400">
                        <span>VIP Discount</span>
                        <span>-${receiptData.discountAmount.toFixed(2)}</span>
                      </div>
                    )}
                    <div className="flex justify-between text-stone-400">
                      <span>Taxes & Service (8%)</span>
                      <span>${receiptData.tax.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-base font-serif font-bold text-gold-300 border-t border-gold-500/30 pt-2 mt-2">
                      <span>Total Paid</span>
                      <span>${receiptData.total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => {
                    setIsCheckoutSubmitted(false);
                    setReceiptData(null);
                    setIsCartOpen(false);
                  }}
                  className="w-full py-3 mt-6 rounded-xl bg-gold-gradient text-royal-obsidian font-serif font-bold text-sm tracking-wider uppercase shadow-lg hover:brightness-110 transition-all"
                >
                  Done
                </button>
              </div>
            ) : (
              <>
                {/* Order Type Toggle */}
                <div className="px-4 py-3 bg-royal-surface/50 border-b border-gold-500/10 flex gap-2">
                  <button
                    onClick={() => setOrderType('dastarkhwan')}
                    className={`flex-1 py-1.5 px-3 rounded-lg text-xs font-serif flex items-center justify-center gap-1.5 border transition-all ${
                      orderType === 'dastarkhwan'
                        ? 'border-gold-500 bg-gold-500/15 text-gold-300 shadow-sm'
                        : 'border-stone-800 text-stone-400 hover:border-stone-700'
                    }`}
                  >
                    <Utensils className="w-3.5 h-3.5 text-gold-400" />
                    Table Pre-Order
                  </button>
                  <button
                    onClick={() => setOrderType('delivery')}
                    className={`flex-1 py-1.5 px-3 rounded-lg text-xs font-serif flex items-center justify-center gap-1.5 border transition-all ${
                      orderType === 'delivery'
                        ? 'border-gold-500 bg-gold-500/15 text-gold-300 shadow-sm'
                        : 'border-stone-800 text-stone-400 hover:border-stone-700'
                    }`}
                  >
                    <Truck className="w-3.5 h-3.5 text-gold-400" />
                    Royal Delivery
                  </button>
                </div>

                {/* Items List */}
                <div className="flex-1 overflow-y-auto p-4 space-y-3">
                  {cartItems.length === 0 ? (
                    <div className="text-center py-16 text-stone-500">
                      <ShoppingBag className="w-12 h-12 mx-auto mb-3 stroke-1 text-gold-500/30" />
                      <p className="font-serif text-stone-400 text-sm">Your Royal Cart is Empty</p>
                      <p className="text-[11px] text-stone-600 mt-1 max-w-xs mx-auto">
                        Explore our Wazwan & Appetizers menu to add delicacies.
                      </p>
                    </div>
                  ) : (
                    cartItems.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center gap-3 p-2.5 rounded-xl bg-royal-surface/90 border border-gold-500/15 hover:border-gold-500/30 transition-all"
                      >
                        {item.image && (
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-14 h-14 rounded-lg object-cover border border-gold-500/20 shrink-0"
                          />
                        )}
                        <div className="flex-1 min-w-0">
                          <h4 className="font-serif text-xs font-bold text-white truncate">
                            {item.name}
                          </h4>
                          <span className="text-[11px] font-mono text-gold-400 font-semibold block">
                            {item.price}
                          </span>
                        </div>

                        {/* Quantity controls */}
                        <div className="flex items-center gap-1.5 bg-royal-obsidian border border-gold-500/20 rounded-lg p-1">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            className="p-1 hover:text-gold-400 transition-colors text-stone-400"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-xs font-mono font-bold px-1.5 text-stone-200">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="p-1 hover:text-gold-400 transition-colors text-stone-400"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="p-1.5 text-stone-500 hover:text-rose-400 transition-colors"
                          title="Remove item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))
                  )}
                </div>

                {/* Footer Section */}
                {cartItems.length > 0 && (
                  <div className="p-4 border-t border-gold-500/20 bg-royal-surface/90 space-y-3">
                    {/* Promo Code Form */}
                    <form onSubmit={handleApply} className="flex gap-2">
                      <div className="relative flex-1">
                        <Tag className="w-3.5 h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-gold-400" />
                        <input
                          type="text"
                          placeholder="Promo Code (e.g. ROYALZAYKA)"
                          value={inputCode}
                          onChange={(e) => setInputCode(e.target.value)}
                          className="w-full pl-8 pr-3 py-1.5 rounded-lg bg-royal-obsidian border border-gold-500/20 text-xs font-mono uppercase text-stone-200 focus:outline-none focus:border-gold-400"
                        />
                      </div>
                      <button
                        type="submit"
                        className="px-3 py-1.5 rounded-lg bg-gold-500/20 border border-gold-500/40 text-xs font-serif text-gold-300 hover:bg-gold-500 hover:text-royal-obsidian transition-all font-bold"
                      >
                        Apply
                      </button>
                    </form>

                    {promoMessage && (
                      <p
                        className={`text-[10px] font-sans ${
                          promoMessage.type === 'success' ? 'text-emerald-400' : 'text-rose-400'
                        }`}
                      >
                        {promoMessage.text}
                      </p>
                    )}

                    {/* Price Breakdown */}
                    <div className="space-y-1.5 text-xs text-stone-400 pt-1">
                      <div className="flex justify-between">
                        <span>Subtotal</span>
                        <span className="font-mono text-stone-200">${subtotal.toFixed(2)}</span>
                      </div>
                      {discountAmount > 0 && (
                        <div className="flex justify-between text-emerald-400">
                          <span>VIP Discount ({promoCode})</span>
                          <span className="font-mono">-${discountAmount.toFixed(2)}</span>
                        </div>
                      )}
                      <div className="flex justify-between">
                        <span>Taxes & Service Charge (8%)</span>
                        <span className="font-mono text-stone-200">${tax.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between text-sm font-serif font-bold text-white border-t border-gold-500/20 pt-2 mt-1">
                        <span>Total Payable</span>
                        <span className="font-mono text-gold- gradient text-gold-400">
                          ${total.toFixed(2)}
                        </span>
                      </div>
                    </div>

                    {/* Checkout Button */}
                    <button
                      onClick={handleCheckout}
                      className="w-full py-3 rounded-xl bg-gold-gradient text-royal-obsidian font-serif font-bold text-sm tracking-wider uppercase shadow-xl hover:brightness-110 transition-all flex items-center justify-center gap-2"
                    >
                      <span>Checkout & Confirm Pre-Order</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
