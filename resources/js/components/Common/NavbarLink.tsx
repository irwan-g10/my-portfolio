export default function NavbarLink({
    href = 'href',
    title = 'title',
    className = '',
    showHover = true,
}) {
    return (
        <div className="navbar-link group relative flex flex-col font-bold">
            <a
                href={href}
                className={`inline-block origin-center px-3 py-2 text-sm transition-transform duration-300 group-hover:scale-110 md:group-hover:scale-120 ${className}`}
            >
                {title}
            </a>
            {showHover && (
                <div className="absolute right-0 bottom-0 left-0 mt-2 h-1 rounded-full transition-all group-hover:bg-blue-500"></div>
            )}
        </div>
    );
}
