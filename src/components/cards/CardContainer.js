import Card from "./Card";
import PRODUCTS from "../../utils/mockData";
import Button from "../common/Button";
import { useState } from "react";
import { Link } from "react-router-dom";


const CardContainer = () => {
    const [category, setCategory] = useState(PRODUCTS);

    function filterByCategory(category) {
        console.log(category)
        const filteredProducts = PRODUCTS.filter((product) => {
            return product.category === category || product.category === category;
        });
        setCategory(filteredProducts);
    }

    return (
        <>
            <div className="flex justify-center space-x-4">

                <Button className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded-lg" onClick={() => filterByCategory('mens clothing')
                } >
                    men's clothing
                </Button>

                <Button className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded-lg" onClick={() => filterByCategory('womens clothing')} >
                    Womens's clothing
                </Button>
            </div >

            <div className="container mx-auto px-4 md:px-6 lg:px-8 m-8" >
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {category?.map(product =>
                        <Link to={"/card-detail/" + product.id} key={product?.id}>
                            <Card prodData={product} />
                        </Link>
                    )}
                </div>
            </div>
        </>
    );
};

export default CardContainer;
