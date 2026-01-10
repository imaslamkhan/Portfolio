import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['Flutter', 'React.js', 'HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS', 'Responsive Design'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Express.js', 'FastAPI', 'REST APIs', 'MongoDB', 'MySQL', 'Authentication'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Mobile',
      skills: ['Flutter', 'Dart', 'Android', 'iOS', 'Cross-platform', 'State Management', 'Provider', 'GetX'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Tools & Cloud',
      skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'Figma', 'Cloudinary', 'Render', 'XAMPP'],
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Languages',
      skills: ['Dart', 'JavaScript', 'Java', 'Python', 'SQL', 'HTML', 'CSS'],
      color: 'from-indigo-500 to-purple-500'
    },
    {
      title: 'Soft Skills',
      skills: ['Problem Solving', 'Leadership', 'Communication', 'Time Management', 'Teamwork'],
      color: 'from-pink-500 to-rose-500'
    }
  ];

  return (
    <section id="skills" ref={ref} className="py-20 bg-white dark:bg-dark-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              className="group"
            >
              <div className="h-full p-6 bg-white/80 dark:bg-black/20 backdrop-blur-sm rounded-xl border border-white/20 dark:border-gray-800 hover:shadow-xl hover:shadow-neon-blue/10 transition-all duration-500 hover:scale-105">
                <div className={`inline-flex p-3 bg-gradient-to-r ${category.color} rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="w-6 h-6 bg-white rounded"></div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {category.title}
                </h3>
                
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ 
                        duration: 0.5, 
                        delay: categoryIndex * 0.1 + skillIndex * 0.05 
                      }}
                      className="inline-block"
                    >
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 mr-2 mb-2">
                        {skill}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;