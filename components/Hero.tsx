export default function Hero() {
  return (
    <section className="relative pt-28 pb-24">
      <div className="max-w-6xl mx-auto px-6">

        {/* Eyebrow */}
        <p className="text-xs uppercase tracking-[0.28em] text-gray-400 mb-5">
          Mechanical Engineering • Robotics • R&D
        </p>

        {/* Main Name */}
        <h1 className="text-6xl font-semibold tracking-tight leading-tight mb-6">
          Tasfia <span className="text-brand-blue">Chowdhury</span>
        </h1>

        {/* Description */}
        <p className="text-lg text-gray-600 max-w-2xl leading-relaxed mb-10">
          Mechanical Engineering undergraduate at the Islamic University of Technology, 
          specializing in robotics, scientific mission design, and hands-on engineering R&D. 
          Dedicated to transforming technical ideas into practical, real-world engineering solutions.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4">
          <a
            href="#contact"
            className="px-7 py-3 rounded-lg text-sm font-medium text-white bg-brand-blue hover:bg-brand-blue/80 transition-all shadow-sm"
          >
            Get In Touch
          </a>

          <a
            href="/Tasfia_Chowdhury_CV.pdf"
            className="px-7 py-3 border border-gray-900 rounded-lg text-sm font-medium hover:bg-gray-50 transition-all"
          >
            Download CV
          </a>
        </div>

      </div>
    </section>
  );
}
