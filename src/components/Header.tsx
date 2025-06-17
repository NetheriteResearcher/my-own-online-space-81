
import { useState } from 'react';
import { Menu, X, Brain } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-black/90 backdrop-blur-md z-50 border-b border-gray-800">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Brain className="w-8 h-8 text-blue-400 animate-pulse" />
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-mono">
              AI_Engineer
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('hero')} className="text-gray-300 hover:text-blue-400 transition-colors font-mono text-sm">
              /home
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-blue-400 transition-colors font-mono text-sm">
              /about
            </button>
            <button onClick={() => scrollToSection('skills')} className="text-gray-300 hover:text-blue-400 transition-colors font-mono text-sm">
              /skills
            </button>
            <button onClick={() => scrollToSection('projects')} className="text-gray-300 hover:text-blue-400 transition-colors font-mono text-sm">
              /projects
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-blue-400 transition-colors font-mono text-sm">
              /contact
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-300 hover:text-blue-400 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-800">
            <div className="flex flex-col space-y-4 mt-4">
              <button onClick={() => scrollToSection('hero')} className="text-gray-300 hover:text-blue-400 transition-colors text-left font-mono">
                /home
              </button>
              <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-blue-400 transition-colors text-left font-mono">
                /about
              </button>
              <button onClick={() => scrollToSection('skills')} className="text-gray-300 hover:text-blue-400 transition-colors text-left font-mono">
                /skills
              </button>
              <button onClick={() => scrollToSection('projects')} className="text-gray-300 hover:text-blue-400 transition-colors text-left font-mono">
                /projects
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-blue-400 transition-colors text-left font-mono">
                /contact
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
