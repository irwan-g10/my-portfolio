export default function NavbarLink ({href='href',title='title', className='', showHover=true}) {
    return (
        <div className="relative navbar-link font-bold flex flex-col group ">
            <a href={href} className={`px-3 py-2 ${className}`}>{title}</a>
            {showHover && (
                <div className="absolute bottom-0 left-0 right-0 group-hover:bg-blue-500 mt-2 h-1 rounded-full transition-all"></div>
            )}
        </div>
    )
}