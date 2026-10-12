export default function NavListItem({ label = 'label' }) {
    return (
        <div className="nav-item m-2 bg-yellow-500 p-5">
            <a href="#" className="bg-green-500">
                {label}
            </a>
        </div>
    );
}
