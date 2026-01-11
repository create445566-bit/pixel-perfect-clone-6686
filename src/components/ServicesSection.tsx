import { Code, Palette, Brain, Zap, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Creating fast & responsive websites using modern technologies.",
    cta: "Get Started",
    color: "bg-blue-500",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Modern UIs and development that delights users & drive results.",
    cta: "View My CV",
    color: "bg-purple-500",
  },
  {
    icon: Brain,
    title: "AI-Powered Solutions",
    description: "Smart AI web & AI products and solutions that create seamless workflows.",
    cta: "View My CV",
    color: "bg-green-500",
  },
  {
    icon: Zap,
    title: "Performance & SEO",
    description: "AI integrated websites & mobile apps that are reliable & performant.",
    cta: "View Project",
    color: "bg-orange-500",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">My Services</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="service-card flex flex-col"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className={`w-12 h-12 rounded-lg ${service.color} flex items-center justify-center mb-4`}>
                <service.icon className="w-6 h-6 text-white" />
              </div>
              
              {/* Title */}
              <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                {service.title}
              </h3>
              
              {/* Description */}
              <p className="text-muted-foreground text-sm mb-4 flex-grow">
                {service.description}
              </p>
              
              {/* CTA */}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-accent font-semibold text-sm hover:gap-3 transition-all"
              >
                {service.cta}
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
