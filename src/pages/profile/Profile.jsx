import React, { useEffect, useState } from "react";
import background from "../../assets/background_image1.jpeg";
import Footer from "../../components/footer/Footer";

const Profile = () => {
  const user = JSON.parse(localStorage.getItem("loginData"));
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    const bookingHistory =
      JSON.parse(localStorage.getItem("bookingHistory")) || [];
    setBookings(bookingHistory);
  }, []);
  return (
    <>
      <div className="min-h-screen py-10 px-4" style={{ backgroundImage: `url(${background})` }}>
        {/* User Info */}
        <div className="max-w-4xl mx-auto bg-white shadow-md rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold text-[#533d88]">
            Welcome, {user?.name}
          </h2>
          <p className="text-gray-600 mt-2">Your Booking History</p>
        </div>
        {/* Booking History */}
        <div className="max-w-6xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {bookings.length > 0 ? (
            bookings.map((booking, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition p-6 flex flex-col justify-between"
              >
                <h3 className="text-lg font-bold text-[#533d88] mb-2">
                  {booking.flightNumber} - {booking.airline}
                </h3>
                <p className="text-gray-700 text-sm">
                  <span className="font-semibold">From:</span> {booking.origin}
                </p>
                <p className="text-gray-700 text-sm">
                  <span className="font-semibold">To:</span>{" "}
                  {booking.destination}
                </p>
                <p className="text-gray-700 text-sm">
                  <span className="font-semibold">Date:</span> {booking.date}
                </p>
                <p className="text-gray-700 text-sm">
                  <span className="font-semibold">Time:</span> {booking.time}
                </p>
                <p className="text-gray-700 text-sm">
                  <span className="font-semibold">Seat:</span> {booking.seat}
                </p>
                <p className="text-gray-700 text-sm">
                  <span className="font-semibold">Gate:</span>{" "}
                  {booking.gate || "N/A"}
                </p>
              </div>
            ))
          ) : (
            <p className="text-center col-span-full text-white">
              No bookings found.
            </p>
          )}
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};
export default Profile;
