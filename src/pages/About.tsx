import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutHero from "@/components/about/AboutHero";
import AboutSkills from "@/components/about/AboutSkills";
import AboutTimeline from "@/components/about/AboutTimeline";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <AboutHero />
          <AboutSkills />
          <AboutTimeline />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
