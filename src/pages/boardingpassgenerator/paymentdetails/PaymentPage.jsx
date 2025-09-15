import { useState } from "react";
import SaveCardPopup from "./saveCardPopup";
import { useNavigate } from "react-router-dom";
import background from "../../../assets/background_cover_image.jpeg";
const PaymentPage = () => {
  const myDetails = JSON.parse(localStorage.getItem("flightData"));
  const mypersonalDetails = JSON.parse(localStorage.getItem("loginData"));
  const [cardNumber, setCardNumber] = useState("");
  const [cardholderName, setcardholderName] = useState(
    mypersonalDetails.name || ""
  );
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();
  const today = new Date();
  const minValue = `${today.getFullYear()}-${String(
    today.getMonth() + 1
  ).padStart(2, "0")}`;

  const handleSubmit = (e) => {
    const flightData = JSON.parse(localStorage.getItem("flightData")) || {};
    const boardingDetails =
      JSON.parse(localStorage.getItem("boardingDetails")) || {};
    const selectedSeat = JSON.parse(localStorage.getItem("selectedSeat")) || "";
    const { seatDetails, ...filteredFlightData } = flightData;
    const newEntry = {
      ...filteredFlightData,
      ...boardingDetails,
      seat: selectedSeat,
    };
    const boardingHistory =
      JSON.parse(localStorage.getItem("boardingHistory")) || [];
    boardingHistory.push(newEntry);
    localStorage.setItem("boardingHistory", JSON.stringify(boardingHistory));
    console.log("Boarding history updated:", boardingHistory);
    e.preventDefault();
    e.stopPropagation();
    localStorage.setItem("cardholderName", cardholderName);
    setShowPopup(true);
  };
  const handleConfirmSave = () => {
    setShowPopup(false);
    const cardData = {
      name: cardholderName,
      number: cardNumber,
      expiry,
      cvv,
    };
    console.log("Saving card:", cardData);
    localStorage.setItem("cardDetails", JSON.stringify(cardData));
    navigate("/payment-successful");
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-6"
      style={{ backgroundImage: `url(${background})` }}
    >
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white rounded-2xl shadow-xl shadow-gray-800 border border-slate-100 p-6"
        autoComplete="off"
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-slate-900">
            Payment Details
          </h2>
          <span className="text-sm text-slate-500"></span>
        </div>

        <label className="block text-sm text-slate-700 mb-2">
          Amount : ₹ {myDetails.price}.00
        </label>

        <label className="block text-sm text-black mb-2">
          Cardholder name
          <input
            type="text"
            name="cardholderName"
            value={cardholderName}
            onChange={(e) => setcardholderName(e.target.value)}
            className="mt-2 w-full rounded-lg border p-3 text-sm outline-none focus:ring-2 focus:ring-indigo-300 transition"
            required
          />
        </label>

        <label className="block text-sm text-slate-700 mb-2">
          Card number
          <input
            inputMode="numeric"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            name="cardNumber"
            placeholder="1234 5678 9012 3456"
            minLength={13}
            maxLength={19}
            className="mt-2 w-full rounded-lg border p-3 text-sm outline-none focus:ring-2 focus:ring-indigo-300 transition"
            required
          />
        </label>

        <div className="grid grid-cols-2 gap-3">
          <label htmlFor="expiry" className="block text-sm text-slate-700 mb-2">
            Expiry (MM/YY)
            <input
              type="month"
              id="expiry"
              name="expiry"
              value={expiry}
              onChange={(e) => setExpiry(e.target.value)}
              placeholder="MM/YY"
              min={minValue}
              className="mt-2 w-full rounded-lg border p-3 text-sm outline-none focus:ring-2 focus:ring-indigo-300 transition"
              required
            />
          </label>

          <label className="block text-sm text-slate-700 mb-2">
            CVV
            <input
              inputMode="numeric"
              name="cvv"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              placeholder="123"
              maxLength={3}
              className="mt-2 w-full rounded-lg border p-3 text-sm outline-none focus:ring-2 focus:ring-indigo-300 transition"
              required
            />
          </label>
        </div>

        <div className="mt-4">
          <button
            type="submit"
            className="w-full bg-purple-950 py-3 rounded-lg text-white font-medium hover:bg-purple-500 hover:text-white hover:border-2 hover:border-purple-700"
          >
            Pay ₹{myDetails.price}.00
          </button>
        </div>
      </form>
      <SaveCardPopup
        isOpen={showPopup}
        onClose={() => {
          setShowPopup(false);
          navigate("/payment-successful");
        }}
        onConfirm={handleConfirmSave}
      />
    </div>
  );
};
export default PaymentPage;
