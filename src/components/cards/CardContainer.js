import Card from "./Card";
import PRODUCTS from "../../utils/mockData";
import Button from "../common/Button";
import { useState } from "react";
import { Link } from "react-router-dom";

const CardContainer = () => {
    const [category, setCategory] = useState(PRODUCTS);

    const filterByCategory = (category) => {
        // get all category 
        if (category === "all") {
            const allCategory = PRODUCTS.map(product => product);
            setCategory(allCategory);
        }

        // filter category 
        else {
            const filteredProducts = PRODUCTS.filter(
                (product) => product.category === category
            );
            setCategory(filteredProducts);
        }
    };

    return (
        <>
            <div className="flex justify-center space-x-4 mt-8">
                {/* All products  */}
                <Button
                    className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded-lg"
                    onClick={() => filterByCategory('all')}
                >
                    All Products
                </Button>

                {/* Mens Clothing */}

                <Button
                    className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded-lg"
                    onClick={() => filterByCategory("mens clothing")}
                >
                    men's clothing
                </Button>
                {/* Womens Clothing */}
                <Button
                    className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded-lg"
                    onClick={() => filterByCategory("womens clothing")}
                >
                    Womens's clothing
                </Button>
            </div>

            {/* render all cards */}
            <div className="container mx-auto px-4 md:px-6 lg:px-8 m-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {category?.map((product) => (
                        <Link to={"/card-detail/" + product?.id} key={product?.id}>
                            <Card prodData={product} />
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
};

export default CardContainer;
