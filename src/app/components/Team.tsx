"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function ModernTeam() {
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);

  const teamMembers = [
    {
      id: 1,
      name: "DR. Asad Faiz",
      role: "Associate Professor",
      department: "Science",
      experience: "15+ Years",
      specialization: "Physics & Mathematics",
      color: "bg-slate-800"
    },
    {
      id: 2,
      name: "Mr. Naeem-ur-Rehman",
      role: "Associate Professor",
      department: "Languages",
      experience: "12+ Years",
      specialization: "English Literature",
      color: "bg-slate-800"
    },
    {
      id: 3,
      name: "Mrs. Kausar Shaheen",
      role: "Senior Headmistress",
      department: "Administration",
      experience: "20+ Years",
      specialization: "Educational Management",
      color: "bg-slate-800"
    },
    {
      id: 4,
      name: "Mr. Imtiaz Ali Bukhari",
      role: "Teachers' Coordinator",
      department: "IGCSE Programs",
      experience: "10+ Years",
      specialization: "IGCSE Curriculum",
      color: "bg-slate-800"
    },
    {
      id: 5,
      name: "Mr. Ghayoor Hussain",
      role: "Associate Professor",
      department: "Social Sciences",
      experience: "14+ Years",
      specialization: "History & Geography",
      color: "bg-slate-800"
    },
  ];

  return (
    <section id="team" className="relative bg-slate-50 py-12 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-slate-800 leading-tight mb-3">
            Meet Our Team of
            <br />
            <span className="text-teal-600">Dedicated Educators</span>
          </h2>
          
          <p className="text-sm text-slate-600 max-w-2xl mx-auto">
            Our passionate faculty members bring years of experience and dedication to nurture young minds.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="group relative"
              onMouseEnter={() => setHoveredMember(member.id)}
              onMouseLeave={() => setHoveredMember(null)}
            >
              <div className="relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
                <div className="aspect-[3/4] relative overflow-hidden">
                  <Image
                    src={`/landingPage/${member.id === 1 ? 'andy.jpg' : 
                          member.id === 2 ? 'sarha.jpg' : 
                          member.id === 3 ? 'telly.jpg' : 
                          member.id === 4 ? 'Jack.jpg' : 'Teressa.jpg'}`}
                    alt={`${member.name} - ${member.role}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  <div className="absolute inset-0 bg-slate-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3">
                    <div className="text-white space-y-1">
                      <p className="text-xs font-medium">{member.department}</p>
                      <p className="text-xs opacity-90">{member.experience}</p>
                      <p className="text-xs opacity-80">{member.specialization}</p>
                    </div>
                  </div>
                </div>

                <div className={`${member.color} p-2`}>
                  <div className="text-center">
                    <h3 className="font-bold text-white text-xs mb-1 leading-tight">
                      {member.name}
                    </h3>
                    <p className="text-white/90 text-xs">
                      {member.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Faculty Button */}
        <div className="text-center">
          <Link
            href="/faculty"
            className="inline-flex items-center px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
          >
            View More Faculty
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}