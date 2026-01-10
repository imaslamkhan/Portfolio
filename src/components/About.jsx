import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { HiCode, HiDeviceMobile, HiServer } from 'react-icons/hi';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

  const stats = [
    { icon: HiCode, label: 'Years Experience', value: '2+' },
    { icon: HiDeviceMobile, label: 'Mobile Apps Built', value: '10+' },
    { icon: HiServer, label: 'API Integrations', value: '25+' },
  ];

  return (
    <section id="about" ref={ref} className="py-20 bg-gray-50 dark:bg-dark-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-6">
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                I'm a passionate <strong className="text-neon-blue">Flutter Developer</strong> and 
                <strong className="text-neon-purple"> Full Stack Engineer</strong> with 2+ years of expertise in 
                building scalable cross-platform applications. Currently working as an Associate Software 
                Developer at Levitica Technologies while also taking on exciting freelance projects.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                My journey began with a diploma in Computer Science (82.29%), followed by a Bachelor's degree 
                with an impressive 8.2 CGPA from GH Raisoni University. I've gained hands-on experience through 
                multiple internships and have successfully delivered 10+ projects ranging from EdTech platforms 
                to enterprise management systems.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                I specialize in Flutter mobile development, Node.js backend services, and modern web technologies. 
                I've published research on "Emotional Health Monitoring on Social Media" and am passionate about 
                leveraging AI/ML in mobile applications. <strong className="text-neon-green">Currently available 
                for freelance projects</strong> and always excited to work on innovative solutions.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                className="flex items-center p-6 bg-white/80 dark:bg-black/20 backdrop-blur-sm rounded-xl border border-white/20 dark:border-gray-800 hover:shadow-lg hover:shadow-neon-blue/10 transition-all duration-300"
              >
                <div className="p-3 bg-gradient-to-r from-neon-blue to-neon-purple rounded-lg mr-4">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;