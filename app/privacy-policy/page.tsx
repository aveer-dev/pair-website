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
                            <a className="group flex items-center px-3 py-2 text-sm font-medium bg-gray-100 dark:bg-[#171717] text-black dark:text-white rounded-md border-l-2 border-black dark:border-white" href="#scope">
                                Scope and Application
                            </a>
                            <a
                                className="group flex items-center px-3 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-white/5 rounded-md border-l-2 border-transparent hover:border-gray-300 dark:hover:border-gray-600 transition-all"
                                href="#information-we-collect">
                                Information We Collect
                            </a>
                            <a
                                className="group flex items-center px-3 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-white/5 rounded-md border-l-2 border-transparent hover:border-gray-300 dark:hover:border-gray-600 transition-all"
                                href="#lawful-basis">
                                Lawful Basis for Processing
                            </a>
                            <a
                                className="group flex items-center px-3 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-white/5 rounded-md border-l-2 border-transparent hover:border-gray-300 dark:hover:border-gray-600 transition-all"
                                href="#how-we-use">
                                How We Use Personal Data
                            </a>
                            <a
                                className="group flex items-center px-3 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-white/5 rounded-md border-l-2 border-transparent hover:border-gray-300 dark:hover:border-gray-600 transition-all"
                                href="#sharing-disclosure">
                                Data Sharing and Disclosure
                            </a>
                            <a
                                className="group flex items-center px-3 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-white/5 rounded-md border-l-2 border-transparent hover:border-gray-300 dark:hover:border-gray-600 transition-all"
                                href="#us-privacy-rights">
                                US Privacy Rights
                            </a>
                            <a
                                className="group flex items-center px-3 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-white/5 rounded-md border-l-2 border-transparent hover:border-gray-300 dark:hover:border-gray-600 transition-all"
                                href="#international-transfers">
                                International Data Transfers
                            </a>
                            <a
                                className="group flex items-center px-3 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-white/5 rounded-md border-l-2 border-transparent hover:border-gray-300 dark:hover:border-gray-600 transition-all"
                                href="#data-security">
                                Data Security
                            </a>
                            <a
                                className="group flex items-center px-3 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-white/5 rounded-md border-l-2 border-transparent hover:border-gray-300 dark:hover:border-gray-600 transition-all"
                                href="#data-retention">
                                Data Retention
                            </a>
                            <a
                                className="group flex items-center px-3 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-white/5 rounded-md border-l-2 border-transparent hover:border-gray-300 dark:hover:border-gray-600 transition-all"
                                href="#your-rights">
                                Your Rights Outside US
                            </a>
                            <a
                                className="group flex items-center px-3 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-white/5 rounded-md border-l-2 border-transparent hover:border-gray-300 dark:hover:border-gray-600 transition-all"
                                href="#cookies">
                                Cookies and Tracking
                            </a>
                            <a
                                className="group flex items-center px-3 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-white/5 rounded-md border-l-2 border-transparent hover:border-gray-300 dark:hover:border-gray-600 transition-all"
                                href="#changes">
                                Changes to This Policy
                            </a>
                            <a
                                className="group flex items-center px-3 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-white/5 rounded-md border-l-2 border-transparent hover:border-gray-300 dark:hover:border-gray-600 transition-all"
                                href="#contact">
                                Contact Information
                            </a>
                        </nav>
                    </aside>

                    {/* Main Content Area */}
                    <div className="lg:col-span-8 lg:col-start-4 prose prose-lg prose-slate dark:prose-invert max-w-none">
                        {/* Header */}
                        <div className="mb-12 border-b border-gray-200 dark:border-[#262626] pb-8">
                            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">Privacy Policy</h1>
                            <p className="text-gray-500 dark:text-gray-400 text-lg">Last updated: 19th December 2025</p>
                            <p className="mt-6 text-xl leading-relaxed text-gray-600 dark:text-gray-300">
                                At Pair, we believe that privacy is foundational to trust in financial systems. This Privacy Policy explains how Pair Financial Technologies, Inc. and its affiliates (&quot;Pair&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) collect, use, share, store, and protect personal data when you access or use our websites, applications, APIs, and financial products (collectively, the &quot;Services&quot;).
                            </p>
                            <p className="mt-4 text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                                We design our Services to minimise data collection, protect confidentiality, and comply with applicable data protection and financial regulations globally, including GDPR, UK GDPR, CCPA/CPRA, and other applicable US state privacy laws.
                            </p>
                        </div>

                        {/* Section 1: Scope and Application */}
                        <section className="scroll-mt-32 mb-16" id="scope">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">1. Scope and Application</h2>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">
                                This Privacy Policy applies to personal data processed by Pair in connection with:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300 marker:text-gray-400 mb-4">
                                <li>Use of our Services</li>
                                <li>Business relationships with customers, partners, vendors, and end users</li>
                                <li>Regulatory, compliance, and risk management activities</li>
                            </ul>
                            <p className="text-gray-600 dark:text-gray-300">
                                By accessing or using our Services, you acknowledge that your personal data will be processed in accordance with this Policy.
                            </p>
                        </section>

                        {/* Section 2: Information We Collect */}
                        <section className="scroll-mt-32 mb-16" id="information-we-collect">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">2. Information We Collect</h2>
                            <p className="text-gray-600 dark:text-gray-300 mb-6">
                                We collect personal data that is necessary to provide secure, compliant financial services. This includes:
                            </p>
                            <div className="bg-gray-100 dark:bg-[#171717] rounded-xl p-6 border border-gray-200 dark:border-[#262626] my-6 not-prose">
                                <div className="space-y-6">
                                    {/* Identity and Verification Data */}
                                    <div>
                                        <div className="flex items-start mb-3">
                                        <svg className="w-5 h-5 text-gray-400 dark:text-gray-500 mr-3 mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
                                            />
                                        </svg>
                                            <div className="flex-1">
                                                <strong className="block text-gray-900 dark:text-white font-semibold mb-2">a. Identity and Verification Data</strong>
                                                <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600 dark:text-gray-400">
                                                    <li>Full name</li>
                                                    <li>Date of birth</li>
                                                    <li>Government-issued identification numbers and documents</li>
                                                    <li>Verification and authentication data required for KYC and AML compliance</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Financial and Transaction Data */}
                                    <div>
                                        <div className="flex items-start mb-3">
                                        <svg className="w-5 h-5 text-gray-400 dark:text-gray-500 mr-3 mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                                        </svg>
                                            <div className="flex-1">
                                                <strong className="block text-gray-900 dark:text-white font-semibold mb-2">b. Financial and Transaction Data</strong>
                                                <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600 dark:text-gray-400">
                                                    <li>Bank account, wallet, and payment instrument details</li>
                                                    <li>Transaction history and settlement data</li>
                                                    <li>Account balances and ledger information</li>
                                                    <li>Credit, risk, or underwriting information, where applicable</li>
                                                </ul>
                                                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 italic">
                                                    For US users, financial data is treated as non-public personal information and handled in accordance with financial privacy expectations applicable to regulated financial services providers.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Technical and Usage Data */}
                                    <div>
                                        <div className="flex items-start mb-3">
                                        <svg className="w-5 h-5 text-gray-400 dark:text-gray-500 mr-3 mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                            <div className="flex-1">
                                                <strong className="block text-gray-900 dark:text-white font-semibold mb-2">c. Technical and Usage Data</strong>
                                                <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600 dark:text-gray-400">
                                                    <li>IP address</li>
                                                    <li>Device identifiers and operating system</li>
                                                    <li>Browser type and access logs</li>
                                                    <li>API usage data, timestamps, and performance metrics</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Communications Data */}
                                        <div>
                                        <div className="flex items-start mb-3">
                                            <svg className="w-5 h-5 text-gray-400 dark:text-gray-500 mr-3 mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                            <div className="flex-1">
                                                <strong className="block text-gray-900 dark:text-white font-semibold mb-2">d. Communications Data</strong>
                                                <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600 dark:text-gray-400">
                                                    <li>Customer support requests and correspondence</li>
                                                    <li>Emails, chat messages, and call records where legally permitted</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300 text-sm italic">
                                We do not knowingly collect personal data from individuals under the age of 18.
                            </p>
                        </section>

                        {/* Section 3: Lawful Basis for Processing */}
                        <section className="scroll-mt-32 mb-16" id="lawful-basis">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">3. Lawful Basis for Processing</h2>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">
                                We process personal data only where permitted by law, including where processing is necessary for:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300 marker:text-gray-400">
                                <li>Performance of a contract</li>
                                <li>Compliance with legal and regulatory obligations</li>
                                <li>Legitimate business interests, such as security, fraud prevention, and service improvement</li>
                                <li>User consent, where required</li>
                            </ul>
                            <p className="text-gray-600 dark:text-gray-300 mt-4">
                                Where consent is relied upon, it may be withdrawn at any time, subject to applicable legal or regulatory requirements.
                            </p>
                        </section>

                        {/* Section 4: How We Use Personal Data */}
                        <section className="scroll-mt-32 mb-16" id="how-we-use">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">4. How We Use Personal Data</h2>
                            <p className="text-gray-600 dark:text-gray-300 mb-6">We use personal data to:</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose mt-6">
                                <div className="p-5 border border-gray-200 dark:border-[#262626] rounded-lg bg-white dark:bg-transparent">
                                    <div className="flex items-start">
                                        <svg className="w-5 h-5 text-gray-400 dark:text-gray-500 mr-3 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">Provide, operate, and maintain the Services</p>
                                    </div>
                                </div>
                                <div className="p-5 border border-gray-200 dark:border-[#262626] rounded-lg bg-white dark:bg-transparent">
                                    <div className="flex items-start">
                                        <svg className="w-5 h-5 text-gray-400 dark:text-gray-500 mr-3 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">Process payments and financial transactions</p>
                                    </div>
                                </div>
                                <div className="p-5 border border-gray-200 dark:border-[#262626] rounded-lg bg-white dark:bg-transparent">
                                    <div className="flex items-start">
                                        <svg className="w-5 h-5 text-gray-400 dark:text-gray-500 mr-3 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                        </svg>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">Verify identity and conduct KYC, AML, and sanctions screening</p>
                                    </div>
                                </div>
                                <div className="p-5 border border-gray-200 dark:border-[#262626] rounded-lg bg-white dark:bg-transparent">
                                    <div className="flex items-start">
                                        <svg className="w-5 h-5 text-gray-400 dark:text-gray-500 mr-3 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                        </svg>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">Detect, prevent, and investigate fraud, abuse, or security incidents</p>
                                    </div>
                                </div>
                                <div className="p-5 border border-gray-200 dark:border-[#262626] rounded-lg bg-white dark:bg-transparent">
                                    <div className="flex items-start">
                                        <svg className="w-5 h-5 text-gray-400 dark:text-gray-500 mr-3 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                        </svg>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">Comply with legal, tax, and regulatory obligations</p>
                                    </div>
                                </div>
                                <div className="p-5 border border-gray-200 dark:border-[#262626] rounded-lg bg-white dark:bg-transparent">
                                    <div className="flex items-start">
                                        <svg className="w-5 h-5 text-gray-400 dark:text-gray-500 mr-3 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">Improve product functionality, reliability, and user experience</p>
                                    </div>
                                </div>
                                <div className="p-5 border border-gray-200 dark:border-[#262626] rounded-lg bg-white dark:bg-transparent md:col-span-2">
                                    <div className="flex items-start">
                                        <svg className="w-5 h-5 text-gray-400 dark:text-gray-500 mr-3 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                        </svg>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">Communicate service-related updates and customer support information</p>
                                    </div>
                                </div>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300 mt-6">
                                We do not sell personal data and do not use personal data for third-party advertising.
                            </p>
                        </section>

                        {/* Section 5: Data Sharing and Disclosure */}
                        <section className="scroll-mt-32 mb-16" id="sharing-disclosure">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">5. Data Sharing and Disclosure</h2>
                            <p className="text-gray-600 dark:text-gray-300 mb-6">
                                We share personal data only where necessary and subject to strict safeguards:
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose mt-6">
                                <div className="p-5 border border-gray-200 dark:border-[#262626] rounded-lg bg-white dark:bg-transparent">
                                    <div className="flex items-start mb-3">
                                        <svg className="w-5 h-5 text-gray-400 dark:text-gray-500 mr-3 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                        </svg>
                                        <div>
                                            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">a. Service Providers</h4>
                                            <p className="text-sm text-gray-600 dark:text-gray-400">With vetted third-party vendors who support infrastructure, cloud hosting, identity verification, analytics, and customer support. All service providers are contractually required to protect personal data and use it only for authorised purposes.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-5 border border-gray-200 dark:border-[#262626] rounded-lg bg-white dark:bg-transparent">
                                    <div className="flex items-start mb-3">
                                        <svg className="w-5 h-5 text-gray-400 dark:text-gray-500 mr-3 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                                        </svg>
                                        <div>
                                            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">b. Financial and Banking Partners</h4>
                                            <p className="text-sm text-gray-600 dark:text-gray-400">With regulated financial institutions, payment processors, settlement partners, and liquidity providers where required to deliver financial services.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-5 border border-gray-200 dark:border-[#262626] rounded-lg bg-white dark:bg-transparent">
                                    <div className="flex items-start mb-3">
                                        <svg className="w-5 h-5 text-gray-400 dark:text-gray-500 mr-3 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                        </svg>
                                        <div>
                                            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">c. Legal and Regulatory Authorities</h4>
                                            <p className="text-sm text-gray-600 dark:text-gray-400">Where required to comply with applicable laws, regulations, court orders, or lawful requests from regulators or law enforcement authorities.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-5 border border-gray-200 dark:border-[#262626] rounded-lg bg-white dark:bg-transparent">
                                    <div className="flex items-start mb-3">
                                        <svg className="w-5 h-5 text-gray-400 dark:text-gray-500 mr-3 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                                        </svg>
                                        <div>
                                            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">d. Corporate Transactions</h4>
                                            <p className="text-sm text-gray-600 dark:text-gray-400">In connection with a merger, acquisition, financing, restructuring, or sale of assets, subject to appropriate confidentiality and data protection safeguards.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Section 6: US Privacy Rights and Disclosures */}
                        <section className="scroll-mt-32 mb-16" id="us-privacy-rights">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">6. US Privacy Rights and Disclosures</h2>
                            <p className="text-gray-600 dark:text-gray-300 mb-6">
                                This section applies to individuals residing in the United States, including California.
                            </p>
                            <div className="bg-gray-100 dark:bg-[#171717] rounded-xl p-6 border border-gray-200 dark:border-[#262626] my-6 not-prose">
                                <div className="space-y-6">
                                    <div>
                                        <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                                            <svg className="w-5 h-5 text-gray-400 dark:text-gray-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                            </svg>
                                            a. Categories of Personal Information
                                        </h4>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">
                                            In the past 12 months, we may have collected the categories of personal information described in Section 2 for business and operational purposes.
                                        </p>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                                            <svg className="w-5 h-5 text-gray-400 dark:text-gray-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                                            </svg>
                                            b. No Sale or Sharing of Personal Information
                                        </h4>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">
                                            Pair does not sell personal information and does not share personal information for cross-context behavioural advertising, as those terms are defined under the California Consumer Privacy Act and the California Privacy Rights Act.
                                        </p>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                                            <svg className="w-5 h-5 text-gray-400 dark:text-gray-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                            </svg>
                                            c. Your US Privacy Rights
                                        </h4>
                                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                                            Subject to applicable law, US residents may have the right to:
                                        </p>
                                        <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600 dark:text-gray-400">
                                            <li>Request access to the personal information we collect about you</li>
                                            <li>Request correction of inaccurate personal information</li>
                                            <li>Request deletion of personal information, subject to legal and regulatory retention requirements</li>
                                            <li>Opt out of certain processing activities where applicable</li>
                                            <li>Not be discriminated against for exercising privacy rights</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                                            <svg className="w-5 h-5 text-gray-400 dark:text-gray-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                            d. Submitting Requests
                                        </h4>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">
                                            Privacy requests may be submitted by contacting us using the details in Section 12. We will verify your identity before processing requests and respond within legally required timeframes.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Section 7: International Data Transfers */}
                        <section className="scroll-mt-32 mb-16" id="international-transfers">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">7. International Data Transfers</h2>
                            <p className="text-gray-600 dark:text-gray-300">
                                Pair operates globally. Where personal data is transferred across borders, we ensure appropriate safeguards are in place, including standard contractual clauses or other legally recognised transfer mechanisms.
                            </p>
                        </section>

                        {/* Section 8: Data Security */}
                        <section className="scroll-mt-32 mb-16" id="data-security">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">8. Data Security</h2>
                            <p className="text-gray-600 dark:text-gray-300 mb-6">
                                We implement technical and organisational security measures designed to protect personal data against unauthorised access, loss, misuse, or alteration. These measures include:
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose mt-6">
                                <div className="p-5 border border-gray-200 dark:border-[#262626] rounded-lg bg-white dark:bg-transparent">
                                    <div className="flex items-start">
                                        <svg className="w-5 h-5 text-gray-400 dark:text-gray-500 mr-3 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                        </svg>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">Encryption of data in transit and at rest</p>
                                    </div>
                                </div>
                                <div className="p-5 border border-gray-200 dark:border-[#262626] rounded-lg bg-white dark:bg-transparent">
                                    <div className="flex items-start">
                                        <svg className="w-5 h-5 text-gray-400 dark:text-gray-500 mr-3 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                        </svg>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">Role-based access controls and least-privilege principles</p>
                                    </div>
                                </div>
                                <div className="p-5 border border-gray-200 dark:border-[#262626] rounded-lg bg-white dark:bg-transparent">
                                    <div className="flex items-start">
                                        <svg className="w-5 h-5 text-gray-400 dark:text-gray-500 mr-3 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                        </svg>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">Continuous monitoring, logging, and incident response procedures</p>
                                    </div>
                                </div>
                                <div className="p-5 border border-gray-200 dark:border-[#262626] rounded-lg bg-white dark:bg-transparent">
                                    <div className="flex items-start">
                                        <svg className="w-5 h-5 text-gray-400 dark:text-gray-500 mr-3 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                                        </svg>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">Regular security testing and audits</p>
                                    </div>
                                </div>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300 mt-6">
                                No system is completely secure, but we follow industry best practices consistent with financial services and infrastructure providers.
                            </p>
                        </section>

                        {/* Section 9: Data Retention */}
                        <section className="scroll-mt-32 mb-16" id="data-retention">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">9. Data Retention</h2>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">
                                We retain personal data only for as long as necessary to:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300 marker:text-gray-400">
                                <li>Provide the Services</li>
                                <li>Fulfil contractual obligations</li>
                                <li>Comply with legal, regulatory, accounting, and reporting requirements</li>
                            </ul>
                            <p className="text-gray-600 dark:text-gray-300 mt-4">
                                When retention is no longer required, personal data is securely deleted or anonymised.
                            </p>
                        </section>

                        {/* Section 10: Your Rights Outside the United States */}
                        <section className="scroll-mt-32 mb-16" id="your-rights">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">10. Your Rights Outside the United States</h2>
                            <p className="text-gray-600 dark:text-gray-300">
                                Depending on your jurisdiction, you may have rights to access, correct, delete, restrict, or object to the processing of your personal data, and to lodge a complaint with a relevant data protection authority.
                            </p>
                        </section>

                        {/* Section 11: Cookies and Tracking Technologies */}
                        <section className="scroll-mt-32 mb-16" id="cookies">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">11. Cookies and Tracking Technologies</h2>
                            <p className="text-gray-600 dark:text-gray-300">
                                We use cookies and similar technologies to operate and improve our Services. You can manage cookie preferences through your browser settings. Additional details are provided in our Cookie Policy.
                            </p>
                        </section>

                        {/* Section 12: Changes to This Policy */}
                        <section className="scroll-mt-32 mb-16" id="changes">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">12. Changes to This Policy</h2>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">
                                We may update this Privacy Policy from time to time to reflect changes in legal requirements, technology, or business practices. Material changes will be communicated through our Services or other appropriate channels.
                            </p>
                            <p className="text-gray-600 dark:text-gray-300">
                                Continued use of the Services after an update constitutes acceptance of the revised Policy.
                            </p>
                        </section>

                        {/* Section 13: Contact Information */}
                        <section className="scroll-mt-32 border-t border-gray-200 dark:border-[#262626] pt-12" id="contact">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">13. Contact Information</h2>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">
                                For questions, concerns, or requests related to this Privacy Policy or our data practices, please contact:
                            </p>
                            <div className="bg-gray-100 dark:bg-[#171717] rounded-xl p-6 border border-gray-200 dark:border-[#262626] my-6 not-prose">
                                <div className="space-y-3">
                                    <div className="flex items-start">
                                        <svg className="w-5 h-5 text-gray-400 dark:text-gray-500 mr-3 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                        </svg>
                                        <div>
                                            <strong className="block text-gray-900 dark:text-white font-semibold mb-1">aveer, co</strong>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <svg className="w-5 h-5 text-gray-400 dark:text-gray-500 mr-3 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                        <div>
                                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                                Email: <a href="mailto:emmanuel@aveer.hr" className="text-gray-900 dark:text-white hover:underline">emmanuel@aveer.hr</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </main>
        </div>
    );
}


