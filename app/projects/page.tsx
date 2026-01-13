'use client';

import { motion } from 'framer-motion';
import { projects } from '@/data/siteContent';
import { SectionHeader } from '@/components/SectionHeader';
import { ProjectCard } from '@/components/ProjectCard';

export default function ProjectsPage() {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader
            title="All Projects"
            subtitle="A collection of my work in software development, cybersecurity, and automation"
            centered
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-12">
          {projects.map((project) => (
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
      </div>
    </div>
  );
}
