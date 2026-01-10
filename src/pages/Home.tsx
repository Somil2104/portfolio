import { motion } from 'framer-motion';
import { personalInfo, getFeaturedProjects, experiences, certifications } from '@/data/portfolio';
import { ScrollIndicator } from '@/components/ui/ScrollIndicator';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { SEOHead } from '@/components/seo/SEOHead';
import { ArrowRight, Github, Linkedin, Mail, GraduationCap, Briefcase, Award, Code2, Cloud, Brain, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

/**
 * Homepage for Somil Jain's Portfolio
 * DevOps & AI/ML Engineer
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
      
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/10">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />
          </div>

          {/* Hero Content */}
          <div className="relative h-screen flex flex-col items-center justify-center px-6">
            <motion.div
              className="text-center space-y-8 max-w-4xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              {/* Name Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <Badge variant="outline" className="px-4 py-2 text-sm font-medium">
                  <GraduationCap className="size-4 mr-2" />
                  {personalInfo.university} • {personalInfo.graduationYear}
                </Badge>
              </motion.div>

              {/* Name */}
              <motion.h1
                className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                {personalInfo.name}
              </motion.h1>
              
              {/* Title */}
              <motion.p
                className="text-xl md:text-2xl font-medium tracking-wide text-primary"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
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

              {/* University Badge */}
              <motion.div
                className="flex items-center justify-center gap-2 text-muted-foreground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.7 }}
              >
                <GraduationCap className="size-4" />
                <span className="text-sm">{personalInfo.university}</span>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-wrap items-center justify-center gap-4 pt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
              >
                <Button asChild size="lg">
                  <Link to="/projects">
                    View Projects <ArrowRight className="ml-2 size-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
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
                    className="p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="size-5" />
                  </a>
                )}
                {personalInfo.socialLinks.github && (
                  <a
                    href={personalInfo.socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
                    aria-label="GitHub"
                  >
                    <Github className="size-5" />
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
        <section className="py-24 md:py-32 px-6 lg:px-8 bg-background border-t border-border">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                  Technical Expertise
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Bridging the gap between development and operations with AI-powered solutions
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <ScrollReveal delay={0.1}>
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <Cloud className="size-8 text-primary mb-2" />
                    <CardTitle className="text-lg">DevOps & Cloud</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {personalInfo.skills.devops.slice(0, 8).map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <Brain className="size-8 text-primary mb-2" />
                    <CardTitle className="text-lg">Libraries & Databases</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {personalInfo.skills.librariesDatabases.slice(0, 8).map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <Code2 className="size-8 text-primary mb-2" />
                    <CardTitle className="text-lg">Languages</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {personalInfo.skills.languages.map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>

              <ScrollReveal delay={0.4}>
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <Briefcase className="size-8 text-primary mb-2" />
                    <CardTitle className="text-lg">OS/Software/Tools</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {personalInfo.skills.osSoftwareTools.map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section className="py-24 md:py-32 px-6 lg:px-8 border-t border-border">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                  Featured Projects
                </h2>
                <p className="text-lg text-muted-foreground">
                  A selection of my recent work in DevOps and AI/ML
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProjects.map((project, index) => (
                <ScrollReveal key={project.id} delay={0.1 * index}>
                  <Card className="h-full overflow-hidden group hover:shadow-xl transition-all duration-300">
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <CardHeader>
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline" className="text-xs capitalize">
                          {project.category}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl">{project.title}</CardTitle>
                      <CardDescription>{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.slice(0, 4).map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs">
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
                            className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
                          >
                            <Github className="size-4" /> Code
                          </a>
                        )}
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
                          >
                            <ExternalLink className="size-4" /> Live
                          </a>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal delay={0.4}>
              <div className="flex justify-center mt-12">
                <Button variant="outline" asChild>
                  <Link to="/projects">
                    View All Projects <ArrowRight className="ml-2 size-4" />
                  </Link>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Experience Section */}
        <section className="py-24 md:py-32 px-6 lg:px-8 bg-secondary/30 border-t border-border">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                  Experience
                </h2>
                <p className="text-lg text-muted-foreground">
                  Internships and professional experience
                </p>
              </div>
            </ScrollReveal>

            <div className="space-y-6">
              {recentExperiences.map((exp, index) => (
                <ScrollReveal key={exp.id} delay={0.1 * index}>
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                        <div>
                          <CardTitle className="text-xl">{exp.role}</CardTitle>
                          <CardDescription className="text-base">
                            {exp.company} • {exp.location}
                          </CardDescription>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="capitalize">
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
              <div className="flex justify-center mt-12">
                <Button variant="outline" asChild>
                  <Link to="/experience">
                    View Full Experience <ArrowRight className="ml-2 size-4" />
                  </Link>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Certifications Preview */}
        <section className="py-24 md:py-32 px-6 lg:px-8 border-t border-border">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                  Certifications
                </h2>
                <p className="text-lg text-muted-foreground">
                  Professional certifications and credentials
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredCerts.map((cert, index) => (
                <ScrollReveal key={cert.id} delay={0.1 * index}>
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardHeader className="pb-3">
                      <Award className="size-8 text-primary mb-2" />
                      <CardTitle className="text-base leading-tight">{cert.title}</CardTitle>
                      <CardDescription>{cert.issuer}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{cert.issueDate}</p>
                      {cert.credentialUrl && (
                        <a
                          href={cert.credentialUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-primary hover:underline mt-2 inline-flex items-center gap-1"
                        >
                          Verify <ExternalLink className="size-3" />
                        </a>
                      )}
                    </CardContent>
                  </Card>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal delay={0.5}>
              <div className="flex justify-center mt-12">
                <Button variant="outline" asChild>
                  <Link to="/certifications">
                    View All Certifications <ArrowRight className="ml-2 size-4" />
                  </Link>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 md:py-32 px-6 lg:px-8 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                Let's Build Something Amazing
              </h2>
              <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
                I'm always open to discussing new opportunities, interesting projects, or just having a chat about tech.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Button variant="secondary" size="lg" asChild>
                  <Link to="/contact">
                    <Mail className="mr-2 size-4" /> Get in Touch
                  </Link>
                </Button>
                {personalInfo.socialLinks.linkedin && (
                  <Button variant="outline" size="lg" className="bg-transparent border-primary-foreground/30 hover:bg-primary-foreground/10" asChild>
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
