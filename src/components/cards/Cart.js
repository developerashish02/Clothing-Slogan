import { useContext, useState } from 'react';
// import { CartContext } from '../../context/CartContext';
import { Cartcontext } from '../../context/CartContext';

function Cart() {

    const { cartItems, addItemToCart, updateCartItemQuantity, removeItemFromCart, totalPrice } = useContext(Cartcontext);

    return (
        <div className="w-full max-w-3xl mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
            {cartItems.length > 0 ? (
                <div className="flex flex-col">
                    {cartItems.map((item) => (
                        <div className="flex items-center justify-between py-2 border-b border-gray-200" key={item.id} >
                            <div className="flex items-center">
                                <img src={item.image} alt={item.title} className="h-16 w-16 object-contain mr-2" />
                                <div>
                                    <h3 className="font-bold"> {item?.title} </h3>
                                    <p className="text-sm text-gray-600">Price: {item.price}</p>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <button onClick={() => removeItemFromCart(item.id)} className="px-2 py-1 border border-gray-300 rounded-md mr-2">
                                    -
                                </button>
                                <span className="font-bold mr-2">200</span>
                                <button onClick={() => updateCartItemQuantity(item.id)} className="px-2 py-1 border border-gray-300 rounded-md">
                                    +
                                </button>
                            </div>
                        </div>
                    ))}
                    <div className="flex justify-end py-2 font-bold">
                        <p className="mr-2">Total:</p>
                        <p>{totalPrice.toFixed(2)}</p>
                    </div>
                </div>
            ) : (
                <p>Your cart is empty</p>
            )}
        </div>
    );
}

export default Cart;
