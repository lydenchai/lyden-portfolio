import { motion } from "framer-motion";
import { Code, Palette, Rocket, Zap, Users, Target } from "lucide-react";

const About = () => {
  const skills = [
    { name: "Angular", level: 80, color: "from-red-600 to-red-500" }, // Angular Red
    { name: "Vue", level: 65, color: "from-green-500 to-green-400" }, // Vue Green
    { name: "React", level: 55, color: "from-cyan-400 to-blue-400" }, // React Blue
    { name: "JavaScript", level: 85, color: "from-yellow-400 to-yellow-300" }, // JavaScript Yellow
    { name: "TypeScript", level: 90, color: "from-blue-600 to-blue-500" }, // TypeScript Blue
    { name: "HTML/CSS", level: 90, color: "from-orange-400 to-orange-500" }, // Tailwind Cyan
    { name: "Tailwind CSS", level: 90, color: "from-cyan-400 to-teal-400" }, // Tailwind Cyan
    { name: "UI/UX Design", level: 82, color: "from-purple-500 to-pink-500" }, // Creative Purple-Pink
  ];

  const services = [
    {
      Icon: Code,
      title: "Frontend Development",
      description:
        "Building responsive and interactive web applications with modern frameworks.",
    },
    {
      Icon: Palette,
      title: "UI/UX Design",
      description:
        "Creating beautiful and intuitive user interfaces that enhance user experience.",
    },
    {
      Icon: Rocket,
      title: "Performance Optimization",
      description:
        "Optimizing applications for speed, accessibility, and search engine rankings.",
    },
    {
      Icon: Zap,
      title: "API Integration",
      description:
        "Seamlessly connecting frontend applications with backend services and APIs.",
    },
    {
      Icon: Users,
      title: "Team Collaboration",
      description:
        "Working effectively in agile teams using modern development workflows.",
    },
    {
      Icon: Target,
      title: "Quality Development",
      description:
        "Writing clean, maintainable code and delivering projects with attention to detail.",
    },
  ];

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto sm:px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-xs sm:max-w-2xl lg:max-w-3xl mx-auto px-4 sm:px-0 leading-relaxed">
            I'm a passionate frontend developer with 3+ years of experience
            building enterprise-level applications for government institutions
            and modern businesses. I specialize in creating scalable, secure,
            and user-friendly solutions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 mb-12 sm:mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="px-4 sm:px-0"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
              My Story
            </h3>
            <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
              I'm a passionate <strong>frontend developer</strong> specializing
              in creating modern, responsive web applications. With 3+ years of
              experience, I focus on building user-centric interfaces that
              provide exceptional experiences across all devices and platforms.
            </p>
            <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
              As a <strong>frontend developer</strong>, I excel in Angular,
              Vue.js, and React frameworks, combined with TypeScript and modern
              CSS solutions like Tailwind CSS. I transform UI/UX designs into
              interactive, performant web applications with clean, scalable code
              architecture.
            </p>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              My journey as a <strong>frontend developer</strong> involves
              continuous learning of emerging technologies, staying updated with
              the latest web standards, and contributing to the ever-evolving
              frontend development ecosystem.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-4 sm:space-y-6 px-4 sm:px-0"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
              Technical Skills
            </h3>
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, width: 0 }}
                whileInView={{ opacity: 1, width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm sm:text-base font-semibold text-gray-700">
                    {skill.name}
                  </span>
                  <span className="text-xs sm:text-sm text-gray-500">
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 sm:h-3">
                  <motion.div
                    className={`h-2 sm:h-3 rounded-full bg-gradient-to-r ${skill.color}`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="px-4 sm:px-0"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-8 sm:mb-10 lg:mb-12">
            What I Do
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map(({ Icon, title, description }, index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="bg-white p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center gap-4 sm:gap-6 mb-4 sm:mb-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-r from-indigo-900 to-blue-800 rounded-full flex items-center justify-center mb-4 sm:mb-6">
                    <Icon size={20} className="sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-white" />
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                    {title}
                  </h4>
                </div>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
