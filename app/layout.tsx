import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import content from "@/data/content.json";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: `${content.personal.name} | ${content.personal.title}`,
    description: content.personal.bio,
    keywords: [
        "SAP UI5",
        "Fiori Developer",
        "Software Engineer",
        "Web Developer",
        "React",
        "Next.js",
        "TypeScript",
        "Bengaluru",
    ],
    authors: [{ name: content.personal.name }],
    creator: content.personal.name,
    publisher: content.personal.name,
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    metadataBase: new URL("https://vishwanathgouda.dev"),
    alternates: {
        canonical: "/",
    },
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://vishwanathgouda.dev",
        title: `${content.personal.name} | ${content.personal.title}`,
        description: content.personal.bio,
        siteName: `${content.personal.name} Portfolio`,
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: `${content.personal.name} - Portfolio`,
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: `${content.personal.name} | ${content.personal.title}`,
        description: content.personal.bio,
        creator: "@vishwanath_dev",
        images: ["/og-image.png"],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    icons: {
        icon: "/icon.png",
        apple: "/icon.png",
    },
    manifest: "/site.webmanifest",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                {/* Structured Data - Person */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Person",
                            name: content.personal.name,
                            jobTitle: content.personal.title,
                            description: content.personal.bio,
                            url: "https://vishwanathgouda.dev",
                            image: "https://vishwanathgouda.dev/og-image.png",
                            address: {
                                "@type": "PostalAddress",
                                addressLocality: "Bengaluru",
                                addressRegion: "Karnataka",
                                addressCountry: "India",
                            },
                            sameAs: [
                                content.personal.socials.github,
                                content.personal.socials.linkedin,
                                "twitter" in content.personal.socials ? content.personal.socials.twitter : "",
                            ].filter(Boolean) as string[],
                            knowsAbout: [
                                "SAP UI5",
                                "SAP Fiori",
                                "JavaScript",
                                "TypeScript",
                                "React",
                                "Web Development",
                            ],
                        }),
                    }}
                />
                {/* Structured Data - WebSite */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "WebSite",
                            name: `${content.personal.name} Portfolio`,
                            url: "https://vishwanathgouda.dev",
                            description: content.personal.bio,
                            author: {
                                "@type": "Person",
                                name: content.personal.name,
                            },
                        }),
                    }}
                />
            </head>
            <body className={inter.className}>
                <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
