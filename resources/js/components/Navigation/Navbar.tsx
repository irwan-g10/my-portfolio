import React, { useState } from "react";
import { usePage } from "@inertiajs/react";
import NavbarLink from "../Common/NavbarLink";
import ThemeButton from "../Common/ThemeButton";
import Button from "../Common/Button";

export default function Navbar({ onClick, theme }) {
    const { url } = usePage();
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);

    const toggleExpand = () => {
        setIsNavbarOpen((prev) => !prev)
    }

    return (

        <nav className="fixed w-4/5 z-50 inset-x-0 mx-auto top-5 rounded-full px-5 md:px-20 flex justify-between shadow-lg p-2 bg-slate-500/10 backdrop-blur-sm ">

            <div className="navbar-brand flex flex-column justify-center items-center ">
                <a href="#" className="navbar-brand md:text-xl font-semibold flex">Vantomic<p className="text-blue-500 font-black italic">Studio</p></a>
            </div>

            <div className="hidden md:flex">
                <div className="navbar-nav flex gap-2 font-bold">

                    <NavbarLink href="#home" title="Home" />
                    <NavbarLink href="#about" title="About" />
                    <NavbarLink href="#project" title="Project" />
                    <NavbarLink href="#blog" title="Blog" />
                </div>
            </div>


            <div className="flex gap-3 items-center justify-center">
                <div className="hidden md:flex">
                    <NavbarLink href="#contact" title="Contact Me" className="border-2 border-slate-950 dark:border-slate-100 rounded-sm" showHover={false} />
                </div>
                <ThemeButton className="border p-2 " onClick={onClick} theme={theme} />
                <div className="md:hidden">
                    <button onClick={toggleExpand}><i className="bi bi-list"></i></button>
                </div>
            </div>

            {isNavbarOpen && (
                <div className="absolute top-full left-0 w-full">
                    <div className="h-full w-full bg-slate-500/50 backdrop-blur-sm mt-5 p-5 shadow-lg rounded-xl">
                        <div className="navbar-nav flex flex-col gap-2 font-bold">

                            <NavbarLink href="#home" title="Home" />
                            <NavbarLink href="#about" title="About" />
                            <NavbarLink href="#project" title="Project" />
                            <NavbarLink href="#blog" title="Blog" />
                            <NavbarLink href="#contact" title="Contact Mes" className="border-2 border-slate-950 dark:border-slate-100 rounded-sm" showHover={false} />

                        </div>
                    </div>
                </div>
            )}
            
        </nav>
    )
}