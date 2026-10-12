export default function Badge({ label = '' }) {
    return (
        <div className="rounded-sm bg-slate-950 p-1 text-xs font-bold text-slate-100 dark:bg-slate-100 dark:text-slate-950">
            {label}
        </div>
    );
}
