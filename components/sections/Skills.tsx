"use client";

import content from "@/data/content.json";

export default function Skills() {
    const skillCategories = [
        {
            title: "Frontend Development",
            skills: content.skills.frontend,
            color: "bg-blue-500/10 text-blue-500 border-blue-500/20",
        },
        {
            title: "Backend Development",
            skills: content.skills.backend,
            color: "bg-green-500/10 text-green-500 border-green-500/20",
        },
        {
            title: "Tools & Technologies",
            skills: content.skills.tools,
            color: "bg-purple-500/10 text-purple-500 border-purple-500/20",
        },
        {
            title: "Other Skills",
            skills: content.skills.other,
            color: "bg-orange-500/10 text-orange-500 border-orange-500/20",
        },
    ];

    return (
        <section id="skills" className="section">
            <div className="container mx-auto max-w-6xl">
                <h2 className="section-title">
                    Skills & <span className="gradient-text">Technologies</span>
                </h2>
                <p className="section-subtitle">
                    Technologies and tools I work with to build amazing products
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                    {skillCategories.map((category, index) => (
                        <div key={index} className="card card-hover">
                            <h3 className="text-xl font-semibold mb-4">
                                {category.title}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, skillIndex) => (
                                    <span
                                        key={skillIndex}
                                        className={`px-3 py-1.5 rounded-full text-sm font-medium border transition-all hover:scale-105 ${category.color}`}
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Tech Stack Highlight */}
                <div className="mt-12 card bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border-primary/20">
                    <div className="flex flex-col md:flex-row items-center gap-6">
                        <div className="flex-1">
                            <h3 className="text-2xl font-bold mb-2">
                                Primary Tech Stack
                            </h3>
                            <p className="text-muted-foreground mb-4">
                                My go-to technologies for building enterprise-grade
                                applications
                            </p>
                            <div className="flex flex-wrap gap-3">
                                {["SAP UI5/Fiori", "JavaScript", "Java", "React", "Next.js"].map(
                                    (tech) => (
                                        <span
                                            key={tech}
                                            className="px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium text-sm"
                                        >
                                            {tech}
                                        </span>
                                    )
                                )}
                            </div>
                        </div>
                        <div className="text-6xl">🚀</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
