import Image from "next/image";

export default function News() {
  const newsItems = [
    {
      id: 1,
      title: "Our Student Have sit amet egestas",
      description: "Vivamus volutpat eros pulvinar velit laoreet, sit amet egestas erat dignissim. Et harum quidem rerum facilis est",
      imageType: "student-books",
      alt: "Student carrying books"
    },
    {
      id: 2,
      title: "Our Student Have sit amet egestas",
      description: "Vivamus volutpat eros pulvinar velit laoreet, sit amet egestas erat dignissim. Et harum quidem rerum facilis est",
      imageType: "library",
      alt: "Student in library"
    },
    {
      id: 3,
      title: "Our Student Have sit amet egestas",
      description: "Vivamus volutpat eros pulvinar velit laoreet, sit amet egestas erat dignissim. Et harum quidem rerum facilis est",
      imageType: "student-headphones",
      alt: "Student with headphones"
    }
  ];

  const renderNewsImage = (imageType: string, alt: string) => {
    switch (imageType) {
      case "student-books":
        return (
          <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center relative overflow-hidden">
            {/* Student silhouette with books */}
            <div className="relative">
              <div className="w-20 h-24 bg-blue-400 rounded-t-full mb-2"></div>
              <div className="w-16 h-20 bg-blue-500 rounded mx-auto mb-2"></div>
              <div className="flex gap-1 justify-center">
                <div className="w-3 h-8 bg-red-400 rounded-sm"></div>
                <div className="w-3 h-8 bg-green-400 rounded-sm"></div>
                <div className="w-3 h-8 bg-purple-400 rounded-sm"></div>
              </div>
            </div>
          </div>
        );
      case "library":
        return (
          <div className="w-full h-full bg-gradient-to-br from-amber-100 to-amber-200 flex items-center justify-center relative overflow-hidden">
            {/* Library shelves background */}
            <div className="absolute inset-0 opacity-30">
              {Array.from({length: 8}).map((_, i) => (
                <div key={i} className="h-6 bg-amber-400 mb-2 rounded-sm"></div>
              ))}
            </div>
            {/* Student reading */}
            <div className="relative z-10">
              <div className="w-16 h-20 bg-amber-600 rounded-t-full mb-2"></div>
              <div className="w-12 h-8 bg-white rounded mx-auto"></div>
            </div>
          </div>
        );
      case "student-headphones":
        return (
          <div className="w-full h-full bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center relative overflow-hidden">
            {/* Student with headphones */}
            <div className="relative">
              <div className="w-20 h-24 bg-green-400 rounded-t-full mb-2 relative">
                {/* Headphones */}
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-16 h-4 border-4 border-gray-700 rounded-full border-b-0"></div>
                <div className="absolute top-2 left-2 w-4 h-4 bg-gray-700 rounded-full"></div>
                <div className="absolute top-2 right-2 w-4 h-4 bg-gray-700 rounded-full"></div>
              </div>
              <div className="w-16 h-20 bg-green-500 rounded mx-auto"></div>
            </div>
          </div>
        );
      default:
        return (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            <span className="text-gray-500">Image</span>
          </div>
        );
    }
  };

  return (
    <section className="bg-gray-50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            School News & Updates
          </h2>
          <a 
            href="#" 
            className="text-teal-600 hover:text-teal-700 font-medium flex items-center gap-2 transition-colors"
          >
            View all news
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* News Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              {/* Image */}
              <div className="aspect-[4/3] relative">
                {renderNewsImage(item.imageType, item.alt)}
              </div>
              
              {/* Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-gray-900 leading-tight">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
                <button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded font-medium transition-colors">
                  Read more
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}