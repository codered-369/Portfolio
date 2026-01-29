"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import content from "@/data/content.json";

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextTestimonial = () => {
        setCurrentIndex((prev) =>
            prev === content.testimonials.length - 1 ? 0 : prev + 1
        );
    };

    const prevTestimonial = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? content.testimonials.length - 1 : prev - 1
        );
    };

    const currentTestimonial = content.testimonials[currentIndex];

    return (
        <section id="testimonials" className="section bg-secondary/30">
            <div className="container mx-auto max-w-4xl">
                <h2 className="section-title">
                    Client <span className="gradient-text">Testimonials</span>
                </h2>
                <p className="section-subtitle">
                    What people say about working with me
                </p>

                <div className="card relative">
                    {/* Quote Icon */}
                    <div className="absolute top-6 left-6 opacity-10">
                        <Quote className="w-16 h-16 text-primary" />
                    </div>

                    {/* Testimonial Content */}
                    <div className="relative z-10 text-center px-8 py-12">
                        <p className="text-lg md:text-xl text-muted-foreground mb-8 italic leading-relaxed">
                            "{currentTestimonial.quote}"
                        </p>

                        {/* Author Info */}
                        <div className="flex flex-col items-center gap-4">
                            {/* Avatar Placeholder */}
                            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-2xl font-bold text-primary">
                                {currentTestimonial.name.charAt(0)}
                            </div>

                            <div>
                                <h4 className="font-bold text-lg">
                                    {currentTestimonial.name}
                                </h4>
                                <p className="text-sm text-muted-foreground">
                                    {currentTestimonial.role}
                                </p>
                                <p className="text-sm text-primary font-medium">
                                    {currentTestimonial.company}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex items-center justify-center gap-4 mt-6">
                        <button
                            onClick={prevTestimonial}
                            className="p-2 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110"
                            aria-label="Previous testimonial"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>

                        {/* Dots Indicator */}
                        <div className="flex gap-2">
                            {content.testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentIndex(index)}
                                    className={`w-2 h-2 rounded-full transition-all ${index === currentIndex
                                            ? "bg-primary w-8"
                                            : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                                        }`}
                                    aria-label={`Go to testimonial ${index + 1}`}
                                />
                            ))}
                        </div>

                        <button
                            onClick={nextTestimonial}
                            className="p-2 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110"
                            aria-label="Next testimonial"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* All Testimonials Grid (Optional) */}
                <div className="grid md:grid-cols-3 gap-6 mt-12">
                    {content.testimonials.map((testimonial, index) => (
                        <button
                            key={testimonial.id}
                            onClick={() => setCurrentIndex(index)}
                            className={`card text-left transition-all ${index === currentIndex
                                    ? "border-primary shadow-lg scale-105"
                                    : "hover:border-primary/50"
                                }`}
                        >
                            <div className="flex items-center gap-3 mb-3">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">
                                    {testimonial.name.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="font-semibold text-sm">
                                        {testimonial.name}
                                    </h4>
                                    <p className="text-xs text-muted-foreground">
                                        {testimonial.company}
                                    </p>
                                </div>
                            </div>
                            <p className="text-sm text-muted-foreground line-clamp-3">
                                "{testimonial.quote}"
                            </p>
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
}
