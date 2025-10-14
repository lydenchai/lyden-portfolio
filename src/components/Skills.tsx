import { motion } from "framer-motion";
import Icon from "@mdi/react";
import {
  mdiAngular,
  mdiVuejs,
  mdiReact,
  mdiLanguageJavascript,
  mdiLanguageTypescript,
  mdiLanguageHtml5,
  mdiTailwind,
} from "@mdi/js";

const Skills = () => {
  const skills = [
    {
      name: "Angular",
      level: 80,
      icon: mdiAngular,
      color: "#dd0031",
      description:
        "Component-based framework for building scalable web applications",
    },
    {
      name: "Vue.js",
      level: 65,
      icon: mdiVuejs,
      color: "#42b883",
      description: "Progressive framework for building user interfaces",
    },
    {
      name: "React",
      level: 55,
      icon: mdiReact,
      color: "#61dafb",
      description: "JavaScript library for building user interfaces",
    },
    {
      name: "JavaScript",
      level: 85,
      icon: mdiLanguageJavascript,
      color: "#f7df1e",
      description: "Dynamic programming language for web development",
    },
    {
      name: "TypeScript",
      level: 90,
      icon: mdiLanguageTypescript,
      color: "#3178c6",
      description:
        "Strongly typed programming language that builds on JavaScript",
    },
    {
      name: "HTML/CSS",
      level: 80,
      icon: mdiLanguageHtml5,
      color: "#e34f26",
      description: "Markup and styling languages for web structure and design",
    },
    {
      name: "Tailwind",
      level: 80,
      icon: mdiTailwind,
      color: "#38bdf8",
      description: "Utility-first CSS framework for rapid UI development",
    },
    {
      name: "UX/UI Design",
      level: 82,
      icon: mdiTailwind,
      color: "#38bdf8",
      description: "Designing user-centric interfaces and experiences",
    },
  ];

  return (
    <section id="skills" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            My <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-xs sm:max-w-2xl lg:max-w-3xl mx-auto px-4 sm:px-0 leading-relaxed">
            Technologies and frameworks I use to build modern, scalable, and
            performant web applications and enterprise systems.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 px-4 sm:px-0">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{
                y: -10,
                scale: 1.05,
                boxShadow: `0 20px 40px ${skill.color}20`,
              }}
              className="group relative bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-100"
            >
              {/* Gradient background on hover */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-200"
                style={{ backgroundColor: skill.color }}
              />

              {/* Content */}
              <div className="relative z-10 text-center">
                <div
                  className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 rounded-full flex items-center justify-center shadow-lg"
                  style={{ backgroundColor: skill.color }}
                >
                  <Icon
                    path={skill.icon}
                    size={1}
                    className="sm:w-6 sm:h-6"
                    color="white"
                  />
                </div>

                <h3 className="text-sm sm:text-base lg:text-xl font-bold text-gray-900 mb-2 group-hover:text-gray-800 transition-colors">
                  {skill.name}
                </h3>

                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed hidden sm:block">
                  {skill.description}
                </p>

                {/* Skill level indicator */}
                <div className="mt-4">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <motion.div
                      className="h-2 rounded-full"
                      style={{ backgroundColor: skill.color }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    />
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 w-1 h-1 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-10 sm:mt-12 lg:mt-16 text-center px-4 sm:px-0"
        >
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl sm:rounded-2xl p-6 sm:p-8 max-w-4xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
              Additional Technologies
            </h3>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
              {[
                "Vite",
                "MySQL",
                "Laravel",
                "Socket.io",
                "Chart.js",
                "Material-UI",
                "Bootstrap",
                "Git",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-3 sm:px-4 py-1 sm:py-2 bg-white text-gray-700 rounded-full text-xs sm:text-sm font-medium shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
