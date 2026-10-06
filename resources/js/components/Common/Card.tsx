

export default function Card({content=null, className = ''}) {
    return (
            <div className={`border rounded-2xl w-full gap-3 bg-slate-500/10 border-slate-400/20 shadow-sm shadow-slate-200/20 ${className} p-5 `}>
                {content}
            </div>
        
    )
}