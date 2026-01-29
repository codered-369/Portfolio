"use client";

import { User, MapPin, Briefcase, Code } from "lucide-react";
import content from "@/data/content.json";

export default function About() {
    return (
        <section id="about" className="section bg-secondary/30">
            <div className="container mx-auto max-w-6xl">
                <h2 className="section-title">
                    About <span className="gradient-text">Me</span>
                </h2>
                <p className="section-subtitle">
                    Get to know more about who I am and what I do
                </p>

                <div className="grid md:grid-cols-2 gap-8 items-start">
                    {/* Left Column - Info Cards */}
                    <div className="space-y-4">
                        <div className="card card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-primary/10 rounded-lg">
                                    <User className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg mb-1">
                                        Who I Am
                                    </h3>
                                    <p className="text-muted-foreground">
                                        {content.personal.bio}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="card card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-primary/10 rounded-lg">
                                    <MapPin className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg mb-1">Location</h3>
                                    <p className="text-muted-foreground">
                                        {content.personal.location}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="card card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-primary/10 rounded-lg">
                                    <Briefcase className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg mb-1">
                                        Current Role
                                    </h3>
                                    <p className="text-muted-foreground">
                                        {content.personal.title}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="card card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-primary/10 rounded-lg">
                                    <Code className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg mb-1">
                                        Specialization
                                    </h3>
                                    <p className="text-muted-foreground">
                                        SAP UI5 Fiori Development, Modern Web Technologies,
                                        Enterprise Solutions
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Stats & Highlights */}
                    <div className="space-y-6">
                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="card text-center">
                                <div className="text-3xl font-bold text-primary mb-1">
                                    1+
                                </div>
                                <div className="text-sm text-muted-foreground">
                                    Years Experience
                                </div>
                            </div>
                            <div className="card text-center">
                                <div className="text-3xl font-bold text-primary mb-1">
                                    {Object.values(content.skills).flat().length}+
                                </div>
                                <div className="text-sm text-muted-foreground">
                                    Technologies
                                </div>
                            </div>
                            <div className="card text-center">
                                <div className="text-3xl font-bold text-primary mb-1">
                                    {content.certifications.length}+
                                </div>
                                <div className="text-sm text-muted-foreground">
                                    Certifications
                                </div>
                            </div>
                        </div>

                        {/* Highlights */}
                        <div className="card">
                            <h3 className="font-semibold text-lg mb-4">
                                Key Highlights
                            </h3>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted-foreground">
                                        Specialized in SAP UI5 Fiori application development
                                    </span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted-foreground">
                                        Proficient in modern web technologies (React, Next.js,
                                        TypeScript)
                                    </span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted-foreground">
                                        Strong focus on performance optimization and
                                        accessibility
                                    </span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted-foreground">
                                        Experience in building scalable enterprise solutions
                                    </span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted-foreground">
                                        Passionate about clean code and best practices
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
