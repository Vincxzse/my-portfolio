import { useState, useEffect } from "react"


export default function NavButton({ buttonTitle, targetId }) {
    const [active, setActive] = useState(false)

    useEffect(() => {
        const section = document.getElementById(targetId)
        if (!section) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                setActive(entry.isIntersecting)
            },
            {
                threshold: 0.5,
            }
        )
        observer.observe(section)
        return () => observer.disconnect()
    }, [targetId])

    return (
        <div className="flex flex-row">
            <p className="text-lg text-red-500">#</p>
            <a
                href={`#${targetId}`}
                className={`text-lg ${active ? 'text-red-500' : 'text-[rgba(255,255,255,0.5)]'} font-medium cursor-pointer hover:text-red-400 ml-1 transition-colors duration-200 ease-in-out scroll-smooth`}
            >
                { buttonTitle }
            </a>
        </div>
    )
}