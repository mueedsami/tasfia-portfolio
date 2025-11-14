import type { ReactNode } from "react";

interface SectionProps {
  id: string;
  eyebrow?: string;
  title: string;
  children: ReactNode;
}

export default function Section({ id, eyebrow, title, children }: SectionProps) {
  return (
    <section id={id} className="py-16 sm:py-20">
      <div className="max-w-5xl mx-auto px-4">
        <div className="mb-8">
          {eyebrow && <p className="section-subtitle">{eyebrow}</p>}
          <h2 className="section-title">{title}</h2>
        </div>
        {children}
      </div>
    </section>
  );
}
