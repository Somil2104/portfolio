import { motion } from 'framer-motion';

/**
 * Futuristic animated background with grid, particles, and glow effects
 */
export function CyberBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Cyber grid */}
      <div className="absolute inset-0 cyber-grid opacity-50" />
      
      {/* Animated gradient orbs */}
      <motion.div
        className="absolute -top-40 -left-40 w-96 h-96 rounded-full opacity-30"
        style={{
          background: 'radial-gradient(circle, hsl(180 100% 50% / 0.4) 0%, transparent 70%)',
        }}
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute top-1/2 -right-40 w-80 h-80 rounded-full opacity-30"
        style={{
          background: 'radial-gradient(circle, hsl(300 100% 60% / 0.4) 0%, transparent 70%)',
        }}
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -30, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
      
      <motion.div
        className="absolute -bottom-40 left-1/3 w-72 h-72 rounded-full opacity-20"
        style={{
          background: 'radial-gradient(circle, hsl(270 100% 65% / 0.4) 0%, transparent 70%)',
        }}
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 40, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
      
      {/* Floating particles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: i % 2 === 0 ? 'hsl(180 100% 50%)' : 'hsl(300 100% 60%)',
            boxShadow: i % 2 === 0 
              ? '0 0 10px hsl(180 100% 50%), 0 0 20px hsl(180 100% 50% / 0.5)' 
              : '0 0 10px hsl(300 100% 60%), 0 0 20px hsl(300 100% 60% / 0.5)',
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 4 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 4,
            ease: "easeInOut",
          }}
        />
      ))}
      
      {/* Horizontal scan lines */}
      <div className="absolute inset-0 opacity-5">
        {Array.from({ length: 100 }).map((_, i) => (
          <div
            key={i}
            className="h-px w-full"
            style={{
              marginTop: '8px',
              background: 'linear-gradient(90deg, transparent, hsl(180 100% 50% / 0.3), transparent)',
            }}
          />
        ))}
      </div>
      
      {/* Corner decorations */}
      <svg className="absolute top-0 left-0 w-32 h-32 text-neon-cyan opacity-20" viewBox="0 0 100 100">
        <path d="M0 30 L0 0 L30 0" fill="none" stroke="currentColor" strokeWidth="1" />
        <path d="M0 20 L0 0 L20 0" fill="none" stroke="currentColor" strokeWidth="0.5" />
      </svg>
      
      <svg className="absolute top-0 right-0 w-32 h-32 text-neon-magenta opacity-20 rotate-90" viewBox="0 0 100 100">
        <path d="M0 30 L0 0 L30 0" fill="none" stroke="currentColor" strokeWidth="1" />
        <path d="M0 20 L0 0 L20 0" fill="none" stroke="currentColor" strokeWidth="0.5" />
      </svg>
      
      <svg className="absolute bottom-0 left-0 w-32 h-32 text-neon-purple opacity-20 -rotate-90" viewBox="0 0 100 100">
        <path d="M0 30 L0 0 L30 0" fill="none" stroke="currentColor" strokeWidth="1" />
        <path d="M0 20 L0 0 L20 0" fill="none" stroke="currentColor" strokeWidth="0.5" />
      </svg>
      
      <svg className="absolute bottom-0 right-0 w-32 h-32 text-neon-cyan opacity-20 rotate-180" viewBox="0 0 100 100">
        <path d="M0 30 L0 0 L30 0" fill="none" stroke="currentColor" strokeWidth="1" />
        <path d="M0 20 L0 0 L20 0" fill="none" stroke="currentColor" strokeWidth="0.5" />
      </svg>
    </div>
  );
}

/**
 * Glowing neon line decoration
 */
export function NeonLine({ className = '' }: { className?: string }) {
  return (
    <div className={`h-px w-full ${className}`}>
      <div 
        className="h-full w-full"
        style={{
          background: 'linear-gradient(90deg, transparent, hsl(180 100% 50%), hsl(270 100% 65%), hsl(300 100% 60%), transparent)',
          boxShadow: '0 0 10px hsl(180 100% 50% / 0.5), 0 0 20px hsl(270 100% 65% / 0.3)',
        }}
      />
    </div>
  );
}

/**
 * Glowing orb for decorative purposes
 */
export function GlowOrb({ 
  color = 'cyan', 
  size = 'md',
  className = '' 
}: { 
  color?: 'cyan' | 'magenta' | 'purple';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}) {
  const colors = {
    cyan: 'hsl(180 100% 50%)',
    magenta: 'hsl(300 100% 60%)',
    purple: 'hsl(270 100% 65%)',
  };
  
  const sizes = {
    sm: 'w-2 h-2',
    md: 'w-3 h-3',
    lg: 'w-4 h-4',
  };
  
  return (
    <motion.div
      className={`rounded-full ${sizes[size]} ${className}`}
      style={{
        background: colors[color],
        boxShadow: `0 0 10px ${colors[color]}, 0 0 20px ${colors[color]}, 0 0 30px ${colors[color]}`,
      }}
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.8, 1, 0.8],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}
