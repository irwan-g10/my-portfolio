export default function CategoryBadge({ title, isActive= false }) {
    const style = isActive ? 'bg-slate-100 text-black ' : 'text-sm bg-slate-800 p-2 scale-90'

    return (
        <div className={`rounded rounded-full shadow-xs p-2 px-5 ${style}`}>
            {title}
        </div>
    )
}