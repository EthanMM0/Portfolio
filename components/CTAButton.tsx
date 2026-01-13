'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

interface CTAButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  icon?: boolean;
  className?: string;
  external?: boolean;
}

export function CTAButton({
  href,
  onClick,
  children,
  variant = 'primary',
  icon = false,
  className,
  external = false
}: CTAButtonProps) {
  const baseStyles = 'inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 group';

  const variants = {
    primary: 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:shadow-lg hover:shadow-cyan-500/50 hover:scale-105',
    secondary: 'bg-gradient-to-r from-violet-500 to-fuchsia-600 text-white hover:shadow-lg hover:shadow-violet-500/50 hover:scale-105',
    outline: 'border-2 border-cyan-500/50 text-cyan-300 hover:bg-cyan-500/10 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/30'
  };

  const content = (
    <>
      {children}
      {icon && (
        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
      )}
    </>
  );

  const buttonClass = cn(baseStyles, variants[variant], className);

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={buttonClass}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={buttonClass}>
        {content}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={buttonClass}>
      {content}
    </button>
  );
}
