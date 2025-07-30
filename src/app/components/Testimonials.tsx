"use client";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Emily Rodriguez",
      role: "Current Student",
      image: "/landingPage/Emily.svg",
      rating: 5,
      marks: "92%",
      review: "I love the collaborative atmosphere at ABC School. The teachers genuinely care about each student's success, and the facilities provide everything we need to explore our interests and talents."
    },
    {
      id: 2,
      name: "Jack Swope",
      role: "Current Student",
      image: "/landingPage/jack.svg",
      rating: 4,
      marks: "88%",
      review: "ABC School has helped me excel in my studies. The hands-on projects and supportive teachers make learning enjoyable and rewarding."
    },
    {
      id: 3,
      name: "James Kim",
      role: "Current Student",
      image: "/landingPage/james.svg",
      rating: 5,
      marks: "95%",
      review: "The academic programs at ABC School are challenging yet inspiring. I've grown so much as a student and as a person."
    },
    {
      id: 4,
      name: "Sophie Nguyen",
      role: "Current Student",
      image: "/landingPage/sophie.svg",
      rating: 4,
      marks: "90%",
      review: "The teachers at ABC School push us to achieve our best. The resources and encouragement have boosted my confidence and grades."
    }
  ];

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, index) => (
      <span
        key={index}
        className={`text-lg ${
          index < rating ? "text-teal-400" : "text-gray-400"
        }`}
      >
        ★
      </span>
    ));
  };

  return (
    <section className="bg-gradient-to-r from-teal-600 to-teal-700 py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            What Our Students Say
          </h2>
          <p className="text-teal-100 text-lg max-w-2xl mx-auto">
            Hear from our current students about their academic journey at ABC School
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/15 transition-all duration-300 hover:transform hover:scale-105"
            >
              {/* User Info */}
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4 bg-teal-400">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-contain rounded-full"
                    onError={(e) => {
                      // Fallback to initials if image fails
                      const img = e.target as HTMLImageElement;
                      img.style.display = 'none';
                      const initialsDiv = img.nextElementSibling as HTMLElement | null;
                      if (initialsDiv) {
                        initialsDiv.style.display = 'flex';
                      }
                    }}
                  />
                  <div 
                    className="w-full h-full bg-teal-400 hidden items-center justify-center text-white font-bold text-sm"
                  >
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg">
                    {testimonial.name}
                  </h3>
                  <p className="text-teal-200 text-sm">
                    {testimonial.role}
                  </p>
                </div>
              </div>

              {/* Rating and Marks */}
              <div className="flex justify-between items-center mb-4">
                <div className="flex">
                  {renderStars(testimonial.rating)}
                </div>
                <p className="text-teal-100 text-sm font-medium">
                  Marks: {testimonial.marks}
                </p>
              </div>

              {/* Review Text */}
              <p className="text-white text-sm leading-relaxed">
                "{testimonial.review}"
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-md font-medium transition-colors">
            Share Your Experience
          </button>
        </div>
      </div>
    </section>
  );
}