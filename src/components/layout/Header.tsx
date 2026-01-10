import { Link, useLocation } from 'react-router-dom';
import { Menu, Terminal } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { ThemeToggle } from './ThemeToggle';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { personalInfo } from '@/data/portfolio';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Projects', path: '/projects' },
  { name: 'Experience', path: '/experience' },
  { name: 'Certifications', path: '/certifications' },
  { name: 'Contact', path: '/contact' },
];

/**
 * Futuristic header with neon styling
 */
export function Header() {
  const location = useLocation();
  const { isScrolled } = useScrollPosition();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        isScrolled
          ? 'backdrop-blur-xl'
          : ''
      )}
      style={{
        background: isScrolled 
          ? 'linear-gradient(180deg, hsl(222 47% 8% / 0.95) 0%, hsl(222 47% 8% / 0.85) 100%)'
          : 'transparent',
        borderBottom: isScrolled ? '1px solid hsl(180 100% 50% / 0.1)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 group"
          >
            <motion.div
              className="p-1.5 rounded-md"
              style={{
                background: 'hsl(180 100% 50% / 0.1)',
                border: '1px solid hsl(180 100% 50% / 0.3)',
              }}
              whileHover={{ 
                scale: 1.1,
                boxShadow: '0 0 20px hsl(180 100% 50% / 0.4)',
              }}
            >
              <Terminal className="size-4 text-neon-cyan" />
            </motion.div>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg font-mono font-bold tracking-wider text-foreground group-hover:text-neon-cyan transition-colors"
            >
              {personalInfo.name.split(' ')[0].toUpperCase()}
              <span className="text-neon-cyan">.</span>
              <span className="text-neon-magenta">dev</span>
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.path}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
              >
                <Link
                  to={link.path}
                  className={cn(
                    "relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg",
                    location.pathname === link.path
                      ? "text-neon-cyan"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {link.name}
                  {/* Active indicator */}
                  {location.pathname === link.path && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute inset-0 rounded-lg -z-10"
                      style={{
                        background: 'hsl(180 100% 50% / 0.1)',
                        border: '1px solid hsl(180 100% 50% / 0.3)',
                        boxShadow: '0 0 15px hsl(180 100% 50% / 0.2)',
                      }}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="ml-2"
            >
              <ThemeToggle />
            </motion.div>
          </nav>

          {/* Mobile Menu */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="size-9 text-foreground hover:text-neon-cyan hover:bg-neon-cyan/10"
                  aria-label="Open menu"
                >
                  <Menu className="size-5" />
                </Button>
              </SheetTrigger>
              <SheetContent 
                side="right" 
                className="w-full sm:w-80 border-neon-cyan/20"
                style={{
                  background: 'linear-gradient(180deg, hsl(222 47% 8%) 0%, hsl(222 47% 5%) 100%)',
                }}
              >
                <div className="flex items-center gap-2 mb-8">
                  <Terminal className="size-5 text-neon-cyan" />
                  <span className="font-mono font-bold text-neon-cyan">NAVIGATION</span>
                </div>
                <nav className="flex flex-col gap-2">
                  {navLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={cn(
                        "px-4 py-3 rounded-lg text-lg font-medium transition-all duration-300",
                        location.pathname === link.path
                          ? "text-neon-cyan bg-neon-cyan/10 border border-neon-cyan/30"
                          : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                      )}
                    >
                      {link.name}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
