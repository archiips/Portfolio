"use client";

import { useState } from "react";

interface GradientButtonProps {
    label?: string;
    onClick?: () => void;
}

export default function GradientButton({ label = "Resume", onClick }: GradientButtonProps) {
    const [isHovered, setIsHovered] = useState(false);
    const [isPressed, setIsPressed] = useState(false);

    return (
        <button
            onClick={onClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => { setIsHovered(false); setIsPressed(false); }}
            onMouseDown={() => setIsPressed(true)}
            onMouseUp={() => setIsPressed(false)}
            className="flex flex-col items-center gap-2 outline-none"
            style={{
                transform: isPressed ? "scale(0.9)" : isHovered ? "scale(1.15)" : "scale(1)",
                transition: "transform 150ms cubic-bezier(0.4, 0, 0.2, 1)"
            }}
        >
            <div
                className="relative w-20 h-20 rounded-2xl overflow-hidden"
                style={{
                    background: "linear-gradient(135deg, #070e41 0%, #263381 100%)",
                    boxShadow: isHovered
                        ? "0 12px 24px rgba(38, 51, 129, 0.5), 0 4px 8px rgba(0, 0, 0, 0.3)"
                        : "0 4px 12px rgba(0, 0, 0, 0.3)"
                }}
            >
                {/* Animated gradient overlay */}
                <div
                    className="absolute inset-0"
                    style={{
                        background: `linear-gradient(
                            45deg, 
                            transparent 30%, 
                            rgba(99, 102, 241, 0.4) 50%, 
                            transparent 70%
                        )`,
                        backgroundSize: "200% 200%",
                        animation: isHovered ? "gradientMove 1.5s ease infinite" : "none",
                        opacity: isHovered ? 1 : 0,
                        transition: "opacity 300ms ease"
                    }}
                />

                {/* Text container with slide effect */}
                <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                    <div
                        className="flex flex-col items-center"
                        style={{
                            transform: isHovered ? "translateY(-8px)" : "translateY(0)",
                            transition: "transform 300ms cubic-bezier(0.34, 1.56, 0.64, 1)"
                        }}
                    >
                        {/* Document icon */}
                        <svg
                            className="w-8 h-8 text-white mb-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            style={{
                                filter: "drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3))"
                            }}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                            />
                        </svg>

                        {/* Secondary text that appears on hover */}
                        <span
                            className="text-xs font-medium text-indigo-300"
                            style={{
                                opacity: isHovered ? 1 : 0,
                                transform: isHovered ? "translateY(0)" : "translateY(10px)",
                                transition: "all 300ms ease 100ms"
                            }}
                        >
                            View PDF
                        </span>
                    </div>
                </div>

                {/* Border glow effect */}
                <div
                    className="absolute inset-0 rounded-2xl pointer-events-none"
                    style={{
                        border: isHovered ? "2px solid rgba(99, 102, 241, 0.5)" : "2px solid transparent",
                        transition: "border-color 300ms ease"
                    }}
                />
            </div>

            {/* Label */}
            <span
                className="text-white text-sm font-medium"
                style={{
                    textShadow: "0 1px 3px rgba(0, 0, 0, 0.5)",
                    opacity: isHovered ? 1 : 0.8
                }}
            >
                {label}
            </span>

            {/* Keyframes injection */}
            <style jsx>{`
                @keyframes gradientMove {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
            `}</style>
        </button>
    );
}
