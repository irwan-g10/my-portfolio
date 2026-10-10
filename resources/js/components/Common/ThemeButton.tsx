export default function ThemeButton({onClick, theme, className}) {
    return(
        <div className={`border-2 flex items-center justify-${theme === 'light' ? 'start': 'end'} w-20  rounded-full md:w-20 border-slate-950 dark:border-slate-100`} onClick={onClick}>
            <div className=" w-6 h-6 mx-2 rounded-full p-1 flex justiy-center items-center">
                {theme === 'light'? <i className="bi bi-cloud-sun-fill"></i>: <i className="bi bi-moon-stars-fill"></i>}
                </div>
        </div>
    )
}