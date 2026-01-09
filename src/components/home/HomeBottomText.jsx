import { Link } from "react-router-dom"

const HomeBottomText = () => {
    return (
        <div className="font-[lausanne-bold] flex items-center justify-center gap-2">
            <Link className="text-[6.5vw] border-4 leading-[7vw] border-white rounded-full px-10 py-1 pt-1 pb-0 uppercase">Projects</Link>
            <Link className="text-[6.5vw] border-4 leading-[7vw] border-white rounded-full px-10 py-1 pt-1 pb-0 uppercase">Agence</Link>
        </div>
    )
}

export default HomeBottomText
