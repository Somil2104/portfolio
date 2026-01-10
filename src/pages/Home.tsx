import { motion } from 'framer-motion';
import { personalInfo, getFeaturedProjects, experiences, certifications } from '@/data/portfolio';
import { ScrollIndicator } from '@/components/ui/ScrollIndicator';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { SEOHead } from '@/components/seo/SEOHead';
import { ArrowRight, Github, Linkedin, Mail, GraduationCap, Briefcase, Award, ExternalLink, Terminal, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { SkillsShowcase } from '@/components/skills/SkillsShowcase';
import { AchievementsSection } from '@/components/sections/AchievementsSection';
import { CyberBackground, NeonLine, GlowOrb } from '@/components/ui/CyberBackground';

/**
 * Homepage for Somil Jain's Portfolio
 * DevOps & AI/ML Engineer - Futuristic Theme
 */
export default function Home() {
  const featuredProjects = getFeaturedProjects();
  const recentExperiences = experiences.slice(0, 2);
  const featuredCerts = certifications.slice(0, 4);

  return (
    <>
      <SEOHead 
        title="Somil Jain | DevOps & AI/ML Engineer"
        description="Final year BTech CSE student at VIT. Specializing in DevOps, Cloud Infrastructure, and Machine Learning."
      />
      
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative min-h-screen w-full overflow-hidden">
          <CyberBackground />
          
          {/* Animated gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background" />

          {/* Hero Content */}
          <div className="relative h-screen flex flex-col items-center justify-center px-6">
            <motion.div
              className="text-center space-y-8 max-w-4xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              {/* Terminal-style badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full"
                style={{
                  background: 'linear-gradient(135deg, hsl(180 100% 50% / 0.1) 0%, hsl(270 100% 65% / 0.1) 100%)',
                  border: '1px solid hsl(180 100% 50% / 0.3)',
                  boxShadow: '0 0 20px hsl(180 100% 50% / 0.1)',
                }}
              >
                <Terminal className="size-4 text-neon-cyan" />
                <span className="text-sm font-mono text-neon-cyan">BTech CSE • Class of {personalInfo.graduationYear}</span>
                <GlowOrb color="cyan" size="sm" />
              </motion.div>

              {/* Name with gradient */}
              <motion.h1
                className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                <span className="gradient-text">{personalInfo.name}</span>
              </motion.h1>
              
              {/* Neon line */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="max-w-md mx-auto"
              >
                <NeonLine />
              </motion.div>
              
              {/* Title with glow */}
              <motion.p
                className="text-xl md:text-2xl font-medium tracking-wide text-neon-cyan text-glow-cyan"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                {personalInfo.title}
              </motion.p>

              {/* Tagline */}
              <motion.p
                className="text-lg md:text-xl font-light leading-relaxed text-muted-foreground max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
              >
                {personalInfo.heroIntroduction}
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-wrap items-center justify-center gap-4 pt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
              >
                <Button 
                  asChild 
                  size="lg"
                  className="relative overflow-hidden group"
                  style={{
                    background: 'linear-gradient(135deg, hsl(180 100% 50%) 0%, hsl(200 100% 50%) 100%)',
                    boxShadow: '0 0 20px hsl(180 100% 50% / 0.4)',
                  }}
                >
                  <Link to="/projects">
                    <span className="relative z-10 flex items-center text-background font-semibold">
                      View Projects <ArrowRight className="ml-2 size-4" />
                    </span>
                  </Link>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  asChild
                  className="border-neon-magenta/50 text-neon-magenta hover:bg-neon-magenta/10 hover:border-neon-magenta"
                  style={{
                    boxShadow: '0 0 15px hsl(300 100% 60% / 0.2)',
                  }}
                >
                  <Link to="/contact">
                    <Mail className="mr-2 size-4" /> Get in Touch
                  </Link>
                </Button>
              </motion.div>

              {/* Social Links */}
              <motion.div
                className="flex items-center justify-center gap-4 pt-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
              >
                {personalInfo.socialLinks.linkedin && (
                  <a
                    href={personalInfo.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg transition-all duration-300 hover:scale-110"
                    style={{
                      background: 'hsl(222 30% 12% / 0.8)',
                      border: '1px solid hsl(180 100% 50% / 0.2)',
                    }}
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="size-5 text-neon-cyan" />
                  </a>
                )}
                {personalInfo.socialLinks.github && (
                  <a
                    href={personalInfo.socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg transition-all duration-300 hover:scale-110"
                    style={{
                      background: 'hsl(222 30% 12% / 0.8)',
                      border: '1px solid hsl(300 100% 60% / 0.2)',
                    }}
                    aria-label="GitHub"
                  >
                    <Github className="size-5 text-neon-magenta" />
                  </a>
                )}
              </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
              className="absolute bottom-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              <ScrollIndicator />
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
        <SkillsShowcase />

        {/* Featured Projects Section */}
        <section className="relative py-24 md:py-32 px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 cyber-grid opacity-20" />
          
          <div className="relative max-w-6xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full mb-6"
                  style={{
                    background: 'linear-gradient(135deg, hsl(270 100% 65% / 0.1) 0%, hsl(300 100% 60% / 0.1) 100%)',
                    border: '1px solid hsl(270 100% 65% / 0.3)',
                  }}
                >
                  <Cpu className="size-4 text-neon-purple" />
                  <span className="text-sm font-mono text-neon-purple">PROJECT.SHOWCASE</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                  <span className="gradient-text">Featured Projects</span>
                </h2>
                <NeonLine className="max-w-xs mx-auto my-4" />
                <p className="text-lg text-muted-foreground">
                  A selection of my recent work in DevOps and AI/ML
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProjects.map((project, index) => (
                <ScrollReveal key={project.id} delay={0.1 * index}>
                  <motion.div
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card className="h-full overflow-hidden group"
                      style={{
                        background: 'linear-gradient(135deg, hsl(222 30% 10% / 0.9) 0%, hsl(222 30% 6% / 0.95) 100%)',
                        border: '1px solid hsl(180 100% 50% / 0.2)',
                      }}
                    >
                      <div className="aspect-video overflow-hidden relative">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />
                      </div>
                      <CardHeader>
                        <div className="flex items-center gap-2 mb-2">
                          <Badge 
                            variant="outline" 
                            className="text-xs capitalize border-neon-cyan/50 text-neon-cyan"
                          >
                            {project.category}
                          </Badge>
                        </div>
                        <CardTitle className="text-xl text-foreground">{project.title}</CardTitle>
                        <CardDescription>{project.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.technologies.slice(0, 4).map((tech) => (
                            <Badge 
                              key={tech} 
                              variant="secondary" 
                              className="text-xs"
                              style={{
                                background: 'hsl(222 30% 15% / 0.8)',
                                border: '1px solid hsl(270 100% 65% / 0.2)',
                              }}
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex items-center gap-3">
                          {project.github && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm text-neon-cyan hover:text-neon-cyan/80 transition-colors flex items-center gap-1"
                            >
                              <Github className="size-4" /> Code
                            </a>
                          )}
                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm text-neon-magenta hover:text-neon-magenta/80 transition-colors flex items-center gap-1"
                            >
                              <ExternalLink className="size-4" /> Live
                            </a>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal delay={0.4}>
              <div className="flex justify-center mt-12">
                <Button 
                  variant="outline" 
                  asChild
                  className="border-neon-cyan/50 text-neon-cyan hover:bg-neon-cyan/10"
                >
                  <Link to="/projects">
                    View All Projects <ArrowRight className="ml-2 size-4" />
                  </Link>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Experience Section */}
        <section className="relative py-24 md:py-32 px-6 lg:px-8 overflow-hidden">
          <div 
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(180deg, hsl(222 30% 8% / 0.5) 0%, hsl(222 30% 5% / 0.8) 100%)',
            }}
          />
          <div className="absolute inset-0 cyber-grid opacity-10" />
          
          <div className="relative max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full mb-6"
                  style={{
                    background: 'linear-gradient(135deg, hsl(300 100% 60% / 0.1) 0%, hsl(270 100% 65% / 0.1) 100%)',
                    border: '1px solid hsl(300 100% 60% / 0.3)',
                  }}
                >
                  <Briefcase className="size-4 text-neon-magenta" />
                  <span className="text-sm font-mono text-neon-magenta">WORK.EXPERIENCE</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                  <span className="gradient-text">Experience</span>
                </h2>
                <NeonLine className="max-w-xs mx-auto my-4" />
                <p className="text-lg text-muted-foreground">
                  Internships and professional experience
                </p>
              </div>
            </ScrollReveal>

            <div className="space-y-6">
              {recentExperiences.map((exp, index) => (
                <ScrollReveal key={exp.id} delay={0.1 * index}>
                  <motion.div
                    whileHover={{ x: 8 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card 
                      className="transition-all duration-300"
                      style={{
                        background: 'linear-gradient(135deg, hsl(222 30% 10% / 0.9) 0%, hsl(222 30% 6% / 0.95) 100%)',
                        border: '1px solid hsl(300 100% 60% / 0.2)',
                      }}
                    >
                      <CardHeader>
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                          <div>
                            <CardTitle className="text-xl text-foreground">{exp.role}</CardTitle>
                            <CardDescription className="text-base text-neon-cyan">
                              {exp.company} • {exp.location}
                            </CardDescription>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge 
                              variant="outline" 
                              className="capitalize border-neon-purple/50 text-neon-purple"
                            >
                              {exp.type}
                            </Badge>
                            <span className="text-sm text-muted-foreground">
                              {exp.duration}
                            </span>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground mb-4">{exp.description}</p>
                        <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground mb-4">
                          {exp.achievements.slice(0, 3).map((achievement, i) => (
                            <li key={i}>{achievement}</li>
                          ))}
                        </ul>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <Badge 
                              key={tech} 
                              variant="secondary" 
                              className="text-xs"
                              style={{
                                background: 'hsl(222 30% 15% / 0.8)',
                                border: '1px solid hsl(180 100% 50% / 0.2)',
                              }}
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal delay={0.3}>
              <div className="flex justify-center mt-12">
                <Button 
                  variant="outline" 
                  asChild
                  className="border-neon-magenta/50 text-neon-magenta hover:bg-neon-magenta/10"
                >
                  <Link to="/experience">
                    View Full Experience <ArrowRight className="ml-2 size-4" />
                  </Link>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Certifications Preview */}
        <section className="relative py-24 md:py-32 px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 cyber-grid opacity-20" />
          
          <div className="relative max-w-6xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full mb-6"
                  style={{
                    background: 'linear-gradient(135deg, hsl(180 100% 50% / 0.1) 0%, hsl(150 100% 50% / 0.1) 100%)',
                    border: '1px solid hsl(150 100% 50% / 0.3)',
                  }}
                >
                  <Award className="size-4 text-neon-green" />
                  <span className="text-sm font-mono text-neon-green">CREDENTIALS.VERIFIED</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                  <span className="gradient-text">Certifications</span>
                </h2>
                <NeonLine className="max-w-xs mx-auto my-4" />
                <p className="text-lg text-muted-foreground">
                  Professional certifications and credentials
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredCerts.map((cert, index) => (
                <ScrollReveal key={cert.id} delay={0.1 * index}>
                  <motion.div
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card 
                      className="h-full"
                      style={{
                        background: 'linear-gradient(135deg, hsl(222 30% 10% / 0.9) 0%, hsl(222 30% 6% / 0.95) 100%)',
                        border: '1px solid hsl(150 100% 50% / 0.2)',
                      }}
                    >
                      <CardHeader className="pb-3">
                        <Award className="size-8 text-neon-cyan mb-2" style={{ filter: 'drop-shadow(0 0 10px hsl(180 100% 50% / 0.5))' }} />
                        <CardTitle className="text-base leading-tight text-foreground">{cert.title}</CardTitle>
                        <CardDescription className="text-neon-purple">{cert.issuer}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">{cert.issueDate}</p>
                        {cert.credentialUrl && (
                          <a
                            href={cert.credentialUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-neon-cyan hover:underline mt-2 inline-flex items-center gap-1"
                          >
                            Verify <ExternalLink className="size-3" />
                          </a>
                        )}
                      </CardContent>
                    </Card>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal delay={0.5}>
              <div className="flex justify-center mt-12">
                <Button 
                  variant="outline" 
                  asChild
                  className="border-neon-cyan/50 text-neon-cyan hover:bg-neon-cyan/10"
                >
                  <Link to="/certifications">
                    View All Certifications <ArrowRight className="ml-2 size-4" />
                  </Link>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Achievements Section */}
        <AchievementsSection />

        {/* CTA Section */}
        <section className="relative py-24 md:py-32 px-6 lg:px-8 overflow-hidden">
          <CyberBackground />
          <div 
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(135deg, hsl(180 100% 50% / 0.05) 0%, hsl(300 100% 60% / 0.05) 100%)',
            }}
          />
          
          <div className="relative max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
                <span className="gradient-text">Let's Build Something Amazing</span>
              </h2>
              <NeonLine className="max-w-md mx-auto my-6" />
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                I'm always open to discussing new opportunities, interesting projects, or just having a chat about tech.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Button 
                  size="lg" 
                  asChild
                  style={{
                    background: 'linear-gradient(135deg, hsl(180 100% 50%) 0%, hsl(200 100% 50%) 100%)',
                    boxShadow: '0 0 30px hsl(180 100% 50% / 0.4)',
                  }}
                >
                  <Link to="/contact" className="text-background font-semibold">
                    <Mail className="mr-2 size-4" /> Get in Touch
                  </Link>
                </Button>
                {personalInfo.socialLinks.linkedin && (
                  <Button 
                    variant="outline" 
                    size="lg" 
                    asChild
                    className="border-neon-magenta/50 text-neon-magenta hover:bg-neon-magenta/10"
                  >
                    <a href={personalInfo.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                      <Linkedin className="mr-2 size-4" /> Connect on LinkedIn
                    </a>
                  </Button>
                )}
              </div>
            </ScrollReveal>
          </div>
        </section>
      </div>
    </>
  );
}
