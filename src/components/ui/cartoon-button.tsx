"use client";

import { useState } from "react";

interface CartoonButtonProps {
    label: string;
    color?: string;
    hasHighlight?: boolean;
    onClick?: () => void;
}

export default function CartoonButton({
    label,
    color = "bg-orange-400",
    hasHighlight = true,
    onClick
}: CartoonButtonProps) {
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
                    background: "linear-gradient(145deg, #fb923c 0%, #f97316 50%, #ea580c 100%)",
                    boxShadow: isHovered
                        ? "0 12px 24px rgba(249, 115, 22, 0.5), 0 4px 8px rgba(0, 0, 0, 0.3), inset 0 -4px 0 rgba(0, 0, 0, 0.15)"
                        : "0 4px 12px rgba(0, 0, 0, 0.3), inset 0 -4px 0 rgba(0, 0, 0, 0.15)",
                    transform: isPressed ? "translateY(2px)" : "translateY(0)",
                    transition: "all 150ms ease"
                }}
            >
                {/* Highlight effect */}
                {hasHighlight && (
                    <div
                        className="absolute inset-x-3 top-2 h-4 rounded-full"
                        style={{
                            background: "linear-gradient(180deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 100%)",
                            opacity: isHovered ? 0.8 : 0.5,
                            transition: "opacity 200ms ease"
                        }}
                    />
                )}

                {/* Icon/Face */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                        {/* Simple friendly face */}
                        <div className="flex gap-3 mb-1">
                            <div
                                className="w-2.5 h-2.5 rounded-full bg-white"
                                style={{
                                    boxShadow: "inset 1px 1px 2px rgba(0,0,0,0.2)"
                                }}
                            />
                            <div
                                className="w-2.5 h-2.5 rounded-full bg-white"
                                style={{
                                    boxShadow: "inset 1px 1px 2px rgba(0,0,0,0.2)"
                                }}
                            />
                        </div>
                        <div
                            className="w-6 h-3 mx-auto rounded-b-full"
                            style={{
                                background: "rgba(255, 255, 255, 0.9)",
                                transform: isHovered ? "scaleY(1.2)" : "scaleY(1)",
                                transition: "transform 200ms ease"
                            }}
                        />
                    </div>
                </div>

                {/* Animated shine effect on hover */}
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        background: "linear-gradient(105deg, transparent 40%, rgba(255, 255, 255, 0.3) 45%, rgba(255, 255, 255, 0.5) 50%, rgba(255, 255, 255, 0.3) 55%, transparent 60%)",
                        transform: isHovered ? "translateX(100%)" : "translateX(-100%)",
                        transition: "transform 600ms ease"
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
        </button>
    );
}
