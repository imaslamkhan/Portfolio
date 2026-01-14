import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { 
  HiDeviceMobile, 
  HiCode, 
  HiServer, 
  HiDesktopComputer, 
  HiLightningBolt, 
  HiSupport,
  HiCheck,
  HiClock,
  HiCurrencyRupee
} from 'react-icons/hi';

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      icon: HiDeviceMobile,
      title: 'Mobile App Development',
      description: 'Cross-platform mobile applications using Flutter for iOS and Android with native performance.',
      features: ['Flutter Development', 'iOS & Android', 'Custom UI/UX', 'API Integration'],
      color: 'from-blue-500 to-cyan-500',
      delivery: '4-8 Weeks'
    },
    {
      icon: HiCode,
      title: 'Full Stack Development',
      description: 'Complete web applications with React.js frontend and Node.js backend with database integration.',
      features: ['React.js Frontend', 'Node.js Backend', 'Database Design', 'REST APIs'],
      color: 'from-green-500 to-emerald-500',
      delivery: '3-6 Weeks'
    },
    {
      icon: HiServer,
      title: 'Backend Development',
      description: 'Scalable backend services with secure APIs, authentication, and cloud integration.',
      features: ['REST API Development', 'Database Design', 'Authentication', 'Cloud Deployment'],
      color: 'from-purple-500 to-pink-500',
      delivery: '2-4 Weeks'
    },
    {
      icon: HiDesktopComputer,
      title: 'Desktop Applications',
      description: 'Cross-platform desktop applications using Flutter/Electron for Windows, macOS, and Linux.',
      features: ['Flutter Desktop', 'Cross-platform', 'Native Performance', 'System Integration'],
      color: 'from-orange-500 to-red-500',
      delivery: '6-10 Weeks'
    },
    {
      icon: HiLightningBolt,
      title: 'App Optimization',
      description: 'Performance optimization, bug fixes, and feature enhancements for existing applications.',
      features: ['Performance Tuning', 'Bug Fixes', 'Feature Addition', 'Code Refactoring'],
      color: 'from-indigo-500 to-purple-500',
      delivery: 'Ongoing'
    },
    {
      icon: HiSupport,
      title: 'Technical Consulting',
      description: 'Expert guidance on technology stack, architecture decisions, and project planning.',
      features: ['Architecture Review', 'Tech Stack', 'Code Review', 'Project Planning'],
      color: 'from-pink-500 to-rose-500',
      delivery: 'Flexible'
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
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section 
      id="services" 
      ref={ref} 
      className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-dark-primary dark:to-dark-secondary relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-60 h-60 bg-cyan-300 dark:bg-cyan-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-2xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-purple-300 dark:bg-purple-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-2xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30 text-blue-600 dark:text-blue-400 text-xs font-semibold mb-3">
            SERVICES
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">
              Development Services
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-4 rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-sm">
            Professional development services to bring your ideas to life with modern technology
          </p>
        </motion.div>

        {/* Services Grid - Smaller Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              custom={index}
              onMouseEnter={() => setSelectedService(index)}
              onMouseLeave={() => setSelectedService(null)}
              className="group"
            >
              <div className={`h-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-xl border ${
                selectedService === index 
                  ? 'border-blue-400 dark:border-blue-500 shadow-lg shadow-blue-500/10' 
                  : 'border-gray-200 dark:border-gray-700/50'
              } hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden`}>
                
                {/* Gradient Top Accent */}
                <div className={`h-1 bg-gradient-to-r ${service.color}`}></div>
                
                <div className="p-5">
                  {/* Icon */}
                  <div className={`inline-flex p-3 bg-gradient-to-br ${service.color} rounded-lg mb-4 transition-transform duration-300 group-hover:scale-110`}>
                    <service.icon className="w-5 h-5 text-white" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature, featureIndex) => (
                      <motion.li 
                        key={featureIndex}
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: index * 0.08 + featureIndex * 0.03 }}
                        className="flex items-center gap-2 text-gray-700 dark:text-gray-300"
                      >
                        <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center flex-shrink-0`}>
                          <HiCheck className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-xs">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Delivery Time */}
                  <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-xs pt-3 border-t border-gray-100 dark:border-gray-700/50">
                    <HiClock className="w-3 h-3 flex-shrink-0" />
                    <span>Delivery: {service.delivery}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Simple CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <div className="inline-block bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-gray-800 dark:to-gray-900 rounded-xl border border-blue-100 dark:border-blue-800/30 px-6 py-5">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
              Ready to Start Your Project?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 max-w-md mx-auto">
              Contact me for a detailed quote and project discussion
            </p>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="px-6 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-sm font-medium rounded-lg hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
            >
              Get in Touch
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;