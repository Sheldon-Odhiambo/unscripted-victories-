import React from 'react';
import { Heart, X } from 'lucide-react';

export const DonatePage: React.FC<{ onBack: () => void }> = ({
  onBack,
}) => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="relative w-full max-w-lg rounded-3xl border border-gray-100 bg-white p-8 text-center shadow-sm">
        {/* Close Button */}
        <button
          onClick={onBack}
          className="absolute top-4 right-4 text-gray-400 transition hover:text-black"
        >
          <X size={24} />
        </button>

        {/* Icon */}
        <div className="mb-6 flex justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600">
            <Heart size={32} />
          </div>
        </div>

        {/* Title */}
        <h2 className="mb-2 text-3xl font-bold text-gray-900">
          Support Unscripted Victories
        </h2>

        {/* Description */}
        <p className="mb-8 leading-relaxed text-gray-600">
          Your contribution helps us empower communities, support impactful
          initiatives, and create opportunities that transform lives. Every
          donation, no matter the amount, makes a difference.
        </p>

        {/* Payment Details */}
        <div className="mb-6 rounded-2xl border border-green-100 bg-green-50 p-6 text-left shadow-sm">
          <h3 className="mb-4 text-xl font-semibold text-green-700">
            M-Pesa Donation Details
          </h3>

          <div className="space-y-4">
            <div>
              <p className="text-sm font-medium text-gray-500">
                Paybill Number
              </p>
              <p className="text-xl font-bold text-green-700">
                0320184121988
              </p>
            </div>

            <div>
              <p className="text-sm font-medium text-gray-500">
                Account Number
              </p>
              <p className="text-xl font-bold text-green-700">
                247247
              </p>
            </div>
          </div>
        </div>

        {/* Instructions */}
        <div className="rounded-2xl border border-gray-200 p-6 text-left">
          <h3 className="mb-4 text-lg font-semibold text-gray-900">
            How to Donate
          </h3>

          <ol className="list-decimal space-y-2 pl-5 text-gray-600">
            <li>Open the M-Pesa menu on your phone.</li>
            <li>Select <strong>Lipa na M-Pesa</strong>.</li>
            <li>Choose <strong>Paybill</strong>.</li>
            <li>Enter the Paybill Number: <strong>0320184121988</strong>.</li>
            <li>Enter the Account Number: <strong>247247</strong>.</li>
            <li>Enter the amount you wish to donate.</li>
            <li>Enter your M-Pesa PIN and confirm the transaction.</li>
          </ol>
        </div>

        {/* Footer */}
        <p className="mt-8 text-sm italic text-gray-500">
          Thank you for supporting Unscripted Victories.
        </p>
      </div>
    </div>
  );
};