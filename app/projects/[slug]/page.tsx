import { notFound } from 'next/navigation';
import { projects } from '@/data/siteContent';
import ProjectDetailClient from './project-detail-client';

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default function ProjectDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetailClient project={project} />;
}
