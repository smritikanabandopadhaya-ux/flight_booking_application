import facebook from "../../assets/facebook-svgrepo-com.svg";
import twitter from "../../assets/twitter-color-svgrepo-com.svg";
import instagram from "../../assets/instagram-1-svgrepo-com.svg";
import linkedin from "../../assets/linkedin-color-svgrepo-com.svg";
import airplane from "../../assets/flight-ticket-svgrepo-com.svg"; 

export default function Footer() {
  return (
    <footer className="bg-[#4f3d94] text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Branding */}
        <div>
          <div className="flex items-center gap-2">
            <img src={airplane} alt="FlyHigh Logo" className="w-8 h-8" />
            <h2 className="text-2xl font-bold text-white">Wander Wings</h2>
          </div>
          <p className="mt-3 text-sm">
            Book your next flight with confidence. Best deals, easy booking, and 24/7 support at your fingertips.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/flights" className="hover:text-white">Book Flights</a></li>
            <li><a href="/deals" className="hover:text-white">Deals & Offers</a></li>
            <li><a href="/destinations" className="hover:text-white">Destinations</a></li>
            <li><a href="/about" className="hover:text-white">About Us</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Support</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/help" className="hover:text-white">Help Center</a></li>
            <li><a href="/faq" className="hover:text-white">FAQs</a></li>
            <li><a href="/contact" className="hover:text-white">Contact Us</a></li>
            <li><a href="/terms" className="hover:text-white">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#"><img src={facebook} alt="Facebook" className="w-6 h-6 hover:opacity-80" /></a>
            <a href="#"><img src={twitter} alt="Twitter" className="w-6 h-6 hover:opacity-80" /></a>
            <a href="#"><img src={instagram} alt="Instagram" className="w-6 h-6 hover:opacity-80" /></a>
            <a href="#"><img src={linkedin} alt="LinkedIn" className="w-6 h-6 hover:opacity-80" /></a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-700 text-center py-4 text-sm">
        © {new Date().getFullYear()} Wander Wings. All rights reserved.
      </div>
    </footer>
  );
}