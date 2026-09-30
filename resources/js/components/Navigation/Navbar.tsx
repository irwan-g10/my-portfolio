import React from "react";
import { usePage } from "@inertiajs/react";

export default function Navbar() {
    const { url } = usePage();

    return (
        <nav className="navbar navbar-expand-lg  p-3 shadow-sm px-5">
            <div className="container-fluid">

                <a href="#" className="navbar-brand text-dark fw-bold fs-4">Atomic<i className="text-primary">Site</i></a>

                <div className="navbar-nav">
                    <a href="#" className="nav-link text-dark fw-bold ms-3 active ">Home</a>
                    <a href="#" className="nav-link text-dark fw-bold ms-3">About</a>
                    <a href="#" className="nav-link text-dark fw-bold ms-3">Project</a>
                    <a href="#" className="nav-link text-dark fw-bold ms-3">Blog</a>
                    <a href="#" className="nav-link text-dark fw-bold ms-3 border border-3 border-secondary rounded">Contact Me</a>
                </div>

            </div>

        </nav>
    )
}