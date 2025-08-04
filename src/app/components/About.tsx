"use client";
import Image from "next/image";
import { useState } from "react";

export default function About() {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    {
      src: "/landingPage/about/about1.jpg",
      alt: "School Auditorium",
    },
    {
      src: "/landingPage/about/about2.jpg",
      alt: "Classroom with desks",
    },
    {
      src: "/landingPage/about/about3.jpg",
      alt: "School Building",
    },
  ];

  const stats = [
    { number: "2100+", label: "Students" },
    { number: "95%", label: "Sports" },
    { number: "235+", label: "Staffs" },
    { number: "100%", label: "Discipline" },
  ];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left side - Image Carousel */}
          <div className="relative">
            <div className="aspect-[4/3] relative overflow-hidden rounded-lg bg-gray-100">
              {/* Image container */}
              <div className="w-full h-full relative">
                <Image
                  src={images[currentImage].src}
                  alt={images[currentImage].alt}
                  fill
                  className="object-cover"
                  priority={currentImage === 0}
                />
              </div>

              {/* Navigation arrows */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-md transition-all"
              >
                <svg
                  className="w-5 h-5 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-md transition-all"
              >
                <svg
                  className="w-5 h-5 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                About Our School
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Islamabad Model College For Boys F-8/4 is serving for the last
                of 36 years and has a brilliant record of producing talented
                students of nation. Located at the heart of Islamabad, this
                institutes boasts a memorable past.
              </p>
              <p className="text-gray-600 leading-relaxed">
                IMCB F8/4 initially started as an English medium secondary
                school in 1978. It was elevated to college level in 1984. As a
                center of excellence, the college offers education from class 1
                to higher secondary school level in various disciplines. What
                makes this institution different from others in our imagination,
                team spirit, diligence and commitment to ensure the dynamic
                academic process.
              </p>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="space-y-2">
                  <div className="text-4xl lg:text-5xl font-bold text-gray-900">
                    {stat.number}
                  </div>
                  <div className="w-12 h-1 bg-teal-500"></div>
                  <div className="text-gray-700 font-medium text-lg">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
