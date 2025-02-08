const Footer = () => {
    return (
      <footer className="bg-[#1e293b] text-gray-300 py-8 -mt-6">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <h1 className="text-xl font-bold text-white">Infirix.io</h1>
              <p className="text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
              </p>
            </div>
  
            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="/about" className="hover:text-gray-400 transition-colors">About Us</a></li>
                <li><a href="/services" className="hover:text-gray-400 transition-colors">Services</a></li>
                <li><a href="/contact" className="hover:text-gray-400 transition-colors">Contact</a></li>
                <li><a href="/privacy" className="hover:text-gray-400 transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
  
            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white">Contact Us</h3>
              <ul className="space-y-2">
                <li>Email: abdulsattarghoto321@gmail.com</li>
                <li>Phone: 03010-3252121</li>
                <li>Address: Clifton Karachi, Sindh Pakistan</li>
              </ul>
            </div>
          </div>
  
          {/* Copyright */}
          <div className="border-t border-gray-600 mt-8 pt-4 text-center md:text-left">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} Infirix.io. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;