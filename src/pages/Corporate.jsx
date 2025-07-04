import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, Building2, PaintBucket, Palette, ShieldCheck, MonitorSmartphone, Quote, ArrowRight } from 'lucide-react';
import { Helmet } from 'react-helmet';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import ibm from "../assets/corporate1.jpg"; // Updated image for IBM
import wipro from "../assets/wipro.jpeg";
import asianPaints from "../assets/asian.jpeg";
import kamdhenu from "../assets/kamdhenu.jpg";
import samsung from "../assets/samsung.jpg";
import insurance from "../assets/insurane.jpeg";

const corporateClients = [
  { name: 'IBM', icon: <Briefcase className="w-12 h-12 text-blue-600" />, desc: 'High-end corporate tech summits & product launches.', color: 'bg-blue-50' },
  { name: 'Wipro', icon: <Building2 className="w-12 h-12 text-purple-600" />, desc: 'Employee engagement and corporate milestone events.', color: 'bg-purple-50' },
  { name: 'Asian Paints', icon: <PaintBucket className="w-12 h-12 text-yellow-500" />, desc: 'Creative product displays and dealer meets.', color: 'bg-yellow-50' },
  { name: 'Kamdhenu Paints', icon: <Palette className="w-12 h-12 text-rose-500" />, desc: 'Colorful brand activations and client seminars.', color: 'bg-rose-50' },
  { name: 'Samsung', icon: <MonitorSmartphone className="w-12 h-12 text-cyan-600" />, desc: 'Tech expos, product reveals, and conferences.', color: 'bg-cyan-50' },
  { name: 'Insurance Company', icon: <ShieldCheck className="w-12 h-12 text-green-600" />, desc: 'Customer events and trust-building campaigns.', color: 'bg-green-50' },
];

const testimonials = [
  { name: 'Krisha Bhatia', company: 'IBM', quote: 'VK Wedding transformed our product launch into a memorable experience with flawless execution.' },
  { name: 'Rahul Sharma', company: 'Wipro', quote: 'Their attention to detail and creativity made our corporate milestone celebration truly special.' },
  { name: 'Priya Patel', company: 'Samsung', quote: 'The tech expo was a hit, thanks to VK Wedding’s innovative approach and seamless planning.' },
];

const corporateEvents = [
    {
      title: "IBM Corporate Events",
      description: "Innovative corporate gatherings tailored for IBM's global vision and tech-driven culture.",
      image: ibm,
    },
    {
      title: "Wipro Corporate Retreats",
      description: "Transformative retreats for Wipro, fostering collaboration in inspiring settings.",
      image: wipro,
    },
    {
      title: "Asian Paints Conferences",
      description: "Vibrant and creative conferences for Asian Paints, blending innovation with elegance.",
      image: asianPaints,
    },
    {
      title: "Kamdhenu Paints Product Launches",
      description: "Bold and colorful product launches for Kamdhenu Paints, showcasing quality and creativity.",
      image: kamdhenu,
    },
    {
      title: "Samsung Gala Events",
      description: "Cutting-edge gala events for Samsung, celebrating innovation with sophistication.",
      image: samsung,
    },
    {
      title: "Insurance Company Summits",
      description: "Strategic summits for Insurance Company, designed for impact and engagement.",
      image: insurance,
    },
  ];

const CorporateEvents = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>Corporate Events - VK Wedding</title>
        <meta name="description" content="Discover VK Wedding’s premium corporate event services for brands like IBM, Wipro, Samsung, and more. We create impactful, tailored business events." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative h-[70vh] bg-gradient-to-br from-rose-600 to-indigo-700 text-white flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-10" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/diagmonds.png')" }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="font-playfair text-5xl md:text-7xl font-bold mb-6"
          >
            Corporate <span className="text-yellow-300">Events</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto mb-8"
          >
            Partner with us to create unforgettable corporate experiences that inspire, engage, and elevate your brand.
          </motion.p>
          <motion.a
            href="/contact"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="inline-flex items-center bg-white text-rose-600 font-semibold px-8 py-3 rounded-full hover:bg-rose-50 transition duration-300"
          >
            Get in Touch <ArrowRight className="ml-2 w-5 h-5" />
          </motion.a>
        </div>
      </section>

      {/* Clients Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="font-playfair text-4xl md:text-5xl font-bold text-gray-800 text-center mb-12"
          >
            Our Esteemed Clients
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {corporateClients.map((client, i) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className={`${client.color} p-8 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300`}
              >
                <div className="flex justify-center mb-6">{client.icon}</div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-3 text-center">{client.name}</h3>
                <p className="text-gray-600 text-center">{client.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section with Image Carousel */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="font-playfair text-4xl md:text-5xl font-bold text-gray-800 text-center mb-12"
          >
            Our Corporate Event Services
          </motion.h2>
          <Slider {...sliderSettings}>
            {corporateEvents.map((event, index) => (
              <div key={index} className="px-2">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative h-80 rounded-2xl overflow-hidden shadow-lg group"
                >
                  <img
                    src={event.image}
                    alt={`${event.title} corporate event`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent h-1/3 flex flex-col justify-end p-4">
                    <h3 className="font-playfair text-lg font-bold text-white text-shadow mb-1">
                      {event.title}
                    </h3>
                    <p className="text-sm text-white/90 text-shadow line-clamp-2">
                      {event.description}
                    </p>
                  </div>
                </motion.div>
              </div>
            ))}
          </Slider>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            {[
              { title: 'Event Planning & Management', desc: 'End-to-end planning, from venue selection to logistics and on-site coordination.' },
              { title: 'Brand Activations', desc: 'Creative campaigns and immersive experiences to boost brand visibility.' },
              { title: 'Conferences & Summits', desc: 'Professional setups for keynotes, panels, and networking sessions.' },
              { title: 'Product Launches', desc: 'High-impact reveals with innovative staging and media integration.' },
            ].map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center">
                  <span className="text-rose-600 font-bold">{i + 1}</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Slider */}
      <section className="section-padding bg-gradient-to-r from-rose-50 to-indigo-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="font-playfair text-4xl md:text-5xl font-bold text-gray-800 mb-12"
          >
            What Our Clients Say
          </motion.h2>
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="bg-white p-8 rounded-2xl shadow-lg"
              >
                <Quote className="w-12 h-12 text-rose-400 mx-auto mb-4" />
                <p className="text-lg text-gray-600 italic mb-6">"{testimonials[currentTestimonial].quote}"</p>
                <h4 className="text-xl font-semibold text-gray-800">{testimonials[currentTestimonial].name}</h4>
                <p className="text-gray-500">{testimonials[currentTestimonial].company}</p>
              </motion.div>
            </AnimatePresence>
            <div className="flex justify-center space-x-4 mt-6">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-rose-100 text-rose-600 hover:bg-rose-200 transition"
              >
                <ArrowRight className="w-6 h-6 transform rotate-180" />
              </button>
              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-rose-100 text-rose-600 hover:bg-rose-200 transition"
              >
                <ArrowRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-rose-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="font-playfair text-4xl md:text-5xl font-bold mb-6"
          >
            Ready to Elevate Your Next Event?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg mb-8 max-w-2xl mx-auto"
          >
            Let VK Wedding bring your vision to life with our expertise in corporate event planning.
          </motion.p>
          <motion.a
            href="/contact"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="inline-flex items-center bg-white text-rose-600 font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition duration-300"
          >
            Contact Us <ArrowRight className="ml-2 w-5 h-5" />
          </motion.a>
        </div>
      </section>
    </>
  );
};

export default CorporateEvents;