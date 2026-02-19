import { useState } from 'react';
import { Menu, X, Github, GraduationCap, School } from 'lucide-react';

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
          <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center text-accent-foreground">
            <GraduationCap className="w-6 h-6" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold text-foreground leading-none">Global Research Collaboration & Communication Hub</span>
            <span className="text-[10px] text-muted-foreground font-medium tracking-wider uppercase">Research & Development</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6">
          <button onClick={() => scrollToSection('hero')} className="btn-ghost text-sm font-medium">Home</button>
          <button onClick={() => scrollToSection('resources')} className="btn-ghost text-sm font-medium">Journals</button>
          <button onClick={() => scrollToSection('toolkit')} className="btn-ghost text-sm font-medium">Workshop Toolkit</button>
          <button onClick={() => scrollToSection('github-integration')} className="btn-ghost text-sm font-medium">GitHub</button>
          <button onClick={() => scrollToSection('contact')} className="btn-ghost text-sm font-medium">Contact</button>
          
          <div className="h-6 w-px bg-border mx-2" />
          
          <a href="https://moodle.org" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-orange-600 hover:text-orange-700 transition-colors">
            <School className="w-4 h-4" />
            Moodle
          </a>
          
          <a href="https://github.com/hc344937-hash/scholarly-we-portal" target="_blank" rel="noopener noreferrer" className="btn-primary text-sm flex items-center gap-2">
            <Github className="w-4 h-4" />
            Repository
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="lg:hidden p-2 hover:bg-muted rounded-lg transition-colors"
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
        <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-sm animate-fade-in-up">
          <div className="container py-6 space-y-4 flex flex-col">
            <button onClick={() => scrollToSection('hero')} className="text-left text-sm font-medium py-2">Home</button>
            <button onClick={() => scrollToSection('resources')} className="text-left text-sm font-medium py-2">Journals & Resources</button>
            <button onClick={() => scrollToSection('toolkit')} className="text-left text-sm font-medium py-2">Workshop Toolkit</button>
            <button onClick={() => scrollToSection('github-integration')} className="text-left text-sm font-medium py-2">GitHub Integration</button>
            <button onClick={() => scrollToSection('contact')} className="text-left text-sm font-medium py-2">Contact</button>
            
            <div className="pt-4 border-t border-border space-y-3">
              <a href="https://moodle.org" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-orange-600">
                <School className="w-4 h-4" />
                Access Moodle
              </a>
              <a href="https://github.com/hc344937-hash/scholarly-we-portal" target="_blank" rel="noopener noreferrer" className="btn-primary w-full text-center text-sm flex items-center justify-center gap-2">
                <Github className="w-4 h-4" />
                View Repository
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
