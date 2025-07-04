import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Heart, Award, Users, Clock, Star, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();

  const handleNavigateToContact = () => {
    navigate('/contact');
  };

  const values = [
    {
      icon: Heart,
      title: 'Passion for Perfection',
      description: 'Every detail matters in creating your perfect day'
    },
    {
      icon: Award,
      title: 'Excellence in Service',
      description: 'Award-winning service that exceeds expectations'
    },
    {
      icon: Users,
      title: 'Personal Touch',
      description: 'Dedicated team committed to your unique vision'
    },
    {
      icon: Clock,
      title: 'Timeless Memories',
      description: 'Creating moments that last a lifetime'
    }
  ];

  const achievements = [
    { number: '8+', label: 'Years of Experience' },
    { number: '500+', label: 'Successful Events' },
    { number: '50+', label: 'Destinations Covered' },
    { number: '98%', label: 'Client Satisfaction' }
  ];

  const team = [
    {
      name: 'Priya Sharma',
      role: 'Founder & Lead Planner',
      image: 'Professional Indian woman wedding planner in elegant attire',
      description: 'With over 8 years of experience, Priya brings creativity and precision to every celebration.'
    },
    {
      name: 'Arjun Patel',
      role: 'Creative Director',
      image: 'Professional Indian man creative director in formal wear',
      description: 'Arjun specializes in transforming venues into magical spaces that tell your love story.'
    },
    {
      name: 'Meera Singh',
      role: 'Destination Specialist',
      image: 'Professional Indian woman destination wedding specialist',
      description: 'Meera ensures seamless coordination for destination weddings across India and beyond.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>About Us - VK Wedding Planners</title>
        <meta name="description" content="Learn about VK Wedding, India's premier wedding planning company. Meet our experienced team and discover our passion for creating magical weddings and memorable celebrations." />
      </Helmet>

      <section className="relative pt-32 pb-20 bg-gradient-to-br from-cream to-rose-50 overflow-hidden">
        <div className="absolute inset-0 floral-pattern opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="font-playfair text-5xl md:text-6xl font-bold text-gray-800 mb-6">
              About <span className="text-gradient">VK Wedding Planners & Events</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We are passionate storytellers who believe every love story deserves a perfect celebration. 
              For over 8 years, we've been crafting magical weddings that reflect the unique essence of each couple.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative max-w-4xl mx-auto"
          >
            <div className="glass-effect rounded-3xl p-8 md:p-12 shadow-2xl">
              <img  
                className="w-full h-96 object-cover rounded-2xl mb-8"
                alt="Eternal Bliss wedding planning team at work" src="https://images.unsplash.com/photo-1638370478645-fe56a80d460b" />
              <div className="text-center">
                <h2 className="font-playfair text-3xl font-bold text-gray-800 mb-4">
                  Our Story
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Founded in 2016 with a simple belief that every couple deserves their dream wedding, 
                  VK Wedding has grown to become one of India's most trusted wedding planning companies. 
                  We specialize in creating bespoke celebrations that capture the essence of your love story, 
                  whether it's an intimate beach ceremony or a grand royal celebration.
                </p>
              </div>
            </div>
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
              Our <span className="text-gradient">Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core values guide everything we do, ensuring every celebration we create is truly exceptional.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-rose-400 to-rose-500 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-playfair text-xl font-bold text-gray-800 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-r from-rose-500 to-rose-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-6">
              Our Achievements
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Numbers that reflect our commitment to excellence and the trust our clients place in us.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="font-playfair text-4xl md:text-5xl font-bold text-white mb-2">
                  {achievement.number}
                </div>
                <div className="text-white/90 font-medium text-lg">
                  {achievement.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* <section className="section-padding bg-gradient-to-br from-cream to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Meet Our <span className="text-gradient">Team</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our passionate team of wedding experts brings creativity, experience, and dedication to every celebration.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="card-hover bg-white rounded-2xl overflow-hidden shadow-xl"
              >
                <div className="relative h-80 overflow-hidden">
                  <img  
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    alt={`${member.name} - ${member.role}`} src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="font-playfair text-2xl font-bold text-gray-800 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-rose-600 font-medium mb-4">
                    {member.role}
                  </p>
                  <p className="text-gray-600">
                    {member.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Why Choose <span className="text-gradient">VK Wedding Planner</span>?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                We don't just plan weddings; we create experiences that celebrate your unique love story 
                with elegance, creativity, and flawless execution.
              </p>
              
              <div className="space-y-4">
                {[
                  'Personalized planning approach for every couple',
                  'Extensive network of premium vendors',
                  'End-to-end wedding management services',
                  'Transparent communication with no hidden costs',
                  '24/7 support throughout your wedding journey',
                  'Post-wedding support and documentation'
                ].map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="w-6 h-6 text-rose-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                className="mt-8"
              >
                <Button
                  onClick={handleNavigateToContact}
                  className="bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 text-white px-8 py-4 text-lg rounded-full shadow-xl"
                >
                  Start Your Journey
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="glass-effect rounded-3xl p-8 shadow-2xl">
                <img  
                  className="w-full h-96 object-cover rounded-2xl"
                  alt="Beautiful wedding ceremony setup by Eternal Bliss" src="https://images.unsplash.com/photo-1597906320579-c52635ac2b32" />
              </div>
              
              <motion.div
                className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-rose-400 to-rose-500 rounded-full flex items-center justify-center shadow-xl"
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <Star className="w-10 h-10 text-white" fill="currentColor" />
              </motion.div>
              
              <motion.div
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-gold to-yellow-500 rounded-full flex items-center justify-center shadow-xl"
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <Heart className="w-8 h-8 text-white" fill="currentColor" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;