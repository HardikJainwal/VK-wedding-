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

  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-gradient-to-r from-rose-50 to-cream py-12 floral-pattern"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo and About */}
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="relative">
               <img src={Logo} alt='logo' className='h-20 w-20'/>
              </div>
              <span className="font-playfair text-3xl font-bold text-gradient">
                VK Wedding Planner
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
                    className="text-gray-600 hover:text-rose-500 transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Contact */}
          <div>
            <p className="font-playfair text-xl font-semibold text-gray-800 mb-4">Get In Touch</p>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-600">House no.30 site 1 Vikaspuri, New Delhi, 110018</li>
              <li className="text-gray-600"> info@vkweddingplanner.in</li>
              <li className="text-gray-600">+91 8368263181</li>
            </ul>
            
          </div>
        </div>

        {/* Social Media and Copyright */}
        <div className="border-t border-rose-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {currentYear} VK Wedding Planner. All rights reserved. Crafted with <Heart className="inline w-4 h-4 text-rose-500" fill="currentColor" />.
          </p>
          <div className="flex space-x-4">
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
    </motion.footer>
  );
};

export default Footer;