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
                    `flex items-center justify-center gap-3 border border-slate-300 bg-white text-sm font-bold text-slate-950 hover:bg-slate-200 ${title ? 'rounded-sm px-5 py-2' : 'h-10 w-10 rounded-full text-sm'} ${className}`,
                )}
                onClick={onClick}
            >
                {title && <div>{title}</div>}
                {icon && <div className="">{icon}</div>}
            </button>
        </div>
    );
}
