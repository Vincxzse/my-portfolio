


export default function SkillItem({ imageSrc, skillName }) {
    return (
        <>
            <div className="flex flex-row items-center justify-start bg-gray-800 rounded-lg border border-gray-700 px-5 gap-3 hover:border-red-500 transition duration-200 hover:shadow-md shadow-[rgba(0,0,0,0.1)]">
                <img src={imageSrc} className="h-6 w-auto invert-100" />
                <p className="text-white text-md font-light">{skillName}</p>
            </div>
        </>
    )
}