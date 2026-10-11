import { twMerge } from "tailwind-merge";


export default function Card({ content = null, className = '' }) {
    return (
        <div className={twMerge(
            `border rounded-2xl w-full gap-3 
            bg-slate-950/10 border-slate-950/20 dark:bg-slate-100/10 dark:border-slate-100/20 backdrop-blur-xs
            shadow-sm shadow-slate-200/20  p-5 ${className} `
        )}
        >
            {content}
        </div>

    )
}