// pages/contact.tsx
import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  return (
    <>
      <Head>
        <title>Contact Us | AMUTHAMUTHU</title>
        <meta name="description" content="Get in touch with AMUTHAMUTHU. We&apos;d love to hear from you!" />
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
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">Contact Us</h1>
              <p className="text-lg sm:text-xl text-white/80">We&apos;d love to hear from you!</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/20"
              >
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">Send us a Message</h2>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white/90 text-sm font-medium mb-2">First Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                        placeholder="Your first name"
                      />
                    </div>
                    <div>
                      <label className="block text-white/90 text-sm font-medium mb-2">Last Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                        placeholder="Your last name"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-white/90 text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-white/90 text-sm font-medium mb-2">Subject</label>
                    <select className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent">
                      <option value="" className="text-gray-800">Select a subject</option>
                      <option value="general" className="text-gray-800">General Inquiry</option>
                      <option value="product" className="text-gray-800">Product Information</option>
                      <option value="support" className="text-gray-800">Customer Support</option>
                      <option value="partnership" className="text-gray-800">Partnership</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-white/90 text-sm font-medium mb-2">Message</label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent resize-none"
                      placeholder="Tell us how we can help you..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-red-900 px-6 py-3 rounded-lg font-bold hover:scale-105 transition-transform duration-300"
                  >
                    Send Message
                  </button>
                </form>
              </motion.div>

              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="space-y-6"
              >
                {/* Contact Methods */}
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/20">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">Get in Touch</h3>
                  <div className="space-y-4">
                    {[
                      {
                        icon: '📧',
                        title: 'Email',
                        content: 'hello@amuthamuthu.com',
                        description: 'We typically respond within 24 hours'
                      },
                      {
                        icon: '📱',
                        title: 'Phone',
                        content: '+1 (555) 123-4567',
                        description: 'Available Monday-Friday, 9AM-6PM EST'
                      },
                      {
                        icon: '📍',
                        title: 'Address',
                        content: '123 Healthy Street, Wellness City, WC 12345',
                        description: 'Our headquarters and production facility'
                      }
                    ].map((method, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="text-2xl sm:text-3xl">{method.icon}</div>
                        <div>
                          <h4 className="text-white font-semibold text-sm sm:text-base">{method.title}</h4>
                          <p className="text-white/90 text-sm sm:text-base">{method.content}</p>
                          <p className="text-white/60 text-xs sm:text-sm">{method.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Social Media */}
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/20">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">Follow Us</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {[
                      { name: 'Instagram', icon: '📸', color: 'from-pink-400 to-purple-500' },
                      { name: 'Facebook', icon: '📘', color: 'from-blue-400 to-blue-600' },
                      { name: 'Twitter', icon: '🐦', color: 'from-blue-400 to-blue-500' },
                      { name: 'LinkedIn', icon: '💼', color: 'from-blue-600 to-blue-700' },
                      { name: 'YouTube', icon: '📺', color: 'from-red-500 to-red-600' },
                      { name: 'TikTok', icon: '🎵', color: 'from-pink-500 to-purple-600' }
                    ].map((social, index) => (
                      <button
                        key={index}
                        className={`bg-gradient-to-r ${social.color} text-white p-4 rounded-lg hover:scale-105 transition-transform duration-300 flex flex-col items-center space-y-2`}
                      >
                        <span className="text-2xl">{social.icon}</span>
                        <span className="text-xs font-medium">{social.name}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* FAQ Link */}
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/20">
                  <div className="text-center">
                    <div className="text-4xl mb-4">❓</div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">Have Questions?</h3>
                    <p className="text-white/80 text-sm sm:text-base mb-4">
                      Check out our frequently asked questions for quick answers.
                    </p>
                    <Link
                      href="/faq"
                      className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-500 text-red-900 px-6 py-3 rounded-lg font-bold hover:scale-105 transition-transform duration-300 text-sm sm:text-base"
                    >
                      View FAQ
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Newsletter Signup */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-12 sm:mt-16"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/20 text-center">
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">Stay Updated</h3>
                <p className="text-white/80 mb-6 text-sm sm:text-base">
                  Subscribe to our newsletter for product updates, health tips, and exclusive offers.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-sm sm:text-base"
                  />
                  <button className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-red-900 px-6 py-3 rounded-lg font-bold hover:scale-105 transition-transform duration-300 text-sm sm:text-base">
                    Subscribe
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

export default Contact;