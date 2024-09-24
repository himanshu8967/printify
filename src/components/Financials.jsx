import React from 'react';
import makemoney from "../assets/makemoney.avif";

const Financials = () => {
    return (
        <div className='bg-white h-screen  flex items-end  my-8'>
            <div className="bg-cyan-950 w-1/2 shadow-lg border rounded-2xl py-14 flex items-center justify-center ml-40">
                <div className="w-1/2 flex flex-col justify-start">
                    <h2 className="text-3xl font-bold text-white mb-3">Make Money, Risk-Free</h2>
                    <p className="text-white text-sm mb-4 whitespace-nowrap">You pay for fulfillment only when you make a sale</p>

                    <div className="rounded-lg bg-slate-950 p-6 my-3 shadow-md">
                        <div className="flex justify-between py-3">
                            <p className="text-gray-300 text-sm font-bold">You sell a t-shirt</p>
                            <p className="font-bold text-gray-200 text-sm">$30</p>
                        </div>
                        <div className="flex justify-between py-3">
                            <p className="text-gray-300 font-bold text-sm">You pay for its production</p>
                            <p className="font-semibold text-gray-200 text-base">$12</p>
                        </div>
                        <div className="border-t border-gray-600 mt-4 pt-4 flex justify-between items-center">
                            <h5 className="text-lg font-bold text-green-500">Your profit</h5>
                            <h5 className="text-lg font-bold text-green-500">$18</h5>
                        </div>
                    </div>

                    <a href="/app/register">
                        <button className="bg-green-500 text-white hover:bg-green-700 transition duration-200 border border-green-600 hover:text-slate-200 px-4 py-2 mt-5 rounded-lg text-center text-sm font-medium shadow-sm">
                            Signup
                        </button>
                    </a>

                    <p className="text-sm text-gray-400 mt-5 font-semibold whitespace-nowrap">
                        100% Free to use · 900+ Products · Largest print network
                    </p>
                </div>
            </div>
            {/* Image Section with Increased Size */}
            <div className=' flex  items-center'>
                <img
                    src={makemoney}
                    alt="Make Money"
                    className="  max-w-full max-h-100 object-cover"
                />
            </div>

        </div>
    );
};

export default Financials;
