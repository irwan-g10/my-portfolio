import { twMerge } from 'tailwind-merge';

export default function Button({
    icon = '',
    title = '',
    className = '',
    width = '',
    onClick,
}) {
    return (
        <div className={`${width}`}>
            <button
                className={twMerge(
                    `flex w-full items-center justify-center gap-2 gap-3 rounded-md border-2 border-blue-500 border-purple-400/80 bg-purple-400/40 px-5 py-1 text-sm font-semibold backdrop-blur-xl transition-all hover:border-slate-200/50 hover:bg-black/40 hover:text-slate-200 ${className}`,
                )}
                onClick={onclick}
            >
                {title} {icon}
            </button>
        </div>
    );
}
