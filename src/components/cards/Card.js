import Button from "../common/Button";

const Card = (props) => {
    const { title, description, price, image } = props.prodData;
    const limitedDescription = description.slice(0, 50) + "...";

    return <div className="bg-white shadow-lg rounded-lg overflow-hidden h-auto w-72" >
        <img className="w-full h-48 object-contain" src={image} alt="Shopping item" />
        <div className="p-4">
            <h2 className="text-gray-900 font-bold text-xl mb-2">{title}</h2>
            <p className="text-gray-700 text-base"> {limitedDescription} </p>
            <div className="flex items-center justify-between mt-4">
                <h3 className="text-gray-700 font-bold text-xl">Rs {price}</h3>
                <Button className="bg-zinc-800 hover:bg-zinc-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Buy Now</Button>
            </div>
        </div>
    </div>
}

export default Card; 