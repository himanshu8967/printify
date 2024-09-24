import React from 'react';
import { BiRightArrowAlt } from 'react-icons/bi'; // Import arrow icon
import customproduct from '../assets/custom-products.webp';
import fullfillment from '../assets/fullfillment.webp';
import yourproduct from '../assets/your-products.webp';
import productimage from '../assets/productimg.jpg';

const MainThird = () => {
    return (
        <div className="my-16 py-10 px-4 lg:px-14 bg-gray-100">
            {/* First Section with Image and Text */}
            <div className="flex flex-col lg:flex-row items-center justify-end w-full max-w-7xl mx-auto mb-12 space-y-8 lg:space-y-0 lg:space-x-12">
                {/* Image Container */}
                <div className="lg:w-1/2 h-96">
                    <img
                        src={productimage}
                        alt="Product display"
                        className="w-full h-full object-cover" 
                    />
                </div>

                {/* Text Container */}
                <div className="lg:w-1/2 text-left mt-6 lg:mt-0 px-10 lg:px-0  p-10 ">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">
                        Easily add your design to a wide range of products
                    </h1>
                    <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                        With our free design tools, you can easily add your custom designs to t-shirts, mugs, phone cases, and hundreds of other products.
                    </p>
                    <a 
                        href="/products" 
                        className="text-green-600 font-semibold flex items-center underline hover:text-green-800 transition duration-300"
                    >
                        All the products
                        <BiRightArrowAlt className="ml-2 text-green-600" />
                    </a>
                </div>
            </div>

            {/* Grid Layout for Product Categories */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4 lg:px-0">
                
                {/* Product 1 */}
                <div className="flex flex-col items-start justify-center bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105">
                    <div className="w-full h-64">
                        <img
                            src={customproduct}
                            alt="Higher Profits"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="p-6">
                        <h3 className="text-lg font-bold text-green-600 mb-2">CREATE</h3>
                        <h3 className="text-lg font-bold text-gray-800 mb-2">Custom Products</h3>
                        <p className="text-sm text-gray-600">
                            Easily add your designs to a wide range of products using our free tools.
                        </p>
                    </div>
                </div>

                {/* Product 2 */}
                <div className="flex flex-col items-start justify-center bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105">
                    <div className="w-full h-64">
                        <img
                            src={yourproduct}
                            alt="Sell on your terms"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="p-6">
                        <h3 className="text-lg font-bold text-green-600 mb-2">SELL</h3>
                        <h3 className="text-lg font-bold text-gray-800 mb-2">On Your Terms</h3>
                        <p className="text-sm text-gray-600">
                            You choose the products, sale price, and where to sell.
                        </p>
                    </div>
                </div>

                {/* Product 3 */}
                <div className="flex flex-col items-start justify-center bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105">
                    <div className="w-full h-64">
                        <img
                            src={fullfillment}
                            alt="Fulfillment"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="p-6">
                        <h3 className="text-lg font-bold text-green-600 mb-2">WE HANDLE</h3>
                        <h3 className="text-lg font-bold text-gray-800 mb-2">Fulfillment</h3>
                        <p className="text-sm text-gray-600">
                            Once an order is placed, we automatically handle all the printing and delivery logistics.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default MainThird;
