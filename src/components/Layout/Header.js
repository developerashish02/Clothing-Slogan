import { Link } from "react-router-dom";

const Header = () => {
    return <header className="bg-white">
        <nav className="flex justify-between items-center w-[92%]  mx-auto">
            <div>
                <img className="w-16 cursor-pointer" src="https://cdn-icons-png.flaticon.com/512/5968/5968204.png" alt="..." />
            </div>

            <div className="flex items-center gap-6">
                <Link to={"/cart"}>
                    <button className="bg-[#a6c1ee] text-white px-5 py-2 rounded-full hover:bg-[#87acec]">Cart (1)</button>
                </Link>
            </div>
        </nav >
    </header>
}

export default Header; 