import { Link } from '@inertiajs/react';

export default function Pagination({ data }) {
    return (
        <div className="mt-4 flex items-center justify-between">
            <div className="flex items-center gap-1 text-slate-400">
                <div>Menampilkan</div>
                <div>
                    {data.from || 0} - {data.to || 0}
                </div>
                <div>dari {data.total} data</div>
            </div>

            <div className="flex items-center gap-1">
                {data.links &&
                    data.links.map((link, idx) => (
                        <Link
                            key={idx}
                            href={link.url || '#'}
                            className={`rounded-lg px-3 py-1 text-xs font-semibold transition-colors ${
                                link.active
                                    ? 'bg-amber-500 text-slate-950'
                                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                            } ${!link.url ? 'cursor-not-allowed opacity-40' : ''}`}
                            dangerouslySetInnerHTML={{
                                __html: link.label,
                            }}
                        >
                            {/* {link.label} */}
                        </Link>
                    ))}
            </div>
        </div>
    );
}
