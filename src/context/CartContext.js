import { createContext, useContext, useState } from "react";

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
    };

    const updateCartItemQuantity = (itemId) => {

        const findItem = cartItems.find((cartItems) => cartItems.id === itemId);
        const chnageId = {
            ...findItem,
            id: Math.random()
        }
        setCartItems([...cartItems, chnageId])
    };

    const removeItemFromCart = (itemId) => {
        const updatedCartItems = cartItems.filter(
            (cartItem) => cartItem.id !== itemId
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
