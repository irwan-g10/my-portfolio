import { toHover } from '@/lib/utils';

export default function Badge({ label = '' }) {
    return (
        <div
            className={`rounded-sm border bg-slate-100 p-1 text-xs font-bold font-extrabold text-slate-950 ${toHover('border-amber-500 bg-slate-950 text-amber-500')}`}
        >
            {label}
        </div>
    );
}
