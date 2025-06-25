import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ArrowRight, Star, MapPin, Calendar, Users, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Bannervideo from "../assets/video2.mp4";
import itc from '../assets/itcc.jpg';
import taj from '../assets/taj.jpg';
import oberoi from '../assets/oberoi.jpg';
import radisson from '../assets/raddisson.jpg';
import hyatt from '../assets/hyatt.jpg';
import hill from "../assets/hill.jpg";
import royal2 from "../assets/royal2.jpg";
import Destination from "../assets/Destination.jpg";
import royal from "../assets/royal.jpg";
import goa from "../assets/Goa.jpg";
import Rajasthan from "../assets/Rajasthan.jpg";
import Himachal from "../assets/Himachal.jpg";
import Jim from "../assets/Jim-corbett.jpg";
import nanital from "../assets/Nainital.jpg";
import test from '../assets/test-1.jpg';
import test2 from '../assets/test-2.jpg';
import test3 from '../assets/test-3.jpg';
import test4 from '../assets/Corporate.jpg';

const Home = () => {
  const navigate = useNavigate();
  const videoRef = useRef(null);

  const handleNavigateToContact = () => {
    navigate('/contact');
  };

  const destinations = [
    {
      name: "Goa",
      description: "Golden beaches and Portuguese charm create the perfect backdrop for beachside celebrations and intimate ceremonies.",
      image: goa
    },
    {
      name: "Rajasthan",
      description: "Majestic palaces and royal heritage offer regal wedding experiences in the land of kings and queens.",
      image: Rajasthan
    },
    {
      name: "Himachal Pradesh",
      description: "Snow-capped mountains and pristine valleys provide a serene and picturesque setting for mountain weddings.",
      image: Himachal
    },
    {
      name: "Jim Corbett",
      description: "Wildlife sanctuary surroundings offer unique jungle-themed celebrations amidst nature's wilderness.",
      image: Jim
    },
    {
      name: "Nainital",
      description: "Lake town charm with misty hills creates romantic lakeside wedding venues in the heart of Uttarakhand.",
      image: nanital
    }
  ];

  const weddingTypes = [
    {
      title: "Hill Station Wedding",
      description: "Celebrate your love amidst the serene hills and cool breeze.",
      image: hill,
    },
    {
      title: "Royal Wedding",
      description: "Experience a grand wedding with royal traditions and splendor.",
      image: royal2,
    },
    {
      title: "Destination Wedding",
      description: "Plan your dream wedding at breathtaking destinations in India.",
      image: Destination,
    },
    {
      title: "Luxury Palace Wedding",
      description: "Tie the knot in opulent palaces with timeless charm.",
      image: royal,
    },
  ];

  const corporateEvents = [
    {
      title: "Corporate Retreats",
      description: "Inspiring team-building experiences in serene hill stations or luxury resorts.",
      image: hill,
    },
    {
      title: "Gala Dinners",
      description: "Elegant evenings with bespoke decor and world-class entertainment.",
      image: royal2,
    },
    {
      title: "Conferences & Summits",
      description: "Seamless events with cutting-edge technology and sophisticated venues.",
      image: Destination,
    },
    {
      title: "Product Launches",
      description: "Unforgettable unveilings with grandeur and meticulous planning.",
      image: test4,
    },
  ];

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const setupVideo = () => {
      video.muted = true;
      video.playsInline = true;
      video.setAttribute('playsinline', 'true');
      video.setAttribute('webkit-playsinline', 'true');
      video.volume = 0;
      
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.log('Video autoplay prevented:', error);
        });
      }
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        video.pause();
      } else {
        video.muted = true;
        video.volume = 0;
        setupVideo();
      }
    };

    const handleFocus = () => {
      video.muted = true;
      video.volume = 0;
      setupVideo();
    };

    const handleBlur = () => {
      video.pause();
    };

    setupVideo();
    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('focus', handleFocus);
    window.addEventListener('blur', handleBlur);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('focus', handleFocus);
      window.removeEventListener('blur', handleBlur);
    };
  }, []);

  const stats = [
    { icon: Calendar, number: '500+', label: 'Weddings Planned' },
    { icon: Users, number: '1000+', label: 'Happy Couples' },
    { icon: MapPin, number: '50+', label: 'Destinations' },
    { icon: Star, number: '4.9', label: 'Average Rating' }
  ];

  const testimonials = [
    {
      name: "Riya & Aarav",
      rating: 5,
      review: "VK Wedding Planners made our destination wedding truly magical. Every detail was perfect and beyond our expectations!",
      image: test,
    },
    {
      name: "Priya & Karan",
      rating: 5,
      review: "They brought our royal wedding dream to life. Flawless execution and beautiful decor!",
      image: test2,
    },
    {
      name: "Sneha & Rahul",
      rating: 5,
      review: "Professional, creative, and always available. We felt completely at ease throughout the process.",
      image: test3,
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>VK Wedding - Crafting Magical Weddings & Memorable Moments</title>
        <meta name="description" content="Premier wedding and event planning company specializing in destination, royal, beach, and hill weddings. Creating unforgettable celebrations across India's most beautiful locations." />
      </Helmet>

      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            webkit-playsinline="true"
            preload="metadata"
            className="w-full h-full object-cover hero-video"
            style={{ pointerEvents: 'none' }}
            onLoadedData={() => {
              if (videoRef.current) {
                videoRef.current.muted = true;
                videoRef.current.volume = 0;
              }
            }}
            onPlay={() => {
              if (videoRef.current) {
                videoRef.current.muted = true;
                videoRef.current.volume = 0;
              }
            }}
          >
            <source src={Bannervideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
        </div>

        <div className="absolute inset-0 pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-3 h-3 md:w-4 md:h-4 bg-rose-300 rounded-full opacity-60"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${i * 1.2}s`
              }}
              animate={{
                y: ['-100vh', '100vh'],
                x: [0, Math.random() > 0.5 ? Math.random() * 50 : -Math.random() * 50],
                rotate: [0, Math.random() * 720 - 360],
                opacity: [1, 0]
              }}
              transition={{
                duration: 10 + Math.random() * 5,
                repeat: Infinity,
                ease: 'linear',
                delay: i * 1.2
              }}
            />
          ))}
        </div>

        <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <motion.h1
              className="font-playfair text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
            >
              Crafting Magical Weddings &{' '}
              <span className="text-gradient bg-gradient-to-r from-rose-300 to-gold bg-clip-text text-transparent">
                Memorable Moments
              </span>
            </motion.h1>
            
            <motion.p
              className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.9 }}
            >
              From dreamy destination weddings to royal celebrations, we create unforgettable experiences that last a lifetime
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.1 }}
            >
              <Button
                onClick={handleNavigateToContact}
                className="bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 text-white px-8 py-4 text-lg rounded-full shadow-2xl hover:shadow-rose-500/25 transition-all duration-300"
              >
                Plan My Wedding
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="section-padding floral-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Our Wedding <span className="text-gradient">Specialties</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every love story is unique, and so should be your wedding. Discover our specialized wedding services tailored to your dreams.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {weddingTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card-hover glass-effect rounded-2xl overflow-hidden shadow-lg"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    alt={`${type.title} wedding ceremony`}
                    src={type.image}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20"></div>

                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="font-playfair text-xl font-bold text-white mb-2">
                      {type.title}
                    </h3>
                    <p className="text-white/90 text-sm">
                      {type.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 font-serif">
              Popular Wedding{" "}
              <span className="bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
                Destinations
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From pristine beaches to majestic palaces, explore India's most enchanting wedding destinations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination, index) => (
              <motion.div
                key={destination.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    alt={`${destination.name} wedding destination`}
                    src={destination.image}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-white font-bold text-xl font-serif">
                      {destination.name}
                    </h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {destination.description}
                  </p>
                  <Button
                    onClick={handleNavigateToContact}
                    variant="outline"
                    className="w-full border-rose-300 text-rose-600 hover:bg-rose-50 hover:border-rose-400"
                  >
                    Explore Venues
                  </Button>
                </div>
              </motion.div>
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
              Our <span className="text-gradient">Clients</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trusted by India’s top luxury hotels to deliver unforgettable weddings and events.
            </p>
          </motion.div>

          <Slider
            {...{
              dots: false,
              infinite: true,
              speed: 500,
              slidesToShow: 4,
              slidesToScroll: 1,
              autoplay: true,
              autoplaySpeed: 2000,
              responsive: [
                { breakpoint: 1024, settings: { slidesToShow: 3 } },
                { breakpoint: 768, settings: { slidesToShow: 2 } },
                { breakpoint: 480, settings: { slidesToShow: 1 } },
              ],
            }}
          >
            {[
              { name: 'ITC Hotels', img: itc },
              { name: 'Taj Hotels', img: taj },
              { name: 'Oberoi Hotels', img: oberoi },
              { name: 'Radisson', img: radisson },
              { name: 'Hyatt', img: hyatt },
            ].map((hotel, index) => (
              <div key={index} className="px-4 text-center">
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow hover:shadow-lg transition-transform duration-300 transform hover:-translate-y-1">
                  <div className="aspect-[3/2] flex items-center justify-center mb-4">
                    <img
                      src={hotel.img}
                      alt={hotel.name}
                      className="h-32 object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-700">{hotel.name}</h3>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-cream to-white floral-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Elevate Your <span className="text-gradient bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">Corporate Moments</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From high-impact conferences to elegant galas, we craft corporate events that inspire, connect, and leave lasting impressions.
            </p>
          </motion.div>

          <div className="relative">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    {corporateEvents.map((event, index) => (
      <motion.div
        key={event.title}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        viewport={{ once: true }}
        className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
      >
        <div className="relative h-72">
          <img
            src={event.image}
            alt={`${event.title} corporate event`}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-70 group-hover:opacity-80 transition-opacity duration-500"></div>
          <div className="absolute bottom-0 left-0 right-0 bg-black/60 py-3 px-4">
            <h3 className="font-playfair text-base md:text-lg font-bold text-white mb-1 drop-shadow-md">
              {event.title}
            </h3>
            <p className="text-xs md:text-sm text-white/90 drop-shadow-sm line-clamp-2">
              {event.description}
            </p>
          </div>
        </div>
        <motion.div
          className="absolute inset-0 bg-rose-600/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          whileHover={{ scale: 1.05 }}
        >
          <Button
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-rose-600 px-4 py-1 rounded-full flex items-center text-sm"
            onClick={handleNavigateToContact}
          >
            Learn More
            <ArrowRight className="ml-2 w-3 h-3" />
          </Button>
        </motion.div>
      </motion.div>
    ))}
  </div>
</div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <Button
              onClick={handleNavigateToContact}
              className="bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 text-white px-8 py-4 text-lg rounded-full shadow-xl"
            >
              Plan Your Corporate Event
              <Briefcase className="ml-2 w-5 h-5" />
            </Button>
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
              What Our <span className="text-gradient">Couples Say</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from couples whose dream weddings we brought to life.
            </p>
          </motion.div>

          <Slider {...sliderSettings}>
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="px-4"
              >
                <div className="bg-white rounded-2xl shadow-xl p-6 border border-rose-100">
                  <div className="flex items-center mb-4">
                    <img
                      src={testimonial.image}
                      alt={`${testimonial.name} profile`}
                      className="w-16 h-16 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h3 className="font-playfair text-xl font-bold text-gray-800">
                        {testimonial.name}
                      </h3>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-5 h-5 ${
                              i < testimonial.rating
                                ? 'text-yellow-400 fill-yellow-400'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">
                    "{testimonial.review}"
                  </p>
                </div>
              </motion.div>
            ))}
          </Slider>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-r from-rose-500 to-rose-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center text-white"
              >
                <div className="flex justify-center mb-4">
                  <stat.icon className="w-12 h-12 text-white/90" />
                </div>
                <div className="font-playfair text-3xl md:text-4xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-white/90 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-br from-cream to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Ready to Plan Your <span className="text-gradient">Dream Wedding</span>?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's create magical moments that you and your loved ones will cherish forever. Get in touch with our expert wedding planners today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={handleNavigateToContact}
                className="bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 text-white px-8 py-4 text-lg rounded-full shadow-xl"
              >
                Start Planning Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                onClick={handleNavigateToContact}
                variant="outline"
                className="border-2 border-rose-300 text-rose-600 hover:bg-rose-50 px-8 py-4 text-lg rounded-full"
              >
                Schedule Consultation
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;