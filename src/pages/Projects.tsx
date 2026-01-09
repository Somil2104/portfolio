import { motion } from 'framer-motion';
import { projects } from '@/data/portfolio';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { SEOHead } from '@/components/seo/SEOHead';
import { Github, ExternalLink, Folder, Code2, Cloud, Brain, Box } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const categoryIcons = {
  devops: Cloud,
  aiml: Brain,
  fullstack: Code2,
  other: Box,
};

const categoryLabels = {
  devops: 'DevOps',
  aiml: 'AI/ML',
  fullstack: 'Full Stack',
  other: 'Other',
};

/**
 * Projects page displaying all portfolio projects
 */
export default function Projects() {
  const categories = ['all', 'devops', 'aiml', 'fullstack', 'other'] as const;

  const getProjectsByCategory = (category: string) => {
    if (category === 'all') return projects;
    return projects.filter((p) => p.category === category);
  };

  return (
    <>
      <SEOHead
        title="Projects | Somil Jain"
        description="Portfolio of DevOps and AI/ML projects including MLOps platforms, cloud optimization tools, and intelligent systems."
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
                <Folder className="size-4 mr-2" />
                My Work
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                Projects
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A collection of projects showcasing my expertise in DevOps, cloud infrastructure, and AI/ML engineering.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Projects List */}
        <section className="px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <Tabs defaultValue="all" className="w-full">
              <ScrollReveal>
                <TabsList className="grid w-full grid-cols-5 mb-8">
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="devops">DevOps</TabsTrigger>
                  <TabsTrigger value="aiml">AI/ML</TabsTrigger>
                  <TabsTrigger value="fullstack">Full Stack</TabsTrigger>
                  <TabsTrigger value="other">Other</TabsTrigger>
                </TabsList>
              </ScrollReveal>

              {categories.map((category) => (
                <TabsContent key={category} value={category}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {getProjectsByCategory(category).map((project, index) => {
                      const Icon = categoryIcons[project.category];
                      return (
                        <ScrollReveal key={project.id} delay={0.1 * index}>
                          <Card className="h-full overflow-hidden group hover:shadow-xl transition-all duration-300">
                            <div className="aspect-video overflow-hidden relative">
                              <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                              {project.featured && (
                                <Badge className="absolute top-4 right-4 bg-primary">
                                  Featured
                                </Badge>
                              )}
                            </div>
                            <CardHeader>
                              <div className="flex items-center gap-2 mb-2">
                                <div className="p-2 rounded-md bg-primary/10 text-primary">
                                  <Icon className="size-4" />
                                </div>
                                <Badge variant="outline" className="text-xs capitalize">
                                  {categoryLabels[project.category]}
                                </Badge>
                              </div>
                              <CardTitle className="text-xl group-hover:text-primary transition-colors">
                                {project.title}
                              </CardTitle>
                              <CardDescription className="text-base">
                                {project.description}
                              </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                              <p className="text-sm text-muted-foreground line-clamp-3">
                                {project.longDescription}
                              </p>

                              <div>
                                <h4 className="text-sm font-medium mb-2">Key Features:</h4>
                                <ul className="text-sm text-muted-foreground space-y-1">
                                  {project.features.slice(0, 3).map((feature, i) => (
                                    <li key={i} className="flex items-start gap-2">
                                      <span className="text-primary mt-1">•</span>
                                      {feature}
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              <div className="flex flex-wrap gap-2 pt-2">
                                {project.technologies.map((tech) => (
                                  <Badge key={tech} variant="secondary" className="text-xs">
                                    {tech}
                                  </Badge>
                                ))}
                              </div>

                              <div className="flex items-center gap-4 pt-4 border-t border-border">
                                {project.github && (
                                  <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                                  >
                                    <Github className="size-5" />
                                    View Code
                                  </a>
                                )}
                                {project.liveUrl && (
                                  <a
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                                  >
                                    <ExternalLink className="size-5" />
                                    Live Demo
                                  </a>
                                )}
                              </div>
                            </CardContent>
                          </Card>
                        </ScrollReveal>
                      );
                    })}
                  </div>

                  {getProjectsByCategory(category).length === 0 && (
                    <div className="text-center py-12">
                      <p className="text-muted-foreground">
                        No projects in this category yet.
                      </p>
                    </div>
                  )}
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>
      </div>
    </>
  );
}
