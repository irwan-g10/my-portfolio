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
            href: '/admin/dashboard',
        },
        { title: 'Project', icon: 'bi-code-slash', href: '/admin/project' },
        { title: 'Skill', icon: 'bi-tools', href: '/admin/skill' },
        { title: 'Certificate', icon: 'bi-award', href: '/admin/certificate' },
    ];

    const supportMenus = [
        { title: 'Settings', icon: 'bi-gear' },
        { title: 'Help and Docs', icon: 'bi-question-circle' },
    ];

    const [activeItem, setActiveItem] = useState('Dashboard');

    const { theme, toggleTheme } = useTheme();
    return (
        <div className="relative flex h-screen w-80 flex-col justify-between">
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
                            active={currentSegment === menu.title.toLowerCase()}
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
        </div>
    );
}
