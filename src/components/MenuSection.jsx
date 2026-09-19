import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Sparkles, Plus, Check, Info } from 'lucide-react';

export default function MenuSection({ onAddToReservation }) {
  const [activeCategory, setActiveCategory] = useState('wazwan');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDish, setSelectedDish] = useState(null);
  const [addedItems, setAddedItems] = useState([]);

  const categories = [
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
      tags: ['Chef Special', 'Signature'],
      desc: 'Prime lamb shank slow-braised with Kashmiri dried chilis, fennel seed oil, ceylon cardamom, and rattanjot root.',
      ingredients: ['Lamb Shank', 'Kashmiri Red Chili', 'Rattanjot', 'Fennel Powder', 'Cardamom'],
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
      ingredients: ['Lamb Ribs', 'Grade-1 Saffron', 'Yogurt', 'Black Cardamom'],
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
    {
      id: 'm6',
      category: 'appetizers',
      name: 'Tujji Seekh Kebabs',
      price: '$26',
      spiciness: 'Smoky Warm',
      tags: ['Charcoal Grill'],
      desc: 'Skewered tenderized lamb marinated in Kashmiri shallots, crushed garlic, and charred over charcoal.',
      ingredients: ['Lamb Cubes', 'Shallot', 'Garlic', 'Charcoal Smoke'],
      image: '/images/dining_table.jpg'
    },
    {
      id: 'm7',
      category: 'appetizers',
      name: 'Crispy Nadru Monji',
      price: '$22',
      spiciness: 'Mild Crunchy',
      tags: ['Vegetarian'],
      desc: 'Thin slices of Dal Lake lotus root dipped in spiced rice flour batter and fried to golden perfection.',
      ingredients: ['Lotus Root', 'Rice Flour Batter', 'Carom Seeds'],
      image: '/images/exterior.jpg'
    },
    {
      id: 'm8',
      category: 'breads',
      name: 'Royal Saffron Pulao',
      price: '$24',
      spiciness: 'Aromatic Sweet',
      tags: ['Pampore Saffron'],
      desc: 'Long-grain aged Basmati rice layered with saffron threads, roasted almonds, cashews, and golden raisins.',
      ingredients: ['Aged Basmati', 'Saffron', 'Almonds', 'Cashews', 'Raisins'],
      image: '/images/wazwan_feast.jpg'
    },
    {
      id: 'm9',
      category: 'breads',
      name: 'Bakarkhani & Sheermal',
      price: '$14',
      spiciness: 'Mild Sweet',
      tags: ['Artisanal Bread'],
      desc: 'Traditional Kashmiri flatbread infused with saffron milk, ghee, and nigella seeds baked in tandoor.',
      ingredients: ['Flour', 'Saffron Milk', 'Ghee', 'Nigella Seeds'],
      image: '/images/entrance.jpg'
    },
    {
      id: 'm10',
      category: 'desserts',
      name: 'Shahi Kashmiri Phirni',
      price: '$18',
      spiciness: 'Sweet Velvet',
      tags: ['Royal Dessert'],
      desc: 'Chilled ground rice pudding cooked with whole milk, saffron, cardamom, served in earthen clay bowls.',
      ingredients: ['Rice Flour', 'Milk', 'Saffron', 'Pistachios'],
      image: '/images/dining_table.jpg'
    },
    {
      id: 'm11',
      category: 'desserts',
      name: 'Traditional Shufta',
      price: '$20',
      spiciness: 'Rich Sweet',
      tags: ['Heritage Dessert'],
      desc: 'A royal mix of fried dry fruits, cottage cheese cubes, dates, and candied ginger simmered in honey syrup.',
      ingredients: ['Paneer', 'Dry Fruits', 'Honey', 'Ginger'],
      image: '/images/kahwa_bar.jpg'
    },
    {
      id: 'm12',
      category: 'beverages',
      name: 'Gold Leaf Kashmiri Kahwa',
      price: '$15',
      spiciness: 'Warm Herbal',
      tags: ['Signature Drink'],
      desc: 'Green tea brewed in copper Samovar with saffron strands, green cardamom, cinnamon, and slivered almonds.',
      ingredients: ['Kashmiri Green Tea', 'Saffron', 'Cardamom', 'Almonds'],
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
      ingredients: ['Tea Leaves', 'Milk', 'Pistachios', 'Sea Salt'],
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
              The <span className="text-gold-gradient">Zayka</span> Menu
            </h2>
          </div>

          {/* Search bar */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-stone-400" />
            <input
              type="text"
              placeholder="Search dishes or ingredients..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3.5 py-2 rounded-full bg-royal-surface border border-gold-500/20 text-stone-200 text-xs focus:outline-none focus:border-gold-500 transition-colors placeholder:text-stone-500"
            />
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 scrollbar-none">
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

        {/* Menu Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
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
                  <div className="px-4 pb-4 pt-2 flex items-center justify-between border-t border-gold-500/10">
                    <button
                      onClick={() => setSelectedDish(item)}
                      className="text-stone-400 hover:text-gold-400 text-[11px] font-serif flex items-center gap-1 transition-colors"
                    >
                      <Info className="w-3 h-3" />
                      Recipe
                    </button>

                    <button
                      onClick={() => handleToggleAdd(item)}
                      className={`px-3 py-1.5 rounded-full font-serif text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 transition-all ${
                        isAdded
                          ? 'bg-emerald-600 text-white shadow-md'
                          : 'bg-gold-500/10 border border-gold-500/40 text-gold-400 hover:bg-gold-gradient hover:text-royal-obsidian'
                      }`}
                    >
                      {isAdded ? (
                        <>
                          <Check className="w-3 h-3" />
                          Added
                        </>
                      ) : (
                        <>
                          <Plus className="w-3 h-3" />
                          Add Dish
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
          <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
            <div className="glass-card max-w-md w-full rounded-xl overflow-hidden relative border border-gold-500/40 shadow-2xl animate-in fade-in zoom-in duration-200">
              <button
                onClick={() => setSelectedDish(null)}
                className="absolute top-3 right-3 z-10 w-7 h-7 rounded-full bg-black/60 border border-gold-500/30 text-stone-300 hover:text-white flex items-center justify-center text-xs"
              >
                ✕
              </button>

              <div className="h-44 relative overflow-hidden">
                <img src={selectedDish.image} alt={selectedDish.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-royal-surface via-transparent to-transparent" />
              </div>

              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-serif uppercase tracking-[0.2em] text-gold-400">
                    {selectedDish.category}
                  </span>
                  <span className="text-xl font-serif font-bold text-gold-gradient">{selectedDish.price}</span>
                </div>

                <h3 className="text-xl font-serif font-bold text-white mb-2">{selectedDish.name}</h3>
                <p className="text-stone-300 text-xs leading-relaxed mb-4">{selectedDish.desc}</p>

                <div className="mb-4">
                  <h4 className="text-[10px] font-serif uppercase tracking-widest text-gold-400 mb-2">Key Ingredients</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedDish.ingredients.map((ing) => (
                      <span key={ing} className="px-2.5 py-0.5 rounded-full bg-royal-surface border border-gold-500/20 text-stone-300 text-[11px] font-sans">
                        {ing}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between border-t border-gold-500/20 pt-4">
                  <div className="text-[11px] font-serif text-stone-400">
                    Spice: <span className="text-gold-400 font-semibold">{selectedDish.spiciness}</span>
                  </div>
                  <button
                    onClick={() => {
                      handleToggleAdd(selectedDish);
                      setSelectedDish(null);
                    }}
                    className="px-5 py-2 rounded-full bg-gold-gradient text-royal-obsidian font-serif text-[11px] font-bold uppercase tracking-wider shadow-md"
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
