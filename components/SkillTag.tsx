interface SkillTagProps {
  label: string;
}

export default function SkillTag({ label }: SkillTagProps) {
  return (
    <span className="inline-flex items-center rounded-full border px-3 py-1 text-xs sm:text-sm bg-white">
      {label}
    </span>
  );
}
