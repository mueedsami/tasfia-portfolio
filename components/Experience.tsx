export default function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Header */}
        <div className="mb-14">
          <p className="text-xs uppercase tracking-[0.25em] text-gray-400 mb-2">
            Professional Journey
          </p>
          <h2 className="text-4xl font-semibold tracking-tight">
            Work Experience
          </h2>
        </div>

        <div className="space-y-8">

          {/* Experience 1 */}
          <div className="border border-gray-200 rounded-2xl p-8 shadow-sm bg-white hover:shadow-md transition-all">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold">
                  Engineering Intern
                </h3>
                <p className="text-gray-600">Alim Industries Ltd.</p>
              </div>
              <p className="text-sm text-gray-500 mt-2 md:mt-0">
                May 2023 – June 2023
              </p>
            </div>

            <ul className="space-y-2 text-gray-700 text-sm leading-relaxed">
              <li>• Gained hands-on exposure to industrial manufacturing systems and workflows.</li>
              <li>• Learned CNC machine operations and modern integration in industrial automation.</li>
            </ul>
          </div>

          {/* Experience 2 */}
          <div className="border border-gray-200 rounded-2xl p-8 shadow-sm bg-white hover:shadow-md transition-all">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold">
                  Project Management Intern
                </h3>
                <p className="text-gray-600">mADestic (IT & Marketing Firm)</p>
              </div>
              <p className="text-sm text-gray-500 mt-2 md:mt-0">
                Jan 2025 – Apr 2025
              </p>
            </div>

            <ul className="space-y-2 text-gray-700 text-sm leading-relaxed">
              <li>• Joined client meetings and project pitches to communicate services clearly.</li>
              <li>• Supported project coordination to maintain clarity between teams and clients.</li>
            </ul>
          </div>

          {/* Experience 3 */}
          <div className="border border-gray-200 rounded-2xl p-8 shadow-sm bg-white hover:shadow-md transition-all">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold">
                  Content Management Executive
                </h3>
                <p className="text-gray-600">The Positive One</p>
              </div>
              <p className="text-sm text-gray-500 mt-2 md:mt-0">
                Aug 2024 – Present
              </p>
            </div>

            <ul className="space-y-2 text-gray-700 text-sm leading-relaxed">
              <li>• Planned, researched, and produced content for youth audiences.</li>
              <li>• Supported administration and daily operations of the platform.</li>
              <li>• Helped ideate and plan future youth-focused projects.</li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}
