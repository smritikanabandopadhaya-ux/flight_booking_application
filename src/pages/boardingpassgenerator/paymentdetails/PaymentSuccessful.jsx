import { useNavigate } from "react-router-dom";
import background from "../../../assets/background_cover_image.jpeg";

const PaymentSuccess = () => {
  const navigate = useNavigate();
  const cardholderName = localStorage.getItem("cardholderName");
  const myDetails = JSON.parse(localStorage.getItem("flightData"));
  const generateTransactionId = () => {
    const prefix = "TXN";
    const randomNum = Math.floor(10000000 + Math.random() * 90000000);
    return `${prefix}${randomNum}`;
  };

  const newId = generateTransactionId();

  const handleBoardingPass = () => {
    navigate("/boarding-pass");
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-6"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg border border-slate-100 p-6">
        <div className="text-2xl font-semibold text-purple-900 mb-2">
          Payment Successful
        </div>

        <p className="text-sm text-slate-500 mb-6">
          Transaction ID:
          <span className="font-mono font-bold"> {newId}</span>
        </p>

        <div className="space-y-3 mb-4">
          <div className="flex justify-between text-sm text-slate-700">
            <span>Amount</span>
            <span className="font-bold">₹{myDetails.price}</span>
          </div>
          <div className="flex justify-between text-sm text-slate-700">
            <span>Paid By</span>
            <span className="font-bold">{cardholderName}</span>
          </div>
          <div className="flex justify-between text-sm text-slate-700">
            <span>Date</span>
            <span className="font-bold">
              {new Date().toISOString().slice(0, 10)}
            </span>
          </div>
          <div className="flex justify-between text-sm text-slate-700">
            <span>Time</span>
            <span className="font-bold">
              {new Date().toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </span>
          </div>
        </div>

        <div className="pt-4 border-t border-slate-100 flex gap-3">
          <button
            onClick={handleBoardingPass}
            className="flex-1 py-2 rounded-lg bg-purple-600 text-white font-medium hover:bg-indigo-700 transition"
          >
            Check Boarding Pass
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
