import { twMerge } from 'tailwind-merge';

export default function Card({ content = null, className = '' }) {
    return (
        <div
            className={twMerge(
                `w-full gap-3 rounded-2xl border border-slate-950/20 bg-slate-950/10 p-5 shadow-sm shadow-slate-200/20 backdrop-blur-xs dark:border-slate-100/20 dark:bg-slate-100/10 ${className} `,
            )}
        >
            {content}
        </div>
    );
}
