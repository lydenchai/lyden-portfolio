import { motion, useAnimation } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Icon from "@mdi/react";
import {
  mdiAngular,
  mdiVuejs,
  mdiLanguageJavascript,
  mdiLanguageTypescript,
  mdiLanguageHtml5,
  mdiTailwind,
  mdiPalette,
  mdiChevronLeft,
  mdiChevronRight,
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

  const controls = useAnimation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const cardWidth = 340;
  const gap = 24;
  const stride = cardWidth + gap;
  const totalWidth = skills.length * stride;

  useEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
    }

    // Simple resize listener
    const handleResize = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Calculate the maximum negative scroll (so we don't scroll past the end)
  // If content is smaller than container, drag limit is 0
  const maxScroll = Math.min(0, -(totalWidth - containerWidth + 32)); // +32 for padding

  useEffect(() => {
    const targetX = -currentIndex * stride;
    // Clamp to maxScroll
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

  // Optional: Update index on drag end (simplified snapping)
  // Update index on drag end matches the visual position
  const handleDragEnd = (_event: any, info: any) => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;

    // Current visual position (approximate)
    // We start at -currentIndex * stride
    // We moved by 'offset'
    const currentX = -currentIndex * stride;
    const predictedX = currentX + offset + velocity * 0.2; // 0.2 is a "power" factor for inertia

    // Calculate which index is closest to predictedX
    // x = -index * stride  =>  index = -x / stride
    const estimatedIndex = -predictedX / stride;

    // Round to nearest integer and clamp
    let newIndex = Math.round(estimatedIndex);
    newIndex = Math.max(0, Math.min(skills.length - 1, newIndex));

    setCurrentIndex(newIndex);
  };

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
        <div className="relative w-full" ref={containerRef}>
          {/* Fade edges */}
          <motion.div
            drag="x"
            dragConstraints={{
              left: maxScroll,
              right: 0,
            }}
            animate={controls}
            onDragEnd={handleDragEnd}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="flex gap-6 pl-4 cursor-grab active:cursor-grabbing pb-12"
          >
            {skills.map((skill, idx) => (
              <motion.div
                key={skill.name}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="min-w-[320px] h-[360px] bg-[#f5f5f7] rounded-[1.5rem] p-10 flex flex-col justify-between group cursor-default relative overflow-hidden text-left"
              >
                <div>
                  {/* Icon */}
                  <div className="mb-6">
                    <Icon path={skill.icon} size={2.5} color={skill.color} />
                  </div>

                  {/* Title */}
                  <h3 className="text-3xl font-semibold text-gray-900 mb-3 tracking-tight">
                    {skill.name}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-500 text-base font-medium leading-relaxed max-w-[95%]">
                    {skill.description}
                  </p>
                </div>

                {/* Bottom Progress - Minimalist */}
                <div className="w-full">
                  <div className="flex justify-between items-end mb-3">
                    <span className="text-[13px] font-semibold text-gray-400 uppercase tracking-widest">
                      Proficiency
                    </span>
                    <span className="text-base font-bold text-gray-900">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-1.5 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: idx * 0.1 }}
                      className="h-full rounded-full"
                      style={{ background: skill.color }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-end gap-4 px-4 -mt-6 mb-12">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className={`w-12 h-12 rounded-full flex items-center justify-center transition-all cursor-pointer ${
              currentIndex === 0
                ? "bg-gray-100 text-gray-300 cursor-not-allowed"
                : "bg-gray-100 text-gray-800 hover:bg-gray-200"
            }`}
          >
            <Icon path={mdiChevronLeft} size={1.2} />
          </button>
          <button
            onClick={handleNext}
            disabled={
              currentIndex === skills.length - 1 ||
              -(currentIndex + 1) * stride < maxScroll - 50 // tolerance
            }
            className={`w-12 h-12 rounded-full flex items-center justify-center transition-all cursor-pointer ${
              currentIndex === skills.length - 1 ||
              -(currentIndex + 1) * stride < maxScroll - 50
                ? "bg-gray-100 text-gray-300 cursor-not-allowed"
                : "bg-gray-100 text-gray-800 hover:bg-gray-200"
            }`}
          >
            <Icon path={mdiChevronRight} size={1.2} />
          </button>
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 max-w-[800px] mx-auto px-4"
        >
          <div className="bg-[#f5f5f7] rounded-[2.5rem] p-8 sm:p-12 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 tracking-tight">
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
                  className="px-5 py-2.5 bg-white rounded-full text-sm font-semibold text-gray-700 shadow-sm border border-gray-100 hover:scale-105 hover:shadow-md transition-all duration-300 cursor-default"
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
