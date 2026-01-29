"use client";

import { useState } from "react";
import { Mail, Phone, Send, CheckCircle, AlertCircle } from "lucide-react";
import content from "@/data/content.json";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
        "idle"
    );

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
                    name: formData.name,
                    email: formData.email,
                    subject: formData.subject,
                    message: formData.message,
                }),
            });

            const result = await response.json();
            console.log("Web3Forms Response:", result);

            if (result.success) {
                setStatus("success");
                setFormData({ name: "", email: "", subject: "", message: "" });
            } else {
                console.error("Web3Forms Error:", result.message || "Unknown error");
                setStatus("error");
            }

            // Reset status after 5 seconds
            setTimeout(() => setStatus("idle"), 5000);
        } catch (error) {
            console.error("Form submission error:", error);
            setStatus("error");
            setTimeout(() => setStatus("idle"), 5000);
        }
    };

    return (
        <section id="contact" className="section bg-secondary/30">
            <div className="container mx-auto max-w-6xl">
                <h2 className="section-title">
                    Get In <span className="gradient-text">Touch</span>
                </h2>
                <p className="section-subtitle">
                    Have a project in mind? Let's work together to build something
                    amazing
                </p>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-2xl font-bold mb-4">
                                Let's Connect
                            </h3>
                            <p className="text-muted-foreground mb-6">
                                I'm always open to discussing new projects, creative
                                ideas, or opportunities to be part of your vision.
                            </p>
                        </div>

                        {/* Contact Cards */}
                        <div className="space-y-4">
                            <a
                                href={`mailto:${content.personal.email}`}
                                className="card card-hover flex items-center gap-4 group"
                            >
                                <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-1">Email</h4>
                                    <p className="text-sm text-muted-foreground">
                                        {content.personal.email}
                                    </p>
                                </div>
                            </a>

                            <a
                                href={`tel:${content.personal.phone}`}
                                className="card card-hover flex items-center gap-4 group"
                            >
                                <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-1">Phone</h4>
                                    <p className="text-sm text-muted-foreground">
                                        {content.personal.phone}
                                    </p>
                                </div>
                            </a>
                        </div>

                        {/* Additional Info */}
                        <div className="card bg-gradient-to-br from-primary/10 to-transparent border-primary/20">
                            <h4 className="font-semibold mb-2">
                                💼 Open to New Opportunities
                            </h4>
                            <p className="text-sm text-muted-foreground">
                                Currently working at Capgemini. Available for new full-time positions with 3-month notice period. Open to freelance projects and consulting opportunities in modern web development.
                            </p>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="card">
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium mb-2"
                                >
                                    Your Name *
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="input"
                                    placeholder="Vishwanath Gouda"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium mb-2"
                                >
                                    Your Email *
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="input"
                                    placeholder="vishwa@gmail.com"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="subject"
                                    className="block text-sm font-medium mb-2"
                                >
                                    Subject *
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    className="input"
                                    placeholder="Project Inquiry"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-medium mb-2"
                                >
                                    Message *
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={5}
                                    className="textarea"
                                    placeholder="Tell me about your project..."
                                />
                            </div>

                            {/* Status Messages */}
                            {status === "success" && (
                                <div className="flex items-center gap-2 p-4 bg-green-500/10 border border-green-500/20 rounded-lg text-green-600">
                                    <CheckCircle className="w-5 h-5" />
                                    <span>
                                        Message sent successfully! I'll get back to you
                                        soon.
                                    </span>
                                </div>
                            )}

                            {status === "error" && (
                                <div className="flex items-center gap-2 p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-600">
                                    <AlertCircle className="w-5 h-5" />
                                    <span>
                                        Something went wrong. Please try again later.
                                    </span>
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={status === "loading"}
                                className="btn btn-primary w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {status === "loading" ? (
                                    <>
                                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        <Send className="w-5 h-5" />
                                        Send Message
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
