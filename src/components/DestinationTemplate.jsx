import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Heart, Star, Camera, Calendar, Phone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const DestinationTemplate = ({ destination }) => {
  const navigate = useNavigate();

  if (!destination) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Destination Not Found</h2>
          <p className="text-gray-600">The wedding destination you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  const { name, title, image, description, content } = destination;
  const paragraphs = content.split('\n\n').filter(p => p.trim().length > 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-pink-50">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative h-[70vh] overflow-hidden"
      >
        <div className="absolute inset-0">
          <img
            src={image}
            alt={`Wedding venue in ${name}`}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src =
                'https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent"></div>
        </div>

        <div className="relative z-10 h-full flex items-center pt-16 sm:pt-20 md:pt-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-3xl"
            >
              <div className="flex items-center mb-4">
                <MapPin className="text-rose-400 mr-2" size={24} />
                <span className="text-rose-400 font-medium text-lg">{name}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-white mb-6 leading-tight">
                {title}
              </h1>

              <p className="text-lg sm:text-xl text-white/90 mb-8 leading-relaxed max-w-2xl">
                {description}
              </p>

              <div className="mt-6">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate('/contact')}
                  className="bg-white text-rose-600 px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 flex items-center"
                >
                  <Phone className="mr-2" size={20} />
                  Contact Us
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="absolute top-10 right-10 opacity-20">
          <Heart className="text-white" size={60} />
        </div>
        <div className="absolute bottom-20 right-20 opacity-10">
          <Star className="text-white" size={40} />
        </div>
      </motion.section>

      {/* Content Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-3 gap-12"
          >
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="prose prose-lg max-w-none">
                {paragraphs.map((paragraph, index) => (
                  <motion.p
                    key={index}
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-gray-700 leading-relaxed mb-6 text-justify"
                  >
                    {paragraph.trim()}
                  </motion.p>
                ))}
              </div>
            </div>

            {/* Sidebar + Image */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-10 sticky top-8"
              >
                {/* Why Choose */}
                <div className="bg-white rounded-2xl shadow-xl p-8 border border-rose-100">
                  <h3 className="text-2xl font-playfair font-bold text-gray-800 mb-6 flex items-center">
                    <Star className="text-rose-500 mr-2" size={24} />
                    Why Choose {name}?
                  </h3>

                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Heart className="text-rose-400 mr-3 mt-1" size={18} />
                      <p className="text-gray-600">Stunning natural beauty and scenic venues</p>
                    </div>
                    <div className="flex items-start">
                      <Camera className="text-rose-400 mr-3 mt-1" size={18} />
                      <p className="text-gray-600">Perfect photography opportunities</p>
                    </div>
                    <div className="flex items-start">
                      <MapPin className="text-rose-400 mr-3 mt-1" size={18} />
                      <p className="text-gray-600">Rich cultural heritage and traditions</p>
                    </div>
                    <div className="flex items-start">
                      <Calendar className="text-rose-400 mr-3 mt-1" size={18} />
                      <p className="text-gray-600">Professional wedding planning services</p>
                    </div>
                  </div>
                </div>

                {/* Dynamic Image Block - This now uses the destination's image */}
                <div className="rounded-xl overflow-hidden shadow-lg h-[250px]">
                  <img
                    src={image}
                    alt={`Wedding venue in ${name}`}
                    className="w-full h-full object-cover object-center"
                    onError={(e) => {
                      // Fallback image if the main image fails to load
                      e.target.src = 'https://images.unsplash.com/photo-1521540216272-a50305cd4421?auto=format&fit=crop&w=800&q=80';
                    }}
                  />
                </div>

                {/* Contact Box */}
                <div className="bg-gradient-to-br from-rose-500 to-pink-600 rounded-2xl shadow-xl p-8 text-white">
                  <h3 className="text-2xl font-playfair font-bold mb-4">Ready to Start Planning?</h3>
                  <p className="mb-6 opacity-90">Let's make your dream wedding in {name} a reality.</p>

                  {/* Call Button */}
                  <a href="tel:9805050075">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full bg-white text-rose-600 py-3 mb-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center"
                    >
                      <Phone className="mr-2" size={20} />
                      Call Us:  83682-63181
                    </motion.button>
                  </a>

                  {/* WhatsApp Button */}
                  <a href="https://wa.me/918368263181" target="_blank" rel="noopener noreferrer">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full bg-white text-green-600 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center"
                    >
                      <svg
                        className="mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12.04 2c5.522 0 10 4.478 10 10 0 5.522-4.478 10-10 10a9.957 9.957 0 0 1-5.29-1.47l-5.317 1.37 1.417-5.192A9.962 9.962 0 0 1 2.04 12c0-5.522 4.478-10 10-10zm0 2c-4.411 0-8 3.589-8 8 0 1.562.457 3.018 1.243 4.24l-.793 2.906 2.985-.768A7.949 7.949 0 0 0 12.04 20c4.411 0 8-3.589 8-8s-3.589-8-8-8zm4.557 10.495c-.24-.12-1.411-.699-1.63-.778-.218-.08-.377-.119-.535.12-.157.238-.615.778-.754.938-.139.159-.278.18-.517.06-.24-.119-1.014-.373-1.931-1.191-.713-.636-1.194-1.419-1.335-1.658-.139-.238-.015-.367.104-.486.107-.107.24-.279.36-.418.119-.139.159-.238.24-.397.08-.159.04-.299-.02-.418-.06-.119-.535-1.29-.733-1.763-.193-.465-.389-.401-.535-.409a2.13 2.13 0 0 0-.458-.009c-.16 0-.418.06-.637.278-.219.219-.86.838-.86 2.042s.881 2.369 1.003 2.534c.119.158 1.73 2.647 4.196 3.715.587.254 1.045.406 1.402.52.589.188 1.124.161 1.548.098.472-.07 1.411-.576 1.611-1.132.199-.556.199-1.032.14-1.131-.06-.099-.218-.158-.457-.278z" />
                      </svg>
                      Chat on WhatsApp
                    </motion.button>
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-rose-600 to-pink-700 py-20"
      >
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6">
              Let's Create Your Perfect Wedding
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Our expert team is ready to help you plan an unforgettable celebration in {name}.
              Contact us today to start your wedding journey.
            </p>

            <div className="flex justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/contact')}
                className="bg-white text-rose-600 px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center"
              >
                <Calendar className="mr-2" size={20} />
                Start Planning Now
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default DestinationTemplate;