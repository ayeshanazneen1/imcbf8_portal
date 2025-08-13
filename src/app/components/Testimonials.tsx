"use client";

import { useState } from "react";

export default function ModernTestimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Ahmed Hassan",
      role: "Current Student",
      grade: "Class 12",
      rating: 5,
      marks: "92%",
      subject: "Science",
      review: "IMCB F-8/4 has transformed my academic journey. The teachers genuinely care about each student's success.",
      achievement: "Science Olympiad Winner",
      image: "/landingPage/james.svg"
    },
    {
      id: 2,
      name: "Muhammad Ali",
      role: "Current Student",
      grade: "Class 11",
      rating: 5,
      marks: "88%",
      subject: "Mathematics",
      review: "The academic environment at IMCB is exceptional. The hands-on projects make learning enjoyable.",
      achievement: "Math Competition Finalist",
      image: "/landingPage/jack.svg"
    },
    {
      id: 3,
      name: "Amna Ahmed",
      role: "Current Student",
      grade: "Class 12",
      rating: 5,
      marks: "95%",
      subject: "Computer Science",
      review: "The computer science program is outstanding. Modern labs helped me develop strong programming skills.",
      achievement: "Coding Competition Winner",
      image: "/landingPage/sophie.svg"
    },
    {
      id: 4,
      name: "Usman Ahmad",
      role: "Current Student",
      grade: "Class 11",
      rating: 4,
      marks: "90%",
      subject: "Physics",
      review: "The physics department provides excellent knowledge. Lab experiments boosted my confidence.",
      achievement: "Physics Quiz Champion",
      image: "/landingPage/james.svg"
    },
    {
      id: 5,
      name: "Farah Khan",
      role: "Alumni",
      grade: "Graduated 2023",
      rating: 5,
      marks: "94%",
      subject: "Engineering",
      review: "IMCB prepared me well for university. Strong foundation helped me excel at NUST.",
      achievement: "NUST Scholarship Recipient",
      image:"/landingPage/sophie.svg"
    },
    {
      id: 6,
      name: "Zain Abbas",
      role: "Alumni",
      grade: "Graduated 2022",
      rating: 5,
      marks: "91%",
      subject: "Medicine",
      review: "Biology and chemistry programs gave me perfect foundation for medical studies at AKU.",
      achievement: "Medical College Merit List",
      image: "/landingPage/jack.svg"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 3) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 3 + testimonials.length) % testimonials.length);
  };

  const getCurrentTestimonials = () => {
    const current = [];
    for (let i = 0; i < 3; i++) {
      current.push(testimonials[(currentTestimonial + i) % testimonials.length]);
    }
    return current;
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <span
        key={index}
        className={`text-sm ${index < rating ? "text-yellow-400" : "text-slate-300"}`}
      >
        ★
      </span>
    ));
  };

  return (
    <section id="testimonials" className="relative bg-slate-800 py-12 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl lg:text-4xl font-bold text-white leading-tight mb-4">
            What Our Students
            <br />
            <span className="text-teal-400">Say About Us</span>
          </h2>
          <p className="text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Hear from our current students and alumni about their academic journey at IMCB F-8/4
          </p>
        </div>

        <div className="relative">
          <button
            onClick={prevTestimonial}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-slate-700 hover:bg-slate-600 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 border border-slate-600"
          >
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-slate-700 hover:bg-slate-600 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 border border-slate-600"
          >
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-12">
            {getCurrentTestimonials().map((testimonial, index) => (
              <div
                key={`${testimonial.id}-${currentTestimonial}`}
                className="bg-slate-700 rounded-xl p-6 hover:bg-slate-600 transition-all duration-300 border border-slate-600"
              >
                <div className="flex items-center mb-4">
                  <div className="relative w-12 h-12 rounded-xl overflow-hidden mr-3">
                    {testimonial.image ? (
                      <img
                        src={testimonial.image}
                        alt={`${testimonial.name}'s profile picture`}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          e.currentTarget.nextSibling.style.display = 'flex';
                        }}
                      />
                    ) : null}
                    <div
                      className="w-full h-full flex items-center justify-center bg-teal-600"
                      style={{ display: testimonial.image ? 'none' : 'flex' }}
                    >
                      <span className="text-white font-bold text-sm">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-bold text-base">
                      {testimonial.name}
                    </h3>
                    <p className="text-slate-300 text-xs">
                      {testimonial.role} • {testimonial.grade}
                    </p>
                    <p className="text-teal-300 text-xs font-medium">
                      {testimonial.subject}
                    </p>
                  </div>
                </div>

                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center space-x-2">
                    <div className="flex">
                      {renderStars(testimonial.rating)}
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-orange-300 text-xs font-bold">
                      Score: {testimonial.marks}
                    </p>
                  </div>
                </div>

                <div className="bg-orange-600/20 rounded-lg p-2 mb-4 border border-orange-600/30">
                  <div className="flex items-center">
                    <span className="text-orange-300 text-xs mr-2">🏆</span>
                    <span className="text-orange-200 text-xs font-medium">
                      {testimonial.achievement}
                    </span>
                  </div>
                </div>

                <blockquote className="relative">
                  <div className="absolute -top-1 -left-1 text-2xl text-teal-400/30 font-serif">"</div>
                  <p className="text-white text-sm leading-relaxed pl-4 pr-3">
                    {testimonial.review}
                  </p>
                  <div className="absolute -bottom-1 -right-1 text-2xl text-teal-400/30 font-serif">"</div>
                </blockquote>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: Math.ceil(testimonials.length / 3) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index * 3)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  Math.floor(currentTestimonial / 3) === index
                    ? 'bg-teal-400'
                    : 'bg-slate-600 hover:bg-slate-500'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}