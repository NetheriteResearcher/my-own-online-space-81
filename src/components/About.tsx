
import { Code, Palette, Zap } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Clean Code",
      description: "Writing maintainable, scalable code with best practices and modern technologies."
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Design Focused",
      description: "Creating beautiful, user-centered designs that enhance the overall experience."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Performance",
      description: "Optimizing applications for speed, efficiency, and exceptional performance."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I'm a passionate developer with over 5 years of experience creating digital solutions that matter.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="w-full h-96 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center">
              <div className="text-8xl font-bold text-blue-600/20">👨‍💻</div>
            </div>
          </div>
          
          <div>
            <h3 className="text-3xl font-bold mb-6 text-gray-900">
              Building the Future, One Line at a Time
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              My journey in technology started with curiosity and has evolved into a passion for creating 
              meaningful digital experiences. I specialize in full-stack development, with expertise in 
              modern frameworks and a keen eye for design.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              When I'm not coding, you'll find me exploring new technologies, contributing to open source 
              projects, or sharing knowledge with the developer community.
            </p>
            <button className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Download Resume
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 rounded-xl bg-gray-50 hover:bg-white hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full mb-4">
                {feature.icon}
              </div>
              <h4 className="text-xl font-bold mb-3 text-gray-900">{feature.title}</h4>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
