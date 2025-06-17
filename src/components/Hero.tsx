
import { ArrowDown, Github, Linkedin, Mail, Brain, Cpu } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 pt-20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-32 h-32 bg-red-500/10 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-orange-500/10 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute bottom-32 left-1/4 w-16 h-16 bg-pink-500/10 rounded-full animate-ping delay-2000"></div>
        <div className="absolute bottom-20 right-20 w-20 h-20 bg-red-500/10 rounded-full animate-pulse delay-3000"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <div className="relative w-40 h-40 mx-auto mb-8">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-red-500 via-orange-500 to-pink-500 animate-spin" style={{ animationDuration: '3s' }}></div>
            <div className="absolute inset-2 rounded-full bg-black flex items-center justify-center">
              <Brain className="text-red-400 w-16 h-16 animate-pulse" />
            </div>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-red-400 via-orange-400 to-pink-400 bg-clip-text text-transparent animate-fade-in">
            AI Engineer
          </h1>
          
          <p className="text-2xl md:text-3xl text-gray-300 mb-8 max-w-2xl mx-auto font-mono">
            Machine Learning & Deep Learning Specialist
          </p>
          
          <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">
            Building intelligent systems that learn, adapt, and solve complex problems. 
            Transforming data into insights through cutting-edge AI technologies.
          </p>

          <div className="flex items-center justify-center space-x-6 mb-12">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center w-14 h-14 rounded-full bg-gray-800 border border-gray-700 text-white hover:bg-gray-700 hover:border-red-500 transition-all duration-300 hover:scale-110 group"
            >
              <Github size={24} className="group-hover:text-red-400 transition-colors" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center w-14 h-14 rounded-full bg-gray-800 border border-gray-700 text-white hover:bg-gray-700 hover:border-red-500 transition-all duration-300 hover:scale-110 group"
            >
              <Linkedin size={24} className="group-hover:text-red-400 transition-colors" />
            </a>
            <a 
              href="mailto:ai@example.com"
              className="flex items-center justify-center w-14 h-14 rounded-full bg-gray-800 border border-gray-700 text-white hover:bg-gray-700 hover:border-orange-500 transition-all duration-300 hover:scale-110 group"
            >
              <Mail size={24} className="group-hover:text-orange-400 transition-colors" />
            </a>
          </div>

          <button
            onClick={scrollToAbout}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-full hover:from-red-700 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-red-500/25 border border-red-500/50"
          >
            Explore My AI Journey
            <ArrowDown className="ml-2 animate-bounce" size={20} />
          </button>
        </div>
      </div>

      {/* Tech grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(239,68,68,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(239,68,68,0.1)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none"></div>
    </section>
  );
};

export default Hero;
