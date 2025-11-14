const links = [
  { href: "#about", label: "About" },
  { href: "#education", label: "Education" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#achievements", label: "Achievements" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 border-b bg-white/90 backdrop-blur">
      <nav className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#" className="font-bold text-lg tracking-tight">
          Tasfia<span className="text-brand-blue">.</span>
        </a>

        <div className="hidden md:flex items-center gap-5 text-sm">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray-700 hover:text-brand-blue transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
