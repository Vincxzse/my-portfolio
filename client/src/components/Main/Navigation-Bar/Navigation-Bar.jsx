import NavButton from "./Nav-Button"


export default function NavigationBar() {
    return (
        <>
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
            </div>
        </>
    )
}