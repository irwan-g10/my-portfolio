import React from "react";
import { usePage } from "@inertiajs/react";
import NavbarLink from "../Common/NavbarLink";

export default function Navbar() {
    const { url } = usePage();

    return (
        <nav className="navbar px-20 flex justify-between shadow-sm p-2">

                <div className="navbar-brand flex flex-column justify-center items-center ">
                    <a href="#" className="navbar-brand text-xl font-semibold flex">Vantomic<p className="text-blue-500 font-black italic">Studio</p></a>
                </div>

                <div className="navbar-nav flex gap-2 font-bold ">
                    
                    <NavbarLink href="#home" title="Home" />
                    <NavbarLink href="#about" title="About" />
                    <NavbarLink href="#project" title="Project" />
                    <NavbarLink href="#blog" title="Blog" />
                    <NavbarLink href="#contact" title="Contact Me" />
                </div>


        </nav>
    )
}