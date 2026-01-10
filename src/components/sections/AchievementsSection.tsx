import { motion } from 'framer-motion';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { achievements, additionalInfo } from '@/data/portfolio';
import { Trophy, Award, Target, TrendingUp, Users, Sparkles } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const achievementIcons = {
  competition: Trophy,
  hackathon: Target,
  award: Award,
};

const additionalIcons = {
  hobby: TrendingUp,
  leadership: Users,
  extracurricular: Sparkles,
};

export const AchievementsSection = () => {
  return (
    <section className="py-24 md:py-32 px-6 lg:px-8 bg-gradient-to-b from-background to-secondary/20 border-t border-border">
      <div className="max-w-6xl mx-auto">
        {/* Achievements */}
        <ScrollReveal>
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 text-sm font-medium mb-4"
            >
              <Trophy className="size-4" />
              Recognition
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Achievements & Awards
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Competitive achievements and recognitions in tech
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {achievements.map((achievement, index) => {
            const Icon = achievementIcons[achievement.type];
            return (
              <ScrollReveal key={achievement.id} delay={0.1 * index}>
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="h-full bg-gradient-to-br from-card to-secondary/30 border-border hover:border-primary/30 transition-all duration-300 overflow-hidden group">
                    <CardHeader className="pb-2">
                      <div className="flex items-start justify-between gap-4">
                        <motion.div 
                          className="p-3 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400"
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                        >
                          <Icon className="size-6" />
                        </motion.div>
                        <Badge variant="outline" className="capitalize text-xs">
                          {achievement.type}
                        </Badge>
                      </div>
                      <CardTitle className="text-lg mt-4 group-hover:text-primary transition-colors">
                        {achievement.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {achievement.description}
                      </p>
                    </CardContent>
                    
                    {/* Decorative element */}
                    <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-br from-amber-500/5 to-transparent rounded-full blur-2xl group-hover:from-amber-500/10 transition-all duration-500" />
                  </Card>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Additional Info */}
        <ScrollReveal>
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
            >
              <Sparkles className="size-4" />
              Beyond Code
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Additional Interests
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Leadership roles and extracurricular activities
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {additionalInfo.map((info, index) => {
            const Icon = additionalIcons[info.category];
            return (
              <ScrollReveal key={info.id} delay={0.1 * index}>
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="h-full hover:shadow-lg transition-all duration-300 group">
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-3">
                        <motion.div 
                          className="p-2.5 rounded-lg bg-primary/10 text-primary"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Icon className="size-5" />
                        </motion.div>
                        <Badge variant="secondary" className="capitalize text-xs">
                          {info.category}
                        </Badge>
                      </div>
                      <CardTitle className="text-lg mt-3 group-hover:text-primary transition-colors">
                        {info.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {info.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
