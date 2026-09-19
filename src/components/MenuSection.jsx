import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Flame, Sparkles, Filter, Plus, Check, Info, ShoppingBag } from 'lucide-react';

export default function MenuSection({ onAddToReservation }) {
  const [activeCategory, setActiveCategory] = useState('wazwan');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDish, setSelectedDish] = useState(null);
  const [addedItems, setAddedItems] = useState([]);

  const categories = [
    { id: 'wazwan', label: 'Royal Wazwan' },
    { id: 'appetizers', label: 'Starters & Kebabs' },
    { id: 'breads', label: 'Breads & Saffron Rice' },
    { id: 'desserts', label: 'Royal Sweets' },
    { id: 'beverages', label: 'Kahwa & Drinks' },
  ];

  const menuItems = [
    // Royal Wazwan
    {
      id: 'm1',
      category: 'wazwan',
      name: 'Kashmiri Rogan Josh',
      price: '$38',
      spiciness: 'Medium Warm',
      tags: ['Chef Special', 'Signature'],
      desc: 'Prime lamb shank slow-braised for 8 hours with Kashmiri dried chilis, fennel seed oil, ceylon cardamom, and rattanjot root.',
      ingredients: ['Lamb Shank', 'Kashmiri Red Chili', 'Rattanjot', 'Fennel Powder', 'Cardamom', 'Mustard Oil'],
      image: '/images/wazwan_feast.jpg'
    },
    {
      id: 'm2',
      category: 'wazwan',
      name: 'Wazwan Gushtaba',
      price: '$42',
      spiciness: 'Mild & Velvet',
      tags: ['Royal Tradition'],
      desc: 'Hand-pounded mutton meatballs boiled in aromatic yogurt broth seasoned with wild mint leaves and cloves.',
      ingredients: ['Mutton', 'Yogurt', 'Wild Mint', 'Desi Ghee', 'Cloves'],
      image: '/images/dining_table.jpg'
    },
    {
      id: 'm3',
      category: 'wazwan',
      name: 'Saffron Yakhni',
      price: '$36',
      spiciness: 'Fragrant Mild',
      tags: ['Pampore Saffron'],
      desc: 'Tender rib cuts simmered in yogurt gravy infused with Grade-1 saffron threads and black cardamom.',
      ingredients: ['Lamb Ribs', 'Grade-1 Saffron', 'Yogurt', 'Black Cardamom', 'Bay Leaf'],
      image: '/images/wazwan_feast.jpg'
    },
    {
      id: 'm4',
      category: 'wazwan',
      name: 'Crispy Tabak Maaz',
      price: '$34',
      spiciness: 'Crispy & Rich',
      tags: ['Chef Special'],
      desc: 'Mutton ribs boiled in spiced milk broth, then pan-seared in golden desi ghee until crackling and tender.',
      ingredients: ['Mutton Ribs', 'Spiced Milk', 'Desi Ghee', 'Turmeric'],
      image: '/images/entrance.jpg'
    },
    {
      id: 'm5',
      category: 'wazwan',
      name: 'Kashmiri Rista',
      price: '$35',
      spiciness: 'Rich Spice',
      tags: ['Authentic'],
      desc: 'Succulent meatballs poached in a fiery red gravy crafted from sun-dried Kashmiri red peppers.',
      ingredients: ['Mutton Balls', 'Red Pepper Gravy', 'Asafoetida', 'Dry Ginger'],
      image: '/images/wazwan_feast.jpg'
    },

    // Appetizers & Kebabs
    {
      id: 'm6',
      category: 'appetizers',
      name: 'Tujji Seekh Kebabs',
      price: '$26',
      spiciness: 'Smoky Warm',
      tags: ['Charcoal Grill'],
      desc: 'Skewered tenderized lamb marinated in Kashmiri shallots, crushed garlic, and charred over charcoal.',
      ingredients: ['Lamb Cubes', 'Pran (Kashmiri Shallot)', 'Garlic', 'Charcoal Smoke'],
      image: '/images/dining_table.jpg'
    },
    {
      id: 'm7',
      category: 'appetizers',
      name: 'Crispy Nadru Monji (Lotus Root)',
      price: '$22',
      spiciness: 'Mild Crunchy',
      tags: ['Vegetarian', 'Crispy'],
      desc: 'Thin slices of Dal Lake lotus root dipped in spiced rice flour batter and fried to golden perfection.',
      ingredients: ['Lotus Root', 'Rice Flour Batter', 'Carom Seeds', 'Chili Flakes'],
      image: '/images/exterior.jpg'
    },

    // Breads & Rice
    {
      id: 'm8',
      category: 'breads',
      name: 'Royal Saffron Pulao',
      price: '$24',
      spiciness: 'Aromatic Sweet',
      tags: ['Pampore Saffron', 'Nuts'],
      desc: 'Long-grain aged Basmati rice layered with saffron threads, roasted almonds, cashews, and golden raisins.',
      ingredients: ['Aged Basmati', 'Saffron', 'Almonds', 'Cashews', 'Raisins', 'Ghee'],
      image: '/images/wazwan_feast.jpg'
    },
    {
      id: 'm9',
      category: 'breads',
      name: 'Tandoori Bakarkhani & Sheermal',
      price: '$14',
      spiciness: 'Mild Sweet',
      tags: ['Artisanal Bread'],
      desc: 'Traditional Kashmiri flatbread infused with saffron milk, ghee, and nigella seeds baked in clay tandoor.',
      ingredients: ['Flour', 'Saffron Milk', 'Ghee', 'Nigella Seeds'],
      image: '/images/entrance.jpg'
    },

    // Desserts
    {
      id: 'm10',
      category: 'desserts',
      name: 'Shahi Kashmiri Phirni',
      price: '$18',
      spiciness: 'Sweet Velvet',
      tags: ['Royal Dessert'],
      desc: 'Chilled ground rice pudding cooked with whole milk, saffron, cardamom, served in earthen unglazed clay bowls.',
      ingredients: ['Rice Flour', 'Milk', 'Saffron', 'Pistachios', 'Silver Leaf'],
      image: '/images/dining_table.jpg'
    },
    {
      id: 'm11',
      category: 'desserts',
      name: 'Traditional Shufta',
      price: '$20',
      spiciness: 'Rich Sweet',
      tags: ['Heritage Dessert'],
      desc: 'A royal mix of fried dry fruits, cottage cheese cubes, dates, and candied ginger simmered in saffron honey syrup.',
      ingredients: ['Paneer', 'Dry Fruits', 'Honey', 'Ginger', 'Saffron'],
      image: '/images/kahwa_bar.jpg'
    },

    // Beverages
    {
      id: 'm12',
      category: 'beverages',
      name: 'Gold Leaf Kashmiri Kahwa',
      price: '$15',
      spiciness: 'Warm Herbal',
      tags: ['Signature Drink'],
      desc: 'Green tea brewed in a traditional copper Samovar with saffron strands, crushed green cardamom, cinnamon, and slivered almonds.',
      ingredients: ['Kashmiri Green Tea', 'Saffron', 'Cardamom', 'Cinnamon', 'Almonds'],
      image: '/images/kahwa_bar.jpg'
    },
    {
      id: 'm13',
      category: 'beverages',
      name: 'Pink Nun Chai (Salt Tea)',
      price: '$14',
      spiciness: 'Savory Creamy',
      tags: ['Traditional'],
      desc: 'Classic pink tea brewed with green tea leaves, baking soda, milk, pistachios, and sea salt.',
      ingredients: ['Special Tea Leaves', 'Milk', 'Pistachios', 'Sea Salt'],
      image: '/images/kahwa_bar.jpg'
    }
  ];

  const filteredItems = menuItems.filter((item) => {
    const matchesCat = activeCategory === 'all' || item.category === activeCategory;
    const matchesQuery = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesQuery;
  });

  const handleToggleAdd = (dish) => {
    if (addedItems.includes(dish.id)) {
      setAddedItems(addedItems.filter(id => id !== dish.id));
    } else {
      setAddedItems([...addedItems, dish.id]);
      if (onAddToReservation) onAddToReservation(dish);
    }
  };

  return (
    <section id="menu" className="py-32 bg-royal-obsidian relative border-t border-gold-500/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold-500/30 bg-gold-500/10 mb-4">
              <Sparkles className="w-4 h-4 text-gold-400" />
              <span className="text-xs uppercase tracking-[0.3em] font-serif text-gold-300">
                Curated Royal Gastronomy
              </span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-serif font-extrabold text-white tracking-tight">
              The <span className="text-gold-gradient">Zayka</span> Culinary Menu
            </h2>
          </div>

          {/* Search bar */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
            <input
              type="text"
              placeholder="Search dishes or ingredients..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-full bg-royal-surface border border-gold-500/20 text-stone-200 text-xs focus:outline-none focus:border-gold-500 transition-colors placeholder:text-stone-500"
            />
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-3 overflow-x-auto pb-6 mb-12 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-3 rounded-full font-serif text-xs uppercase tracking-[0.15em] whitespace-nowrap transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-gold-gradient text-royal-obsidian font-bold shadow-[0_0_20px_rgba(212,175,55,0.4)]'
                  : 'bg-royal-surface border border-stone-800 text-stone-400 hover:border-gold-500/40 hover:text-stone-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Menu Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredItems.map((item) => {
              const isAdded = addedItems.includes(item.id);
              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="glass-card rounded-2xl overflow-hidden flex flex-col justify-between group border border-gold-500/15"
                >
                  <div>
                    {/* Image Header */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-royal-surface via-transparent to-transparent" />
                      
                      {/* Price Badge */}
                      <span className="absolute top-4 right-4 bg-royal-obsidian/90 border border-gold-500/40 text-gold-400 px-3 py-1 rounded-full font-serif font-bold text-xs shadow-lg">
                        {item.price}
                      </span>

                      {/* Tags */}
                      <div className="absolute bottom-3 left-4 flex flex-wrap gap-1.5">
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
                    <div className="p-6">
                      <h3 className="text-xl font-serif font-bold text-white mb-2 group-hover:text-gold-300 transition-colors">
                        {item.name}
                      </h3>
                      <p className="text-stone-300 text-xs leading-relaxed mb-4 line-clamp-2">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  {/* Card Footer Actions */}
                  <div className="px-6 pb-6 pt-0 flex items-center justify-between border-t border-gold-500/10 mt-2">
                    <button
                      onClick={() => setSelectedDish(item)}
                      className="text-stone-400 hover:text-gold-400 text-xs font-serif flex items-center gap-1 transition-colors"
                    >
                      <Info className="w-3.5 h-3.5" />
                      Recipe Details
                    </button>

                    <button
                      onClick={() => handleToggleAdd(item)}
                      className={`px-4 py-2 rounded-full font-serif text-[11px] font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all ${
                        isAdded
                          ? 'bg-emerald-600 text-white shadow-[0_0_15px_rgba(16,185,129,0.4)]'
                          : 'bg-gold-500/10 border border-gold-500/40 text-gold-400 hover:bg-gold-gradient hover:text-royal-obsidian'
                      }`}
                    >
                      {isAdded ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          Added to Request
                        </>
                      ) : (
                        <>
                          <Plus className="w-3.5 h-3.5" />
                          Add to Booking
                        </>
                      )}
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Selected Dish Drawer / Modal */}
        {selectedDish && (
          <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-6">
            <div className="glass-card max-w-lg w-full rounded-2xl overflow-hidden relative border border-gold-500/40 shadow-2xl animate-in fade-in zoom-in duration-300">
              <button
                onClick={() => setSelectedDish(null)}
                className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-black/60 border border-gold-500/30 text-stone-300 hover:text-white flex items-center justify-center text-xs"
              >
                ✕
              </button>

              <div className="h-56 relative overflow-hidden">
                <img src={selectedDish.image} alt={selectedDish.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-royal-surface via-transparent to-transparent" />
              </div>

              <div className="p-8">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-serif uppercase tracking-[0.3em] text-gold-400">
                    {selectedDish.category}
                  </span>
                  <span className="text-2xl font-serif font-bold text-gold-gradient">{selectedDish.price}</span>
                </div>

                <h3 className="text-3xl font-serif font-bold text-white mb-3">{selectedDish.name}</h3>
                <p className="text-stone-300 text-xs sm:text-sm leading-relaxed mb-6">{selectedDish.desc}</p>

                <div className="mb-6">
                  <h4 className="text-xs font-serif uppercase tracking-widest text-gold-400 mb-3">Key Ingredients</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedDish.ingredients.map((ing) => (
                      <span key={ing} className="px-3 py-1 rounded-full bg-royal-surface border border-gold-500/20 text-stone-300 text-xs font-sans">
                        {ing}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between border-t border-gold-500/20 pt-6">
                  <div className="text-xs font-serif text-stone-400">
                    Spice Profile: <span className="text-gold-400 font-semibold">{selectedDish.spiciness}</span>
                  </div>
                  <button
                    onClick={() => {
                      handleToggleAdd(selectedDish);
                      setSelectedDish(null);
                    }}
                    className="px-6 py-2.5 rounded-full bg-gold-gradient text-royal-obsidian font-serif text-xs font-bold uppercase tracking-wider shadow-lg shadow-gold-500/20"
                  >
                    {addedItems.includes(selectedDish.id) ? 'Remove Dish' : 'Add to Reservation'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
