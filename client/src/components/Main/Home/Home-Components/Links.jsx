


export default function Links({ linkImage, linkUrl }) {
    return (
        <>
            <a href={linkUrl} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center h-15 w-15 hover:bg-red-500 transition duration-200 rounded-full">
                <img src={linkImage} className="h-7 w-auto invert-100" />
            </a>
        </>
    )
}