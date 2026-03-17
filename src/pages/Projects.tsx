import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectsSection from "@/components/ProjectsSection";

const Projects = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <ProjectsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
