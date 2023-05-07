import { createContext, useState } from "react";

export const Cartcontext = createContext({
    cartItems: [],
    increaseItem: () => { },
    decreaseItem: () => { },
    totalPrice: 0,
});

export const Context = (props) => {
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    const addItemToCart = (item) => {
        setCartItems([...cartItems, item]);
        setTotalPrice(totalPrice + item.price);
    };

    const updateCartItemQuantity = (itemId) => {
        const findItem = cartItems.find((cartItems) => cartItems.id === itemId);
        const chnageId = {
            ...findItem,
            id: Math.random(),
        };
        setCartItems([...cartItems, chnageId]);
        setTotalPrice(totalPrice + chnageId.price);
    };

    const removeItemFromCart = (item) => {
        setTotalPrice(totalPrice - item.price);

        const updatedCartItems = cartItems.filter(
            (cartItem) => cartItem.id !== item.id
        );
        setCartItems(updatedCartItems);
    };

    return (
        <Cartcontext.Provider
            value={{
                cartItems,
                addItemToCart,
                updateCartItemQuantity,
                removeItemFromCart,
                totalPrice,
            }}
        >
            {props.children}
        </Cartcontext.Provider>
    );
};
