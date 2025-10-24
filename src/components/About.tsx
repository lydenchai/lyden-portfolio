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
        {/* ABOUT INTRO */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 px-4 sm:px-0"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
            About Me
          </h3>
          <div className="w-20 h-1 mx-auto bg-blue-200 rounded-full mb-6" />
          <div className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-blue-600 font-medium mb-4">
            Crafting digital experiences with clarity and purpose
          </div>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            I'm a <strong>frontend developer</strong> who's passionate about
            creating clean, intuitive, and visually engaging web experiences. I
            turn ideas into functional, accessible, and user-friendly products
            that merge design aesthetics with technical precision.
          </p>
        </motion.div>

        <div className="w-full h-px bg-gray-100 my-10 sm:my-8" />

        {/* STORY + SKILLS */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 mb-12 sm:mb-16 lg:mb-20">
          {/* MY STORY */}
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
              I'm a dedicated <strong>frontend developer</strong> with over 3
              years of hands-on experience crafting modern, responsive, and
              user-focused web applications. I'm driven by a desire to create
              digital products that not only look great but also deliver
              exceptional usability across all devices.
            </p>
            <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
              My core expertise lies in <strong>Angular</strong>,{" "}
              <strong>Vue.js</strong>, and <strong>React</strong>, combined with{" "}
              <strong>TypeScript</strong> and
              <strong>Tailwind CSS</strong>. I focus on writing scalable,
              maintainable code that brings design systems to life through
              interactive and high-performance interfaces.
            </p>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Beyond coding, I'm passionate about continuous growth — exploring
              new technologies, adopting modern best practices, and contributing
              to the ever-evolving frontend ecosystem. Every project I take on
              is an opportunity to learn, innovate, and make an impact through
              thoughtful design and development.
            </p>
          </motion.div>

          {/* TECHNICAL SKILLS */}
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

        {/* WHAT I DO */}
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map(({ Icon, title, description }, index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="p-6 sm:p-8 rounded-xl sm:rounded-2xl bg-[#f5f5f7]"
              >
                <div className="flex items-center gap-4 sm:gap-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-blue-600 rounded-full flex items-center justify-center mb-4 sm:mb-6">
                    <Icon
                      size={20}
                      className="sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-white"
                    />
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
