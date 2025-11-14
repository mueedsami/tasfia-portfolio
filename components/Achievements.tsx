export default function Achievements() {
  return (
    <section id="achievements" className="py-24">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Header */}
        <div className="mb-14">
          <p className="text-xs uppercase tracking-[0.25em] text-gray-400 mb-2">
            Recognition
          </p>
          <h2 className="text-4xl font-semibold tracking-tight">
            Achievements
          </h2>
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* IRC 2024 */}
          <div className="border border-gray-200 rounded-2xl p-8 shadow-sm bg-white hover:shadow-md transition-all">
            <h3 className="text-xl font-semibold mb-2">IRC 2024 — Project Altair</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Ranked <span className="text-brand-blue font-semibold">6th globally</span> and awarded 
              <span className="font-semibold"> Best Science ABEX Mission</span> in the International Rover Challenge.
            </p>
          </div>

          {/* ERC 2023 */}
          <div className="border border-gray-200 rounded-2xl p-8 shadow-sm bg-white hover:shadow-md transition-all">
            <h3 className="text-xl font-semibold mb-2">ERC 2023 — Project Altair</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Achieved <span className="text-brand-blue font-semibold">17th position worldwide</span> in the 
              European Rover Challenge.
            </p>
          </div>

          {/* IRDC 2023 */}
          <div className="border border-gray-200 rounded-2xl p-8 shadow-sm bg-white hover:shadow-md transition-all">
            <h3 className="text-xl font-semibold mb-2">IRDC 2023 — Project Altair</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Ranked <span className="text-brand-blue font-semibold">10th worldwide</span> in the International 
              Rover Design Challenge.
            </p>
          </div>

          {/* CASCADE Finalist */}
          <div className="border border-gray-200 rounded-2xl p-8 shadow-sm bg-white hover:shadow-md transition-all">
            <h3 className="text-xl font-semibold mb-2">“Cascade” Engineering Competition</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Finalist in an engineering idea competition on air pollution prevention organized 
              by ASME CUET Student Section.
            </p>
          </div>

          {/* ISCEA PTAK Supply Chain Competition — NEW */}
          <div className="border border-gray-200 rounded-2xl p-8 shadow-sm bg-white hover:shadow-md transition-all md:col-span-2">
            <h3 className="text-xl font-semibold mb-2">
              ISCEA PTAK Global Supply Chain Competition
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Awarded an <span className="text-brand-blue font-semibold">Honorable Prize</span> for outstanding 
              performance and strategic analytical contributions in the international supply chain case competition.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
