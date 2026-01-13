'use client';

import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  subtitle: string;
  icon: string;
  description: string;
  whatICanDo: string[];
  toolsIUse: string[];
  whyImAFit: string[];
}

export function ServiceCard({
  title,
  subtitle,
  icon,
  description,
  whatICanDo,
  toolsIUse,
  whyImAFit
}: ServiceCardProps) {
  const Icon = (Icons[icon as keyof typeof Icons] || Icons.Code2) as LucideIcon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="group h-full"
    >
      <div className="h-full bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-8 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20">
        <div className="flex items-start gap-4 mb-6">
          <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-500/30 flex items-center justify-center group-hover:scale-110 transition-transform">
            <Icon className="w-7 h-7 text-cyan-400" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">
              {title}
            </h3>
            <p className="text-cyan-400 text-sm font-medium">{subtitle}</p>
          </div>
        </div>

        <p className="text-gray-400 mb-6">{description}</p>

        <div className="space-y-6">
          <div>
            <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
              What I Can Do
            </h4>
            <ul className="space-y-2">
              {whatICanDo.map((item, index) => (
                <li key={index} className="text-sm text-gray-400 flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-400"></span>
              Tools I Use
            </h4>
            <ul className="space-y-2">
              {toolsIUse.map((item, index) => (
                <li key={index} className="text-sm text-gray-400 flex items-start gap-2">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-violet-400"></span>
              Why I'm a Fit
            </h4>
            <ul className="space-y-2">
              {whyImAFit.map((item, index) => (
                <li key={index} className="text-sm text-gray-400 flex items-start gap-2">
                  <span className="text-violet-400 mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
