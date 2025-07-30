"use client";

import Image from "next/image";
import { useState } from "react";

export default function Footer() {
  const quickLinks = [
    { name: "About Us", href: "#" },
    { name: "Admissions", href: "#" },
    { name: "Academics", href: "#" },
    { name: "Infrastructure", href: "#" },
    { name: "Gallery", href: "#" },
    { name: "News", href: "#" }
  ];

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    console.log("Form submitted:", { firstName, lastName, message });
    setFirstName("");
    setLastName("");
    setMessage("");
  };

  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Logo and Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center mr-3">
                <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center">
                  <span className="text-teal-600 font-bold text-sm">ABC</span>
                </div>
              </div>
            </div>

            <div className="space-y-2 text-gray-600">
              <p className="font-medium">Box 35500</p>
              <p>1810 Campus Way NE</p>
              <p>Bothell, WA 98011-8246</p>
              <a href="#" className="text-teal-600 hover:text-teal-700 inline-flex items-center">
                Direction
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            <div className="space-y-3">
              <div className="flex items-center text-gray-600">
                <svg className="w-4 h-4 mr-3 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                (051) 9261800
              </div>
              <div className="flex items-center text-gray-600">
                <svg className="w-4 h-4 mr-3 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                abcschool@gmail.com
              </div>
              <a href="#" className="text-teal-600 hover:text-teal-700 inline-flex items-center">
                Contact Us
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-600 hover:text-teal-600 transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Enhanced Contact Form */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-900">Contact Us</h3>
            <div className="bg-white p-6 rounded-2xl shadow-lg space-y-4 border border-gray-200 transition-all duration-300">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="mt-1 block w-full h-10 px-4 rounded-xl border border-gray-300 bg-gray-50 focus:border-teal-600 focus:ring-2 focus:ring-teal-100 transition text-gray-900 placeholder-gray-400"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="mt-1 block w-full h-10 px-4 rounded-xl border border-gray-300 bg-gray-50 focus:border-teal-600 focus:ring-2 focus:ring-teal-100 transition text-gray-900 placeholder-gray-400"
                    placeholder="Doe"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  className="mt-1 block w-full px-4 py-2 rounded-xl border border-gray-300 bg-gray-50 focus:border-teal-600 focus:ring-2 focus:ring-teal-100 transition text-gray-900 placeholder-gray-400"
                  placeholder="Write your message here..."
                />
              </div>
              <button
                onClick={handleSubmit}
                className="w-full rounded-xl bg-teal-600 px-6 py-3 text-sm font-semibold text-white hover:bg-teal-700 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
              >
                 Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
