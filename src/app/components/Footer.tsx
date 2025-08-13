"use client";

import { useState } from "react";

export default function ModernFooter() {
  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Admissions", href: "#admissions" },
    { name: "Academics", href: "#academics" },
    { name: "Facilities", href: "#facilities" },
    { name: "Team", href: "#team" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { 
      name: "Facebook", 
      href: "#",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      )
    },
    { 
      name: "YouTube", 
      href: "https://www.youtube.com/@imcbf84islamabad",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      )
    },
    { 
      name: "LinkedIn", 
      href: "#",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    },
  ];

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <footer id="contact" className="relative bg-slate-900 pt-12 pb-6 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Logo and School Info */}
          <div className="lg:col-span-1 space-y-5">
            <div className="flex items-center space-x-3">
              <div className="bg-white p-2 rounded-xl shadow-lg">
                <img
                  src="/landingPage/navbar/imcbLogo.jpg"
                  alt="IMCB Logo"
                  className="w-8 h-8 rounded-lg"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">IMCB</h3>
                <p className="text-slate-300 text-sm">F-8/4 Islamabad</p>
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-slate-200 leading-relaxed text-sm">
                Excellence in education since 1978. Nurturing minds, shaping futures, and building tomorrow's leaders.
              </p>
              
              {/* Contact Info - Clean version without containers */}
              <div className="space-y-3">
                <div className="flex items-center text-slate-200 group cursor-pointer">
                  <svg className="w-4 h-4 text-teal-400 mr-3 group-hover:text-teal-300 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <p className="font-medium group-hover:text-teal-300 transition-colors text-sm">F-8/4 Sector</p>
                    <p className="text-xs text-slate-400">Islamabad, Pakistan</p>
                  </div>
                </div>

                <div className="flex items-center text-slate-200 group cursor-pointer">
                  <svg className="w-4 h-4 text-orange-400 mr-3 group-hover:text-orange-300 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <p className="font-medium group-hover:text-orange-300 transition-colors text-sm">(051) 9261801</p>
                    <p className="text-xs text-slate-400">Mon-Fri 8:00 AM - 4:00 PM</p>
                  </div>
                </div>

                <div className="flex items-center text-slate-200 group cursor-pointer">
                  <svg className="w-4 h-4 text-purple-400 mr-3 group-hover:text-purple-300 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <p className="font-medium group-hover:text-purple-300 transition-colors text-sm">info@imcbf84.edu.pk</p>
                    <p className="text-xs text-slate-400">Get in touch anytime</p>
                  </div>
                </div>
              </div>

              {/* Social Links - Clean version with actual icons */}
              <div className="pt-3">
                <h4 className="text-white font-semibold mb-3 text-sm">Follow Us</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target={social.href.startsWith('http') ? '_blank' : '_self'}
                      rel={social.href.startsWith('http') ? 'noopener noreferrer' : ''}
                      className="text-slate-400 hover:text-white transition-colors duration-300"
                      title={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-200 hover:text-teal-300 transition-colors duration-300 flex items-center group text-sm"
                  >
                    <span className="w-1.5 h-1.5 bg-teal-500 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            <div className="pt-5 space-y-3">
              <h4 className="text-white font-semibold text-sm">School Hours</h4>
              <div className="text-slate-200 text-xs space-y-1">
                <p>Monday - Friday: 7:30 AM - 2:30 PM</p>
                <p>Saturday: 8:00 AM - 12:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 space-y-4">
            <div className="text-center lg:text-left">
              <h3 className="text-xl font-bold text-white mb-2">Get In Touch</h3>
              <p className="text-slate-200 text-sm">Ready to join our academic community? Send us a message!</p>
            </div>
            
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="firstName" className="block text-xs font-medium text-slate-200 mb-1">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full h-10 px-3 rounded-lg border border-slate-700 bg-slate-900 focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20 transition-all text-white placeholder-slate-400 text-sm"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-xs font-medium text-slate-200 mb-1">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full h-10 px-3 rounded-lg border border-slate-700 bg-slate-900 focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20 transition-all text-white placeholder-slate-400 text-sm"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="email" className="block text-xs font-medium text-slate-200 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full h-10 px-3 rounded-lg border border-slate-700 bg-slate-900 focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20 transition-all text-white placeholder-slate-400 text-sm"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-xs font-medium text-slate-200 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full h-10 px-3 rounded-lg border border-slate-700 bg-slate-900 focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20 transition-all text-white placeholder-slate-400 text-sm"
                      placeholder="+92 300 0000000"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-medium text-slate-200 mb-1">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={3}
                    className="w-full px-3 py-2 rounded-lg border border-slate-700 bg-slate-900 focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20 transition-all text-white placeholder-slate-400 resize-none text-sm"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-lg transition-all duration-300 shadow-md text-sm"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}