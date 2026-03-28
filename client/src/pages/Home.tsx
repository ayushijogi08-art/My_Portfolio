import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  Eye,
  X,
  Cloud,
  ShieldCheck,
  Layers
} from "lucide-react";
import { FaReact, FaNodeJs, FaHtml5, FaCss3, FaJs, FaAndroid, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiFlutter, SiDart, SiFirebase, SiExpress, SiMongodb, SiMysql, SiPostman, SiTailwindcss, SiCloudinary } from "react-icons/si";

import { Navbar } from "@/components/Navbar";
import { BackgroundOrbs } from "@/components/BackgroundOrbs";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface Project {
  title: string;
  image: string;
  shortDescription: string;
  tech: string[];
  overview: string;
  implementations: { label: string; detail: string }[];
}

const projects: Project[] = [
  {
    title: "Nexa | AI-Powered B2B & B2C E-Commerce OS",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80&fit=crop",
    shortDescription: "A full-stack, dual-sided e-commerce platform featuring a B2C storefront and a B2B enterprise dashboard for live inventory management.",
    tech: ["React.js", "Node.js", "Express", "MongoDB", "Gemini API", "Multer"],
    overview: "A production-grade e-commerce OS engineered for scale. The system utilizes Google's Gemini API to automate B2B sales calculations and features a context-aware chatbot for B2C customer support.",
    implementations: [
      { label: "Autonomous Proposals", detail: "Integrated Gemini API to build a B2B proposal generator calculating product mixes based on live stock and budgets." },
      { label: "AI Support Agent", detail: "Engineered a context-aware chatbot utilizing session history to execute live order tracking and refunds." },
      { label: "Strict Data Parsing", detail: "Enforced structured JSON outputs (responseSchema) from the LLM to parse unstructured AI logic into deterministic MongoDB records." },
      { label: "Secure Asset Pipeline", detail: "Built multipart/form-data upload pipelines using Multer to handle dynamic catalog images without server crashes." }
    ]
  },
  {
    title: "FinanceWise | Full-Stack Financial Management Application",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80&fit=crop",
    shortDescription: "A cross-platform mobile application engineered for secure, real-time expense tracking and personal budgeting.",
    tech: ["Flutter", "Node.js", "Express", "MongoDB", "JWT", "EmailJS"],
    overview: "A cross-platform mobile application engineered for secure, real-time expense tracking and personal budgeting. The system utilizes a custom Node.js backend to handle complex financial data and ensure strict multi-user data isolation.",
    implementations: [
      { label: "Secure Authentication", detail: "Implemented a multi-step JWT login system with automated OTP recovery integrated via EmailJS." },
      { label: "Automated Analytics", detail: "Built scalable data aggregation pipelines in MongoDB to generate real-time financial health reports." },
      { label: "State Management", detail: "Engineered a high-performance Flutter UI with optimized state management for smooth data synchronization." }
    ]
  },
  {
    title: "Duplicate Media Engine",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80&fit=crop",
    shortDescription: "A high-speed, offline media utility engineered to scan, cluster, and manage visually identical image files across local directories.",
    tech: ["Dart", "Flutter", "VP-Tree", "dHash Algorithm", "Heuristic Logic"],
    overview: "An advanced algorithmic utility that bypasses standard metadata scraping. It utilizes cryptographic hashing and geometric tree structures to accurately identify identical photos regardless of compression or scaling.",
    implementations: [
      { label: "Difference Hashing (dHash)", detail: "Implemented an algorithm with a 1:1 center crop to generate 64-bit binary signatures, neutralizing scale and compression distortions." },
      { label: "Vantage Point Tree (VP-Tree)", detail: "Architected a data structure to group mathematically similar binary strings using a Hamming distance threshold of 8, achieving O(N log N) search complexity." },
      { label: "Heuristic Logic", detail: "Developed a pipeline that mathematically ranks clustered duplicates by total megapixels and uncompressed disk space to recommend the original file." },
      { label: "Memory Optimization", detail: "Optimized on-device processing buffers to handle 10,000+ photo galleries without crashing low-end hardware." }
    ]
  },
  {
    title: "Grocery Store Management System",
    image: "https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?w=800&q=80&fit=crop",
    shortDescription: "A responsive web-based enterprise interface designed to streamline retail operations, inventory tracking, and vendor ledgers.",
    tech: ["HTML", "Tailwind CSS", "Vanilla JavaScript"],
    overview: "A responsive web-based enterprise interface designed to streamline retail operations, inventory tracking, and vendor ledgers. Built entirely without frameworks to demonstrate deep DOM manipulation expertise.",
    implementations: [
      { label: "Vanilla JS Mastery", detail: "Developed automated Profit & Loss calculation scripts (daily, monthly, yearly) strictly using vanilla JavaScript DOM manipulation." },
      { label: "Real-Time Data Sync", detail: "Integrated Firebase Realtime Database to handle secure, cross-device data synchronization." },
      { label: "Secure Auth Pipeline", detail: "Built and maintained a secure Firebase Auth user authentication flow." }
    ]
  },
  {
    title: "Video Streaming Backend",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80&fit=crop",
    shortDescription: "A highly scalable RESTful API backend architecture designed to support a full-scale video streaming service with secure media delivery.",
    tech: ["Node.js", "Express", "MongoDB", "JWT", "Cloudinary"],
    overview: "A robust backend system engineered for heavy media routing, secure user access, and relational data retrieval. The architecture intentionally decouples metadata storage in MongoDB from high-bandwidth video delivery via Cloudinary to maximize server performance.",
    implementations: [
      { label: "Media Pipeline Integration", detail: "Architected a secure upload pipeline connecting the Node.js server to Cloudinary for optimized media storage and rapid asset delivery." },
      { label: "Relational Data Modeling", detail: "Designed complex MongoDB schemas using Mongoose to link user accounts, subscription tiers, and individual watch histories without database locks." },
      { label: "Endpoint Security", detail: "Built custom middleware for JWT authentication to protect premium video routes and user modification endpoints." }
    ]
  }
];

const skillCategories = [
  {
    title: "Frontend Development",
    icon: <Globe className="w-6 h-6 text-cyan-400" />,
    skills: [
      { name: "React.js", icon: <FaReact /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "HTML5 / CSS3", icon: <FaHtml5 /> },
      { name: "JavaScript (ES6+)", icon: <FaJs /> }
    ]
  },
  {
    title: "Backend & Database",
    icon: <Server className="w-6 h-6 text-violet-500" />,
    skills: [
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "MongoDB / Mongoose", icon: <SiMongodb /> },
      { name: "MySQL", icon: <SiMysql /> }
    ]
  },
  {
    title: "Mobile App Architecture",
    icon: <Smartphone className="w-6 h-6 text-pink-500" />,
    skills: [
      { name: "Flutter", icon: <SiFlutter /> },
      { name: "Dart", icon: <SiDart /> },
      { name: "Android", icon: <FaAndroid /> }
    ]
  },
  {
    title: "Cloud, AI & Security",
    icon: <Cloud className="w-6 h-6 text-orange-400" />,
    skills: [
      { name: "Google Gemini API", icon: <Code2 className="text-base" /> },
      { name: "Cloudinary", icon: <SiCloudinary /> },
      { name: "JWT Authentication", icon: <ShieldCheck className="text-base" /> },
      { name: "Firebase", icon: <SiFirebase /> }
    ]
  },
  {
    title: "Architecture & Tools",
    icon: <Layers className="w-6 h-6 text-yellow-500" />,
    skills: [
      { name: "DSA (VP-Tree, Hashing)", icon: <Layers className="text-base" /> },
      { name: "Git & GitHub", icon: <FaGitAlt /> },
      { name: "Postman", icon: <SiPostman /> },
      { name: "Multer", icon: <Code2 className="text-base" /> }
    ]
  }
];

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

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
            <div className="bg-black/40 px-4 py-3 flex items-center border-b border-white/5">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="ml-4 text-gray-400 text-xs">ayushi_profile.js</div>
            </div>
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
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
          <SectionHeading title="Featured Projects" subtitle="Some of my recent work" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="glass-panel rounded-2xl overflow-hidden border border-white/10 dark:border-white/5 shadow-lg cursor-pointer group"
                onClick={() => setSelectedProject(project)}
                data-testid={`card-project-${index}`}
              >
                {/* Project Image */}
                <div className="w-full h-52 overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>

                {/* Card Body */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 leading-snug group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-muted-foreground leading-relaxed mb-4">
                    {project.shortDescription}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map(t => (
                      <span
                        key={t}
                        className="text-xs font-semibold px-2.5 py-1 rounded-full bg-primary/10 border border-primary/25 text-cyan-600 dark:text-cyan-400"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECT MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#0f172a] border border-white/10 shadow-2xl"
              onClick={e => e.stopPropagation()}
            >
              {/* Modal Image */}
              <div className="w-full h-56 overflow-hidden relative flex-shrink-0">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/30 to-transparent" />
              </div>

              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/50 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
                data-testid="button-close-modal"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Modal Content */}
              <div className="p-7">
                <h2 className="text-2xl font-bold text-cyan-400 mb-4 leading-snug">
                  {selectedProject.title}
                </h2>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tech.map(t => (
                    <span
                      key={t}
                      className="text-xs font-semibold px-3 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-cyan-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Overview */}
                <div className="mb-6">
                  <p className="text-sm font-bold text-white mb-2">Overview:</p>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {selectedProject.overview}
                  </p>
                </div>

                {/* Technical Implementations */}
                <div>
                  <p className="text-sm font-bold text-white mb-3">Technical Implementations:</p>
                  <div className="space-y-3">
                    {selectedProject.implementations.map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gradient-to-br from-cyan-400 to-violet-500" />
                        <p className="text-sm text-gray-400 leading-relaxed">
                          <span className="font-semibold text-gray-200">{item.label}: </span>
                          {item.detail}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* EDUCATION SECTION */}
      <section id="education" className="py-24 px-4 bg-black/20">
        <div className="max-w-4xl mx-auto">
          <SectionHeading title="Education" subtitle="My academic background." />
          
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-cyan-400/30 transform md:-translate-x-1/2" />
            
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
