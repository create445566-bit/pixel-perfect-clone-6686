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

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">Featured Projects</h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="project-card"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Project Image */}
              <div className="aspect-video overflow-hidden bg-muted">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
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
                <a
                  href={project.link}
                  className="inline-flex items-center gap-2 text-accent font-semibold text-sm hover:gap-3 transition-all"
                >
                  View Project
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
