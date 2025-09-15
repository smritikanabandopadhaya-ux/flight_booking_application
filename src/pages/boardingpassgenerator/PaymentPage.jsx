import React, { useState } from "react";

const luhnCheck = (ccNum) => {
  const cleaned = ccNum.replace(/\s+/g, "");
  if (!/^[0-9]{12,19}$/.test(cleaned)) return false;
  let sum = 0;
  let shouldDouble = false;
  for (let i = cleaned.length - 1; i >= 0; i--) {
    let digit = parseInt(cleaned.charAt(i), 10);
    if (shouldDouble) {
      digit *= 2;
      if (digit > 9) digit -= 9;
    }
    sum += digit;
    shouldDouble = !shouldDouble;
  }
  return sum % 10 === 0;
};

const formatCardNumber = (value) =>
  value
    .replace(/\D/g, "")
    .slice(0, 16)
    .replace(/(.{4})/g, "$1 ")
    .trim();

const PaymentPage = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [name, setName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [amount, setAmount] = useState("499.00");
  const [errors, setErrors] = useState({});
  const [processing, setProcessing] = useState(false);
  const [successData, setSuccessData] = useState(null);
  const myDetails = JSON.parse(localStorage.getItem("flightData"));
  const mypersonalDetails = JSON.parse(localStorage.getItem("loginData"));

  const validate = () => {
    const errs = {};
    const cleanedCard = cardNumber.replace(/\s+/g, "");

    if (!luhnCheck(cleanedCard)) errs.cardNumber = "Invalid card number.";
    if (!name.trim()) errs.name = "Cardholder name is required.";

    if (!/^(0[1-9]|1[0-2])\/?([0-9]{2}|[0-9]{4})$/.test(expiry)) {
      errs.expiry = "Expiry must be MM/YY or MM/YYYY";
    } else {
      const parts = expiry.split("/");
      const month = parseInt(parts[0], 10);
      let year = parseInt(parts[1], 10);
      year = year < 100 ? 2000 + year : year;
      const expiryDate = new Date(year, month - 1, 1);
      expiryDate.setMonth(expiryDate.getMonth() + 1);
      expiryDate.setDate(0); // end of month
      if (expiryDate < new Date()) errs.expiry = "Card has expired.";
    }

    if (!/^\d{3,4}$/.test(cvv)) errs.cvv = "CVV must be 3 or 4 digits.";
    if (!/^\d+(\.\d{1,2})?$/.test(amount) || Number(amount) <= 0) {
      errs.amount = "Enter a valid amount.";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setProcessing(true);
    setErrors({});

    setTimeout(() => {
      const fakeTxId = `TXN-${Math.random().toString(36).slice(2, 10).toUpperCase()}`;
      setSuccessData({
        txId: fakeTxId,
        amount: Number(amount).toFixed(2),
        name: name.trim(),
        last4: cardNumber.replace(/\s+/g, "").slice(-4),
        date: new Date().toLocaleString(),
      });
      setProcessing(false);
      setCardNumber("");
      setCvv("");
      setExpiry("");
    }, 900);
  };

  if (successData) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-indigo-50 flex items-center justify-center p-6">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-lg border border-slate-100 p-6">
          <div className="text-2xl font-semibold text-slate-900 mb-2">Payment Successful</div>
          <p className="text-sm text-slate-500 mb-6">Transaction ID: <span className="font-mono font-medium">{successData.txId}</span></p>

          <div className="space-y-3 mb-4">
            <div className="flex justify-between text-sm text-slate-700">
              <span>Amount</span>
              <span className="font-semibold">₹{successData.amount}</span>
            </div>
            <div className="flex justify-between text-sm text-slate-700">
              <span>Paid By</span>
              <span className="font-semibold">{successData.name}</span>
            </div>
            <div className="flex justify-between text-sm text-slate-700">
              <span>Card</span>
              <span className="font-mono">•••• {successData.last4}</span>
            </div>
            <div className="flex justify-between text-sm text-slate-700">
              <span>Date</span>
              <span className="text-slate-600">{successData.date}</span>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-100 flex gap-3">
            <button
              onClick={() => setSuccessData(null)}
              className="flex-1 py-2 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition"
            >
              Make another payment
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-indigo-50 flex items-center justify-center p-6">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white rounded-2xl shadow-lg border border-slate-100 p-6"
        autoComplete="off"
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-slate-900">Payment Details</h2>
          <span className="text-sm text-slate-500"></span>
        </div>

        <label className="block text-sm text-slate-700 mb-2">
          Amount : ₹ {myDetails.price} 
          
          {errors.amount && <div className="text-rose-600 text-xs mt-1">{errors.amount}</div>}
        </label>

        <label className="block text-sm text-black mb-2">
          Cardholder name
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            defaultValue={mypersonalDetails.name}
            className={`mt-2 w-full rounded-lg border p-3 text-sm outline-none focus:ring-2 focus:ring-indigo-300 transition ${errors.name ? 'border-rose-300 bg-rose-50' : 'border-slate-200'}`}
          />
          {errors.name && <div className="text-rose-600 text-xs mt-1">{errors.name}</div>}
        </label>

        <label className="block text-sm text-slate-700 mb-2">
          Card number
          <input
            inputMode="numeric"
            value={formatCardNumber(cardNumber)}
            onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
            placeholder="1234 5678 9012 3456"
            maxLength={19}
            className={`mt-2 w-full rounded-lg border p-3 text-sm outline-none focus:ring-2 focus:ring-indigo-300 transition ${errors.cardNumber ? 'border-rose-300 bg-rose-50' : 'border-slate-200'}`}
          />
          {errors.cardNumber && <div className="text-rose-600 text-xs mt-1">{errors.cardNumber}</div>}
        </label>

        <div className="grid grid-cols-2 gap-3">
          <label className="block text-sm text-slate-700 mb-2">
            Expiry (MM/YY)
            <input
              value={expiry}
              onChange={(e) =>
                setExpiry(
                  e.target.value
                    .replace(/[^0-9/]/g, "")
                    .slice(0, 7)
                    .replace(/^(\d{2})(\d)/, "$1/$2")
                )
              }
              placeholder="MM/YY"
              className={`mt-2 w-full rounded-lg border p-3 text-sm outline-none focus:ring-2 focus:ring-indigo-300 transition ${errors.expiry ? 'border-rose-300 bg-rose-50' : 'border-slate-200'}`}
            />
            {errors.expiry && <div className="text-rose-600 text-xs mt-1">{errors.expiry}</div>}
          </label>

          <label className="block text-sm text-slate-700 mb-2">
            CVV
            <input
              inputMode="numeric"
              value={cvv}
              onChange={(e) => setCvv(e.target.value.replace(/\D/g, "").slice(0, 4))}
              placeholder="123"
              maxLength={3}
              className={`mt-2 w-full rounded-lg border p-3 text-sm outline-none focus:ring-2 focus:ring-indigo-300 transition ${errors.cvv ? 'border-rose-300 bg-rose-50' : 'border-slate-200'}`}
            />
            {errors.cvv && <div className="text-rose-600 text-xs mt-1">{errors.cvv}</div>}
          </label>
        </div>

        <div className="mt-4">
          <button
            type="submit"
            disabled={processing}
            className={`w-full py-3 rounded-lg text-white font-medium ${processing ? 'bg-indigo-400 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700'} transition`}
          >
            {processing ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="w-5 h-5 animate-spin" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                </svg>
                Processing...
              </span>
            ) : (
              `Pay ₹${myDetails.price}.00`
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
export default PaymentPage;