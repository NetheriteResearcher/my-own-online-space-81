
import { Mail, MapPin, Phone, Send, Terminal } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Message transmitted successfully! I\'ll process your request soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Matrix-like background */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 text-green-500/20 font-mono text-xs animate-pulse">
          01001000 01100101 01101100 01101100 01101111
        </div>
        <div className="absolute top-32 right-20 text-red-500/20 font-mono text-xs animate-pulse delay-1000">
          import tensorflow as tf
        </div>
        <div className="absolute bottom-20 left-20 text-orange-500/20 font-mono text-xs animate-pulse delay-2000">
          model.compile(optimizer='adam')
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-red-400 via-orange-400 to-pink-400 bg-clip-text text-transparent">
            Initialize Contact
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-mono">
            Ready to collaborate on the next breakthrough in artificial intelligence?
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <h3 className="text-3xl font-bold mb-6 text-white flex items-center">
              <Terminal className="mr-3 text-red-400" />
              Let's Build Something Intelligent
            </h3>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Whether you're looking to implement cutting-edge AI solutions, need research collaboration, 
              or want to discuss the latest developments in machine learning, I'm here to help.
            </p>

            <div className="space-y-6">
              <div className="flex items-center group">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-lg mr-4 group-hover:scale-110 transition-transform duration-300">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="font-semibold text-white font-mono">Email</p>
                  <p className="text-gray-400 font-mono">ai.engineer@example.com</p>
                </div>
              </div>

              <div className="flex items-center group">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-orange-600 to-pink-600 text-white rounded-lg mr-4 group-hover:scale-110 transition-transform duration-300">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="font-semibold text-white font-mono">Phone</p>
                  <p className="text-gray-400 font-mono">+1 (555) AI-BRAIN</p>
                </div>
              </div>

              <div className="flex items-center group">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-pink-600 to-red-600 text-white rounded-lg mr-4 group-hover:scale-110 transition-transform duration-300">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="font-semibold text-white font-mono">Location</p>
                  <p className="text-gray-400 font-mono">Silicon Valley, CA</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-black/50 border border-gray-800 rounded-xl p-8 hover:border-red-500/50 transition-all duration-300">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2 font-mono">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300 text-white font-mono"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2 font-mono">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300 text-white font-mono"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2 font-mono">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300 resize-none text-white font-mono"
                  placeholder="Tell me about your AI project..."
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-lg hover:from-red-700 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 border border-red-500/50 hover:shadow-xl hover:shadow-red-500/25 font-mono"
              >
                Transmit Message
                <Send className="ml-2" size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
