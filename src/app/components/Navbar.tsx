import Image from "next/image";

export default function Navbar() {
  return (
    <div className="bg-white shadow-sm">
      {/* Top contact bar */}
      <div className="bg-gray-50 px-4 py-2 text-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center">
              <span className="text-teal-600 mr-1">📞</span>
              <span className="text-gray-800 font-medium">(456) 789-0123</span>
            </span>
            <span className="flex items-center">
              <span className="text-teal-600 mr-1">✉️</span>
              <span className="text-gray-800 font-medium">office@abcschool.com</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="bg-white px-4 py-3">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center mr-3">
              <span className="text-white font-bold">ABC</span>
            </div>
            <span className="text-xl font-semibold text-gray-800">ABC Matric High School</span>
          </div>

          {/* Navigation links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-teal-600">Explore</a>
            <a href="#" className="text-gray-700 hover:text-teal-600">About us</a>
            <a href="#" className="text-gray-700 hover:text-teal-600">Vision</a>
            <a href="#" className="text-gray-700 hover:text-teal-600">Team</a>
            <a href="#" className="text-gray-700 hover:text-teal-600">Facilities</a>
            <a href="#" className="text-gray-700 hover:text-teal-600">Testimonials</a>
            <a href="#" className="text-gray-700 hover:text-teal-600">Contact</a>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden p-2">
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className="w-4 h-0.5 bg-gray-600 mb-1"></span>
              <span className="w-4 h-0.5 bg-gray-600 mb-1"></span>
              <span className="w-4 h-0.5 bg-gray-600"></span>
            </div>
          </button>
        </div>
      </nav>
    </div>
  );
}