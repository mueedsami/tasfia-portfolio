export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Header */}
        <div className="mb-14">
          <p className="text-xs uppercase tracking-[0.25em] text-gray-400 mb-2">
            Strengths
          </p>
          <h2 className="text-4xl font-semibold tracking-tight">
            Skills
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-14">

          {/* Technical Skills */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Technical Skills</h3>

            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 border border-gray-300 rounded-full text-sm bg-white shadow-sm">
                C (Basics)
              </span>
              <span className="px-4 py-2 border border-gray-300 rounded-full text-sm bg-white shadow-sm">
                Python (Basics)
              </span>
              <span className="px-4 py-2 border border-gray-300 rounded-full text-sm bg-white shadow-sm">
                MATLAB
              </span>
              <span className="px-4 py-2 border border-gray-300 rounded-full text-sm bg-white shadow-sm">
                SolidWorks
              </span>
              <span className="px-4 py-2 border border-gray-300 rounded-full text-sm bg-white shadow-sm">
                ANSYS
              </span>
              <span className="px-4 py-2 border border-gray-300 rounded-full text-sm bg-white shadow-sm">
                Sensors & Microcontrollers
              </span>
            </div>
          </div>

          {/* Soft Skills */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Soft Skills</h3>

            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 border border-gray-300 rounded-full text-sm bg-white shadow-sm">
                Adaptability
              </span>
              <span className="px-4 py-2 border border-gray-300 rounded-full text-sm bg-white shadow-sm">
                Team Supervision
              </span>
              <span className="px-4 py-2 border border-gray-300 rounded-full text-sm bg-white shadow-sm">
                Collaboration
              </span>
              <span className="px-4 py-2 border border-gray-300 rounded-full text-sm bg-white shadow-sm">
                Event Coordination
              </span>
              <span className="px-4 py-2 border border-gray-300 rounded-full text-sm bg-white shadow-sm">
                Organizational Planning
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
