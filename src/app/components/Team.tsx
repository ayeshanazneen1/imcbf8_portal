"use client";

import Image from "next/image";

export default function Team() {
  const teamMembers = [
    {
      id: 1,
      name: "Andy R.K",
      role: "Director",
      image: "/landingPage/andy.jpg",
    },
    {
      id: 2,
      name: "Sarha J.L",
      role: "Lecturer",
      image: "/landingPage/sarha.jpg",
    },
    {
      id: 3,
      name: "Telly H.S",
      role: "Director",
      image: "/landingPage/telly.jpg",
    },
    {
      id: 4,
      name: "Jack M.L",
      role: "Lecturer",
      image: "/landingPage/Jack.jpg",
    },
    {
      id: 5,
      name: "Teressa D.O",
      role: "Executive",
      image: "/landingPage/Teressa.jpg",
    },
  ];

  return (
    <section className="bg-gray-50 py-16 lg:py-20 relative overflow-hidden">
      {/* Background Decorative Circles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-8 left-8 w-16 h-16 bg-blue-200 rounded-full opacity-60"></div>
        <div className="absolute top-8 left-28 w-16 h-16 bg-blue-200 rounded-full opacity-60"></div>
        <div className="absolute top-8 left-48 w-16 h-16 bg-blue-200 rounded-full opacity-60"></div>
        <div className="absolute top-8 right-48 w-16 h-16 bg-blue-200 rounded-full opacity-60"></div>
        <div className="absolute top-28 left-8 w-16 h-16 bg-blue-200 rounded-full opacity-60"></div>
        <div className="absolute top-28 left-28 w-16 h-16 bg-blue-200 rounded-full opacity-60"></div>
        <div className="absolute bottom-28 left-8 w-16 h-16 bg-blue-200 rounded-full opacity-60"></div>
        <div className="absolute bottom-28 left-28 w-16 h-16 bg-blue-200 rounded-full opacity-60"></div>
        <div className="absolute bottom-28 left-48 w-16 h-16 bg-blue-200 rounded-full opacity-60"></div>
        <div className="absolute bottom-8 right-48 w-16 h-16 bg-blue-200 rounded-full opacity-60"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
            Meet Our Team Of Dedicated Educators
          </h2>
        </div>

        {/* Team Cards Container */}
        <div className="flex justify-center">
          <div className="flex flex-wrap lg:flex-nowrap gap-0 max-w-6xl">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="w-full md:w-1/2 lg:w-1/5 relative"
              >
                {/* Team Member Card */}
                <div className="relative w-full h-80">
                  <img
                    src={member.image}
                    alt={`${member.name} - ${member.role}`}
                    className="w-full h-full object-cover"
                  />

                  {/* Member Info Bar */}
                  <div
                    className="absolute bottom-0 left-0 right-0 p-3 z-20"
                    style={{ backgroundColor: "#009184" }}
                  >
                    <div className="text-center">
                      <h3 className="font-semibold text-sm mb-1 text-white">
                        {member.name}
                      </h3>
                      <p className="text-xs" style={{ color: "#bdf2ec" }}>
                        {member.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
