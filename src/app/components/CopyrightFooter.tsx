export default function ModernCopyrightFooter() {
  const legalLinks = [
    { name: "Terms of Service", href: "#terms" },
    { name: "Privacy Policy", href: "#privacy" },
    { name: "Code of Conduct", href: "#conduct" },
    { name: "Academic Policy", href: "#academic" }
  ];

  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-slate-950 border-t border-slate-800 py-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between items-center space-y-3 lg:space-y-0">
          {/* Copyright */}
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
            <p className="text-slate-400 text-xs text-center sm:text-left">
              © {currentYear} Islamabad Model College For Boys F-8/4. All Rights Reserved.
            </p>
          </div>
          
          {/* Legal Links */}
          <div className="flex flex-wrap justify-center lg:justify-end gap-x-4 gap-y-1">
            {legalLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href} 
                className="text-slate-400 hover:text-teal-300 transition-colors duration-300 text-xs hover:underline"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom decorative line */}
        <div className="mt-4 pt-3 border-t border-slate-800">
          <div className="flex items-center justify-center space-x-3 text-slate-500 text-xs">
            <span>Excellence Since 1978</span>
            <div className="w-1 h-1 bg-slate-500 rounded-full"></div>
            <span>Inspiring Future Leaders</span>
            <div className="w-1 h-1 bg-slate-500 rounded-full"></div>
            <span>Academic Excellence</span>
          </div>
        </div>
      </div>
    </div>
  );
}