import React, { useState } from "react";
import facebook from "../../assets/facebook-svgrepo-com.svg";
import twitter from "../../assets/twitter-color-svgrepo-com.svg";
import instagram from "../../assets/instagram-1-svgrepo-com.svg";
import linkedin from "../../assets/linkedin-color-svgrepo-com.svg";
import airplane from "../../assets/flight-ticket-svgrepo-com.svg";

export default function Footer() {
  const [open, setOpen] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);
  const [openSupport, setOpenSupport] = useState(null);
  const toggle = (section) => {
    setOpen(open === section ? null : section);
  };

  return (
    <footer className="bg-[#4f3d93] text-gray-300">
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Branding */}
        <div>
          <div className="flex items-center gap-2">
            <img src={airplane} alt="Logo" className="w-8 h-8" />
            <h2 className="text-xl font-bold text-white">Wander Wings</h2>
          </div>
          <p className="mt-3 text-sm w-60">
            Book flights with confidence. Get the best deals, 24/7 support, and
            a smooth booking experience.
          </p>
        </div>

        {/* Accordion Section */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Need Help?</h3>

          {/* Support Accordion */}
          <div className="mb-3 border-b border-purple-700">
            <button
              onClick={() => toggle("support")}
              className="w-full flex justify-between items-center py-2 text-left text-gray-200 hover:text-white"
            >
              Support
              <span>{open === "support" ? "−" : "+"}</span>
            </button>
            {open === "support" && (
              <ul className="pl-3 pb-3 space-y-2 text-sm text-purple-200">
                {/* Help Center */}
                <li className="border-b border-purple-800 pb-2">
                  <button
                    onClick={() => setOpenSupport(openSupport === 1 ? null : 1)}
                    className="w-full flex justify-between items-center py-1 text-left hover:text-white"
                  >
                    Help Center
                    <span>{openSupport === 1 ? "−" : "+"}</span>
                  </button>
                  {openSupport === 1 && (
                    <p className="mt-1 pl-2 text-purple-300 text-xs">
                      Browse FAQs, guides, and get step-by-step help for
                      booking, cancellations, and more.
                    </p>
                  )}
                </li>

                {/* Contact Us */}
                <li className="border-b border-purple-800 pb-2">
                  <button
                    onClick={() => setOpenSupport(openSupport === 2 ? null : 2)}
                    className="w-full flex justify-between items-center py-1 text-left hover:text-white"
                  >
                    Contact Us
                    <span>{openSupport === 2 ? "−" : "+"}</span>
                  </button>
                  {openSupport === 2 && (
                    <p className="mt-1 pl-2 text-purple-300 text-xs">
                      Call us at <strong>+91 98765 43210</strong> or email
                      support@wanderwings.com.
                    </p>
                  )}
                </li>

                {/* Terms & Conditions */}
                <li>
                  <button
                    onClick={() => setOpenSupport(openSupport === 3 ? null : 3)}
                    className="w-full flex justify-between items-center py-1 text-left hover:text-white"
                  >
                    Terms & Conditions
                    <span>{openSupport === 3 ? "−" : "+"}</span>
                  </button>
                  {openSupport === 3 && (
                    <p className="mt-1 pl-2 text-purple-300 text-xs">
                      Tickets are non-transferable. Cancellations may incur
                      charges. Please read full terms on our website.
                    </p>
                  )}
                </li>
              </ul>
            )}
          </div>

          {/* FAQs Accordion */}
          <div className="mb-3 border-b border-purple-700">
            <button
              onClick={() => toggle("faq")}
              className="w-full flex justify-between items-center py-2 text-left text-gray-200 hover:text-white"
            >
              FAQs
              <span>{open === "faq" ? "−" : "+"}</span>
            </button>

            {open === "faq" && (
              <ul className="pl-3 pb-3 space-y-2 text-sm text-purple-200">
                {/* Question 1 */}
                <li className="border-b border-purple-800 pb-2">
                  <button
                    onClick={() => setOpenFaq(openFaq === 1 ? null : 1)}
                    className="w-full flex justify-between items-center py-1 text-left hover:text-white"
                  >
                    How can I change my flight?
                    <span>{openFaq === 1 ? "−" : "+"}</span>
                  </button>
                  {openFaq === 1 && (
                    <p className="mt-1 pl-2 text-white text-xs">
                      You can modify your booking from the "Booking" section.
                      Fees may apply depending on the airline policy.
                    </p>
                  )}
                </li>

                {/* Question 2 */}
                <li className="border-b border-purple-800 pb-2">
                  <button
                    onClick={() => setOpenFaq(openFaq === 2 ? null : 2)}
                    className="w-full flex justify-between items-center py-1 text-left hover:text-white"
                  >
                    What is the baggage allowance?
                    <span>{openFaq === 2 ? "−" : "+"}</span>
                  </button>
                  {openFaq === 2 && (
                    <p className="mt-1 pl-2 text-white text-xs">
                      Most airlines allow 7kg cabin baggage and 15–20kg check-in
                      baggage. Please check your ticket for exact limits.
                    </p>
                  )}
                </li>

                {/* Question 3 */}
                <li>
                  <button
                    onClick={() => setOpenFaq(openFaq === 3 ? null : 3)}
                    className="w-full flex justify-between items-center py-1 text-left hover:text-white"
                  >
                    How do I cancel a booking?
                    <span>{openFaq === 3 ? "−" : "+"}</span>
                  </button>
                  {openFaq === 3 && (
                    <p className="mt-1 pl-2 text-white text-xs">
                      Cancellations can be done under "Bookings". Refunds depend
                      on the airline’s cancellation policy.
                    </p>
                  )}
                </li>
              </ul>
            )}
          </div>
        </div>

        {/* Social Media */}
        <div className="ml-24">
          <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com/">
              <img
                src={facebook}
                alt="Facebook"
                className="w-6 h-6 hover:opacity-80"
              />
            </a>
            <a href="https://x.com/?lang=en-in">
              <img
                src={twitter}
                alt="Twitter"
                className="w-6 h-6 hover:opacity-80"
              />
            </a>
            <a href="https://www.instagram.com/">
              <img
                src={instagram}
                alt="Instagram"
                className="w-6 h-6 hover:opacity-80"
              />
            </a>
            <a href="https://in.linkedin.com/">
              <img
                src={linkedin}
                alt="LinkedIn"
                className="w-6 h-6 hover:opacity-80"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white text-center py-4 text-sm text-purple-200">
        © {new Date().getFullYear()} Wander Wings. All rights reserved.
      </div>
    </footer>
  );
}
