export default function CopyrightFooter() {
  const legalLinks = [
    { name: "Terms of Service", href: "#" },
    { name: "Privacy Policy", href: "#" }
  ];

  return (
    <div className="bg-gray-100 py-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600">
          {/* Copyright */}
          <p className="mb-2 sm:mb-0">
            Copyright © 2021 ABC School, All Rights Reserved.
          </p>
          
          {/* Legal Links */}
          <div className="flex space-x-6">
            {legalLinks.map((link, index) => (
              <a 
                key={link.name}
                href={link.href} 
                className="hover:text-gray-900 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}