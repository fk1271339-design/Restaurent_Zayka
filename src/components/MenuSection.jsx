import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Sparkles, Plus, Check, Info, ShoppingBag, Flame, ShieldCheck, Wine, HeartPulse } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function MenuSection({ onAddToReservation }) {
  const [activeCategory, setActiveCategory] = useState('wazwan');
  const [dietaryFilter, setDietaryFilter] = useState('all'); // 'all', 'vegetarian', 'signature', 'spicy'
  const [sortBy, setSortBy] = useState('default'); // 'default', 'price-asc', 'price-desc'
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDish, setSelectedDish] = useState(null);
  const [addedItems, setAddedItems] = useState([]);

  const { addToCart, cartItems } = useCart();

  const categories = [
    { id: 'all', label: 'All Delicacies' },
    { id: 'wazwan', label: 'Royal Wazwan' },
    { id: 'appetizers', label: 'Starters & Kebabs' },
    { id: 'breads', label: 'Breads & Rice' },
    { id: 'desserts', label: 'Royal Sweets' },
    { id: 'beverages', label: 'Kahwa & Drinks' },
  ];

  const menuItems = [
    {
      id: 'm1',
      category: 'wazwan',
      name: 'Kashmiri Rogan Josh',
      price: '$38',
      spiciness: 'Medium Warm',
      spiceLevel: 3,
      tags: ['Chef Special', 'Signature'],
      desc: 'Prime lamb shank slow-braised with Kashmiri dried chilis, fennel seed oil, ceylon cardamom, and rattanjot root.',
      ingredients: ['Lamb Shank', 'Kashmiri Red Chili', 'Rattanjot', 'Fennel Powder', 'Cardamom'],
      image: '/images/wazwan_feast.jpg',
      nutrition: { calories: '580 kcal', protein: '42g', carbs: '12g', fat: '38g' },
      allergens: ['Halal Certified', 'Gluten Free'],
      pairing: 'Vintage Pinot Noir or Gold Leaf Kashmiri Kahwa',
    },
    {
      id: 'm2',
      category: 'wazwan',
      name: 'Wazwan Gushtaba',
      price: '$42',
      spiciness: 'Mild & Velvet',
      spiceLevel: 1,
      tags: ['Royal Tradition'],
      desc: 'Hand-pounded mutton meatballs boiled in aromatic yogurt broth seasoned with wild mint leaves and cloves.',
      ingredients: ['Mutton', 'Yogurt', 'Wild Mint', 'Desi Ghee', 'Cloves'],
      image: '/images/dining_table.jpg',
      nutrition: { calories: '640 kcal', protein: '48g', carbs: '8g', fat: '44g' },
      allergens: ['Halal Certified', 'Contains Dairy'],
      pairing: 'Chilled Saffron Lassi or Oaky Chardonnay',
    },
    {
      id: 'm3',
      category: 'wazwan',
      name: 'Saffron Yakhni',
      price: '$36',
      spiciness: 'Fragrant Mild',
      spiceLevel: 1,
      tags: ['Pampore Saffron'],
      desc: 'Tender rib cuts simmered in yogurt gravy infused with Grade-1 saffron threads and black cardamom.',
      ingredients: ['Lamb Ribs', 'Grade-1 Saffron', 'Yogurt', 'Black Cardamom'],
      image: '/images/wazwan_feast.jpg',
      nutrition: { calories: '520 kcal', protein: '38g', carbs: '10g', fat: '34g' },
      allergens: ['Halal Certified', 'Contains Dairy', 'Gluten Free'],
      pairing: 'Rose Saffron Kahwa',
    },
    {
      id: 'm4',
      category: 'wazwan',
      name: 'Crispy Tabak Maaz',
      price: '$34',
      spiciness: 'Crispy & Rich',
      spiceLevel: 2,
      tags: ['Chef Special'],
      desc: 'Mutton ribs boiled in spiced milk broth, then pan-seared in golden desi ghee until crackling and tender.',
      ingredients: ['Mutton Ribs', 'Spiced Milk', 'Desi Ghee', 'Turmeric'],
      image: '/images/entrance.jpg',
      nutrition: { calories: '690 kcal', protein: '40g', carbs: '4g', fat: '58g' },
      allergens: ['Halal Certified', 'Contains Dairy'],
      pairing: 'Pink Nun Salt Tea',
    },
    {
      id: 'm5',
      category: 'wazwan',
      name: 'Kashmiri Rista',
      price: '$35',
      spiciness: 'Rich Spice',
      spiceLevel: 4,
      tags: ['Authentic'],
      desc: 'Succulent meatballs poached in a fiery red gravy crafted from sun-dried Kashmiri red peppers.',
      ingredients: ['Mutton Balls', 'Red Pepper Gravy', 'Asafoetida', 'Dry Ginger'],
      image: '/images/wazwan_feast.jpg',
      nutrition: { calories: '590 kcal', protein: '44g', carbs: '14g', fat: '39g' },
      allergens: ['Halal Certified', 'Gluten Free'],
      pairing: 'Syrah Red Wine or Cardamom Kahwa',
    },
    {
      id: 'm6',
      category: 'appetizers',
      name: 'Tujji Seekh Kebabs',
      price: '$26',
      spiciness: 'Smoky Warm',
      spiceLevel: 3,
      tags: ['Charcoal Grill'],
      desc: 'Skewered tenderized lamb marinated in Kashmiri shallots, crushed garlic, and charred over charcoal.',
      ingredients: ['Lamb Cubes', 'Shallot', 'Garlic', 'Charcoal Smoke'],
      image: '/images/dining_table.jpg',
      nutrition: { calories: '410 kcal', protein: '36g', carbs: '6g', fat: '26g' },
      allergens: ['Halal Certified', 'Gluten Free'],
      pairing: 'Mint Chutney & Kashmiri Kahwa',
    },
    {
      id: 'm7',
      category: 'appetizers',
      name: 'Crispy Nadru Monji',
      price: '$22',
      spiciness: 'Mild Crunchy',
      spiceLevel: 1,
      tags: ['Vegetarian'],
      desc: 'Thin slices of Dal Lake lotus root dipped in spiced rice flour batter and fried to golden perfection.',
      ingredients: ['Lotus Root', 'Rice Flour Batter', 'Carom Seeds'],
      image: '/images/exterior.jpg',
      nutrition: { calories: '310 kcal', protein: '8g', carbs: '42g', fat: '14g' },
      allergens: ['100% Vegetarian', 'Vegan', 'Gluten Free'],
      pairing: 'Walnut Mint Chutney',
    },
    {
      id: 'm8',
      category: 'breads',
      name: 'Royal Saffron Pulao',
      price: '$24',
      spiciness: 'Aromatic Sweet',
      spiceLevel: 1,
      tags: ['Pampore Saffron', 'Vegetarian'],
      desc: 'Long-grain aged Basmati rice layered with saffron threads, roasted almonds, cashews, and golden raisins.',
      ingredients: ['Aged Basmati', 'Saffron', 'Almonds', 'Cashews', 'Raisins'],
      image: '/images/wazwan_feast.jpg',
      nutrition: { calories: '450 kcal', protein: '9g', carbs: '68g', fat: '16g' },
      allergens: ['Vegetarian', 'Contains Tree Nuts'],
      pairing: 'Rogan Josh Gravy',
    },
    {
      id: 'm9',
      category: 'breads',
      name: 'Bakarkhani & Sheermal',
      price: '$14',
      spiciness: 'Mild Sweet',
      spiceLevel: 1,
      tags: ['Artisanal Bread', 'Vegetarian'],
      desc: 'Traditional Kashmiri flatbread infused with saffron milk, ghee, and nigella seeds baked in tandoor.',
      ingredients: ['Flour', 'Saffron Milk', 'Ghee', 'Nigella Seeds'],
      image: '/images/entrance.jpg',
      nutrition: { calories: '340 kcal', protein: '7g', carbs: '52g', fat: '12g' },
      allergens: ['Vegetarian', 'Contains Dairy', 'Contains Gluten'],
      pairing: 'Pink Nun Chai',
    },
    {
      id: 'm10',
      category: 'desserts',
      name: 'Shahi Kashmiri Phirni',
      price: '$18',
      spiciness: 'Sweet Velvet',
      spiceLevel: 0,
      tags: ['Royal Dessert', 'Vegetarian'],
      desc: 'Chilled ground rice pudding cooked with whole milk, saffron, cardamom, served in earthen clay bowls.',
      ingredients: ['Rice Flour', 'Milk', 'Saffron', 'Pistachios'],
      image: '/images/dining_table.jpg',
      nutrition: { calories: '380 kcal', protein: '8g', carbs: '54g', fat: '14g' },
      allergens: ['Vegetarian', 'Contains Dairy', 'Contains Nuts'],
      pairing: 'Golden Saffron Tea',
    },
    {
      id: 'm11',
      category: 'desserts',
      name: 'Traditional Shufta',
      price: '$20',
      spiciness: 'Rich Sweet',
      spiceLevel: 0,
      tags: ['Heritage Dessert', 'Vegetarian'],
      desc: 'A royal mix of fried dry fruits, cottage cheese cubes, dates, and candied ginger simmered in honey syrup.',
      ingredients: ['Paneer', 'Dry Fruits', 'Honey', 'Ginger'],
      image: '/images/kahwa_bar.jpg',
      nutrition: { calories: '490 kcal', protein: '14g', carbs: '62g', fat: '22g' },
      allergens: ['Vegetarian', 'Contains Nuts', 'Contains Dairy'],
      pairing: 'Hot Kahwa',
    },
    {
      id: 'm12',
      category: 'beverages',
      name: 'Gold Leaf Kashmiri Kahwa',
      price: '$15',
      spiciness: 'Warm Herbal',
      spiceLevel: 1,
      tags: ['Signature Drink'],
      desc: 'Green tea brewed in copper Samovar with saffron strands, green cardamom, cinnamon, and slivered almonds.',
      ingredients: ['Kashmiri Green Tea', 'Saffron', 'Cardamom', 'Almonds'],
      image: '/images/kahwa_bar.jpg',
      nutrition: { calories: '90 kcal', protein: '2g', carbs: '12g', fat: '4g' },
      allergens: ['Vegan', 'Contains Nuts'],
      pairing: 'Wazwan Feast',
    },
    {
      id: 'm13',
      category: 'beverages',
      name: 'Pink Nun Chai (Salt Tea)',
      price: '$14',
      spiciness: 'Savory Creamy',
      spiceLevel: 1,
      tags: ['Traditional'],
      desc: 'Classic pink tea brewed with green tea leaves, baking soda, milk, pistachios, and sea salt.',
      ingredients: ['Tea Leaves', 'Milk', 'Pistachios', 'Sea Salt'],
      image: '/images/kahwa_bar.jpg',
      nutrition: { calories: '140 kcal', protein: '4g', carbs: '10g', fat: '9g' },
      allergens: ['Vegetarian', 'Contains Dairy', 'Contains Nuts'],
      pairing: 'Bakarkhani Bread',
    },
  ];

  const getNumericPrice = (p) => parseFloat(p.replace(/[^0-9.]/g, '')) || 0;

  const filteredItems = menuItems
    .filter((item) => {
      const matchesCat = activeCategory === 'all' || item.category === activeCategory;
      const matchesQuery =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.desc.toLowerCase().includes(searchQuery.toLowerCase());

      let matchesDietary = true;
      if (dietaryFilter === 'vegetarian') {
        matchesDietary = item.tags.includes('Vegetarian') || item.allergens.some((a) => a.includes('Vegetarian') || a.includes('Vegan'));
      } else if (dietaryFilter === 'signature') {
        matchesDietary = item.tags.some((t) => t.includes('Signature') || t.includes('Chef Special'));
      } else if (dietaryFilter === 'spicy') {
        matchesDietary = (item.spiceLevel || 0) >= 3;
      }

      return matchesCat && matchesQuery && matchesDietary;
    })
    .sort((a, b) => {
      if (sortBy === 'price-asc') return getNumericPrice(a.price) - getNumericPrice(b.price);
      if (sortBy === 'price-desc') return getNumericPrice(b.price) - getNumericPrice(a.price);
      return 0;
    });

  const handleToggleReservation = (dish) => {
    if (addedItems.includes(dish.id)) {
      setAddedItems(addedItems.filter((id) => id !== dish.id));
    } else {
      setAddedItems([...addedItems, dish.id]);
      if (onAddToReservation) onAddToReservation(dish);
    }
  };

  return (
    <section id="menu" className="py-16 md:py-20 bg-royal-obsidian relative border-t border-gold-500/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-gold-500/30 bg-gold-500/10 mb-2">
              <Sparkles className="w-3.5 h-3.5 text-gold-400" />
              <span className="text-[10px] uppercase tracking-[0.25em] font-serif text-gold-300">
                Curated Gastronomy
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-serif font-extrabold text-white tracking-tight">
              The <span className="text-gold-gradient">Zayka</span> Royal Menu
            </h2>
          </div>

          {/* Search bar & Sorting */}
          <div className="flex flex-col sm:flex-row items-center gap-2.5 w-full md:w-auto">
            <div className="relative w-full sm:w-60">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-stone-400" />
              <input
                type="text"
                placeholder="Search dishes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3.5 py-2 rounded-full bg-royal-surface border border-gold-500/20 text-stone-200 text-xs focus:outline-none focus:border-gold-500 transition-colors placeholder:text-stone-500"
              />
            </div>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full sm:w-auto px-3.5 py-2 rounded-full bg-royal-surface border border-gold-500/20 text-stone-300 text-xs focus:outline-none focus:border-gold-400 font-serif"
            >
              <option value="default">Default Sort</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-4 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full font-serif text-xs uppercase tracking-wider whitespace-nowrap transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-gold-gradient text-royal-obsidian font-bold shadow-md'
                  : 'bg-royal-surface border border-stone-800 text-stone-400 hover:border-gold-500/40 hover:text-stone-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Dietary Filters Pill Sub-bar */}
        <div className="flex items-center gap-2 mb-8 text-xs font-serif overflow-x-auto pb-1">
          <span className="text-[10px] uppercase text-gold-400 tracking-wider font-mono mr-1">
            Filter By:
          </span>
          {[
            { id: 'all', label: 'All Items' },
            { id: 'signature', label: 'Chef Signature' },
            { id: 'vegetarian', label: '100% Vegetarian' },
            { id: 'spicy', label: 'Spicy & Fiery' },
          ].map((f) => (
            <button
              key={f.id}
              onClick={() => setDietaryFilter(f.id)}
              className={`px-3 py-1 rounded-full text-[11px] border transition-all ${
                dietaryFilter === f.id
                  ? 'bg-gold-500/20 border-gold-400 text-gold-300 font-bold'
                  : 'bg-royal-surface/50 border-stone-800 text-stone-400 hover:text-stone-200'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Menu Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence>
            {filteredItems.map((item) => {
              const isReserved = addedItems.includes(item.id);
              const inCart = cartItems.some((c) => c.id === item.id);

              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="glass-card rounded-xl overflow-hidden flex flex-col justify-between group border border-gold-500/15"
                >
                  <div>
                    {/* Image Header */}
                    <div className="relative h-36 sm:h-40 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-royal-surface via-transparent to-transparent" />

                      {/* Price Badge */}
                      <span className="absolute top-3 right-3 bg-royal-obsidian/90 border border-gold-500/40 text-gold-400 px-2.5 py-0.5 rounded-full font-serif font-bold text-xs shadow-md">
                        {item.price}
                      </span>

                      {/* Tags */}
                      <div className="absolute bottom-2.5 left-3 flex flex-wrap gap-1">
                        {item.tags.map((t) => (
                          <span
                            key={t}
                            className="bg-gold-500/20 backdrop-blur-md border border-gold-500/30 text-gold-300 text-[9px] uppercase tracking-wider px-2 py-0.5 rounded font-serif"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-4">
                      <h3 className="text-base font-serif font-bold text-white mb-1 group-hover:text-gold-300 transition-colors">
                        {item.name}
                      </h3>
                      <p className="text-stone-300 text-xs leading-snug line-clamp-2">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  {/* Card Footer Actions */}
                  <div className="px-4 pb-4 pt-2 flex items-center justify-between border-t border-gold-500/10 gap-2">
                    <button
                      onClick={() => setSelectedDish(item)}
                      className="text-stone-400 hover:text-gold-400 text-[11px] font-serif flex items-center gap-1 transition-colors"
                    >
                      <Info className="w-3 h-3 text-gold-400" />
                      Details
                    </button>

                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={() => handleToggleReservation(item)}
                        className={`px-2.5 py-1 rounded-full font-serif text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 transition-all ${
                          isReserved
                            ? 'bg-emerald-600 text-white shadow-md'
                            : 'bg-royal-surface border border-gold-500/20 text-stone-300 hover:border-gold-400'
                        }`}
                        title="Pre-select for table reservation"
                      >
                        {isReserved ? <Check className="w-3 h-3" /> : <Plus className="w-3 h-3" />}
                        Table
                      </button>

                      <button
                        onClick={() => addToCart(item)}
                        className={`px-3 py-1 rounded-full font-serif text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 transition-all ${
                          inCart
                            ? 'bg-gold-500 text-royal-obsidian shadow-md'
                            : 'bg-gold-gradient text-royal-obsidian hover:brightness-110 shadow-md'
                        }`}
                      >
                        <ShoppingBag className="w-3 h-3" />
                        Order
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Selected Dish Inspection Modal */}
        {selectedDish && (
          <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
            <div className="glass-card max-w-lg w-full rounded-2xl overflow-hidden relative border border-gold-500/40 shadow-2xl animate-in fade-in zoom-in duration-200 text-stone-200">
              <button
                onClick={() => setSelectedDish(null)}
                className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-black/70 border border-gold-500/40 text-stone-300 hover:text-white flex items-center justify-center text-sm transition-colors"
              >
                ✕
              </button>

              <div className="h-48 relative overflow-hidden">
                <img
                  src={selectedDish.image}
                  alt={selectedDish.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-royal-obsidian via-royal-obsidian/40 to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 flex justify-between items-end">
                  <div>
                    <span className="text-[10px] font-serif uppercase tracking-[0.2em] text-gold-400 font-bold block">
                      {selectedDish.category}
                    </span>
                    <h3 className="text-xl font-serif font-bold text-white leading-tight">
                      {selectedDish.name}
                    </h3>
                  </div>
                  <span className="text-xl font-serif font-bold text-gold-gradient">
                    {selectedDish.price}
                  </span>
                </div>
              </div>

              <div className="p-5 space-y-4 max-h-[70vh] overflow-y-auto">
                <p className="text-stone-300 text-xs leading-relaxed font-sans">
                  {selectedDish.desc}
                </p>

                {/* Key Ingredients */}
                <div>
                  <h4 className="text-[10px] font-serif uppercase tracking-widest text-gold-400 mb-1.5">
                    Authentic Ingredients
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedDish.ingredients.map((ing) => (
                      <span
                        key={ing}
                        className="px-2.5 py-0.5 rounded-full bg-royal-surface border border-gold-500/20 text-stone-300 text-[11px] font-sans"
                      >
                        {ing}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Nutritional Breakdown */}
                {selectedDish.nutrition && (
                  <div className="bg-royal-surface/80 border border-gold-500/20 rounded-xl p-3">
                    <h4 className="text-[10px] font-serif uppercase tracking-widest text-gold-400 mb-2 flex items-center gap-1.5">
                      <HeartPulse className="w-3.5 h-3.5 text-rose-400" />
                      Nutritional Profile
                    </h4>
                    <div className="grid grid-cols-4 gap-2 text-center text-xs font-mono">
                      <div className="bg-royal-obsidian/60 p-1.5 rounded-lg border border-gold-500/10">
                        <span className="block text-[9px] text-stone-400">Calories</span>
                        <span className="font-bold text-gold-300">{selectedDish.nutrition.calories}</span>
                      </div>
                      <div className="bg-royal-obsidian/60 p-1.5 rounded-lg border border-gold-500/10">
                        <span className="block text-[9px] text-stone-400">Protein</span>
                        <span className="font-bold text-emerald-400">{selectedDish.nutrition.protein}</span>
                      </div>
                      <div className="bg-royal-obsidian/60 p-1.5 rounded-lg border border-gold-500/10">
                        <span className="block text-[9px] text-stone-400">Carbs</span>
                        <span className="font-bold text-amber-300">{selectedDish.nutrition.carbs}</span>
                      </div>
                      <div className="bg-royal-obsidian/60 p-1.5 rounded-lg border border-gold-500/10">
                        <span className="block text-[9px] text-stone-400">Fat</span>
                        <span className="font-bold text-stone-300">{selectedDish.nutrition.fat}</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Beverage Pairing */}
                {selectedDish.pairing && (
                  <div className="bg-gold-500/10 border border-gold-500/20 rounded-xl p-3 flex items-center gap-2.5">
                    <Wine className="w-5 h-5 text-gold-400 shrink-0" />
                    <div>
                      <span className="text-[10px] uppercase font-serif font-bold text-gold-400 block">
                        Sommelier Beverage Pairing
                      </span>
                      <p className="text-xs text-stone-200 font-serif italic">
                        {selectedDish.pairing}
                      </p>
                    </div>
                  </div>
                )}

                {/* Footer Action Buttons */}
                <div className="flex items-center justify-between border-t border-gold-500/20 pt-4 gap-3">
                  <div className="text-[11px] font-serif text-stone-400 flex items-center gap-1">
                    <Flame className="w-3.5 h-3.5 text-amber-500" />
                    Spice: <span className="text-gold-400 font-semibold">{selectedDish.spiciness}</span>
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={() => {
                        handleToggleReservation(selectedDish);
                      }}
                      className="px-3 py-2 rounded-full border border-gold-500/40 text-gold-300 hover:bg-gold-500/20 text-xs font-serif font-bold uppercase tracking-wider"
                    >
                      {addedItems.includes(selectedDish.id) ? 'Selected for Table' : '+ Attach to Seat'}
                    </button>
                    <button
                      onClick={() => {
                        addToCart(selectedDish);
                        setSelectedDish(null);
                      }}
                      className="px-5 py-2 rounded-full bg-gold-gradient text-royal-obsidian font-serif text-xs font-bold uppercase tracking-wider shadow-lg hover:brightness-110 flex items-center gap-1.5"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
