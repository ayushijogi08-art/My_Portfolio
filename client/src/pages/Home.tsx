import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { 
  Github, 
  Linkedin, 
  Mail, 
  Code2, 
  Globe, 
  Smartphone, 
  Server, 
  Terminal,
  Eye
} from "lucide-react";
import { FaReact, FaNodeJs, FaJava, FaPython, FaHtml5, FaCss3, FaJs, FaAndroid } from "react-icons/fa";
import { SiFlutter, SiDart, SiFirebase, SiExpress, SiMongodb, SiMysql, SiCplusplus, SiPostman } from "react-icons/si";

import groceryImg from "@assets/image_1772780239120.png";
import streamingImg from "@assets/image_1772780564742.png";
import portfolioImg from "@assets/image_1772783971369.png";

import { Navbar } from "@/components/Navbar";
import { BackgroundOrbs } from "@/components/BackgroundOrbs";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface FeaturedProject {
  index: number;
  title: string;
  tech: string[];
  features: string[];
}

interface OtherProject {
  title: string;
  tech: string[];
  overview: string;
  implementations: { label: string; detail: string }[];
  image: string;
}

// Featured Enterprise Architecture Projects
const featuredProjects: FeaturedProject[] = [
  {
    index: 1,
    title: "Nexa (AI-Powered B2B & B2C E-Commerce OS)",
    tech: ["React.js", "Node.js", "Express", "MongoDB", "Gemini API", "Multer"],
    features: [
      "Architected a full-stack, dual-sided e-commerce platform featuring a B2C customer storefront and a secure B2B enterprise dashboard for live inventory and order pipeline management.",
      "Integrated the Google Gemini API to build an autonomous B2B proposal generator, calculating optimized product mixes based strictly on live database stock and corporate budget constraints.",
      "Engineered a context-aware customer support chatbot for the B2C storefront, utilizing session history to execute live order tracking and automated refund protocols without human intervention.",
      "Enforced strict structured JSON outputs (responseSchema) from the LLM to seamlessly parse unstructured AI-generated business logic into deterministic MongoDB database records.",
      "Built secure multipart/form-data upload pipelines using Multer to handle dynamic product catalog images alongside text data, preventing backend server crashes."
    ]
  },
  {
    index: 2,
    title: "Offline Perceptual Clustering Engine",
    tech: ["Dart", "Flutter", "VP-Tree", "dHash Algorithm", "Heuristic Logic"],
    features: [
      "Engineered a high-speed, offline media utility to scan, cluster, and manage visually identical image files across local directories without relying on metadata or file names.",
      "Implemented a Difference Hashing (dHash) algorithm with a 1:1 center crop to generate 64-bit binary signatures, neutralizing scale, compression, and aspect-ratio distortions.",
      "Architected a Vantage Point Tree (VP-Tree) data structure to group mathematically similar binary strings using a Hamming distance threshold of 8, reducing search time complexity to O(N log N).",
      "Developed a heuristic survivor logic pipeline that mathematically ranks clustered duplicates by total megapixels, uncompressed disk space, and directory path to autonomously recommend the highest-quality original.",
      "Optimized memory buffers and on-device processing to handle 10,000+ photo galleries without crashing or heavily draining the battery of low-end hardware."
    ]
  }
];

// Other Projects (restored)
const otherProjects: OtherProject[] = [
  {
    title: "Grocery Store Management System",
    tech: ["HTML", "Tailwind CSS", "JavaScript"],
    overview: "A responsive web-based enterprise interface designed to streamline retail operations, inventory tracking, and vendor ledgers. The architecture focuses on fast UI rendering and real-time operational efficiency for store managers.",
    implementations: [
      { label: "Dynamic UI & State", detail: "Built a highly responsive, cross-device interface using modern JavaScript DOM manipulation and utility-first Tailwind CSS." },
      { label: "Commerce-Driven Logic", detail: "Developed automated reporting scripts to track daily revenue, inventory costs, and complex vendor payment ledgers based on standard accounting principles." },
      { label: "Data Processing", detail: "Implemented efficient front-end search, filtering, and data-sorting mechanisms to handle large lists of store items without UI lag." }
    ],
    image: groceryImg
  },
  {
    title: "Video Streaming Platform",
    tech: ["Node.js", "Express", "MongoDB", "JWT"],
    overview: "A highly scalable RESTful API backend architecture designed to support a full-scale video streaming service. The system is optimized for heavy media routing, secure user access, and relational data retrieval.",
    implementations: [
      { label: "Media Pipeline Integration", detail: "Architected a secure upload pipeline connecting the Express server to Cloudinary for optimized media storage and rapid asset delivery." },
      { label: "Relational Data Modeling", detail: "Designed complex MongoDB schemas using Mongoose to link user accounts, subscription tiers, and individual watch histories without database bloat." },
      { label: "Endpoint Security", detail: "Built custom middleware for JWT authentication to protect premium video routes and manage role-based access control." }
    ],
    image: streamingImg
  },
  {
    title: "Interactive Developer Portfolio",
    tech: ["React", "TypeScript", "Tailwind", "Framer Motion"],
    overview: "A high-performance, modern web application designed to showcase full-stack engineering capabilities. Built with a focus on strict typing, component reusability, and advanced user experience.",
    implementations: [
      { label: "Component Architecture", detail: "Engineered using modular React and strictly typed TypeScript to ensure maintainability, catch errors at compile-time, and prevent runtime bugs." },
      { label: "Advanced Styling", detail: "Utilized Tailwind CSS to create a custom, responsive glassmorphism design system, complete with a fully functional dark/light theme toggle." },
      { label: "Interactive UX", detail: "Integrated Framer Motion for highly optimized, smooth page transitions and micro-interactions that execute without sacrificing initial page load speed." }
    ],
    image: portfolioImg
  }
];

// Skills Data
const skillCategories = [
  {
    title: "Frontend Development",
    icon: <Globe className="w-6 h-6 text-cyan-400" />,
    skills: [
      { name: "React.js", icon: <FaReact /> },
      { name: "HTML5", icon: <FaHtml5 /> },
      { name: "CSS3", icon: <FaCss3 /> },
      { name: "JavaScript", icon: <FaJs /> },
      { name: "Tailwind CSS", icon: <Code2 /> }
    ]
  },
  {
    title: "Backend & Database",
    icon: <Server className="w-6 h-6 text-violet-500" />,
    skills: [
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "MySQL", icon: <SiMysql /> },
      { name: "Firebase", icon: <SiFirebase /> }
    ]
  },
  {
    title: "Mobile App Dev",
    icon: <Smartphone className="w-6 h-6 text-pink-500" />,
    skills: [
      { name: "Flutter", icon: <SiFlutter /> },
      { name: "Dart", icon: <SiDart /> },
      { name: "Android", icon: <FaAndroid /> }
    ]
  },
  {
    title: "Programming & Tools",
    icon: <Terminal className="w-6 h-6 text-yellow-500" />,
    skills: [
      { name: "Java", icon: <FaJava /> },
      { name: "Python", icon: <FaPython /> },
      { name: "C++", icon: <SiCplusplus /> },
      { name: "Postman", icon: <SiPostman /> }
    ]
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 relative">
      <BackgroundOrbs />
      <Navbar />

      {/* HERO SECTION */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4">
        <div className="max-w-4xl mx-auto w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-primary bg-primary/10 rounded-full border border-primary/20">
              OPEN TO WORK
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-gray-900 dark:text-white">
              <span className="text-gradient">Hi, I'm</span> <br />
              <span className="text-gradient">Ayushi Bharat Jogi</span>
            </h1>
            <div className="text-xl md:text-2xl text-gray-700 dark:text-muted-foreground font-mono mb-8 h-[60px]">
              <TypeAnimation
                sequence={[
                  'Full-Stack Web Developer',
                  2000,
                  'Flutter Developer',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>
            <p className="text-gray-700 dark:text-muted-foreground mb-8 max-w-lg text-lg mx-auto">
              Passionate developer crafting seamless web and mobile experiences. 
              Specializing in the MERN stack and Flutter ecosystem.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/25" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
                View My Work <Eye className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-full border-primary/20 hover:bg-primary/10 hover:border-primary/50" asChild>
                <a href="https://github.com/ayushijogi08-art" target="_blank" rel="noopener noreferrer">
                  GitHub <Github className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ABOUT ME - VS Code Style */}
      <section id="about" className="py-24 px-4 relative">
        <div className="max-w-5xl mx-auto">
          <SectionHeading title="About Me" subtitle="A glimpse into my coding journey" />
          
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="glass-panel rounded-lg overflow-hidden font-mono text-sm md:text-base !bg-[#0f172a] !border-white/10 dark:!bg-[#0B0F1A] dark:border dark:border-white/5 shadow-2xl"
          >
            {/* VS Code Title Bar */}
            <div className="bg-black/40 px-4 py-3 flex items-center border-b border-white/5">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="ml-4 text-gray-400 text-xs">ayushi_profile.js</div>
            </div>

            {/* Code Content */}
            <div className="p-6 md:p-8 overflow-x-auto bg-[#0B0F1A]">
              <div className="flex">
                <div className="text-right text-white/20 select-none pr-4 border-r border-white/5 mr-4 hidden md:block">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <div key={i}>{i + 1}</div>
                  ))}
                </div>
                <div className="text-blue-300">
                  <span className="text-purple-400">const</span> <span className="text-yellow-300">developer</span> = <span className="text-purple-400">{`{`}</span>
                  <br />
                  &nbsp;&nbsp;<span className="text-blue-300">name:</span> <span className="text-green-300">'Ayushi Bharat Jogi'</span>,
                  <br />
                  &nbsp;&nbsp;<span className="text-blue-300">role:</span> <span className="text-green-300">'Full-Stack Developer'</span>,
                  <br />
                  &nbsp;&nbsp;<span className="text-blue-300">location:</span> <span className="text-green-300">'Akola, Maharashtra'</span>,
                  <br />
                  &nbsp;&nbsp;<span className="text-blue-300">education:</span> <span className="text-green-300">'Smt. Laxmibai Radhakisan Toshniwal'</span>,
                  <br />
                  &nbsp;&nbsp;<span className="text-blue-300">focus:</span> <span className="text-purple-400">[</span>
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-300">'MERN Stack'</span>,
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-300">'Flutter Development'</span>,
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-300">'Scalable Backends'</span>
                  <br />
                  &nbsp;&nbsp;<span className="text-purple-400">]</span>,
                  <br />
                  &nbsp;&nbsp;<span className="text-blue-300">passion:</span> <span className="text-green-300">'Turning complex problems into elegant code.'</span>
                  <br />
                  <span className="text-purple-400">{`}`}</span>;
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section id="skills" className="py-24 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <SectionHeading title="Tech Stack" subtitle="Tools & Technologies I work with" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, idx) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card className="glass-panel h-full border-none bg-white/5">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-2 rounded-lg bg-white/5">
                        {category.icon}
                      </div>
                      <h3 className="font-semibold text-lg text-gray-900 dark:text-white">{category.title}</h3>
                    </div>
                    <div className="space-y-3">
                      {category.skills.map((skill) => (
                        <div key={skill.name} className="flex items-center gap-3 group">
                          <span className="text-gray-500 dark:text-muted-foreground group-hover:text-primary transition-colors text-xl">
                            {skill.icon}
                          </span>
                          <span className="text-sm text-gray-700 dark:text-muted-foreground group-hover:text-foreground transition-colors">
                            {skill.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionHeading title="Featured Enterprise Architectures" subtitle="Production-grade systems engineered for scale and performance" />

          <div className="flex flex-col gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
              >
                <div className="glass-panel rounded-2xl overflow-hidden w-full border border-white/10 dark:border-white/5 shadow-xl">
                  {/* Card Header */}
                  <div className="px-8 pt-8 pb-6 border-b border-white/10 dark:border-white/5">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-violet-600 flex items-center justify-center text-white font-bold text-sm shadow-lg">
                          0{project.index}
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white leading-snug">
                          {project.title}
                        </h3>
                      </div>
                    </div>

                    {/* Tech Stack Tags */}
                    <div className="flex flex-wrap gap-2 mt-5">
                      {project.tech.map(t => (
                        <span
                          key={t}
                          className="text-xs font-semibold px-3 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-cyan-600 dark:text-cyan-400 tracking-wide"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Architectural Features */}
                  <div className="px-8 py-7">
                    <p className="text-xs font-bold tracking-widest uppercase text-gray-500 dark:text-muted-foreground mb-5">
                      Architectural Features
                    </p>
                    <ul className="space-y-4">
                      {project.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gradient-to-br from-cyan-400 to-violet-500" />
                          <span className="text-sm text-gray-700 dark:text-muted-foreground leading-relaxed">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Other Projects */}
          <div className="mt-20">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Other Projects</h3>
            <p className="text-gray-500 dark:text-muted-foreground text-sm mb-10">More work from my development journey</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="glass-panel rounded-2xl overflow-hidden border border-white/10 dark:border-white/5 shadow-lg flex flex-col"
                >
                  {/* Project Image */}
                  <div className="w-full h-44 overflow-hidden bg-black/20 flex-shrink-0">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
                    />
                  </div>

                  {/* Card Body */}
                  <div className="p-6 flex flex-col flex-1">
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3 leading-snug">
                      {project.title}
                    </h4>

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tech.map(t => (
                        <span
                          key={t}
                          className="text-xs font-semibold px-2.5 py-1 rounded-full bg-primary/10 border border-primary/25 text-cyan-600 dark:text-cyan-400"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Overview */}
                    <p className="text-xs text-gray-600 dark:text-muted-foreground leading-relaxed mb-4">
                      {project.overview}
                    </p>

                    {/* Technical Implementations */}
                    <div className="mt-auto space-y-2.5">
                      <p className="text-xs font-bold tracking-widest uppercase text-gray-400 dark:text-muted-foreground">
                        Technical Implementations
                      </p>
                      {project.implementations.map((item, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gradient-to-br from-cyan-400 to-violet-500" />
                          <p className="text-xs text-gray-600 dark:text-muted-foreground leading-relaxed">
                            <span className="font-semibold text-gray-800 dark:text-gray-300">{item.label}: </span>
                            {item.detail}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EDUCATION SECTION */}
      <section id="education" className="py-24 px-4 bg-black/20">
        <div className="max-w-4xl mx-auto">
          <SectionHeading title="Education" subtitle="My academic background." />
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-cyan-400/30 transform md:-translate-x-1/2" />
            
            {/* MCM */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative flex items-start mb-12 md:justify-center"
            >
              <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-cyan-400 rounded-full transform md:-translate-x-1/2 mt-2 shadow-lg shadow-cyan-400/50" />
              <div className="ml-12 md:ml-0 md:w-1/2 md:pr-12 md:text-right">
                <div className="glass-panel p-6 rounded-xl">
                  <span className="text-cyan-600 dark:text-cyan-400 text-sm font-semibold">2024-2026</span>
                  <h3 className="text-xl font-bold text-cyan-600 dark:text-cyan-400 mt-1">Master's in Computer Management (MCM)</h3>
                  <p className="text-gray-600 dark:text-muted-foreground mt-1">Smt.Laxmibai Radhakishan Toshniwal</p>
                </div>
              </div>
            </motion.div>
            
            {/* B.Com */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="relative flex items-start md:justify-center"
            >
              <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-cyan-400 rounded-full transform md:-translate-x-1/2 mt-2 shadow-lg shadow-cyan-400/50" />
              <div className="ml-12 md:ml-0 md:w-1/2 md:pl-12 md:ml-auto">
                <div className="glass-panel p-6 rounded-xl">
                  <span className="text-cyan-600 dark:text-cyan-400 text-sm font-semibold">2021-2024</span>
                  <h3 className="text-xl font-bold text-cyan-600 dark:text-cyan-400 mt-1">Bachelor of Commerce (B.Com)</h3>
                  <p className="text-gray-600 dark:text-muted-foreground mt-1">Smt.Laxmibai Radhakishan Toshniwal</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-24 px-4 relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <SectionHeading title="Get In Touch" subtitle="Have a project in mind? Let's talk." />
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center space-y-8"
          >
            <div className="space-y-6 max-w-lg">
              <p className="text-gray-700 dark:text-muted-foreground text-lg">
                Feel free to reach out via email or connect with me on social media. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
              </p>

              <div className="flex flex-col items-center space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm text-gray-600 dark:text-muted-foreground font-medium uppercase tracking-wider">Email Me</p>
                    <a href="mailto:ayushijogi08@gmail.com" className="text-gray-900 dark:text-foreground hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors text-lg font-semibold">
                      ayushijogi08@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-6">Social Profiles</h4>
                <div className="flex justify-center gap-8">
                  <a 
                    href="https://github.com/ayushijogi08-art" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group flex flex-col items-center gap-2"
                    data-testid="link-github"
                  >
                    <div className="w-14 h-14 rounded-full border-2 border-gray-200 dark:border-white/10 flex items-center justify-center text-gray-600 dark:text-muted-foreground group-hover:text-black dark:group-hover:text-white group-hover:border-black dark:group-hover:border-white group-hover:bg-gray-50 dark:group-hover:bg-white/5 transition-all duration-300">
                      <Github className="w-7 h-7" />
                    </div>
                    <span className="text-xs font-medium text-gray-500 group-hover:text-black dark:group-hover:text-white">GitHub</span>
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/ayushi-jogi" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group flex flex-col items-center gap-2"
                    data-testid="link-linkedin"
                  >
                    <div className="w-14 h-14 rounded-full border-2 border-gray-200 dark:border-white/10 flex items-center justify-center text-gray-600 dark:text-muted-foreground group-hover:text-[#0077b5] group-hover:border-[#0077b5] group-hover:bg-[#0077b5]/5 transition-all duration-300">
                      <Linkedin className="w-7 h-7" />
                    </div>
                    <span className="text-xs font-medium text-gray-500 group-hover:text-[#0077b5]">LinkedIn</span>
                  </a>
                </div>
              </div>

              <div className="pt-8">
                <Button 
                  asChild
                  size="lg"
                  className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold px-10 py-6 rounded-xl shadow-lg shadow-cyan-500/20 transition-all hover:-translate-y-1 active:scale-95"
                  data-testid="button-download-resume"
                >
                  <a href="/resume.pdf" download="Ayushi_Jogi_Resume.pdf">
                    Download Resume
                  </a>
                </Button>
                <p className="text-xs text-gray-500 dark:text-muted-foreground mt-4 font-medium italic">
                  Recruiters: Click the LinkedIn/GitHub icons or Download Resume to see my full professional background.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 text-center text-muted-foreground text-sm bg-black/40 border-t border-white/5">
        <p>&copy; {new Date().getFullYear()} Ayushi Jogi. Built with React & Tailwind.</p>
      </footer>
    </div>
  );
}
