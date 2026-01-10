import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { HiExternalLink, HiCode, HiDeviceMobile, HiDesktopComputer } from 'react-icons/hi';
import { FaGithub } from 'react-icons/fa';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

  const projects = [
    {
      title: 'Online EdTech Mobile Application',
      description: 'A comprehensive EdTech platform serving 1000+ students with course management, video streaming, progress tracking, and interactive quizzes. Features secure user authentication, payment integration, and offline content access.',
      tech: ['Flutter', 'Dart', 'REST APIs', 'Authentication', 'Video Streaming', 'Payment Gateway'],
      icon: HiDeviceMobile,
      color: 'from-blue-500 to-cyan-500',
      category: 'Mobile App',
      status: 'Live',
      users: '1000+ Users'
    },
    {
      title: 'Employee Productivity Tracker',
      description: 'Enterprise desktop application for monitoring employee productivity with auto screenshot capture, time tracking, punch in/out functionality, leave management, and comprehensive admin dashboard with real-time analytics.',
      tech: ['Flutter', 'Desktop Development', 'Admin Dashboard', 'Time Tracking', 'Analytics'],
      icon: HiDesktopComputer,
      color: 'from-green-500 to-emerald-500',
      category: 'Desktop App',
      status: 'Production',
      users: '500+ Employees'
    },
    {
      title: 'Yard Management Application',
      description: 'Comprehensive vehicle yard management system handling 200+ vehicles daily with efficient entry/exit tracking, role-based authentication, photo capture with cloud storage, and real-time inventory management.',
      tech: ['Flutter', 'Dart', 'MongoDB', 'Cloudinary', 'Render', 'Real-time Updates'],
      icon: HiCode,
      color: 'from-purple-500 to-pink-500',
      category: 'Full Stack',
      status: 'Production',
      users: '50+ Operators'
    },
    {
      title: 'Shipment Management System',
      description: 'End-to-end shipment lifecycle management application covering order creation, dispatch, real-time GPS tracking, delivery confirmation, and emergency interfaces. Handles 100+ shipments daily.',
      tech: ['Flutter', 'GPS Tracking', 'Real-time Updates', 'Push Notifications', 'Android'],
      icon: HiDeviceMobile,
      color: 'from-orange-500 to-red-500',
      category: 'Mobile App',
      status: 'Live',
      users: '200+ Drivers'
    },
    {
      title: 'AI-Powered Health Monitoring',
      description: 'Research project on emotional health monitoring using social media data analysis. Implemented NLP techniques and ML algorithms to analyze emotional health indicators with 85% accuracy.',
      tech: ['Python', 'NLP', 'Machine Learning', 'Data Analysis', 'Research'],
      icon: HiCode,
      color: 'from-cyan-500 to-blue-500',
      category: 'Research',
      status: 'Published',
      users: 'IJITE Journal'
    },
    {
      title: 'E-Commerce Mobile App',
      description: 'Full-featured e-commerce mobile application with product catalog, shopping cart, secure payment integration, order tracking, and customer support chat. Built for a retail client.',
      tech: ['Flutter', 'Payment Gateway', 'Real-time Chat', 'Push Notifications', 'Analytics'],
      icon: HiDeviceMobile,
      color: 'from-emerald-500 to-green-500',
      category: 'Freelance',
      status: 'Live',
      users: '2000+ Customers'
    }
  ];

  return (
    <section id="projects" ref={ref} className="py-20 bg-white dark:bg-dark-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Showcasing innovative solutions and technical expertise across various domains
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full bg-white/80 dark:bg-black/20 backdrop-blur-sm rounded-xl border border-white/20 dark:border-gray-800 overflow-hidden hover:shadow-xl hover:shadow-neon-blue/10 transition-all duration-500 hover:scale-105">
                {/* Project Header */}
                <div className="p-6 border-b border-gray-200 dark:border-gray-800">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 bg-gradient-to-r ${project.color} rounded-lg group-hover:scale-110 transition-transform duration-300`}>
                      <project.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex gap-2">
                      <span className="px-3 py-1 text-xs font-semibold bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full">
                        {project.category}
                      </span>
                      <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                        project.status === 'Live' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' :
                        project.status === 'Production' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400' :
                        'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-neon-blue transition-colors duration-300">
                    {project.title}
                  </h3>

                  {project.users && (
                    <div className="text-sm text-neon-blue font-medium mb-2">
                      {project.users}
                    </div>
                  )}
                  
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-neon-blue to-neon-purple text-white font-medium rounded-lg hover:shadow-lg hover:shadow-neon-blue/25 transition-all duration-300"
                    >
                      <FaGithub className="w-4 h-4" />
                      View Code
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-white/10 dark:bg-black/20 backdrop-blur-sm border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:bg-white/20 dark:hover:bg-black/30 hover:border-neon-blue transition-all duration-300"
                    >
                      <HiExternalLink className="w-4 h-4" />
                      Live Demo
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;