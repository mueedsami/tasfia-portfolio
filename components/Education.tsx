export default function Education() {
  return (
    <section id="education" className="py-24">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Header */}
        <div className="mb-14">
          <p className="text-xs uppercase tracking-[0.25em] text-gray-400 mb-2">
            Academics
          </p>
          <h2 className="text-4xl font-semibold tracking-tight">
            Education
          </h2>
        </div>

        {/* Education Card */}
        <div className="border border-gray-200 rounded-2xl p-8 shadow-sm bg-white">
          
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            
            {/* Degree Info */}
            <div>
              <h3 className="text-2xl font-semibold mb-1">
                B.Sc. in Mechanical Engineering
              </h3>
              <p className="text-gray-600 text-sm">
                Islamic University of Technology (IUT), Board Bazar, Gazipur
              </p>
            </div>

            {/* Graduation Year */}
            <p className="text-sm text-gray-500 mt-4 md:mt-0">
              Expected Graduation: <span className="font-medium">2026</span>
            </p>
          </div>

          {/* CGPA */}
          <div className="border-t border-gray-200 pt-6">
            <p className="text-lg text-gray-700">
              Current CGPA:{" "}
              <span className="font-semibold text-brand-blue">3.50 / 4.00</span>
              <span className="text-gray-500"> (after 5th semester)</span>
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
