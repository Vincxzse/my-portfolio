import NavigationBar from "./Navigation-Bar/Navigation-Bar"
import HomeSection from "./Home/Home-Section"
import AboutSection from "./About/About-Section"
import ProjectsSection from "./Projects/Projects-Section"
import ContactSection from "./Contacts/Contact-Section"
import Footer from "./Footer/Footer"

const rightArrowIcon = "./images/right-arrow.png"

export default function MainComponent() {
    return (
        <>
            <div className="bg-[#282C33] fira-code flex flex-col w-full gap-20 lg:gap-5">
                <NavigationBar />
                <HomeSection />
                <AboutSection />
                <ProjectsSection />
                <ContactSection />
                <Footer />
            </div>
        </>
    ) 
}   