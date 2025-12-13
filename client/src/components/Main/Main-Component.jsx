import NavigationBar from "./Navigation-Bar/Navigation-Bar"
import HomeSection from "./Home/Home-Section"

const rightArrowIcon = "./images/right-arrow.png"

export default function MainComponent() {
    return (
        <>
            <div className="bg-[#282C33] fira-code flex flex-col w-full">
                <NavigationBar />
                <HomeSection />
            </div>
        </>
    ) 
}   