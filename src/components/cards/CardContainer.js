import Card from "./Card";
import PRODUCTS from "../../utils/mockData";


const CardContainer = () => {
    return (
        <div className="container mx-auto px-4 md:px-6 lg:px-8 m-8" >
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {PRODUCTS?.map(product => <Card prodData={product} key={product?.id} />)}
            </div>
        </div>
    );
};

export default CardContainer;
