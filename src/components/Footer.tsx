
import { Github, Linkedin, Mail, Heart, Brain, Terminal } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800 text-white py-12 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute bottom-10 left-10 w-2 h-2 bg-blue-500 rounded-full animate-ping"></div>
        <div className="absolute bottom-20 right-20 w-1 h-1 bg-purple-500 rounded-full animate-pulse"></div>
        <div className="absolute top-10 left-1/2 w-1.5 h-1.5 bg-cyan-500 rounded-full animate-ping delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <Brain className="w-8 h-8 text-blue-400 animate-pulse" />
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-mono">
                AI_Engineer
              </div>
            </div>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Pushing the boundaries of artificial intelligence through innovative research and 
              cutting-edge machine learning solutions.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-900 border border-gray-700 rounded-lg flex items-center justify-center hover:border-blue-500 hover:bg-gray-800 transition-all duration-300 group"
              >
                <Github size={20} className="group-hover:text-blue-400 transition-colors" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-900 border border-gray-700 rounded-lg flex items-center justify-center hover:border-blue-500 hover:bg-gray-800 transition-all duration-300 group"
              >
                <Linkedin size={20} className="group-hover:text-blue-400 transition-colors" />
              </a>
              <a 
                href="mailto:ai.engineer@example.com"
                className="w-10 h-10 bg-gray-900 border border-gray-700 rounded-lg flex items-center justify-center hover:border-purple-500 hover:bg-gray-800 transition-all duration-300 group"
              >
                <Mail size={20} className="group-hover:text-purple-400 transition-colors" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center font-mono">
              <Terminal className="w-5 h-5 mr-2 text-blue-400" />
              Navigation
            </h3>
            <div className="space-y-2">
              <a href="#about" className="block text-gray-400 hover:text-blue-400 transition-colors font-mono text-sm">/about</a>
              <a href="#skills" className="block text-gray-400 hover:text-blue-400 transition-colors font-mono text-sm">/skills</a>
              <a href="#projects" className="block text-gray-400 hover:text-blue-400 transition-colors font-mono text-sm">/projects</a>
              <a href="#contact" className="block text-gray-400 hover:text-blue-400 transition-colors font-mono text-sm">/contact</a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 font-mono">Specializations</h3>
            <div className="space-y-2">
              <p className="text-gray-400 font-mono text-sm">Deep Learning</p>
              <p className="text-gray-400 font-mono text-sm">Computer Vision</p>
              <p className="text-gray-400 font-mono text-sm">NLP & LLMs</p>
              <p className="text-gray-400 font-mono text-sm">MLOps & Deployment</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center font-mono text-sm">
            Built with <Heart className="mx-2 text-red-500 animate-pulse" size={16} /> and AI © 2024
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
