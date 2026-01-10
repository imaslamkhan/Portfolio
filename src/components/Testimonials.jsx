import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { HiStar } from 'react-icons/hi';

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, EduTech Solutions',
      company: 'EduTech Solutions',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5,
      text: 'Aslam delivered an exceptional EdTech mobile app that exceeded our expectations. His attention to detail and technical expertise in Flutter development is outstanding. The app now serves over 1000 students seamlessly.',
      project: 'EdTech Mobile Application'
    },
    {
      name: 'Michael Chen',
      role: 'CTO, LogiFlow',
      company: 'LogiFlow Systems',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5,
      text: 'The shipment management system Aslam built for us has revolutionized our logistics operations. Real-time tracking and intuitive interface have improved our efficiency by 40%. Highly recommended!',
      project: 'Shipment Management System'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Founder, RetailPro',
      company: 'RetailPro Inc.',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5,
      text: 'Working with Aslam was a fantastic experience. He developed a beautiful e-commerce app with seamless payment integration. The app has generated over $50K in sales within the first month of launch.',
      project: 'E-Commerce Mobile App'
    },
    {
      name: 'David Thompson',
      role: 'Operations Manager, YardTech',
      company: 'YardTech Solutions',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5,
      text: 'The yard management application has streamlined our vehicle tracking process completely. Aslam\'s expertise in Flutter and backend development delivered exactly what we needed. Professional and reliable.',
      project: 'Yard Management Application'
    },
    {
      name: 'Lisa Wang',
      role: 'HR Director, ProductiveCorp',
      company: 'ProductiveCorp',
      image: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5,
      text: 'The employee productivity tracker has transformed how we monitor and improve workplace efficiency. The desktop application is intuitive and the analytics dashboard provides valuable insights.',
      project: 'Employee Productivity Tracker'
    },
    {
      name: 'James Wilson',
      role: 'Tech Lead, InnovateLab',
      company: 'InnovateLab',
      image: 'https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5,
      text: 'Aslam\'s technical consulting helped us make crucial architecture decisions for our startup. His expertise in Flutter and full-stack development saved us months of development time.',
      project: 'Technical Consulting'
    }
  ];

  return (
    <section id="testimonials" ref={ref} className="py-20 bg-gray-50 dark:bg-dark-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              Client Testimonials
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            What clients say about working with me on their projects
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full bg-white/80 dark:bg-black/20 backdrop-blur-sm rounded-xl border border-white/20 dark:border-gray-800 p-6 hover:shadow-xl hover:shadow-neon-blue/10 transition-all duration-500 hover:scale-105">
                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <HiStar key={i} className="w-5 h-5 text-yellow-400" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </p>

                {/* Project */}
                <div className="text-sm text-neon-blue font-medium mb-4">
                  Project: {testimonial.project}
                </div>

                {/* Client Info */}
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-neon-blue/20"
                  />
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {testimonial.role}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-500">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
        >
          {[
            { label: 'Happy Clients', value: '25+' },
            { label: 'Projects Completed', value: '15+' },
            { label: 'Client Satisfaction', value: '100%' },
            { label: 'Years Experience', value: '' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-neon-blue mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;