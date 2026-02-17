import { useState } from 'react';
import { Menu, X, Github } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="container flex items-center justify-between py-4">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <Github className="w-8 h-8 text-accent" />
          <span className="text-xl font-bold text-foreground hidden sm:inline">GitHub Student Portal</span>
          <span className="text-xl font-bold text-foreground sm:hidden">Portal</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection('hero')}
            className="btn-ghost text-sm font-medium"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection('resources')}
            className="btn-ghost text-sm font-medium"
          >
            Resources
          </button>
          <button
            onClick={() => scrollToSection('github-integration')}
            className="btn-ghost text-sm font-medium"
          >
            GitHub Integration
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="btn-ghost text-sm font-medium"
          >
            Contact
          </button>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="btn-primary text-sm">
            Get Started
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
        >
          {isMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-sm animate-fade-in-up">
          <div className="container py-4 space-y-3 flex flex-col">
            <button
              onClick={() => scrollToSection('hero')}
              className="btn-ghost w-full text-left text-sm font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('resources')}
              className="btn-ghost w-full text-left text-sm font-medium"
            >
              Resources
            </button>
            <button
              onClick={() => scrollToSection('github-integration')}
              className="btn-ghost w-full text-left text-sm font-medium"
            >
              GitHub Integration
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="btn-ghost w-full text-left text-sm font-medium"
            >
              Contact
            </button>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full text-center text-sm mt-4"
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
