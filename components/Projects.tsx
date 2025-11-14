export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Header */}
        <div className="mb-14">
          <p className="text-xs uppercase tracking-[0.25em] text-gray-400 mb-2">
            Selected Work
          </p>
          <h2 className="text-4xl font-semibold tracking-tight">
            Projects
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* Project 1 */}
          <div className="border border-gray-200 rounded-2xl p-8 shadow-sm bg-white hover:shadow-md transition-all">
            <h3 className="text-xl font-semibold mb-2">
              Sustainable Paper Cutting & Punching Machine
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Industry-grade automated cutting and punching system emphasizing efficiency and sustainability.
            </p>
            <ul className="space-y-2 text-sm text-gray-700 leading-relaxed">
              <li>• Contributed to prototyping an automated industrial cutting mechanism.</li>
              <li>• Focus on sustainable and resource-efficient design principles.</li>
            </ul>
          </div>

          {/* Project 2 */}
          <div className="border border-gray-200 rounded-2xl p-8 shadow-sm bg-white hover:shadow-md transition-all">
            <h3 className="text-xl font-semibold mb-2">
              Smart Home Vacuum Cleaner Bot
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              A cost-effective, sensor-integrated robot designed for home vacuum cleaning tasks.
            </p>
            <ul className="space-y-2 text-sm text-gray-700 leading-relaxed">
              <li>• Worked on integrating sensors, actuators, and motors for navigation.</li>
              <li>• Emphasis on affordability, material availability, and sustainable design.</li>
            </ul>
          </div>

          {/* Project 3 */}
          <div className="border border-gray-200 rounded-2xl p-8 shadow-sm bg-white hover:shadow-md transition-all">
            <h3 className="text-xl font-semibold mb-2">
              IUT Mars Rover — Project Altair
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Competition-grade rover with advanced science mission capabilities for IRC, ERC, and IRDC.
            </p>
            <ul className="space-y-2 text-sm text-gray-700 leading-relaxed">
              <li>• Contributed to science box mechanism for soil and sample collection.</li>
              <li>• Investigated sensors for terrain and atmospheric data analysis.</li>
              <li>• Collaborated on field testing and real-world exploration simulations.</li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}
