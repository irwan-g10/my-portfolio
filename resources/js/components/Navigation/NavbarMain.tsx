import { useTheme } from '@/hooks/useTheme';
import { usePage } from '@inertiajs/react';
import { useState } from 'react';
import NavbarMainItem from '../Common/NavbarMainItem';
import ThemeButton from '../Common/ThemeButton';

export default function NavbarMain() {
    const { url } = usePage();
    const currentSegment = url.split('/').filter(Boolean).pop();
    console.log(currentSegment);

    const navigationMenus = [
        {
            title: 'Dashboard',
            icon: 'bi-speedometer2',
            href: '/dashboard',
        },
        { title: 'Projects', icon: 'bi-code-slash', href: '/projects' },
        { title: 'Skills', icon: 'bi-tools', href: '/skills' },
        { title: 'Certificates', icon: 'bi-award', href: '/certificates' },
        {
            title: 'Journey',
            icon: 'bi-briefcase-fill',
            href: '/journey',
        },
    ];

    const supportMenus = [
        { title: 'Settings', icon: 'bi-gear' },
        { title: 'Help and Docs', icon: 'bi-question-circle' },
    ];

    const [activeItem, setActiveItem] = useState('Dashboard');

    const { theme, toggleTheme } = useTheme();
    return (
        <div className="flex h-screen p-10 pe-0 text-xs">
            <div className="flex-1 rounded-2xl border border-slate-100/20 bg-slate-100/10 backdrop-blur-xs">
                <div className="flex h-full flex-col">
                    <div className="navbrand border-b-2 p-3">
                        <div className="nav-title flex flex-col items-center text-xl font-extrabold">
                            <span>Vantomic</span>
                            <span>Studio</span>
                        </div>
                    </div>
                    <div className="nav-content flex flex-col gap-3 overflow-auto p-5 [-ms-overflow-style:'none'] [scrollbar-width:'none'] [&::-webkit-scrollbar]:hidden">
                        <div className="text-sm font-semibold">Navigation</div>
                        <div className="navigation ms-5 flex flex-col gap-2">
                            {navigationMenus.map((menu) => (
                                <NavbarMainItem
                                    title={menu.title}
                                    icon={menu.icon}
                                    href={menu.href}
                                    active={
                                        currentSegment ===
                                        menu.title.toLowerCase()
                                    }
                                />
                            ))}
                        </div>
                        <div className="text-sm font-semibold">Support</div>
                        <div className="navigation flex flex-col gap-2">
                            {supportMenus.map((menu) => (
                                <NavbarMainItem
                                    title={menu.title}
                                    icon={menu.icon}
                                    onClick={() => setActiveItem(menu.title)}
                                    active={activeItem === menu.title}
                                />
                            ))}
                            <div className="flex justify-end">
                                <ThemeButton
                                    theme={theme}
                                    onClick={toggleTheme}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="user flex items-center justify-center gap-2 border-t-3 p-5">
                        <div className="logo h-7 w-7 rounded-full bg-slate-100">
                            logo
                        </div>
                        <div className="name flex-1">
                            <div className="">Irwan Gumilar</div>
                            <div>Super Admin</div>
                        </div>
                        <div className="button">
                            <i className="bi bi-grid-1x2-fill"></i>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="relative flex flex-1 flex-col justify-between">
                <div className="navbrand border-b-2 p-5">
                    <div className="nav-title flex flex-col items-center text-4xl font-extrabold">
                        <span>Vantomic</span>
                        <span>Studio</span>
                    </div>
                </div>
                <div className="nav-content flex flex-col gap-5 overflow-auto p-5 [-ms-overflow-style:'none'] [scrollbar-width:'none'] [&::-webkit-scrollbar]:hidden">
                    <div>Navigation</div>
                    <div className="navigation mx-5 flex flex-col gap-2 text-sm">
                        {navigationMenus.map((menu) => (
                            <NavbarMainItem
                                title={menu.title}
                                icon={menu.icon}
                                href={menu.href}
                                active={
                                    currentSegment === menu.title.toLowerCase()
                                }
                            />
                        ))}
                    </div>
                    <div className="support">Support</div>
                    <div className="navigation mx-5 flex flex-col gap-2 text-sm">
                        {supportMenus.map((menu) => (
                            <NavbarMainItem
                                title={menu.title}
                                icon={menu.icon}
                                onClick={() => setActiveItem(menu.title)}
                                active={activeItem === menu.title}
                            />
                        ))}
                        <div className="flex justify-end">
                            <ThemeButton
                                theme={theme}
                                onClick={toggleTheme}
                            />
                        </div>
                    </div>
                </div>
                <div className="user flex items-center justify-center gap-2 border-t-3 p-5 px-10">
                    <div className="logo">logo</div>
                    <div className="name flex-1">
                        <div className="">Irwan Gumilar</div>
                        <div>Super Admin</div>
                    </div>
                    <div className="button">
                        <i className="bi bi-grid-1x2-fill"></i>
                    </div>
                </div>
            </div> */}
            <div className="ms-5 flex items-center justify-start gap-2">
                <div className="h-3/5 w-1 rounded-full bg-slate-100/20"></div>
                <div className="h-4/5 w-1 rounded-full bg-slate-100/20"></div>
                <div className="h-3/5 w-1 rounded-full bg-slate-100/20"></div>
            </div>
        </div>
    );
}
