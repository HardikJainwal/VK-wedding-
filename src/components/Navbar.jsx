import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Heart, Sparkles } from 'lucide-react';
import Logo from "../assets/Logo.png"
import path from 'path';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Our Services', path: '/services' },
    { name: 'Corporate Events', path: '/corporate-events'},
    { name: 'Contact Us', path: '/contact' },
  ];

  const handleNavigateToContact = () => {
    navigate('/contact');
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'nav-blur shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center"
            >
              <div className="relative">
               <img src={Logo} alt='Logo' className='h-20 w-22'/>
              </div>
              <span className="font-playfair text-2xl font-bold text-gradient ml-2">
                VK Wedding Planner
              </span>
            </motion.div>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="relative group"
              >
                <motion.span
                  className={`transition-colors duration-300 font-medium ${
                    location.pathname === item.path 
                      ? 'text-rose-500' 
                      : scrolled 
                        ? 'text-gray-700 hover:text-rose-500' 
                        : 'text-white hover:text-rose-300 drop-shadow-lg'
                  }`}
                  whileHover={{ y: -2 }}
                >
                  {item.name}
                </motion.span>
                <motion.div
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-rose-400 to-gold group-hover:w-full transition-all duration-300"
                  initial={false}
                  animate={{
                    width: location.pathname === item.path ? '100%' : '0%'
                  }}
                />
              </Link>
            ))}
          </div>

          <div className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className={`transition-colors ${
                scrolled 
                  ? 'text-gray-700 hover:text-rose-500' 
                  : 'text-white hover:text-rose-300 drop-shadow-lg'
              }`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-effect border-t border-white/20"
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block transition-colors font-medium ${
                    location.pathname === item.path 
                      ? 'text-rose-500' 
                      : scrolled 
                        ? 'text-gray-700 hover:text-rose-500' 
                        : 'text-white hover:text-rose-300'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;