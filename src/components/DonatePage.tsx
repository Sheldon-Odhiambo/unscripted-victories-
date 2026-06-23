import React, { useState } from 'react';
import { Heart, CreditCard, X } from 'lucide-react';

export const DonatePage: React.FC<{onBack: () => void}> = ({onBack}) => {
    const [amount, setAmount] = useState('0');

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 max-w-lg w-full text-center relative">
                <button onClick={onBack} className="absolute top-4 right-4 text-gray-400 hover:text-black">
                    <X size={24} />
                </button>
                <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center text-cyan-600">
                        <Heart size={32} />
                    </div>
                </div>
                <h2 className="text-2xl font-bold mb-2">Donate to</h2>
                <h3 className="text-xl font-semibold mb-6">Touching Soles Inc.</h3>
                <p className="text-gray-600 mb-8 leading-relaxed">
                    Our purpose is to provide shoes to underserved youth, empowering them with confidence and motivation to step forward with pride
                </p>
                <div className="flex items-center justify-center mb-8">
                    <span className="text-4xl font-bold text-gray-900">$</span>
                    <input 
                        type="number" 
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        className="text-4xl font-bold text-gray-900 w-24 text-center focus:outline-none focus:border-b-2 border-gray-300"
                    />
                    <span className="text-lg text-gray-500 font-normal ml-2">USD</span>
                </div>
                
                <div className="flex items-center justify-center mb-8">
                    <input type="checkbox" id="monthly" className="w-5 h-5 text-cyan-600 rounded mr-2" defaultChecked />
                    <label htmlFor="monthly" className="text-gray-700">Make this a monthly donation</label>
                </div>
                
                <div className="space-y-4">
                    <a href="https://www.paypal.com/donate?business=YOUR_PAYPAL_BUSINESS_EMAIL" target="_blank" rel="noopener noreferrer" className="block w-full bg-yellow-400 text-black py-3 rounded-full font-bold hover:bg-yellow-500 transition text-center">Donate with PayPal</a>
                    <a href="https://www.paypal.com/donate?business=YOUR_PAYPAL_BUSINESS_EMAIL" target="_blank" rel="noopener noreferrer" className="block w-full border border-gray-300 text-gray-700 py-3 rounded-full font-bold hover:bg-gray-100 transition text-center">Donate with Debit or Credit Card</a>
                </div>
            </div>
        </div>
    );
};
