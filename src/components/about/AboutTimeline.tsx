import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Monitor } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const AboutTimeline = () => {
  return (
    <motion.div
      className="grid md:grid-cols-2 gap-12 relative"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {/* Education - Left */}
      <div>
        <motion.h2 className="text-2xl md:text-3xl font-bold text-primary mb-8" variants={itemVariants}>
          Education
        </motion.h2>
        <motion.div
          className="bg-muted/50 rounded-xl p-6 border border-border shadow-sm"
          variants={itemVariants}
          whileHover={{ y: -3 }}
        >
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
              <GraduationCap className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="font-bold text-foreground text-lg">Bachelor of Computer Science</h3>
              <p className="text-sm text-accent font-semibold">University of Technology</p>
              <p className="text-xs text-muted-foreground mb-3">2018 – 2022</p>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                <li>Software Engineering & AI</li>
                <li>CGPA: 8.7 / 10</li>
                <li>Graduated with Honors</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Experience - Right */}
      <div>
        <motion.h2 className="text-2xl md:text-3xl font-bold text-primary mb-8" variants={itemVariants}>
          Experience
        </motion.h2>

        {/* Timeline connector */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-border ml-5 hidden md:block" />

          <div className="space-y-6">
            {/* Experience 1 */}
            <motion.div
              className="bg-muted/50 rounded-xl p-6 border border-border shadow-sm relative"
              variants={itemVariants}
              whileHover={{ y: -3 }}
            >
              {/* Timeline dot */}
              <div className="absolute -left-[7px] top-8 w-3.5 h-3.5 rounded-full border-2 border-accent bg-background hidden md:block" />
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                  <Briefcase className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-lg">Freelance Web Developer</h3>
                  <div className="flex items-center gap-3 mb-1">
                    <p className="text-xs text-muted-foreground">2022 – Present</p>
                    <span className="text-[10px] px-2 py-0.5 rounded border border-border text-muted-foreground flex items-center gap-1">
                      <Monitor className="w-3 h-3" /> Remote
                    </span>
                  </div>
                  <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                    <li>Built 15+ responsive web apps for global clients</li>
                    <li>🚀 React, Node.js, AWS, Docker</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Experience 2 */}
            <motion.div
              className="bg-muted/50 rounded-xl p-6 border border-border shadow-sm relative"
              variants={itemVariants}
              whileHover={{ y: -3 }}
            >
              <div className="absolute -left-[7px] top-8 w-3.5 h-3.5 rounded-full border-2 border-accent bg-background hidden md:block" />
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                  <Briefcase className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-lg">Frontend Developer Intern</h3>
                  <div className="flex items-center gap-3 mb-1">
                    <p className="text-sm text-accent font-semibold">Tech Startup</p>
                    <p className="text-xs text-muted-foreground">2021 – 2022</p>
                  </div>
                  <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                    <li>Improved UI & performance by <strong className="text-foreground">30%</strong></li>
                    <li>Worked with <strong className="text-foreground">React, Redux, Firebase</strong></li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutTimeline;
