import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Crown, 
  Waves, 
  Mountain, 
  Building, 
  Camera, 
  Music, 
  Utensils,
  Flower,
  Car,
  Gift,
  Sparkles
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import destinationImg from '../assets/Destination.jpg';
import royalImg from '../assets/royal.jpg';
import beachImg from '../assets/Goa.jpg';
import hillImg from '../assets/hill.jpg';
import corporateImg from '../assets/corporate1.jpg';


const weddingServicesData = [
  {
    icon: MapPin,
    title: 'Destination Weddings',
    description: 'Exotic locations, seamless planning, unforgettable experiences',
    features: ['International & domestic destinations', 'Travel coordination', 'Local vendor management', 'Guest accommodation'],
    image: destinationImg,
    color: 'from-blue-400 to-blue-500'
  },
  {
    icon: Crown,
    title: 'Royal Weddings',
    description: 'Majestic celebrations fit for royalty with grandeur and elegance',
    features: ['Palace venues', 'Traditional ceremonies', 'Royal decorations', 'Heritage experiences'],
    image: royalImg,
    color: 'from-purple-400 to-purple-500'
  },
  {
    icon: Waves,
    title: 'Beach Weddings',
    description: 'Romantic seaside ceremonies with ocean breeze and sunset views',
    features: ['Beachfront venues', 'Nautical themes', 'Sunset ceremonies', 'Coastal cuisine'],
    image: beachImg,
    color: 'from-cyan-400 to-cyan-500'
  },
  {
    icon: Mountain,
    title: 'Hill Station Weddings',
    description: 'Scenic mountain celebrations with breathtaking valley views',
    features: ['Mountain resorts', 'Scenic backdrops', 'Adventure activities', 'Cozy atmospheres'],
    image: hillImg,
    color: 'from-green-400 to-green-500'
  },
  {
    icon: Building,
    title: 'Corporate Events',
    description: 'Professional event management for corporate celebrations',
    features: ['Conference planning', 'Team building events', 'Product launches', 'Award ceremonies'],
    image: corporateImg,
    color: 'from-gray-400 to-gray-500'
  }
];


const additionalServicesData = [
  {
    icon: Camera,
    title: 'Photography & Videography',
    description: 'Capture every precious moment with our professional team'
  },
  {
    icon: Music,
    title: 'Entertainment & Music',
    description: 'Live bands, DJs, and cultural performances for your celebration'
  },
  {
    icon: Utensils,
    title: 'Catering Services',
    description: 'Exquisite cuisine from traditional to international flavors'
  },
  {
    icon: Flower,
    title: 'Floral & Decoration',
    description: 'Stunning floral arrangements and themed decorations'
  },
  {
    icon: Car,
    title: 'Transportation',
    description: 'Luxury transportation for couples and guests'
  },
  {
    icon: Gift,
    title: 'Wedding Favors',
    description: 'Personalized gifts and favors for your guests'
  }
];

const WeddingServiceCard = ({ service, index, onButtonClick }) => (
  <motion.div
    key={service.title}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: index * 0.1 }}
    viewport={{ once: true }}
    className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
      index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
    }`}
  >
    <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
      <div className="glass-effect rounded-3xl p-8 shadow-2xl">
       <img  
  className="w-full h-80 object-cover rounded-2xl"
  alt={`${service.title} wedding service`} 
  src={service.image} />

      </div>
    </div>

    <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
      <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${service.color} rounded-full mb-6`}>
        <service.icon className="w-8 h-8 text-white" />
      </div>
      
      <h3 className="font-playfair text-3xl md:text-4xl font-bold text-gray-800 mb-4">
        {service.title}
      </h3>
      
      <p className="text-xl text-gray-600 mb-6">
        {service.description}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
        {service.features.map((feature, featureIndex) => (
          <div key={featureIndex} className="flex items-center space-x-2">
            <Sparkles className="w-5 h-5 text-rose-500" />
            <span className="text-gray-700">{feature}</span>
          </div>
        ))}
      </div>

      <Button
        onClick={onButtonClick}
        className="bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 text-white px-8 py-3 rounded-full shadow-lg"
      >
        Learn More
      </Button>
    </div>
  </motion.div>
);

const AdditionalServiceCard = ({ service, index }) => (
  <motion.div
    key={service.title}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="card-hover bg-white rounded-2xl p-8 shadow-lg text-center"
  >
    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-rose-400 to-rose-500 rounded-full mb-6">
      <service.icon className="w-8 h-8 text-white" />
    </div>
    <h3 className="font-playfair text-xl font-bold text-gray-800 mb-4">
      {service.title}
    </h3>
    <p className="text-gray-600">
      {service.description}
    </p>
  </motion.div>
);


const Services = () => {
  const navigate = useNavigate();

  const handleNavigateToContact = () => {
    navigate('/contact');
  };

  return (
    <>
      <Helmet>
        <title>Our Services - Eternal Bliss Wedding Planning</title>
        <meta name="description" content="Discover our comprehensive wedding and event planning services including destination weddings, royal celebrations, beach ceremonies, and corporate events." />
      </Helmet>

      <section className="relative pt-32 pb-20 bg-gradient-to-br from-cream to-rose-50 overflow-hidden">
        <div className="absolute inset-0 floral-pattern opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="font-playfair text-5xl md:text-6xl font-bold text-gray-800 mb-6">
              Our <span className="text-gradient">Services</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From intimate ceremonies to grand celebrations, we offer comprehensive wedding and event planning services 
              tailored to create your perfect day.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Wedding <span className="text-gradient">Specialties</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each wedding type requires unique expertise and attention to detail. Discover our specialized services.
            </p>
          </motion.div>

          <div className="space-y-16">
            {weddingServicesData.map((service, index) => (
              <WeddingServiceCard 
                key={service.title} 
                service={service} 
                index={index} 
                onButtonClick={handleNavigateToContact} 
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-br from-cream to-rose-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Additional <span className="text-gradient">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete your celebration with our comprehensive range of additional services and amenities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalServicesData.map((service, index) => (
              <AdditionalServiceCard key={service.title} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>
      
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Our <span className="text-gradient">Approach</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe in a personalized and collaborative approach to wedding planning. Your dream is our blueprint.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { title: "Consultation", description: "Understanding your vision, preferences, and budget." },
              { title: "Planning", description: "Crafting a detailed plan, selecting vendors, and managing logistics." },
              { title: "Execution", description: "Flawless coordination on your wedding day for a stress-free celebration." }
            ].map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="card-hover bg-white rounded-2xl p-8 shadow-lg"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-rose-400 to-rose-500 rounded-full mb-6 text-white font-playfair text-2xl">
                  {index + 1}
                </div>
                <h3 className="font-playfair text-xl font-bold text-gray-800 mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
           <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-gray-600 mb-6 text-lg">
              Ready to discuss your dream wedding?
            </p>
            <Button
              onClick={handleNavigateToContact}
              className="bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 text-white px-8 py-3 rounded-full shadow-lg text-lg"
            >
              Request a Consultation
            </Button>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-r from-rose-500 to-rose-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Start Planning?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let's discuss your vision and create a celebration that perfectly reflects your love story.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={handleNavigateToContact}
                className="bg-white text-rose-600 hover:bg-gray-50 px-8 py-4 text-lg rounded-full shadow-xl"
              >
                Get a Consultation
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Services;