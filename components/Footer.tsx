import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="w-full py-8 text-center text-sm text-gray-500 dark:text-gray-600 bg-white dark:bg-[#0a0a0a] border-t border-gray-100 dark:border-gray-900">
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8">
                <p>© 2024 aveer, co.</p>
                <nav className="flex gap-6">
                    <Link className="hover:text-black dark:hover:text-white transition-colors" href="/privacy-policy">
                        Privacy Policy
                    </Link>
                </nav>
            </div>
        </footer>
    );
}

