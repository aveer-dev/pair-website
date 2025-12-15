import Link from 'next/link';
import Image from 'next/image';

export default function PrivacyPolicy() {
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
                            <a className="group flex items-center px-3 py-2 text-sm font-medium bg-gray-100 dark:bg-[#171717] text-black dark:text-white rounded-md border-l-2 border-black dark:border-white" href="#overview">
                                Overview
                            </a>
                            <a
                                className="group flex items-center px-3 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-white/5 rounded-md border-l-2 border-transparent hover:border-gray-300 dark:hover:border-gray-600 transition-all"
                                href="#information-we-collect">
                                Information We Collect
                            </a>
                            <a
                                className="group flex items-center px-3 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-white/5 rounded-md border-l-2 border-transparent hover:border-gray-300 dark:hover:border-gray-600 transition-all"
                                href="#how-we-use">
                                How We Use Information
                            </a>
                            <a
                                className="group flex items-center px-3 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-white/5 rounded-md border-l-2 border-transparent hover:border-gray-300 dark:hover:border-gray-600 transition-all"
                                href="#sharing-disclosure">
                                Sharing & Disclosure
                            </a>
                            <a
                                className="group flex items-center px-3 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-white/5 rounded-md border-l-2 border-transparent hover:border-gray-300 dark:hover:border-gray-600 transition-all"
                                href="#security">
                                Security & Retention
                            </a>
                            <a
                                className="group flex items-center px-3 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-white/5 rounded-md border-l-2 border-transparent hover:border-gray-300 dark:hover:border-gray-600 transition-all"
                                href="#your-rights">
                                Your Rights
                            </a>
                            <a
                                className="group flex items-center px-3 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-white/5 rounded-md border-l-2 border-transparent hover:border-gray-300 dark:hover:border-gray-600 transition-all"
                                href="#updates">
                                Updates to Policy
                            </a>
                        </nav>
                    </aside>

                    {/* Main Content Area */}
                    <div className="lg:col-span-8 lg:col-start-4 prose prose-lg prose-slate dark:prose-invert max-w-none">
                        {/* Header */}
                        <div className="mb-12 border-b border-gray-200 dark:border-[#262626] pb-8">
                            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">Privacy Policy</h1>
                            <p className="text-gray-500 dark:text-gray-400 text-lg">Last updated: October 24, 2023</p>
                            <p className="mt-6 text-xl leading-relaxed text-gray-600 dark:text-gray-300">
                                At Pair, we believe that privacy is fundamental to financial trust. This policy outlines how we collect, use, and protect your personal information when you use our financial services platform.
                            </p>
                        </div>

                        {/* Section 1: Overview */}
                        <section className="scroll-mt-32 mb-16" id="overview">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">1. Overview</h2>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">
                                This Privacy Policy describes how Pair (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) handles your personal information in connection with your use of our website, applications, and financial products (collectively, the &quot;Services&quot;).
                                By using our Services, you consent to the practices described in this policy.
                            </p>
                            <p className="text-gray-600 dark:text-gray-300">We are committed to transparency. We do not sell your data to third parties for advertising purposes. Your financial well-being and privacy are aligned with our business model.</p>
                        </section>

                        {/* Section 2: Information We Collect */}
                        <section className="scroll-mt-32 mb-16" id="information-we-collect">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">2. Information We Collect</h2>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">To provide you with our financial services, we must collect certain information about you. This includes:</p>
                            <div className="bg-gray-100 dark:bg-[#171717] rounded-xl p-6 border border-gray-200 dark:border-[#262626] my-6 not-prose">
                                <ul className="space-y-4">
                                    <li className="flex items-start">
                                        <svg className="w-5 h-5 text-gray-400 dark:text-gray-500 mr-3 mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
                                            />
                                        </svg>
                                        <div>
                                            <strong className="block text-gray-900 dark:text-white font-semibold">Identity Data</strong>
                                            <span className="text-gray-600 dark:text-gray-400 text-sm">Full name, date of birth, social security number, or other government ID numbers required for KYC (Know Your Customer) compliance.</span>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="w-5 h-5 text-gray-400 dark:text-gray-500 mr-3 mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                                        </svg>
                                        <div>
                                            <strong className="block text-gray-900 dark:text-white font-semibold">Financial Data</strong>
                                            <span className="text-gray-600 dark:text-gray-400 text-sm">Bank account details, transaction history, credit score information, and balance details linked to your Pair account.</span>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="w-5 h-5 text-gray-400 dark:text-gray-500 mr-3 mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                        <div>
                                            <strong className="block text-gray-900 dark:text-white font-semibold">Technical Data</strong>
                                            <span className="text-gray-600 dark:text-gray-400 text-sm">IP address, browser type, device information, and operating system used to access our services.</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </section>

                        {/* Section 3: How We Use Information */}
                        <section className="scroll-mt-32 mb-16" id="how-we-use">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">3. How We Use Your Information</h2>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">We use the information we collect for the following specific purposes:</p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300 marker:text-gray-400">
                                <li>
                                    <strong>Service Provision:</strong> To create your account, process transactions, and maintain your financial ledger.
                                </li>
                                <li>
                                    <strong>Security & Fraud Prevention:</strong> To verify your identity, detect and prevent fraud, and ensure the security of the Pair platform.
                                </li>
                                <li>
                                    <strong>Compliance:</strong> To comply with legal obligations, such as anti-money laundering (AML) laws and tax reporting requirements.
                                </li>
                                <li>
                                    <strong>Improvement:</strong> To analyze usage patterns and improve the functionality and user experience of our products.
                                </li>
                            </ul>
                        </section>

                        {/* Section 4: Sharing & Disclosure */}
                        <section className="scroll-mt-32 mb-16" id="sharing-disclosure">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">4. Sharing & Disclosure</h2>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">We respect the confidential nature of your financial data. We only share your information in limited circumstances:</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose mt-6">
                                <div className="p-5 border border-gray-200 dark:border-[#262626] rounded-lg bg-white dark:bg-transparent">
                                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Service Providers</h4>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">We share data with trusted vendors who help us operate our business (e.g., cloud hosting, identity verification services).</p>
                                </div>
                                <div className="p-5 border border-gray-200 dark:border-[#262626] rounded-lg bg-white dark:bg-transparent">
                                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Banking Partners</h4>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">To facilitate transfers and hold funds, we share necessary data with our partner banks.</p>
                                </div>
                            </div>
                        </section>

                        {/* Section 5: Security & Retention */}
                        <section className="scroll-mt-32 mb-16" id="security">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">5. Security & Retention</h2>
                            <p className="text-gray-600 dark:text-gray-300">
                                We implement state-of-the-art security measures designed to protect your information from unauthorized access, disclosure, or destruction. This includes encryption in transit (TLS 1.2+) and at rest (AES-256).
                            </p>
                            <p className="text-gray-600 dark:text-gray-300 mt-4">
                                We retain your personal information only as long as necessary to provide our Services and to comply with our legal obligations. When we no longer need your information, we securely delete or anonymize it.
                            </p>
                        </section>

                        {/* Section 6: Your Rights */}
                        <section className="scroll-mt-32 mb-16" id="your-rights">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">6. Your Rights</h2>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">Depending on your location, you may have rights regarding your personal information, including:</p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300 marker:text-gray-400">
                                <li>Accessing the data we hold about you.</li>
                                <li>Correcting inaccurate data.</li>
                                <li>Requesting deletion of your data (subject to regulatory retention requirements).</li>
                                <li>Opting out of certain marketing communications.</li>
                            </ul>
                        </section>

                        {/* Section 7: Updates */}
                        <section className="scroll-mt-32 border-t border-gray-200 dark:border-[#262626] pt-12" id="updates">
                            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">7. Updates to this Policy</h2>
                            <p className="text-gray-600 dark:text-gray-300 text-sm">
                                We may update this Privacy Policy from time to time. If we make material changes, we will notify you through our Services or by other means. Your continued use of the Services after such changes constitutes your acceptance of the updated policy.
                            </p>
                        </section>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-gray-100 dark:bg-black border-t border-gray-200 dark:border-[#262626] py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                        <div className="mb-8 md:mb-0">
                            <Image src="/pair-black.png" alt="Pair Logo" width={24} height={24} className="h-6 w-auto mb-4 dark:hidden opacity-80" />
                            <Image src="/pair-white.png" alt="Pair Logo" width={24} height={24} className="h-6 w-auto mb-4 hidden dark:block opacity-80" />
                            <p className="text-sm text-gray-500 dark:text-gray-400">© 2023 Pair Financial Technologies, Inc.</p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-8">
                            <div className="flex flex-col gap-2">
                                <Link href="/privacy-policy" className="text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                                    Privacy Policy
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

