import { twMerge } from 'tailwind-merge';

export default function Card({ content = null, className = '' }) {
    return (
        <div className="group relative">
            {/* <div
                className={twMerge(
                    `absolute inset-0 z-0 translate-y-3 scale-95 bg-red-500 ${className} rounded-lg border-b-2 border-slate-100/20 bg-transparent`,
                )}
            ></div> */}
            <div
                className={twMerge(
                    `relative w-full gap-3 rounded-2xl border border-slate-100/20 bg-slate-100/10 p-5 shadow-sm shadow-slate-200/20 backdrop-blur-xs ${className} `,
                )}
            >
                {content}
            </div>
        </div>
    );
}
