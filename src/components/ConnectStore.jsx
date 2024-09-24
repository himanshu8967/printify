import React from 'react';
import storelogo from "../assets/storelogo.jpeg";

const ConnectStore = () => {
    return (
        <div className="bg-white min-h-screen py-10 px-4 my-8 flex flex-col items-center">
            <h2 className="text-3xl font-bold text-center mb-4">Connect Your Store</h2>
            <p className="text-center text-sm text-gray-500 mb-4">
                Printify easily integrates with major e-commerce platforms and marketplaces.
            </p>

            {/* Store Logo */}
            <div className="relative w-full h-[600px] flex justify-center items-center mb-8">
                <img src={storelogo} alt="Store Logo" className="h-32 w-auto mx-auto z-10" />

                {/* Store Links with varying sizes */}
                <a
                    href="/prestashop/"
                    className="absolute top-3 left-[36%] w-36 h-36 bg-slate-200 border border-gray-300 text-black flex items-center justify-center rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-110 hover:shadow-2xl"
                >
                    PrestaShop
                </a>

                <a
                    href="/wix/"
                    className="absolute top-10 right-[28%] w-28 h-28 bg-slate-200 border border-gray-300 text-black flex items-center justify-center rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-110 hover:shadow-2xl"
                >
                    Wix
                </a>

                <a
                    href="/woocommerce/"
                    className="absolute top-[50%] left-[10%] translate-y-[-50%] w-32 h-32 bg-slate-200 border border-gray-300 text-black flex items-center justify-center rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-110 hover:shadow-2xl"
                >
                    WooCommerce
                </a>

                <a
                    href="/squarespace/"
                    className="absolute top-[35%] right-[8%] translate-y-[-50%] w-40 h-40 bg-slate-200 border border-gray-300 text-black flex items-center justify-center rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-110 hover:shadow-2xl"
                >
                    Squarespace
                </a>

                <a
                    href="/shopify/"
                    className="absolute bottom-10 left-[20%] w-44 h-44 bg-slate-200 border border-gray-300 text-black flex items-center justify-center rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-110 hover:shadow-2xl"
                >
                    Shopify
                </a>

                <a
                    href="/integrations/"
                    className="absolute bottom-10 right-[20%] w-36 h-36 bg-slate-200 border border-gray-300 text-black flex items-center justify-center rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-110 hover:shadow-2xl"
                >
                    Integrations
                </a>

                <a
                    href="/etsy/"
                    className="absolute bottom-[65%] left-[5%] translate-y-[-50%] w-28 h-28 bg-slate-200 border border-gray-300 text-black flex items-center justify-center rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-110 hover:shadow-2xl"
                >
                    Etsy
                </a>

                <a
                    href="/printify-api/"
                    className="absolute bottom-[25%] right-[5%] w-32 h-32 bg-slate-200 border border-gray-300 text-black flex items-center justify-center rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-110 hover:shadow-2xl"
                >
                    API
                </a>

                <a
                    href="/bigcommerce/"
                    className="absolute bottom-0 left-[50%] translate-x-[-50%] w-36 h-36 bg-slate-200 border border-gray-300 text-black flex items-center justify-center rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-110 hover:shadow-2xl"
                >
                    BigCommerce
                </a>
            </div>

            <div className="bg-green-100 mx-auto p-8 rounded-xl flex justify-between items-center shadow-lg max-w-5xl my-10">
                {/* Paragraph Container */}
                <div className="flex-1 pr-4 w-2/5"> 
                    <p className="text-lg font-semibold text-green-500">
                        Are you a large business looking for custom solutions?
                    </p>
                </div>

                {/* Button Container */}
                <div className="flex-shrink-0">
                    <a
                        href="/talk-to-sales"
                        className="bg-white text-sm font-semibold text-black px-6 py-3 rounded-lg shadow-md hover:bg-slate-50 transition duration-300 ease-in-out"
                    >
                        Talk to Sales
                    </a>
                </div>
            </div>

        </div>
    );
};

export default ConnectStore;
