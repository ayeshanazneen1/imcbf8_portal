import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-teal-500 to-teal-600 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
              Islamabad Model College For Boys F-8/4 Islamabad
            </h1>
            <p className="text-lg lg:text-xl text-teal-50 leading-relaxed">
              IMCB, F-8/4, is a prestigious institution of the Federal Capital
              of Pakistan. It is like a polar star in the galaxy of Model
              Colleges.
            </p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md font-medium transition-colors">
              Learn more
            </button>
          </div>

          {/* Right content - Student image */}
          <div className="relative">
            <div className="aspect-[4/3] relative overflow-hidden rounded-lg">
              <Image
                src="/landingPage/hero/school.jpg"
                alt="Student in classroom"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
