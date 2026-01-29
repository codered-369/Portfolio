"use client";

import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import content from "@/data/content.json";

export default function Hero() {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
        >
            {/* Animated Background */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse delay-1000" />
            </div>

            <div className="container mx-auto px-4 md:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Greeting */}
                    <div className="inline-block mb-4 px-4 py-2 bg-secondary border border-border rounded-full">
                        <p className="text-sm font-medium text-muted-foreground">
                            👋 Welcome to my portfolio
                        </p>
                    </div>

                    {/* Name */}
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
                        Hi, I'm{" "}
                        <span className="gradient-text">{content.personal.name}</span>
                    </h1>

                    {/* Title */}
                    <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-6 font-medium">
                        {content.personal.title}
                    </p>

                    {/* Tagline */}
                    <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                        {content.personal.tagline}
                    </p>

                    {/* Bio */}
                    <p className="text-base md:text-lg text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
                        {content.personal.bio}
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
                        <button
                            onClick={() => scrollToSection("contact")}
                            className="btn btn-primary"
                        >
                            <Mail className="w-5 h-5" />
                            Get In Touch
                        </button>
                        <Link
                            href={content.personal.resume}
                            target="_blank"
                            className="btn btn-outline"
                        >
                            <Download className="w-5 h-5" />
                            Download Resume
                        </Link>
                    </div>

                    {/* Social Links */}
                    <div className="flex items-center justify-center gap-4 mb-16">
                        <Link
                            href={content.personal.socials.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110"
                            aria-label="GitHub"
                        >
                            <Github className="w-6 h-6" />
                        </Link>
                        <Link
                            href={content.personal.socials.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110"
                            aria-label="LinkedIn"
                        >
                            <Linkedin className="w-6 h-6" />
                        </Link>
                        <Link
                            href={content.personal.socials.email}
                            className="p-3 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110"
                            aria-label="Email"
                        >
                            <Mail className="w-6 h-6" />
                        </Link>
                    </div>

                    {/* Scroll Indicator */}
                    <button
                        onClick={() => scrollToSection("about")}
                        className="animate-bounce inline-flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                        aria-label="Scroll to about section"
                    >
                        <span className="text-sm">Scroll Down</span>
                        <ArrowDown className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </section>
    );
}
