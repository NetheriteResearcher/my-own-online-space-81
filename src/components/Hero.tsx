
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-20">
      <div className="container mx-auto px-6 text-center">
        <div className="animate-fade-in">
          <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white text-6xl font-bold">
            J
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            John Doe
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Full Stack Developer & Designer
          </p>
          
          <p className="text-lg text-gray-500 mb-12 max-w-3xl mx-auto">
            I craft beautiful, functional digital experiences that make a difference. 
            Passionate about clean code, user experience, and bringing ideas to life.
          </p>

          <div className="flex items-center justify-center space-x-6 mb-12">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-900 text-white hover:bg-gray-700 transition-all duration-300 hover:scale-110"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 hover:scale-110"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:john@example.com"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-600 text-white hover:bg-purple-700 transition-all duration-300 hover:scale-110"
            >
              <Mail size={20} />
            </a>
          </div>

          <button
            onClick={scrollToAbout}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            Learn More About Me
            <ArrowDown className="ml-2" size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
