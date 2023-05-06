import PRODUCTS from "./mockData";

export const filter = (filterText) => {
    const filter = PRODUCTS.filter((products) => {
        return products.category.toLowerCase().includes(filterText.toLowerCase());
    })

    return filter;
}