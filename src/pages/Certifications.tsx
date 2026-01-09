import { motion } from 'framer-motion';
import { certifications } from '@/data/portfolio';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { SEOHead } from '@/components/seo/SEOHead';
import { Award, ExternalLink, Calendar, BadgeCheck, Cloud, Code2, Brain, Wrench } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const categoryIcons = {
  cloud: Cloud,
  devops: Wrench,
  aiml: Brain,
  programming: Code2,
  other: Award,
};

const categoryLabels = {
  cloud: 'Cloud',
  devops: 'DevOps',
  aiml: 'AI/ML',
  programming: 'Programming',
  other: 'Other',
};

/**
 * Certifications page displaying all professional credentials
 */
export default function Certifications() {
  const categories = ['all', 'cloud', 'devops', 'aiml', 'programming', 'other'] as const;
  
  const getCertsByCategory = (category: string) => {
    if (category === 'all') return certifications;
    return certifications.filter(cert => cert.category === category);
  };

  return (
    <>
      <SEOHead 
        title="Certifications | Somil Jain"
        description="Professional certifications in Cloud, DevOps, and AI/ML from AWS, Google, Microsoft, and more."
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
                <BadgeCheck className="size-4 mr-2" />
                Professional Credentials
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                Certifications
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Industry-recognized certifications demonstrating expertise in cloud platforms, DevOps practices, and machine learning technologies.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats */}
        <section className="px-6 lg:px-8 mb-16">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Card className="text-center">
                  <CardContent className="pt-6">
                    <div className="text-3xl font-bold text-primary">{certifications.length}</div>
                    <p className="text-sm text-muted-foreground">Total Certifications</p>
                  </CardContent>
                </Card>
                <Card className="text-center">
                  <CardContent className="pt-6">
                    <div className="text-3xl font-bold text-primary">
                      {getCertsByCategory('cloud').length}
                    </div>
                    <p className="text-sm text-muted-foreground">Cloud Certs</p>
                  </CardContent>
                </Card>
                <Card className="text-center">
                  <CardContent className="pt-6">
                    <div className="text-3xl font-bold text-primary">
                      {getCertsByCategory('devops').length}
                    </div>
                    <p className="text-sm text-muted-foreground">DevOps Certs</p>
                  </CardContent>
                </Card>
                <Card className="text-center">
                  <CardContent className="pt-6">
                    <div className="text-3xl font-bold text-primary">
                      {getCertsByCategory('aiml').length}
                    </div>
                    <p className="text-sm text-muted-foreground">AI/ML Certs</p>
                  </CardContent>
                </Card>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Certifications List */}
        <section className="px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <Tabs defaultValue="all" className="w-full">
              <ScrollReveal>
                <TabsList className="grid w-full grid-cols-3 md:grid-cols-6 mb-8">
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="cloud">Cloud</TabsTrigger>
                  <TabsTrigger value="devops">DevOps</TabsTrigger>
                  <TabsTrigger value="aiml">AI/ML</TabsTrigger>
                  <TabsTrigger value="programming">Programming</TabsTrigger>
                  <TabsTrigger value="other">Other</TabsTrigger>
                </TabsList>
              </ScrollReveal>

              {categories.map((category) => (
                <TabsContent key={category} value={category}>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {getCertsByCategory(category).map((cert, index) => {
                      const Icon = categoryIcons[cert.category];
                      return (
                        <ScrollReveal key={cert.id} delay={0.1 * index}>
                          <Card className="h-full hover:shadow-lg transition-all duration-300 group">
                            <CardHeader>
                              <div className="flex items-start justify-between">
                                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                                  <Icon className="size-6" />
                                </div>
                                <Badge variant="outline" className="text-xs capitalize">
                                  {categoryLabels[cert.category]}
                                </Badge>
                              </div>
                              <CardTitle className="text-lg mt-4 group-hover:text-primary transition-colors">
                                {cert.title}
                              </CardTitle>
                              <CardDescription className="text-base">
                                {cert.issuer}
                              </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <Calendar className="size-4" />
                                <span>Issued: {cert.issueDate}</span>
                              </div>
                              {cert.expiryDate && (
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                  <Calendar className="size-4" />
                                  <span>Expires: {cert.expiryDate}</span>
                                </div>
                              )}
                              {cert.credentialId && (
                                <p className="text-xs text-muted-foreground font-mono">
                                  ID: {cert.credentialId}
                                </p>
                              )}
                              {cert.credentialUrl && (
                                <a
                                  href={cert.credentialUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-2 text-sm text-primary hover:underline font-medium"
                                >
                                  <BadgeCheck className="size-4" />
                                  Verify Credential
                                  <ExternalLink className="size-3" />
                                </a>
                              )}
                            </CardContent>
                          </Card>
                        </ScrollReveal>
                      );
                    })}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>
      </div>
    </>
  );
}
