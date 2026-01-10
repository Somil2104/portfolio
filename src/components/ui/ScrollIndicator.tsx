import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

/**
 * Animated scroll indicator for hero sections
 * Subtle visual cue to encourage scrolling
 */
export function ScrollIndicator() {
  const handleScroll = () => {
    const skillsSection = document.getElementById('skills-section');
    if (skillsSection) {
      skillsSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
      });
    }
  };

  return (
    <motion.button
      onClick={handleScroll}
      className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors cursor-pointer group"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.8 }}
      aria-label="Scroll to content"
    >
      <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
      <motion.div
        className="p-2 rounded-full border border-border group-hover:border-primary/50 transition-colors"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown className="size-4" />
      </motion.div>
    </motion.button>
  );
}
