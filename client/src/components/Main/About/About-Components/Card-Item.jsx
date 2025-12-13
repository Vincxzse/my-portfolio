


export default function CardItem({ title, description, imageSrc }) {
    return (
        <>
            <div className="flex flex-col items-center justify-center">
                <div className="w-full h-55 lg:h-[calc(100%-80px)] flex flex-col items-start justify-between bg-gray-800 rounded-lg p-7 border border-gray-700">
                    <div className="flex flex-col items-center justify-center h-15 w-15 bg-gray-700 rounded-lg">
                        <img src={imageSrc} className="h-8 w-auto invert-100" />
                    </div>
                    <h2 className="text-white font-normal text-lg">{title}</h2>
                    <p className="text-white text-md">{description}</p>
                </div>
            </div>
        </>
    )
}