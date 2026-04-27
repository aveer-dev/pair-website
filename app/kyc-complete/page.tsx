

export default function KYCComplete() {
    return (
        <div className="bg-white dark:bg-[#0a0a0a] text-gray-900 dark:text-gray-100 transition-colors duration-200 antialiased min-h-screen flex flex-col items-center justify-center p-4">
            <div className="flex flex-col items-center space-y-3">
                <div className="flex items-center space-x-2">
                    <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-lg font-medium">Done</span>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-700">
                    This window will close automatically.
                </p>
            </div>
        </div>
    );
}


