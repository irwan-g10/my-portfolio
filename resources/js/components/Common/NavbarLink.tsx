export default function NavbarLink ({href='href',title='title', }) {
    return (
        <div className="navbar-link py-2 flex flex-col group">
            <a href={href} className="nav-item px-3">{title}</a>
            <div className="group-hover:bg-blue-500 mt-2 h-1 rounded-full transition-all"></div>
        </div>
    )
}