import { useState } from "react";
import {
  Shield,
  FileCheck,
  Lock,
  Network,
  Terminal,
  GraduationCap,
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  Calendar,
  MapPin,
  Award,
  Check,
  Cpu,
  ChevronDown,
  ExternalLink,
  BookOpen
} from "lucide-react";
import { experiences, leadershipAndVolunteer, projects, certifications, publications } from "./data";
import MatrixRain from "./components/MatrixRain";
import TerminalTyping from "./components/TerminalTyping";
import CyberBot from "./components/CyberBot";
import { ProfileImage } from "./components/ProfileImage";

export default function App() {
  const [activeTab, setActiveTab] = useState<"experience" | "leadership">("experience");

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Define the skills and technologies lists for the About Me section
  const programmingLanguages = [
    "Python",
    "C",
    "SQL"
  ];

  const technicalSkills = [
    "Incident Response",
    "Security Operations",
    "Digital Forensics (DFIR)",
    "Network Security",
    "Cloud Security",
    "Identity and Access Management",
    "SIEM",
    "Log Analysis",
    "Threat Intelligence",
    "Zero Trust",
    "Cybersecurity Frameworks",
    "AI Security"
  ];

  const toolsAndTechnologies = [
    "Splunk",
    "CrowdStrike Falcon",
    "QRadar",
    "Microsoft Defender",
    "Microsoft Azure",
    "AWS",
    "Google Cloud Platform",
    "Google SecOps",
    "ServiceNow",
    "Wiz",
    "Docker",
    "Metasploit",
    "Burp Suite",
    "Linux",
    "Windows",
    "Wireshark",
    "Nmap",
    "PowerShell"
  ];

  const spokenLanguages = [
    "Portuguese (Native)",
    "English (Fluent)",
    "Spanish (Basic)"
  ];

  return (
    <div className="min-h-screen bg-[#070a13] text-slate-300 font-sans selection:bg-violet-500/25 selection:text-violet-400 relative">
      <style>{`
        @keyframes cyber-scan {
          0% { top: 0%; }
          50% { top: 100%; }
          100% { top: 0%; }
        }
        .cyber-scanline {
          position: absolute;
          left: 0;
          width: 100%;
          height: 2px;
          background: linear-gradient(to right, transparent, #8b5cf6, transparent);
          box-shadow: 0 0 10px #8b5cf6, 0 0 4px #8b5cf6;
          animation: cyber-scan 6s linear infinite;
          pointer-events: none;
          z-index: 10;
        }
      `}</style>

      {/* Background elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-950/15 via-slate-950/20 to-slate-950 opacity-90" />
        {/* Fine background grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(16,24,38,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(18,24,38,0.1)_1px,transparent_1px)] bg-[size:32px_32px]" />
      </div>

      {/* SECURE HEADER / NAV BAR */}
      <header className="sticky top-0 z-40 bg-[#070a13]/85 backdrop-blur-md border-b border-slate-900/60 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          
          {/* Logo element */}
          <div className="flex items-center gap-3">
            <div className="relative flex items-center justify-center w-9 h-9 rounded-lg bg-violet-500/10 border border-violet-500/20 text-violet-400 shadow-[0_0_15px_rgba(139,92,246,0.15)]">
              <Terminal className="w-4.5 h-4.5" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold tracking-wider text-slate-100 uppercase">EDUARDA KOOP</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 text-xs font-sans font-medium tracking-wide">
            <button
              onClick={() => handleScrollTo("about")}
              className="text-slate-300 hover:text-violet-400 transition-colors cursor-pointer"
            >
              About
            </button>
            <button
              onClick={() => handleScrollTo("experience")}
              className="text-slate-300 hover:text-violet-400 transition-colors cursor-pointer"
            >
              Experience
            </button>
            <button
              onClick={() => handleScrollTo("projects")}
              className="text-slate-300 hover:text-violet-400 transition-colors cursor-pointer"
            >
              Projects
            </button>
            <button
              onClick={() => handleScrollTo("publications")}
              className="text-slate-300 hover:text-violet-400 transition-colors cursor-pointer"
            >
              Publications
            </button>
            <button
              onClick={() => handleScrollTo("ai-assistant")}
              className="text-slate-300 hover:text-violet-400 transition-colors cursor-pointer"
            >
              AI Assistant
            </button>
            <a
              href="/Eduarda%20Koop%20-%20Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-violet-400 transition-colors cursor-pointer"
            >
              Resume
            </a>
          </nav>

          {/* Hiring indicator */}
          <div className="flex items-center gap-2 font-sans text-[11px] bg-violet-950/20 border border-violet-500/20 px-3.5 py-1.5 rounded-full text-violet-400">
            <span className="w-1.5 h-1.5 rounded-full bg-violet-500 animate-pulse" />
            <span className="font-semibold uppercase tracking-wider">OPEN FOR NETWORKING</span>
          </div>

        </div>
      </header>

      {/* CORE PORTFOLIO SECTIONS */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-24">
        
        {/* 1. HERO SECTION (Landing) */}
        <section id="hero" className="min-h-[88vh] flex items-center justify-center relative rounded-2xl overflow-hidden border border-slate-900 bg-slate-950/30 p-6 md:p-16">
          {/* Animated matrix rain just for the hero section background */}
          <MatrixRain />

          <div className="relative z-10 text-center max-w-3xl space-y-6">
            
            {/* Command tag badge */}
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 font-sans text-xs text-violet-400 font-semibold uppercase tracking-wider mb-4">
              <Shield className="w-3.5 h-3.5" />
              CYBERSECURITY PORTFOLIO
            </div>

            {/* Display name in custom header styling */}
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-slate-100 tracking-tight leading-none">
              Eduarda Koop
            </h1>

            {/* Animated CLI Subtext */}
            <div className="h-12 flex items-center justify-center text-sm sm:text-base md:text-lg">
              <TerminalTyping />
            </div>

            {/* Introduction blurb */}
            <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto font-sans font-light leading-relaxed">
              Cybersecurity analyst focused on incident response, security operations, and threat intelligence, with a B.S. in Cybersecurity from the University of South Florida and hands-on experience across different areas in cybersecurity!
            </p>

            {/* Contact details in Hero Section */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-6">
              <a
                href="mailto:eduardaskoop@outlook.com"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-slate-800 bg-[#0b0e16]/60 hover:bg-violet-950/20 hover:border-violet-500/40 text-slate-300 hover:text-violet-400 font-mono text-xs transition-all duration-200"
              >
                <Mail className="w-4 h-4" />
                <span>Email</span>
              </a>
              <a
                href="https://www.linkedin.com/in/eduarda-koop/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-slate-800 bg-[#0b0e16]/60 hover:bg-violet-950/20 hover:border-violet-500/40 text-slate-300 hover:text-violet-400 font-mono text-xs transition-all duration-200"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com/eduardakoop"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-slate-800 bg-[#0b0e16]/60 hover:bg-violet-950/20 hover:border-violet-500/40 text-slate-300 hover:text-violet-400 font-mono text-xs transition-all duration-200"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-slate-800 bg-[#0b0e16]/60 text-slate-300 font-mono text-xs">
                <MapPin className="w-4 h-4 text-violet-500/80" />
                <span>Tampa, FL</span>
              </div>
            </div>

          </div>

          {/* Small scroll indicators */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce flex flex-col items-center gap-1.5 opacity-50 hover:opacity-100 transition-opacity cursor-pointer select-none font-sans text-[10px] text-slate-400" onClick={() => handleScrollTo("about")}>
            <span className="font-medium tracking-wide">SCROLL TO EXPLORE</span>
            <ChevronDown className="w-4 h-4 text-violet-500" />
          </div>
        </section>

        {/* 2. ABOUT ME SECTION */}
        <section id="about" className="space-y-8">
          
          {/* Heading */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-white tracking-tight relative pb-3 font-display">
              About Me
              <span className="absolute bottom-0 left-0 w-16 h-0.5 bg-violet-500" />
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left ID Profile Card (4-columns) */}
            <div className="lg:col-span-4 space-y-6">
              
              <div className="border border-slate-900 bg-slate-950/40 rounded-xl overflow-hidden shadow-lg">
                
                {/* Header bar */}
                <div className="bg-slate-900/40 border-b border-slate-900 px-4 py-3 flex items-center select-none text-xs text-slate-300">
                  <div className="flex items-center gap-1.5 mr-auto">
                    <span className="w-2 h-2 rounded-full bg-red-500/70" />
                    <span className="w-2 h-2 rounded-full bg-yellow-500/70" />
                    <span className="w-2 h-2 rounded-full bg-violet-500/70" />
                  </div>
                  <span className="font-sans font-medium">Profile Overview</span>
                </div>

                {/* ID Image Graphic */}
                <div className="p-4 bg-slate-950/20 border-b border-slate-900/50">
                  <div className="w-full h-64 relative bg-[#06080d] border border-slate-900 rounded overflow-hidden flex flex-col items-center justify-center p-4 group">
                    
                    {/* Profile Image with high-quality fallback */}
                    <ProfileImage />

                    {/* Reticle brackets */}
                    <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-violet-500/40 z-10 animate-pulse" />
                    <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-violet-500/40 z-10 animate-pulse" />
                    <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-violet-500/40 z-10 animate-pulse" />
                    <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-violet-500/40 z-10 animate-pulse" />

                  </div>
                </div>

                {/* Profile credentials */}
                <div className="p-5 space-y-3 font-sans text-xs">
                  <div className="text-slate-100 font-bold text-sm">Eduarda Koop</div>
                  
                  <div className="flex items-center gap-2.5 text-slate-400">
                    <MapPin className="w-4 h-4 text-slate-500" />
                    <span>Tampa, FL</span>
                  </div>

                  <div className="flex items-center gap-2.5 text-slate-400">
                    <GraduationCap className="w-4 h-4 text-slate-500" />
                    <span>University of South Florida</span>
                  </div>
                </div>

              </div>

            </div>

            {/* Right Information Column (8-columns) */}
            <div className="lg:col-span-8 space-y-6">
              
              {/* Executive Bio */}
              <p className="text-sm text-slate-300 font-sans leading-relaxed">
                Hello! My name is Eduarda, and I’m a passionate cybersecurity graduate looking to get experience in the field!
              </p>

              {/* B.S. Cybersecurity badge */}
              <div className="border border-violet-500/25 bg-violet-950/10 rounded-xl p-4 flex items-center gap-3">
                <GraduationCap className="w-5 h-5 text-violet-400 shrink-0" />
                <span className="text-xs font-sans text-violet-400 font-medium">
                  B.S. in Cybersecurity — University of South Florida, graduating May 2026.
                </span>
              </div>

              {/* Programming Languages Subsection */}
              <div className="space-y-3">
                <div className="text-violet-400 font-sans text-xs font-semibold uppercase tracking-wider">Primary Languages</div>
                <div className="flex flex-wrap gap-2">
                  {programmingLanguages.map((lang) => (
                    <span
                      key={lang}
                      className="border border-slate-800 bg-slate-900/10 hover:border-slate-700 text-slate-300 font-sans text-xs px-3.5 py-1.5 rounded-full transition-all select-none"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>

              {/* Technical Skills Subsection */}
              <div className="space-y-3">
                <div className="text-violet-400 font-sans text-xs font-semibold uppercase tracking-wider">Technical Skills</div>
                <div className="flex flex-wrap gap-2">
                  {technicalSkills.map((skill) => (
                    <span
                      key={skill}
                      className="border border-slate-800 bg-slate-900/10 hover:border-slate-700 text-slate-300 font-sans text-xs px-3.5 py-1.5 rounded-full transition-all select-none"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tools & Technologies Subsection */}
              <div className="space-y-3">
                <div className="text-violet-400 font-sans text-xs font-semibold uppercase tracking-wider">Tools & Technologies</div>
                <div className="flex flex-wrap gap-2">
                  {toolsAndTechnologies.map((tool) => (
                    <span
                      key={tool}
                      className="border border-slate-800 bg-slate-900/10 hover:border-slate-700 text-slate-300 font-sans text-xs px-3.5 py-1.5 rounded-full transition-all select-none"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Languages Subsection */}
              <div className="space-y-3">
                <div className="text-violet-400 font-sans text-xs font-semibold uppercase tracking-wider">Languages</div>
                <div className="flex flex-wrap gap-2">
                  {spokenLanguages.map((lang) => (
                    <span
                      key={lang}
                      className="border border-slate-800 bg-slate-900/10 hover:border-slate-700 text-slate-300 font-sans text-xs px-3.5 py-1.5 rounded-full transition-all select-none"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>

              {/* Certifications Subsection */}
              <div className="space-y-3">
                <div className="text-violet-400 font-sans text-xs font-semibold uppercase tracking-wider">Certifications</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 text-xs font-sans text-slate-300">
                  <div className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-violet-400 shrink-0" />
                    <span>CompTIA Security+ (In Progress)</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-violet-400 shrink-0" />
                    <span>SC-900 (In Progress)</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-violet-400 shrink-0" />
                    <span>Blue Team Level 1</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-violet-400 shrink-0" />
                    <span>Google Cybersecurity Certificate</span>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* 3. EXPERIENCE TIMELINE (WORK & LEADERSHIP) */}
        <section id="experience" className="space-y-8">
          
          {/* Heading */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-900 pb-5">
            <div>
              <h2 className="text-3xl font-bold text-white tracking-tight relative pb-3 font-display">
                Experience
                <span className="absolute bottom-0 left-0 w-16 h-0.5 bg-violet-500" />
              </h2>
            </div>

            {/* Tab Swapper */}
            <div className="flex font-sans text-xs bg-slate-950 border border-slate-900 p-1 rounded-xl shrink-0 self-start sm:self-auto shadow-inner">
              <button
                id="tab-exp-work"
                onClick={() => setActiveTab("experience")}
                className={`px-4 py-2 rounded-lg transition-all cursor-pointer font-medium tracking-wide ${
                  activeTab === "experience"
                    ? "bg-violet-950/60 text-violet-400 border border-violet-500/20 shadow-sm"
                    : "text-slate-400 hover:text-slate-200 border border-transparent"
                }`}
              >
                Work Experience
              </button>
              <button
                id="tab-exp-lead"
                onClick={() => setActiveTab("leadership")}
                className={`px-4 py-2 rounded-lg transition-all cursor-pointer font-medium tracking-wide ${
                  activeTab === "leadership"
                    ? "bg-violet-950/60 text-violet-400 border border-violet-500/20 shadow-sm"
                    : "text-slate-400 hover:text-slate-200 border border-transparent"
                }`}
              >
                Leadership Experience
              </button>
            </div>
          </div>

          {/* Timeline Deck Layout */}
          <div className="relative border-l-2 border-slate-900 pl-6 sm:pl-8 ml-4 space-y-8">
            
            {(activeTab === "experience" ? experiences : leadershipAndVolunteer).map((exp, idx) => {
              // Convert company names to appropriate log extension filenames
              const filename = `${exp.company.split(" ")[0].toLowerCase()}.log`;

              return (
                <div
                  id={`timeline-item-${exp.id}`}
                  key={exp.id}
                  className="relative group"
                >
                  {/* Double Hollow Violet Circle Marker on axis */}
                  <span className="absolute -left-10 sm:-left-12 top-5 flex h-6.5 w-6.5 items-center justify-center rounded-full bg-[#070a13] border-2 border-violet-500/80 z-20 shadow-[0_0_8px_rgba(139,92,246,0.2)]">
                    <span className="h-3 w-3 rounded-full border border-violet-500/60 bg-violet-500" />
                  </span>

                  {/* Modern Styled Card */}
                  <div className="border border-slate-900 bg-slate-950/40 rounded-xl overflow-hidden shadow-lg group-hover:border-violet-500/30 transition-all duration-300">
                    
                    {/* Card Header Bar */}
                    <div className="bg-slate-900/40 border-b border-slate-900 px-5 py-3 flex items-center justify-between font-sans text-xs text-slate-300 select-none">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-violet-500" />
                        <span className="font-semibold text-slate-200">{exp.company}</span>
                      </div>
                      <span className="text-violet-400 font-medium font-sans">{exp.period}</span>
                    </div>

                    {/* Content body */}
                    <div className="p-6">
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                        {/* Left column: Header + Bullet points */}
                        <div className={`space-y-4 ${exp.imageUrl ? "lg:col-span-7" : "lg:col-span-12"}`}>
                          {/* Header block */}
                          <div className="space-y-1">
                            <h3 className="font-sans font-bold text-white text-lg tracking-tight leading-snug">
                              {exp.role}
                            </h3>
                            <p className="text-xs font-sans text-slate-400 flex items-center gap-2">
                              <span>{exp.company}</span>
                              <span className="text-slate-600">•</span>
                              <span>{exp.location}</span>
                            </p>
                          </div>

                          {/* Bullet points */}
                          <div className="space-y-3 font-sans text-xs text-slate-300 leading-relaxed">
                            {exp.achievements.map((bullet, bIdx) => (
                              <div id={`achievement-bullet-${exp.id}-${bIdx}`} key={bIdx} className="flex items-start gap-3">
                                <span className="text-violet-400 font-sans font-bold shrink-0 select-none mt-0.5">✓</span>
                                <p className="text-slate-300 font-sans leading-relaxed text-xs">{bullet}</p>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Right column: Image block */}
                        {exp.imageUrl && (
                          <div className="lg:col-span-5 w-full flex justify-center">
                            <div className="relative overflow-hidden rounded-lg border border-slate-900 bg-slate-950/80 shadow-inner group/img w-full">
                              <img
                                src={exp.imageUrl}
                                alt={`${exp.company} view`}
                                referrerPolicy="no-referrer"
                                className="w-full h-48 object-cover object-center filter grayscale contrast-[1.15] brightness-[0.85] group-hover/img:grayscale-0 group-hover/img:brightness-100 group-hover/img:scale-[1.03] transition-all duration-500"
                              />
                              <div className="absolute inset-0 bg-violet-500/5 mix-blend-overlay pointer-events-none" />
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

          </div>
        </section>

        {/* 4. PROJECTS SECTION */}
        <section id="projects" className="space-y-8">
          
          {/* Heading */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-white tracking-tight relative pb-3 font-display">
              Projects
              <span className="absolute bottom-0 left-0 w-16 h-0.5 bg-violet-500" />
            </h2>
          </div>

          {/* Grid of Projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((proj, pIdx) => (
              <div
                id={`project-card-${proj.id}`}
                key={proj.id}
                className="border border-slate-900 bg-slate-950/40 rounded-xl overflow-hidden flex flex-col justify-between group hover:border-violet-500/40 transition-all duration-300 hover:shadow-[0_0_20px_rgba(139,92,246,0.03)]"
              >
                
                {/* Header Tab */}
                <div className="bg-slate-900/40 border-b border-slate-900 px-5 py-3 flex items-center justify-between font-sans text-xs text-slate-300 select-none">
                  <span className="font-semibold text-slate-200">{proj.title}</span>
                  <div className="flex items-center gap-3">
                    <a
                      id={`proj-git-${proj.id}`}
                      href={proj.githubUrl || "https://github.com/eduardakoop"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-violet-400 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Content body */}
                <div className="p-6 space-y-4">
                  <p className="text-sm text-slate-300 font-sans leading-relaxed">
                    {proj.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {proj.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full bg-slate-900/80 border border-slate-800 text-[11px] text-slate-400 font-sans"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card footer showing security metric impact */}
                {proj.metrics && (
                  <div className="bg-slate-900/20 border-t border-slate-900 px-6 py-3.5 flex items-center font-sans text-[11px] text-slate-400">
                    <Shield className="w-4 h-4 text-violet-400 mr-2 shrink-0 animate-pulse" />
                    <span className="text-violet-400 font-semibold uppercase tracking-wider text-[10px]">{proj.metrics}</span>
                  </div>
                )}

              </div>
            ))}
          </div>
        </section>

        {/* 5. PUBLICATIONS SECTION */}
        <section id="publications" className="space-y-8">
          
          {/* Heading */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-white tracking-tight relative pb-3 font-display">
              Publications & Advisories
              <span className="absolute bottom-0 left-0 w-16 h-0.5 bg-violet-500" />
            </h2>
          </div>

          {/* Grid of Publications */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {publications.map((pub) => (
              <a
                id={`pub-card-${pub.id}`}
                key={pub.id}
                href={pub.url}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-slate-900 bg-slate-950/40 hover:bg-[#0d1321]/30 rounded-xl overflow-hidden flex flex-col justify-between group hover:border-violet-500/40 transition-all duration-300"
              >
                <div>
                  {/* Header Tab */}
                  <div className="bg-slate-900/40 border-b border-slate-900 px-5 py-3 flex items-center justify-between font-sans text-xs text-slate-300 select-none">
                    <span className="font-semibold text-slate-200">{pub.publisher}</span>
                    <div className="flex items-center gap-1.5 text-[10px] font-semibold text-violet-400 uppercase tracking-wider">
                      <span className="w-1.5 h-1.5 rounded-full bg-violet-500 animate-pulse" />
                      {pub.category}
                    </div>
                  </div>

                  {/* Content body */}
                  <div className="p-6 space-y-4">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="font-sans font-bold text-slate-100 text-base group-hover:text-violet-400 transition-colors leading-snug">
                        {pub.title}
                      </h3>
                      <ExternalLink className="w-4.5 h-4.5 text-slate-500 shrink-0 group-hover:text-violet-400 transition-colors mt-0.5" />
                    </div>

                    <p className="text-sm text-slate-300 font-sans leading-relaxed">
                      {pub.description}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {pub.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-full bg-slate-900/80 border border-slate-800 text-[11px] text-slate-400 font-sans"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer details */}
                <div className="bg-slate-900/20 border-t border-slate-900 px-6 py-3.5 flex justify-between font-sans text-xs text-slate-400">
                  <span>{pub.publisher}</span>
                  <span>{pub.date}</span>
                </div>

              </a>
            ))}
          </div>
        </section>

        {/* 5. INTERACTIVE AI CONSOLE */}
        <CyberBot />

      </main>

      {/* FOOTER */}
      <footer id="contact" className="border-t border-slate-900 bg-slate-950/90 py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            {/* Left Column: Heading */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                Contact Me
              </h2>
            </div>

            {/* Right Column: Contact Links */}
            <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
              <a
                href="mailto:eduardaskoop@outlook.com"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-slate-800 bg-[#0b0e16]/60 hover:bg-violet-950/20 hover:border-violet-500/40 text-slate-300 hover:text-violet-400 font-mono text-xs transition-all duration-200"
              >
                <Mail className="w-4 h-4" />
                <span>Email</span>
              </a>
              <a
                href="https://www.linkedin.com/in/eduarda-koop/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-slate-800 bg-[#0b0e16]/60 hover:bg-violet-950/20 hover:border-violet-500/40 text-slate-300 hover:text-violet-400 font-mono text-xs transition-all duration-200"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com/eduardakoop"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-slate-800 bg-[#0b0e16]/60 hover:bg-violet-950/20 hover:border-violet-500/40 text-slate-300 hover:text-violet-400 font-mono text-xs transition-all duration-200"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-slate-800 bg-[#0b0e16]/60 text-slate-300 font-mono text-xs">
                <MapPin className="w-4 h-4 text-violet-500/80" />
                <span>Tampa, FL</span>
              </div>
            </div>
          </div>

          {/* Sub-footer metadata */}
          <div className="mt-12 pt-6 border-t border-slate-900/50 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[10px] text-slate-600">
            <div className="flex items-center gap-2 uppercase tracking-widest">
              <Shield className="w-3.5 h-3.5 text-violet-500/60" />
              <span>Eduarda Koop</span>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
