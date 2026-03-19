import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import projectMediscan from "@/assets/project-mediscan.png";
import projectEcommerce from "@/assets/project-ecommerce.png";

const projects = [
  {
    image: projectMediscan,
    title: "MediScan App",
    subtitle: "AI-Powered Health Application",
    link: "#",
  },
  {
    image: projectEcommerce,
    title: "E-Commerce Platform",
    subtitle: "Custom Online Store",
    link: "#",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1] as const,
    },
  },
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-16">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="section-title text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          Featured Projects
        </motion.h2>
        
        <motion.div 
          className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              className="project-card overflow-hidden"
              variants={cardVariants}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Project Image */}
              <div className="aspect-video overflow-hidden bg-muted">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.4 }}
                />
              </div>
              
              {/* Project Info */}
              <div className="p-6">
                <h3 className="font-heading font-semibold text-xl text-foreground mb-1">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.subtitle}
                </p>
                <motion.a
                  href={project.link}
                  className="inline-flex items-center gap-2 text-accent font-semibold text-sm"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  View Project
                  <ArrowRight className="w-4 h-4" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
