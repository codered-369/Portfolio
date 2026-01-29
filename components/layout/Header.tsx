"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Moon, Sun, Menu, X } from "lucide-react";
import content from "@/data/content.json";

const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
];

export default function Header() {
    const [mounted, setMounted] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");
    const [scrolled, setScrolled] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);

        // Handle scroll for header background
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);

            // Update active section based on scroll position
            const sections = navItems.map((item) => item.href.substring(1));
            const current = sections.find((section) => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });

            if (current) {
                setActiveSection(current);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleNavClick = (href: string) => {
        setMobileMenuOpen(false);
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    if (!mounted) {
        return null;
    }

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "glass shadow-lg py-3" : "bg-transparent py-4"
                }`}
        >
            <nav className="container mx-auto px-4 md:px-8">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link
                        href="#home"
                        onClick={(e) => {
                            e.preventDefault();
                            handleNavClick("#home");
                        }}
                        className="text-xl md:text-2xl font-bold gradient-text hover:scale-105 transition-transform"
                    >
                        {content.personal.name.split(" ")[0]}
                    </Link>

                    {/* Desktop Navigation */}
                    <ul className="hidden md:flex items-center gap-8">
                        {navItems.map((item) => (
                            <li key={item.name}>
                                <Link
                                    href={item.href}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleNavClick(item.href);
                                    }}
                                    className={`text-sm font-medium transition-colors hover:text-primary relative ${activeSection === item.href.substring(1)
                                            ? "text-primary"
                                            : "text-foreground"
                                        }`}
                                >
                                    {item.name}
                                    {activeSection === item.href.substring(1) && (
                                        <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full" />
                                    )}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Theme Toggle & Mobile Menu Button */}
                    <div className="flex items-center gap-4">
                        {/* Theme Toggle */}
                        <button
                            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                            className="p-2 rounded-lg hover:bg-secondary transition-colors"
                            aria-label="Toggle theme"
                        >
                            {theme === "dark" ? (
                                <Sun className="w-5 h-5" />
                            ) : (
                                <Moon className="w-5 h-5" />
                            )}
                        </button>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="md:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
                            aria-label="Toggle menu"
                        >
                            {mobileMenuOpen ? (
                                <X className="w-6 h-6" />
                            ) : (
                                <Menu className="w-6 h-6" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {mobileMenuOpen && (
                    <div className="md:hidden mt-4 pb-4 animate-slide-down">
                        <ul className="flex flex-col gap-4">
                            {navItems.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handleNavClick(item.href);
                                        }}
                                        className={`block text-base font-medium transition-colors hover:text-primary ${activeSection === item.href.substring(1)
                                                ? "text-primary"
                                                : "text-foreground"
                                            }`}
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </nav>
        </header>
    );
}
