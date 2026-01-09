import { Linkedin, Github, Mail, Twitter } from 'lucide-react';
import { personalInfo } from '@/data/portfolio';
import { Link } from 'react-router-dom';

/**
 * Footer component with navigation and social links
 */
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-bold tracking-wide mb-4">{personalInfo.name}</h3>
            <p className="text-sm text-muted-foreground mb-4 max-w-md">
              {personalInfo.title} passionate about building scalable infrastructure and intelligent systems.
            </p>
            <p className="text-sm text-muted-foreground">
              {personalInfo.location}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/projects" className="text-muted-foreground hover:text-foreground transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/experience" className="text-muted-foreground hover:text-foreground transition-colors">
                  Experience
                </Link>
              </li>
              <li>
                <Link to="/certifications" className="text-muted-foreground hover:text-foreground transition-colors">
                  Certifications
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-medium mb-4">Connect</h4>
            <div className="flex items-center gap-4">
              {personalInfo.socialLinks.linkedin && (
                <a
                  href={personalInfo.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-secondary hover:bg-secondary/80 text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="size-5" />
                </a>
              )}
              {personalInfo.socialLinks.github && (
                <a
                  href={personalInfo.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-secondary hover:bg-secondary/80 text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="size-5" />
                </a>
              )}
              {personalInfo.socialLinks.twitter && (
                <a
                  href={personalInfo.socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-secondary hover:bg-secondary/80 text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="size-5" />
                </a>
              )}
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2 rounded-full bg-secondary hover:bg-secondary/80 text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Email"
              >
                <Mail className="size-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground text-center">
            © {currentYear} {personalInfo.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
