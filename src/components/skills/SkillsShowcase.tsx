import { motion } from 'framer-motion';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { personalInfo } from '@/data/portfolio';
import { NeonLine, GlowOrb } from '@/components/ui/CyberBackground';

// Tech with neon colors for futuristic feel
const techLogos: Record<string, { icon: string; color: string; neonColor: string }> = {
  // Languages
  "Python (Proficient)": { icon: "🐍", color: "#3776AB", neonColor: "hsl(180 100% 50%)" },
  "C/C++": { icon: "⚡", color: "#00599C", neonColor: "hsl(200 100% 50%)" },
  "JavaScript": { icon: "JS", color: "#F7DF1E", neonColor: "hsl(50 100% 50%)" },
  "Matlab/R": { icon: "📊", color: "#0076A8", neonColor: "hsl(200 100% 50%)" },
  "HTML/CSS": { icon: "🌐", color: "#E34F26", neonColor: "hsl(15 100% 50%)" },
  
  // DevOps
  "AWS": { icon: "☁️", color: "#FF9900", neonColor: "hsl(35 100% 50%)" },
  "Jenkins": { icon: "🔧", color: "#D24939", neonColor: "hsl(10 100% 50%)" },
  "GitHub Actions": { icon: "⚙️", color: "#2088FF", neonColor: "hsl(215 100% 60%)" },
  "Maven": { icon: "📦", color: "#C71A36", neonColor: "hsl(350 100% 50%)" },
  "Docker": { icon: "🐳", color: "#2496ED", neonColor: "hsl(205 100% 55%)" },
  "Kubernetes": { icon: "☸️", color: "#326CE5", neonColor: "hsl(220 100% 55%)" },
  "Ansible": { icon: "🔴", color: "#EE0000", neonColor: "hsl(0 100% 50%)" },
  "Terraform": { icon: "🏗️", color: "#7B42BC", neonColor: "hsl(270 100% 65%)" },
  "Vagrant": { icon: "📦", color: "#1868F2", neonColor: "hsl(220 100% 55%)" },
  
  // Libraries & Databases
  "Keras": { icon: "🧠", color: "#D00000", neonColor: "hsl(0 100% 50%)" },
  "Node.js": { icon: "💚", color: "#339933", neonColor: "hsl(120 100% 50%)" },
  "React": { icon: "⚛️", color: "#61DAFB", neonColor: "hsl(180 100% 70%)" },
  "JQuery": { icon: "$", color: "#0769AD", neonColor: "hsl(200 100% 50%)" },
  "Numpy": { icon: "🔢", color: "#013243", neonColor: "hsl(190 100% 40%)" },
  "Pandas": { icon: "🐼", color: "#150458", neonColor: "hsl(260 100% 50%)" },
  "PostgreSQL": { icon: "🐘", color: "#4169E1", neonColor: "hsl(230 100% 60%)" },
  "MongoDB": { icon: "🍃", color: "#47A248", neonColor: "hsl(120 100% 50%)" },
  "Firestore": { icon: "🔥", color: "#FFCA28", neonColor: "hsl(45 100% 55%)" },
  
  // OS/Tools
  "Linux": { icon: "🐧", color: "#FCC624", neonColor: "hsl(50 100% 55%)" },
  "Windows": { icon: "🪟", color: "#0078D6", neonColor: "hsl(205 100% 50%)" },
  "Git": { icon: "📂", color: "#F05032", neonColor: "hsl(10 100% 55%)" },
  "Figma": { icon: "🎨", color: "#F24E1E", neonColor: "hsl(15 100% 55%)" },
  "Canva": { icon: "🖼️", color: "#00C4CC", neonColor: "hsl(180 100% 50%)" },
  "Photoshop": { icon: "📷", color: "#31A8FF", neonColor: "hsl(200 100% 60%)" },
};

interface SkillPillProps {
  skill: string;
  index: number;
}

const SkillPill = ({ skill, index }: SkillPillProps) => {
  const logo = techLogos[skill] || { icon: "💻", color: "#6366F1", neonColor: "hsl(240 100% 65%)" };
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ 
        duration: 0.4, 
        delay: index * 0.03,
        type: "spring",
        stiffness: 100 
      }}
      whileHover={{ 
        scale: 1.1, 
        y: -5,
      }}
      className="group relative"
    >
      <div 
        className="relative flex items-center gap-2 px-4 py-2.5 rounded-lg overflow-hidden cursor-default transition-all duration-300"
        style={{
          background: 'linear-gradient(135deg, hsl(222 30% 12% / 0.8) 0%, hsl(222 30% 8% / 0.9) 100%)',
          border: '1px solid hsl(180 100% 50% / 0.2)',
        }}
      >
        {/* Animated border glow on hover */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: `linear-gradient(135deg, ${logo.neonColor}20 0%, transparent 50%)`,
            boxShadow: `inset 0 0 20px ${logo.neonColor}30, 0 0 20px ${logo.neonColor}20`,
          }}
        />
        
        <motion.span 
          className="relative text-lg z-10"
          whileHover={{ 
            rotate: [0, -10, 10, 0],
            transition: { duration: 0.4 }
          }}
        >
          {logo.icon}
        </motion.span>
        <span className="relative text-sm font-medium text-foreground/90 group-hover:text-foreground z-10 transition-colors">
          {skill}
        </span>
        
        {/* Corner accent */}
        <div 
          className="absolute top-0 right-0 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity"
          style={{
            background: `linear-gradient(225deg, ${logo.neonColor}40 0%, transparent 70%)`,
          }}
        />
      </div>
    </motion.div>
  );
};

interface SkillCategoryProps {
  title: string;
  skills: string[];
  icon: React.ReactNode;
  delay: number;
  accentColor: 'cyan' | 'magenta' | 'purple';
}

const SkillCategory = ({ title, skills, icon, delay, accentColor }: SkillCategoryProps) => {
  const colorMap = {
    cyan: { border: 'hsl(180 100% 50%)', bg: 'hsl(180 100% 50% / 0.1)' },
    magenta: { border: 'hsl(300 100% 60%)', bg: 'hsl(300 100% 60% / 0.1)' },
    purple: { border: 'hsl(270 100% 65%)', bg: 'hsl(270 100% 65% / 0.1)' },
  };
  
  const colors = colorMap[accentColor];
  
  return (
    <ScrollReveal delay={delay}>
      <motion.div 
        className="relative p-6 rounded-xl overflow-hidden h-full"
        style={{
          background: 'linear-gradient(135deg, hsl(222 30% 10% / 0.9) 0%, hsl(222 30% 6% / 0.95) 100%)',
          border: `1px solid ${colors.border}30`,
        }}
        whileHover={{ 
          y: -5,
          boxShadow: `0 0 30px ${colors.border}20, 0 0 60px ${colors.border}10`,
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Background gradient */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            background: `radial-gradient(ellipse at top right, ${colors.bg}, transparent 70%)`,
          }}
        />
        
        {/* Scan line effect */}
        <motion.div
          className="absolute left-0 right-0 h-px opacity-30"
          style={{
            background: `linear-gradient(90deg, transparent, ${colors.border}, transparent)`,
          }}
          animate={{
            top: ['0%', '100%', '0%'],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        
        {/* Header */}
        <div className="relative flex items-center gap-3 mb-6 z-10">
          <motion.div 
            className="p-3 rounded-lg"
            style={{
              background: colors.bg,
              boxShadow: `0 0 20px ${colors.border}30`,
            }}
            whileHover={{ rotate: 360, scale: 1.1 }}
            transition={{ duration: 0.6 }}
          >
            <div style={{ color: colors.border }}>{icon}</div>
          </motion.div>
          <div>
            <h3 className="text-lg font-bold text-foreground">{title}</h3>
            <div className="flex items-center gap-2 mt-1">
              <GlowOrb color={accentColor} size="sm" />
              <span className="text-xs text-muted-foreground">{skills.length} technologies</span>
            </div>
          </div>
        </div>
        
        {/* Skills Grid */}
        <div className="relative flex flex-wrap gap-2 z-10">
          {skills.map((skill, index) => (
            <SkillPill key={skill} skill={skill} index={index} />
          ))}
        </div>
        
        {/* Corner decorations */}
        <svg className="absolute top-2 left-2 w-6 h-6 opacity-30" style={{ color: colors.border }} viewBox="0 0 24 24">
          <path d="M0 8 L0 0 L8 0" fill="none" stroke="currentColor" strokeWidth="1" />
        </svg>
        <svg className="absolute bottom-2 right-2 w-6 h-6 opacity-30 rotate-180" style={{ color: colors.border }} viewBox="0 0 24 24">
          <path d="M0 8 L0 0 L8 0" fill="none" stroke="currentColor" strokeWidth="1" />
        </svg>
      </motion.div>
    </ScrollReveal>
  );
};

export const SkillsShowcase = () => {
  const { skills } = personalInfo;
  
  return (
    <section className="relative py-24 md:py-32 px-6 lg:px-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 cyber-grid opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      
      <div className="relative max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full mb-6"
              style={{
                background: 'linear-gradient(135deg, hsl(180 100% 50% / 0.1) 0%, hsl(300 100% 60% / 0.1) 100%)',
                border: '1px solid hsl(180 100% 50% / 0.3)',
              }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-cyan opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-cyan"></span>
              </span>
              <span className="text-sm font-medium text-neon-cyan">SYSTEM.SKILLS</span>
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              <span className="gradient-text">Technical Arsenal</span>
            </h2>
            
            <NeonLine className="max-w-md mx-auto my-6" />
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Equipped with cutting-edge tools for DevOps automation and AI-powered solutions
            </p>
          </div>
        </ScrollReveal>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <SkillCategory
            title="DevOps & Cloud"
            skills={skills.devops}
            accentColor="cyan"
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
            accentColor="magenta"
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
            accentColor="purple"
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
            accentColor="cyan"
            icon={
              <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            }
            delay={0.4}
          />
        </div>

        {/* Animated Tech Marquee */}
        <ScrollReveal delay={0.5}>
          <div className="mt-16 relative overflow-hidden rounded-xl p-4"
            style={{
              background: 'linear-gradient(180deg, hsl(222 30% 8% / 0.5) 0%, hsl(222 30% 5% / 0.8) 100%)',
              border: '1px solid hsl(180 100% 50% / 0.1)',
            }}
          >
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
            
            <motion.div
              className="flex gap-4"
              animate={{ x: [0, -1500] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 40,
                  ease: "linear",
                },
              }}
            >
              {[...Object.entries(techLogos), ...Object.entries(techLogos), ...Object.entries(techLogos)].map(([name, { icon, neonColor }], index) => (
                <div
                  key={`${name}-${index}`}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap"
                  style={{
                    background: 'hsl(222 30% 10% / 0.8)',
                    border: '1px solid hsl(180 100% 50% / 0.15)',
                  }}
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
