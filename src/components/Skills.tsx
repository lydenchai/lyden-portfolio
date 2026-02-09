import { motion, useAnimation } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Icon from "@mdi/react";
import {
  mdiAngular,
  mdiVuejs,
  mdiReact,
  mdiLanguageJavascript,
  mdiLanguageTypescript,
  mdiLanguageHtml5,
  mdiTailwind,
  mdiPalette,
  mdiChevronLeft,
  mdiChevronRight,
  mdiGit,
  mdiNodejs,
  mdiDatabase,
  mdiApi,
  mdiMaterialUi,
} from "@mdi/js";

const Skills = () => {
  const skills = [
    {
      name: "Angular",
      level: 90,
      icon: mdiAngular,
      color: "#dd0031",
      bg: "bg-red-50",
      description:
        "Architecting enterprise-grade SPAs with high performance and scalability.",
    },
    {
      name: "Vue.js",
      level: 85,
      icon: mdiVuejs,
      color: "#42b883",
      bg: "bg-emerald-50",
      description:
        "Crafting reactive, lightweight, and intuitive user interfaces.",
    },
    {
      name: "React",
      level: 80,
      icon: mdiReact,
      color: "#61dafb",
      bg: "bg-cyan-50",
      description:
        "Building dynamic component-based architectures for modern web apps.",
    },
    {
      name: "TypeScript",
      level: 85,
      icon: mdiLanguageTypescript,
      color: "#3178c6",
      bg: "bg-blue-50",
      description:
        "Ensuring type safety and robust codebases for complex applications.",
    },
    {
      name: "JavaScript",
      level: 90,
      icon: mdiLanguageJavascript,
      color: "#f7df1e",
      bg: "bg-yellow-50",
      description:
        "Leveraging ES6+ features for interactive and dynamic web experiences.",
    },
    {
      name: "HTML5 & CSS3",
      level: 95,
      icon: mdiLanguageHtml5,
      color: "#e34f26",
      bg: "bg-orange-50",
      description:
        "Writing semantic markup and responsive, pixel-perfect styles.",
    },
    {
      name: "Tailwind CSS",
      level: 90,
      icon: mdiTailwind,
      color: "#38bdf8",
      bg: "bg-sky-50",
      description:
        "Rapidly prototyping and styling with a utility-first approach.",
    },
    {
      name: "UI/UX Design",
      level: 80,
      icon: mdiPalette,
      color: "#a855f7",
      bg: "bg-purple-50",
      description:
        "Designing intuitive user journeys and aesthetic interfaces.",
    },
  ];

  const controls = useAnimation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const cardWidth = 360; // Slightly wider cards
  const gap = 32; // Increased gap
  const stride = cardWidth + gap;
  const totalWidth = skills.length * stride;

  useEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
    }

    const handleResize = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxScroll = Math.min(0, -(totalWidth - containerWidth + 48));

  useEffect(() => {
    const targetX = -currentIndex * stride;
    const finalX = Math.max(targetX, maxScroll);
    controls.start({ x: finalX });
  }, [currentIndex, maxScroll, controls, stride]);

  const handleNext = () => {
    if (currentIndex < skills.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleDragEnd = (
    _event: MouseEvent | TouchEvent | PointerEvent,
    info: { offset: { x: number }; velocity: { x: number } },
  ) => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;
    const currentX = -currentIndex * stride;
    const predictedX = currentX + offset + velocity * 0.2;
    const estimatedIndex = -predictedX / stride;
    let newIndex = Math.round(estimatedIndex);
    newIndex = Math.max(0, Math.min(skills.length - 1, newIndex));
    setCurrentIndex(newIndex);
  };

  return (
    <section id="skills" className="py-16 lg:py-20 bg-white overflow-hidden">
      <div className="container mx-auto sm:px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            My Technical Skills
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed font-light">
            I leverage a modern stack to build robust, scalable, and
            high-performance digital solutions.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative w-full" ref={containerRef}>
          <motion.div
            drag="x"
            dragConstraints={{ left: maxScroll, right: 0 }}
            animate={controls}
            onDragEnd={handleDragEnd}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="flex gap-6 pl-4 cursor-grab active:cursor-grabbing pb-12"
          >
            {skills.map((skill, idx) => (
              <motion.div
                key={skill.name}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="min-w-[360px] bg-white rounded-[2rem] p-8 flex flex-col justify-between relative shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] border border-gray-100 hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.12)] transition-shadow duration-300"
              >
                <div>
                  {/* Icon with colored background */}
                  <div
                    className={`w-16 h-16 rounded-2xl ${skill.bg} flex items-center justify-center mb-8`}
                  >
                    <Icon path={skill.icon} size={2} color={skill.color} />
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">
                    {skill.name}
                  </h3>

                  <p className="text-gray-600 text-[17px] leading-relaxed mb-8 font-medium opacity-90">
                    {skill.description}
                  </p>
                </div>

                {/* Progress */}
                <div>
                  <div className="flex justify-between items-end mb-3">
                    <span className="text-sm font-medium text-gray-400 uppercase tracking-widest">
                      Proficiency
                    </span>
                    <span className="text-lg font-bold text-gray-900">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 1.5,
                        ease: "easeOut",
                        delay: idx * 0.1,
                      }}
                      className="h-full rounded-full"
                      style={{ background: skill.color }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Navigation Controls */}
        <div className="flex justify-end gap-4 px-4 mt-8 mb-20">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className={`w-14 h-14 rounded-full flex items-center justify-center transition-all border border-gray-200 ${
              currentIndex === 0
                ? "bg-gray-50 text-gray-300 cursor-not-allowed"
                : "bg-white text-gray-900 hover:bg-gray-50 hover:border-gray-300 hover:shadow-md cursor-pointer"
            }`}
          >
            <Icon path={mdiChevronLeft} size={1.5} />
          </button>
          <button
            onClick={handleNext}
            disabled={
              currentIndex === skills.length - 1 ||
              -(currentIndex + 1) * stride < maxScroll - 50
            }
            className={`w-14 h-14 rounded-full flex items-center justify-center transition-all border border-gray-200 ${
              currentIndex === skills.length - 1 ||
              -(currentIndex + 1) * stride < maxScroll - 50
                ? "bg-gray-50 text-gray-300 cursor-not-allowed"
                : "bg-white text-gray-900 hover:bg-gray-50 hover:border-gray-300 hover:shadow-md cursor-pointer"
            }`}
          >
            <Icon path={mdiChevronRight} size={1.5} />
          </button>
        </div>

        {/* Additional Technologies - Grid Layout */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto px-4"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Other Technologies Used
            </h3>
            <p className="text-gray-500">
              Expanding my toolkit to solve diverse problems.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { name: "Node.js", icon: mdiNodejs },
              { name: "Sequelize", icon: mdiDatabase },
              { name: "REST APIs", icon: mdiApi },
              { name: "Vite", icon: mdiMaterialUi }, // Placeholder if needed
              { name: "Git", icon: mdiGit },
              { name: "MySQL", icon: mdiDatabase },
              { name: "Ionic", icon: mdiReact }, // React icon for Ionic/React
              { name: "PHP/Laravel", icon: mdiLanguageHtml5 }, // HTML/General for others
              { name: "Figma", icon: mdiPalette },
              { name: "Chart.js", icon: mdiMaterialUi },
            ].map((tech) => (
              <div
                key={tech.name}
                className="group p-6 bg-gray-50 rounded-2xl flex flex-col items-center justify-center gap-3 hover:bg-indigo-50 transition-colors duration-300 border border-transparent hover:border-indigo-100"
              >
                <div className="text-gray-400 group-hover:text-indigo-600 transition-colors">
                  <Icon path={tech.icon} size={1.5} />
                </div>
                <span className="font-semibold text-gray-700 group-hover:text-indigo-700 transition-colors text-center">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
