"use client";
import Image from "next/image";
import { useState } from "react";

export default function EnhancedAbout() {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    {
      src: "/landingPage/about/about1.jpg",
      alt: "School Auditorium",
      title: "Modern Auditorium"
    },
    {
      src: "/landingPage/about/about2.jpg",
      alt: "Classroom with desks",
      title: "Smart Classrooms"
    },
    {
      src: "/landingPage/about/about3.jpg",
      alt: "School Building",
      title: "Campus Architecture"
    },
  ];

  const stats = [
    { number: "2100+", label: "Students" },
    { number: "95%", label: "Sports Rate" },
    { number: "235+", label: "Faculty" },
    { number: "100%", label: "Discipline" },
  ];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section id="about" className="relative bg-gradient-to-br from-slate-50 to-slate-100 py-12 overflow-hidden">
      {/* Reduced background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-5 w-20 h-20 bg-gradient-to-r from-teal-200/20 to-cyan-200/20 rounded-full blur-lg"></div>
        <div className="absolute bottom-10 right-5 w-24 h-24 bg-gradient-to-r from-orange-200/20 to-red-200/20 rounded-full blur-lg"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left side - Image Carousel */}
          <div className="relative">
            <div className="relative">
              {/* Main image container */}
              <div className="aspect-[4/3] relative overflow-hidden rounded-xl shadow-lg bg-white">
                <Image
                  src={images[currentImage].src}
                  alt={images[currentImage].alt}
                  fill
                  className="object-cover transition-all duration-500"
                  priority={currentImage === 0}
                />
                
                {/* Image overlay with title */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/80 to-transparent p-4">
                  <h3 className="text-white font-semibold text-lg">{images[currentImage].title}</h3>
                </div>
              </div>

              {/* Navigation arrows */}
              <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 group backdrop-blur-sm"
              >
                <svg className="w-4 h-4 text-slate-600 group-hover:text-teal-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 group backdrop-blur-sm"
              >
                <svg className="w-4 h-4 text-slate-600 group-hover:text-teal-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Image indicators */}
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      currentImage === index 
                        ? 'bg-white shadow-lg' 
                        : 'bg-white/50 hover:bg-white/80'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-5">
            <div className="space-y-3">
              <h2 className="text-2xl lg:text-3xl font-black text-slate-900 leading-tight">
                <span className="text-transparent bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text">
                  Excellence in
                </span>
                <br />
                <span className="text-transparent bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text">
                  Education
                </span>
              </h2>
              
              <div className="space-y-2">
                <p className="text-base text-slate-700 leading-relaxed">
                  Islamabad Model College For Boys F-8/4 has been serving excellence for 46 years, producing talented students who shape our nation's future.
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Located in the heart of Islamabad, our institution boasts a memorable past and a brilliant future. Starting as an English medium secondary school in 1978, we elevated to college level in 1984.
                </p>
              </div>
            </div>

            {/* Compact Statistics Section */}
            <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-lg">
              <h3 className="text-lg font-bold text-slate-800 mb-4 text-center">Our Impact</h3>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center group cursor-pointer">
                    <div className="text-2xl font-black text-transparent bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 bg-clip-text mb-2 group-hover:scale-110 transition-transform duration-500">
                      {stat.number}
                    </div>
                    <div className="text-xs font-semibold text-slate-700 tracking-wide uppercase mb-1">
                      {stat.label}
                    </div>
                    {/* Compact progress line */}
                    <div className="w-full h-0.5 bg-slate-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full transform origin-left transition-transform duration-1000 delay-300 group-hover:scale-x-100"
                        style={{ transform: `scaleX(${0.7 + index * 0.1})` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}