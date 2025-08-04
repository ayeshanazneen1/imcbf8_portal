import Image from "next/image";

export default function PrincipalMessage() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-purple-50 py-16 lg:py-24 overflow-hidden">
      {/* Background Decorative Circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Left side circles */}
        <div className="absolute -left-16 top-8 w-32 h-32 bg-blue-200/30 rounded-full"></div>
        <div className="absolute -left-8 top-32 w-24 h-24 bg-blue-300/40 rounded-full"></div>
        <div className="absolute left-8 top-56 w-20 h-20 bg-purple-200/30 rounded-full"></div>
        <div className="absolute -left-20 top-80 w-28 h-28 bg-blue-200/20 rounded-full"></div>
        <div className="absolute left-4 bottom-32 w-24 h-24 bg-purple-300/30 rounded-full"></div>
        <div className="absolute -left-12 bottom-8 w-32 h-32 bg-blue-200/25 rounded-full"></div>

        {/* Right side circles */}
        <div className="absolute -right-16 top-12 w-28 h-28 bg-purple-200/30 rounded-full"></div>
        <div className="absolute -right-8 top-40 w-32 h-32 bg-blue-200/25 rounded-full"></div>
        <div className="absolute right-8 top-64 w-24 h-24 bg-purple-300/40 rounded-full"></div>
        <div className="absolute -right-20 bottom-40 w-36 h-36 bg-blue-200/20 rounded-full"></div>
        <div className="absolute right-4 bottom-16 w-28 h-28 bg-purple-200/35 rounded-full"></div>
        <div className="absolute -right-12 bottom-64 w-20 h-20 bg-blue-300/30 rounded-full"></div>

        {/* Additional scattered circles */}
        <div className="absolute left-1/4 top-16 w-16 h-16 bg-purple-200/25 rounded-full"></div>
        <div className="absolute right-1/3 top-24 w-12 h-12 bg-blue-300/35 rounded-full"></div>
        <div className="absolute left-1/3 bottom-20 w-18 h-18 bg-purple-300/25 rounded-full"></div>
        <div className="absolute right-1/4 bottom-32 w-22 h-22 bg-blue-200/30 rounded-full"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Images */}
          <div className="relative">
            {/* Main principal image */}
            <div className="relative z-10 bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="aspect-[3/4]">
                <Image
                  src="/landingPage/principal.jpg"
                  alt="Principal"
                  width={300}
                  height={350}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
            </div>

            {/* Small secondary image */}
            <div className="absolute bottom-4 right-4 w-24 h-16 bg-white rounded shadow-md overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                {/* Small figure at desk */}
                <div className="text-center">
                  <div className="w-4 h-5 bg-pink-300 rounded-t-full mb-1 mx-auto"></div>
                  <div className="w-6 h-4 bg-gray-700 rounded mx-auto"></div>
                  <div className="w-8 h-1 bg-brown-600 mt-1 mx-auto"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="text-2xl lg:text-3xl font-medium text-gray-800 leading-relaxed">
                IMCB, F-8/4, Islamabad is a vibrant and prominent institution
                that enjoys the reputation of being one of the most prestigious
                educational institutions in the capital city. I feel honored to
                be the Principal of this brilliant institution that shapes
                young, impressionable minds towards their path of excellence and
                self-discovery.
              </p>
            </div>

            {/* Principal info and signature */}
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-bold text-gray-900">Josheph Ken</h3>
                <p className="text-gray-600 font-medium">Principal</p>
              </div>

              {/* Signature */}
              <div className="relative">
                <svg className="w-32 h-16" viewBox="0 0 128 64" fill="none">
                  <path
                    d="M8 32 Q20 16 32 32 T56 32 Q68 16 80 32 Q92 48 104 32 Q110 28 120 32"
                    stroke="#374151"
                    strokeWidth="2"
                    fill="none"
                    className="signature-path"
                  />
                  <path
                    d="M12 40 Q24 28 36 40 Q48 52 60 40"
                    stroke="#374151"
                    strokeWidth="1.5"
                    fill="none"
                    className="signature-path"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
