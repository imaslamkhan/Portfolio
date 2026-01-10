import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { HiBriefcase, HiCalendar, HiLocationMarker } from 'react-icons/hi';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

  const experiences = [
    {
      title: 'Associate Software Developer',
      company: 'LEVITICA TECHNOLOGIES PRIVATE LIMITED',
      location: 'Nagpur, MH',
      period: 'Aug 2025 – Current',
      type: 'Full-time',
      achievements: [
        'Developed 5+ cross-platform Flutter applications for mobile and desktop with clean, scalable UI architecture',
        'Built and integrated 15+ REST APIs using Node.js and Express, ensuring secure and efficient data flow',
        'Implemented JWT authentication, optimized database queries, and managed databases using MySQL and MongoDB',
        'Deployed backend services on Render and validated APIs using Postman, achieving 99.9% uptime',
        'Collaborated with cross-functional teams to deliver projects 20% ahead of schedule'
      ],
      tech: ['Flutter', 'Dart', 'Node.js', 'Express', 'MySQL', 'MongoDB', 'Render', 'Postman']
    },
    {
      title: 'Freelance Flutter Developer',
      company: 'Self-Employed',
      location: 'Remote',
      period: 'Jan 2023 – Current',
      type: 'Freelance',
      achievements: [
        'Delivered 8+ mobile applications for clients across EdTech, Healthcare, and E-commerce domains',
        'Specialized in Flutter development with custom UI/UX design and seamless API integrations',
        'Maintained 100% client satisfaction rate with on-time delivery and post-launch support',
        'Implemented advanced features like real-time chat, payment gateways, and push notifications',
        'Generated $15K+ revenue through freelance projects while maintaining full-time employment'
      ],
      tech: ['Flutter', 'Dart', 'Firebase', 'Payment APIs', 'Push Notifications', 'Real-time Chat']
    },
    {
      title: 'Full Stack Developer - Intern',
      company: 'SYNCSAS TECHNOLOGIES',
      location: 'Nagpur, MH',
      period: 'Jan 2024 – June 2024',
      type: 'Internship',
      achievements: [
        'Assisted in Websites and Application development for enterprise applications, enhancing performance by 25%',
        'Optimized SQL queries and integrated APIs, increasing data processing speed by 40%',
        'Created responsive front-end interfaces with HTML, CSS, JavaScript boosting user engagement by 20%'
      ],
      tech: ['HTML', 'CSS', 'JavaScript', 'SQL', 'APIs']
    },
    {
      title: 'Full Stack Development - Intern',
      company: 'QASWA TECHNOLOGIES PVT.LTD',
      location: 'Nagpur, MH',
      period: 'June 2020 – Aug 2020',
      type: 'Internship',
      achievements: [
        'Developed and maintained web applications using HTML, CSS, JavaScript',
        'Designed user interface elements such as buttons, forms, menus'
      ],
      tech: ['HTML', 'CSS', 'JavaScript']
    }
  ];

  return (
    <section id="experience" ref={ref} className="py-20 bg-gray-50 dark:bg-dark-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Professional journey and key achievements in software development
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-gradient-to-b from-neon-blue to-neon-purple"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full border-4 border-white dark:border-dark-secondary shadow-lg"></div>

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-white/80 dark:bg-black/20 backdrop-blur-sm p-6 rounded-xl border border-white/20 dark:border-gray-800 shadow-lg hover:shadow-xl hover:shadow-neon-blue/10 transition-all duration-300"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                        exp.type === 'Full-time' 
                          ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                          : 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400'
                      }`}>
                        {exp.type}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {exp.title}
                    </h3>

                    <div className="flex items-center gap-4 mb-4 text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center gap-1">
                        <HiBriefcase className="w-4 h-4" />
                        {exp.company}
                      </div>
                      <div className="flex items-center gap-1">
                        <HiLocationMarker className="w-4 h-4" />
                        {exp.location}
                      </div>
                    </div>

                    <div className="flex items-center gap-1 mb-4 text-sm text-neon-blue">
                      <HiCalendar className="w-4 h-4" />
                      {exp.period}
                    </div>

                    <ul className="space-y-2 mb-4">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="text-gray-600 dark:text-gray-300 text-sm flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-neon-blue rounded-full mt-2 flex-shrink-0"></div>
                          {achievement}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-1">
                      {exp.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;