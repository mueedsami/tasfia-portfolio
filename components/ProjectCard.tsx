interface ProjectCardProps {
  name: string;
  focus: string;
  bullets: string[];
}

export default function ProjectCard({ name, focus, bullets }: ProjectCardProps) {
  return (
    <div className="border rounded-lg p-4 sm:p-5 hover:border-brand-blue/80 transition-colors">
      <h3 className="font-semibold mb-1">{name}</h3>
      <p className="text-sm text-gray-600 mb-2">{focus}</p>
      <ul className="text-sm text-gray-700 list-disc list-inside space-y-1">
        {bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
    </div>
  );
}
