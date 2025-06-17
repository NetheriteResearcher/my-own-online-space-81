
import { useState, useEffect } from 'react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  const skills = [
    { name: 'Python/PyTorch', level: 95 },
    { name: 'Deep Learning', level: 92 },
    { name: 'Computer Vision', level: 88 },
    { name: 'NLP/LLMs', level: 85 },
    { name: 'MLOps/Kubernetes', level: 80 },
    { name: 'Research & Development', level: 90 }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('skills');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Animated circuit patterns */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-px h-20 bg-gradient-to-b from-red-500 to-transparent animate-pulse"></div>
        <div className="absolute top-40 right-40 w-20 h-px bg-gradient-to-r from-orange-500 to-transparent animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-1/3 w-px h-16 bg-gradient-to-b from-pink-500 to-transparent animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-red-400 via-orange-400 to-pink-400 bg-clip-text text-transparent">
            Technical Arsenal
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-mono">
            Advanced AI/ML technologies and frameworks I leverage to build intelligent systems
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          {skills.map((skill, index) => (
            <div key={skill.name} className="bg-black/50 border border-gray-800 p-6 rounded-xl hover:border-red-500/50 transition-all duration-300 group">
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-semibold text-white font-mono">{skill.name}</span>
                <span className="text-red-400 font-bold font-mono">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-red-500 via-orange-500 to-pink-500 h-3 rounded-full transition-all duration-1000 ease-out relative"
                  style={{
                    width: isVisible ? `${skill.level}%` : '0%',
                    transitionDelay: `${index * 150}ms`
                  }}
                >
                  <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-center mb-8 text-white font-mono">Frameworks & Libraries</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {['PyTorch', 'TensorFlow', 'Hugging Face', 'OpenCV', 'Scikit-learn', 'XGBoost', 'LangChain', 'FastAPI'].map((tech) => (
                <span key={tech} className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-full text-red-400 hover:border-red-500 hover:bg-gray-700 transition-all duration-300 hover:scale-105 font-mono text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-center mb-8 text-white font-mono">Infrastructure & Tools</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {['Docker', 'Kubernetes', 'MLflow', 'Weights & Biases', 'NVIDIA CUDA', 'Apache Spark', 'Redis', 'PostgreSQL'].map((tech) => (
                <span key={tech} className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-full text-orange-400 hover:border-orange-500 hover:bg-gray-700 transition-all duration-300 hover:scale-105 font-mono text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
