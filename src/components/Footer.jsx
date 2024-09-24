import React from 'react';

const Footer = () => {
    return (
        <footer className="pt-10 bg bg-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center mt-10 pt-20 justify-between">
                    {/* Logo */}
                    <h1 className="text-3xl font-bold text-green-500 hover:text-green-400 transition duration-200 mb-6 lg:mb-0">
                        Printify
                    </h1>
                    {/* Social Media Links */}
                    <div className="flex items-center justify-center lg:justify-end space-x-4 mb-4">
                        <a
                            href="https://www.facebook.com/Printify/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Facebook"
                        >
                            <img
                                src="https://printify.com/wp-content/uploads/2019/07/facebook-icon.svg"
                                alt="Facebook"
                                className="w-6 h-6 md:w-8 md:h-8 hover:opacity-80 transition-opacity"
                            />
                        </a>
                        <a
                            href="https://www.instagram.com/printify/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                        >
                            <img
                                src="https://printify.com/wp-content/uploads/2019/01/instagram-icon.svg"
                                alt="Instagram"
                                className="w-6 h-6 md:w-8 md:h-8 hover:opacity-80 transition-opacity"
                            />
                        </a>
                        <a
                            href="https://www.linkedin.com/company/printify/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                        >
                            <img
                                src="https://printify.com/wp-content/uploads/2019/01/linkedin-icon.svg"
                                alt="LinkedIn"
                                className="w-6 h-6 md:w-8 md:h-8 hover:opacity-80 transition-opacity"
                            />
                        </a>
                        <a
                            href="https://twitter.com/printify"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Twitter"
                        >
                            <img
                                src="https://printify.com/wp-content/uploads/2023/09/X-Logo-Green.svg"
                                alt="Twitter"
                                className="w-6 h-6 md:w-8 md:h-8 hover:opacity-80 transition-opacity"
                            />
                        </a>
                        <a
                            href="https://www.youtube.com/c/printify"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="YouTube"
                        >
                            <img
                                src="https://printify.com/wp-content/uploads/2019/01/youtube-icon.svg"
                                alt="YouTube"
                                className="w-6 h-6 md:w-8 md:h-8 hover:opacity-80 transition-opacity"
                            />
                        </a>
                        <a
                            href="https://www.tiktok.com/@printifyofficial?lang=en"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="TikTok"
                        >
                            <img
                                src="https://printify.com/wp-content/uploads/2023/02/Tiktok-1.svg"
                                alt="TikTok"
                                className="w-6 h-6 md:w-8 md:h-8 hover:opacity-80 transition-opacity"
                            />
                        </a>
                        <a
                            href="https://www.reddit.com/r/Printify/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Reddit"
                        >
                            <img
                                src="https://printify.com/wp-content/uploads/2019/01/reddit-icon.svg"
                                alt="Reddit"
                                className="w-6 h-6 md:w-8 md:h-8 hover:opacity-80 transition-opacity"
                            />
                        </a>
                    </div>
                </div>

                <div className="flex flex-wrap justify-between mt- pt-20 w-full space-y-5 lg:space-y-0">
                    {/* Integrations Links */}
                    <div className="flex flex-col items-center lg:items-start space-y-3 text-center lg:text-left">
                        <h4 className="font-bold text-sm text-slate-900">Intrgration</h4>
                        <a href="#" className="hover:text-green-500 transition-colors text-sm text-slate-800 ">Shopify</a>
                        <a href="#" className="hover:text-green-500 transition-colors text-sm text-slate-800">Etsy</a>
                        <a href="#" className="hover:text-green-500 transition-colors text-sm text-slate-800">eBay</a>
                        <a href="#" className="hover:text-green-500 transition-colors text-sm text-slate-800">Amazon</a>
                        <a href="#" className="hover:text-green-500 transition-colors text-sm text-slate-800">TikTok Shop</a>
                        <a href="#" className="hover:text-green-500 transition-colors text-sm text-slate-800">PrestaShop</a>
                        <a href="#" className="hover:text-green-500 transition-colors text-sm text-slate-800">BigCommerce</a>
                        <a href="#" className="hover:text-green-500 transition-colors text-sm text-slate-800">Wix</a>
                        <a href="#" className="hover:text-green-500 transition-colors text-sm text-slate-800">WooCommerce</a>
                        <a href="#" className="hover:text-green-500 transition-colors text-sm text-slate-800">Squarespace</a>
                        <a href="#" className="hover:text-green-500 transition-colors text-sm text-slate-800">Printify API</a>
                        <a href="#" className="hover:text-green-500 transition-colors text-sm text-slate-800">Printify Pop-Up Store</a>
                        <a href="#" className="hover:text-green-500 transition-colors text-sm text-slate-800">Shutterstock</a>

                    </div>

                    {/* Discover Links */}
                    <div className="flex flex-col items-center lg:items-start space-y-3 text-center lg:text-left">
                        <h4 className="font-bold text-sm text-slate-900">Discover</h4>
                        <a href="#" className="hover:text-green-500 transition-colors text-sm text-slate-800">Blog</a>
                        <a href="#" className="hover:text-green-500 transition-colors text-sm text-slate-800">Guides</a>
                        <a href="#" className="hover:text-green-500 transition-colors text-sm text-slate-800">Products</a>
                        <a href="#" className="hover:text-green-500 transition-colors text-sm text-slate-800">Etsy Print-On-Demand</a>
                        <a href="#" className="hover:text-green-500 transition-colors text-sm text-slate-800">Shopify Print-On-Demand</a>
                        <a href="#" className="hover:text-green-500 transition-colors text-sm text-slate-800">WooCommerce Print-On-Demand</a>
                        <a href="#" className="hover:text-green-500 transition-colors text-sm text-slate-800">Wix Print-On-Demand</a>
                        <a href="#" className="hover:text-green-500 transition-colors text-sm text-slate-800">Squarespace Print-On-Demand</a>
                        <a href="#" className="hover:text-green-500 transition-colors text-sm text-slate-800">Make Your Own Shirt</a>
                        <a href="#" className="hover:text-green-500 transition-colors text-sm text-slate-800">Brands</a>
                        <a href="#" className="hover:text-green-500 transition-colors text-sm text-slate-800">Pricing</a>
                        <a href="#" className="hover:text-green-500 transition-colors text-sm text-slate-800">Shipping Rates</a>
                        <a href="#" className="hover:text-green-500 transition-colors text-sm text-slate-800">Mockup Generator</a>
                    </div>


                    {/* Start Selling Links */}
                    <div className="flex flex-col items-center lg:items-start space-y-3 text-center lg:text-left">
                        <h4 className="font-bold text-sm text-slate-900">Start Selling</h4>
                        <a href="#" className="hover:text-green-500 transition-colors text-sm text-slate-800">Custom T-shirts</a>
                        <a href="#" className="hover:text-green-500 transition-colors text-sm text-slate-800">Custom Hoodies</a>
                        <a href="#" className="hover:text-green-500 transition-colors text-sm text-slate-800">Custom Mugs</a>
                        <a href="#" className="hover:text-green-500 transition-colors text-sm text-slate-800">Custom Socks</a>
                        <a href="#" className="hover:text-green-500 transition-colors text-sm text-slate-800">Custom Backpacks</a>
                        <a href="#" className="hover:text-green-500 transition-colors text-sm text-slate-800">Custom Branding</a>
                        <a href="#" className="hover:text-green-500 transition-colors text-sm text-slate-800">Sell on Etsy</a>
                        <a href="#" className="hover:text-green-500 transition-colors text-sm text-slate-800">Sell on Social Media</a>
                        <a href="#" className="hover:text-green-500 transition-colors text-sm text-slate-800">Free T-shirt Designs</a>
                        <a href="#" className="hover:text-green-500 transition-colors text-sm text-slate-800">Custom Products</a>
                        <a href="#" className="hover:text-green-500 transition-colors text-sm text-slate-800">Custom All-Over-Print Hoodies</a>
                        <a href="#" className="hover:text-green-500 transition-colors text-sm text-slate-800">Start a Clothing Line</a>
                        <a href="#" className="hover:text-green-500 transition-colors text-sm text-slate-800">Start POD Business</a>
                        <a href="#" className="hover:text-green-500 transition-colors text-sm text-slate-800">Bulk Orders</a>
                        <a href="#" className="hover:text-green-500 transition-colors text-sm text-slate-800">Transferring To Printify</a>
                    </div>

                    {/* Printify Links */}
                    <div className="flex flex-col items-center lg:items-start space-y-3 text-center lg:text-left">
                        <h4 className="font-bold text-sm text-slate-900">Printify</h4>
                        <a href="#" className="hover:text-green-500 transition-colors text-sm text-slate-800">Print on Demand</a>
                        <a href="#" className="hover:text-green-500 transition-colors text-sm text-slate-800">Print Providers</a>
                        <a href="#" className="hover:text-green-500 transition-colors text-sm text-slate-800">Experts Program</a>
                        <a href="#" className="hover:text-green-500 transition-colors text-sm text-slate-800">Printify Express Delivery</a>
                        <a href="#" className="hover:text-green-500 transition-colors text-sm text-slate-800">Become a Partner</a>
                        <a href="#" className="hover:text-green-500 transition-colors text-sm text-slate-800">About</a>
                        <a href="#" className="hover:text-green-500 transition-colors text-sm text-slate-800">Printify Quality Promise</a>
                        <a href="#" className="hover:text-green-500 transition-colors text-sm text-slate-800">Jobs</a>
                        <a href="#" className="hover:text-green-500 transition-colors text-sm text-slate-800">Webinars</a>
                        <a href="#" className="hover:text-green-500 transition-colors text-sm text-slate-800">Printing Profits Podcast</a>
                        <a href="#" className="hover:text-green-500 transition-colors text-sm text-slate-800">Contact Us</a>
                        <a href="#" className="hover:text-green-500 transition-colors text-sm text-slate-800">Affiliate</a>
                        <a href="#" className="hover:text-green-500 transition-colors text-sm text-slate-800">Contact Sales</a>
                        <a href="#" className="hover:text-green-500 transition-colors text-sm text-slate-800">POD Glossary</a>
                        <a href="#" className="hover:text-green-500 transition-colors text-sm text-slate-800">Network Fulfillment Status</a>
                        <a href="#" className="hover:text-green-500 transition-colors text-sm text-slate-800">Merchant Protection</a>
                        <a href="#" className="hover:text-green-500 transition-colors text-sm text-slate-800">Security</a>
                        <a href="#" className="hover:text-green-500 transition-colors text-sm text-slate-800">Sitemap</a>
                    </div>

                </div>


            </div>

            <div className="flex flex-col justify-center items-center py-10 mt-10 space-y-4 bg-gray-200">
                {/* Policy Links */}
                <div className="flex justify-center items-center gap-8 text-sm text-gray-600">
                    <a href="#" className="hover:text-green-600 transition-colors duration-200">Intellectual Property Policy</a>
                    <a href="#" className="hover:text-green-600 transition-colors duration-200">Terms of Service</a>
                    <a href="#" className="hover:text-green-600 transition-colors duration-200">Privacy Policy</a>
                    <a href="#" className="hover:text-green-600 transition-colors duration-200">Security</a>
                </div>

                {/* Copyright Section */}
                <div>
                    <p className="text-sm text-slate-900 text-center">
                        &copy; 2024 Printify, Inc. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
