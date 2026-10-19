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
                `group border-2 border-amber-500 bg-amber-500 text-sm font-bold text-slate-100 hover:bg-slate-950 hover:text-amber-500 ${title ? 'rounded-sm px-5 py-2' : 'h-10 w-10 scale-110 rounded-full text-xl'} ${className}`,
            )}
            onClick={onClick}
        >
            <div className="flex w-full items-center justify-center gap-3 transition-all duration-300 group-hover:scale-120">
                {title && <div>{title}</div>}
                {icon && <div className="">{icon}</div>}
            </div>
        </button>
    );
}
