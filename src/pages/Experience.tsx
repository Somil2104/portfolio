import { motion } from 'framer-motion';
import { experiences, personalInfo } from '@/data/portfolio';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { SEOHead } from '@/components/seo/SEOHead';
import { Briefcase, MapPin, Calendar, ExternalLink, GraduationCap, Building2 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

/**
 * Experience page displaying internships and work experience
 */
export default function Experience() {
  return (
    <>
      <SEOHead
        title="Experience | Somil Jain"
        description="Professional experience including internships in DevOps, Cloud Engineering, and Machine Learning."
      />

      <div className="min-h-screen py-24 md:py-32">
        {/* Header */}
        <section className="px-6 lg:px-8 mb-16">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge variant="outline" className="mb-4">
                <Briefcase className="size-4 mr-2" />
                Career Journey
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                Experience
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                My professional journey through internships and hands-on experience in DevOps, Cloud, and AI/ML.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Education Section */}
        <section className="px-6 lg:px-8 mb-16">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <Card className="bg-primary/5 border-primary/20">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary">
                      <GraduationCap className="size-8" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">Education</CardTitle>
                      <CardDescription className="text-base">
                        {personalInfo.university}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Degree</p>
                      <p className="font-medium">{personalInfo.degree}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Expected Graduation</p>
                      <p className="font-medium">{personalInfo.graduationYear}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p className="font-medium">{personalInfo.location}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </section>

        {/* Experience Timeline */}
        <section className="px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
                <Building2 className="size-6" />
                Work Experience
              </h2>
            </ScrollReveal>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-px bg-border hidden md:block" />

              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <ScrollReveal key={exp.id} delay={0.1 * index}>
                    <div className="relative flex gap-6">
                      {/* Timeline Dot */}
                      <div className="hidden md:flex flex-shrink-0 w-16 items-start justify-center pt-6">
                        <div className="w-4 h-4 rounded-full bg-primary border-4 border-background shadow-sm z-10" />
                      </div>

                      {/* Card */}
                      <Card className="flex-1 hover:shadow-lg transition-shadow">
                        <CardHeader>
                          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                            <div className="space-y-1">
                              <CardTitle className="text-xl">{exp.role}</CardTitle>
                              <CardDescription className="text-base font-medium">
                                {exp.company}
                              </CardDescription>
                            </div>
                            <Badge
                              variant="outline"
                              className="self-start capitalize whitespace-nowrap"
                            >
                              {exp.type}
                            </Badge>
                          </div>

                          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground pt-2">
                            <span className="flex items-center gap-1">
                              <Calendar className="size-4" />
                              {exp.duration}
                            </span>
                            <span className="flex items-center gap-1">
                              <MapPin className="size-4" />
                              {exp.location}
                            </span>
                          </div>
                        </CardHeader>

                        <CardContent className="space-y-4">
                          <p className="text-muted-foreground">{exp.description}</p>

                          <div>
                            <h4 className="font-medium mb-2">Key Achievements:</h4>
                            <ul className="space-y-2">
                              {exp.achievements.map((achievement, i) => (
                                <li
                                  key={i}
                                  className="flex items-start gap-2 text-sm text-muted-foreground"
                                >
                                  <span className="text-primary mt-0.5">✓</span>
                                  {achievement}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h4 className="font-medium mb-2">Technologies Used:</h4>
                            <div className="flex flex-wrap gap-2">
                              {exp.technologies.map((tech) => (
                                <Badge key={tech} variant="secondary" className="text-xs">
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
