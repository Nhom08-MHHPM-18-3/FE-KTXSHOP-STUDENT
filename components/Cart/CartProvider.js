import React, { useState, useReducer, useEffect } from "react";

import CartContext from "../../contexts/CartContext";
const data = [
    {
        description: "Long Sleeve Leopard T-Shirt",
        discount: false,
        discountOff: 10,
        id: "5DAcUDDd4t8xWgl9kvXl",
        imageHoverUrl: "https://demaxin.s3.ap-south-1.amazonaws.com/img-hover1-1588704436043.jpg",
        imageUrl: "https://demaxin.s3.ap-south-1.amazonaws.com/img1-1588704428273.jpg",
        newPrice: 320,
        newProduct: false,
        offer: true,
        oldPrice: 250,
        onSale: false,
        title: "Long Sleeve Leopard T-Shirt",
        type: "T-Shirt",
        quantity: 1
    },
    {
        description: "Sunnyme Women's Ponchos",
        discount: false,
        discountOff: 0,
        id: "81tgigL0U2zUHoTj85Ht",
        imageHoverUrl: "https://demaxin.s3.ap-south-1.amazonaws.com/img-hover8-1588705468374.jpg",
        imageUrl: "https://demaxin.s3.ap-south-1.amazonaws.com/img8-1588705462376.jpg",
        newPrice: 200,
        newProduct: false,
        offer: true,
        oldPrice: 210,
        onSale: true,
        title: "Sunnyme Women's Ponchos",
        type: "Women Clothes",
        quantity: 1
    },
    {
        description: "Sunnyme Women's Ponchos",
        discount: false,
        discountOff: 0,
        id: "81tgigL0U2zUHoTj85Ht",
        imageHoverUrl: "https://demaxin.s3.ap-south-1.amazonaws.com/img-hover8-1588705468374.jpg",
        imageUrl: "https://demaxin.s3.ap-south-1.amazonaws.com/img8-1588705462376.jpg",
        newPrice: 200,
        newProduct: false,
        offer: true,
        oldPrice: 210,
        onSale: true,
        title: "Sunnyme Women's Ponchos",
        type: "Women Clothes",
        quantity: 1
    },
]
const cartReducer = (state, action) => {

    // User Logout
    if (action.type === 'USRER_LOGOUT') {
        cookie.remove('_livani_token_')
        return {
            ...state,
            login: false
        }
    }

    // Check if user login
    if (action.type === 'CHECK_USRER_LOGIN') {
        const getToken = cookie.get('_livani_token_')

        if (getToken == token) {
            return {
                ...state,
                login: true
            }
        } else {
            return {
                ...state,
                login: false
            }
        }
    }

    // User Login
    if (action.type === 'USRER_LOGIN') {
        cookie.set('_livani_token_', token);

        const getToken = cookie.get('_livani_token_')

        // console.log('token', getToken)

        if (getToken == token) {
            return {
                ...state,
                login: true
            }
        } else {
            return {
                ...state,
                login: false
            }
        }

    }

    if (action.type === 'ADD_PRODUCTS') {
        let productsArray = [];
        productsArray = action.payload;

        // console.log('www', productsArray)

        return {
            ...state,
            products: productsArray
        }
    }
    if (action.type === 'INIT_CART') {
        let productsArray = [];
        productsArray = action.payload;
        let newTotal = 0;

        for (let i = 0; i < productsArray.length; i++) {
            newTotal += productsArray[i].newPrice;
        }

        return {
            ...state,
            addedItems: productsArray,
            total: newTotal
        }
    }

    if (action.type === 'ADD_TO_CART') {
        let addedItem = state.products.find(item => item.id === action.id)
        //check if the action id exists in the addedItems
        let existed_item = state.addedItems.find(item => action.id === item.id)
        if (existed_item) {
            addedItem.quantity += 1
            return {
                ...state,
                total: state.total + addedItem.newPrice
            }
        } else {
            addedItem.quantity = 1;
            //calculating the total
            let newTotal = state.total + addedItem.newPrice

            return {
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total: newTotal
            }

        }
    }

    if (action.type === 'ADD_QUANTITY_WITH_NUMBER') {
        let addedItem = state.products.find(item => item.id === action.id)
        //check if the action id exists in the addedItems
        let existed_item = state.addedItems.find(item => action.id === item.id)
        if (existed_item) {
            addedItem.quantity += action.qty
            return {
                ...state,
                total: state.total + addedItem.newPrice * action.qty
            }
        } else {
            addedItem.quantity = action.qty;
            //calculating the total
            let newTotal = state.total + addedItem.newPrice * action.qty

            return {
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total: newTotal
            }

        }
    }


    if (action.type === 'REMOVE_ITEM') {
        let itemToRemove = state.addedItems.find(item => action.id === item.id)
        let new_items = state.addedItems.filter(item => action.id !== item.id)

        //calculating the total
        let newTotal = state.total - (itemToRemove.newPrice * itemToRemove.quantity);

        return {
            ...state,
            addedItems: new_items,
            total: newTotal
        }
    }

    if (action.type === 'ADD_QUANTITY') {
        let addedItem = state.products.find(item => item.id === action.id)
        addedItem.quantity += 1
        let newTotal = state.total + addedItem.newPrice
        return {
            ...state,
            total: newTotal
        }
    }

    if (action.type === 'SUB_QUANTITY') {
        let addedItem = state.products.find(item => item.id === action.id)
        //if the qt == 0 then it should be removed
        if (addedItem.quantity === 1) {
            let new_items = state.addedItems.filter(item => item.id !== action.id)
            let newTotal = state.total - addedItem.newPrice
            return {
                ...state,
                addedItems: new_items,
                total: newTotal
            }
        } else {
            addedItem.quantity -= 1
            let newTotal = state.total - addedItem.newPrice
            return {
                ...state,
                total: newTotal
            }
        }

    }

    if (action.type === 'ADD_SHIPPING') {
        return {
            ...state,
            shipping: state.shipping += 30
        }
    }

    if (action.type === 'SUB_SHIPPING') {
        return {
            ...state,
            shipping: state.shipping -= 30
        }
    }

    if (action.type === 'RESET_CART') {
        return {
            ...state,
            addedItems: [],
            total: 0,
            shipping: 0
        }
    }

    else {
        return state
    }
}
export const CartProvider = ({ children }) => {
    const [cart, dispatchCart] = useReducer(cartReducer, {
        products: [],
        addedItems: [],
        total: 0,
        shipping: 0,
        login: false
    })

    const removeItem = (id) => {
        dispatchCart({ type: 'REMOVE_ITEM', id: id })
    }
    const addToCart = (id) => {
        dispatchCart({ type: 'ADD_TO_CART', id: id })
    }
    const addQuantity = (id) => {
        dispatchCart({ type: 'ADD_QUANTITY', id: id })
    }
    const subQuantity = (id) => {
        dispatchCart({ type: 'SUB_QUANTITY', id: id })
    }
    useEffect(() => {
        dispatchCart({ type: 'ADD_PRODUCTS', payload: data })
        dispatchCart({ type: 'INIT_CART', payload: data })
    }, [])
    return (
        <CartContext.Provider
            value={{
                cart: cart,
                removeItem: removeItem,
                addToCart: addToCart,
                addQuantity: addQuantity,
                subQuantity: subQuantity,
                
            }}
        >
            {children}
        </CartContext.Provider>
    );

}