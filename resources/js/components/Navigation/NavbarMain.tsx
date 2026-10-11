import { useTheme } from "@/hooks/useTheme";
import NavbarMainItem from "../Common/NavbarMainItem";
import ThemeButton from "../Common/ThemeButton";
import { useState } from "react";

export default function NavbarMain() {

    const navigationMenus = [
        { title: "Dashboard", icon: "bi-speedometer2" },
        { title: "Project", icon: "bi-code-slash" },
        { title: "Skill", icon: "bi-tools" },
        { title: "Certificate", icon: "bi-award" },
    ];

    const supportMenus = [
        { title: "Settings", icon: "bi-gear" },
        { title: "Help and Docs", icon: "bi-question-circle" },
    ];

    const [activeItem, setActiveItem] = useState("Dashboard");


    const { theme, toggleTheme } = useTheme();
    return (
        <div className="  w-80 h-screen  flex flex-col  relative justify-between">
            <div className="navbrand border-b-2 p-5">
                <div className="nav-title text-4xl font-extrabold flex flex-col items-center">
                    <span>Vantomic</span>
                    <span>Studio</span>
                </div>
            </div>
            <div className="nav-content  overflow-auto flex flex-col gap-5 p-5 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
                <div>Navigation</div>
                <div className="navigation flex flex-col gap-2 mx-5 text-sm ">
                    {navigationMenus.map((menu) => (

                        <NavbarMainItem
                            title={menu.title}
                            icon={menu.icon}
                            onClick={() => setActiveItem(menu.title)}
                            active={activeItem === menu.title}
                        />
                    ))}
                </div>
                <div className="support">
                    Support
                </div>
                <div className="navigation flex  flex-col gap-2 mx-5 text-sm">
                    {supportMenus.map((menu) => (

                        <NavbarMainItem
                            title={menu.title}
                            icon={menu.icon}
                            onClick={() => setActiveItem(menu.title)}
                            active={activeItem === menu.title}
                        />
                    ))}
                    <div className="flex justify-end">
                        <ThemeButton theme={theme} onClick={toggleTheme} />
                    </div>
                </div>
            </div>
            <div className="user flex gap-2 border-t-3 p-5  px-10 items-center justify-center">
                <div className="logo">logo</div>
                <div className="name flex-1">
                    <div className="">Irwan Gumilar</div>
                    <div>Super Admin</div>
                </div>
                <div className="button "><i className="bi bi-grid-1x2-fill"></i></div>
            </div>
        </div>
    )
}