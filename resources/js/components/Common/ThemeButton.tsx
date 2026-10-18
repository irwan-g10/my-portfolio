export default function ThemeButton({ onClick, theme, className }) {
    return (
        <div
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-slate-950 p-2 text-slate-100 dark:bg-slate-100 dark:text-slate-950"
            onClick={onClick}
        >
            {theme === 'light' ? (
                <i className="bi bi-cloud-sun-fill"></i>
            ) : (
                <i className="bi bi-moon-stars-fill"></i>
            )}
        </div>
    );
}
