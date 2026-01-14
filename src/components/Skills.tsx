import { motion } from "framer-motion";
import Icon from "@mdi/react";
import {
  mdiAngular,
  mdiVuejs,
  mdiLanguageJavascript,
  mdiLanguageTypescript,
  mdiLanguageHtml5,
  mdiTailwind,
  mdiPalette,
} from "@mdi/js";

const Skills = () => {
  const skills = [
    {
      name: "Angular",
      level: 85,
      icon: mdiAngular,
      color: "#dd0031",
      description:
        "Component-based framework for building scalable web applications",
    },
    {
      name: "Vue",
      level: 60,
      icon: mdiVuejs,
      color: "#42b883",
      description: "Progressive framework for building user interfaces",
    },
    {
      name: "JavaScript",
      level: 80,
      icon: mdiLanguageJavascript,
      color: "#f7df1e",
      description: "Dynamic programming language for web development",
    },
    {
      name: "TypeScript",
      level: 80,
      icon: mdiLanguageTypescript,
      color: "#3178c6",
      description:
        "Strongly typed programming language that builds on JavaScript",
    },
    {
      name: "HTML5/CSS",
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
      level: 85,
      icon: mdiPalette,
      color: "#a855f7",
      description: "Designing user-centric interfaces and experiences",
    },
  ];

  return (
    <section id="skills" className="py-16 lg:py-20 bg-white overflow-hidden">
      <div className="container mx-auto sm:px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14 px-4"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            My <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Technologies and frameworks I use to build modern, scalable, and
            high-performance applications.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative w-full">
          {/* Fade edges */}
          <motion.div
            drag="x"
            dragConstraints={{
              left: -((skills.length - 1) * 364.5), // matches min-w-[350px] for mobile
              right: 0,
            }}
            className="flex gap-6 pl-4 cursor-grab active:cursor-grabbing"
          >
            {skills.map((skill, idx) => (
              <motion.div
                key={skill.name}
                whileHover={{ y: -6, scale: 1.04 }}
                transition={{
                  type: "spring",
                  stiffness: 280,
                  damping: 22,
                }}
                className="min-w-[340px] bg-[#f5f5f7] rounded-2xl px-4 sm:px-6 py-6 sm:py-8 text-center flex flex-col items-center"
              >
                {/* Icon */}
                <div className="mb-5">
                  <div
                    className="w-16 h-16 flex items-center justify-center rounded-full"
                    style={{
                      background: `linear-gradient(135deg, ${skill.color}20, ${skill.color}40)`,
                    }}
                  >
                    <Icon path={skill.icon} size={1.6} color={skill.color} />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-base font-semibold text-gray-900 mb-1">
                  {skill.name}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-500 mb-4 max-w-[180px] leading-relaxed">
                  {skill.description}
                </p>

                {/* Progress */}
                <div className="w-full bg-gray-300 rounded-full h-1.5 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, delay: idx * 0.05 }}
                    className="h-1.5 rounded-full"
                    style={{
                      background: `linear-gradient(90deg, ${skill.color}80, ${skill.color})`,
                    }}
                  />
                </div>

                <span className="mt-2 text-xs text-gray-400">
                  {skill.level}%
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Hint */}
        <p className="mt-6 text-center text-sm text-gray-400">
          Drag horizontally to explore →
        </p>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center px-4"
        >
          <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-8 max-w-4xl mx-auto ">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Additional Technologies
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Ionic",
                "Node.js",
                "PHP/Laravel",
                "MySQL",
                "REST APIs",
                "Vite",
                "Chart.js",
                "Material UI",
                "Git",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition"
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
