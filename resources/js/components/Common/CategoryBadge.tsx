export default function CategoryBadge({ title, isActive = false, onClick }) {
    const style = isActive
        ? 'bg-slate-100 text-slate-900 '
        : 'text-sm bg-slate-800 text-slate-100 p-2 scale-90';

    return (
        <button
            className={`rounded rounded-full p-2 px-5 shadow-xs duration-300 ${style} transform transition`}
            onClick={onClick}
        >
            {title}
        </button>
    );
}
