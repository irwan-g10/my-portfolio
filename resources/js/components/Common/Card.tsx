import { twMerge } from "tailwind-merge";


export default function Card({ content = null, className = '' }) {
    return (
        <div className={twMerge(
            `border rounded-2xl w-full gap-3 
           
             bg-purple-400/40 border-purple-400/80 backdrop-blur-xl
            shadow-sm shadow-slate-200/20  p-5 ${className} `
        )}
        >
            {content}
        </div>

    )
}