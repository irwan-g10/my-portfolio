export default function NavListItem({label='label'}) {
    return (
        <div className="nav-item p-5 m-2 bg-yellow-500">
            <a href="#" className=" bg-green-500">{label}</a>
        </div>
    )
}