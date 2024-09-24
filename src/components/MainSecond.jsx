import React from 'react';
import HighProfit from '../assets/higher-profits.svg';
import BestSelection from '../assets/best-selection.svg';
import robust from '../assets/robust-scaling.svg';

const MainSecond = () => {
    return (
        <div className="flex items-center justify-center mt-6 p-6 lg:p-14 bg-white">
            {/* Parent div containing three child divs */}
            <div className="flex flex-col lg:flex-row items-center justify-center w-full max-w-5xl space-y-6 lg:space-y-0 lg:space-x-4"> {/* Adjusted spacing */}
                {/* Child Div 1 */}
                <div className="flex flex-col items-start justify-center p-6 w-full lg:w-1/3">
                    <img
                        src={HighProfit}
                        alt="Higher Profits"
                        className="w-24 h-24 object-cover rounded-full ml-3   mb-4"
                    />
                    <h3 className="text-lg font-bold text-gray-800 mb-2">
                        Higher Profits
                    </h3>
                    <p className="text-sm text-gray-600">
                        We offer some of the lowest prices in the industry because print providers continuously compete to win your business.
                    </p>
                </div>

                {/* Child Div 2 */}
                <div className="flex flex-col items-start justify-center p-6 w-full lg:w-1/3">
                    <img
                        src={BestSelection}
                        alt="Robust Scaling"
                        className="w-24 h-24 object-cover rounded-full ml-3 mb-4"
                    />
                    <h3 className="text-lg font-bold text-gray-800 mb-2">
                        Robust Scaling
                    </h3>
                    <p className="text-sm text-gray-600">
                        Easily handle peak holiday seasons, with our wide network of partners and automatic routing functionality.
                    </p>
                </div>

                {/* Child Div 3 */}
                <div className="flex flex-col items-start justify-center p-6 w-full lg:w-1/3">
                    <img
                        src={robust}
                        alt="Best Selection"
                        className="w-24 h-24 object-cover rounded-full ml-3 mb-4"
                    />
                    <h3 className="text-lg font-bold text-gray-800 mb-2">
                        Best Selection
                    </h3>
                    <p className="text-sm text-gray-600">
                        With 900+ products and top quality brands, you can choose the best products for your business.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default MainSecond;
