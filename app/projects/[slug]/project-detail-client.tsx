'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Github, ArrowLeft } from 'lucide-react';
import { Badge } from '@/components/Badge';
import { CTAButton } from '@/components/CTAButton';

type Project = {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  github: string;
  featured?: boolean;
  technologies: string[];
  features: string[];
  whatIBuilt: string;
  whatILearned: string;
  image?: string;
};

export default function ProjectDetailClient({
  project,
}: {
  project: Project;
}) {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Projects</span>
          </Link>

          <div className="bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border border-cyan-500/30 rounded-2xl p-12 mb-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-radial from-cyan-500/20 via-transparent to-transparent blur-3xl"></div>

            <div className="relative z-10">
              {project.featured && (
                <span className="inline-block px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-bold rounded-full mb-4">
                  FEATURED PROJECT
                </span>
              )}

              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
                {project.title}
              </h1>

              <p className="text-xl text-gray-300 mb-6">{project.shortDescription}</p>

              <div className="flex flex-wrap gap-3">
                <CTAButton href={project.github} external icon variant="primary">
                  <Github className="w-4 h-4" />
                  View on GitHub
                </CTAButton>
              </div>
            </div>
          </div>

          <div className="space-y-12">
            <section>
              <h2 className="text-3xl font-bold text-white mb-4">Overview</h2>
              <p className="text-gray-400 leading-relaxed text-lg">{project.fullDescription}</p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-6">Technologies Used</h2>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="primary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-6">Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-6 hover:border-cyan-400/50 transition-all"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-cyan-400 mt-2"></div>
                      <p className="text-gray-300 flex-1">{feature}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            <section className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">What I Built</h2>
                <p className="text-gray-400 leading-relaxed">{project.whatIBuilt}</p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white mb-6">What I Learned</h2>
                <p className="text-gray-400 leading-relaxed">{project.whatILearned}</p>
              </div>
            </section>

            <section className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4">Interested in this project?</h2>
              <p className="text-gray-400 mb-6">
                Check out the source code on GitHub or get in touch to discuss similar work.
              </p>
              <div className="flex flex-wrap gap-4">
                <CTAButton href={project.github} external icon variant="primary">
                  <Github className="w-4 h-4" />
                  View Source Code
                </CTAButton>
                <CTAButton href="/contact" icon variant="outline">
                  Get in Touch
                </CTAButton>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
