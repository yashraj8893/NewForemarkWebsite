import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const projectsData = [
  {
    title: "Nappa Dori",
    image: "/projects/project1.png",
    url: "https://www.nappadori.com/",
    aspect: "aspect-[4/3]"
  },
  {
    title: "PDR",
    image: "/projects/project9.png",
    url: "#",
    aspect: "aspect-[4/3]"
  },
  {
    title: "Sharma & Associates",
    image: "/projects/project10.png",
    url: "https://www.advocatesharma.com",
    aspect: "aspect-[4/3]"
  },
  {
    title: "Regius",
    image: "/projects/project11.png",
    url: "#",
    aspect: "aspect-[4/3]"
  },
  {
    title: "The CenterSpread",
    image: "/projects/project12.png",
    url: "https://www.thecenterspread.com",
    aspect: "aspect-[4/3]"
  },
  {
    title: "Tech Guru Store",
    image: "/projects/project2.png",
    url: "https://techgurustore.in/",
    aspect: "aspect-[4/3]"
  },
  {
    title: "GetVantage",
    image: "/projects/project3.png",
    url: "https://getvantage.co/",
    aspect: "aspect-[4/3]"
  },
  {
    title: "Samruddhi",
    image: "/projects/project4.png",
    url: "https://www.samruddhiretail.com/en/",
    aspect: "aspect-[4/3]"
  },
  {
    title: "Mainstay",
    image: "/projects/project5.png",
    url: "https://mainstayconsulting.in/",
    aspect: "aspect-[4/3]"
  },
  {
    title: "Athena",
    image: "/projects/project6.png",
    url: "https://www.aesc.co.in/",
    aspect: "aspect-[4/3]"
  },
  {
    title: "Karma",
    image: "/projects/project7.png",
    url: "https://karmamgmt.com/",
    aspect: "aspect-[4/3]"
  },
  {
    title: "Anjusmriti",
    image: "/projects/project8.png",
    url: "https://www.anjusmriti.com/",
    aspect: "aspect-[4/3]"
  }
];

const ProjectsPage = () => {
  return (
    <div className="relative w-full bg-[#f5f5f5] overflow-hidden">
      {/* Subtle Background Texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1.5px,transparent_1.5px)] [background-size:24px_24px] opacity-60 pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-8 md:px-16 pt-16 pb-40">

        {/* Section Header */}
        <div className="flex flex-col mb-16 relative z-10">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-portfolio-gold font-bold mb-3 text-xs tracking-widest uppercase block"
          >
            Case Studies
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold tracking-tight mb-6"
          >
            Examples of <br /> our work
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base text-portfolio-muted max-w-xl leading-relaxed mb-6"
          >
            These are our projects done till now. Simple and clear.
          </motion.p>

          {/* Social Proof */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-4"
          >
            <div className="flex -space-x-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-12 h-12 rounded-full border-[3px] border-[#f5f5f5] bg-white overflow-hidden shadow-sm">
                  <img src={`https://i.pravatar.cc/150?u=acc${i}`} alt="Client" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <div>
              <p className="font-bold text-sm text-[#1a1a1a]">15+ happy clients!</p>
              <button className="text-[12px] text-portfolio-muted hover:text-portfolio-gold font-bold flex items-center gap-1 transition-colors cursor-target mt-0.5">
                Join them now <ArrowUpRight size={14} />
              </button>
            </div>
          </motion.div>
        </div>

        {/* Brand Logos Row - Infinite Marquee */}
        <div className="w-full border-b border-[#1a1a1a]/10 pb-16 mb-24 overflow-hidden relative z-10">
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#f5f5f5] to-transparent z-20 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#f5f5f5] to-transparent z-20 pointer-events-none" />

          <motion.div
            className="flex gap-16 md:gap-24 items-center w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          >
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex gap-16 md:gap-24 shrink-0">
                {[
                  { name: "Google", url: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg", h: "h-8" },
                  { name: "Meta", url: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg", h: "h-5" },
                  { name: "Netflix", url: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg", h: "h-7" },
                  { name: "Amazon", url: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg", h: "h-8" },
                  { name: "Microsoft", url: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg", h: "h-6" },
                  { name: "Spotify", url: "https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg", h: "h-8" }
                ].map((brand, j) => (
                  <div key={j} className="flex items-center justify-center min-w-[120px]">
                    <img
                      src={brand.url}
                      alt={brand.name}
                      className={`${brand.h} w-auto object-contain opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-400 cursor-target`}
                    />
                  </div>
                ))}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Editorial Project Grid */}
        <div className="max-w-[1050px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-y-16 md:gap-y-20 md:gap-x-12 lg:gap-x-16 items-start relative z-10 mt-10">
          {projectsData.map((project, i) => (
            <motion.a
              key={i}
              href={project.url}
              target="_blank"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, delay: (i % 2) * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="group/card flex flex-col cursor-target"
            >
              {/* Outer Container */}
              <div className={`relative w-full ${project.aspect} rounded-[1.5rem] md:rounded-[2rem] bg-[#f0f0f0] mb-6 shadow-sm border border-black/[0.04] pt-8 px-8 md:pt-12 md:px-12 lg:pt-16 lg:px-16 overflow-hidden flex items-center justify-center`}>

                <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
                  <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0,100 C30,80 70,80 100,50 L100,100 Z" fill="currentColor" />
                    <path d="M0,0 C30,30 70,30 100,0 L0,0 Z" fill="currentColor" />
                  </svg>
                </div>

                <div className="relative w-full h-full rounded-t-xl overflow-hidden shadow-[0_10px_40px_-10px_rgba(0,0,0,0.2)] transition-transform duration-[1.2s] ease-[0.16,1,0.3,1] group-hover/card:scale-110 group-hover/card:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.3)] bg-white">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-black/[0.05] rounded-xl pointer-events-none" />
                </div>
              </div>

              {/* Title Only */}
              <div className="px-1 md:px-2">
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-[#1a1a1a] group-hover/card:text-portfolio-gold transition-colors duration-400">
                  {project.title}
                </h3>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;