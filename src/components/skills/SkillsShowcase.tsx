import { motion } from 'framer-motion';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { personalInfo } from '@/data/portfolio';

// Tech logos with real icons
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
}

const SkillPill = ({ skill, index }: SkillPillProps) => {
  const logo = techLogos[skill] || { icon: "💻", color: "#6366F1" };
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.03 }}
      whileHover={{ scale: 1.05, y: -2 }}
      className="group"
    >
      <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-secondary/50 border border-border hover:border-primary/30 hover:bg-secondary transition-all cursor-default">
        <span className="text-base">{logo.icon}</span>
        <span className="text-sm font-medium text-foreground/80 group-hover:text-foreground transition-colors">
          {skill}
        </span>
      </div>
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
        className="p-6 rounded-xl bg-card border border-border hover:border-primary/20 transition-all h-full"
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2 }}
      >
        {/* Header */}
        <div className="flex items-center gap-3 mb-5">
          <div className="p-2.5 rounded-lg bg-primary/10 text-primary">
            {icon}
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground">{title}</h3>
            <span className="text-xs text-muted-foreground">{skills.length} technologies</span>
          </div>
        </div>
        
        {/* Skills Grid */}
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <SkillPill key={skill} skill={skill} index={index} />
          ))}
        </div>
      </motion.div>
    </ScrollReveal>
  );
};

export const SkillsShowcase = () => {
  const { skills } = personalInfo;
  
  return (
    <section id="skills-section" className="relative py-20 md:py-28 px-6 lg:px-8">
      <div className="absolute inset-0 subtle-grid opacity-50" />
      
      <div className="relative max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-medium tracking-wider uppercase text-primary bg-primary/10 rounded-full">
              Technical Skills
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              <span className="gradient-text">Technical Expertise</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Tools and technologies I work with to build scalable solutions
            </p>
          </div>
        </ScrollReveal>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <SkillCategory
            title="DevOps & Cloud"
            skills={skills.devops}
            icon={
              <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
              </svg>
            }
            delay={0.1}
          />
          
          <SkillCategory
            title="Libraries & Databases"
            skills={skills.librariesDatabases}
            icon={
              <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
              </svg>
            }
            delay={0.2}
          />
          
          <SkillCategory
            title="Languages"
            skills={skills.languages}
            icon={
              <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            }
            delay={0.3}
          />
          
          <SkillCategory
            title="OS / Software / Tools"
            skills={skills.osSoftwareTools}
            icon={
              <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            }
            delay={0.4}
          />
        </div>
      </div>
    </section>
  );
};
