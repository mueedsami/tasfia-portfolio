export default function Footer() {
  return (
    <footer className="border-t mt-16">
      <div className="max-w-5xl mx-auto px-4 py-6 text-xs sm:text-sm text-gray-500 flex flex-col sm:flex-row items-center justify-between gap-2">
        <p>© {new Date().getFullYear()} Tasfia Chowdhury.</p>
        <p>Built with Next.js & Tailwind CSS.</p>
      </div>
    </footer>
  );
}
