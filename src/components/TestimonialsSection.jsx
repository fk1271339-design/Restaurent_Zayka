import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, CheckCircle2, Award, MessageSquarePlus, Sparkles, UserCheck, X } from 'lucide-react';

export default function TestimonialsSection() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [userReviews, setUserReviews] = useState([]);
  const [newAuthor, setNewAuthor] = useState('');
  const [newRating, setNewRating] = useState(5);
  const [newComment, setNewComment] = useState('');
  const [newDish, setNewDish] = useState('Rogan Josh');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const initialReviews = [
    {
      id: 1,
      category: 'critics',
      author: 'Chef Rajesh Vikram',
      role: 'Michelin Star Guest Judge & Food Critic',
      rating: 5,
      date: 'September 2026',
      quote: 'Zayka delivers unmatched Kashmiri Wazwan craftsmanship. The hand-pounded Gushtaba and Pampore Saffron Yakhni are among the finest renditions of royal Indian heritage cuisine in the world.',
      favoriteDish: 'Wazwan Gushtaba & Saffron Yakhni',
      verified: true
    },
    {
      id: 2,
      category: 'couples',
      author: 'Aarav & Meera Malhotra',
      role: 'Anniversary Celebration Guests',
      rating: 5,
      date: 'August 2026',
      quote: 'The romantic candlelit booth in the Chinar Pavilion was magical! The live Santoor music paired with authentic Kahwa and melt-in-the-mouth Rogan Josh made our anniversary unforgettable.',
      favoriteDish: 'Rogan Josh & Golden Kahwa',
      verified: true
    },
    {
      id: 3,
      category: 'banquets',
      author: 'Dr. Tariq Shah',
      role: 'Royal Dastarkhwan Host',
      rating: 5,
      date: 'July 2026',
      quote: 'We hosted a private family royal banquet for 30 guests. The authentic copper Trami platters and warm Kashmiri hospitality were flawless. Every guest was blown away by the richness of flavor.',
      favoriteDish: '36-Item Royal Dastarkhwan',
      verified: true
    },
    {
      id: 4,
      category: 'critics',
      author: 'Priya Sharma',
      role: 'Senior Food & Wine Editor',
      rating: 5,
      date: 'September 2026',
      quote: 'From the moment you step through the mahogany arches into the candlelit sanctuary, Zayka transports you straight to Srinagar palaces. The Saffron Smoked Old Fashioned is a masterpiece.',
      favoriteDish: 'Saffron Smoked Cocktail',
      verified: true
    },
    {
      id: 5,
      category: 'couples',
      author: 'Vikram & Ananya Rao',
      role: 'Weekend Fine Dining',
      rating: 5,
      date: 'August 2026',
      quote: 'The Tabak Maaz (crispy rib rack simmered in milk and clarified butter) was divine! Seamless service, mesmerizing soundscape, and pristine ambience. 10/10 dining experience.',
      favoriteDish: 'Crispy Tabak Maaz',
      verified: true
    },
    {
      id: 6,
      category: 'banquets',
      author: 'Karan Singhania',
      role: 'Corporate Gala Host',
      rating: 5,
      date: 'June 2026',
      quote: 'An absolute benchmark for luxury fine dining. The attention to historical culinary details, samovar tea service, and prompt staff made our event a resounding triumph.',
      favoriteDish: 'Kahwa Bar Lounge Selection',
      verified: true
    }
  ];

  const allReviews = [...userReviews, ...initialReviews];

  const filteredReviews = activeCategory === 'all' 
    ? allReviews 
    : allReviews.filter(r => r.category === activeCategory);

  const handleSubmitReview = (e) => {
    e.preventDefault();
    const newRev = {
      id: Date.now(),
      category: 'all',
      author: newAuthor || 'Royal Guest',
      role: 'Verified Diner',
      rating: Number(newRating),
      date: 'Just Now',
      quote: newComment,
      favoriteDish: newDish,
      verified: true
    };
    setUserReviews([newRev, ...userReviews]);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setIsReviewModalOpen(false);
      setNewAuthor('');
      setNewComment('');
    }, 1500);
  };

  return (
    <section id="reviews" className="py-16 md:py-24 bg-royal-obsidian relative overflow-hidden border-t border-gold-500/15">
      {/* Ambient background light */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-gold-500/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-300 text-xs font-serif uppercase tracking-[0.2em] mb-4">
            <Award className="w-3.5 h-3.5 text-gold-400" />
            Guest Impressions & Critical Acclaim
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-extrabold text-white tracking-tight mb-4">
            Words From Our <span className="text-gold-gradient">Royal Guests</span>
          </h2>
          <p className="text-stone-400 text-sm sm:text-base font-sans leading-relaxed">
            Discover why food critics, culinary connoisseurs, and couples rate Zayka as the premier royal Kashmiri dining destination.
          </p>
        </div>

        {/* Overall Rating Score Card Banner */}
        <div className="mb-12 glass-card p-6 sm:p-8 rounded-3xl border border-gold-500/30 shadow-2xl grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-center md:text-left divide-y md:divide-y-0 md:divide-x divide-gold-500/20">
          
          <div className="space-y-1">
            <div className="text-4xl sm:text-5xl font-serif font-extrabold text-gold-gradient">
              4.9 / 5.0
            </div>
            <div className="flex items-center justify-center md:justify-start gap-1 text-gold-400 py-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-gold-400" />
              ))}
            </div>
            <p className="text-stone-400 text-xs font-serif">
              Based on 1,480+ Verified Reviews
            </p>
          </div>

          <div className="pt-4 md:pt-0 md:px-6 space-y-1">
            <div className="flex items-center justify-center md:justify-start gap-2 text-gold-300 font-serif font-bold text-base sm:text-lg">
              <Award className="w-5 h-5 text-gold-400" /> Michelin Recommended
            </div>
            <p className="text-stone-300 text-xs leading-relaxed font-sans">
              "An exemplary showcase of authentic 36-course Kashmiri Wazwan heritage."
            </p>
          </div>

          <div className="pt-4 md:pt-0 md:pl-6 flex flex-col items-center md:items-end justify-center">
            <button
              onClick={() => setIsReviewModalOpen(true)}
              className="px-6 py-3 rounded-full bg-gold-500/15 border border-gold-400/50 text-gold-300 hover:bg-gold-500 hover:text-royal-obsidian font-serif text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-2 shadow-lg"
            >
              <MessageSquarePlus className="w-4 h-4" />
              Write A Guest Review
            </button>
          </div>

        </div>

        {/* Filter Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          {[
            { id: 'all', label: 'All Reviews' },
            { id: 'critics', label: 'Food Critics' },
            { id: 'couples', label: 'Romantic Couples' },
            { id: 'banquets', label: 'Royal Banquets' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id)}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs font-serif font-semibold tracking-wider transition-all duration-300 ${
                activeCategory === tab.id
                  ? 'bg-gold-gradient text-royal-obsidian font-bold shadow-lg shadow-gold-500/20'
                  : 'bg-royal-surface border border-stone-800 text-stone-400 hover:border-gold-500/40 hover:text-stone-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Reviews Cards Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredReviews.map((rev) => (
              <motion.div
                key={rev.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="glass-card p-6 rounded-2xl border border-gold-500/20 hover:border-gold-500/40 transition-all duration-300 flex flex-col justify-between group relative shadow-xl"
              >
                <div>
                  {/* Top Quote Icon & Stars */}
                  <div className="flex items-center justify-between mb-3">
                    <Quote className="w-7 h-7 text-gold-500/30 group-hover:text-gold-400/60 transition-colors" />
                    <div className="flex items-center gap-0.5 text-gold-400">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-gold-400" />
                      ))}
                    </div>
                  </div>

                  {/* Review Text */}
                  <p className="text-stone-200 text-xs sm:text-sm font-sans leading-relaxed italic mb-4">
                    "{rev.quote}"
                  </p>
                </div>

                <div>
                  {/* Favorite Dish Tag */}
                  <div className="mb-3 py-1 px-2.5 rounded-lg bg-gold-500/10 border border-gold-500/20 text-[10px] text-gold-300 font-serif font-medium truncate">
                    <span className="text-stone-400">Favorite:</span> {rev.favoriteDish}
                  </div>

                  {/* Author Meta */}
                  <div className="pt-3 border-t border-gold-500/15 flex items-center justify-between">
                    <div>
                      <div className="text-xs font-serif font-bold text-white flex items-center gap-1.5">
                        {rev.author}
                        {rev.verified && (
                          <CheckCircle2 className="w-3.5 h-3.5 text-gold-400" title="Verified Guest" />
                        )}
                      </div>
                      <div className="text-[10px] text-stone-400 font-sans mt-0.5">
                        {rev.role}
                      </div>
                    </div>
                    <span className="text-[9px] text-stone-400 font-mono">
                      {rev.date}
                    </span>
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Review Submission Modal */}
      {isReviewModalOpen && (
        <div 
          className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200"
          onClick={() => setIsReviewModalOpen(false)}
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass-card p-6 sm:p-8 rounded-2xl border border-gold-500/40 shadow-2xl max-w-lg w-full relative my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsReviewModalOpen(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-royal-surface border border-gold-500/30 text-stone-400 hover:text-white flex items-center justify-center transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            {!isSubmitted ? (
              <form onSubmit={handleSubmitReview} className="space-y-4">
                <div className="flex items-center gap-2 mb-1">
                  <Sparkles className="w-5 h-5 text-gold-400" />
                  <h3 className="text-lg font-serif font-bold text-white">
                    Share Your <span className="text-gold-gradient">Zayka Experience</span>
                  </h3>
                </div>
                <p className="text-xs text-stone-400 font-sans">
                  We value your feedback on our Kashmir Wazwan dishes, service, and ambiance.
                </p>

                <div>
                  <label className="block text-[10px] font-serif uppercase text-gold-400 mb-1">Your Name</label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    value={newAuthor}
                    onChange={(e) => setNewAuthor(e.target.value)}
                    required
                    className="w-full px-3 py-2 rounded-lg bg-royal-surface border border-gold-500/20 text-stone-200 text-xs focus:outline-none focus:border-gold-400"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[10px] font-serif uppercase text-gold-400 mb-1">Rating</label>
                    <select
                      value={newRating}
                      onChange={(e) => setNewRating(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg bg-royal-surface border border-gold-500/20 text-stone-200 text-xs focus:outline-none focus:border-gold-400"
                    >
                      <option value={5} className="bg-royal-obsidian">★★★★★ 5 Stars (Exceptional)</option>
                      <option value={4} className="bg-royal-obsidian">★★★★☆ 4 Stars (Very Good)</option>
                      <option value={3} className="bg-royal-obsidian">★★★☆☆ 3 Stars (Average)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[10px] font-serif uppercase text-gold-400 mb-1">Favorite Dish</label>
                    <input
                      type="text"
                      placeholder="e.g. Saffron Yakhni"
                      value={newDish}
                      onChange={(e) => setNewDish(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg bg-royal-surface border border-gold-500/20 text-stone-200 text-xs focus:outline-none focus:border-gold-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-serif uppercase text-gold-400 mb-1">Your Review</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about the flavors, presentation, and ambiance..."
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    required
                    className="w-full px-3 py-2 rounded-lg bg-royal-surface border border-gold-500/20 text-stone-200 text-xs focus:outline-none focus:border-gold-400 placeholder:text-stone-600"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-full bg-gold-gradient text-royal-obsidian font-serif text-xs font-bold uppercase tracking-widest shadow-lg hover:brightness-105 transition-all"
                >
                  Submit Guest Review
                </button>
              </form>
            ) : (
              <div className="py-8 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-gold-400 mx-auto animate-bounce" />
                <h4 className="text-xl font-serif font-bold text-white">Thank You For Your Review!</h4>
                <p className="text-xs text-stone-300 font-sans">
                  Your feedback has been published to our Royal Guest Wall.
                </p>
              </div>
            )}
          </motion.div>
        </div>
      )}

    </section>
  );
}
