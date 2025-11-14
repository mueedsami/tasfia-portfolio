interface ExperienceCardProps {
  role: string;
  org: string;
  time: string;
  location?: string;
  bullets: string[];
}

export default function ExperienceCard({
  role,
  org,
  time,
  location,
  bullets,
}: ExperienceCardProps) {
  return (
    <div className="border rounded-lg px-4 py-4 sm:px-5 sm:py-5 mb-4 hover:border-brand-blue/80 transition-colors">
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
        <div>
          <h3 className="font-semibold">{role}</h3>
          <p className="text-sm text-gray-700">{org}</p>
        </div>
        <div className="text-xs text-gray-500 text-right">
          <p>{time}</p>
          {location && <p>{location}</p>}
        </div>
      </div>
      <ul className="mt-2 text-sm text-gray-700 list-disc list-inside space-y-1">
        {bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
    </div>
  );
}
