"use client";

import { useState, useEffect } from "react";
import { X, ExternalLink, Github } from "lucide-react";
import { projects, Project } from "@/lib/projects";

interface ProjectsPanelProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function ProjectsPanel({ isOpen, onClose }: ProjectsPanelProps) {
    const [selectedProject, setSelectedProject] = useState<Project>(projects[0]);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setVisible(true);
        } else {
            const timer = setTimeout(() => setVisible(false), 300);
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    if (!visible) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-8"
            onClick={onClose}
        >
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/40"
                style={{
                    opacity: isOpen ? 1 : 0,
                    transition: "opacity 300ms ease-out"
                }}
            />

            {/* Panel */}
            <div
                className="relative w-full max-w-5xl h-[600px] rounded-2xl overflow-hidden flex"
                style={{
                    background: "rgba(30, 30, 30, 0.85)",
                    backdropFilter: "blur(40px)",
                    WebkitBackdropFilter: "blur(40px)",
                    boxShadow: "0 25px 50px rgba(0, 0, 0, 0.5)",
                    transform: isOpen ? "scale(1) translateY(0)" : "scale(0.95) translateY(20px)",
                    opacity: isOpen ? 1 : 0,
                    transition: "transform 300ms ease-out, opacity 300ms ease-out"
                }}
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 left-4 w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 group flex items-center justify-center z-10"
                >
                    <X className="w-2 h-2 text-red-900 opacity-0 group-hover:opacity-100" />
                </button>

                {/* Sidebar */}
                <div className="w-64 bg-black/30 border-r border-white/10 p-6 pt-12">
                    <h2 className="text-white/60 text-xs font-semibold uppercase tracking-wider mb-4">
                        Projects
                    </h2>
                    <div className="space-y-2">
                        {projects.map((project) => (
                            <button
                                key={project.id}
                                onClick={() => setSelectedProject(project)}
                                className={`w-full text-left px-3 py-2 rounded-lg transition-all duration-150 ${selectedProject.id === project.id
                                        ? "bg-blue-500/30 text-white"
                                        : "text-white/70 hover:bg-white/10 hover:text-white"
                                    }`}
                            >
                                <span className="text-sm font-medium line-clamp-1">
                                    {project.title}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Content Area */}
                <div className="flex-1 p-8 pt-12 overflow-y-auto">
                    <h1 className="text-3xl font-bold text-white mb-4">
                        {selectedProject.title}
                    </h1>

                    <p className="text-white/80 text-lg leading-relaxed mb-6">
                        {selectedProject.description}
                    </p>

                    {/* Technologies */}
                    <div className="mb-8">
                        <h3 className="text-white/60 text-sm font-semibold uppercase tracking-wider mb-3">
                            Technologies
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {selectedProject.technologies.map((tech) => (
                                <span
                                    key={tech}
                                    className="px-3 py-1 rounded-full text-sm bg-white/10 text-white/90"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Links */}
                    <div className="flex gap-4">
                        {selectedProject.githubUrl && (
                            <a
                                href={selectedProject.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors"
                            >
                                <Github className="w-4 h-4" />
                                <span>View on GitHub</span>
                            </a>
                        )}
                        {selectedProject.liveUrl && (
                            <a
                                href={selectedProject.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 transition-colors"
                            >
                                <ExternalLink className="w-4 h-4" />
                                <span>Live Demo</span>
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
