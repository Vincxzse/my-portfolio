


export default function NavButton({ buttonTitle }) {
    return (
        <div className="flex flex-row">
            <p className="text-lg text-purple-500">#</p>
            <button
                className="text-lg font-medium cursor-pointer hover:text-purple-400 ml-1 transition-colors duration-200 ease-in-out"
            >
                { buttonTitle }
            </button>
        </div>
    )
}