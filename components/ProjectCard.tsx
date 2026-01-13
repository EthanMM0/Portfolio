'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Github, ArrowRight } from 'lucide-react';
import { Badge } from './Badge';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  github: string;
  slug: string;
  featured?: boolean;
}

export function ProjectCard({
  title,
  description,
  technologies,
  github,
  slug,
  featured = false
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="group relative h-full"
    >
      <div className="h-full bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm border border-cyan-500/20 rounded-xl overflow-hidden hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20">
        {featured && (
          <div className="absolute top-4 right-4 z-10">
            <span className="px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-bold rounded-full">
              FEATURED
            </span>
          </div>
        )}

        <div className="p-6 flex flex-col h-full">
          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
            {title}
          </h3>

          <p className="text-gray-400 mb-4 flex-grow line-clamp-3">
            {description}
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.slice(0, 4).map((tech) => (
              <Badge key={tech} variant="default">
                {tech}
              </Badge>
            ))}
            {technologies.length > 4 && (
              <Badge variant="default">+{technologies.length - 4}</Badge>
            )}
          </div>

          <div className="flex items-center gap-3 pt-4 border-t border-cyan-500/20">
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <Github className="w-4 h-4" />
              <span>View Code</span>
            </a>
            <Link
              href={`/projects/${slug}`}
              className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors ml-auto group/link"
            >
              <span>Learn More</span>
              <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
