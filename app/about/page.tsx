'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Download, MapPin, User } from 'lucide-react';
import { personalInfo, timeline, skills } from '@/data/siteContent';
import { SectionHeader } from '@/components/SectionHeader';
import { Timeline } from '@/components/Timeline';
import { Badge } from '@/components/Badge';
import { CTAButton } from '@/components/CTAButton';

export default function AboutPage() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
  const resumeHref = `${basePath}${personalInfo.resume}`;

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full mb-6">
            <User className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-cyan-400 font-medium">Astronaut Profile</span>
          </div>

          <SectionHeader title="About Me" subtitle="Get to know the person behind the code" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-1"
          >
            <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-8 sticky top-24">
              <h3 className="text-2xl font-bold text-white text-center mb-2">
                {personalInfo.name}
              </h3>
              <p className="text-cyan-400 text-center mb-4">
                {personalInfo.title}
              </p>

              <div className="flex items-center justify-center gap-2 text-gray-400 mb-6">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">{personalInfo.location}</span>
              </div>

              <div className="space-y-3">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 w-full px-4 py-3 bg-cyan-500/10 border border-cyan-500/30 rounded-lg text-cyan-400 hover:bg-cyan-500/20 hover:border-cyan-400/50 transition-all"
                >
                  <Linkedin className="w-5 h-5" />
                  <span className="text-sm font-medium">LinkedIn Profile</span>
                </a>

                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 w-full px-4 py-3 bg-cyan-500/10 border border-cyan-500/30 rounded-lg text-cyan-400 hover:bg-cyan-500/20 hover:border-cyan-400/50 transition-all"
                >
                  <Github className="w-5 h-5" />
                  <span className="text-sm font-medium">@EthanMM0</span>
                </a>

                <a
                  href={resumeHref}
                  download="Ethan Micciola Resume.pdf"
                  className="flex items-center gap-3 w-full px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg text-white hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
                >
                  <Download className="w-5 h-5" />
                  <span className="text-sm font-medium">Download Resume</span>
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="md:col-span-2 space-y-12"
          >
            <section>
              <h2 className="text-3xl font-bold text-white mb-6">My Story</h2>
              <div className="space-y-4 text-gray-400 leading-relaxed">
                {personalInfo.aboutText.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-6">Core Competencies</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-cyan-400 mb-3">Development</h3>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li>• Full-stack web applications</li>
                    <li>• Desktop & console utilities</li>
                    <li>• API design & integration</li>
                    <li>• Database management</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-blue-400 mb-3">Security</h3>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li>• SIEM workflows & monitoring</li>
                    <li>• Risk assessment (NIST)</li>
                    <li>• Secure coding practices</li>
                    <li>• Linux system security</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-violet-400 mb-3">Cloud & DevOps</h3>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li>• AWS deployment & management</li>
                    <li>• Environment automation</li>
                    <li>• CI/CD awareness</li>
                    <li>• Docker containerization</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-emerald-400 mb-3">Soft Skills</h3>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li>• Agile team collaboration</li>
                    <li>• Clear technical communication</li>
                    <li>• Problem-solving mindset</li>
                    <li>• Continuous learning</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-6">Journey Timeline</h2>
              <Timeline items={timeline} />
            </section>

            <section className="bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border border-cyan-500/30 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4">Want to work together?</h2>
              <p className="text-gray-300 mb-6">
                I'm always interested in hearing about new opportunities and collaborations.
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>
              <CTAButton href="/contact" icon variant="primary">
                Get in Touch
              </CTAButton>
            </section>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
