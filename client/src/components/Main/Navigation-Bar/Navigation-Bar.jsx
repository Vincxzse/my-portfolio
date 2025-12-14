import { useState } from "react"
import NavButton from "./Nav-Button"

const menuIcon = "./images/menu.png"

export default function NavigationBar() {
    const [mobileMenu, setMobileMenu] = useState(false)

    return (
        <>
            { mobileMenu ? 
                <div className="fixed z-101 bg-[#282C33] h-screen w-screen flex flex-col items-start justify-start gap-5 px-10 py-20">
                    <NavButton buttonTitle="home" targetId="home" closeMobileMenu={() => setMobileMenu(false)} />
                    <NavButton buttonTitle="about" targetId="about" closeMobileMenu={() => setMobileMenu(false)} />
                    <NavButton buttonTitle="projects" targetId="projects" closeMobileMenu={() => setMobileMenu(false)} />
                    <NavButton buttonTitle="contacts" targetId="contacts" closeMobileMenu={() => setMobileMenu(false)} />
                </div>
                : null
            }
            
            <div className="fixed w-full top-0 left-0 h-20 flex flex-row items-center justify-between px-5 lg:px-40 text-white bg-[#282C33] shadow-md z-100">
                <div className="flex flex-row gap-3">
                    <h2 className="font-medium text-2xl">Vince</h2>
                </div>
                <div className="hidden lg:flex flex-row items-end gap-10">
                    <NavButton buttonTitle="home" targetId="home" />
                    <NavButton buttonTitle="about" targetId="about" />
                    <NavButton buttonTitle="projects" targetId="projects" />
                    <NavButton buttonTitle="contacts" targetId="contacts" />
                </div>
                <button
                    onClick={() => setMobileMenu(true)}
                    className="lg:hidden flex items-center justify-center cursor-pointer"
                >
                    <img src={menuIcon} alt="menu-icon" className="w-auto h-7 invert"/>
                </button>
            </div>
        </>
    )
}