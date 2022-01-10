import React, { useState, useReducer, useEffect, useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import CartContext from "../../contexts/CartContext";

const cartReducer = (state, action) => {


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
        // console.log(action.payload)
        let newTotal = 0;
        // for (let i = 0; i < productsArray.length; i++) {
        //     newTotal += productsArray[i].attributes.Price;
        // }
        const temp = action.payload;
        let cart = [];
        for (let i = 0; i < action.payload.length; i++) {
            const product = state.products.find(item => item.id === temp[i].attributes.AccountID);
            newTotal += temp[i].attributes.Subtotal;
            cart.push({ ...temp[i], product })
        }
        console.log(cart)
        return {
            ...state,
            addedItems: cart,
            total: newTotal
        }
    }

    if (action.type === 'ADD_TO_CART') {
        let addedItem = state.products.find(item => item.id === action.id)
        //check if the action id exists in the addedItems
        // let existed_item = state.addedItems.find(item => action.id === item.id)
        // if (existed_item) {
        //     addedItem.quantity += 1
        //     return {
        //         ...state,
        //         total: state.total + addedItem.newPrice
        //     }
        // } else {
        //     addedItem.quantity = 1;
        //calculating the total
        const jwt = localStorage.getItem('jwt-ktxshop');
        handleAddToCart(addedItem, Number(jwt), action.quanity);
        let newTotal = state.total + addedItem.newPrice

        return {
            ...state,
            addedItems: [...state.addedItems, addedItem],
            total: newTotal
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
const handleAddToCart = async (product, accountID, quantity) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json")
    await fetch(process.env.API_HOST + '/api/shopping-carts', {
        method: 'POST',
        body: JSON.stringify({
            data: {
                accountID: accountID,
                ProductID: product.id,
                Quantity: quantity || 1,
                UnitCost: product.attributes.Price,
                Subtotal: product.attributes.Price,
            }
        }),
        headers: myHeaders
    })
        .then(response => response.json())
        .then(result => {

        })

}

export const CartProvider = ({ children }) => {
    const [data, setData] = useState([]);
    const [shoppingCart, setShoppingCart] = useState([]);
    const [cart, dispatchCart] = useReducer(cartReducer, {
        products: [],
        addedItems: [],
        total: 0,
        shipping: 0,
    })

    const removeItem = (id) => {
        dispatchCart({ type: 'REMOVE_ITEM', id: id })
    }
    const addToCart = (id, quantity) => {
        dispatchCart({ type: 'ADD_TO_CART', id: id, quanity: quantity })
    }
    const addQuantity = (id) => {
        dispatchCart({ type: 'ADD_QUANTITY', id: id })
    }
    const subQuantity = (id) => {
        dispatchCart({ type: 'SUB_QUANTITY', id: id })
    }
    useEffect(() => {
        fecthProduct();
    }, [])
    const fecthProduct = async () => {
        const qs = require('qs');
        const query = qs.stringify({
            sort: ['id:desc',],
            populate: '*'
        }, {
            encodeValuesOnly: true,
        });

        await fetch(process.env.API_HOST + `/api/products?${query}`)
            .then(response => response.json())
            .then(res => {
                if (res.data && res.data[0] && res.data[0].attributes) {
                    const dataProduct = res.data;
                    dataProduct.map((item, index) => {
                        data.push(item)
                        setData([...data])
                        dispatchCart({ type: 'ADD_PRODUCTS', payload: data })
                        //dispatchCart({ type: 'INIT_CART', payload: data })
                    })
                }
            });
        const jwt = localStorage.getItem('jwt-ktxshop');
        const qry = qs.stringify({
            filters: {
                AccountID: {
                    $eq: Number(jwt),
                },
            },
        }, {
            encodeValuesOnly: true,
        });
        await fetch(process.env.API_HOST + `/api/shopping-carts?${qry}`)
            .then(response => response.json())
            .then(res => {
                if (res.data && res.data[0] && res.data[0].attributes) {
                    const dataCart = res.data;
                    dataCart.map((item, index) => {
                        shoppingCart.push(item)
                        setShoppingCart([...shoppingCart])
                        dispatchCart({ type: 'INIT_CART', payload: shoppingCart })
                    })
                }
            });
    }
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