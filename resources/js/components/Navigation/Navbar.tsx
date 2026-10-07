import React from "react";
import { usePage } from "@inertiajs/react";
import NavbarLink from "../Common/NavbarLink";

export default function Navbar() {
    const { url } = usePage();

    return (
        <nav className="fixed w-4/5 z-100 inset-x-0 mx-auto top-5 rounded-full navbar px-20 flex justify-between shadow-lg p-2 text-white bg-slate-500/10 backdrop-blur-sm ">

            <div className="navbar-brand flex flex-column justify-center items-center ">
                <a href="#" className="navbar-brand text-xl font-semibold flex">Vantomic<p className="text-blue-500 font-black italic">Studio</p></a>
            </div>

            <div className="navbar-nav flex gap-2 font-bold ">

                <NavbarLink href="#home" title="Home" />
                <NavbarLink href="#about" title="About" />
                <NavbarLink href="#project" title="Project" />
                <NavbarLink href="#blog" title="Blog" />
            </div>
            <NavbarLink href="#contact" title="Contact Me" className="border-2 rounded-sm" showHover={false} />


        </nav>
    )
}