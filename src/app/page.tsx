import Image from "next/image";
import Navbar from '@/components/Navbar';
import ScrollPaws from '@/components/ScrollPaws';
import { experience, projects, skillGroups } from '@/data/profile';

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
            Computer Science &amp; Mathematics <br />
            Turing Scholar at UT Austin
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
                <a href="tel:+16822054481"
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
                    alt="Emily Liang"
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
                    I am a Turing Scholar at the University of Texas at Austin, pursuing a B.S. in Computer Science, a B.S. in Mathematics, and a minor in Business. I expect to graduate in May 2028.
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
                    <h4 className="font-medium text-gray-900 mb-1">Graduation</h4>
                    <p className="text-gray-600">May 2028 (expected)</p>
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
                My work spans optimization, simulation, and systems programming. At Base Power, I developed battery dispatch strategies for the ERCOT electricity market. I also lead Longhorn Racing’s simulation and validation team and mentor UT Austin students as an undergraduate course assistant. </p>
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
                I use mathematical modeling, data analysis, and systems programming to build and evaluate software, from battery dispatch strategies to operating systems.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillGroups.map((group) => (
              <div key={group.title} className="glass-card p-6 rounded-2xl hover-lift">
                <h3 className="font-semibold text-gray-900 text-lg lavigne-text mb-4">{group.title}</h3>
                <ul className="space-y-2 text-gray-600">
                  {group.items.map((item) => <li key={item} className="flex items-start gap-2"><span aria-hidden="true" className="w-2 h-2 mt-2 shrink-0 bg-pink-500 dark:bg-purple-500 rounded-full" />{item}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section id="work" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="cat-paw animate-paw" style={{ top: '20%', left: '15%' }}></div>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 gradient-text lavigne-text">Experience</h2>
          <div className="space-y-8">

            {experience.map((role) => (
              <article key={role.company} className="glass-card p-6 rounded-2xl hover-lift border-l-4 border-pink-500">
                <h3 className="text-xl font-semibold text-gray-900">{role.title}</h3>
                <p className="text-gray-600 mt-1">{role.company} • {role.dates}</p>
                <p className="text-sm text-gray-600 mt-1">{role.location}</p>
                <ul className="mt-3 text-gray-600 list-disc pl-5 space-y-2">
                  {role.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                </ul>
              </article>
            ))}

          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="cat-paw animate-paw" style={{ bottom: '15%', right: '15%' }}></div>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 gradient-text lavigne-text">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {projects.map((project) => (
              <article key={project.title} className="glass-card rounded-2xl p-6 hover-lift">
                <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                <p className="text-sm font-medium text-pink-700 dark:text-purple-300 mt-2">{project.technologies}</p>
                <ul className="mt-4 text-gray-600 list-disc pl-5 space-y-2">
                  {project.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                </ul>
                {project.href && <a href={project.href} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex text-coral-700 dark:text-purple-300 hover:underline">View project →</a>}
              </article>
            ))}

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
                  Explore my experience in quantitative development, simulation, and systems engineering, along with my education and technical skills.
                </p>
                <a
                  href="/resume.pdf"
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
