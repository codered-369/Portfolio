"use client";

import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import content from "@/data/content.json";

export default function Projects() {
    return (
        <section id="projects" className="section">
            <div className="container mx-auto max-w-6xl">
                <h2 className="section-title">
                    Featured <span className="gradient-text">Projects</span>
                </h2>
                <p className="section-subtitle">
                    A showcase of my best work and personal projects
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                    {content.projects.map((project) => (
                        <div key={project.id} className="card card-hover group">
                            {/* Project Image */}
                            <div className="relative h-48 mb-4 rounded-lg overflow-hidden bg-secondary">
                                <div className="absolute inset-0 flex items-center justify-center text-6xl">
                                    {project.category === "Web Development" && "🌐"}
                                    {project.category === "Web App" && "⚡"}
                                    {project.category === "Enterprise" && "🏢"}
                                </div>
                            </div>

                            {/* Category Badge */}
                            <div className="mb-3">
                                <span className="badge badge-primary">
                                    {project.category}
                                </span>
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                                {project.title}
                            </h3>

                            {/* Description */}
                            <p className="text-muted-foreground mb-4">
                                {project.description}
                            </p>

                            {/* Features */}
                            <div className="mb-4">
                                <h4 className="font-semibold text-sm mb-2">
                                    Key Features:
                                </h4>
                                <ul className="space-y-1">
                                    {project.features.slice(0, 3).map((feature, i) => (
                                        <li
                                            key={i}
                                            className="flex items-start gap-2 text-sm text-muted-foreground"
                                        >
                                            <span className="text-primary mt-0.5">•</span>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Technologies */}
                            <div className="mb-4">
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech, i) => (
                                        <span key={i} className="badge">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Links */}
                            <div className="flex gap-3 pt-4 border-t border-border">
                                {project.links.demo && (
                                    <Link
                                        href={project.links.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn btn-primary flex-1 justify-center"
                                    >
                                        <ExternalLink className="w-4 h-4" />
                                        Live Demo
                                    </Link>
                                )}
                                {project.links.github && (
                                    <Link
                                        href={project.links.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn btn-secondary flex-1 justify-center"
                                    >
                                        <Github className="w-4 h-4" />
                                        Code
                                    </Link>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
