import Card from "./Card";
import PRODUCTS from "../../utils/mockData";
import Button from "../common/Button";


const CardContainer = () => {
    const handleButtonClick = () => {
        console.log('Button Clicked!');
    };

    return (
        <>
            <div class="flex justify-center space-x-4">
                <Button className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded-lg">
                    All
                </Button>

                <Button className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded-lg" >
                    Active
                </Button>

                <Button className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded-lg">
                    Completed
                </Button>
            </div>

            <div className="container mx-auto px-4 md:px-6 lg:px-8 m-8" >
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {PRODUCTS?.map(product => <Card prodData={product} key={product?.id} />)}
                </div>
            </div>
        </>
    );
};

export default CardContainer;
