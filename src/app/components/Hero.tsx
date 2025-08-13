import Image from "next/image";

export default function ModernHero() {
  return (
    <section id="hero" className="relative bg-slate-800 text-white overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left content */}
          <div className="space-y-4">
            <div className="space-y-3">
              <h1 className="text-2xl lg:text-4xl font-bold leading-tight">
                <span className="text-white">
                  Islamabad Model
                </span>
                <br />
                <span className="text-teal-400">
                  College
                </span>
                <br />
                <span className="text-orange-400">
                  For Boys F-8/4
                </span>
              </h1>
              
              <p className="text-base lg:text-lg text-slate-300 leading-relaxed">
                A prestigious institution in the Federal Capital of Pakistan, shining like a polar star in the galaxy of Model Colleges.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-2">
              <button className="px-5 py-2.5 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-lg transition-all duration-300 shadow-md">
                Explore Programs
              </button>
            </div>
          </div>

          {/* Right content - Image */}
          <div className="relative">
            <div className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl border border-slate-600">
                <Image
                  src="/landingPage/hero/school.jpg"
                  alt="School Building"
                  fill
                  className="object-cover"
                  priority
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent"></div>
                
                {/* Info card */}
                <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-sm rounded-lg p-2 shadow-lg">
                  <div className="flex items-center space-x-2">
                    <div>
                      <p className="font-semibold text-slate-800 text-xs">IMCB Campus</p>
                      <p className="text-xs text-slate-600">F-8/4, Islamabad</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}