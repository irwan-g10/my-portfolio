import { Link } from '@inertiajs/react';

export default function NavbarMainItem({ title = '', active, icon, href }) {
    return (
        <Link
            href={href}
            className={`scale-95 ${active ? 'scale-100 bg-slate-500 text-slate-100 transition-all' : 'bg-slate-950 text-slate-100 dark:bg-slate-100 dark:text-slate-950'} flex gap-5 rounded-sm p-2 px-5 font-bold`}
        >
            <i className={`bi ${icon}`}></i> {title}
        </Link>
    );
}
