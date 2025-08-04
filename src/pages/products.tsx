// pages/products.tsx
import React, { useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { motion } from 'framer-motion';

const Products: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const comingSoonProducts = [
    {
      id: '1',
      name: 'Premium Mixed Nuts',
      description: 'Handpicked almonds, cashews, and walnuts roasted to perfection',
      category: 'Nuts & Seeds',
      features: ['High Protein', 'No Sugar Added', 'Gluten Free'],
    },
    {
      id: '2',
      name: 'Organic Granola Mix',
      description: 'Whole grain oats with honey and dried fruits',
      category: 'Breakfast',
      features: ['Organic', 'High Fiber', 'No Preservatives'],
    },
    {
      id: '3',
      name: 'Protein Energy Bars',
      description: 'Plant-based protein with natural sweeteners',
      category: 'Protein',
      features: ['Vegan', 'High Protein', 'Natural Ingredients'],
    },
    {
      id: '4',
      name: 'Dried Fruit Medley',
      description: 'Sun-dried mangoes, apricots, and figs',
      category: 'Dried Fruits',
      features: ['No Sugar Added', 'Rich in Vitamins', 'Natural'],
    },
    {
      id: '5',
      name: 'Trail Mix Supreme',
      description: 'Perfect blend of nuts, seeds, and dried fruits',
      category: 'Trail Mix',
      features: ['Energy Boost', 'Portable', 'Nutrient Rich'],
    },
    {
      id: '6',
      name: 'Dark Chocolate Nuts',
      description: 'Premium nuts coated in rich dark chocolate',
      category: 'Chocolate',
      features: ['Antioxidants', 'Rich Flavor', 'Premium Quality'],
    },
  ];

  return (
    <>
      <Head>
        <title>Products | AMUTHAMUTHU</title>
        <meta name="description" content="Explore our premium collection of healthy snacks. Coming soon!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/brand.png" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-red-900 via-red-800 to-red-700">
        {/* Header */}
        <header className="bg-white/10 backdrop-blur-md shadow-2xl">
          <nav className="container mx-auto px-4 sm:px-6 py-4">
            <div className="flex justify-between items-center">
              <Link href="/" className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
                <span className="text-white">AMUTH</span>
                <span className="text-red-300 drop-shadow-lg">A</span>
                <span className="text-white">MUTHU</span>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden md:flex space-x-8">
                {[
                  { name: 'Home', path: '/' },
                  { name: 'Products', path: '/products' },
                  { name: 'About', path: '/about' },
                  { name: 'Contact', path: '/contact' }
                ].map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Link
                      href={item.path}
                      className={`transition-colors duration-300 font-medium ${
                        item.name === 'Products' 
                          ? 'text-white font-semibold' 
                          : 'text-white/90 hover:text-white'
                      }`}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden">
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="text-white p-2"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {isMobileMenuOpen ? (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    )}
                  </svg>
                </button>
              </div>

              {/* Desktop CTA Button */}
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="hidden md:block bg-gradient-to-r from-yellow-400 to-yellow-500 text-red-900 px-6 py-3 rounded-full font-bold hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Join Waitlist
              </motion.button>
            </div>

            {/* Mobile Navigation Menu */}
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden mt-4 bg-white/10 backdrop-blur-md rounded-lg border border-white/20"
              >
                <div className="px-4 py-4 space-y-4">
                  {[
                    { name: 'Home', path: '/' },
                    { name: 'Products', path: '/products' },
                    { name: 'About', path: '/about' },
                    { name: 'Contact', path: '/contact' }
                  ].map((item) => (
                    <Link
                      key={item.name}
                      href={item.path}
                      className={`block transition-colors duration-300 font-medium py-2 ${
                        item.name === 'Products' 
                          ? 'text-white font-semibold' 
                          : 'text-white/90 hover:text-white'
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <button className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-red-900 px-6 py-3 rounded-full font-bold hover:scale-105 transition-all duration-300 shadow-lg">
                    Join Waitlist
                  </button>
                </div>
              </motion.div>
            )}
          </nav>
        </header>

        {/* Hero Section */}
        <section className="py-12 sm:py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Our Premium Collection
            </h1>
            <p className="text-lg sm:text-xl text-white/80 mb-6 sm:mb-8">
              Amazing healthy snacks coming your way
            </p>
            <div className="inline-flex items-center gap-3 bg-yellow-400/20 text-yellow-300 px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold border border-yellow-400/30 text-sm sm:text-base">
              <span className="animate-pulse text-xl sm:text-2xl">🚀</span>
              Launching Soon - Stay Tuned!
            </div>
          </motion.div>
        </section>

        {/* Products Grid */}
        <section className="py-12 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {comingSoonProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden hover:bg-white/20 transition-all duration-300 border border-white/20 group relative"
                >
                  {/* Coming Soon Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-red-900/90 to-red-800/90 z-10 flex items-center justify-center backdrop-blur-sm">
                    <div className="text-center p-4 sm:p-6">
                      <div className="text-4xl sm:text-5xl mb-4 animate-bounce">🔥</div>
                      <div className="text-lg sm:text-xl font-bold text-white mb-2">Coming Soon</div>
                      <div className="text-white/80 mb-4 text-sm sm:text-base">Get notified when available</div>
                      <button className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-red-900 px-4 sm:px-6 py-2 sm:py-3 rounded-full font-bold hover:scale-105 transition-transform duration-300 text-sm sm:text-base">
                        Notify Me
                      </button>
                    </div>
                  </div>

                  <div className="relative h-32 sm:h-48 bg-gradient-to-br from-red-600 to-red-700 flex items-center justify-center">
                    <div className="absolute top-2 sm:top-4 left-2 sm:left-4 bg-yellow-400 text-red-900 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-bold">
                      LAUNCHING SOON
                    </div>
                    <div className="text-4xl sm:text-6xl opacity-20">🥜</div>
                  </div>

                  <div className="p-4 sm:p-6">
                    <div className="text-xs sm:text-sm text-yellow-300 font-semibold mb-2">{product.category}</div>
                    <h3 className="text-lg sm:text-xl font-bold mb-3 text-white">{product.name}</h3>
                    <p className="text-white/80 mb-4 text-xs sm:text-sm">{product.description}</p>

                    <div className="flex flex-wrap gap-1 sm:gap-2 mb-4">
                      {product.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="bg-white/20 text-white/90 px-2 py-1 rounded-full text-xs font-semibold"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-sm sm:text-lg font-bold text-yellow-300">Coming Soon</span>
                      <button
                        disabled
                        className="bg-white/20 text-white/60 px-3 sm:px-4 py-2 rounded-full font-semibold cursor-not-allowed text-xs sm:text-sm"
                      >
                        Pre-order
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Email Signup */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mt-16 sm:mt-20 text-center"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 max-w-2xl mx-auto border border-white/20">
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">Be the First to Know!</h3>
                <p className="text-white/80 mb-6 sm:mb-8 text-base sm:text-lg">
                  Get exclusive early access to our premium snack collection and special launch offers.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 sm:px-6 py-3 sm:py-4 bg-white/20 border border-white/30 rounded-full text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-sm sm:text-base"
                  />
                  <button className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-red-900 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold hover:scale-105 transition-transform duration-300 whitespace-nowrap text-sm sm:text-base">
                    Notify Me
                  </button>
                </div>
                <p className="text-xs sm:text-sm text-white/60 mt-4">We&apos;ll never spam you. Unsubscribe at any time.</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-red-950 text-white py-12 sm:py-16">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold mb-4">
                  <span className="text-white">AMUTH</span>
                  <span className="text-red-300">A</span>
                  <span className="text-white">MUTHU</span>
                </h3>
                <p className="text-white/70 text-sm sm:text-base">
                  Premium healthy snacks made with love and the finest natural ingredients.
                </p>
              </div>

              <div>
                <h4 className="text-base sm:text-lg font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2 text-white/70 text-sm sm:text-base">
                  <li>
                    <Link href="/about" className="hover:text-white transition-colors">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/products" className="hover:text-white transition-colors">
                      Products
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="hover:text-white transition-colors">
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link href="/shipping" className="hover:text-white transition-colors">
                      Shipping Info
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-base sm:text-lg font-semibold mb-4">Customer Care</h4>
                <ul className="space-y-2 text-white/70 text-sm sm:text-base">
                  <li>
                    <Link href="/faq" className="hover:text-white transition-colors">
                      FAQ
                    </Link>
                  </li>
                  <li>
                    <Link href="/returns" className="hover:text-white transition-colors">
                      Returns
                    </Link>
                  </li>
                  <li>
                    <Link href="/support" className="hover:text-white transition-colors">
                      Support
                    </Link>
                  </li>
                  <li>
                    <Link href="/track" className="hover:text-white transition-colors">
                      Track Order
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-base sm:text-lg font-semibold mb-4">Connect</h4>
                <div className="flex space-x-4 text-sm sm:text-base">
                  <a href="#" className="text-white/70 hover:text-white transition-colors">
                    Facebook
                  </a>
                  <a href="#" className="text-white/70 hover:text-white transition-colors">
                    Instagram
                  </a>
                  <a href="#" className="text-white/70 hover:text-white transition-colors">
                    Twitter
                  </a>
                </div>
              </div>
            </div>

            <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60 text-sm sm:text-base">
              <p>&copy; 2025 AMUTHAMUTHU. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Products;