import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, Sparkles, Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';
import Logo from "../assets/Logo.png"

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Instagram, href: 'https://instagram.com', name: 'Instagram' },
  ];

  const footerLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Our Services', path: '/services' },
    { name: 'Contact Us', path: '/contact' },
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms of Service', path: '/terms' },
  ];

  const destinationWeddingLocations = [
    { name: 'Wedding Planners in Delhi - NCR', path: '/destination-wedding/delhi-ncr' },
    { name: 'Wedding Planners in Gurgaon', path: '/destination-wedding/gurgaon' },
    { name: 'Wedding Planners in Udaipur', path: '/destination-wedding/udaipur' },
    { name: 'Wedding Planners in Jaipur', path: '/destination-wedding/jaipur' },
    { name: 'Wedding Planners in Chandigarh', path: '/destination-wedding/chandigarh' },
    { name: 'Wedding Planners in Mussoorie', path: '/destination-wedding/mussoorie' },
    { name: 'Wedding Planners in Kerala', path: '/destination-wedding/kerala' },
    { name: 'Wedding Planners in Goa', path: '/destination-wedding/goa' },
    { name: 'Wedding Planners in Agra', path: '/destination-wedding/agra' },
    { name: 'Wedding Planners in Jaisalmer', path: '/destination-wedding/jaisalmer' },
    { name: 'Wedding Planners in Jodhpur', path: '/destination-wedding/jodhpur' },
    { name: 'Wedding Planners in Jim Corbett', path: '/destination-wedding/jim-corbett' },
    { name: 'Wedding Planners in Shimla', path: '/destination-wedding/shimla' },
    { name: 'Wedding Planners in Rishikesh', path: '/destination-wedding/rishikesh' },
    { name: 'Wedding Planners in Haridwar', path: '/destination-wedding/haridwar' },
    { name: 'Wedding Planners in Kasauli', path: '/destination-wedding/kasauli' },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-gradient-to-r from-rose-50 to-cream py-12 floral-pattern"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Logo and About - Fixed Layout */}
          <div>
            <Link to="/" className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-3 mb-4">
              <div className="flex-shrink-0">
                <img 
                  src={Logo} 
                  alt='VK Wedding Planner Logo' 
                  className='h-16 w-16 sm:h-20 sm:w-20 object-contain'
                />
              </div>
              <span className="font-playfair text-2xl sm:text-3xl font-bold text-gradient leading-tight">
                VK Wedding Planner & Events
              </span>
            </Link>
            <p className="text-gray-600 text-sm leading-relaxed">
              Crafting magical weddings and memorable moments with passion and precision. Your dream celebration starts here.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <p className="font-playfair text-xl font-semibold text-gray-800 mb-4">Quick Links</p>
            <ul className="space-y-2">
              {footerLinks.slice(0, 4).map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    onClick={() => window.scrollTo(0, 0)}
                    className="text-gray-600 hover:text-rose-500 transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Section */}
          <div className="lg:col-span-2">
            <p className="font-playfair text-xl font-semibold text-gray-800 mb-4">Services</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 h-auto">
              {destinationWeddingLocations.map((location) => (
                <Link
                  key={location.name}
                  to={location.path}
                  onClick={() => window.scrollTo(0, 0)}
                  className="text-gray-600 hover:text-rose-500 transition-all duration-300 text-sm block p-2 rounded-lg hover:bg-rose-50 hover:shadow-sm transform hover:scale-105"
                >
                  {location.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <p className="font-playfair text-xl font-semibold text-gray-800 mb-4">Get In Touch</p>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-600">House no.30 site 1 Vikaspuri, New Delhi, 110018</li>
              <li className="text-gray-600">info@vkweddingplanner.in</li>
              <li className="text-gray-600">+91 8368263181</li>
            </ul>
            
            {/* Social Media */}
            <div className="mt-4">
              <p className="font-playfair text-lg font-semibold text-gray-800 mb-2">Follow Us</p>
              <div className="flex space-x-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    className="text-gray-500 hover:text-rose-500 transition-colors duration-300"
                    aria-label={social.name}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-rose-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {currentYear} VK Wedding Planner. All rights reserved. Crafted with <Heart className="inline w-4 h-4 text-rose-500" fill="currentColor" />.
          </p>
          <div className="flex space-x-4 text-sm">
            {footerLinks.slice(4).map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => window.scrollTo(0, 0)}
                className="text-gray-500 hover:text-rose-500 transition-colors duration-300"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;