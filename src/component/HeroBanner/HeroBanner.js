import React, { useState, useEffect } from 'react';

const HeroBanner = () => {
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const targetDate = new Date("April 19, 2025 00:00:00").getTime();

        const updateCountdown = () => {
            const now = new Date().getTime();
            const difference = targetDate - now;

            if (difference > 0) {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((difference % (1000 * 60)) / 1000);

                setTimeLeft({ days, hours, minutes, seconds });
            } else {
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            }
        };

        const interval = setInterval(updateCountdown, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden">
            <div className="absolute inset-0">
                <img src="/img/hero 2.jpg" alt="Background Image" className="object-cover object-center w-full h-full" />
                <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>

            <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
                <h1 className="text-5xl font-bold leading-tight mb-4">Hanuman Mandir Pran Pratishtha</h1>
                
                {/* Countdown Section */}
                <div className="mb-8">
                    <h2 className="text-4xl font-bold mb-3"> April 19, 2025</h2>
                    <div className="text-lg font-mono">
                        {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
                    </div>
                </div>

                <a href="#" className="bg-yellow-400 text-white hover:bg-yellow-300 py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">Support More</a>
            </div>
        </div>
    );
};

export default HeroBanner;