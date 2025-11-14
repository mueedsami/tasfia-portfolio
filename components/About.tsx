export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Header */}
        <div className="mb-14">
          <p className="text-xs uppercase tracking-[0.25em] text-gray-400 mb-2">
            Profile
          </p>
          <h2 className="text-4xl font-semibold tracking-tight">
            About Me
          </h2>
        </div>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-12">

          {/* Left Column — Description */}
          <p className="text-lg text-gray-700 leading-relaxed">
            I am a Mechanical Engineering undergraduate with a deep interest in 
            robotics, scientific exploration, and research-driven engineering projects. 
            I enjoy working on multidisciplinary challenges that combine hands-on 
            hardware development, experiment design, and analytical problem-solving. 
            <br /><br />
            I thrive in collaborative, fast-paced environments and often take initiative 
            in planning, documentation, and mentoring junior members. I aim to build 
            solutions that are practical, sustainable, and aligned with real-world 
            engineering applications.
          </p>

          {/* Right Column — Identity Card */}
          <div className="border border-gray-200 rounded-2xl p-6 shadow-sm bg-white space-y-5">

            <div>
              <p className="text-gray-500 text-sm">Name</p>
              <p className="font-medium text-lg">Tasfia Chowdhury</p>
            </div>

            <div>
              <p className="text-gray-500 text-sm">Email</p>
              <a
                href="mailto:tasfia21@iut-dhaka.edu"
                className="text-brand-blue underline-offset-2 hover:underline font-medium"
              >
                tasfia21@iut-dhaka.edu
              </a>
            </div>

            <div>
              <p className="text-gray-500 text-sm">Phone</p>
              <p className="font-medium">+880 1911 294558</p>
            </div>

            <div>
              <p className="text-gray-500 text-sm">Affiliation</p>
              <p className="font-medium">Islamic University of Technology (IUT)</p>
            </div>

            <div>
              <p className="text-gray-500 text-sm">Location</p>
              <p className="font-medium">Gazipur, Bangladesh</p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
