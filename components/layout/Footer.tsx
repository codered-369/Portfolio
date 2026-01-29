"use client";

import Link from "next/link";
import { Github, Linkedin, Twitter, Mail, Heart } from "lucide-react";
import content from "@/data/content.json";

const socialLinks: any[] = [
    {
        name: "GitHub",
        href: content.personal.socials.github,
        icon: Github,
    },
    {
        name: "LinkedIn",
        href: content.personal.socials.linkedin,
        icon: Linkedin,
    },
    "twitter" in content.personal.socials && {
        name: "Twitter",
        href: (content.personal.socials as any).twitter,
        icon: Twitter,
    },
    {
        name: "Email",
        href: content.personal.socials.email,
        icon: Mail,
    },
].filter(Boolean);

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-card border-t border-border py-12">
            <div className="container mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* Brand */}
                    <div>
                        <h3 className="text-2xl font-bold gradient-text mb-3">
                            {content.personal.name}
                        </h3>
                        <p className="text-muted-foreground text-sm">
                            {content.personal.title}
                        </p>
                        <p className="text-muted-foreground text-sm mt-1">
                            {content.personal.location}
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-semibold mb-3">Quick Links</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link href="#projects" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                    Projects
                                </Link>
                            </li>
                            <li>
                                <Link href="#experience" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                    Experience
                                </Link>
                            </li>
                            <li>
                                <Link href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h4 className="font-semibold mb-3">Connect</h4>
                        <div className="flex gap-4">
                            {socialLinks.map((social) => (
                                <Link
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110"
                                    aria-label={social.name}
                                >
                                    <social.icon className="w-5 h-5" />
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-border">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-sm text-muted-foreground text-center md:text-left">
                            © {currentYear} {content.personal.name}. All rights reserved.
                        </p>
                        <p className="text-sm text-muted-foreground flex items-center gap-1">
                            Built with <Heart className="w-4 h-4 text-primary fill-primary" /> using Next.js & Tailwind CSS
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
