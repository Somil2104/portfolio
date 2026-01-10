import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Github, ExternalLink } from 'lucide-react';
import { Project } from '@/data/portfolio';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface ProjectCarouselProps {
  projects: Project[];
}

export function ProjectCarousel({ projects }: ProjectCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };
  
  const goToNext = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };
  
  const currentProject = projects[currentIndex];
  
  return (
    <div className="relative">
      {/* Navigation Buttons */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10">
        <Button
          variant="outline"
          size="icon"
          onClick={goToPrevious}
          className="rounded-full bg-background/80 backdrop-blur-sm hover:bg-primary/10 border-border"
        >
          <ChevronLeft className="size-5" />
        </Button>
      </div>
      
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10">
        <Button
          variant="outline"
          size="icon"
          onClick={goToNext}
          className="rounded-full bg-background/80 backdrop-blur-sm hover:bg-primary/10 border-border"
        >
          <ChevronRight className="size-5" />
        </Button>
      </div>
      
      {/* Project Card */}
      <div className="overflow-hidden px-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentProject.id}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <Card className="overflow-hidden bg-card border-border hover:border-primary/20 transition-all">
              <div className="grid md:grid-cols-2 gap-0">
                {/* Image */}
                <div className="aspect-video md:aspect-auto overflow-hidden relative">
                  <img
                    src={currentProject.image}
                    alt={currentProject.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background/20" />
                </div>
                
                {/* Content */}
                <div className="p-6 md:p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="outline" className="text-xs capitalize text-primary border-primary/30">
                      {currentProject.category}
                    </Badge>
                  </div>
                  
                  <CardHeader className="p-0 mb-4">
                    <CardTitle className="text-2xl mb-2">{currentProject.title}</CardTitle>
                    <CardDescription className="text-base">
                      {currentProject.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="p-0">
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {currentProject.technologies.map((tech) => (
                        <Badge 
                          key={tech} 
                          variant="secondary" 
                          className="text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    
                    {/* Links */}
                    <div className="flex items-center gap-3">
                      {currentProject.github && (
                        <a
                          href={currentProject.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                        >
                          <Github className="size-4" /> View Code
                        </a>
                      )}
                      {currentProject.liveUrl && (
                        <a
                          href={currentProject.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline"
                        >
                          <ExternalLink className="size-4" /> Live Demo
                        </a>
                      )}
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          </motion.div>
        </AnimatePresence>
      </div>
      
      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-6">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex 
                ? 'bg-primary w-6' 
                : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
            }`}
            aria-label={`Go to project ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
