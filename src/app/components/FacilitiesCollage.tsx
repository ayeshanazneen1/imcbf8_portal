"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

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
      description: "State-of-the-art fitness equipment and spacious workout areas for physical wellness.",
      image: "/landingPage/facilities/gym.jpg",
      position: "top-left",
    },
    {
      id: 2,
      title: "Co-working Space",
      description: "Collaborative work environments designed to foster creativity and teamwork.",
      image: "/landingPage/facilities/coworkingSpace.jpg",
      position: "top-right",
    },
    {
      id: 3,
      title: "Robotics Lab",
      description: "Advanced robotics laboratory with cutting-edge technology for hands-on learning.",
      image: "/landingPage/facilities/lab.jpg",
      position: "bottom-left",
    },
    {
      id: 4,
      title: "Library",
      description: "Extensive collection of books and quiet study spaces for academic excellence.",
      image: "/landingPage/facilities/library.jpg",
      position: "bottom-right",
    },
  ];

  const getImageClasses = (position: string) => {
    const baseClasses = "relative overflow-hidden cursor-pointer transition-all duration-500 ease-in-out";
    switch (position) {
      case "top-left":
        return `${baseClasses} rounded-tl-xl`;
      case "top-right":
        return `${baseClasses} rounded-tr-xl`;
      case "bottom-left":
        return `${baseClasses} rounded-bl-xl`;
      case "bottom-right":
        return `${baseClasses} rounded-br-xl`;
      default:
        return baseClasses;
    }
  };

  const getOverlayClasses = (facility: Facility) => {
    const isTopImage = facility.position === "top-left" || facility.position === "top-right";
    return `absolute inset-0 transition-opacity duration-300 ${
      hoveredFacility?.id === facility.id ? "opacity-100" : "opacity-0"
    } ${
      isTopImage
        ? "bg-gradient-to-b from-black/80 via-black/40 to-transparent"
        : "bg-gradient-to-t from-black/80 via-black/40 to-transparent"
    }`;
  };

  return (
    <section id="facilities" className="py-12 px-4 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="relative w-full h-[500px] md:h-[600px]">
          {/* Image Grid - Reduced height */}
          <div className="grid grid-cols-2 gap-3 h-full">
            {facilities.map((facility) => (
              <div
                key={facility.id}
                className={getImageClasses(facility.position)}
                onMouseEnter={() => setHoveredFacility(facility)}
                onMouseLeave={() => setHoveredFacility(null)}
              >
                {/* Placeholder for images */}
                <img
                  src={facility.image}
                  alt={facility.title}
                  className={`w-full h-full object-cover transition-all duration-500 ${
                    hoveredFacility?.id === facility.id
                      ? "scale-110 brightness-75"
                      : "scale-100 brightness-90 hover:brightness-75"
                  }`}
                />

                {/* Hover Overlay */}
                <div className={getOverlayClasses(facility)}>
                  <div className={`absolute left-0 right-0 p-4 text-white transform transition-transform duration-300 ${
                    facility.position === "top-left" || facility.position === "top-right"
                      ? "top-0"
                      : "bottom-0"
                  }`}>
                    <h3 className="text-lg font-bold mb-2 text-green-400" style={{ color: "#009481" }}>
                      {facility.title}
                    </h3>
                    <p className="text-xs leading-relaxed">
                      {facility.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Central Information Container - Smaller */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="bg-[#009481] shadow-xl p-6 max-w-sm mx-4 text-center transform transition-all duration-300 hover:scale-105 rounded-lg">
              <h2 className="text-xl font-bold text-white mb-3 leading-tight">
                Our Facilities
              </h2>
              <p className="text-white text-sm leading-relaxed mb-4">
                The college provides helpful facilities for students including academic activities, 
                well-equipped labs, library, mosque, gym, transport, and career counseling.
              </p>
              <Link
                href="/facilities"
                className="inline-flex items-center bg-white text-[#009481] font-semibold px-5 py-2 hover:bg-gray-100 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 rounded text-sm"
              >
                View More
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>

          {/* Smaller Decorative Elements */}
          <div className="absolute -top-2 -left-2 w-16 h-16 bg-yellow-400/15 rounded-full blur-lg"></div>
          <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-orange-500/15 rounded-full blur-lg"></div>
        </div>

        {/* Mobile Info Cards - Smaller on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8 md:hidden">
          {facilities.map((facility) => (
            <div
              key={facility.id}
              className="bg-white rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-full h-32 rounded-lg overflow-hidden mb-3">
                <img
                  src={facility.image}
                  alt={facility.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">
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