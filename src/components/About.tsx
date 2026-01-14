import { motion } from "framer-motion";
import { Code, Palette, Rocket, Zap, Users, Target } from "lucide-react";

const About = () => {
  const skills = [
    { name: "Angular", level: 85, color: "from-red-600 to-red-500" }, // Angular Red
    { name: "Vue", level: 60, color: "from-green-500 to-green-400" }, // Vue Green
    { name: "JavaScript", level: 80, color: "from-yellow-400 to-yellow-300" }, // JavaScript Yellow
    { name: "TypeScript", level: 80, color: "from-blue-600 to-blue-500" }, // TypeScript Blue
    { name: "HTML5/CSS", level: 90, color: "from-orange-400 to-orange-500" }, // Tailwind Cyan
    { name: "Tailwind CSS", level: 90, color: "from-cyan-400 to-teal-400" }, // Tailwind Cyan
    { name: "UI/UX Design", level: 85, color: "from-purple-500 to-pink-500" }, // Creative Purple-Pink
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
    <section id="about" className="py-16 lg:py-20 bg-white">
      <div className="container mx-auto sm:px-4 lg:px-8">
        {/* ABOUT INTRO */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center px-4 sm:px-0"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
            About Me
          </h3>
          <div className="w-20 h-1 mx-auto bg-blue-100 rounded-full mb-6" />
          <div className="text-lg sm:text-xl text-gray-900 font-medium mb-4">
            Crafting digital experiences with clarity and purpose
          </div>
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed text-sm sm:text-base md:text-lg">
            I'm a <strong>frontend developer</strong> passionate about creating
            clean, intuitive, and visually engaging web experiences. I turn
            ideas into functional, accessible, and user-friendly products that
            blend great design with solid code.
          </p>
        </motion.div>

        <div className="w-full h-px bg-gray-100 lg:my-10 my-8" />

        {/* STORY + SKILLS */}
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 mb-12 sm:mb-16 lg:mb-20">
          {/* MY STORY */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="px-4 sm:px-0"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
              My Story
            </h3>
            <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
              I'm a passionate <strong>frontend developer</strong> with over 3
              years of experience building modern, responsive, and user-friendly
              web applications. I love creating products that look great and
              work seamlessly on any device.
            </p>
            <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
              I specialize in <strong>Angular</strong> and{" "}
              <strong>Vue.js</strong>, along with <strong>TypeScript</strong>{" "}
              and <strong>Tailwind CSS</strong>. My focus is on writing clean,
              scalable code and bringing designs to life through smooth,
              high-performance interfaces.
            </p>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              Beyond coding, I'm always eager to learn new technologies, improve
              my skills, and stay updated with the latest best practices. Every
              project I work on is a chance to grow, innovate, and create
              something meaningful for users.
            </p>
          </motion.div>

          {/* TECHNICAL SKILLS */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-4 sm:space-y-5 px-4 sm:px-0"
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
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm sm:text-base font-medium text-gray-700">
                    {skill.name}
                  </span>
                  <span className="text-xs sm:text-sm text-gray-500">
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 sm:h-2.5 overflow-hidden">
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
          <h3 className="text-3xl sm:text-4xl font-bold text-center mb-10 lg:mb-14 text-gray-900 tracking-tight">
            What I Do
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(({ Icon, title, description }, index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -6, scale: 1.04 }}
                className="p-6 sm:p-8 rounded-xl sm:rounded-2xl bg-[#f5f5f7]"
              >
                <div className="flex flex-col items-center gap-2 mb-4">
                  <div className="w-14 h-14 lg:w-16 lg:h-16 bg-blue-100 rounded-full flex items-center justify-center">
                    <Icon size={28} className="text-[#0071e3]" />
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold mb-2 text-gray-900">
                    {title}
                  </h4>
                </div>
                <p className="text-base text-gray-600 leading-relaxed">
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
