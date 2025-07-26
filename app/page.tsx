"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Code,
  Trophy,
  GraduationCap,
  Briefcase,
  ChevronDown,
  Menu,
  X,
  Zap,
  Star,
  Rocket,
} from "lucide-react";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "achievements", label: "Achievements" },
    { id: "contact", label: "Contact" },
  ];

  // Skills data is now inline in the component to avoid unused variable

  const projects = [
    {
      title: "🧠 AI Resume Critic",
      status: "Completed",
      description:
        "Comprehensive AI-powered resume analysis platform that provides instant, professional feedback on resumes. Upload PDF/DOCX files and get detailed insights on grammar, formatting, keyword optimization, role alignment, and actionable improvement suggestions using Groq's Llama-3.1-70B.",
      tech: [
        "Next.js 15",
        "TypeScript",
        "Groq AI",
        "MongoDB",
        "Tailwind CSS",
        "shadcn/ui",
      ],
      gradient: "from-purple-400 via-pink-500 to-red-500",
      links: {
        live: "https://ai-resume-critic.vercel.app",
        github: "https://github.com/Rushi0207/ai-resume-critic",
        demo: "https://ai-resume-critic.vercel.app/analyzer",
      },
      features: [
        "Multi-format Support (PDF/DOCX up to 10MB)",
        "AI-Powered Analysis with Groq Llama-3.1-70B",
        "Role-Specific Feedback for 15+ job roles",
        "Admin Dashboard with Analytics",
        "Real-time Processing with Progress Indicators",
        "Responsive Design for All Devices",
      ],
    },
    {
      title: "💬 Lightweight Feedback System",
      status: "Completed",
      description:
        "Comprehensive enterprise-level feedback management tool for internal team communication. Features role-based authentication, email verification, real-time notifications, and advanced feedback categorization with manager-employee hierarchical relationships.",
      tech: [
        "React 18",
        "Redux Toolkit",
        "FastAPI",
        "SQLAlchemy",
        "JWT",
        "Tailwind CSS",
      ],
      gradient: "from-emerald-400 via-teal-500 to-cyan-500",
      links: {
        github: "https://github.com/Rushi0207/lightweight-feedback-system",
        demo: "https://feedback-system-demo.vercel.app",
      },
      features: [
        "Role-Based Authentication (Manager/Employee)",
        "Email Verification with Professional Templates",
        "Redux State Management with Persistence",
        "Smart Tagging & Categorization System",
        "Real-time Notifications & Optimistic Updates",
        "Advanced Filtering & Search Functionality",
      ],
    },
    {
      title: "Instagram Auto-Reply Automation",
      description:
        "A full-stack React + Node.js application that uses the Instagram Graph API to automate comment replies based on keywords. Includes OAuth login, analytics dashboard, and secure API.",
      tech: ["React", "Node.js", "Instagram API", "OAuth"],
      gradient: "from-blue-400 via-purple-500 to-pink-500",
      links: {
        github: "https://github.com/Rushi0207/instagram-auto-reply",
      },
    },
    {
      title: "AI/ML-Powered Video Dubbing",
      description:
        "A Python/FastAPI system that translates and dubs English videos into regional Indian languages using transformers and TTS. Designed for offline use with pipelining for performance. Smart India Hackathon 2023 Finalist project.",
      tech: ["Python", "FastAPI", "Transformers", "TTS", "AI/ML"],
      gradient: "from-green-400 via-blue-500 to-purple-500",
      status: "SIH 2023 Finalist",
      links: {
        github: "https://github.com/Rushi0207/ai-video-dubbing",
      },
    },
    {
      title: "Spring Boot JWT Auth System",
      description:
        "Secure role-based access system using Spring Boot, JWT, and MySQL. Implements user registration, login, CSRF protection, and RBAC with Spring Security.",
      tech: ["Spring Boot", "JWT", "MySQL", "Spring Security"],
      gradient: "from-yellow-400 via-orange-500 to-red-500",
      links: {
        github: "https://github.com/Rushi0207/spring-boot-jwt-auth",
      },
    },
    {
      title: "Blog Platform (MERN Stack)",
      description:
        "Feature-rich blogging site using React, Node.js, MongoDB, and JWT authentication. Includes rich-text editor (react-quill), login system, and responsive UI.",
      tech: ["React", "Node.js", "MongoDB", "JWT"],
      gradient: "from-cyan-400 via-blue-500 to-indigo-500",
      links: {
        github: "https://github.com/Rushi0207/blog-platform-mern",
      },
    },
  ];

  const experiences = [
    {
      title: "Full Stack Developer Intern",
      company: "Ttretta Pvt Ltd",
      period: "March 2025 – Present",
      description:
        "Built scalable features and backend APIs for production. Worked with cross-functional teams to implement real-time data pipelines and deployment strategies.",
      color: "from-blue-500 to-purple-600",
    },
    {
      title: "Research Participant",
      company: "IIT Bombay – CET Lab",
      period: "Feb 2025",
      description:
        "Collaborated in a research study focused on socially shared metacognitive regulation in software design. Designed and tested EdTech-based solutions.",
      color: "from-green-500 to-blue-600",
    },
  ];

  const achievements = [
    {
      text: "Finalist – Smart India Hackathon 2023 (AI video dubbing)",
      icon: Trophy,
      color: "text-yellow-500",
    },
    {
      text: "Solved 500+ problems on LeetCode & GFG (DSA-focused)",
      icon: Code,
      color: "text-green-500",
    },
    {
      text: "Selected for SSB (Indian Army & Navy)",
      icon: Star,
      color: "text-blue-500",
    },
    {
      text: "GDSC RGIT – IoT/Robotics Team Member",
      icon: Zap,
      color: "text-purple-500",
    },
    {
      text: "Managed web/dev events under CESS & CodeCell at RGIT",
      icon: Rocket,
      color: "text-orange-500",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-purple-200 z-50 shadow-lg shadow-purple-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Rushikesh Phadtare
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 text-sm font-medium transition-all duration-300 ${
                    activeSection === item.id
                      ? "text-purple-600 border-b-2 border-purple-600 transform scale-105"
                      : "text-slate-600 hover:text-purple-600 hover:scale-105"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Navigation Button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-purple-600"
              >
                {isMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-purple-200 bg-gradient-to-r from-purple-50 to-blue-50">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-3 py-2 text-sm font-medium text-slate-600 hover:text-purple-600 hover:bg-white/50 rounded-lg mx-2"
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-indigo-50 via-blue-50 to-cyan-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-2xl shadow-purple-500/30 animate-pulse">
                RP
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                Rushikesh Phadtare
              </span>
            </h1>
            <p className="text-xl md:text-2xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-8 font-semibold">
              🚀 Full-Stack Developer | MERN Specialist | 500+ DSA Problems
              Solved
            </p>
            <p className="text-lg text-slate-700 max-w-3xl mx-auto mb-12 leading-relaxed">
              I&apos;m a second-year Computer Engineering student passionate about
              building scalable, real-world applications using modern
              technologies. From full-stack apps to AI-powered tools, I love
              solving problems that create impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => scrollToSection("projects")}
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg shadow-purple-500/30 transform hover:scale-105 transition-all duration-300"
              >
                <Rocket className="w-4 h-4 mr-2" />
                View My Work
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("contact")}
                className="border-2 border-purple-600 text-purple-600 hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 hover:text-white transform hover:scale-105 transition-all duration-300"
              >
                <Mail className="w-4 h-4 mr-2" />
                Get In Touch
              </Button>
            </div>
            <div className="mt-12">
              <ChevronDown
                className="w-6 h-6 mx-auto text-purple-500 animate-bounce cursor-pointer hover:text-purple-700 transition-colors"
                onClick={() => scrollToSection("about")}
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-20 bg-gradient-to-br from-white via-blue-50 to-purple-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </div>
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-2xl shadow-purple-500/20 bg-gradient-to-br from-white to-purple-50/50">
              <CardContent className="p-8">
                <p className="text-lg text-slate-700 leading-relaxed mb-6">
                  I'm Rushikesh Phadtare, a dedicated full-stack developer and
                  software engineer with deep experience in MERN stack, Java
                  Spring Boot, and cloud technologies. I've built
                  production-ready tools like an AI-powered resume critique
                  system, automated Instagram reply engines, and secure
                  authentication platforms.
                </p>
                <p className="text-lg text-slate-700 leading-relaxed mb-6">
                  I'm a finalist in the Smart India Hackathon 2023, a full-stack
                  intern at Ttretta Pvt Ltd, and a research participant at IIT
                  Bombay. I'm passionate about blending engineering with
                  innovation to build intuitive, useful, and scalable software.
                </p>
                <p className="text-lg text-slate-700 leading-relaxed">
                  In addition to web development, I actively solve data
                  structures and algorithms problems—over 500+ solved on
                  LeetCode and GeeksforGeeks—and I believe in writing clean,
                  efficient code.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Skills & Technologies
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                category: "Languages",
                items: ["JavaScript", "Java", "Python", "C", "SQL"],
                gradient: "from-emerald-500 to-teal-600",
                bgGradient: "from-emerald-50 to-teal-50",
                textColor: "text-emerald-800",
                icon: "💻",
              },
              {
                category: "Web Technologies",
                items: ["HTML", "CSS", "React.js", "Node.js", "Express.js"],
                gradient: "from-blue-500 to-indigo-600",
                bgGradient: "from-blue-50 to-indigo-50",
                textColor: "text-blue-800",
                icon: "🌐",
              },
              {
                category: "Backend",
                items: ["Spring Boot", "Spring Security", "FastAPI"],
                gradient: "from-violet-500 to-purple-600",
                bgGradient: "from-violet-50 to-purple-50",
                textColor: "text-violet-800",
                icon: "⚙️",
              },
              {
                category: "Databases",
                items: ["MongoDB", "MySQL", "PostgreSQL"],
                gradient: "from-orange-500 to-red-500",
                bgGradient: "from-orange-50 to-red-50",
                textColor: "text-orange-800",
                icon: "🗄️",
              },
              {
                category: "Tools & Platforms",
                items: ["Git", "Maven", "VS Code", "Postman", "AWS"],
                gradient: "from-cyan-500 to-blue-500",
                bgGradient: "from-cyan-50 to-blue-50",
                textColor: "text-cyan-800",
                icon: "🛠️",
              },
              {
                category: "Problem Solving",
                items: [
                  "500+ LeetCode Problems",
                  "500+ GeeksforGeeks Problems",
                  "Data Structures",
                  "Algorithms",
                  "Competitive Programming",
                ],
                gradient: "from-amber-500 to-orange-500",
                bgGradient: "from-amber-50 to-orange-50",
                textColor: "text-amber-800",
                icon: "🧠",
              },
            ].map((skillGroup, index) => (
              <Card
                key={index}
                className={`border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br ${skillGroup.bgGradient} group overflow-hidden`}
              >
                <div
                  className={`h-1 bg-gradient-to-r ${skillGroup.gradient}`}
                ></div>
                <CardHeader>
                  <CardTitle
                    className={`text-xl font-bold flex items-center gap-3 ${skillGroup.textColor} mb-3`}
                  >
                    <div
                      className={`w-10 h-10 rounded-xl bg-gradient-to-r ${skillGroup.gradient} flex items-center justify-center text-white text-lg shadow-md group-hover:scale-110 transition-transform duration-300`}
                    >
                      {skillGroup.icon}
                    </div>
                    {skillGroup.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        className={`${skillGroup.textColor} bg-white/70 hover:bg-white hover:scale-105 transition-all duration-300 shadow-sm border border-white/50`}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-20 bg-gradient-to-br from-blue-50 via-cyan-50 to-green-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent mb-4">
              Projects
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white overflow-hidden group"
              >
                <div
                  className={`h-2 bg-gradient-to-r ${project.gradient}`}
                ></div>
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl text-slate-900 group-hover:text-purple-600 transition-colors duration-300">
                      {project.title}
                    </CardTitle>
                    {project.status && (
                      <Badge
                        className={`text-white border-0 ${
                          project.status === "Completed"
                            ? "bg-gradient-to-r from-green-500 to-emerald-500"
                            : project.status.includes("SIH")
                            ? "bg-gradient-to-r from-yellow-500 to-orange-500"
                            : "bg-gradient-to-r from-orange-500 to-red-500"
                        }`}
                      >
                        {project.status}
                      </Badge>
                    )}
                  </div>
                  {/* Project Links */}
                  {project.links && (
                    <div className="flex gap-2 mb-3">
                      {project.links.live && (
                        <Button
                          size="sm"
                          className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white text-xs px-3 py-1 h-7"
                          onClick={() =>
                            window.open(
                              project.links.live,
                              "_blank",
                              "noopener,noreferrer"
                            )
                          }
                        >
                          <Rocket className="w-3 h-3 mr-1" />
                          Live Demo
                        </Button>
                      )}
                      {project.links.github && (
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-slate-300 text-slate-700 hover:bg-slate-50 text-xs px-3 py-1 h-7"
                          onClick={() =>
                            window.open(
                              project.links.github,
                              "_blank",
                              "noopener,noreferrer"
                            )
                          }
                        >
                          <Github className="w-3 h-3 mr-1" />
                          Code
                        </Button>
                      )}
                      {project.links.demo &&
                        project.links.demo !== project.links.live && (
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-purple-300 text-purple-700 hover:bg-purple-50 text-xs px-3 py-1 h-7"
                            onClick={() =>
                              window.open(
                                project.links.demo,
                                "_blank",
                                "noopener,noreferrer"
                              )
                            }
                          >
                            <Zap className="w-3 h-3 mr-1" />
                            Try It
                          </Button>
                        )}
                    </div>
                  )}
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-600 mb-4 leading-relaxed">
                    {project.description}
                  </CardDescription>

                  {/* Features for featured projects */}
                  {project.features && (index === 0 || index === 1) && (
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-slate-800 mb-2">
                        Key Features:
                      </h4>
                      <div className="grid grid-cols-1 gap-1">
                        {project.features
                          .slice(0, 3)
                          .map((feature, featureIndex) => (
                            <div
                              key={featureIndex}
                              className="flex items-center text-xs text-slate-600"
                            >
                              <div
                                className={`w-1.5 h-1.5 rounded-full mr-2 flex-shrink-0 ${
                                  index === 0
                                    ? "bg-gradient-to-r from-purple-500 to-pink-500"
                                    : "bg-gradient-to-r from-emerald-500 to-teal-500"
                                }`}
                              ></div>
                              {feature}
                            </div>
                          ))}
                      </div>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        className="bg-gradient-to-r from-slate-100 to-slate-200 text-slate-700 hover:from-purple-100 hover:to-blue-100 hover:text-purple-700 transition-all duration-300 hover:scale-105"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className="py-20 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-4">
              Experience
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-green-600 to-blue-600 mx-auto"></div>
          </div>
          <div className="max-w-4xl mx-auto space-y-8">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 bg-white overflow-hidden"
              >
                <div className={`h-2 bg-gradient-to-r ${exp.color}`}></div>
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900 flex items-center gap-2 mb-2">
                        <div
                          className={`w-8 h-8 rounded-full bg-gradient-to-r ${exp.color} flex items-center justify-center`}
                        >
                          <Briefcase className="w-4 h-4 text-white" />
                        </div>
                        {exp.title}
                      </h3>
                      <p className="text-lg bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold">
                        {exp.company}
                      </p>
                    </div>
                    <Badge className="mt-2 md:mt-0 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 border-purple-200">
                      {exp.period}
                    </Badge>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    {exp.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section
        id="achievements"
        className="py-20 bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-yellow-600 to-red-600 bg-clip-text text-transparent mb-4">
              Achievements
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-yellow-600 to-red-600 mx-auto"></div>
          </div>
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-2xl bg-gradient-to-br from-white to-yellow-50/50">
              <CardContent className="p-8">
                <div className="space-y-6">
                  {achievements.map((achievement, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-4 rounded-lg bg-gradient-to-r from-white to-yellow-50/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                    >
                      <div
                        className={`w-10 h-10 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 flex items-center justify-center flex-shrink-0`}
                      >
                        <achievement.icon className={`w-5 h-5 text-white`} />
                      </div>
                      {index === 1 ? (
                        <p className="text-lg text-slate-700 font-medium">
                          Solved 500+ problems on{" "}
                          <a
                            href="https://leetcode.com/rushikeshphadtare2003"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:from-purple-600 hover:to-pink-600 underline font-semibold transition-all duration-300"
                          >
                            LeetCode
                          </a>{" "}
                          & GFG (DSA-focused)
                        </p>
                      ) : (
                        <p className="text-lg text-slate-700 font-medium">
                          {achievement.text}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Education
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto"></div>
          </div>
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-2xl bg-gradient-to-br from-white to-purple-50/50 overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-indigo-500 to-purple-600"></div>
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">
                      Bachelor of Engineering (Computer Engineering)
                    </h3>
                    <p className="text-lg bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent font-semibold mb-2">
                      MCT's Rajiv Gandhi Institute of Technology, Mumbai
                    </p>
                    <Badge className="bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 border-indigo-200">
                      2021 – Present
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900 text-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto mb-8"></div>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, interesting
              projects, or just having a chat about technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-500/30">
                <Mail className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-cyan-400">
                Email
              </h3>
              <a
                href="mailto:rushikeshphadtare2003@gmail.com"
                className="text-slate-300 hover:text-cyan-400 transition-colors duration-300"
              >
                rushikeshphadtare2003@gmail.com
              </a>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-green-500/30">
                <Phone className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-green-400">
                Phone
              </h3>
              <a
                href="tel:+919765724953"
                className="text-slate-300 hover:text-green-400 transition-colors duration-300"
              >
                +91 9765724953
              </a>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-purple-500/30">
                <MapPin className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-purple-400">
                Location
              </h3>
              <p className="text-slate-300">Mumbai, Maharashtra, India</p>
            </div>
          </div>

          <Separator className="bg-gradient-to-r from-transparent via-slate-600 to-transparent mb-12" />

          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-6 sm:mb-0">
              <a
                href="https://github.com/Rushi0207"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-purple-400 transition-all duration-300 hover:scale-125"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/rushikesh-phadtare-76b314248"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-blue-400 transition-all duration-300 hover:scale-125"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:rushikeshphadtare2003@gmail.com"
                className="text-slate-300 hover:text-cyan-400 transition-all duration-300 hover:scale-125"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
            <p className="text-slate-400 text-sm">
              © 2025 Rushikesh Phadtare. All rights reserved.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
