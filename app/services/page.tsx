'use client';

import { motion } from 'framer-motion';
import { services } from '@/data/siteContent';
import { SectionHeader } from '@/components/SectionHeader';
import { ServiceCard } from '@/components/ServiceCard';
import { CTAButton } from '@/components/CTAButton';
import { Target } from 'lucide-react';

export default function ServicesPage() {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full mb-6">
            <Target className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-cyan-400 font-medium">Mission Control</span>
          </div>

          <SectionHeader
            title="What I Can Do For You"
            subtitle="Looking for opportunities in these roles where I can contribute and grow"
            centered
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              subtitle={service.subtitle}
              icon={service.icon}
              description={service.description}
              whatICanDo={service.whatICanDo}
              toolsIUse={service.toolsIUse}
              whyImAFit={service.whyImAFit}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border border-cyan-500/30 rounded-2xl p-12 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-radial from-cyan-500/20 via-transparent to-transparent blur-3xl"></div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Work Together?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              I'm actively seeking opportunities to contribute my skills and continue learning.
              Let's discuss how I can add value to your team.
            </p>
            <CTAButton href="/contact" icon variant="primary">
              Let's Talk
            </CTAButton>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
