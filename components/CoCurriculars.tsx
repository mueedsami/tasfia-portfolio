export default function CoCurriculars() {
  return (
    <section id="co-curriculars" className="py-24">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Header */}
        <div className="mb-14">
          <p className="text-xs uppercase tracking-[0.25em] text-gray-400 mb-2">
            Leadership & Involvement
          </p>
          <h2 className="text-4xl font-semibold tracking-tight">
            Co-Curricular Activities
          </h2>
        </div>

        <div className="space-y-8">

          {/* ASME */}
          <div className="border border-gray-200 rounded-2xl p-8 shadow-sm bg-white hover:shadow-md transition-all">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold">
                  Senior Executive (Administration)
                </h3>
                <p className="text-gray-600">ASME IUT Student Section</p>
              </div>
              <p className="text-sm text-gray-500 mt-2 md:mt-0">
                Sept 2022 – Present
              </p>
            </div>

            <ul className="space-y-2 text-gray-700 text-sm leading-relaxed">
              <li>• Oversaw event management, strategic planning, and documentation.</li>
              <li>• Supervised junior members in administrative tasks.</li>
            </ul>
          </div>

          {/* Project Altair — Mars Rover */}
          <div className="border border-gray-200 rounded-2xl p-8 shadow-sm bg-white hover:shadow-md transition-all">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold">
                  Senior Member (Science & Research)
                </h3>
                <p className="text-gray-600">Project Altair — IUT Mars Rover</p>
              </div>
              <p className="text-sm text-gray-500 mt-2 md:mt-0">
                Oct 2022 – Present
              </p>
            </div>

            <ul className="space-y-2 text-gray-700 text-sm leading-relaxed">
              <li>• Conducted research for rover science tasks such as soil/sample analysis.</li>
              <li>• Worked on sensor optimization and experiment-based science missions.</li>
              <li>• Guided junior team members through R&D activities.</li>
              <li>• Contributed to technical presentations for international competitions.</li>
            </ul>
          </div>

          {/* IUT Automobile Society */}
          <div className="border border-gray-200 rounded-2xl p-8 shadow-sm bg-white hover:shadow-md transition-all">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold">
                  Sub-executive (PR & Documentation)
                </h3>
                <p className="text-gray-600">IUT Automobile Society</p>
              </div>
              <p className="text-sm text-gray-500 mt-2 md:mt-0">
                Sept 2023 – Aug 2024
              </p>
            </div>

            <ul className="space-y-2 text-gray-700 text-sm leading-relaxed">
              <li>• Managed official documentation for society events and projects.</li>
            </ul>
          </div>

          {/* KIN Volunteer Work */}
          <div className="border border-gray-200 rounded-2xl p-8 shadow-sm bg-white hover:shadow-md transition-all">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold">
                  Campus Representative
                </h3>
                <p className="text-gray-600">KIN — SUST-based Volunteer Organization</p>
              </div>
              <p className="text-sm text-gray-500 mt-2 md:mt-0">
                Jan 2016 – Dec 2018
              </p>
            </div>

            <ul className="space-y-2 text-gray-700 text-sm leading-relaxed">
              <li>• Promoted blood donation, charity programs, and anti–eve-teasing initiatives.</li>
              <li>• Increased campus participation and managed info circulation.</li>
            </ul>
          </div>

          {/* Innovator */}
          <div className="border border-gray-200 rounded-2xl p-8 shadow-sm bg-white hover:shadow-md transition-all">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold">
                  Junior Executive
                </h3>
                <p className="text-gray-600">Innovator — Reading Culture Organization</p>
              </div>
              <p className="text-sm text-gray-500 mt-2 md:mt-0">
                Jan 2020 – Jan 2022
              </p>
            </div>

            <ul className="space-y-2 text-gray-700 text-sm leading-relaxed">
              <li>• Helped organize reading festivals, book exchange events, and youth-focused programs.</li>
              <li>• Hosted multiple reading and academic events.</li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}
