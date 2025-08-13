import Image from "next/image";

export default function ModernPrincipalMessage() {
  return (
    <section id="vision" className="relative bg-slate-800 py-12 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-4 items-center">
          {/* Left side - Principal Image */}
          <div className="relative max-w-sm mx-auto lg:mx-0">
            <div className="relative group">
              <div className="relative bg-slate-700 rounded-2xl p-1 shadow-xl border border-slate-600">
                <div className="aspect-square relative overflow-hidden rounded-2xl max-h-96">
                  <Image
                    src="/landingPage/principal.jpg"
                    alt="Principal Joseph Ken"
                    fill
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    priority
                  />
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent"></div>
                </div>
              </div>

              {/* Info card */}
              <div className="absolute -bottom-4 -right-4 bg-white rounded-xl p-3 shadow-lg border border-slate-200">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center text-white text-sm">
                    💼
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800 text-sm">Principal</p>
                    <p className="text-xs text-slate-600">Since 2016</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-4">
            <div className="space-y-3">
              {/* Quote */}
              <blockquote className="relative">
                <div className="absolute -top-2 -left-2 text-3xl text-teal-400/30 font-serif">"</div>
                <p className="text-base lg:text-lg font-medium text-white leading-relaxed relative z-10 pl-4">
                  IMCB, F-8/4, Islamabad is a vibrant and prominent institution that enjoys the reputation of being one of the most prestigious educational institutions in the capital city.
                </p>
                <div className="absolute -bottom-2 -right-2 text-3xl text-teal-400/30 font-serif">"</div>
              </blockquote>

              <p className="text-sm text-slate-300 leading-relaxed">
                I feel honored to be the Principal of this brilliant institution that shapes young, impressionable minds towards their path of excellence and self-discovery.
              </p>
            </div>

            {/* Principal info */}
            <div className="space-y-3 text-left">
              <div className="flex flex-col items-start space-y-1">
                <h3 className="text-lg font-bold text-white">Dr. Muhammad Yaseen Afaqi</h3>
                <p className="text-teal-300 font-medium text-sm">Principal, IMCB F-8/4</p>
                <p className="text-slate-400 Ashes to Ashes text-xs">M.Ed, Educational Leadership</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}