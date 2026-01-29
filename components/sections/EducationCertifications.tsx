"use client";

import { GraduationCap, Award, ExternalLink } from "lucide-react";
import Link from "next/link";
import content from "@/data/content.json";

export default function EducationCertifications() {
    return (
        <section id="education" className="section">
            <div className="container mx-auto max-w-6xl">
                {/* Education */}
                <div className="mb-16">
                    <h2 className="section-title">
                        <span className="gradient-text">Education</span>
                    </h2>
                    <p className="section-subtitle">My academic background</p>

                    <div className="space-y-6">
                        {content.education.map((edu) => (
                            <div key={edu.id} className="card card-hover">
                                <div className="flex flex-col md:flex-row gap-6">
                                    <div className="p-3 bg-primary/10 rounded-lg h-fit">
                                        <GraduationCap className="w-8 h-8 text-primary" />
                                    </div>

                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold mb-2">
                                            {edu.degree}
                                        </h3>
                                        <p className="text-lg text-primary font-semibold mb-2">
                                            {edu.institution}
                                        </p>
                                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                                            <span>{edu.duration}</span>
                                            <span>•</span>
                                            <span>{edu.location}</span>
                                            <span>•</span>
                                            <span className="font-semibold">
                                                {edu.grade}
                                            </span>
                                        </div>

                                        {edu.achievements && (
                                            <div>
                                                <h4 className="font-semibold mb-2">
                                                    Achievements:
                                                </h4>
                                                <ul className="space-y-2">
                                                    {edu.achievements.map((achievement, i) => (
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
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Certifications */}
                <div>
                    <h2 className="section-title">
                        <span className="gradient-text">Certifications</span>
                    </h2>
                    <p className="section-subtitle">
                        Professional certifications and achievements
                    </p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {content.certifications.map((cert) => (
                            <Link
                                key={cert.id}
                                href={cert.credentialUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="card card-hover group"
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <div className="p-3 bg-primary/10 rounded-lg">
                                        <Award className="w-6 h-6 text-primary" />
                                    </div>
                                    <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                                </div>

                                <h3 className="font-bold mb-2 group-hover:text-primary transition-colors">
                                    {cert.name}
                                </h3>

                                <p className="text-sm text-muted-foreground mb-2">
                                    {cert.issuer}
                                </p>

                                <p className="text-sm text-muted-foreground">
                                    Issued: {cert.date}
                                </p>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
