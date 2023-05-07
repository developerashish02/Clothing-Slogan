import PRODUCTS from "./mockData";

const useRelatedProducts = (productDetail) => {
	const filterRelatedCategory = PRODUCTS.filter((products) => {
		return (
			products.category === productDetail.category &&
			products.id !== productDetail.id
		);
	});

	return filterRelatedCategory;
};

export default useRelatedProducts;
