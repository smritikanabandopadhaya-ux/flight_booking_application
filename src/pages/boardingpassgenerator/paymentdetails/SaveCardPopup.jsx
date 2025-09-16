const SaveCardPopup = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-sm p-6">
        <h2 className="text-lg font-semibold text-slate-900 mb-2">
          Save card for future use?
        </h2>
        <p className="text-sm text-slate-600 mb-6">
          Do you want us to securely save your card details for faster checkout
          in the future?
        </p>

        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg border border-slate-300 text-slate-600 hover:bg-slate-100 transition"
          >
            No, thanks
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 rounded-lg bg-purple-600 text-white font-medium hover:bg-white hover:text-purple-900"
          >
            Yes, save
          </button>
        </div>
      </div>
    </div>
  );
};

export default SaveCardPopup;