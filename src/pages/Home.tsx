import { motion } from 'framer-motion';
import { personalInfo, getFeaturedProjects, experiences, certifications } from '@/data/portfolio';
import { ScrollIndicator } from '@/components/ui/ScrollIndicator';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { SEOHead } from '@/components/seo/SEOHead';
import { ArrowRight, Github, Linkedin, Mail, GraduationCap, Briefcase, Award, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { SkillsShowcase } from '@/components/skills/SkillsShowcase';
import { AchievementsSection } from '@/components/sections/AchievementsSection';
import { ProjectCarousel } from '@/components/projects/ProjectCarousel';

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
          <div className="absolute inset-0 subtle-grid opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />

          <div className="relative h-screen flex flex-col items-center justify-center px-6">
            <motion.div
              className="text-center space-y-6 max-w-3xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20"
              >
                <GraduationCap className="size-4 text-primary" />
                <span className="text-sm font-medium text-primary">BTech CSE • Class of {personalInfo.graduationYear}</span>
              </motion.div>

              <motion.h1
                className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="gradient-text">{personalInfo.name}</span>
              </motion.h1>
              
              <motion.p
                className="text-xl md:text-2xl font-medium text-primary"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                {personalInfo.title}
              </motion.p>

              <motion.p
                className="text-lg text-muted-foreground max-w-xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {personalInfo.heroIntroduction}
              </motion.p>

              <motion.div
                className="flex flex-wrap items-center justify-center gap-4 pt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link to="/projects">
                    View Projects <ArrowRight className="ml-2 size-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href={`mailto:${personalInfo.email}`}>
                    <Mail className="mr-2 size-4" /> Get in Touch
                  </a>
                </Button>
              </motion.div>

              <motion.div
                className="flex items-center justify-center gap-3 pt-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                {personalInfo.socialLinks.linkedin && (
                  <a
                    href={personalInfo.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-secondary hover:bg-primary/10 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="size-5 text-muted-foreground hover:text-primary" />
                  </a>
                )}
                {personalInfo.socialLinks.github && (
                  <a
                    href={personalInfo.socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-secondary hover:bg-primary/10 transition-colors"
                    aria-label="GitHub"
                  >
                    <Github className="size-5 text-muted-foreground hover:text-primary" />
                  </a>
                )}
              </motion.div>
            </motion.div>

            <motion.div
              className="absolute bottom-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <ScrollIndicator />
            </motion.div>
          </div>
        </section>

        <SkillsShowcase />

        {/* Featured Projects - Carousel */}
        <section className="relative py-20 md:py-28 px-6 lg:px-8">
          <div className="relative max-w-5xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-14">
                <span className="inline-block px-4 py-1.5 mb-4 text-xs font-medium tracking-wider uppercase text-primary bg-primary/10 rounded-full">
                  Projects
                </span>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                  <span className="gradient-text">Featured Work</span>
                </h2>
                <p className="text-muted-foreground">A selection of my recent projects</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <ProjectCarousel projects={featuredProjects} />
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="flex justify-center mt-10">
                <Button variant="outline" asChild>
                  <Link to="/projects">
                    View All Projects <ArrowRight className="ml-2 size-4" />
                  </Link>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Experience Section with Company Logos */}
        <section className="relative py-20 md:py-28 px-6 lg:px-8 bg-card/30">
          <div className="relative max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-14">
                <span className="inline-block px-4 py-1.5 mb-4 text-xs font-medium tracking-wider uppercase text-accent bg-accent/10 rounded-full">
                  Experience
                </span>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                  <span className="gradient-text">Work Experience</span>
                </h2>
              </div>
            </ScrollReveal>

            <div className="space-y-6">
              {recentExperiences.map((exp, index) => (
                <ScrollReveal key={exp.id} delay={0.1 * index}>
                  <Card className="bg-card border-border hover:border-primary/20 transition-all">
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        {/* Company Logo */}
                        <div className="shrink-0 w-14 h-14 rounded-lg bg-white p-2 flex items-center justify-center border border-border">
                          <img 
                            src={exp.companyLogo} 
                            alt={exp.company}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                            <div>
                              <CardTitle className="text-xl">{exp.role}</CardTitle>
                              <CardDescription className="text-base text-primary">
                                {exp.company} • {exp.location}
                              </CardDescription>
                            </div>
                            <div className="flex items-center gap-2">
                              <Badge variant="outline" className="capitalize">
                                {exp.type}
                              </Badge>
                              <span className="text-sm text-muted-foreground">{exp.duration}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground mb-4">
                        {exp.achievements.slice(0, 2).map((achievement, i) => (
                          <li key={i}>{achievement}</li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.slice(0, 6).map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal delay={0.3}>
              <div className="flex justify-center mt-10">
                <Button variant="outline" asChild>
                  <Link to="/experience">
                    View Full Experience <ArrowRight className="ml-2 size-4" />
                  </Link>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <AchievementsSection />

        {/* CTA Section */}
        <section className="relative py-20 md:py-28 px-6 lg:px-8">
          <div className="relative max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                <span className="gradient-text">Let's Build Something Amazing</span>
              </h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                I'm always open to discussing new opportunities and interesting projects.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Button size="lg" asChild>
                  <a href={`mailto:${personalInfo.email}`}>
                    <Mail className="mr-2 size-4" /> Get in Touch
                  </a>
                </Button>
                {personalInfo.socialLinks.linkedin && (
                  <Button variant="outline" size="lg" asChild>
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
