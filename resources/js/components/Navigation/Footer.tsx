export default function Footer() {
    return (
        <footer className="p-3 flex flex-col gap-1 justify-center items-center">
            <hr  className="border-2 rounded w-3/5 my-5 border-gray-400"/>
            <div  className=" text-white font-bold text-xl flex">Vantomic<div className="text-blue-500">Site</div></div>
            <div className="text-sm">Build with Laravel, Inertia.js, React, and Bootstrap 5</div>
            <div className="text-sm text-gray-500 font-bold">© 2026 Irwan Gumilar. All rights reserved.</div>

        </footer>
    )
}