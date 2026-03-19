import { motion } from "framer-motion";
import profilePhoto from "@/assets/profile-photo.png";

const techLogos = [
  { name: "HTML5", color: "#E34F26", icon: "html5" },
  { name: "CSS3", color: "#1572B6", icon: "css3" },
  { name: "JavaScript", color: "#F7DF1E", icon: "js" },
  { name: "Python", color: "#3776AB", icon: "python" },
  { name: "Docker", color: "#2496ED", icon: "docker" },
  { name: "AWS", color: "#FF9900", icon: "aws" },
];

const TechIcon = ({ name, color, iconKey }: { name: string; color: string; iconKey: string }) => {
  const icons: Record<string, JSX.Element> = {
    html5: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill={color}>
        <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/>
      </svg>
    ),
    css3: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill={color}>
        <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"/>
      </svg>
    ),
    js: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill={color}>
        <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"/>
      </svg>
    ),
    python: (
      <svg viewBox="0 0 24 24" className="w-6 h-6">
        <path d="M11.914 0C5.82 0 6.2 2.656 6.2 2.656l.007 2.752h5.814v.826H3.9S0 5.789 0 11.969c0 6.18 3.403 5.96 3.403 5.96h2.03v-2.867s-.109-3.402 3.35-3.402h5.766s3.24.052 3.24-3.133V3.168S18.28 0 11.914 0zM8.708 1.83a1.06 1.06 0 1 1 0 2.12 1.06 1.06 0 0 1 0-2.12z" fill="#3776AB"/>
        <path d="M12.086 24c6.094 0 5.714-2.656 5.714-2.656l-.007-2.752h-5.814v-.826h8.121s3.9.445 3.9-5.735c0-6.18-3.403-5.96-3.403-5.96h-2.03v2.867s.109 3.402-3.35 3.402H9.451s-3.24-.052-3.24 3.133v5.359S5.72 24 12.086 24zm3.206-1.83a1.06 1.06 0 1 1 0-2.12 1.06 1.06 0 0 1 0 2.12z" fill="#FFD43B"/>
      </svg>
    ),
    docker: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#2496ED">
        <path d="M13.983 11.078h2.119a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.119a.185.185 0 0 0-.185.185v1.888c0 .102.083.185.185.185zm-2.954-5.43h2.118a.186.186 0 0 0 .186-.186V3.574a.186.186 0 0 0-.186-.185h-2.118a.185.185 0 0 0-.185.185v1.888c0 .102.082.185.185.186zm0 2.716h2.118a.187.187 0 0 0 .186-.186V6.29a.186.186 0 0 0-.186-.185h-2.118a.185.185 0 0 0-.185.185v1.887c0 .102.082.186.185.186zm-2.93 0h2.12a.186.186 0 0 0 .184-.186V6.29a.185.185 0 0 0-.185-.185H8.1a.185.185 0 0 0-.185.185v1.887c0 .102.083.186.185.186zm-2.964 0h2.119a.186.186 0 0 0 .185-.186V6.29a.185.185 0 0 0-.185-.185H5.136a.186.186 0 0 0-.186.185v1.887c0 .102.084.186.186.186zm5.893 2.715h2.118a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.118a.185.185 0 0 0-.185.185v1.888c0 .102.082.185.185.185zm-2.93 0h2.12a.185.185 0 0 0 .184-.185V9.006a.185.185 0 0 0-.184-.186h-2.12a.185.185 0 0 0-.184.185v1.888c0 .102.083.185.185.185zm-2.964 0h2.119a.185.185 0 0 0 .185-.185V9.006a.185.185 0 0 0-.185-.186H5.136a.186.186 0 0 0-.186.185v1.888c0 .102.084.185.186.185zm-2.92 0h2.12a.185.185 0 0 0 .184-.185V9.006a.185.185 0 0 0-.184-.186h-2.12a.185.185 0 0 0-.184.185v1.888c0 .102.082.185.185.185zm23.693-1.32c-.545-.374-1.8-.543-2.764-.344-.136-.612-.543-1.143-1.06-1.614l-.36-.27-.278.354c-.353.452-.543 1.078-.49 1.694.028.238.117.612.322.952-.225.13-.664.312-1.246.3H.326a.326.326 0 0 0-.326.325c0 1.636.507 3.24 1.497 4.53C2.56 19.795 4.215 20.4 6.285 20.4c4.588 0 8.17-2.033 9.926-6.217.648.013 2.043 0 2.762-1.356.019-.033.066-.117.2-.382l.072-.145-.345-.236z"/>
      </svg>
    ),
    aws: (
      <svg viewBox="0 0 24 24" className="w-6 h-6">
        <path d="M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.04.063.056.127.056.183 0 .08-.048.16-.152.24l-.503.335a.383.383 0 0 1-.208.072c-.08 0-.16-.04-.239-.112a2.47 2.47 0 0 1-.287-.374 6.18 6.18 0 0 1-.248-.467c-.622.734-1.405 1.101-2.347 1.101-.67 0-1.205-.191-1.596-.574-.391-.384-.59-.894-.59-1.533 0-.678.239-1.23.726-1.644.487-.415 1.133-.623 1.955-.623.272 0 .551.024.846.064.296.04.6.104.918.176v-.583c0-.607-.127-1.03-.375-1.277-.255-.248-.686-.367-1.3-.367-.28 0-.568.031-.863.103-.296.072-.583.16-.862.272a2.287 2.287 0 0 1-.28.104.488.488 0 0 1-.127.023c-.112 0-.168-.08-.168-.247v-.391c0-.128.016-.224.056-.28a.597.597 0 0 1 .224-.167c.279-.144.614-.264 1.005-.36a4.84 4.84 0 0 1 1.246-.152c.95 0 1.644.216 2.091.647.439.43.662 1.085.662 1.963v2.586zm-3.24 1.214c.263 0 .534-.048.822-.144.287-.096.543-.271.758-.51.128-.152.224-.32.272-.512.047-.191.08-.423.08-.694v-.335a6.66 6.66 0 0 0-.735-.136 6.02 6.02 0 0 0-.75-.048c-.535 0-.926.104-1.19.32-.263.215-.39.518-.39.917 0 .375.095.655.295.846.191.2.47.296.838.296zm6.41.862c-.144 0-.24-.024-.304-.08-.064-.048-.12-.16-.168-.311L7.586 5.55a1.398 1.398 0 0 1-.072-.32c0-.128.064-.2.191-.2h.783c.151 0 .255.025.31.08.065.048.113.16.16.312l1.342 5.284 1.245-5.284c.04-.16.088-.264.151-.312a.549.549 0 0 1 .32-.08h.638c.152 0 .256.025.32.08.063.048.12.16.151.312l1.261 5.348 1.381-5.348c.048-.16.104-.264.16-.312a.52.52 0 0 1 .311-.08h.743c.127 0 .2.065.2.2 0 .04-.009.08-.017.128a1.137 1.137 0 0 1-.056.2l-1.923 6.17c-.048.16-.104.263-.168.311a.51.51 0 0 1-.303.08h-.687c-.151 0-.255-.024-.32-.08-.063-.056-.119-.16-.15-.32l-1.238-5.148-1.23 5.14c-.04.16-.087.264-.15.32-.065.056-.177.08-.32.08zm10.256.215c-.415 0-.83-.048-1.229-.143-.399-.096-.71-.2-.918-.32-.128-.071-.215-.151-.247-.223a.563.563 0 0 1-.048-.224v-.407c0-.167.064-.247.183-.247.048 0 .096.008.144.024.048.016.12.048.2.08.271.12.566.215.878.279.319.064.63.096.95.096.502 0 .894-.088 1.165-.264a.86.86 0 0 0 .415-.758.777.777 0 0 0-.215-.559c-.144-.151-.415-.287-.806-.415l-1.157-.36c-.583-.183-1.014-.454-1.277-.813a1.902 1.902 0 0 1-.4-1.158c0-.335.073-.63.216-.886.144-.255.335-.479.575-.654.24-.184.51-.32.83-.415a3.64 3.64 0 0 1 1.013-.136c.175 0 .359.008.535.032.183.024.35.056.518.088.16.04.312.08.455.127.144.048.256.096.336.144a.69.69 0 0 1 .24.2.43.43 0 0 1 .071.263v.375c0 .168-.064.256-.184.256a.83.83 0 0 1-.303-.096 3.652 3.652 0 0 0-1.532-.311c-.455 0-.815.071-1.062.223-.248.152-.375.383-.375.694 0 .224.08.416.24.567.159.152.454.304.877.44l1.134.358c.574.184.99.44 1.237.767.247.327.367.702.367 1.117 0 .343-.072.655-.207.926-.144.272-.336.511-.583.703-.248.2-.543.343-.886.447-.36.111-.734.167-1.142.167z" fill="#252F3E"/>
        <path d="M21.725 16.92C19.16 18.89 15.415 19.94 12.17 19.94c-4.478 0-8.51-1.655-11.558-4.406-.24-.216-.024-.511.264-.343 3.293 1.915 7.363 3.07 11.573 3.07 2.838 0 5.957-.59 8.83-1.805.431-.191.798.28.447.463zm1.277-1.455c-.328-.42-2.167-.2-2.995-.103-.248.032-.287-.184-.064-.343 1.469-1.03 3.877-.734 4.157-.39.28.351-.072 2.771-1.453 3.929-.215.183-.415.088-.32-.152.311-.774 1.005-2.521.675-2.94z" fill="#FF9900"/>
      </svg>
    ),
  };

  return (
    <motion.div 
      className="tech-badge" 
      title={name}
      whileHover={{ scale: 1.1, y: -2 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      {icons[iconKey]}
    </motion.div>
  );
};

const fadeUp = {
  hidden: { opacity: 0, y: 15 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay, ease: "easeOut" },
  }),
};

const HeroSection = () => {
  return (
    <section id="home" className="pt-20 pb-10 md:pt-28 md:pb-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
          {/* Left Content */}
          <motion.div 
            className="order-2 md:order-1"
            initial="hidden"
            animate="visible"
          >
            <motion.p 
              className="text-muted-foreground mb-2 font-medium text-sm md:text-base"
              variants={fadeUp} custom={0.1}
            >
              Anjan Prajapati
            </motion.p>
            <motion.h1 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-3 md:mb-4 leading-tight"
              variants={fadeUp} custom={0.2}
            >
              Turning Ideas Into Scalable<br />
              <span className="text-foreground">Digital Products</span>
            </motion.h1>
            <motion.p 
              className="text-muted-foreground mb-6 md:mb-8 text-base md:text-lg"
              variants={fadeUp} custom={0.3}
            >
              I design and develop modern web applications that perform and impress.
            </motion.p>
            
            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-wrap gap-3 mb-8 md:mb-10"
              variants={fadeUp} custom={0.4}
            >
              <motion.a 
                href="/projects" 
                className="btn-primary inline-flex items-center gap-2 text-sm md:text-base px-5 py-2.5 md:px-6 md:py-3"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
              </motion.a>
              <motion.a 
                href="/contact" 
                className="btn-outline inline-flex items-center gap-2 text-sm md:text-base px-5 py-2.5 md:px-6 md:py-3"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Hire Me
              </motion.a>
            </motion.div>

            {/* Technologies */}
            <motion.div variants={fadeUp} custom={0.5}>
              <p className="text-xs md:text-sm text-muted-foreground mb-3">Technologies I Work With</p>
              <div className="flex gap-2.5 md:gap-3">
                {techLogos.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + index * 0.08, type: "spring" }}
                  >
                    <TechIcon name={tech.name} color={tech.color} iconKey={tech.icon} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div 
            className="order-1 md:order-2 flex justify-center md:justify-end"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <motion.div 
              className="relative"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-56 h-64 md:w-80 md:h-96 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={profilePhoto}
                  alt="Anjan Prajapati - Software Developer"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
              {/* Decorative elements */}
              <motion.div 
                className="absolute -bottom-3 -right-3 w-16 h-16 md:w-20 md:h-20 bg-accent/20 rounded-xl -z-10"
                animate={{ y: [0, -6, 0], rotate: [0, 4, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div 
                className="absolute -top-3 -left-3 w-12 h-12 md:w-16 md:h-16 bg-primary/10 rounded-xl -z-10"
                animate={{ y: [0, 6, 0], rotate: [0, -4, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
