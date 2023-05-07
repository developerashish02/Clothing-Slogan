import { createContext, useContext, useState } from "react";

export const Cartcontext = createContext({
    cartItems: [],
    increaseItem: () => { },
    decreaseItem: () => { },
    totalPrice: 0,
});

export const useCart = () => {
    return useContext(Cartcontext);
};

export const Context = (props) => {
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);


    const increaseItem = (item) => {
        console.log(item);
        const itemIndex = cartItems.findIndex((cartItem) => cartItem.id === item.id);
        console.log(cartItems)
        
        if (itemIndex === -1) {
            setCartItems([...cartItems, { ...item, quantity: 1 }]);
        } else {
            const newCartItems = [...cartItems];
            newCartItems[itemIndex].quantity++;
            setCartItems(newCartItems);
        }
        setTotalPrice(totalPrice + item.price);
    }


    const decreaseItem = (item) => {
        const itemIndex = cartItems.findIndex((cartItem) => cartItem.id === item.id);
        if (itemIndex !== -1) {
            const newCartItems = [...cartItems];
            newCartItems[itemIndex].quantity--;
            if (newCartItems[itemIndex].quantity === 0) {
                newCartItems.splice(itemIndex, 1);
            }
            setCartItems(newCartItems);
            setTotalPrice(totalPrice - item.price);
        }
    };
    return (
        <Cartcontext.Provider value={{ cartItems, increaseItem, decreaseItem, totalPrice }}>{props.children}</Cartcontext.Provider>
    );
};

