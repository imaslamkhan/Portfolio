import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { HiMail, HiPhone, HiLocationMarker, HiUser, HiPaperAirplane, HiChat, HiClock, HiCheckCircle, HiArrowRight } from 'react-icons/hi';
import { FaGithub, FaLinkedin, FaTwitter, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log('Form submitted:', formData);
    setSubmitSuccess(true);
    setIsSubmitting(false);
    
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
    
    // Reset success message after 5 seconds
    setTimeout(() => setSubmitSuccess(false), 5000);
  };

  const contactInfo = [
    {
      icon: HiMail,
      label: 'Email',
      value: 'aslamyakubkhan@gmail.com',
      link: 'mailto:aslamyakubkhan@gmail.com',
      color: 'from-blue-500 to-cyan-500',
      description: 'Primary contact method'
    },
    // {
    //   icon: HiPhone,
    //   label: 'Phone / WhatsApp',
    //   value: '+91 81493 33474',
    //   link: 'https://wa.me/918149333474',
    //   color: 'from-green-500 to-emerald-500',
    //   description: 'Available for calls'
    // },
    {
      icon: HiLocationMarker,
      label: 'Location',
      value: 'Hyderabad, India',
      link: null,
      color: 'from-purple-500 to-pink-500',
      description: 'Open for remote & onsite'
    }
  ];

  const availability = [
    {
      type: 'Freelance Projects',
      status: 'Available',
      description: 'New opportunities welcome',
      color: 'text-green-600 dark:text-green-400',
      bgColor: 'bg-green-500/10',
      icon: HiCheckCircle
    },
    {
      type: 'Consultation Calls',
      status: 'Open',
      description: '30-min free consultation',
      color: 'text-blue-600 dark:text-blue-400',
      bgColor: 'bg-blue-500/10',
      icon: HiChat
    },
    {
      type: 'Full-time Roles',
      status: 'Considering',
      description: 'Exciting opportunities only',
      color: 'text-purple-600 dark:text-purple-400',
      bgColor: 'bg-purple-500/10',
      icon: HiClock
    }
  ];

  const socialLinks = [
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      url: 'https://linkedin.com/in/aslam-khan-ab657b223',
      color: 'from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700',
      textColor: 'text-blue-600'
    },
    {
      icon: FaGithub,
      label: 'GitHub',
      url: 'https://github.com',
      color: 'from-gray-800 to-gray-900 hover:from-gray-900 hover:to-black dark:from-gray-600 dark:to-gray-700',
      textColor: 'text-gray-800 dark:text-gray-300'
    },
    // {
    //   icon: FaTwitter,
    //   label: 'Twitter',
    //   url: '#',
    //   color: 'from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700',
    //   textColor: 'text-sky-500'
    // },
    {
      icon: FaWhatsapp,
      label: 'WhatsApp',
      url: 'https://wa.me/918149333474',
      color: 'from-green-500 to-green-600 hover:from-green-600 hover:to-green-700',
      textColor: 'text-green-600'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section 
      id="contact" 
      ref={ref} 
      className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-dark-secondary dark:to-dark-primary relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-300 dark:bg-blue-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-300 dark:bg-purple-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-600 dark:text-blue-400 text-sm font-semibold mb-4">
            LET'S CONNECT
          </span>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Ready to bring your ideas to life? Let's discuss how we can create something amazing together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column - Contact Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-12"
          >
            {/* Contact Cards */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
                Contact Information
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    variants={itemVariants}
                    custom={index}
                    href={info.link || undefined}
                    target={info.link ? "_blank" : undefined}
                    rel={info.link ? "noopener noreferrer" : undefined}
                    className={`block group ${info.link ? 'cursor-pointer' : 'cursor-default'}`}
                  >
                    <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-gray-700/50 p-6 hover:shadow-xl hover:shadow-blue-500/10 dark:hover:shadow-blue-400/5 transition-all duration-500 hover:-translate-y-1">
                      <div className="flex items-start gap-4">
                        <div className={`p-3 bg-gradient-to-br ${info.color} rounded-xl transform group-hover:rotate-12 transition-transform duration-300`}>
                          <info.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <h4 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                              {info.label}
                            </h4>
                            {info.link && (
                              <HiArrowRight className="w-5 h-5 text-blue-500 opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                            )}
                          </div>
                          <p className="text-gray-700 dark:text-gray-300 font-medium text-lg mb-1">
                            {info.value}
                          </p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            {info.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
                Current Status
              </h3>
              <div className="grid gap-4">
                {availability.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    custom={index + 3}
                    className={`${item.bgColor} backdrop-blur-sm rounded-xl border border-gray-200 dark:border-gray-700/50 p-5`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <item.icon className={`w-5 h-5 ${item.color}`} />
                        <span className="font-semibold text-gray-900 dark:text-white">
                          {item.type}
                        </span>
                      </div>
                      <span className={`font-bold ${item.color}`}>
                        {item.status}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 ml-8">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Connect With Me
              </h3>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    variants={itemVariants}
                    custom={index + 6}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className={`flex items-center gap-2 px-4 py-3 bg-gradient-to-r ${social.color} text-white font-medium rounded-xl hover:shadow-lg transition-all duration-300`}>
                      <social.icon className="w-5 h-5" />
                      <span className="text-sm">{social.label}</span>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {/* Success Message */}
            {submitSuccess && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute -top-20 left-0 right-0 bg-gradient-to-r from-green-500 to-emerald-500 text-white p-6 rounded-2xl shadow-xl mb-8"
              >
                <div className="flex items-center gap-3">
                  <HiCheckCircle className="w-6 h-6 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-lg">Message Sent Successfully!</h4>
                    <p className="text-sm opacity-90">I'll get back to you within 24 hours.</p>
                  </div>
                </div>
              </motion.div>
            )}

            <div className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-gray-700/50 shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Send a Message
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                Fill out the form below and I'll respond as soon as possible.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="group">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Your Name *
                    </label>
                    <div className="relative">
                      <HiUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 transition-colors duration-300 group-focus-within:text-blue-500" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-12 pr-4 py-3.5 bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:shadow-lg"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>
                  <div className="group">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <HiMail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 transition-colors duration-300 group-focus-within:text-blue-500" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-12 pr-4 py-3.5 bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:shadow-lg"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="group">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3.5 bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:shadow-lg"
                    placeholder="Project Discussion / Job Opportunity"
                  />
                </div>
                
                <div className="group">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3.5 bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:shadow-lg resize-none"
                    placeholder="Tell me about your project, timeline, and budget..."
                  ></textarea>
                </div>
                
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <HiPaperAirplane className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>

                <p className="text-center text-sm text-gray-500 dark:text-gray-400">
                  I typically respond within 24 hours on weekdays
                </p>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Quick Info */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center gap-6 px-8 py-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 rounded-2xl border border-blue-100 dark:border-blue-800/30">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                24h
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Response Time
              </div>
            </div>
            <div className="w-1 h-8 bg-gray-300 dark:bg-gray-700"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                100%
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Satisfaction Rate
              </div>
            </div>
            <div className="w-1 h-8 bg-gray-300 dark:bg-gray-700"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                10+
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Projects Completed
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;