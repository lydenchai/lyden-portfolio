import { motion } from "framer-motion";
import { Code, Palette, Rocket, Zap, Users, Target } from "lucide-react";

const About = () => {
  const skills = [
    { name: "Angular", level: 80, color: "from-red-600 to-red-500" }, // Angular Red
    { name: "Vue.js", level: 65, color: "from-green-500 to-green-400" }, // Vue Green
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
      title: "Project Management",
      description:
        "Leading projects from conception to deployment with attention to detail.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I'm a passionate frontend developer with 3+ years of experience
            building enterprise-level applications for government institutions
            and modern businesses. I specialize in creating scalable, secure,
            and user-friendly solutions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-6">My Story</h3>
            <p className="text-gray-600 mb-6">
              My expertise lies in developing comprehensive management systems
              for government and enterprise clients, where I've
              built multiple enterprise applications including HR, Accounting,
              Healthcare Benefits, Hospital Management, and Inspection systems.
            </p>
            <p className="text-gray-600 mb-6">
              I specialize in Angular and Vue.js frameworks, TypeScript, and modern
              full-stack development. My experience includes working with
              complex business logic, large-scale data management, and building
              secure, compliant applications for government and healthcare
              sectors.
            </p>
            <p className="text-gray-600">
              When I'm not coding, you can find me exploring new technologies,
              contributing to open source projects, or sharing knowledge with
              the developer community.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
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
                  <span className="font-semibold text-gray-700">
                    {skill.name}
                  </span>
                  <span className="text-sm text-gray-500">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <motion.div
                    className={`h-3 rounded-full bg-gradient-to-r ${skill.color}`}
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
        >
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            What I Do
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map(({ Icon, title, description }, index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r bg-blue-500 rounded-full flex items-center justify-center mb-6">
                  <Icon size={32} className="text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">
                  {title}
                </h4>
                <p className="text-gray-600">{description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
