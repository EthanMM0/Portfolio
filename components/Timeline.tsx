'use client';

import { motion } from 'framer-motion';

interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="space-y-8">
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="flex gap-6 group"
        >
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 border-4 border-gray-900 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg shadow-cyan-500/50">
              <span className="text-white font-bold text-xs">{item.year.split('-')[0].slice(-2)}</span>
            </div>
            {index < items.length - 1 && (
              <div className="w-0.5 h-full bg-gradient-to-b from-cyan-500/50 to-transparent mt-2"></div>
            )}
          </div>

          <div className="flex-1 pb-8">
            <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 group-hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
              <span className="text-cyan-400 text-sm font-semibold">{item.year}</span>
              <h3 className="text-xl font-bold text-white mt-2 mb-2">{item.title}</h3>
              <p className="text-gray-400">{item.description}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
