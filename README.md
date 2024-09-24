import React from 'react';

const ConnectStore = () => {
    return (
        <div className="connect-store-wrapper py-10">
            <h2 className="title text-2xl font-bold text-center mb-4">Connect your store</h2>
            <p className="description text-center text-lg text-gray-700 mb-8">
                Printify easily integrates with major e-commerce platforms and marketplaces
            </p>
            <div className="stores relative w-full flex items-center justify-center">
                <div className="stores-area relative w-full h-80">
                    <div className="stores-background absolute inset-0 bg-gray-100"></div>
                    <a
                        href="/prestashop/"
                        className="store store-presta absolute left-[24%] top-[48%] opacity-100"
                    >
                        <h2 className="text-sm">PrestaShop</h2>
                    </a>
                    <a
                        href="/wix/"
                        className="store store-wix absolute left-[95%] top-[0%] opacity-100"
                    >
                        <h2 className="text-sm">Wix</h2>
                    </a>
                    <a
                        href="/woocommerce/"
                        className="store store-woo absolute left-[77%] top-[35%] opacity-100"
                    >
                        <h2 className="text-sm">WooCommerce</h2>
                    </a>
                    <a
                        href="/squarespace/"
                        className="store store-squarespace absolute left-[64%] top-[10%] opacity-100"
                    >
                        <h2 className="text-sm">Squarespace</h2>
                    </a>
                    <a
                        href="/shopify/"
                        className="store store-shopify absolute left-[52%] top-[75%] opacity-100"
                    >
                        <h2 className="text-sm">Shopify</h2>
                    </a>
                    <a
                        href="/integrations/"
                        className="store store-integrations absolute left-[38%] top-[70%] opacity-100"
                    >
                        <h2 className="text-sm">Integrations</h2>
                    </a>
                    <a
                        href="/etsy/"
                        className="store store-etsy absolute left-[88%] top-[59%] opacity-100"
                    >
                        <h2 className="text-sm">Etsy</h2>
                    </a>
                    <a
                        href="/printify-api/"
                        className="store store-api absolute left-[2%] top-[64%] opacity-100"
                    >
                        <h2 className="text-sm">API</h2>
                    </a>
                    <a
                        href="/bigcommerce/"
                        className="store store-bigcommerce absolute left-[32%] top-[3%] opacity-100"
                    >
                        <h2 className="text-sm">BigCommerce</h2>
                    </a>
                    <div className="store store-printify absolute inset-0 opacity-100" />
                </div>
            </div>
        </div>
    );
};

export default ConnectStore;
