import { useContext } from "react";
import { Link } from "react-router-dom";
import { Cartcontext } from "../../context/CartContext";
import Button from "../common/Button";

const Header = () => {
    const { cartItems } = useContext(Cartcontext);
    return <header className="bg-white">
        <nav className="flex justify-between items-center w-[92%]  mx-auto">
            <div>
                <img className="w-16 cursor-pointer" src="https://cdn-icons-png.flaticon.com/512/5968/5968204.png" alt="..." />
            </div>

            <div className="flex items-center gap-6">
                <Link to={"/cart"}>
                    <Button className="bg-lime-600 text-white px-5 py-2  hover:bg-lime-500">Cart ({cartItems.length})</Button>
                </Link>
            </div>
        </nav >
    </header>
}

export default Header; 