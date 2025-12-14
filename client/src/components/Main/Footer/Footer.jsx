

const githubIcon = "./images/github.png"
const linkedInIcon = "./images/linkedin.png"
const mailIcon = "./images/mail.png"

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <>
            <div className="flex flex-col items-center justify-start w-full h-auto lg:h-85 bg-[#22262C] px-5 lg:px-40 py-10 gap-10 lg:gap-5">
                <div className="flex flex-col lg:grid grid-cols-3 w-full h-auto lg:h-2/3 gap-10">
                    <div className="flex flex-col items-start justify-start w-full h-full gap-5">
                        <h2 className="text-white text-xl font-semibold">Vince</h2>
                        <p className="text-[rgba(255,255,255,0.7)]">Building exceptional digital experiences with passion and precision.</p>
                    </div>
                    <div className="flex flex-col items-start justify-start w-full h-full gap-5">
                        <h2 className="text-white text-lg font-semibold">Quick Links</h2>
                        <div className="flex flex-col items-start justify-start w-full h-auto gap-2">
                            <a href="#home" className="text-white hover:ml-1 hover:text-red-500 transition duration-200">Home</a>
                            <a href="#about" className="text-white hover:ml-1 hover:text-red-500 transition duration-200">About</a>
                            <a href="#projects" className="text-white hover:ml-1 hover:text-red-500 transition duration-200">Projects</a>
                            <a href="#contacts" className="text-white hover:ml-1 hover:text-red-500 transition duration-200">Contacts</a>
                        </div>
                    </div>
                    <div className="flex flex-col items-start justify-start w-full h-full gap-5">
                        <h2 className="text-white text-lg font-semibold">Connect</h2>
                        <div className="flex flex-row items-start justify-start w-full h-auto gap-5">
                            <a href="https://github.com/Vincxzse" target="_blank" className="flex flex-col items-center justify-center hover:-translate-y-1 transition duration-200 cursor-pointer invert-50 hover:invert-100">
                                <img src={githubIcon} className="h-10 w-auto" />
                            </a>
                            <a href="www.linkedin.com/in/vince-salenga-03758329a" target="_blank" className="flex flex-col items-center justify-center hover:-translate-y-1 transition duration-200 cursor-pointer invert-50 hover:invert-100">
                                <img src={linkedInIcon} className="h-10 w-auto" />
                            </a>
                            <a href="" target="_blank" className="flex flex-col items-center justify-center hover:-translate-y-1 transition duration-200 cursor-pointer invert-50 hover:invert-100">
                                <img src={mailIcon} className="h-10 w-auto" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="w-full h-[2px] bg-[rgba(255,255,255,0.2)]"></div>
                <p className="text-white text-md">Made with 💖 by Vince &copy; {currentYear}</p>
            </div>
        </>
    )
}