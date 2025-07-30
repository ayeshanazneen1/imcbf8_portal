"use client";

import React, { useState } from 'react';

type Facility = {
  id: number;
  title: string;
  description: string;
  image: string;
  position: string;
};

const FacilitiesCollage = () => {
  const [hoveredFacility, setHoveredFacility] = useState<Facility | null>(null);

  const facilities = [
    {
      id: 1,
      title: "Modern Gym",
      description: "State-of-the-art fitness equipment and spacious workout areas to maintain physical wellness and promote healthy lifestyle habits among students.",
      image: "/landingPage/gym.jpg",
      position: "top-left"
    },
    {
      id: 2,
      title: "Co-working Space",
      description: "Collaborative work environments designed to foster creativity, teamwork, and innovative thinking among students and faculty members.",
      image: "/landingPage/coworking.jpg",
      position: "top-right"
    },
    {
      id: 3,
      title: "Robotics Lab",
      description: "Advanced robotics laboratory equipped with cutting-edge technology for hands-on learning in automation, AI, and engineering.",
      image: "/landingPage/robotics.jpg",
      position: "bottom-left"
    },
    {
      id: 4,
      title: "Library",
      description: "Extensive collection of books, digital resources, and quiet study spaces to support academic research and learning excellence.",
      image: "/landingPage/library.jpg",
      position: "bottom-right"
    }
  ];

  const getImageClasses = (position: string) => {
    const baseClasses = "relative overflow-hidden cursor-pointer transition-all duration-500 ease-in-out";
    switch (position) {
      case "top-left":
        return `${baseClasses} rounded-tl-2xl`;
      case "top-right":
        return `${baseClasses} rounded-tr-2xl`;
      case "bottom-left":
        return `${baseClasses} rounded-bl-2xl`;
      case "bottom-right":
        return `${baseClasses} rounded-br-2xl`;
      default:
        return baseClasses;
    }
  };

  const getOverlayClasses = (facility: Facility) => {
    const isTopImage = facility.position === "top-left" || facility.position === "top-right";
    return `absolute inset-0 transition-opacity duration-300 ${
      hoveredFacility?.id === facility.id ? 'opacity-100' : 'opacity-0'
    } ${
      isTopImage 
        ? 'bg-gradient-to-b from-black/80 via-black/40 to-transparent'
        : 'bg-gradient-to-t from-black/80 via-black/40 to-transparent'
    }`;
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="relative w-full h-[600px] md:h-[700px] lg:h-[800px]">
          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-4 h-full">
            {facilities.map((facility) => (
              <div
                key={facility.id}
                className={getImageClasses(facility.position)}
                onMouseEnter={() => setHoveredFacility(facility)}
                onMouseLeave={() => setHoveredFacility(null)}
              >
                <img
                  src={facility.image}
                  alt={facility.title}
                  className={`w-full h-full object-cover transition-all duration-500 ${
                    hoveredFacility?.id === facility.id 
                      ? 'scale-110 brightness-75' 
                      : 'scale-100 brightness-90 hover:brightness-75'
                  }`}
                />
                
                {/* Hover Overlay */}
                <div className={getOverlayClasses(facility)}>
                  <div className={`absolute left-0 right-0 p-6 text-white transform transition-transform duration-300 ${
                    facility.position === "top-left" || facility.position === "top-right"
                      ? 'top-0'
                      : 'bottom-0'
                  }`}>
                    <h3 className="text-2xl font-bold mb-3 text-yellow-400">
                      {facility.title}
                    </h3>
                    <p className="text-sm leading-relaxed">
                      {facility.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Central Information Container */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="bg-[#009481] shadow-2xl p-6 md:p-8 max-w-sm mx-4 text-center transform transition-all duration-300 hover:scale-105">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
                Our Facilities
              </h2>
              <p className="text-white text-sm md:text-base leading-relaxed mb-6">
                Immerse yourself in a conducive learning environment with our top-notch facilities. State-of-the-art laboratories, extensive libraries, and modern classrooms create a setting where curiosity and exploration flourish.
              </p>
              <button className="bg-white text-[#009481] font-semibold px-6 py-2 hover:bg-gray-100 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                More Info
              </button>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -top-4 -left-4 w-24 h-24 bg-yellow-400/20 rounded-full blur-xl"></div>
          <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-orange-500/20 rounded-full blur-xl"></div>
        </div>

        {/* Mobile Info Cards (shown below collage on small screens) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 md:hidden">
          {facilities.map((facility) => (
            <div key={facility.id} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="w-full h-48 rounded-lg overflow-hidden mb-4">
                <img
                  src={facility.image}
                  alt={facility.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {facility.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {facility.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacilitiesCollage;