'use client';

import { motion } from 'framer-motion';
import { personalInfo, skills, projects } from '@/data/siteContent';
import { CTAButton } from '@/components/CTAButton';
import { Badge } from '@/components/Badge';
import { SectionHeader } from '@/components/SectionHeader';
import { ProjectCard } from '@/components/ProjectCard';
import { Sparkles } from 'lucide-react';

export default function Home() {
  const featuredProjects = projects.filter(p => p.featured);

  return (
    <div className="relative">
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-cyan-500/10 via-transparent to-transparent blur-3xl"></div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span className="text-sm text-cyan-400 font-medium">Available for opportunities</span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
              {personalInfo.name}
            </h1>

            <p className="text-xl sm:text-2xl text-cyan-400 font-semibold mb-4">
              {personalInfo.title}
            </p>

            <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              {personalInfo.tagline}
            </p>

            <p className="text-base text-gray-400 mb-10 leading-relaxed max-w-4xl mx-auto">
              {personalInfo.heroIntro}
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <CTAButton href="/projects" icon variant="primary">
                View Projects
              </CTAButton>
              <CTAButton href="/contact" icon variant="outline">
                Contact Me
              </CTAButton>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-cyan-500/50 rounded-full flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-cyan-400 rounded-full"
            />
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            title="Tech Stack"
            subtitle="Technologies and tools I work with"
            centered
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-3 justify-center max-w-4xl mx-auto"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <Badge variant="default">{skill}</Badge>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            title="Featured Projects"
            subtitle="Highlighting my best work in cybersecurity and full-stack development"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.shortDescription}
                technologies={project.technologies}
                github={project.github}
                slug={project.slug}
                featured={project.featured}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <CTAButton href="/projects" icon variant="outline">
              View All Projects
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  );
}
