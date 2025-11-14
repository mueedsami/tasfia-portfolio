export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-5xl mx-auto px-6">

        {/* Section Header */}
        <div className="mb-14">
          <p className="text-xs uppercase tracking-[0.25em] text-gray-400 mb-2">
            Get in Touch
          </p>
          <h2 className="text-4xl font-semibold tracking-tight">
            Contact
          </h2>
        </div>

        {/* Contact Block */}
        <div className="border border-gray-200 rounded-2xl p-10 shadow-sm bg-white max-w-3xl">

          <p className="text-lg text-gray-700 leading-relaxed mb-10">
            Feel free to reach out for opportunities related to mechanical 
            engineering, robotics, research projects, or technical collaboration.
            I’d be happy to connect.
          </p>

          <div className="space-y-6">

            <div>
              <p className="text-gray-500 text-sm">Email</p>
              <a
                href="mailto:tasfia21@iut-dhaka.edu"
                className="text-brand-blue text-lg font-medium underline-offset-2 hover:underline"
              >
                tasfia21@iut-dhaka.edu
              </a>
            </div>

            <div>
              <p className="text-gray-500 text-sm">Phone</p>
              <p className="text-lg font-medium">+880 1911 294558</p>
            </div>

            <div>
              <p className="text-gray-500 text-sm">Location</p>
              <p className="text-lg font-medium">Gazipur, Bangladesh</p>
            </div>

            <div>
              <p className="text-gray-500 text-sm">Affiliation</p>
              <p className="text-lg font-medium">
                Islamic University of Technology (IUT)
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
