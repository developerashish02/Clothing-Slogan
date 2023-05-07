const RelatedProducts = (props) => {
    console.log(props);
    const { image, title, description } = props.relatedProd;

    return (
        <section>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-white rounded-md shadow-md p-4">
                    <img src={image} alt="Product 1" className="w-full mb-4" />
                    <h3 className="text-lg font-bold mb-2"> {title} </h3>
                    <p className="text-gray-500 mb-4">
                        {description}
                    </p>
                    <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full">
                        Buy Now
                    </button>
                </div>
            </div>
        </section>
    );
};

export default RelatedProducts;
