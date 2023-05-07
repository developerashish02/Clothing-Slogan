import { useContext } from "react";
import { Link } from "react-router-dom";
import { Cartcontext } from "../../context/CartContext";
import Button from "../common/Button";
import { LOGO } from "../../utils/helper";

const Header = () => {
    const { cartItems } = useContext(Cartcontext);
    return (
        <header className="shadow-md bg-white rounded-md p-4">
            <nav className="flex justify-between items-center w-[92%]  mx-auto ">
                <div>
                    <img className="w-24 cursor-pointer" src={LOGO} alt="compnay logo" />
                </div>

                <div className="flex items-center gap-6">
                    <Link to={"/cart"}>
                        <Button className="bg-lime-600 text-white px-5 py-2  hover:bg-lime-500">
                            Cart ({cartItems.length})
                        </Button>
                    </Link>
                </div>
            </nav>
        </header>
    );
};

export default Header;
