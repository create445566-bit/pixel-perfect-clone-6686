import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Github, Cloud, Rocket, Code2, Briefcase, BarChart3, Container, Layout, FolderOpen } from "lucide-react";
import projectMediscan from "@/assets/project-mediscan.png";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: [0.4, 0, 0.2, 1] as const },
  }),
};

const techColors: Record<string, string> = {
  React: "text-blue-500",
  TypeScript: "text-blue-700",
  Python: "text-yellow-600",
  AI: "text-purple-600",
  AWS: "text-orange-500",
  Flask: "text-gray-700",
  Pandas: "text-indigo-600",
  "Power BI": "text-yellow-500",
  Docker: "text-blue-500",
  "GitHub Actions": "text-green-600",
  YAML: "text-red-500",
  Tailwind: "text-cyan-500",
  Vite: "text-violet-500",
};

const smallProjects = [
  {
    icon: <FolderOpen className="w-6 h-6 text-blue-500" />,
    iconBg: "bg-blue-50",
    title: "Cloud File Manager",
    description: "Secure file storage & management system with AWS S3 integration",
    tech: ["AWS", "Python", "Flask"],
    viewLink: "#",
    githubLink: "#",
  },
  {
    icon: <BarChart3 className="w-6 h-6 text-green-500" />,
    iconBg: "bg-green-50",
    title: "Data Analytics Dashboard",
    description: "Interactive dashboard for visualizing sales & user data",
    tech: ["Python", "Pandas", "Power BI"],
    viewLink: "#",
    githubLink: "#",
  },
  {
    icon: <Container className="w-6 h-6 text-purple-500" />,
    iconBg: "bg-purple-50",
    title: "CI/CD Pipeline with Docker",
    description: "Automated deployment pipeline using Docker & GitHub Actions",
    tech: ["Docker", "GitHub Actions", "YAML"],
    viewLink: "#",
    githubLink: "#",
  },
  {
    icon: <Layout className="w-6 h-6 text-orange-500" />,
    iconBg: "bg-orange-50",
    title: "Personal Portfolio",
    description: "Responsive portfolio website showcasing projects & skills",
    tech: ["React", "Tailwind", "Vite"],
    viewLink: "#",
    githubLink: "#",
  },
];

const stats = [
  { icon: <Briefcase className="w-5 h-5 text-blue-500" />, value: "10+", label: "Projects Built" },
  { icon: <Cloud className="w-5 h-5 text-blue-500" />, value: "5+", label: "Cloud Projects" },
  { icon: <Code2 className="w-5 h-5 text-blue-500" />, value: "Full Stack", label: "Developer" },
  { icon: <Rocket className="w-5 h-5 text-red-500" />, value: "Always", label: "Learning" },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        {/* Title */}
        <motion.div
          className="text-center mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          custom={0}
        >
          <div className="flex items-center justify-center gap-2 mb-2">
            <Briefcase className="w-7 h-7 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Projects</h2>
          </div>
          <p className="text-muted-foreground text-sm md:text-base">
            Here are some of the projects I've built to solve real-world problems
          </p>
        </motion.div>

        {/* Featured Project */}
        <motion.div
          className="bg-card rounded-2xl shadow-lg border border-border overflow-hidden mb-8 max-w-5xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
          custom={1}
        >
          <div className="grid md:grid-cols-2 gap-0">
            {/* Image */}
            <div className="relative bg-gradient-to-br from-blue-100 to-blue-50 p-6 md:p-8 flex items-center justify-center">
              <div className="rounded-xl overflow-hidden shadow-xl border border-border/50">
                <img
                  src={projectMediscan}
                  alt="MediScan App"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Content */}
            <div className="p-6 md:p-8 flex flex-col justify-center">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full w-fit mb-4">
                <Code2 className="w-3.5 h-3.5" />
                Featured Project
              </span>
              <h3 className="font-heading text-2xl font-bold text-foreground mb-2 flex items-center gap-2">
                <span className="text-xl">⚕️</span> MediScan App
              </h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                AI-powered health application for personalized health monitoring with advanced analytics.
              </p>
              <div className="flex flex-wrap gap-2 mb-5">
                {["React", "TypeScript", "Python", "AI"].map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center gap-1 text-xs font-medium bg-muted/80 px-2.5 py-1 rounded-full"
                  >
                    <span className={`text-xs ${techColors[tech] || "text-muted-foreground"}`}>●</span>
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-lg border border-border text-sm font-medium text-foreground hover:bg-muted transition-colors"
                >
                  View Project
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-lg border border-border text-sm font-medium text-foreground hover:bg-muted transition-colors"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 4 Project Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto mb-10">
          {smallProjects.map((project, index) => (
            <motion.div
              key={project.title}
              className="bg-card rounded-xl border border-border p-5 shadow-sm hover:shadow-md transition-shadow"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={fadeUp}
              custom={index + 2}
            >
              <div className={`w-11 h-11 rounded-lg ${project.iconBg} flex items-center justify-center mb-4`}>
                {project.icon}
              </div>
              <h4 className="font-heading font-semibold text-foreground text-sm mb-1.5">{project.title}</h4>
              <p className="text-muted-foreground text-xs leading-relaxed mb-3">{project.description}</p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="inline-flex items-center gap-1 text-[11px] font-medium bg-muted/80 px-2 py-0.5 rounded-full"
                  >
                    <span className={`text-[10px] ${techColors[t] || "text-muted-foreground"}`}>●</span>
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-3 text-xs font-medium text-muted-foreground">
                <a href={project.viewLink} className="inline-flex items-center gap-1 hover:text-foreground transition-colors">
                  <ExternalLink className="w-3.5 h-3.5" />
                  View Project
                </a>
                <a href={project.githubLink} className="inline-flex items-center gap-1 hover:text-foreground transition-colors">
                  <Github className="w-3.5 h-3.5" />
                  GitHub
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Bar */}
        <motion.div
          className="max-w-3xl mx-auto bg-card rounded-xl border border-border shadow-sm"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={fadeUp}
          custom={6}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
            {stats.map((stat) => (
              <div key={stat.label} className="flex items-center gap-3 px-4 py-4 md:px-6 md:py-5 justify-center">
                <div className="w-9 h-9 rounded-lg bg-muted/60 flex items-center justify-center shrink-0">
                  {stat.icon}
                </div>
                <div>
                  <p className="font-heading font-bold text-foreground text-sm md:text-base leading-tight">{stat.value}</p>
                  <p className="text-muted-foreground text-[11px] md:text-xs">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
