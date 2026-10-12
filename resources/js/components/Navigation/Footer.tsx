export default function Footer() {
    return (
        <footer className="flex flex-col items-center justify-center gap-1 p-3">
            <hr className="my-5 w-3/5 rounded border-2 border-gray-400" />
            <div className="flex text-xl font-bold text-white">
                Vantomic<div className="text-blue-500">Site</div>
            </div>
            <div className="text-sm">
                Build with Laravel, Inertia.js, React, and Bootstrap 5
            </div>
            <div className="text-sm font-bold text-gray-500">
                © 2026 Irwan Gumilar. All rights reserved.
            </div>
        </footer>
    );
}
