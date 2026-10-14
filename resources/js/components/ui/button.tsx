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
                    `flex items-center justify-center gap-3 border-2 border-blue-900 bg-blue-500 text-sm font-bold text-slate-100 hover:bg-blue-900 ${title ? 'rounded-sm px-5 py-2' : 'h-10 w-10 rounded-full text-sm'} ${className}`,
                )}
                onClick={onClick}
            >
                {title && <div>{title}</div>}
                {icon && <div className="">{icon}</div>}
            </button>
        </div>
    );
}
