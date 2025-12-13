

import SkillItem from "./About-Components/Skill-Item"
import CardItem from "./About-Components/Card-Item"

const codeIcon = "./images/black-code.png"
const reactIcon = "./images/react.png"
const databaseIcon = "./images/database.png"
const paintIcon = "./images/paint.png"
const githubIcon = "./images/github.png"
const figmaIcon = "./images/figma.png"
const rocketIcon = "./images/rocket.png"

export default function AboutSection() {
    return (
        <>
            <div className="flex flex-col items-start justify-start h-auto lg:h-screen w-full px-5 lg:px-40 gap-10">
                <div className="w-full lg:w-1/2 flex flex-row items-center justify-start gap-5">
                    <h1 className="text-white text-2xl font-semibold"><span className="text-red-500">#</span>about me</h1>
                    <div className="flex-grow bg-red-500 h-[1px] rounded-full"></div>
                </div>
                <div className="flex flex-col lg:grid grid-cols-2 w-full lg:h-2/5 gap-10 lg:gap-5">
                    <div className="flex flex-col items-start justify-between gap-5 h-full w-full">
                        <p className="text-white text-md leading-relaxed">
                            I'm a full-stack developer with a passion for building beautiful, functional, and user-centered digital experiences. With several years of experience in web development, I specialize in creating responsive applications that solve real-world problems.
                        </p>
                        <p className="text-white text-md leading-relaxed">
                            When I'm not coding, you can find me exploring new technologies, playing video games, or sharing knowledge with the developer community.
                        </p>
                        <p className="text-white text-md leading-relaxed">
                            I believe in writing clean, maintainable code and continuously learning to stay at the forefront of technology.
                        </p>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-5">
                        <h2 className="text-white text-xl font-medium">Skills & Technologies</h2>
                        <div className="h-60 lg:h-full w-full grid grid-cols-2 grid-rows-4 gap-2 lg:gap-5">
                            <SkillItem skillName="JavaScript" imageSrc={codeIcon} />
                            <SkillItem skillName="NodeJS" imageSrc={codeIcon} />
                            <SkillItem skillName="ReactJS" imageSrc={reactIcon} />
                            <SkillItem skillName="PostgreSQL" imageSrc={databaseIcon} />
                            <SkillItem skillName="Tailwind CSS" imageSrc={paintIcon} />
                            <SkillItem skillName="Bootstrap" imageSrc={paintIcon} />
                            <SkillItem skillName="Figma" imageSrc={figmaIcon} />
                            <SkillItem skillName="Git" imageSrc={githubIcon} />
                        </div>
                    </div>
                </div>
                <div className="h-auto lg:h-80 w-full flex flex-col lg:grid grid-cols-3 gap-5">
                    <CardItem
                        title="Clean Code"
                        description="Writing maintainable, scalable, and efficient code that stands the test of time."
                        imageSrc={codeIcon}
                    />
                    <CardItem
                        title="Design Focus"
                        description="Creating beautiful interfaces with attention to detail and user experience."
                        imageSrc={paintIcon}
                    />
                    <CardItem
                        title="Fast Delivery"
                        description="Delivering high-quality projects on time with agile methodology and best practices."
                        imageSrc={rocketIcon}
                    />
                </div>
            </div>
        </>
    )
}