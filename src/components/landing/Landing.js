// src/components/landing/Landing.js
import React from "react";
import Link from "next/link";

export default function Landing() {
  return (
    <div className="min-h-screen bg-[#0b1c3d] text-white w-full">
      {/* Hero Section */}
      <section
        className="relative h-[80vh] flex items-center w-full"
        style={{
          backgroundImage: "url('/images/government/IMG_3110.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[#0b1c3d]/80" /> {/* overlay */}

        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Welcome to the Lassonde Community
          </h1>
          <p className="text-lg md:text-xl mb-6 max-w-2xl">
            Your undergraduate student government
          </p>
          <a
            href="/government#about-us"
            className="bg-yellow-500 text-[#0b1c3d] font-semibold px-6 py-3 rounded-full hover:bg-yellow-400 transition"
          >
            About Us
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 bg-[#0b1c3d]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-yellow-500 mb-12">
            Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className="bg-[#12254d] p-6 rounded-2xl shadow-lg hover:shadow-2xl transition">
              <h3 className="text-2xl font-bold mb-4">Student Resources</h3>
              <p className="text-gray-300 mb-4">
                Explore resources to support your academic and student life.
              </p>
              <Link href="/government/resources/services">
                <span className="text-yellow-400 font-semibold hover:underline">
                  Learn More →
                </span>
              </Link>
            </div>

            {/* Service Card 2 */}
            <div className="bg-[#12254d] p-6 rounded-2xl shadow-lg hover:shadow-2xl transition">
              <h3 className="text-2xl font-bold mb-4">Community Programs</h3>
              <p className="text-gray-300 mb-4">
                Get involved with initiatives run by students, for students.
              </p>
              <Link href="/government/resources/community">
                <span className="text-yellow-400 font-semibold hover:underline">
                  Learn More →
                </span>
              </Link>
            </div>

            {/* Service Card 3 — Coming Up */}
            <div className="bg-[#12254d] p-6 rounded-2xl shadow-lg hover:shadow-2xl transition">
              <h3 className="text-2xl font-bold mb-2">Coming Up</h3>
              <p className="text-gray-300 mb-4">
                See upcoming meetings and events on the LSC Events Calendar.
              </p>
              <a
                href="#events-calendar"
                className="inline-block bg-yellow-500 text-[#0b1c3d] font-semibold px-5 py-2 rounded-full hover:bg-yellow-400 transition"
              >
                Open Calendar
              </a>
            </div>
          </div>

          {/* Full Calendar Card (Month view) */}
          <div id="events-calendar" className="mt-16">
            <h3 className="text-3xl font-bold mb-6 text-yellow-500">Coming Up</h3>

            <div className="bg-[#12254d] rounded-2xl shadow-lg overflow-hidden">
              {/* Calendar header */}
              <div className="px-6 py-4 border-b border-white/10">
                <p className="text-xl font-semibold">LSC Events Calendar</p>
                <p className="text-gray-300 text-sm">Month view • America/Toronto</p>
              </div>

              {/* Embedded Google Calendar in month view */}
              <div className="p-0">
                <iframe
                  title="LSC Events Calendar"
                  src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FToronto&mode=MONTH&showPrint=0&title=LSC%20Events%20Calendar&src=aW5mb0BsYXNjb25ncmVzcy5jYQ&src=Y19mYzgyOTUyOTk0NTI1OWE3OWZkZmFiMDczOTEzNDYyODc0ZDIzZGVmOGFiYmU5ZmRhZGEzNGQ4YzVkOTJlYjQxQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=Y19kM2ExN2YxYTc2OGZhZTkwY2ZjZWVlZjc5MThjZTVhNTMyZWNkZjQzOThiMjE0M2JhOGI3YTVmMzlmZTIyNjdhQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23039be5&color=%239e69af&color=%2333b679"
                  style={{ borderWidth: 0 }}
                  width="100%"
                  height="600"
                  frameBorder="0"
                  scrolling="no"
                  className="w-full"
                />
              </div>
            </div>
          </div>

          {/* More Services */}
          <div className="text-center mt-12">
            <Link href="/government/resources/services">
              <button className="bg-yellow-500 text-[#0b1c3d] font-semibold px-6 py-3 rounded-full hover:bg-yellow-400 transition">
                More services – Find our other services
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
