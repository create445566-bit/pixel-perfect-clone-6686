import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Linkedin, Twitter, Youtube, Instagram,
  MessageCircle, Pin, AtSign, Globe, Download,
  Github, Code, BookOpen, Mail
} from "lucide-react";

const socialMedia = [
  { name: "LinkedIn", icon: Linkedin, url: "https://linkedin.com/in/anjanprajapati" },
  { name: "Instagram", icon: Instagram, url: "https://instagram.com/anjanprajapati" },
  { name: "GitHub", icon: Github, url: "https://github.com/anjanprajapati" },
  { name: "Threads", icon: AtSign, url: "https://threads.net/" },
  { name: "X (Twitter)", icon: Twitter, url: "https://twitter.com/anjanprajapati" },
  { name: "Discord", icon: MessageCircle, url: "https://discord.com/" },
  { name: "YouTube", icon: Youtube, url: "https://youtube.com/@anjanprajapati" },
  { name: "Pinterest", icon: Pin, url: "https://pinterest.com/" },
  { name: "Gmail", icon: Mail, url: "mailto:anjanprajapati@gmail.com" },
];

const profiles = [
  { name: "My Resume", icon: Download, url: "#" },
  { name: "GitHub", icon: Github, url: "https://github.com/anjanprajapati" },
  { name: "LeetCode", icon: Code, url: "https://leetcode.com/" },
  { name: "TakeUforward", icon: BookOpen, url: "https://takeuforward.org/" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.4, 0, 0.2, 1] as const } },
};

const Social = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Page Title */}
          <motion.h1
            className="text-3xl md:text-4xl font-bold text-accent mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            Social Links
          </motion.h1>

          {/* Social Media */}
          <motion.section className="mb-14" initial="hidden" animate="visible" variants={containerVariants}>
            <h2 className="text-xl font-bold text-foreground mb-6">Social Media</h2>
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {socialMedia.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-card rounded-2xl px-5 py-4 border border-border/50 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
                  variants={cardVariants}
                >
                  <item.icon className="w-5 h-5 text-foreground/70 shrink-0" />
                  <span className="text-sm font-medium text-foreground">{item.name}</span>
                </motion.a>
              ))}
            </motion.div>
          </motion.section>

          {/* Profiles & Coding Platforms */}
          <motion.section initial="hidden" animate="visible" variants={containerVariants}>
            <h2 className="text-xl font-bold text-foreground mb-6">Profiles & Coding Platforms</h2>
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-4 gap-4"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {profiles.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center gap-3 bg-card rounded-2xl px-5 py-8 border border-border/50 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
                  variants={cardVariants}
                >
                  <item.icon className="w-7 h-7 text-accent" />
                  <span className="text-sm font-medium text-foreground">{item.name}</span>
                </motion.a>
              ))}
            </motion.div>
          </motion.section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Social;
