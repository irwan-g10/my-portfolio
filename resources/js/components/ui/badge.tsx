export default function Badge({label = ''}) {
    return (
        <div className="text-xs bg-slate-950 dark:bg-slate-100 text-slate-100 dark:text-slate-950 p-1 rounded-sm font-bold">{label}</div>
    )
}