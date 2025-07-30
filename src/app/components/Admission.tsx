import Image from "next/image";

export default function Admission() {
  return (
    <section className="bg-teal-500 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 min-h-[400px]">
          {/* Left side - Image */}
          <div className="relative overflow-hidden">
            <div className="w-full h-full bg-gradient-to-br from-amber-900 to-amber-700 flex items-center justify-center relative">
              {/* Student studying image representation */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              <div className="relative z-10 flex items-center justify-center h-full">
                {/* Desk surface */}
                <div className="w-full h-full bg-gradient-to-br from-amber-800 to-amber-900 relative">
                  {/* Paper/worksheet */}
                  <div className="absolute top-1/4 left-1/3 w-32 h-24 bg-white rounded-sm shadow-lg transform -rotate-3">
                    {/* Lines on paper */}
                    <div className="p-2 space-y-1">
                      <div className="h-0.5 bg-gray-300 w-full"></div>
                      <div className="h-0.5 bg-gray-300 w-full"></div>
                      <div className="h-0.5 bg-gray-300 w-full"></div>
                      <div className="h-0.5 bg-gray-300 w-3/4"></div>
                    </div>
                  </div>
                  {/* Pencil */}
                  <div className="absolute top-1/2 right-1/3 w-16 h-1 bg-yellow-400 rounded-full transform rotate-45"></div>
                  {/* Student's hand/arm suggestion */}
                  <div className="absolute bottom-1/4 left-1/4 w-20 h-8 bg-blue-900 rounded-full transform rotate-12 opacity-80"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="flex items-center p-8 lg:p-16">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                Apply for Admission
              </h2>
              <p className="text-lg text-teal-50 font-medium">
                Fall 2021 applications are now open
              </p>
              <p className="text-teal-50 leading-relaxed text-lg">
                We don't just give students an education and experiences that set 
                them up for success in a career. We help them succeed in their career 
                to discover a field they're passionate about and dare to lead it.
              </p>
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded font-medium text-lg transition-colors">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}