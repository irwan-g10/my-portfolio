import { Link } from '@inertiajs/react';
import { twMerge } from 'tailwind-merge';

export default function Button({
    icon,
    title,
    className,
    width,
    onClick,
    type,
    href,
}) {
    if (href) {
        return (
            <Link
                className={twMerge(
                    `flex h-10 border-2 border-amber-500 bg-slate-950 px-3 text-xs font-bold text-amber-500 hover:bg-amber-500 hover:text-slate-100 ${title ? 'rounded-sm' : 'h-10 w-10 rounded-full'} ${className}`,
                )}
                onClick={onClick}
                href={href}
            >
                <div className="flex w-full items-center justify-center gap-3 transition-all duration-300">
                    {title && <div>{title}</div>}
                    {icon && <div className="text-xl">{icon}</div>}
                </div>
            </Link>
        );
    }
    return (
        <button
            className={twMerge(
                `flex h-10 border-2 border-amber-500 bg-slate-950 px-3 text-xs font-bold text-amber-500 hover:bg-amber-500 hover:text-slate-100 ${title ? 'rounded-sm' : 'h-10 w-10 rounded-full text-xl'} ${className}`,
            )}
            type={type}
            onClick={onClick}
        >
            <div className="flex w-full items-center justify-center gap-3 transition-all duration-300">
                {title && <div>{title}</div>}
                {icon && <div className="">{icon}</div>}
            </div>
        </button>
    );
}
