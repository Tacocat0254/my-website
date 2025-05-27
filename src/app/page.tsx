import Image from "next/image";
import Navbar from '@/components/Navbar';
import ScrollPaws from '@/components/ScrollPaws';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-orange-50">
      <Navbar />
      <ScrollPaws />
      
      {/* Hero Section - Full Viewport Height */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Cat-themed background decorations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Floating paw prints */}
          <div className="cat-paw animate-paw" style={{ top: '10%', left: '10%', animationDelay: '0s' }}></div>
          <div className="cat-paw animate-paw" style={{ top: '20%', right: '15%', animationDelay: '1s' }}></div>
          <div className="cat-paw animate-paw" style={{ bottom: '15%', left: '20%', animationDelay: '2s' }}></div>
          <div className="cat-paw animate-paw" style={{ bottom: '25%', right: '25%', animationDelay: '3s' }}></div>
          
          {/* Gradient orbs */}
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-rose-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: '4s' }}></div>
        </div>

        <div className="max-w-3xl mx-auto text-center relative z-10">
          <div className="glass-card rounded-2xl p-8 sm:p-12 hover-lift">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-8 gradient-text leading-[1.2] lavigne-text">
              Emily Liang
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 dark:text-white mb-8 font-medium leading-relaxed">
            Computer Science, Mathematics, and Business <br />
            Student at UT Austin
            </p>
            <div className="space-y-4 text-lg sm:text-xl">
              <p className="text-gray-600 dark:text-white">
                <a href="mailto:emilyliangyr@gmail.com" 
                   className="hover:text-pink-600 dark:hover:text-purple-400 transition-colors inline-flex items-center hover-lift group">
                  <svg className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  emilyliangyr@gmail.com
                </a>
              </p>
              <p className="text-gray-600 dark:text-white">
                <a href="tel:+6822054481" 
                   className="hover:text-pink-600 dark:hover:text-purple-400 transition-colors inline-flex items-center hover-lift group">
                  <svg className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  (682) 205-4481
                </a>
              </p>
            </div>
            <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#about" 
                className="gradient-bg inline-flex items-center px-8 py-4 border border-transparent text-base font-medium rounded-full text-white hover:shadow-lg transition-all hover-lift group"
              >
                Learn More About Me!
                <svg className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </a>
              <a 
                href="#projects" 
                className="glass-card inline-flex items-center px-8 py-4 border border-pink-200 text-base font-medium rounded-full text-gray-700 dark:text-white hover:bg-pink-50 transition-all hover-lift group"
              >
                View My Projects
                <svg className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="cat-paw animate-paw" style={{ top: '10%', right: '10%' }}></div>
        <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 gradient-text text-center lavigne-text">About Me</h2>
          {/* Profile Section */}
          <div className="glass-card rounded-2xl p-8 mb-12 hover-lift">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Profile Image Container */}
              <div className="relative">
                <div className="aspect-square relative rounded-2xl overflow-hidden">
        <Image
                    src="/profile.jpg"
                    alt="Profile picture"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
                  {/* Decorative paw prints */}
                  <div className="absolute -top-4 -right-4 w-12 h-12 cat-paw animate-paw opacity-70"></div>
                  <div className="absolute -bottom-4 -left-4 w-12 h-12 cat-paw animate-paw opacity-70" style={{ animationDelay: '1s' }}></div>
                </div>
                {/* Decorative frame */}
                <div className="absolute inset-0 rounded-2xl border-4 border-pink-200/50 transform rotate-3 scale-105 -z-10"></div>
                <div className="absolute inset-0 rounded-2xl border-4 border-orange-200/50 transform -rotate-3 scale-105 -z-10"></div>
              </div>

              {/* Profile Info */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-2 text-gray-900 lavigne-text">Emily Liang</h3>
                  <p className="text-pink-600 dark:text-purple-500 font-medium">Turing Scholar (Computer Science Honors)</p>
                </div>
                <div className="prose prose-lg text-gray-600">
                  <p>
                    I am pursuing a BS in Computer Science and Mathematics as well as a Minor in Business as a Turing Scholar at the University of Texas at Austin.
                  </p>
                </div>
                {/* Quick Facts */}
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="glass-card p-4 rounded-xl hover-lift">
                    <h4 className="font-medium text-gray-900 mb-1">Location</h4>
                    <p className="text-gray-600">Austin, TX</p>
                  </div>
                  <div className="glass-card p-4 rounded-xl hover-lift">
                    <h4 className="font-medium text-gray-900 mb-1">Education</h4>
                    <p className="text-gray-600">UT Austin</p>
                  </div>
                  <div className="glass-card p-4 rounded-xl hover-lift">
                    <h4 className="font-medium text-gray-900 mb-1">Experience</h4>
                    <p className="text-gray-600">3 years</p>
                  </div>
                  <div className="glass-card p-4 rounded-xl hover-lift">
                    <h4 className="font-medium text-gray-900 mb-1">Interests</h4>
                    <p className="text-gray-600">Rock Climbing, Hiking, and Photography</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional About Content */}
          <div className="glass-card rounded-2xl p-8 hover-lift">
            <div className="prose prose-lg text-gray-600">
              <p>
                As a Turing Scholar at UT Austin, I am passionate about bridging the gap between theoretical computer science and practical applications. My journey in technology began with a curiosity about how computers work 
                at their core. My interests span from low-level systems programming to AI/ML. </p>
              <p className="mt-4">
                Beyond coding, I am an avid rock climber and hiker, finding that the problem-solving skills I develop on the wall often translate to my technical work. I believe in creating technology that is not just innovative, but also accessible and impactful.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="cat-paw animate-paw" style={{ bottom: '10%', left: '10%' }}></div>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 gradient-text text-center lavigne-text">Skills</h2>
          
          {/* Overall Description */}
          <div className="glass-card p-8 rounded-2xl mb-12 hover-lift">
            <div className="prose prose-lg text-gray-600 mx-auto">
              <p className="text-center">
                My technical expertise spans from front-end frameworks to systems programming, with a strong foundation in computer science principles.
              </p>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Programming Languages */}
            <div className="glass-card p-6 rounded-2xl hover-lift">
              <div className="flex items-center space-x-3 mb-4">
                <svg className="w-8 h-8 text-pink-500 dark:text-purple-500" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                </svg>
                <h3 className="font-semibold text-gray-900 text-lg lavigne-text">Languages</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-pink-500 dark:bg-purple-500 rounded-full"></span>
                  <span>Python</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-pink-500 dark:bg-purple-500 rounded-full"></span>
                  <span>JavaScript/TypeScript</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-pink-500 dark:bg-purple-500 rounded-full"></span>
                  <span>Java</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-pink-500 dark:bg-purple-500 rounded-full"></span>
                  <span>C/C++</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-pink-500 dark:bg-purple-500 rounded-full"></span>
                  <span>Verilog</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-pink-500 dark:bg-purple-500 rounded-full"></span>
                  <span>x86 and ARM Assembly</span>
                </li>
              </ul>
            </div>

            {/* Frontend */}
            <div className="glass-card p-6 rounded-2xl hover-lift">
              <div className="flex items-center space-x-3 mb-4">
                <svg className="w-8 h-8 text-pink-500 dark:text-purple-500" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z"/>
                </svg>
                <h3 className="font-semibold text-gray-900 text-lg lavigne-text">Frontend</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-pink-500 dark:bg-purple-500 rounded-full"></span>
                  <span>React/Next.js</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-pink-500 dark:bg-purple-500 rounded-full"></span>
                  <span>HTML5/CSS3</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-pink-500 dark:bg-purple-500 rounded-full"></span>
                  <span>Tailwind CSS</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-pink-500 dark:bg-purple-500 rounded-full"></span>
                  <span>Responsive Design</span>
                </li>
              </ul>
            </div>

            {/* Backend */}
            <div className="glass-card p-6 rounded-2xl hover-lift">
              <div className="flex items-center space-x-3 mb-4">
                <svg className="w-8 h-8 text-pink-500 dark:text-purple-500" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.07.62-.07.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/>
                </svg>
                <h3 className="font-semibold text-gray-900 text-lg lavigne-text">Backend</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-pink-500 dark:bg-purple-500 rounded-full"></span>
                  <span>Node.js</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-pink-500 dark:bg-purple-500 rounded-full"></span>
                  <span>Express.js</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-pink-500 dark:bg-purple-500 rounded-full"></span>
                  <span>SQL/NoSQL</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-pink-500 dark:bg-purple-500 rounded-full"></span>
                  <span>RESTful APIs</span>
                </li>
              </ul>
            </div>

            {/* Libraries */}
            <div className="glass-card p-6 rounded-2xl hover-lift">
              <div className="flex items-center space-x-3 mb-4">
                <svg className="w-8 h-8 text-pink-500 dark:text-purple-500" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z"/>
                </svg>
                <h3 className="font-semibold text-gray-900 text-lg lavigne-text">Libraries</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-pink-500 dark:bg-purple-500 rounded-full"></span>
                  <span>pandas</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-pink-500 dark:bg-purple-500 rounded-full"></span>
                  <span>NumPy</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-pink-500 dark:bg-purple-500 rounded-full"></span>
                  <span>Matplotlib</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-pink-500 dark:bg-purple-500 rounded-full"></span>
                  <span>Scikit-learn</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-pink-500 dark:bg-purple-500 rounded-full"></span>
                  <span>Keras</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-pink-500 dark:bg-purple-500 rounded-full"></span>
                  <span>TensorFlow</span>
                </li>
              </ul>
            </div>

            {/* Coursework */}
            <div className="glass-card p-6 rounded-2xl hover-lift">
              <div className="flex items-center space-x-3 mb-4">
                <svg className="w-8 h-8 text-pink-500 dark:text-purple-500" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9h-4v4h-2v-4H9V9h4V5h2v4h4v2z"/>
                </svg>
                <h3 className="font-semibold text-gray-900 text-lg lavigne-text">Coursework</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-pink-500 dark:bg-purple-500 rounded-full"></span>
                  <span>Honors Operating Systems</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-pink-500 dark:bg-purple-500 rounded-full"></span>
                  <span>Honors Computer Architecture</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-pink-500 dark:bg-purple-500 rounded-full"></span>
                  <span>Honors Data Structures</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-pink-500 dark:bg-purple-500 rounded-full"></span>
                  <span>Honors Discrete Mathematics</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-pink-500 dark:bg-purple-500 rounded-full"></span>
                  <span>Artificial Intelligence</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-pink-500 dark:bg-purple-500 rounded-full"></span>
                  <span>Software Engineering</span>
                </li>
              </ul>
            </div>

            {/* Tools & Others */}
            <div className="glass-card p-6 rounded-2xl hover-lift">
              <div className="flex items-center space-x-3 mb-4">
                <svg className="w-8 h-8 text-pink-500 dark:text-purple-500" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/>
                </svg>
                <h3 className="font-semibold text-gray-900 text-lg lavigne-text">Tools & Others</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-pink-500 dark:bg-purple-500 rounded-full"></span>
                  <span>Git/GitHub</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-pink-500 dark:bg-purple-500 rounded-full"></span>
                  <span>Docker</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-pink-500 dark:bg-purple-500 rounded-full"></span>
                  <span>Jupyter Notebook</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-pink-500 dark:bg-purple-500 rounded-full"></span>
                  <span>IntelliJ IDEA</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-pink-500 dark:bg-purple-500 rounded-full"></span>
                  <span>VS Code</span>
          </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section id="work" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="cat-paw animate-paw" style={{ top: '20%', left: '15%' }}></div>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 gradient-text lavigne-text">Experience</h2>
          <div className="space-y-8">
            {/* Undergraduate Research Assistant */}
            <div className="glass-card p-6 rounded-2xl hover-lift border-l-4 border-pink-500">
              <h3 className="text-xl font-semibold text-gray-900">Undergraduate Research Assistant</h3>
              <p className="text-gray-600">The University of Texas at Austin • Jan 2025-present</p>
              <ul className="mt-2 text-gray-600 list-disc list-inside space-y-1">
                <li>Assist with ROS (Robot Operating System) implementation and testing.</li>
                <li>Conduct experiments with AugRE (Augmented Robot Environment to Facilitate Human-Robot Teaming).</li>
                <li>Standardized data collection procedures, ensuring consistent data formatting, and accelerated experimental analysis by
                15% through enhanced data usability.</li>
              </ul>
            </div>

            {/* Longhorn Racing Internal Combustion */}
            <div className="glass-card p-6 rounded-2xl hover-lift border-l-4 border-pink-500">
              <h3 className="text-xl font-semibold text-gray-900">Simulation and Validation Engineer</h3>
              <p className="text-gray-600">Longhorn Racing Internal Combustion • September 2024-present</p>
              <ul className="mt-2 text-gray-600 list-disc list-inside space-y-1">
                <li>Collaborated on LapSim (vehicular simulation) to drive 10+ engineering design choices.</li>
                <li>Built an automated graph generation tool, decreasing the time spent on creating visualizations by 60% and enabling faster identification of key trends from collected datasets.</li>
              </ul>
            </div>
            
            {/* First-Year Trading and Technology Program (FTTP) */}
            <div className="glass-card p-6 rounded-2xl hover-lift border-l-4 border-pink-500">
              <h3 className="text-xl font-semibold text-gray-900">First-Year Trading and Technology Program (FTTP)</h3>
              <p className="text-gray-600">Jane Street • March 2025</p>
              <ul className="mt-2 text-gray-600 list-disc list-inside space-y-1">
                <li>Jane Street&apos;s First Year Trading and Technology 3-day program in NYC.</li>
                <li>Chosen as one of 100 students across the US and Canada to attend.</li>
                <li> Used a game theoretic and mathematical approach while competing in an Estimathon to determine an appropriate range of values for trivia questions.</li>
              </ul>
            </div>

            {/* Software Engineering Intern */}
            <div className="glass-card p-6 rounded-2xl hover-lift border-l-4 border-pink-500">
              <h3 className="text-xl font-semibold text-gray-900">Software Engineering Intern</h3>
              <p className="text-gray-600">Lockheed Martin Aeronautics • September 2023 – May 2024</p>
              <ul className="mt-2 text-gray-600 list-disc list-inside space-y-1">
                <li>Developed a version compatibility lookup tool, reducing software mismatch by 70% and streamlining coordination.</li>
                <li>Collaborated the Air Force Research Laboratory, L3 Harris, and Raytheon on research effort.</li>
              </ul>
            </div>

            {/* Technology Project Manager */}
            <div className="glass-card p-6 rounded-2xl hover-lift border-l-4 border-pink-500">
              <h3 className="text-xl font-semibold text-gray-900">Technology Project Manager</h3>
              <p className="text-gray-600">Keller Independent School District • September 2023 – September 2024</p>
              <ul className="mt-2 text-gray-600 list-disc list-inside space-y-1">
                <li>Led a team of 10 to support district-wide technology deployment for 35,000 students and 4,000 faculty members.</li>
                <li>Delivered training to 100+ educators on EdTech platforms, reducing software onboarding issues by 50% and ensuring
                seamless technology adoption across 40+ campuses.</li>
              </ul>
            </div>

            {/* Summer Swim Instructor */}
            <div className="glass-card p-6 rounded-2xl hover-lift border-l-4 border-pink-500">
              <h3 className="text-xl font-semibold text-gray-900">Summer Swim Instructor</h3>
              <p className="text-gray-600">Lakeside Aquatics Club • May 2023 – September 2024</p>
              <ul className="mt-2 text-gray-600 list-disc list-inside space-y-1">
                <li>Demonstrated expertise in various swim strokes, techniques, and water safety protocols.</li>
                <li>Conducted assessments to evaluate participants&apos; swimming abilities and designed customized lesson plans to meet their specific needs and goals.</li>
                <li>Created a safe and supportive learning environment, ensuring the well-being and comfort of participants, ages 3-15  at all times.</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="cat-paw animate-paw" style={{ bottom: '15%', right: '15%' }}></div>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 gradient-text lavigne-text">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* JPEB */}
            <div className="glass-card rounded-2xl overflow-hidden hover-lift">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">JPEB: 16-bit Computer</h3>
                <p className="mt-2 text-gray-600">Custom 16-bit computer from scratch, including a custom ISA
                inspired by Dr. Bruce Jacob&apos;s RiSC-16, compiler, assembler, processor, and emulator.</p>
                <div className="mt-4">
                  <a 
                    href="https://github.com/PaulBailey-1/JPEB" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-coral-600 dark:text-purple-600 hover:text-coral-800 inline-flex items-center hover-lift group"
                  >
                    Learn more
                    <svg className="w-5 h-5 ml-1 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Stock Market Prediction */}
            <div className="glass-card rounded-2xl overflow-hidden hover-lift">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">Stock Market Prediction</h3>
                <p className="mt-2 text-gray-600">This project explores the use of deep learning—specifically Long Short-Term Memory (LSTM) networks—to analyze and forecast stock market trends.</p>
                <div className="mt-4">
                  <a 
                    href="https://github.com/Tacocat0254/Stock_Market_Prediction" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-coral-600 dark:text-purple-600 hover:text-coral-800 inline-flex items-center hover-lift group"
                  >
                    Learn more
                    <svg className="w-5 h-5 ml-1 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Vision Guardian */}
            <div className="glass-card rounded-2xl overflow-hidden hover-lift">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">Vision Guardian</h3>
                <p className="mt-2 text-gray-600">Built a video-based glaucoma and cataract detection system using OpenCV, MediaPipe, and TensorFlow for 
                accessible healthcare technology.</p>
                <div className="mt-4">
                  <a 
                    href="https://www.youtube.com/watch?v=NoIVd9jywiw" 
            target="_blank"
            rel="noopener noreferrer"
                    className="text-coral-600 dark:text-purple-600 hover:text-coral-800 inline-flex items-center hover-lift group"
                  >
                    Learn more
                    <svg className="w-5 h-5 ml-1 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>


          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-20 relative">

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Decorative elements */}
            <div className="absolute -top-6 -left-6 w-12 h-12 bg-pink-400/50 dark:bg-purple-900/50 rounded-full opacity-50 animate-float"></div>
            <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-pink-400/50 dark:bg-blue-900/50 rounded-full opacity-50 animate-float-delayed"></div>

            
            <div className="relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-pink-100 dark:border-purple-900/30">
              <h2 className="lavigne-text text-4xl font-bold mb-8 text-center gradient-text">
                Resume
              </h2>
              
              <div className="text-center space-y-6">
                <p className="text-gray-600 dark:text-white text-lg">
                  View my detailed resume to learn more about my experience and qualifications.
                </p>
                <a
                  href={`${process.env.NODE_ENV === 'production' ? '' : ''}/resume.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 rounded-full 
            bg-gradient-to-r from-pink-400 to-orange-400 
            dark:from-purple-600 dark:to-purple-900 
            text-white font-medium 
            hover:from-coral-500 hover:to-orange-500 
            dark:hover:from-purple-900 dark:hover:to-blue-900
            transition-all duration-300 
            shadow-lg dark:shadow-md 
            hover:shadow-xl dark:hover:shadow-lg 
            transform hover:-translate-y-0.5"
                    >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  View Resume
          </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-center space-x-8">
            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/emilyliangyr"
          target="_blank"
          rel="noopener noreferrer"
              className="text-gray-600 hover:text-coral-600 dark:hover:text-purple-600 transition-colors hover-lift group"
              aria-label="LinkedIn Profile"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/Tacocat0254"
          target="_blank"
          rel="noopener noreferrer"
              className="text-gray-600 hover:text-coral-600 dark:hover:text-purple-600 transition-colors hover-lift group"
              aria-label="GitHub Profile"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>

            {/* Discord */}
            <a
              href="https://discord.com/users/tacocat0254"
          target="_blank"
          rel="noopener noreferrer"
              className="text-gray-600 hover:text-coral-600 dark:hover:text-purple-600 transition-colors hover-lift group"
              aria-label="Discord Profile"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
              </svg>
            </a>
          </div>
          <div className="mt-8 text-center text-gray-600">
            <p>© {new Date().getFullYear()} Emily Liang. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
