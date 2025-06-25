import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  Instagram,
  Facebook,
  Twitter,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";

const contactInfoData = [
  {
    icon: Phone,
    title: "Phone",
    details: ["+91 8368263181"],
    href: "tel:+919876543210",
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@vkweddingplanner.in"],
    href: "mailto:info@vkweddingplanner.in",
  },
  {
    icon: MapPin,
    title: "Office",
    details: ["House no.30 site 1, Vikaspuri", "New Delhi, India 110018"],
    action: "Get directions",
    href: "https://maps.google.com/?q=123+Wedding+Street,New+Delhi,India+110001",
  },
  {
    icon: Clock,
    title: "Hours",
    details: ["Mon - Sat: 9:00 AM - 8:00 PM", "Sun: 10:00 AM - 6:00 PM"],
    action: "Schedule visit",
    href: "/contact#form",
  },
];

const socialLinksData = [
  {
    icon: Instagram,
    name: "Instagram",
    handle: "@vk_weddings",
    href: "https://instagram.com",
  },
  {
    icon: MessageCircle,
    name: "WhatsApp",
    handle: "+91 8368263181",
    href: "https://wa.me/8368263181",
  },
];

const eventTypesData = [
  "Destination Wedding",
  "Royal Wedding",
  "Beach Wedding",
  "Hill Station Wedding",
  "Corporate Event",
  "Other",
];

const budgetRangesData = [
  "Under ₹2 Lakhs",
  "₹2-5 Lakhs",
  "₹5-10 Lakhs",
  "₹10-20 Lakhs",
  "₹20+ Lakhs",
];

const faqData = [
  {
  question: "How far in advance should we book your services?",
  answer:
    "You can reach out to us at any time! We are equipped to start planning immediately and accommodate both last-minute and well-planned weddings with equal attention to detail.",
},

 {
  question: "Do you offer wedding planning services across different states in India?",
  answer:
    "Absolutely! We plan and manage weddings across all major cities and states in India, ensuring a seamless experience no matter the location.",
},
  {
    question: "What's included in your wedding planning packages?",
    answer:
      "Our packages include venue coordination, vendor management, timeline creation, day-of coordination, and more. Each package is customizable based on your specific needs and budget.",
  },
  {
    question: "Can you work within our budget?",
    answer:
      "Absolutely! We work with various budget ranges and will create a customized plan that maximizes your investment while achieving your wedding vision.",
  },
];

const ContactForm = ({
  onSubmit,
  formData,
  onInputChange,
  eventTypes,
  budgetRanges,
}) => (
  <motion.div
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    id="form"
  >
    <div className="glass-effect rounded-3xl p-8 shadow-2xl">
      <h2 className="font-playfair text-3xl font-bold text-gray-800 mb-6">
        Let's Plan Your <span className="text-gradient">Dream Wedding</span>
      </h2>

      <form
        action="https://formspree.io/f/mldnojrr"
        method="POST"
        className="space-y-6"
      >
        <input type="hidden" name="_captcha" value="false" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="name"
              className="block text-gray-700 font-medium mb-2"
            >
              Full Name *
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={onInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-300"
              placeholder="Your full name"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-2"
            >
              Email Address *
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={onInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-300"
              placeholder="your@email.com"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="phone"
              className="block text-gray-700 font-medium mb-2"
            >
              Phone Number *
            </label>
            <input
              type="tel"
              name="phone"
              id="phone"
              value={formData.phone}
              onChange={onInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-300"
              placeholder="+91 98765 43210"
              required
            />
          </div>
          <div>
            <label
              htmlFor="eventType"
              className="block text-gray-700 font-medium mb-2"
            >
              Event Type *
            </label>
            <select
              name="eventType"
              id="eventType"
              value={formData.eventType}
              onChange={onInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-300"
              required
            >
              <option value="">Select event type</option>
              {eventTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="eventDate"
              className="block text-gray-700 font-medium mb-2"
            >
              Event Date
            </label>
            <input
              type="date"
              name="eventDate"
              id="eventDate"
              value={formData.eventDate}
              onChange={onInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-300"
            />
          </div>
          <div></div>
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-gray-700 font-medium mb-2"
          >
            Tell us about your vision
          </label>
          <textarea
            name="message"
            id="message"
            value={formData.message}
            onChange={onInputChange}
            rows={5}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-300 resize-none"
            placeholder="Share your wedding dreams, preferences, and any specific requirements..."
          ></textarea>
        </div>

        <Button
          type="submit"
          className="w-full bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 text-white py-4 text-lg rounded-lg shadow-xl"
        >
          Send Message
          <Send className="ml-2 w-5 h-5" />
        </Button>
      </form>
    </div>
  </motion.div>
);

const ContactInfoCard = ({ info, index, onActionClick }) => (
  <motion.div
    key={info.title}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="card-hover bg-white rounded-2xl p-4 shadow-lg border border-gray-100"
  >
    <div className="flex items-start space-x-4">
      <div className="flex-shrink-0">
        <div className="w-12 h-12 bg-gradient-to-br from-rose-400 to-rose-500 rounded-full flex items-center justify-center">
          <info.icon className="w-6 h-6 text-white" />
        </div>
      </div>
      <div className="flex-1">
        <h3 className="font-playfair text-xl font-bold text-gray-800 mb-2">
          {info.title}
        </h3>
        {info.details.map((detail, detailIndex) => (
          <p key={detailIndex} className="text-gray-600 mb-1">
            {detail}
          </p>
        ))}
        <a
          href={info.href}
          target={
            info.href.startsWith("http") ||
            info.href.startsWith("mailto") ||
            info.href.startsWith("tel")
              ? "_blank"
              : "_self"
          }
          rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
          onClick={(e) => {
            if (
              !info.href.startsWith("http") &&
              !info.href.startsWith("mailto") &&
              !info.href.startsWith("tel")
            ) {
              e.preventDefault();
              onActionClick(info.href);
            }
          }}
          className="text-rose-600 hover:text-rose-700 font-medium mt-2 transition-colors inline-block"
        >
          {info.action} 
        </a>
      </div>
    </div>
  </motion.div>
);

const SocialMediaLinks = ({ links, onLinkClick }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.5 }}
    viewport={{ once: true }}
    className="bg-gradient-to-br from-rose-50 to-cream rounded-2xl p-6"
  >
    <h3 className="font-playfair text-xl font-bold text-gray-800 mb-4">
      Follow Our Journey
    </h3>
    <p className="text-gray-600 mb-6">
      Stay connected and get inspired by our latest weddings and celebrations.
    </p>
    <div className="grid grid-cols-2 gap-4">
      {links.map((social) => (
        <a
          key={social.name}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => onLinkClick(social.name)}
          className="flex items-center space-x-3 p-3 bg-white rounded-lg hover:shadow-md transition-all duration-300 group"
        >
          <social.icon className="w-5 h-5 text-rose-500 group-hover:scale-110 transition-transform" />
          <div className="text-left">
            <div className="font-medium text-gray-800 text-sm">
              {social.name}
            </div>
            <div className="text-gray-600 text-xs">{social.handle}</div>
          </div>
        </a>
      ))}
    </div>
  </motion.div>
);

const FaqItem = ({ faq, index }) => (
  <motion.div
    key={index}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="bg-gradient-to-br from-rose-50 to-cream rounded-2xl p-6"
  >
    <h3 className="font-playfair text-xl font-bold text-gray-800 mb-3">
      {faq.question}
    </h3>
    <p className="text-gray-600">{faq.answer}</p>
  </motion.div>
);

const Contact = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    eventDate: "",
    budget: "",
    message: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll be in touch soon!",
      variant: "success",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      eventType: "",
      eventDate: "",
      budget: "",
      message: "",
    });
  };

  const handleContactActionClick = (href) => {
    if (href.startsWith("/")) {
      navigate(href);
    } else {
      toast({
        title:
          "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
      });
    }
  };

  const handleSocialLinkClick = (socialName) => {
    toast({
      title: `Navigating to ${socialName}`,
      description: "Opening in a new tab...",
    });
  };

  const handleGetDirections = () => {
    window.open(
      "https://maps.google.com/?q=123+Wedding+Street,New+Delhi,India+110001",
      "_blank"
    );
  };

  return (
    <>
      <Helmet>
        <title>Contact Us - VK Wedding Planners</title>
        <meta
          name="description"
          content="Get in touch with Eternal Bliss for your dream wedding planning. Contact our expert team for consultations, quotes, and personalized wedding planning services across India."
        />
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
              Contact <span className="text-gradient">Us</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Ready to start planning your dream wedding? We'd love to hear from
              you. Let's discuss your vision and create something magical
              together.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <ContactForm
              onSubmit={handleSubmit}
              formData={formData}
              onInputChange={handleInputChange}
              eventTypes={eventTypesData}
              budgetRanges={budgetRangesData}
            />
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="font-playfair text-3xl font-bold text-gray-800 mb-6">
                  Get in <span className="text-gradient">Touch</span>
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  We're here to help make your special day perfect. Reach out to
                  us through any of these channels.
                </p>
              </div>
              <div className="space-y-6">
                {contactInfoData.map((info, index) => (
                  <ContactInfoCard
                    key={info.title}
                    info={info}
                    index={index}
                    onActionClick={handleContactActionClick}
                  />
                ))}
              </div>
              <SocialMediaLinks
                links={socialLinksData}
                onLinkClick={handleSocialLinkClick}
              />
            </motion.div>
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
            className="text-center mb-12"
          >
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Visit Our <span className="text-gradient">Studio</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Come visit our beautiful studio space where we'll discuss your
              wedding dreams over coffee and inspiration boards.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-effect rounded-3xl p-8 shadow-2xl"
          >
            <div className="overflow-hidden rounded-2xl w-full h-[450px]">
              <iframe
                title="VK Wedding Planner Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14007.187233664046!2d77.0642861410053!3d28.635851343781983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0511e951c505%3A0xcc10d2aa78b79bcf!2sVK%20Wedding%20Planner!5e0!3m2!1sen!2sin!4v1750620060479!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
            <p className="text-xl text-gray-600">
              Quick answers to common questions about our wedding planning
              services.
            </p>
          </motion.div>

          <div className="space-y-6">
            {faqData.map((faq, index) => (
              <FaqItem key={index} faq={faq} index={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
