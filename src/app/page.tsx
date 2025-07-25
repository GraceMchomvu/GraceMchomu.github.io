import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-200/50 shadow-sm animate-fade-in">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-gray-900 font-bold text-xl animate-scale-in">
              GM
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-700 hover:text-purple-600 transition-colors stagger-1 font-medium">About</a>
              <a href="#skills" className="text-gray-700 hover:text-purple-600 transition-colors stagger-2 font-medium">Skills</a>
              <a href="#projects" className="text-gray-700 hover:text-purple-600 transition-colors stagger-3 font-medium">Projects</a>
              <a href="#contact" className="text-gray-700 hover:text-purple-600 transition-colors stagger-4 font-medium">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="relative mb-12">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-3xl opacity-30 animate-pulse-slow"></div>
            <Image
              src="/WhatsApp Image 2025-07-14 at 10.30.00 AM.jpeg"
              alt="Grace Mchomvu profile photo"
              width={200}
              height={200}
              className="relative rounded-full border-4 border-purple-200 shadow-2xl object-cover mx-auto hover:scale-105 transition-transform duration-500 animate-float"
              priority
            />
          </div>
          
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
              Grace Mchomvu
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-600 mb-8 font-light stagger-1">
              Full-Stack Developer & Software Engineer
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12 stagger-2">
              Crafting digital experiences with clean code, innovative solutions, and a passion for building the future of the web.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center stagger-3">
              <a 
                href="#contact" 
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover-lift"
              >
                Let's Build Something
              </a>
              <a 
                href="#projects" 
                className="border-2 border-purple-500/50 text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-purple-50 transition-all duration-300 transform hover:scale-105 hover-lift"
              >
                View My Work
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-white/50 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-8 animate-gradient"></div>
            <p className="text-xl text-gray-600 leading-relaxed">
              I'm a passionate software developer with expertise in modern web technologies. 
              I specialize in building scalable, performant applications that solve real-world problems. 
              With a strong foundation in both frontend and backend development, I create seamless 
              digital experiences that users love.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/80 backdrop-blur-md rounded-xl p-6 border border-gray-200/50 shadow-lg hover:bg-white transition-all duration-300 animate-slide-in-left stagger-1 hover-lift">
              <div className="text-purple-500 text-4xl mb-4 animate-float">🎯</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Problem Solver</h3>
              <p className="text-gray-600">I approach every project with analytical thinking and creative solutions.</p>
            </div>
            <div className="bg-white/80 backdrop-blur-md rounded-xl p-6 border border-gray-200/50 shadow-lg hover:bg-white transition-all duration-300 animate-fade-in stagger-2 hover-lift">
              <div className="text-purple-500 text-4xl mb-4 animate-float">⚡</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Fast Learner</h3>
              <p className="text-gray-600">Always staying current with the latest technologies and best practices.</p>
            </div>
            <div className="bg-white/80 backdrop-blur-md rounded-xl p-6 border border-gray-200/50 shadow-lg hover:bg-white transition-all duration-300 animate-slide-in-right stagger-3 hover-lift">
              <div className="text-purple-500 text-4xl mb-4 animate-float">🤝</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Team Player</h3>
              <p className="text-gray-600">Collaborative approach with excellent communication skills.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Technical Skills</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-8 animate-gradient"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Frontend Skills */}
            <div className="bg-white/80 backdrop-blur-md rounded-xl p-8 border border-gray-200/50 shadow-lg animate-slide-in-left stagger-1 hover-lift">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Frontend Development</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between text-gray-700 mb-2">
                    <span>React.js</span>
                    <span>95%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-purple-600 to-pink-600 h-2 rounded-full progress-animate" style={{width: '95%', '--progress-width': '95%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-gray-700 mb-2">
                    <span>Next.js</span>
                    <span>90%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-purple-600 to-pink-600 h-2 rounded-full progress-animate" style={{width: '90%', '--progress-width': '90%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-gray-700 mb-2">
                    <span>TypeScript</span>
                    <span>85%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-purple-600 to-pink-600 h-2 rounded-full progress-animate" style={{width: '85%', '--progress-width': '85%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-gray-700 mb-2">
                    <span>Tailwind CSS</span>
                    <span>90%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-purple-600 to-pink-600 h-2 rounded-full progress-animate" style={{width: '90%', '--progress-width': '90%'}}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Backend Skills */}
            <div className="bg-white/80 backdrop-blur-md rounded-xl p-8 border border-gray-200/50 shadow-lg animate-slide-in-right stagger-2 hover-lift">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Backend Development</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between text-gray-700 mb-2">
                    <span>Node.js</span>
                    <span>88%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-purple-600 to-pink-600 h-2 rounded-full progress-animate" style={{width: '88%', '--progress-width': '88%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-gray-700 mb-2">
                    <span>Python</span>
                    <span>80%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-purple-600 to-pink-600 h-2 rounded-full progress-animate" style={{width: '80%', '--progress-width': '80%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-gray-700 mb-2">
                    <span>PostgreSQL</span>
                    <span>85%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-purple-600 to-pink-600 h-2 rounded-full progress-animate" style={{width: '85%', '--progress-width': '85%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-gray-700 mb-2">
                    <span>Docker</span>
                    <span>75%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-purple-600 to-pink-600 h-2 rounded-full progress-animate" style={{width: '75%', '--progress-width': '75%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-white/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Featured Projects</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-8 animate-gradient"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="group relative bg-white/90 backdrop-blur-md rounded-xl overflow-hidden border border-gray-200/50 shadow-lg hover:bg-white transition-all duration-500 transform hover:-translate-y-2 animate-scale-in stagger-1 hover-lift">
              <div className="h-48 bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
                <div className="text-white text-6xl animate-float">💼</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">E-commerce Platform</h3>
                <p className="text-gray-600 mb-4">
                  Full-stack e-commerce solution with Next.js, Supabase, and Stripe integration.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">Next.js</span>
                  <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm">Supabase</span>
                  <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">Stripe</span>
                </div>
                <div className="flex gap-3">
                  <a href="#" className="text-purple-600 hover:text-purple-700 transition-colors">Live Demo</a>
                  <a href="#" className="text-purple-600 hover:text-purple-700 transition-colors">Source Code</a>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="group relative bg-white/90 backdrop-blur-md rounded-xl overflow-hidden border border-gray-200/50 shadow-lg hover:bg-white transition-all duration-500 transform hover:-translate-y-2 animate-scale-in stagger-2 hover-lift">
              <div className="h-48 bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                <div className="text-white text-6xl animate-float">📝</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Blog CMS</h3>
                <p className="text-gray-600 mb-4">
                  Modern blog platform with Sanity.io CMS and advanced content management.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">Sanity.io</span>
                  <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">Next.js</span>
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">Tailwind</span>
                </div>
                <div className="flex gap-3">
                  <a href="#" className="text-blue-600 hover:text-blue-700 transition-colors">Live Demo</a>
                  <a href="#" className="text-blue-600 hover:text-blue-700 transition-colors">Source Code</a>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="group relative bg-white/90 backdrop-blur-md rounded-xl overflow-hidden border border-gray-200/50 shadow-lg hover:bg-white transition-all duration-500 transform hover:-translate-y-2 animate-scale-in stagger-3 hover-lift">
              <div className="h-48 bg-gradient-to-br from-green-600 to-blue-600 flex items-center justify-center">
                <div className="text-white text-6xl animate-float">🎯</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Task Manager</h3>
                <p className="text-gray-600 mb-4">
                  Real-time task management app with drag-and-drop functionality.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">React</span>
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">Node.js</span>
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">Socket.io</span>
                </div>
                <div className="flex gap-3">
                  <a href="#" className="text-green-600 hover:text-green-700 transition-colors">Live Demo</a>
                  <a href="#" className="text-green-600 hover:text-green-700 transition-colors">Source Code</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 animate-fade-in">Let's Work Together</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-12 animate-gradient"></div>
          
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto stagger-1">
            I'm always open to discussing new opportunities, exciting projects, and innovative ideas.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white/80 backdrop-blur-md rounded-xl p-8 border border-gray-200/50 shadow-lg animate-slide-in-left stagger-2 hover-lift">
              <div className="text-purple-500 text-3xl mb-4 animate-float">📧</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Email</h3>
              <a href="mailto:gracejoshuagm@gmail.com" className="text-purple-600 hover:text-purple-700 transition-colors">
                gracejoshuagm@gmail.com
              </a>
            </div>
            <div className="bg-white/80 backdrop-blur-md rounded-xl p-8 border border-gray-200/50 shadow-lg animate-slide-in-right stagger-3 hover-lift">
              <div className="text-purple-500 text-3xl mb-4 animate-float">📱</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Phone</h3>
              <a href="tel:+255627780637" className="text-purple-600 hover:text-purple-700 transition-colors">
                +255 627 780 637
              </a>
            </div>
          </div>
          
          <a 
            href="mailto:gracejoshuagm@gmail.com" 
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-12 py-4 rounded-full font-semibold text-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg inline-block animate-scale-in stagger-4 hover-lift"
          >
            Start a Conversation
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-200/50 animate-fade-in">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-500">
            © 2024 Grace Mchomvu. Built with ❤️ using Next.js & Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
}
