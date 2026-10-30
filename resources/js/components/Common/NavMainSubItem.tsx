import { Link } from '@inertiajs/react';

export default function NavMainSubItem({ title = '', active, icon, href }) {
    return (
        <Link
            href={href}
            className={`relative ms-15 ${active ? 'bg-slate-500 text-slate-100 transition-all' : 'bg-slate-100 text-slate-950'} flex gap-5 rounded-sm p-2 px-5 font-bold`}
        >
            <div className="absolute -top-10 -left-5 h-15 w-5 rounded-s border-b-3 border-l-3 border-slate-100"></div>
            <div className="flex w-full justify-between">
                <div>{title}</div> <i className={`bi ${icon}`}></i>
            </div>
        </Link>
        // <div>{title}</div>
    );
}
