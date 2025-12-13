


export default function NavButton({ buttonTitle }) {
    return (
        <div className="flex flex-row">
            <p className="text-lg text-red-500">#</p>
            <button
                className="text-lg text-[rgba(255,255,255,0.5)] font-medium cursor-pointer hover:text-red-400 ml-1 transition-colors duration-200 ease-in-out"
            >
                { buttonTitle }
            </button>
        </div>
    )
}