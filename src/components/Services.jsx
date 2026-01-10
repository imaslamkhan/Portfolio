import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { HiDeviceMobile, HiCode, HiServer, HiDesktopComputer, HiLightningBolt, HiSupport } from 'react-icons/hi';

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

  const services = [
    {
      icon: HiDeviceMobile,
      title: 'Mobile App Development',
      description: 'Cross-platform mobile applications using Flutter for iOS and Android with native performance and beautiful UI.',
      features: ['Flutter Development', 'iOS & Android', 'Custom UI/UX', 'API Integration'],
      color: 'from-blue-500 to-cyan-500',
      price: 'Starting from $2000'
    },
    {
      icon: HiCode,
      title: 'Full Stack Development',
      description: 'End-to-end web application development with modern technologies, scalable architecture, and responsive design.',
      features: ['React.js Frontend', 'Node.js Backend', 'Database Design', 'REST APIs'],
      color: 'from-green-500 to-emerald-500',
      price: 'Starting from $1500'
    },
    {
      icon: HiServer,
      title: 'Backend Development',
      description: 'Robust backend services with secure APIs, database optimization, and cloud deployment for scalable applications.',
      features: ['REST API Development', 'Database Design', 'Authentication', 'Cloud Deployment'],
      color: 'from-purple-500 to-pink-500',
      price: 'Starting from $1000'
    },
    {
      icon: HiDesktopComputer,
      title: 'Desktop Applications',
      description: 'Cross-platform desktop applications using Flutter for Windows, macOS, and Linux with native performance.',
      features: ['Flutter Desktop', 'Cross-platform', 'Native Performance', 'Modern UI'],
      color: 'from-orange-500 to-red-500',
      price: 'Starting from $2500'
    },
    {
      icon: HiLightningBolt,
      title: 'App Optimization',
      description: 'Performance optimization, bug fixes, and feature enhancements for existing mobile and web applications.',
      features: ['Performance Tuning', 'Bug Fixes', 'Feature Addition', 'Code Refactoring'],
      color: 'from-indigo-500 to-purple-500',
      price: 'Starting from $500'
    },
    {
      icon: HiSupport,
      title: 'Technical Consulting',
      description: 'Expert technical consultation for architecture decisions, technology stack selection, and project planning.',
      features: ['Architecture Review', 'Tech Stack Selection', 'Code Review', 'Project Planning'],
      color: 'from-pink-500 to-rose-500',
      price: 'Starting from $100/hour'
    }
  ];

  return (
    <section id="services" ref={ref} className="py-20 bg-white dark:bg-dark-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              Freelance Services
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Professional development services to bring your ideas to life with cutting-edge technology
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full bg-white/80 dark:bg-black/20 backdrop-blur-sm rounded-xl border border-white/20 dark:border-gray-800 overflow-hidden hover:shadow-xl hover:shadow-neon-blue/10 transition-all duration-500 hover:scale-105">
                <div className="p-6">
                  <div className={`inline-flex p-4 bg-gradient-to-r ${service.color} rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-neon-blue transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                    {service.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-neon-blue rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                    <div className="text-lg font-bold text-neon-blue mb-4">
                      {service.price}
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full px-4 py-2 bg-gradient-to-r from-neon-blue to-neon-purple text-white font-medium rounded-lg hover:shadow-lg hover:shadow-neon-blue/25 transition-all duration-300"
                    >
                      Get Quote
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 backdrop-blur-sm rounded-xl border border-neon-blue/20 p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Let's discuss your requirements and create something amazing together
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-neon-blue to-neon-purple text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-neon-blue/25 transition-all duration-300"
            >
              Contact Me Now
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;