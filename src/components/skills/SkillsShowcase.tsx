import { motion } from 'framer-motion';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { personalInfo } from '@/data/portfolio';

// Tech logos as SVG components with brand colors
const techLogos: Record<string, { icon: string; color: string }> = {
  // Languages
  "Python (Proficient)": { icon: "🐍", color: "#3776AB" },
  "C/C++": { icon: "⚡", color: "#00599C" },
  "JavaScript": { icon: "JS", color: "#F7DF1E" },
  "Matlab/R": { icon: "📊", color: "#0076A8" },
  "HTML/CSS": { icon: "🌐", color: "#E34F26" },
  
  // DevOps
  "AWS": { icon: "☁️", color: "#FF9900" },
  "Jenkins": { icon: "🔧", color: "#D24939" },
  "GitHub Actions": { icon: "⚙️", color: "#2088FF" },
  "Maven": { icon: "📦", color: "#C71A36" },
  "Docker": { icon: "🐳", color: "#2496ED" },
  "Kubernetes": { icon: "☸️", color: "#326CE5" },
  "Ansible": { icon: "🔴", color: "#EE0000" },
  "Terraform": { icon: "🏗️", color: "#7B42BC" },
  "Vagrant": { icon: "📦", color: "#1868F2" },
  
  // Libraries & Databases
  "Keras": { icon: "🧠", color: "#D00000" },
  "Node.js": { icon: "💚", color: "#339933" },
  "React": { icon: "⚛️", color: "#61DAFB" },
  "JQuery": { icon: "$", color: "#0769AD" },
  "Numpy": { icon: "🔢", color: "#013243" },
  "Pandas": { icon: "🐼", color: "#150458" },
  "PostgreSQL": { icon: "🐘", color: "#4169E1" },
  "MongoDB": { icon: "🍃", color: "#47A248" },
  "Firestore": { icon: "🔥", color: "#FFCA28" },
  
  // OS/Tools
  "Linux": { icon: "🐧", color: "#FCC624" },
  "Windows": { icon: "🪟", color: "#0078D6" },
  "Git": { icon: "📂", color: "#F05032" },
  "Figma": { icon: "🎨", color: "#F24E1E" },
  "Canva": { icon: "🖼️", color: "#00C4CC" },
  "Photoshop": { icon: "📷", color: "#31A8FF" },
};

interface SkillPillProps {
  skill: string;
  index: number;
  category: string;
}

const SkillPill = ({ skill, index, category }: SkillPillProps) => {
  const logo = techLogos[skill] || { icon: "💻", color: "#6366F1" };
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ 
        duration: 0.4, 
        delay: index * 0.05,
        type: "spring",
        stiffness: 100 
      }}
      whileHover={{ 
        scale: 1.1, 
        y: -5,
        transition: { duration: 0.2 }
      }}
      className="group relative"
    >
      <div 
        className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-secondary/50 backdrop-blur-sm border border-border hover:border-primary/30 transition-all duration-300 cursor-default"
        style={{ 
          boxShadow: `0 0 0 0 ${logo.color}00`,
        }}
      >
        <motion.span 
          className="text-lg"
          animate={{ 
            rotate: [0, 0, 0],
          }}
          whileHover={{ 
            rotate: [0, -10, 10, 0],
            transition: { duration: 0.4 }
          }}
        >
          {logo.icon}
        </motion.span>
        <span className="text-sm font-medium text-foreground/90 group-hover:text-foreground transition-colors">
          {skill}
        </span>
      </div>
      
      {/* Glow effect on hover */}
      <div 
        className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl -z-10"
        style={{ backgroundColor: logo.color }}
      />
    </motion.div>
  );
};

interface SkillCategoryProps {
  title: string;
  skills: string[];
  icon: React.ReactNode;
  delay: number;
}

const SkillCategory = ({ title, skills, icon, delay }: SkillCategoryProps) => {
  return (
    <ScrollReveal delay={delay}>
      <motion.div 
        className="relative p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/20 transition-all duration-500 h-full"
        whileHover={{ y: -5 }}
        transition={{ duration: 0.3 }}
      >
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <motion.div 
            className="p-3 rounded-xl bg-primary/10 text-primary"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
          >
            {icon}
          </motion.div>
          <h3 className="text-lg font-semibold text-foreground">{title}</h3>
        </div>
        
        {/* Skills Grid */}
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <SkillPill key={skill} skill={skill} index={index} category={title} />
          ))}
        </div>
        
        {/* Decorative gradient */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl pointer-events-none" />
      </motion.div>
    </ScrollReveal>
  );
};

// Animated background orbs
const FloatingOrb = ({ delay, size, position }: { delay: number; size: string; position: string }) => (
  <motion.div
    className={`absolute ${position} ${size} rounded-full bg-gradient-to-br from-primary/10 to-accent/10 blur-3xl`}
    animate={{
      y: [0, -30, 0],
      x: [0, 15, 0],
      scale: [1, 1.1, 1],
    }}
    transition={{
      duration: 8,
      delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
);

export const SkillsShowcase = () => {
  const { skills } = personalInfo;
  
  return (
    <section className="relative py-24 md:py-32 px-6 lg:px-8 bg-background border-t border-border overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <FloatingOrb delay={0} size="w-96 h-96" position="-top-48 -left-48" />
        <FloatingOrb delay={2} size="w-64 h-64" position="top-1/2 -right-32" />
        <FloatingOrb delay={4} size="w-80 h-80" position="-bottom-40 left-1/3" />
      </div>
      
      <div className="relative max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Technical Stack
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Technical Expertise
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Bridging the gap between development and operations with AI-powered solutions
            </p>
          </div>
        </ScrollReveal>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <SkillCategory
            title="DevOps & Cloud"
            skills={skills.devops}
            icon={
              <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
              </svg>
            }
            delay={0.1}
          />
          
          <SkillCategory
            title="Libraries & Databases"
            skills={skills.librariesDatabases}
            icon={
              <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
              </svg>
            }
            delay={0.2}
          />
          
          <SkillCategory
            title="Languages"
            skills={skills.languages}
            icon={
              <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            }
            delay={0.3}
          />
          
          <SkillCategory
            title="OS / Software / Tools"
            skills={skills.osSoftwareTools}
            icon={
              <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            }
            delay={0.4}
          />
        </div>

        {/* Marquee effect for continuous scroll */}
        <ScrollReveal delay={0.5}>
          <div className="mt-16 relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />
            
            <motion.div
              className="flex gap-4"
              animate={{ x: [0, -1000] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear",
                },
              }}
            >
              {[...Object.entries(techLogos), ...Object.entries(techLogos)].map(([name, { icon, color }], index) => (
                <div
                  key={`${name}-${index}`}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/30 border border-border whitespace-nowrap"
                >
                  <span className="text-lg">{icon}</span>
                  <span className="text-sm text-muted-foreground">{name}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
