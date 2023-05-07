import { useParams } from "react-router-dom";
import PRODUCTS from "../../utils/mockData";
import { useContext, useEffect, useState } from "react";
import { Cartcontext } from "../../context/CartContext";

const CardDetail = () => {
    const [productDetail, seProductDetail] = useState({});
    const { id } = useParams();
    const { title, image, description, price, } = productDetail;
    const { cartItems, increaseItem, decreaseItem, totalPrice } = useContext(Cartcontext);


    useEffect(() => {
        const product = PRODUCTS?.find((product) => product.id === +id);
        seProductDetail(product);
    }, [id])

    const handleAddCart = () => {
        increaseItem(productDetail); 
    }

    return <div className="container mx-auto px-4 py-4">
        <div className="flex flex-wrap justify-between items-center">
            <div className="w-full md:w-1/2 lg:w-3/5">
                <img src={image} className="w-full h-96 object-contain" />
            </div>

            <div className="w-full md:w-1/2 lg:w-2/5 mt-4 md:mt-0">
                <h1 className="text-2xl font-bold mb-2"> {title} </h1>
                <p className="text-gray-700 text-base mb-4"> {description}</p>
                <span>Rating: <span></span></span>
                <p className="text-lg font-bold mb-2">Rs {price} </p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleAddCart} >
                    Add to Cart
                </button>
            </div>
        </div>
    </div>
}

export default CardDetail; 