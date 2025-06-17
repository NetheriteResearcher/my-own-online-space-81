
import { Brain, Cpu, Database, Network } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Neural Networks",
      description: "Designing and implementing deep learning architectures for complex problem solving."
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Model Optimization",
      description: "Fine-tuning AI models for maximum performance and efficiency in production."
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Data Engineering",
      description: "Building robust pipelines for data processing and feature engineering at scale."
    },
    {
      icon: <Network className="w-8 h-8" />,
      title: "MLOps",
      description: "Deploying and monitoring machine learning systems in production environments."
    }
  ];

  return (
    <section id="about" className="py-20 bg-black relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-900/20 to-purple-900/20"></div>
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
        <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-purple-400 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-ping delay-2000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-mono">
            AI Engineer specializing in cutting-edge machine learning solutions and intelligent systems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative">
            <div className="w-full h-96 bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-gray-800 flex items-center justify-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="text-8xl font-bold text-blue-500/30 relative z-10 transition-transform duration-500 group-hover:scale-110">
                🧠
              </div>
              <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-50"></div>
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-4xl font-bold text-white mb-6">
              Building Intelligence, One Algorithm at a Time
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              With expertise in deep learning, computer vision, and natural language processing, 
              I develop AI systems that push the boundaries of what's possible. My work spans 
              from research prototypes to production-ready machine learning platforms.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Passionate about emerging technologies like transformer architectures, reinforcement 
              learning, and edge AI deployment. Always exploring the intersection of theoretical 
              research and practical applications.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              {['PyTorch', 'TensorFlow', 'Hugging Face', 'MLflow', 'Kubernetes'].map((tech) => (
                <span key={tech} className="px-4 py-2 bg-gray-900 border border-gray-700 rounded-full text-blue-400 text-sm font-mono hover:border-blue-500 transition-colors">
                  {tech}
                </span>
              ))}
            </div>
            <button className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 border border-blue-500/50 mt-6">
              Download Research Papers
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 rounded-xl bg-gray-900/50 border border-gray-800 hover:border-blue-500/50 hover:bg-gray-900 transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h4 className="text-xl font-bold mb-3 text-white">{feature.title}</h4>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
