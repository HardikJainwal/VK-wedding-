import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Heart, Sparkles, ChevronDown } from 'lucide-react';
import Logo from "../assets/Logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
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
    { name: 'Corporate Events', path: '/corporate-events' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const destinationWeddingLocations = [
    { name: 'Best Wedding Planner in Delhi Ncr', path: '/destination-wedding/delhi-ncr' },
    { name: 'Best Wedding Planner in Gurgaon', path: '/destination-wedding/gurgaon' },
    { name: 'Best Wedding Planner in Udaipur', path: '/destination-wedding/udaipur' },
    { name: 'Best Wedding Planner in Jaipur', path: '/destination-wedding/jaipur' },
    { name: 'Best Wedding Planner in Chandigarh', path: '/destination-wedding/chandigarh' },
    { name: 'Best Wedding Planner in Mussoorie', path: '/destination-wedding/mussoorie' },
    { name: 'Best Wedding Planner in Kerala', path: '/destination-wedding/kerala' },
    { name: 'Best Wedding Planner in Goa', path: '/destination-wedding/goa' },
    { name: 'Best Wedding Planner in Agra', path: '/destination-wedding/agra' },
    { name: 'Best Wedding Planner in Jaisalmer', path: '/destination-wedding/jaisalmer' },
    { name: 'Best Wedding Planner in Jodhpur', path: '/destination-wedding/jodhpur' },
    { name: 'Best Wedding Planner in Jim Corbett', path: '/destination-wedding/jim-corbett' },
    { name: 'Best Wedding Planner in Shimla', path: '/destination-wedding/shimla' },
    { name: 'Best Wedding Planner in Haridwar', path: '/destination-wedding/haridwar' },
    { name: 'Best Wedding Planner in Kasauli', path: '/destination-wedding/kasauli' },
  ];

  const handleDestinationClick = (path) => {
    navigate(path);
    setIsDropdownOpen(false);
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'nav-blur shadow-lg' : 'bg-transparent'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-2">
            <motion.div whileHover={{ scale: 1.05 }} className="flex items-center">
              <div className="relative">
                <img src={Logo} alt="Logo" className="h-20 w-22" />
              </div>
              <span className="font-playfair text-2xl font-bold text-gradient ml-2">
                VK Wedding Planner & Events
              </span>
            </motion.div>
          </Link>

          <div className="hidden md:flex items-center space-x-5">
            {/* Render first 4 nav items */}
            {navItems.slice(0, 4).map((item) => (
              <Link key={item.name} to={item.path} className="relative group">
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
                  animate={{ width: location.pathname === item.path ? '100%' : '0%' }}
                />
              </Link>
            ))}

            {/* Destination Wedding Dropdown inserted here */}
            <div
              className="relative group"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <motion.div
                className={`flex items-center cursor-pointer transition-colors duration-300 font-medium ${
                  location.pathname.includes('/destination-wedding')
                    ? 'text-rose-500'
                    : scrolled
                    ? 'text-gray-700 hover:text-rose-500'
                    : 'text-white hover:text-rose-300 drop-shadow-lg'
                }`}
                whileHover={{ y: -2 }}
              >
                <span>Destination Wedding</span>
                <motion.div
                  animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown size={16} className="ml-1" />
                </motion.div>
              </motion.div>

              <motion.div
                className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-rose-400 to-gold group-hover:w-full transition-all duration-300"
                initial={false}
                animate={{
                  width: location.pathname.includes('/destination-wedding') ? '100%' : '0%',
                }}
              />

              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full mt-2 left-0 w-80 bg-white/95 backdrop-blur-md rounded-xl shadow-xl border border-white/20 overflow-hidden"
                  >
                    <div className="py-2">
                      {destinationWeddingLocations.map((location, index) => (
                        <motion.div
                          key={location.name}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.02 }}
                          className="px-4 py-2 hover:bg-rose-50/80 cursor-pointer transition-colors duration-200"
                          onClick={() => handleDestinationClick(location.path)}
                        >
                          <span className="text-gray-700 hover:text-rose-600 font-medium text-sm">
                            {location.name}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Render remaining nav items (like Contact Us) */}
            {navItems.slice(4).map((item) => (
              <Link key={item.name} to={item.path} className="relative group">
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
                  animate={{ width: location.pathname === item.path ? '100%' : '0%' }}
                />
              </Link>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className={`transition-colors ${
                scrolled ? 'text-gray-700 hover:text-rose-500' : 'text-white hover:text-rose-300 drop-shadow-lg'
              }`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
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

              {/* Mobile Destination Wedding */}
              <div>
                <motion.div
                  className={`flex items-center justify-between cursor-pointer transition-colors font-medium ${
                    location.pathname.includes('/destination-wedding')
                      ? 'text-rose-500'
                      : scrolled
                      ? 'text-gray-700 hover:text-rose-500'
                      : 'text-white hover:text-rose-300'
                  }`}
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  <span>Destination Wedding</span>
                  <motion.div
                    animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown size={16} />
                  </motion.div>
                </motion.div>

                <AnimatePresence>
                  {isDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-2 pl-4 space-y-2 max-h-64 overflow-y-auto scrollbar-hide"
                    >
                      {destinationWeddingLocations.map((location) => (
                        <div
                          key={location.name}
                          className={`block py-1 cursor-pointer transition-colors text-sm ${
                            scrolled
                              ? 'text-gray-600 hover:text-rose-500'
                              : 'text-white/80 hover:text-rose-300'
                          }`}
                          onClick={() => handleDestinationClick(location.path)}
                        >
                          {location.name}
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .scrollbar-hide {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </motion.nav>
  );
};

export default Navbar;
