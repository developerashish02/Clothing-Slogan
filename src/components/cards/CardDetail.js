import { Link, useParams } from "react-router-dom";
import PRODUCTS from "../../utils/mockData";
import { useContext, useEffect, useState } from "react";
import { Cartcontext } from "../../context/CartContext";
import Button from "../common/Button";
import Reviews from "../common/Reviews";
import useRelatedProducts from "../../utils/useRelatedProducts";
import Card from "./Card";
import { v4 as uuidv4 } from "uuid";

const CardDetail = () => {
	const [productDetail, seProductDetail] = useState({});
	const relatedProducts = useRelatedProducts(productDetail);
	const { id } = useParams();
	const { title, image, description, price } = productDetail;
	const { addItemToCart } = useContext(Cartcontext);

	useEffect(() => {
		const product = PRODUCTS?.find((product) => product.id === +id);
		seProductDetail(product);
	}, [id]);

	const handleAddCart = () => {
		const newProduct = {
			...productDetail,
			id: uuidv4(),
		};
		addItemToCart(newProduct);
	};

	return (
		<div className="container mx-auto px-4 py-4">
			<div className="flex flex-wrap justify-between items-center">
				<div className="w-full md:w-1/2 lg:w-3/5">
					<img src={image} className="w-full h-96 object-contain" alt={title} />
				</div>

				<div className="w-full md:w-1/2 lg:w-2/5 mt-4 md:mt-0">
					<h1 className="text-2xl font-bold mb-2"> {title} </h1>
					<p className="text-gray-700 text-base mb-4"> {description}</p>
					<p className="text-lg font-bold mb-2">Rs {price} </p>
					<Button
						className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
						onClick={handleAddCart}
					>
						Add to Cart
					</Button>

					<Link to={"/cart"}>
						<Button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded mx-4">
							Go To Cart
						</Button>
					</Link>
				</div>
			</div>

			{/* Related Products */}
			<div className="my-5 ml-4">
				<hr className="my-8 border-b-2 border-gray-300" />
				<h2 className="text-4xl font-bold mb-4 text-green-500 text-center ">
					Releted Products
				</h2>

				<div className="flex gap-2 mt-5 flex-wrap">
					{relatedProducts?.map((product) => (
						<Link to={"/card-detail/" + product.id}>
							<Card prodData={product} key={product?.id} />
						</Link>
					))}
				</div>
			</div>

			{/*  customer reviews */}
			<div className="my-5 ml-4">
				<hr className="my-8 border-b-2 border-gray-300" />
				<h2 className="text-4xl font-bold mb-4 text-green-500 text-center ">
					Customer Reviews
				</h2>
				<div className="flex gap-4 mt-5 flex-wrap">
					{productDetail?.reviews?.map((product) => {
						return <Reviews reviewsData={product} key={product?.id} />;
					})}
				</div>
			</div>
		</div>
	);
};

export default CardDetail;
