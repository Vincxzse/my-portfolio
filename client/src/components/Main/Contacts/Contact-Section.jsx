

const mailIcon = "./images/mail.png"
const phoneIcon = "./images/phone.png"
const locationIcon = "./images/location.png"
const sendIcon = "./images/send.png"

export default function ContactSection() {
    return (
        <>
            <div id="contacts" className="flex flex-col items-start justify-start w-full lg:h-screen px-10 lg:px-40 gap-15">
                <div className="w-full lg:w-1/2 flex flex-row items-center justify-start gap-5">
                    <h1 className="text-white text-2xl font-semibold"><span className="text-red-500">#</span>contacts</h1>
                    <div className="flex-grow bg-red-500 h-[1px] rounded-full"></div>
                </div>
                <div className="flex flex-col item-center justify-start w-full h-full gap-10 lg:px-40">
                    <div className="flex flex-col items-center justify-center gap-5">
                        <h2 className="text-2xl text-white font-semibold">Get In Touch</h2>
                        <p className="text-white text-center">Have a project in mind or want to collaborate? Feel free to reach out. I'd love to hear from you!</p>
                    </div>
                    <div className="flex flex-col lg:grid grid-cols-2 w-full h-full gap-10">
                        <div className="flex flex-col items-start justify-start gap-5">
                            <h2 className="text-xl text-white text-medium">Contact Information</h2>
                            <div className="flex flex-row items-center justify-start gap-2">
                                <div className="flex flex-col items-center justify-center h-13 w-13 bg-gray-500 rounded-md">
                                    <img src={mailIcon} className="h-8 w-auto invert-100" />
                                </div>
                                <div className="grid grid-rows-2 items-start justify-center h-13 w-auto">
                                    <div className="flex flex-col items-start justify-end h-full">
                                        <h3 className="text-white text-md font-semibold">Email</h3>
                                    </div>
                                    <div className="flex flex-col items-start justify-end h-full">
                                        <a href="" className="text-white hover:text-red-500 transition duration-200">vince.salenga@gmail.com</a>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-row items-center justify-start gap-2">
                                <div className="flex flex-col items-center justify-center h-13 w-13 bg-gray-500 rounded-md">
                                    <img src={phoneIcon} className="h-8 w-auto invert-100" />
                                </div>
                                <div className="grid grid-rows-2 items-start justify-center h-13 w-auto">
                                    <div className="flex flex-col items-start justify-end h-full">
                                        <h3 className="text-white text-md font-semibold">Phone</h3>
                                    </div>
                                    <div className="flex flex-col items-start justify-end h-full">
                                        <p className="text-white">+63 948 205 3970</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-row items-center justify-start gap-2">
                                <div className="flex flex-col items-center justify-center h-13 w-13 bg-gray-500 rounded-md">
                                    <img src={locationIcon} className="h-8 w-auto invert-100" />
                                </div>
                                <div className="grid grid-rows-2 items-start justify-center h-13 w-auto">
                                    <div className="flex flex-col items-start justify-end h-full">
                                        <h3 className="text-white text-md font-semibold">Location</h3>
                                    </div>
                                    <div className="flex flex-col items-start justify-end h-full">
                                        <p className="text-white">Bataan, PH</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-start justify-start w-full h-full">
                            <form action="" className="flex flex-col items-start justify-center gap-5 lg:justify-between w-full h-full pb-15 lg:pb-25">
                                <div className="flex flex-col items-start justify-center w-full gap-1">
                                    <p className="text-white">Name</p>
                                    <input type="text" className="w-full bg-gray-800 h-13 rounded-md border-3 border-gray-700 pl-5 active:outline-red-500 focus:outline-none focus:border-red-500 p-5 text-white transition duration-300" placeholder="Your name" />
                                </div>
                                <div className="flex flex-col items-start justify-center w-full gap-1">
                                    <p className="text-white">Email</p>
                                    <input type="email" className="w-full bg-gray-800 h-13 rounded-md border-3 border-gray-700 pl-5 active:outline-red-500 focus:outline-none focus:border-red-500 p-5 text-white transition duration-300" placeholder="your.email@example.com" />
                                </div>
                                <div className="flex flex-col items-start justify-center w-full gap-1">
                                    <p className="text-white">Message</p>
                                    <textarea className="w-full bg-gray-800 h-40 rounded-md border-3 border-gray-700 active:outline-red-500 focus:outline-none focus:border-red-500 p-5 text-white transition duration-300" placeholder="Your message here..." />
                                </div>
                                <button className="w-full h-10 bg-red-800 rounded-md text-white text-lg cursor-pointer hover:bg-red-500 transition duration-300 flex flex-row items-center justify-center gap-2">
                                    Send Message
                                    <img src={sendIcon} className="h-5 w-auto invert-100" />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}