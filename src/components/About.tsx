import React from 'react';
import { Code, Palette, Zap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-emerald-500 mx-auto mb-8"></div>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate full-stack developer with 5+ years of experience creating digital solutions 
            that bridge the gap between design and functionality. I love turning complex problems into 
            simple, beautiful, and intuitive experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <Code className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold text-slate-800">Development</h3>
              </div>
              <p className="text-slate-600">
                Specialized in React, Node.js, and modern web technologies. I build scalable, 
                performant applications with clean, maintainable code.
              </p>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <Palette className="h-8 w-8 text-emerald-600 mr-3" />
                <h3 className="text-xl font-semibold text-slate-800">Design</h3>
              </div>
              <p className="text-slate-600">
                Strong eye for UI/UX design principles. I create interfaces that are not only 
                beautiful but also intuitive and user-friendly.
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <Zap className="h-8 w-8 text-orange-600 mr-3" />
                <h3 className="text-xl font-semibold text-slate-800">Performance</h3>
              </div>
              <p className="text-slate-600">
                Focused on optimization and performance. I ensure applications are fast, 
                accessible, and provide excellent user experiences across all devices.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-slate-800 mb-6">My Journey</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-600 pl-6 py-2">
                  <h4 className="font-semibold text-slate-800">Senior Full-Stack Developer</h4>
                  <p className="text-slate-600">TechCorp Inc. • 2021 - Present</p>
                  <p className="text-sm text-slate-500 mt-2">
                    Leading development of enterprise web applications serving 100K+ users
                  </p>
                </div>
                
                <div className="border-l-4 border-emerald-500 pl-6 py-2">
                  <h4 className="font-semibold text-slate-800">Frontend Developer</h4>
                  <p className="text-slate-600">StartupXYZ • 2019 - 2021</p>
                  <p className="text-sm text-slate-500 mt-2">
                    Built responsive web applications and improved user engagement by 40%
                  </p>
                </div>
                
                <div className="border-l-4 border-orange-500 pl-6 py-2">
                  <h4 className="font-semibold text-slate-800">Junior Developer</h4>
                  <p className="text-slate-600">WebAgency • 2018 - 2019</p>
                  <p className="text-sm text-slate-500 mt-2">
                    Developed custom WordPress themes and plugins for various clients
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;