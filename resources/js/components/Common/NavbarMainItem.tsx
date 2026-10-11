export default function NavbarMainItem({title = '', onClick, active,icon}) {
    return (
        <div 
        className={`scale-95 ${active? 'bg-slate-500 text-slate-100 scale-100 transition-all ' :'bg-slate-950 text-slate-100 dark:bg-slate-100 dark:text-slate-950'} p-2 rounded-sm flex gap-5 font-bold px-5`}
        onClick={onClick}
        >
            <i className={`bi ${icon}`}></i> {title}
        </div>
    )
}