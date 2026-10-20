import { twMerge } from 'tailwind-merge';

export default function Button({
    icon = '',
    title = '',
    className = '',
    width = '',
    onClick,
}) {
    return (
        <button
            className={twMerge(
                `h-10 border-2 border-amber-500 bg-amber-500 px-3 text-xs font-bold text-slate-100 hover:bg-slate-950 hover:text-amber-500 ${title ? 'rounded-sm' : 'h-10 w-10 rounded-full'} ${className}`,
            )}
            onClick={onClick}
        >
            <div className="flex w-full items-center justify-center gap-3 transition-all duration-300">
                {title && <div>{title}</div>}
                {icon && <div className="text-xl">{icon}</div>}
            </div>
        </button>
    );
}
