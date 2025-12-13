import NavButton from "./Nav-Button"


export default function NavigationBar() {
    return (
        <>
            <div className="fixed w-full top-0 h-20 bg-transparent flex flex-row items-center justify-between px-40 text-white">
                <div className="flex flex-row gap-3">
                    <h2 className="font-medium text-2xl">Vince</h2>
                </div>
                <div className="flex flex-row items-end gap-10">
                    <NavButton buttonTitle="home" />
                    <NavButton buttonTitle="about" />
                    <NavButton buttonTitle="projects" />
                    <NavButton buttonTitle="contacts" />
                </div>
            </div>
        </>
    )
}