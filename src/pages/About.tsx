import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import profilePhoto from "@/assets/profile-photo.png";
import { Code, Palette, Brain, Zap, GraduationCap, Briefcase } from "lucide-react";

const skills = [
  { name: "HTML5 / CSS3", level: 90 },
  { name: "JavaScript / TypeScript", level: 85 },
  { name: "React / Next.js", level: 80 },
  { name: "UI/UX Design (Figma)", level: 75 },
  { name: "Node.js / Express", level: 70 },
  { name: "AI & Machine Learning", level: 65 },
];

const experience = [
  {
    icon: Briefcase,
    title: "Freelance Web Developer",
    company: "Self-Employed",
    period: "2022 – Present",
    description: "Building modern web applications for clients worldwide using React, TypeScript, and modern frameworks.",
  },
  {
    icon: Briefcase,
    title: "Frontend Developer Intern",
    company: "Tech Startup",
    period: "2021 – 2022",
    description: "Developed responsive UIs and contributed to design system improvements.",
  },
];

const education = [
  {
    icon: GraduationCap,
    title: "Bachelor of Computer Science",
    institution: "University of Technology",
    period: "2018 – 2022",
    description: "Focused on software engineering, web technologies, and AI fundamentals.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] as const },
  },
};

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero */}
          <motion.div
            className="grid md:grid-cols-2 gap-12 items-center mb-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">About Me</h1>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                I'm <span className="text-accent font-semibold">Anjan Prajapati</span>, a passionate
                software developer and designer who loves turning ideas into scalable digital products.
                With expertise in modern web technologies and a keen eye for design, I create experiences
                that are both functional and beautiful.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to
                open-source projects, or sharing my knowledge through blog posts and mentoring.
              </p>
            </motion.div>
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-64 h-72 md:w-80 md:h-96 rounded-2xl overflow-hidden shadow-2xl">
                <img src={profilePhoto} alt="Anjan Prajapati" className="w-full h-full object-cover" />
              </div>
            </motion.div>
          </motion.div>

          {/* Skills */}
          <motion.div
            className="mb-20"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 className="section-title text-center" variants={itemVariants}>
              Skills & Expertise
            </motion.h2>
            <div className="max-w-2xl mx-auto space-y-5">
              {skills.map((skill) => (
                <motion.div key={skill.name} variants={itemVariants}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-foreground">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="w-full h-2.5 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-accent rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Experience & Education */}
          <motion.div
            className="grid md:grid-cols-2 gap-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Experience */}
            <div>
              <motion.h2 className="section-title" variants={itemVariants}>
                Experience
              </motion.h2>
              <div className="space-y-6">
                {experience.map((item) => (
                  <motion.div
                    key={item.title}
                    className="service-card"
                    variants={itemVariants}
                    whileHover={{ y: -4 }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                        <item.icon className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">{item.title}</h3>
                        <p className="text-sm text-accent font-medium">{item.company}</p>
                        <p className="text-xs text-muted-foreground mb-2">{item.period}</p>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <motion.h2 className="section-title" variants={itemVariants}>
                Education
              </motion.h2>
              <div className="space-y-6">
                {education.map((item) => (
                  <motion.div
                    key={item.title}
                    className="service-card"
                    variants={itemVariants}
                    whileHover={{ y: -4 }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">{item.title}</h3>
                        <p className="text-sm text-accent font-medium">{item.institution}</p>
                        <p className="text-xs text-muted-foreground mb-2">{item.period}</p>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
