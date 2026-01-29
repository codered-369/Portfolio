"use client";

import { Calendar, MapPin, Briefcase } from "lucide-react";
import content from "@/data/content.json";

export default function Experience() {
    return (
        <section id="experience" className="section bg-secondary/30">
            <div className="container mx-auto max-w-6xl">
                <h2 className="section-title">
                    Work <span className="gradient-text">Experience</span>
                </h2>
                <p className="section-subtitle">
                    My professional journey and key accomplishments
                </p>

                <div className="space-y-8">
                    {content.experience.map((exp, index) => (
                        <div key={exp.id} className="card card-hover">
                            <div className="flex flex-col md:flex-row gap-6">
                                {/* Timeline Indicator */}
                                <div className="flex md:flex-col items-center md:items-start gap-4">
                                    <div className="p-3 bg-primary/10 rounded-lg">
                                        <Briefcase className="w-6 h-6 text-primary" />
                                    </div>
                                    {index !== content.experience.length - 1 && (
                                        <div className="hidden md:block w-0.5 flex-1 bg-border min-h-[50px]" />
                                    )}
                                </div>

                                {/* Content */}
                                <div className="flex-1">
                                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                                        <div>
                                            <h3 className="text-2xl font-bold mb-1">
                                                {exp.position}
                                            </h3>
                                            <p className="text-lg text-primary font-semibold">
                                                {exp.company}
                                            </p>
                                        </div>
                                        <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                                            <div className="flex items-center gap-2">
                                                <Calendar className="w-4 h-4" />
                                                {exp.duration}
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <MapPin className="w-4 h-4" />
                                                {exp.location}
                                            </div>
                                        </div>
                                    </div>

                                    <p className="text-muted-foreground mb-4">
                                        {exp.description}
                                    </p>

                                    {/* Achievements */}
                                    <div className="mb-4">
                                        <h4 className="font-semibold mb-2">
                                            Key Achievements:
                                        </h4>
                                        <ul className="space-y-2">
                                            {exp.achievements.map((achievement, i) => (
                                                <li
                                                    key={i}
                                                    className="flex items-start gap-2 text-muted-foreground"
                                                >
                                                    <span className="text-primary mt-1">
                                                        ✓
                                                    </span>
                                                    <span>{achievement}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Technologies */}
                                    <div>
                                        <h4 className="font-semibold mb-2">
                                            Technologies Used:
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {exp.technologies.map((tech, i) => (
                                                <span
                                                    key={i}
                                                    className="badge badge-primary"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
