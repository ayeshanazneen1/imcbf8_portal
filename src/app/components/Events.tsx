import Image from "next/image";
import path from "path";

export default function Events() {
  const events = [
    {
      id: 1,
      date: "12",
      month: "DEC",
      title: "Mindfulness Meditation",
      description: "A weekly breathing meditation session led by Dean Matt Weiner, Associate Dean of Life.",
      time: "12:30 pm - 1:30 pm",
      location: "Main Hall",
      imageType: "meditation",
      alt: "Meditation lotus flower"
    },
    {
      id: 2,
      date: "15",
      month: "DEC", 
      title: "Concert Series presents Eric",
      description: "A weekly breathing meditation session led by Dean Matt Weiner, Associate Dean of Life.",
      time: "12:30 pm - 1:30 pm",
      location: "Main Hall",
      imageType: "concert",
      alt: "Concert and books"
    },
    {
      id: 3,
      date: "19",
      month: "DEC",
      title: "Book Workshop",
      description: "A weekly breathing meditation session led by Dean Matt Weiner, Associate Dean of Life.",
      time: "12:30 pm - 1:30 pm", 
      location: "B - Block",
      imageType: "books",
      alt: "Stack of books"
    }
  ];

  const renderEventImage = (imageType: string, alt: string) => {
    switch (imageType) {
      case "meditation":
        return (
          <div className="w-full h-full bg-gradient-to-br from-blue-900 to-blue-700 flex items-center justify-center relative overflow-hidden">
            {/* Dark water/space background */}
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900 via-blue-800 to-blue-600"></div>
            {/* Lotus flower */}
            <div className="relative z-10">
              <div className="w-16 h-16 relative">
                {/* Lotus petals */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 bg-pink-200 rounded-full opacity-90"></div>
                </div>
                <div className="absolute top-1 left-2 w-8 h-8 bg-pink-300 rounded-full transform -rotate-12 opacity-80"></div>
                <div className="absolute top-1 right-2 w-8 h-8 bg-pink-300 rounded-full transform rotate-12 opacity-80"></div>
                <div className="absolute bottom-2 left-3 w-6 h-6 bg-pink-400 rounded-full opacity-70"></div>
                <div className="absolute bottom-2 right-3 w-6 h-6 bg-pink-400 rounded-full opacity-70"></div>
              </div>
            </div>
          </div>
        );
      case "concert":
        return (
          <div className="w-full h-full bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center relative overflow-hidden">
            {/* Book pages background */}
            <div className="absolute inset-0">
              <div className="w-full h-full bg-gradient-to-r from-gray-200 to-gray-100 flex items-center justify-center">
                {/* Open book representation */}
                <div className="w-32 h-24 bg-white shadow-lg relative">
                  {/* Book pages */}
                  <div className="absolute inset-2 space-y-1">
                    <div className="h-0.5 bg-gray-400 w-full"></div>
                    <div className="h-0.5 bg-gray-400 w-full"></div>
                    <div className="h-0.5 bg-gray-400 w-3/4"></div>
                    <div className="h-0.5 bg-gray-400 w-full"></div>
                  </div>
                  {/* Tiger illustration area */}
                  <div className="absolute top-2 right-2 w-8 h-8 bg-orange-400 rounded border-2 border-orange-600">
                    <div className="w-full h-full bg-gradient-to-br from-orange-300 to-orange-500 rounded flex items-center justify-center">
                      <span className="text-xs font-bold text-orange-900">🐅</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case "books":
        return (
          <div className="w-full h-full bg-gradient-to-br from-purple-200 to-pink-200 flex items-center justify-center relative overflow-hidden">
            {/* Colorful books stack */}
            <div className="relative">
              <div className="flex items-end space-x-1">
                <div className="w-6 h-20 bg-red-500 rounded-t-sm"></div>
                <div className="w-6 h-24 bg-blue-500 rounded-t-sm"></div>
                <div className="w-6 h-18 bg-green-500 rounded-t-sm"></div>
                <div className="w-6 h-22 bg-yellow-500 rounded-t-sm"></div>
                <div className="w-6 h-16 bg-purple-500 rounded-t-sm"></div>
                <div className="w-6 h-20 bg-pink-500 rounded-t-sm"></div>
                <div className="w-6 h-24 bg-indigo-500 rounded-t-sm"></div>
              </div>
            </div>
          </div>
        );
      default:
        return (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            <span className="text-gray-500">Event Image</span>
          </div>
        );
    }
  };

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Upcoming Events
          </h2>
          <a 
            href="#" 
            className="text-teal-600 hover:text-teal-700 font-medium flex items-center gap-2 transition-colors"
          >
            View all events
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* Events Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <div key={event.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              {/* Image */}
              <div className="aspect-[4/3] relative">
                {renderEventImage(event.imageType, event.alt)}
              </div>
              
              {/* Content */}
              <div className="p-6">
                {/* Date */}
                <div className="flex items-center mb-4">
                  <div className="flex items-center">
                    <div className="text-3xl font-bold text-teal-600 mr-2">
                      {event.date}
                    </div>
                    <div className="text-sm font-medium text-gray-600 uppercase">
                      {event.month}
                    </div>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                  {event.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed mb-4">
                  {event.description}
                </p>

                {/* Event Details */}
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-teal-600">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {event.time}
                  </div>
                  <div className="flex items-center text-sm text-teal-600">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {event.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}