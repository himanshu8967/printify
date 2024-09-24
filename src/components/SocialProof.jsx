import { motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';
import { FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const SocialProof = () => {
    const testimonials = [
        {
            name: 'Robert A. Voltaire',
            comment: 'Printify has been an incredible service for us musicians unable to keep large amounts of inventory - now we can create designs previously too expensive to print without having to have 1,000 shirts in our jam space. Thanks Printify!',
            link: 'https://www.ravenouseternalhunger.com/',
            image: 'https://via.placeholder.com/150/FF0000/FFFFFF?text=Robert+A.+Voltaire',
        },
        {
            name: 'Quinten Barney',
            comment: 'We chose Printify because of their offerings as well as their incredibly low prices. After several years, we\'ve come to find that their customer service is also top-notch, and their platform just keeps getting better and better.',
            link: 'https://www.etsy.com/',
            image: 'https://via.placeholder.com/150/00FF00/FFFFFF?text=Quinten+Barney',
        },
        {
            name: 'Nikki',
            comment: 'Printify has been an amazing partner to work with as we grow our business, from the range of merch we can make for our customers to working with our Customer Service team (Hi Martin!) it\'s truly made the whole process a breeze.',
            link: 'https://mynerdlife.com/',
            image: 'https://via.placeholder.com/150/0000FF/FFFFFF?text=Nikki',
        },
        {
            name: 'Spencer, Brett, and Kyle',
            comment: 'Using Printify has been a great experience. Customer service is always very quick to respond and handle any issues that our customers may have. The premium account has more than paid for itself and has increased our margins significantly.',
            link: 'https://brotallion.com/',
            image: 'https://via.placeholder.com/150/FFFF00/FFFFFF?text=Spencer+Brett+Kyle',
        },
        {
            name: 'April Showers',
            comment: 'I really appreciate working with Printify on my brand. Afro Unicorn was only supposed to be my design on a white shirt. It is so much more. Printify allows me the time to run the business and not work in the business.',
            link: 'https://afrounicorns.com/',
            image: 'https://via.placeholder.com/150/FF00FF/FFFFFF?text=April+Showers',
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const transitionDuration = 1; // Duration for transition
    const autoTransitionDuration = 10000; // Duration for automatic transition in milliseconds

    const nextTestimonial = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    };

    const goToTestimonial = (index) => {
        setCurrentIndex(index);
    };

    // Automatically change testimonials every 5 seconds
    useEffect(() => {
        const timer = setInterval(() => {
            nextTestimonial();
        }, autoTransitionDuration);

        return () => clearInterval(timer); // Cleanup the interval on unmount
    }, []);

    return (
        <div className="py-10 flex flex-col items-center justify-center mb-20 bg-slate-200 min-h-screen">
            <div className="flex flex-col items-center text-center p-5">
                <p className="text-3xl text-gray-900 font-bold mb-2">Trusted by over 8M sellers around the world</p>
                <p className="text-lg text-gray-800 max-w-xl">Whether you are just getting started or run an enterprise-level e-commerce business, we do everything we can to ensure a positive merchant experience.</p>
            </div>

            <div className="relative w-full flex items-center justify-center overflow-hidden">
                <button
                    onClick={prevTestimonial}
                    className="absolute left-0 p-2 text-white bg-blue-600 rounded-full hover:bg-blue-700 transition duration-300"
                    aria-label="Previous Testimonial"
                >
                    <FaChevronLeft />
                </button>

                <motion.div
                    className="flex justify-center transition-all"
                    key={currentIndex}
                    initial={{ x: '100%', opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: '-100%', opacity: 0 }}
                    transition={{ duration: transitionDuration }}
                >
                    <motion.div
                        className="bg-white rounded-lg shadow-lg p-6 m-2 flex flex-col w-80 md:w-96 lg:w-1/3"
                        initial={{ scale: 1.05 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0.95, x: '50%' }}
                        transition={{ duration: transitionDuration }}
                    >
                        <div className="flex items-center mb-4">
                            <img
                                src={testimonials[currentIndex].image}
                                alt={testimonials[currentIndex].name}
                                className="w-16 h-16 rounded-full object-cover"
                            />
                            <div className="ml-4">
                                <h4 className="font-semibold text-xl">{testimonials[currentIndex].name}</h4>
                                <a className="text-blue-500 underline" href={testimonials[currentIndex].link} target="_blank" rel="noopener noreferrer">
                                    Store link
                                </a>
                                <div className="flex mt-1">
                                    {Array.from({ length: 5 }).map((_, starIndex) => (
                                        <FaStar key={starIndex} className="text-yellow-500" />
                                    ))}
                                </div>
                            </div>
                        </div>
                        <p className="text-gray-700 text-sm">{testimonials[currentIndex].comment}</p>
                    </motion.div>
                </motion.div>

                <button
                    onClick={nextTestimonial}
                    className="absolute right-0 p-2 text-white bg-blue-600 rounded-full hover:bg-blue-700 transition duration-300"
                    aria-label="Next Testimonial"
                >
                    <FaChevronRight />
                </button>
            </div>

            {/* Dots Navigation */}
            <div className="flex justify-center mt-4">
                {testimonials.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToTestimonial(index)}
                        className={`w-3 h-3 mx-1 rounded-full ${index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'}`}
                        aria-label={`Go to testimonial ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default SocialProof;
