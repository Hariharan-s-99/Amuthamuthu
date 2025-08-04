// pages/about.tsx
import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <>
      <Head>
        <title>About Us | AMUTHAMUTHU</title>
        <meta name="description" content="Learn about AMUTHAMUTHU and our mission to provide premium healthy snacks." />
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
                <span className="text-red-300">A</span>
                <span className="text-white">MUTHU</span>
              </Link>
              <Link href="/" className="text-white/90 hover:text-white transition-colors duration-300">
                ← Back to Home
              </Link>
            </div>
          </nav>
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-4 sm:px-6 py-8 sm:py-16">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12 sm:mb-16">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">About AMUTHAMUTHU</h1>
              <p className="text-lg sm:text-xl text-white/80">Our story of passion, quality, and healthy living</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
              {/* Mission Section */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/20"
              >
                <div className="text-4xl sm:text-5xl mb-4">🎯</div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Our Mission</h2>
                <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                  At AMUTHAMUTHU, we believe that healthy snacking should never compromise on taste. 
                  Our mission is to create premium, nutritious snacks that fuel your active lifestyle 
                  while satisfying your cravings for delicious flavors.
                </p>
              </motion.div>

              {/* Vision Section */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/20"
              >
                <div className="text-4xl sm:text-5xl mb-4">🌟</div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Our Vision</h2>
                <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                  We envision a world where everyone has access to wholesome, delicious snacks that 
                  support their health goals. Through innovation and dedication to quality, we&apos;re 
                  building a brand that stands for excellence in healthy snacking.
                </p>
              </motion.div>

              {/* Values Section */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/20 lg:col-span-2"
              >
                <div className="text-4xl sm:text-5xl mb-4">💎</div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">Our Values</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {[
                    {
                      icon: '🌱',
                      title: 'Natural Quality',
                      description: 'Only the finest natural ingredients, no artificial additives'
                    },
                    {
                      icon: '🤝',
                      title: 'Community First',
                      description: 'Building relationships with our customers and suppliers'
                    },
                    {
                      icon: '♻️',
                      title: 'Sustainability',
                      description: 'Eco-friendly practices and responsible sourcing'
                    }
                  ].map((value, index) => (
                    <div key={index} className="text-center">
                      <div className="text-3xl sm:text-4xl mb-3">{value.icon}</div>
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{value.title}</h3>
                      <p className="text-white/70 text-sm">{value.description}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Story Section */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/20 lg:col-span-2"
              >
                <div className="text-4xl sm:text-5xl mb-4">📖</div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">Our Story</h2>
                <div className="space-y-4 text-white/80 text-sm sm:text-base leading-relaxed">
                  <p>
                    AMUTHAMUTHU was born from a simple idea: that healthy snacking should be both 
                    nutritious and incredibly delicious. Our founder, passionate about wellness and 
                    great taste, set out to create snacks that would become a daily ritual for 
                    health-conscious individuals.
                  </p>
                  <p>
                    Starting with small batches and handcrafted recipes, we&apos;ve grown into a 
                    community of snack enthusiasts who believe in the power of natural ingredients 
                    and thoughtful preparation. Every product we create is a testament to our 
                    commitment to quality and taste.
                  </p>
                  <p>
                    Today, we&apos;re excited to bring our premium collection to you. Each snack is 
                    carefully crafted, tested, and perfected to ensure it meets our high standards 
                    for both nutrition and flavor.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="text-center mt-12 sm:mt-16"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/20">
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">Join Our Journey</h3>
                <p className="text-white/80 mb-6 text-sm sm:text-base">
                  Be part of our story and get exclusive early access to our premium snack collection.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/" className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-red-900 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold hover:scale-105 transition-transform duration-300 text-sm sm:text-base">
                    Back to Home
                  </Link>
                  <button className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold hover:bg-white hover:text-red-800 transition-all duration-300 text-sm sm:text-base">
                    Join Waitlist
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </main>
      </div>
    </>
  );
};

export default About;