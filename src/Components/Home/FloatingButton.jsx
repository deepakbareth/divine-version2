import React from 'react';
import { MessageCircle } from 'lucide-react'; // Ya Phone icon use kar sakte hain

const FloatingButton = () => {
    return (
        <div className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-[100]">
            {/* Tooltip that shows on hover (Desktop) */}
            <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 w-max px-4 py-2 bg-slate-900 text-white text-sm font-semibold rounded-lg shadow-xl opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 origin-right hidden md:block">
                Talk to Expert
                {/* Little triangle pointer */}
                <div className="absolute top-1/2 -translate-y-1/2 -right-1.5 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[6px] border-l-slate-900"></div>
            </div>

            {/* The Button */}
            <a
                href="https://wa.me/919876543210" // Yahan actual number aayega
                target="_blank"
                rel="noopener noreferrer"
                className="relative group flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-[#6abd8d] hover:bg-[#7bc89d] text-slate-900 rounded-full shadow-2xl shadow-[#6abd8d]/40 transition-transform hover:-translate-y-1 cursor-pointer"
            >
                {/* Pulse Animation Behind Button */}
                <span className="absolute inset-0 rounded-full bg-[#6abd8d] animate-ping opacity-30"></span>

                {/* Icon */}
                <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8" />
            </a>
        </div>
    );
};

export default FloatingButton;