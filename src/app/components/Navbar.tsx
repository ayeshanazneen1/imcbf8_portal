"use client";

import { useState, useEffect } from "react";

export default function EnhancedNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Explore", href: "#hero" },
    { name: "About us", href: "#about" },
    { name: "Vision", href: "#vision" },
    { name: "Team", href: "#team" },
    { name: "Facilities", href: "#facilities" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" }
  ];

  const smoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    if (href === "#hero") {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
      return;
    }

    const element = document.querySelector(href);
    if (element) {
      const navbarHeight = 60;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top contact bar - Clean design */}
      <div className="bg-slate-800 px-4 py-1.5 text-xs">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center group cursor-pointer">
              <div className="w-5 h-5 bg-teal-600 rounded-full flex items-center justify-center mr-2 group-hover:bg-teal-500 transition-colors duration-300">
                <span className="text-white text-xs">📞</span>
              </div>
              <span className="text-slate-200 group-hover:text-teal-400 transition-colors text-xs">
                (051) 9261801
              </span>
            </div>
            <div className="flex items-center group cursor-pointer">
              <div className="w-5 h-5 bg-red-600 rounded-full flex items-center justify-center mr-2 group-hover:bg-red-500 transition-colors duration-300">
                <span className="text-white text-xs">📺</span>
              </div>
              <a
                href="https://www.youtube.com/@imcbf84islamabad"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-200 group-hover:text-red-400 transition-colors text-xs"
              >
                @imcbf84islamabad
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center space-x-3 text-xs text-slate-300">
              <span>Excellence Since 1978</span>
              <div className="w-1.5 h-1.5 bg-teal-500 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation - Clean design */}
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-lg border-b border-slate-200' 
          : 'bg-white shadow-md'
      }`}>
        <div className="max-w-7xl mx-auto px-4 py-2">
          <div className="flex justify-between items-center">
            {/* Logo - Clean */}
            <div className="flex items-center space-x-2 cursor-pointer group">
              <div className="bg-white p-1.5 rounded-lg shadow-md border border-slate-200">
                <img
                  src="/landingPage/navbar/imcbLogo.jpg"
                  alt="IMCB Logo"
                  className="w-6 h-6 rounded-md"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center space-x-1">
                  <span className="text-lg font-bold text-slate-800">
                    IMCB
                  </span>
                </div>
                <span className="text-xs text-slate-600 -mt-0.5">
                  F-8/4 Islamabad
                </span>
              </div>
            </div>

            {/* Navigation links - Clean */}
            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => smoothScroll(e, link.href)}
                  className="relative px-3 py-1.5 text-sm text-slate-700 font-medium rounded-lg hover:text-teal-700 hover:bg-slate-50 transition-all duration-300 group"
                >
                  {link.name}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-teal-600 group-hover:w-6 transition-all duration-300 rounded-full"></div>
                </a>
              ))}
            </div>

            {/* CTA Button - Clean */}
            <div className="hidden md:flex items-center">
              <button className="px-4 py-1.5 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-lg transition-all duration-300 text-sm shadow-md">
                Admissions Open
              </button>
            </div>

            {/* Mobile menu button */}
            <button 
              className="lg:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <div className="w-5 h-5 flex flex-col justify-center items-center space-y-1">
                <span className={`w-4 h-0.5 bg-slate-700 transition-all duration-300 ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-1' : ''
                }`}></span>
                <span className={`w-4 h-0.5 bg-slate-700 transition-all duration-300 ${
                  isMobileMenuOpen ? 'opacity-0' : ''
                }`}></span>
                <span className={`w-4 h-0.5 bg-slate-700 transition-all duration-300 ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-1' : ''
                }`}></span>
              </div>
            </button>
          </div>

          {/* Mobile menu - Clean */}
          <div className={`lg:hidden transition-all duration-500 overflow-hidden ${
            isMobileMenuOpen ? 'max-h-80 opacity-100 mt-3' : 'max-h-0 opacity-0'
          }`}>
            <div className="bg-white rounded-xl p-4 shadow-lg border border-slate-200">
              <div className="space-y-2">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => smoothScroll(e, link.href)}
                    className="block py-2 px-3 text-sm text-slate-700 font-medium hover:text-teal-700 hover:bg-slate-50 rounded-lg transition-all duration-300"
                  >
                    {link.name}
                  </a>
                ))}
                <button className="w-full mt-3 px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-lg text-sm shadow-md transition-colors duration-300">
                  Admissions Open
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}