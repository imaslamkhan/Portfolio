import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { HiExternalLink, HiCode, HiDeviceMobile, HiDesktopComputer, HiUsers, HiCalendar, HiChartBar } from 'react-icons/hi';
import { FaGithub, FaPlay, FaArrowRight } from 'react-icons/fa';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      title: 'EdTech Learning Platform',
      description: 'A comprehensive mobile learning platform serving 1000+ students with interactive courses, video streaming, progress tracking, and AI-powered recommendations.',
      tech: ['Flutter', 'Dart', 'Firebase', 'Node.js', 'Payment Gateway', 'Video Streaming'],
      icon: HiDeviceMobile,
      color: 'from-blue-500 to-cyan-500',
      category: 'Mobile App',
      status: 'Live',
      users: '1000+ Students',
      metrics: [
        { label: 'Rating', value: '4.8/5' },
        { label: 'Retention', value: '85%' }
      ],
      github: '#',
      demo: '#',
      image: '/api/placeholder/400/300'
    },
    {
      title: 'Employee Productivity Tracker',
      description: 'Enterprise desktop application for monitoring employee productivity with auto screenshot capture, time tracking, and comprehensive analytics dashboard.',
      tech: ['Flutter', 'Desktop', 'SQLite', 'Admin Dashboard', 'Analytics', 'Time Tracking'],
      icon: HiDesktopComputer,
      color: 'from-green-500 to-emerald-500',
      category: 'Desktop App',
      status: 'Production',
      users: '500+ Employees',
      metrics: [
        { label: 'Efficiency', value: '+40%' },
        { label: 'Uptime', value: '99.9%' }
      ],
      github: '#',
      demo: '#',
      image: '/api/placeholder/400/300'
    },
    {
      title: 'Yard Management System',
      description: 'Vehicle yard management system handling 200+ vehicles daily with real-time tracking, role-based authentication, and inventory management.',
      tech: ['Flutter', 'MongoDB', 'Cloudinary', 'Render', 'Real-time', 'Authentication'],
      icon: HiCode,
      color: 'from-purple-500 to-pink-500',
      category: 'Full Stack',
      status: 'Production',
      users: '50+ Operators',
      metrics: [
        { label: 'Vehicles/Day', value: '200+' },
        { label: 'Accuracy', value: '98%' }
      ],
      github: '#',
      demo: '#',
      image: '/api/placeholder/400/300'
    },
    {
      title: 'Shipment Tracking Platform',
      description: 'End-to-end shipment lifecycle management with real-time GPS tracking, delivery confirmation, and emergency interfaces for 100+ daily shipments.',
      tech: ['Flutter', 'GPS', 'Real-time', 'Push Notifications', 'Android', 'Maps'],
      icon: HiDeviceMobile,
      color: 'from-orange-500 to-red-500',
      category: 'Mobile App',
      status: 'Live',
      users: '200+ Drivers',
      metrics: [
        { label: 'Shipments/Day', value: '100+' },
        { label: 'On-time', value: '95%' }
      ],
      github: '#',
      demo: '#',
      image: '/api/placeholder/400/300'
    },
    {
      title: 'AI Health Monitoring',
      description: 'Emotional health monitoring using social media data analysis with NLP techniques and ML algorithms achieving 85% accuracy.',
      tech: ['Python', 'NLP', 'Machine Learning', 'Data Analysis', 'Research', 'AI'],
      icon: HiCode,
      color: 'from-cyan-500 to-blue-500',
      category: 'Research',
      status: 'Published',
      users: 'IJITE Journal',
      metrics: [
        { label: 'Accuracy', value: '85%' },
        { label: 'Published', value: '2023' }
      ],
      github: '#',
      demo: '#',
      image: '/api/placeholder/400/300'
    },
    {
      title: 'E-Commerce Mobile App',
      description: 'Full-featured e-commerce application with product catalog, shopping cart, secure payments, order tracking, and customer support.',
      tech: ['Flutter', 'Payment', 'Real-time Chat', 'Push Notifications', 'Analytics', 'UI/UX'],
      icon: HiDeviceMobile,
      color: 'from-emerald-500 to-green-500',
      category: 'Freelance',
      status: 'Live',
      users: '2000+ Customers',
      metrics: [
        { label: 'Conversion', value: '12%' },
        { label: 'Rating', value: '4.9/5' }
      ],
      github: '#',
      demo: '#',
      image: '/api/placeholder/400/300'
    }
  ];

  const categories = ['All', 'Mobile App', 'Desktop App', 'Full Stack', 'Research', 'Freelance'];

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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section 
      id="projects" 
      ref={ref} 
      className="py-24 bg-gradient-to-b from-white to-gray-50 dark:from-dark-primary dark:to-dark-secondary relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 dark:bg-purple-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300 dark:bg-blue-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 text-purple-600 dark:text-purple-400 text-sm font-semibold mb-4">
            PORTFOLIO
          </span>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Real-world applications showcasing innovative solutions and technical expertise across various domains
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(category)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === category
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/25'
                  : 'bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-purple-500 dark:hover:border-purple-500'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              custom={index}
              className="group"
            >
              <div className="h-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-gray-700/50 overflow-hidden hover:shadow-2xl hover:shadow-purple-500/10 dark:hover:shadow-purple-400/5 transition-all duration-500 hover:-translate-y-2">
                
                {/* Project Image Placeholder */}
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-300 dark:from-gray-800 dark:to-gray-900">
                  <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-20`}></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className={`p-6 bg-gradient-to-br ${project.color} rounded-2xl transform group-hover:rotate-12 transition-transform duration-500`}>
                      <project.icon className="w-12 h-12 text-white" />
                    </div>
                  </div>
                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 text-xs font-bold rounded-full backdrop-blur-sm ${
                      project.status === 'Live' 
                        ? 'bg-green-500/20 text-green-700 dark:text-green-400 border border-green-500/30' 
                        : 'bg-blue-500/20 text-blue-700 dark:text-blue-400 border border-blue-500/30'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  {/* Category */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 text-xs font-semibold bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full">
                      {project.category}
                    </span>
                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                      <HiUsers className="w-4 h-4" />
                      <span>{project.users}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300 line-clamp-1">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Metrics */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {project.metrics.map((metric, idx) => (
                      <div key={idx} className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-3">
                        <div className="text-lg font-bold bg-gradient-to-r from-gray-800 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                          {metric.value}
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.slice(0, 4).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="px-3 py-1 text-xs bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 rounded-full">
                        +{project.tech.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <motion.a
                      href={project.github}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 font-medium rounded-lg transition-all duration-300 group/github"
                    >
                      <FaGithub className="w-4 h-4 group-hover/github:rotate-12 transition-transform duration-300" />
                      Code
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 group/demo"
                    >
                      <FaPlay className="w-4 h-4 group-hover/demo:translate-x-1 transition-transform duration-300" />
                      Demo
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-gray-900 dark:to-gray-800 rounded-2xl border border-purple-100 dark:border-purple-800/30 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-500">
            <div className="text-left">
              <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                Want to see more projects?
              </h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Explore detailed case studies and technical implementations
              </p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
            >
              View All Projects
              <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;