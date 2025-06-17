
import { ExternalLink, Github, Brain, Eye, MessageSquare } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Neural Style Transfer Engine",
      description: "Real-time artistic style transfer using convolutional neural networks. Implements advanced optimization techniques for high-resolution image processing.",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?auto=format&fit=crop&w=800&q=80",
      technologies: ["PyTorch", "CUDA", "FastAPI", "React"],
      github: "#",
      live: "#",
      icon: <Eye className="w-5 h-5" />
    },
    {
      title: "Multimodal LLM Framework",
      description: "Custom transformer architecture for processing text, images, and audio simultaneously. Achieved 15% improvement over baseline models on benchmark tasks.",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=800&q=80",
      technologies: ["Transformers", "Hugging Face", "PyTorch", "MLflow"],
      github: "#",
      live: "#",
      icon: <MessageSquare className="w-5 h-5" />
    },
    {
      title: "Reinforcement Learning Agent",
      description: "Advanced RL agent using PPO and A3C algorithms for complex environment navigation. Deployed on edge devices with optimized inference.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
      technologies: ["OpenAI Gym", "Ray", "TensorRT", "Docker"],
      github: "#",
      live: "#",
      icon: <Brain className="w-5 h-5" />
    }
  ];

  return (
    <section id="projects" className="py-20 bg-black relative overflow-hidden">
      {/* Neural network visualization background */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 800 600">
          <defs>
            <pattern id="neural-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="2" fill="#EF4444" className="animate-pulse">
                <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" />
              </circle>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#neural-pattern)" />
          <g stroke="#EF4444" strokeWidth="0.5" opacity="0.3">
            <line x1="50" y1="50" x2="150" y2="150" className="animate-pulse" />
            <line x1="150" y1="50" x2="250" y2="150" className="animate-pulse" />
            <line x1="250" y1="50" x2="350" y2="150" className="animate-pulse" />
          </g>
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-red-400 via-orange-400 to-pink-400 bg-clip-text text-transparent">
            AI Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-mono">
            Cutting-edge machine learning and AI systems that showcase innovation and technical excellence
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-900/50 border border-gray-800 rounded-xl overflow-hidden hover:border-red-500/50 hover:bg-gray-900 transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 p-2 bg-black/50 rounded-full border border-gray-700 group-hover:border-red-500 transition-colors">
                  {project.icon}
                </div>
                <div className="absolute bottom-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a 
                    href={project.github}
                    className="w-10 h-10 bg-black/70 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-gray-800 transition-colors border border-gray-600"
                  >
                    <Github size={16} />
                  </a>
                  <a 
                    href={project.live}
                    className="w-10 h-10 bg-black/70 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-gray-800 transition-colors border border-gray-600"
                  >
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-white">{project.title}</h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-gray-800 border border-gray-700 text-red-400 text-xs rounded-full font-mono hover:border-red-500 transition-colors">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-full hover:from-red-700 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 border border-red-500/50 hover:shadow-xl hover:shadow-red-500/25">
            View Research Portfolio
            <ExternalLink className="ml-2" size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
