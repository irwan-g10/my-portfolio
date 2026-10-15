export default function Badge({ label = '' }) {
    return (
        <div className="rounded-sm bg-slate-100 p-1 text-xs font-bold text-slate-950">
            {label}
        </div>
    );
}
