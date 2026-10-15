import { dashboard } from '@/routes';
import { Link, usePage } from '@inertiajs/react';
import { useState } from 'react';
import NavbarLink from '../Common/NavbarLink';
import ThemeButton from '../Common/ThemeButton';

export default function Navbar({ onClick, theme, auth }) {
    const { url } = usePage();
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);

    const toggleExpand = () => {
        setIsNavbarOpen((prev) => !prev);
    };
    // console.log(auth.user.name)

    return (
        <nav className="fixed inset-x-0 top-5 z-100 mx-auto flex w-4/5 justify-between rounded-full bg-slate-500/10 p-2 px-5 shadow-lg backdrop-blur-sm md:px-20">
            <div className="navbar-brand flex-column flex items-center justify-center">
                <a
                    href="#"
                    className="navbar-brand flex font-semibold md:text-xl"
                >
                    Vantomic
                    <p className="font-black text-blue-500 italic">Studio</p>
                </a>
            </div>

            <div className="hidden md:flex">
                <div className="navbar-nav flex gap-2 font-bold">
                    <NavbarLink
                        href="#home"
                        title="Home"
                    />
                    <NavbarLink
                        href="#about"
                        title="About"
                    />
                    <NavbarLink
                        href="#project"
                        title="Project"
                    />
                    <NavbarLink
                        href="#blog"
                        title="Blog"
                    />
                </div>
            </div>

            <div className="flex items-center justify-center gap-3">
                <div className="hidden md:flex">
                    <NavbarLink
                        href="#contact"
                        title="Contact Me"
                        className="rounded-sm border-2 border-slate-950 dark:border-slate-100"
                        showHover={false}
                    />
                </div>
                <ThemeButton
                    className="border p-2"
                    onClick={onClick}
                    theme={theme}
                />
                <div className="md:hidden">
                    <button onClick={toggleExpand}>
                        <i className="bi bi-list"></i>
                    </button>
                </div>
                {auth.user && (
                    <div className="">
                        <Link href={dashboard()}>
                            <i className="bi bi-grid-1x2-fill"></i>
                        </Link>
                    </div>
                )}
            </div>

            {isNavbarOpen && (
                <div className="absolute top-full left-0 w-full">
                    <div className="mt-5 h-full w-full rounded-xl bg-slate-500/50 p-5 shadow-lg backdrop-blur-sm">
                        <div className="navbar-nav flex flex-col gap-2 font-bold">
                            <NavbarLink
                                href="#home"
                                title="Home"
                            />
                            <NavbarLink
                                href="#about"
                                title="About"
                            />
                            <NavbarLink
                                href="#project"
                                title="Project"
                            />
                            <NavbarLink
                                href="#blog"
                                title="Blog"
                            />
                            <NavbarLink
                                href="#contact"
                                title="Contact Mes"
                                className="rounded-sm border-2 border-slate-950 dark:border-slate-100"
                                showHover={false}
                            />
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
