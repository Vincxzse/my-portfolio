import NavigationBar from "./Navigation-Bar/Navigation-Bar"
import HomeSection from "./Home/Home-Section"

const rightArrowIcon = "./images/right-arrow.png"

export default function MainComponent() {
    return (
        <>
            <div className="min-h-screen min-w-screen bg-[#282C33] fira-code flex flex-col items-center justify-center">
                <NavigationBar />
                <HomeSection />
            </div>
        </>
    ) 
}   