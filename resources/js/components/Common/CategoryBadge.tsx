export default function CategoryBadge({
    title,
    isActive = false,
    onClick,
    onMouseLeave,
    onMouseEnter,
}) {
    const style = isActive
        ? 'bg-slate-100 text-slate-900'
        : 'bg-slate-800 text-slate-100';

    return (
        <button
            className={`rounded rounded-full p-2 px-5 text-xs shadow-xs duration-300 ease-in-out ${style} transform transition-all`}
            onClick={onClick}
            onMouseLeave={onMouseLeave}
            onMouseEnter={onMouseEnter}
        >
            {title}
        </button>
    );
}
