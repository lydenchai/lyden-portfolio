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
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            My <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Technologies and frameworks I use to build modern, scalable, and
            performant web applications and enterprise systems.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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
              className="group relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-100"
            >
              {/* Gradient background on hover */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-200"
                style={{ backgroundColor: skill.color }}
              />

              {/* Content */}
              <div className="relative z-10 text-center">
                <div
                  className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center shadow-lg"
                  style={{ backgroundColor: skill.color }}
                >
                  <Icon path={skill.icon} size={1.5} color="white" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-gray-800 transition-colors">
                  {skill.name}
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed">
                  {skill.description}
                </p>

                {/* Skill level indicator */}
                <div className="mt-4">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <motion.div
                      className="h-2 rounded-full"
                      style={{ backgroundColor: skill.color }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}` }}
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
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Additional Technologies
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
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
                  className="px-4 py-2 bg-white text-gray-700 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-shadow duration-200"
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
