'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export type LegalSection = {
    id: string;
    title: string;
};

interface LegalLayoutProps {
    title: string;
    lastUpdated: string;
    intro?: React.ReactNode;
    sections: LegalSection[];
    children: React.ReactNode;
}

export function LegalLayout({ title, lastUpdated, intro, sections, children }: LegalLayoutProps) {
    const [activeSection, setActiveSection] = useState<string>(sections[0]?.id || '');

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { rootMargin: '-100px 0px -66% 0px' }
        );

        sections.forEach((section) => {
            const el = document.getElementById(section.id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, [sections]);

    return (
        <div className="bg-white dark:bg-[#0a0a0a] text-gray-900 dark:text-gray-100 transition-colors duration-200 antialiased min-h-screen">
            {/* Navigation */}
            <nav className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/80 dark:bg-[#0a0a0a]/80 border-b border-gray-200 dark:border-[#262626]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center h-16">
                        <div className="shrink-0 flex items-center gap-2">
                            <Link href="/" className="flex items-center gap-2 group">
                                <Image src="/pair-black.png" alt="Pair Logo" width={32} height={32} className="h-8 w-auto dark:hidden transition-transform group-hover:scale-105 duration-200" />
                                <Image src="/pair-white.png" alt="Pair Logo" width={32} height={32} className="h-8 w-auto hidden dark:block transition-transform group-hover:scale-105 duration-200" />
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
                <div className="lg:grid lg:grid-cols-12 lg:gap-12">
                    {/* Sidebar Navigation */}
                    <aside className="hidden lg:block lg:col-span-3">
                        <nav className="sticky top-28 space-y-1">
                            <h3 className="uppercase text-xs font-semibold text-gray-500 dark:text-gray-500 tracking-wider mb-4 px-3">Contents</h3>
                            {sections.map((section) => (
                                <a
                                    key={section.id}
                                    href={`#${section.id}`}
                                    className={`group flex items-center px-3 py-2 text-sm font-medium rounded-md border-l-2 transition-all ${
                                        activeSection === section.id
                                            ? 'bg-gray-100 dark:bg-[#171717] text-black dark:text-white border-black dark:border-white'
                                            : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-white/5 border-transparent hover:border-gray-300 dark:hover:border-gray-600'
                                    }`}
                                >
                                    {section.title}
                                </a>
                            ))}
                        </nav>
                    </aside>

                    {/* Main Content Area */}
                    <div className="lg:col-span-8 lg:col-start-4 prose prose-lg prose-slate dark:prose-invert max-w-none">
                        {/* Header */}
                        <div className="mb-12 border-b border-gray-200 dark:border-[#262626] pb-8">
                            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">{title}</h1>
                            <p className="text-gray-500 dark:text-gray-400 text-lg mb-6">Last updated: {lastUpdated}</p>
                            {intro && (
                                <div className="text-xl leading-relaxed text-gray-600 dark:text-gray-300 space-y-4">
                                    {intro}
                                </div>
                            )}
                        </div>

                        {/* Content */}
                        {children}
                    </div>
                </div>
            </main>
        </div>
    );
}
