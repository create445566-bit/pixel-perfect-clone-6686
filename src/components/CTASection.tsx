const CTASection = () => {
  return (
    <section id="contact" className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
            Let's Work Together!
          </h2>
          <p className="text-muted-foreground mb-8">
            Have a project in mind? Let's create something amazing.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a href="mailto:contact@anjanprajapati.com" className="btn-primary">
              Contact Me
            </a>
            <a href="#resume" className="btn-outline">
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
