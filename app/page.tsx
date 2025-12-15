'use client';

// import { useState } from 'react';
// import Image from 'next/image';

export default function Home() {
    // const [email, setEmail] = useState('');

    // const handleSubmit = (e: React.FormEvent) => {
    //     e.preventDefault();
    //     // Handle form submission here
    //     console.log('Email submitted:', email);
    // };

    return (
        <div className="bg-white dark:bg-[#0a0a0a] text-black dark:text-white font-sans antialiased min-h-screen flex flex-col transition-colors duration-300">
            {/* Header */}
            {/* <header className="w-full fixed top-0 z-50 bg-white/80 dark:bg-[#0a0a0a]/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="h-10 w-10 flex items-center justify-center dark:invert">
                            <Image src="/pair-black.png" alt="Pair" width={40} height={40} />
                            <Image src="/pair-white.png" alt="Pair" width={40} height={40} />
                        </div> */}
            {/* <span className="font-bold text-xl tracking-tight hidden sm:block">Pair</span> */}
            {/* </div>
                    <div className="flex items-center gap-6"> */}
            {/* <a className="text-sm font-medium hover:text-gray-600 dark:hover:text-gray-300 transition-colors" href="mailto:hello@pair.cash">
                            Contact
                        </a>
                        <a className="text-sm font-medium hover:text-gray-600 dark:hover:text-gray-300 transition-colors" href="#">
                            Twitter
                        </a> */}
            {/* </div>
                </div>
            </header> */}

            {/* Main Content */}
            <main className="grow flex items-center justify-center px-6 relative overflow-hidden">
                {/* Animated Background Blobs */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gray-100 dark:bg-gray-800 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-3xl opacity-50 animate-blob"></div>
                    <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gray-200 dark:bg-gray-700 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
                    <div className="absolute -bottom-8 left-1/2 w-96 h-96 bg-gray-50 dark:bg-gray-900 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>
                </div>

                <div className="max-w-2xl w-full text-center space-y-12 z-10 pt-20">
                    {/* Hero Section */}
                    <div className="space-y-6">
                        <div className="inline-flex items-center px-3 py-1 rounded-full border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 text-xs font-medium uppercase tracking-wide">
                            <span className="flex h-2 w-2 relative mr-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black dark:bg-white opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-black dark:bg-white"></span>
                            </span>
                            Launching Soon
                        </div>
                        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-none bg-clip-text text-transparent bg-linear-to-br from-black to-gray-600 dark:from-white dark:to-gray-500">pair.cash</h1>
                        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 font-light max-w-lg mx-auto leading-relaxed">The new standard for modern financial interactions. Minimalist, secure, and instant.</p>
                    </div>

                    {/* Email Signup Form */}
                    {/* <div className="max-w-md mx-auto relative group">
                        <div className="absolute -inset-0.5 bg-linear-to-r from-gray-200 to-gray-400 dark:from-gray-800 dark:to-gray-600 rounded-xl opacity-50 group-hover:opacity-100 transition duration-500 blur"></div>
                        <form onSubmit={handleSubmit} className="relative flex items-center bg-white dark:bg-black rounded-xl p-1 shadow-lg">
                            <div className="pl-4 text-gray-400 dark:text-gray-500">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <input
                                className="grow w-full border-none focus:ring-0 bg-transparent text-sm md:text-base py-3 px-3 placeholder-gray-400 dark:placeholder-gray-600 text-gray-900 dark:text-white"
                                placeholder="Enter your email for early access"
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <button className="bg-black dark:bg-white text-white dark:text-black px-6 py-2.5 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity whitespace-nowrap" type="submit">
                                Join Waitlist
                            </button>
                        </form>
                        <p className="mt-3 text-xs text-gray-500 dark:text-gray-500">We respect your inbox. No spam, ever.</p>
                    </div> */}

                    {/* Features */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 border-t border-gray-100 dark:border-gray-800">
                        <div className="flex flex-col items-center space-y-2">
                            <svg className="w-6 h-6 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                            <h3 className="font-medium text-sm">Instant Transfer</h3>
                        </div>
                        <div className="flex flex-col items-center space-y-2">
                            <svg className="w-6 h-6 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                />
                            </svg>
                            <h3 className="font-medium text-sm">Bank-Grade Security</h3>
                        </div>
                        <div className="flex flex-col items-center space-y-2">
                            <svg className="w-6 h-6 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                            <h3 className="font-medium text-sm">Global Reach</h3>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="w-full py-8 text-center text-sm text-gray-500 dark:text-gray-600 bg-white dark:bg-[#0a0a0a] border-t border-gray-100 dark:border-gray-900">
                <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8">
                    <p>© 2024 aveer, co.</p>
                    <nav className="flex gap-6">
                        <a className="hover:text-black dark:hover:text-white transition-colors" href="/privacy-policy">
                            Privacy Policy
                        </a>
                    </nav>
                </div>
            </footer>
        </div>
    );
}
