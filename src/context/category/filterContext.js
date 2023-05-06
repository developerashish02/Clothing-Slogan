import { createContext, useState } from 'react';

export const CategoryContext = createContext();

const CategoryProvider = (props) => {
    const [category, setCategory] = useState('all');

    const filterByCategory = (category) => {
        setCategory(category);
    };


    return (
        <CategoryContext.Provider value={{ category, filterByCategory }}>
            {props.children}
        </CategoryContext.Provider>
    );
}

export default CategoryProvider;