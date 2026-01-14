import { motion } from "framer-motion";

// Import project images
import hrImg from "../../public/images/hr.png";
import accImg from "../../public/images/acc.png";
import benefitImg from "../../public/images/benefit.png";
import inspectionImg from "../../public/images/inspection.png";
import hospitalImg from "../../public/images/hospital.png";
import rehabilitationImg from "../../public/images/rehabilitation.png";
import goAheadImg from "../../public/images/go-ahead.png";
import pinkyImg from "../../public/images/pinky-clothing-shop.png";
import cgmcImg from "../../public/images/cgmc-hr.png";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "NSSF HR Admin",
      description:
        "Comprehensive HR management platform streamlining employee lifecycle, payroll processing, and workforce analytics for Cambodia's National Social Security Fund.",
      image: hrImg,
      featured: true,
      details: {
        title: "Human Resource Management System",
      },
      technologies: ["Angular-15", "SCSS", "Bootstrap", "Docker", "Nginx"],
    },
    {
      id: 2,
      title: "NSSF Accounting Admin",
      description:
        "Advanced financial management system automating accounting processes, generating detailed reports, and ensuring compliance with national financial regulations.",
      image: accImg,
      featured: true,
      details: {
        title: "Accounting Management System",
      },
      technologies: ["Angular-20", "SCSS", "Bootstrap", "Docker", "Nginx"],
    },
    {
      id: 3,
      title: "NSSF Benefit Admin",
      description:
        "Digital healthcare benefit platform enabling seamless claim processing, provider network management, and patient care coordination across Cambodia.",
      image: benefitImg,
      featured: true,
      details: {
        title: "Health Care Benefit Management System",
      },
      technologies: ["Angular-17", "SCSS", "Bootstrap", "Docker", "Nginx"],
    },
    {
      id: 4,
      title: "NSSF Inspection Admin",
      description:
        "Smart inspection management system optimizing compliance monitoring, scheduling inspections, and generating comprehensive audit reports for social security operations.",
      image: inspectionImg,
      featured: true,
      details: {
        title: "Social Security Inspection System",
      },
      technologies: ["Angular-17", "SCSS", "Bootstrap", "Docker", "Nginx"],
    },
    {
      id: 5,
      title: "NSSF Hospital Admin",
      description:
        "Integrated hospital management solution coordinating patient care, medical records, staff scheduling, and resource allocation for healthcare facilities.",
      image: hospitalImg,
      featured: true,
      details: {
        title: "Hospital Management System",
      },
      technologies: ["Angular-17", "SCSS", "Bootstrap", "Docker", "Nginx"],
    },
    {
      id: 6,
      title: "NSSF Rehabilitation Admin",
      description:
        "Specialized rehabilitation management platform tracking patient progress, therapy sessions, and recovery outcomes with data-driven insights.",
      image: rehabilitationImg,
      featured: true,
      details: {
        title: "Rehabilitation Management System",
      },
      technologies: ["Angular-17", "SCSS", "Bootstrap", "Docker", "Nginx"],
    },
    {
      id: 6,
      title: "CGMC HR Admin",
      description:
        "Comprehensive HR management platform streamlining employee lifecycle, payroll processing, and workforce analytics for the Commercial Gambling Management Commission of Cambodia.",
      image: cgmcImg,
      featured: true,
      details: {
        title: "Commercial Gambling Management Commission of Cambodia",
      },
      technologies: ["Angular-15", "RxJS", "SCSS", "Bootstrap", "Docker"],
    },
    {
      id: 7,
      title: "Bontub Rental Platform",
      description:
        "Modern property rental marketplace connecting landlords and tenants with smart matching algorithms, secure payments, and comprehensive property management tools.",
      image: "https://bontub.com/bg-hero.png",
      featured: true,
      details: {
        title: "Rental Management System",
      },
      technologies: ["Angular-17", "SCSS", "Bootstrap", "Docker", "Nginx"],
    },
    {
      id: 8,
      title: "GoAhead School Management System",
      description:
        "Comprehensive school management platform streamlining student enrollment, academic tracking, staff management, and administrative processes for educational institutions.",
      image: goAheadImg,
      featured: false,
      details: {
        title: "School Management System",
      },
      technologies: [
        "Vue-2",
        "JavaScript",
        "SCSS",
        "Bootstrap",
        "Node.js",
        "Express.js",
        "Sequelize",
      ],
    },
    {
      id: 9,
      title: "Pinky Clothing E-commerce Platform",
      description:
        "Feature-rich e-commerce solution for Pinky Clothing, offering seamless product browsing, secure checkout, and personalized shopping experiences.",
      image: pinkyImg,
      featured: false,
      details: {
        title: "E-commerce Platform",
      },
      technologies: [
        "Angular-20",
        "SCSS",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
      ],
    },
  ];

  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <section id="projects" className="py-16 lg:py-20 bg-[#f5f5f7]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
            My <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg lg:text-xl">
            Showcasing enterprise-level applications and platforms I've
            developed, focusing on scalable solutions and exceptional user
            experiences.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="mb-12 sm:mb-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-center">
            Featured Projects
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -6, scale: 1.04 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white rounded-2xl overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    className="w-full h-48 sm:h-56 lg:h-64 object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = `https://via.placeholder.com/800x400/6366f1/ffffff?text=${encodeURIComponent(
                        project.title
                      )}`;
                    }}
                  />
                </div>
                <div className="p-4 sm:p-6 lg:p-8">
                  <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                    {project.title}
                  </h4>
                  <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.technologies &&
                      project.technologies.filter(Boolean).map((tech, idx) => (
                        <span
                          key={idx}
                          className="bg-gray-100 text-gray-800 text-xs font-semibold px-2.5 py-1 rounded-full border border-gray-200"
                        >
                          {tech}
                        </span>
                      ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-center">
            Other Projects
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -6, scale: 1.04 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white rounded-2xl overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    className="w-full h-48 sm:h-56 lg:h-64 object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = `https://via.placeholder.com/800x400/6366f1/ffffff?text=${encodeURIComponent(
                        project.title
                      )}`;
                    }}
                  />
                </div>
                <div className="p-4 sm:p-6 lg:p-8">
                  <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                    {project.title}
                  </h4>
                  <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.technologies &&
                      project.technologies.filter(Boolean).map((tech, idx) => (
                        <span
                          key={idx}
                          className="bg-gray-100 text-gray-800 text-xs font-semibold px-2.5 py-1 rounded-full border border-gray-200"
                        >
                          {tech}
                        </span>
                      ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
