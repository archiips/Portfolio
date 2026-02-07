"use client";

import { ArrowRight } from "lucide-react";

interface WelcomeScreenProps {
    onGetStarted: () => void;
}

export default function WelcomeScreen({ onGetStarted }: WelcomeScreenProps) {
    return (
        <div
            className="fixed inset-0 flex flex-col items-center justify-center z-40"
            style={{
                background: "linear-gradient(135deg, #1e90ff 0%, #4dc0e0 25%, #7dd8c7 50%, #f5b041 75%, #e67e22 100%)"
            }}
        >
            {/* Hello Text */}
            <h1
                className="hello-text text-white text-[120px] md:text-[180px] lg:text-[220px] font-normal mb-8 drop-shadow-lg select-none"
                style={{ textShadow: "0 4px 30px rgba(0,0,0,0.15)" }}
            >
                hello
            </h1>

            {/* Get Started Button */}
            <button
                onClick={onGetStarted}
                className="flex items-center gap-2 px-8 py-3 mt-16 text-white/90 hover:text-white transition-all duration-300 group"
            >
                <div className="w-8 h-8 rounded-full border border-white/40 group-hover:border-white/70 flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                    <ArrowRight className="w-4 h-4" />
                </div>
                <span className="text-sm font-medium tracking-wide">Get Started</span>
            </button>
        </div>
    );
}
