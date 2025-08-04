import Image from "next/image";

export default function Navbar() {
  const faculty = [
    {id: 1, name: "aamir pare", whatsApp: "03005345391"},
    {id: 2, name: "aamir pare", whatsApp: "03005345391"},
    {id: 3, name: "aamir pare", whatsApp: "03005345391"},
    {id: 4, name: "aamir pare", whatsApp: "03005345391"},
    {id: 5, name: "aamir pare", whatsApp: "03005345391"},
    {id: 6, name: "aamir pare", whatsApp: "03005345391"},
    {id: 7, name: "aamir pare", whatsApp: "03005345391"},
  ];
  return (
    <div className="bg-white shadow-sm">
      {/* Top contact bar */}
      <div className="bg-gray-50 px-4 py-2 text-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center">
              <span className="text-teal-600 mr-1">📞</span>
              <span className="text-gray-800 font-medium">(051) 9261801</span>
            </span>
            <span className="flex items-center">
              <img
                src="/landingPage/navbar/youtube.png"
                alt="YouTube"
                className="w-5 h-5 mr-1"
              />
              <a
                href="https://www.youtube.com/@imcbf84islamabad"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 font-medium hover:text-gray-600"
              >
                youtube.com/@imcbf84islamabad
              </a>
            </span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="bg-white px-4 py-3">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <img
              src="/landingPage/navbar/imcbLogo.jpg"
              alt="YouTube"
              className="w-10 h-10 mr-1"
            />
            <span className="text-xl font-semibold text-gray-800">
              Islamabad Model College For Boys F-8/4
            </span>
          </div>

          {/* Navigation links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-teal-600">
              Explore
            </a>
            <a href="#" className="text-gray-700 hover:text-teal-600">
              About us
            </a>
            <a href="#" className="text-gray-700 hover:text-teal-600">
              Vision
            </a>
            <a href="#" className="text-gray-700 hover:text-teal-600">
              Team
            </a>
            <a href="#" className="text-gray-700 hover:text-teal-600">
              Facilities
            </a>
            <a href="#" className="text-gray-700 hover:text-teal-600">
              Testimonials
            </a>
            <a href="#" className="text-gray-700 hover:text-teal-600">
              Contact
            </a>
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
