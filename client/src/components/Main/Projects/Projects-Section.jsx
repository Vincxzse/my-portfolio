

const placeholderImage = "./images/placeholder-image.png"
const githubIcon = "./images/github.png"
const liveIcon = "./images/live.png"

export default function ProjectsSection() {
    return (
        <>
            <div id="projects" className="flex flex-col items-start justify-start min-h-screen w-full px-5 lg:px-40 gap-10 mt-10">
                <div className="w-full lg:w-1/2 flex flex-row items-center justify-start gap-5">
                    <h1 className="text-white text-2xl font-semibold"><span className="text-red-500">#</span>featured projects</h1>
                    <div className="flex-grow bg-red-500 h-[1px] rounded-full"></div>
                </div>
                <div className="flex flex-col lg:grid grid-cols-3 gap-5 lg:gap-10 w-full">
                    <div className="w-full h-140 lg:h-130 flex flex-col items-start justify-start border-white border">
                        <div className="flex flex-col items-center justify-center border-b border-white">
                            <img src={placeholderImage} className="w-full" />
                        </div>
                        <div className="w-full h-full p-5 flex flex-col items-start justify-between">
                            <h2 className="text-white text-lg font-medium">To-Do App (In Progress)</h2>
                            <p className="text-white">A to-do app where you can create, update, and delete tasks.</p>
                            <div className="flex flex-row items-center justify-start w-full gap-2">
                                <div className="flex items-center justify-center px-3 py-1 bg-gray-800 rounded-lg border border-gray-700">
                                    <p className="text-white">React</p>
                                </div>
                                <div className="flex items-center justify-center px-3 py-1 bg-gray-800 rounded-lg border border-gray-700">
                                    <p className="text-white">Node</p>
                                </div>
                                <div className="flex items-center justify-center px-3 py-1 bg-gray-800 rounded-lg border border-gray-700">
                                    <p className="text-white">PostgreSQL</p>
                                </div>
                            </div>
                            <div className="flex flex-row items-center justify-start gap-5">
                                <div className="flex flex-row items-center justify-start gap-1">
                                    <img src={githubIcon} alt="github icon" className="h-5 w-auto invert-100" />
                                    <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-white text-md hover:text-red-500 transition duration-200 ease-in-out">Code</a>
                                </div>
                                <div className="flex flex-row items-center justify-start gap-1">
                                    <img src={liveIcon} alt="github icon" className="h-5 w-auto" />
                                    <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-red-500 text-md transition duration-200 ease-in-out">Live Preview</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}