import { motion } from "framer-motion";
import profilePhoto from "@/assets/profile-photo.png";
import { Briefcase, FolderOpen, Users } from "lucide-react";

const stats = [
  { icon: Briefcase, value: "3+", label: "Years", sublabel: "Experience" },
  { icon: FolderOpen, value: "25+", label: "Projects Completed", sublabel: "" },
  { icon: Users, label: "Open to", sublabel: "Opportunities" },
];

const AboutHero = () => {
  return (
    <motion.div
      className="grid md:grid-cols-2 gap-12 items-start mb-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-1">About Me</h1>
        <div className="w-12 h-1 bg-accent rounded mb-6" />

        <p className="text-muted-foreground text-base mb-4 leading-relaxed">
          I'm <span className="text-accent font-semibold">Anjan Prajapati</span>, a passionate software developer &
          designer crafting <strong className="text-foreground">scalable</strong> and{" "}
          <strong className="text-foreground">user-centric digital experiences.</strong>
        </p>
        <p className="text-muted-foreground text-base leading-relaxed mb-8">
          I specialize in building modern web applications, working with cutting-edge technologies, and turning ideas into
          impactful solutions.
        </p>

        {/* Stats row */}
        <div className="flex gap-6 flex-wrap">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              className="flex items-center gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.1 }}
            >
              <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                <stat.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                {stat.value && <p className="text-lg font-bold text-foreground leading-tight">{stat.value}</p>}
                <p className="text-xs text-muted-foreground leading-tight">{stat.label}</p>
                {stat.sublabel && <p className="text-xs text-muted-foreground leading-tight">{stat.sublabel}</p>}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="flex justify-center md:justify-end"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="w-64 h-72 md:w-80 md:h-96 rounded-2xl overflow-hidden shadow-2xl">
          <img src={profilePhoto} alt="Anjan Prajapati" className="w-full h-full object-cover" />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default AboutHero;
