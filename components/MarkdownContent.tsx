'use client';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';

interface MarkdownContentProps {
    content: string;
}

export function MarkdownContent({ content }: MarkdownContentProps) {
    return (
        <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeSlug]}
            components={{
                h1: ({ node, ...props }) => (
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 mt-16 scroll-mt-32" {...props} />
                ),
                h2: ({ node, ...props }) => (
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 mt-16 scroll-mt-32" {...props} />
                ),
                h3: ({ node, ...props }) => (
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 mt-12 scroll-mt-32" {...props} />
                ),
                p: ({ node, ...props }) => (
                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed" {...props} />
                ),
                ul: ({ node, ...props }) => (
                    <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300 marker:text-gray-400 mb-6" {...props} />
                ),
                ol: ({ node, ...props }) => (
                    <ol className="list-decimal pl-6 space-y-2 text-gray-600 dark:text-gray-300 mb-6" {...props} />
                ),
                li: ({ node, ...props }) => (
                    <li {...props} />
                ),
                strong: ({ node, ...props }) => (
                    <strong className="font-semibold text-gray-900 dark:text-white" {...props} />
                ),
                a: ({ node, ...props }) => (
                    <a className="text-blue-600 dark:text-blue-400 hover:underline" {...props} />
                ),
                blockquote: ({ node, ...props }) => (
                    <blockquote className="border-l-4 border-gray-300 dark:border-gray-700 pl-4 italic text-gray-600 dark:text-gray-400 my-6" {...props} />
                ),
            }}
        >
            {content}
        </ReactMarkdown>
    );
}
