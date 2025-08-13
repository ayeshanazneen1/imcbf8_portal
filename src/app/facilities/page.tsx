"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import ModernCopyrightFooter from "../components/CopyrightFooter";
import CopyrightFooter from "../components/CopyrightFooter";

export default function FacilitiesPage() {
  const facilities = [
    {
      title: "Academic Activities",
      description: "Comprehensive academic programs under the guidance of qualified and professional staff members.",
      image: "/landingPage/facilities/academic.jpg",
      category: "Academic"
    },
    {
      title: "Co-curricular Activities",
      description: "Diverse extra-curricular programs to develop students' talents and interests beyond academics.",
      image: "/landingPage/facilities/cocurricular.jpg",
      category: "Activities"
    },
    {
      title: "Regular Sports Arrangements",
      description: "Well-organized sports facilities and regular tournaments to promote physical fitness and teamwork.",
      image: "/landingPage/facilities/sports.jpg",
      category: "Sports"
    },
    {
      title: "Well-equipped Labs",
      description: "State-of-the-art laboratory facilities for Physics, Chemistry, Biology, and Computer Science.",
      image: "/landingPage/facilities/lab1.jpg",
      category: "Academic"
    },
    {
      title: "Library",
      description: "Extensive collection of books, journals, and digital resources for comprehensive learning.",
      image: "/landingPage/facilities/library.jpg",
      category: "Academic"
    },
    {
      title: "Mosque",
      description: "Beautiful mosque facility for daily prayers and Islamic studies, fostering spiritual development.",
      image: "/landingPage/facilities/mosque.jpg",
      category: "Religious"
    },
    {
      title: "Canteen",
      description: "Hygienic canteen facility providing nutritious and affordable meals for students and staff.",
      image: "/landingPage/facilities/canteen.jpg",
      category: "Amenities"
    },
    {
      title: "Transport Facility",
      description: "Safe and reliable transportation service covering various routes across Islamabad.",
      image: "/landingPage/facilities/transport.jpg",
      category: "Amenities"
    },
    {
      title: "Infirmary for First Aid",
      description: "Medical facility with trained staff for emergency first aid and basic healthcare services.",
      image: "/landingPage/facilities/infirmary.jpg",
      category: "Healthcare"
    },
    {
      title: "Career Counseling",
      description: "Professional guidance and counseling services to help students make informed career choices.",
      image: "/landingPage/facilities/counseling.jpg",
      category: "Support"
    }
  ];

  const categories = [
    { name: "All", value: "all", color: "bg-slate-800" },
    { name: "Academic", value: "Academic", color: "bg-teal-600" },
    { name: "Sports", value: "Sports", color: "bg-orange-500" },
    { name: "Amenities", value: "Amenities", color: "bg-blue-600" },
    { name: "Support", value: "Support", color: "bg-green-600" }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Banner Section */}
      <section className="relative bg-slate-800 text-white py-16 overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="flex items-center mb-8">
            <Link
              href="/"
              className="inline-flex items-center text-teal-400 hover:text-teal-300 transition-colors duration-200 mb-4"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Home
            </Link>
          </div>
          
          <div className="text-center">
            <h1 className="text-3xl lg:text-5xl font-bold leading-tight mb-6">
              <span className="text-white">Campus</span>
              <span className="text-teal-400"> Facilities</span>
            </h1>
            
            <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Discover our comprehensive range of facilities designed to provide students with 
              a complete educational experience. From academic excellence to personal development, 
              we offer everything needed for holistic growth.
            </p>
          </div>
        </div>

        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Facilities Grid Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 ${category.color} text-white font-medium rounded-full hover:opacity-90 transition-opacity duration-200 text-sm`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Facilities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image
                    src={facility.image}
                    alt={facility.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center text-white p-4">
                      <h3 className="text-lg font-bold mb-2">{facility.title}</h3>
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="bg-slate-800 text-white text-xs px-2 py-1 rounded-full font-medium">
                      {facility.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-bold text-slate-800 text-lg mb-3 leading-tight">
                    {facility.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {facility.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CopyrightFooter />
    </div>
  );
}