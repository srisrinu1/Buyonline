import React from 'react';

import {
    ADD_TO_CART,
    REMOVE_CART_ITEM,
    COUNT_CART_TOTALS,
    TOGGLE_CART_ITEM_AMOUNT,
    CLEAR_CART

} from '../actions';

export const cartReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {

        case ADD_TO_CART:
            const { id, color, amount, product } = payload;
            const tempItem = state.cart.find((item) => item.id === id + color);
            if (tempItem) {
                const tempCart = state.cart.map((cartItem) => {
                        if (cartItem.id === id + color) {
                            let newAmount = cartItem.amount + amount;
                            if (newAmount > cartItem.max) {
                                newAmount = cartItem.max;
                            }
                            return {...cartItem, amount: newAmount }
                        } else {
                            return cartItem;
                        }
                    }

                );
                return {...state, cart: tempCart };
            } else {
                const newItem = {
                    id: id + color,
                    name: product.name,
                    color,
                    amount,
                    image: product.images[0].url,
                    price: product.price,
                    max: product.stock,
                };
                return {...state, cart: [...state.cart, newItem] };
            }
        case REMOVE_CART_ITEM:

            const tempCart2 = state.cart.filter((item) => item.id !== pay);
            return {...state, cart: tempCart2 };
        case CLEAR_CART:
            return {...state, cart: [] };

        case TOGGLE_CART_ITEM_AMOUNT:
            const tempCart3 = state.cart.map((item) => {
                if (item.id === payload.id) {
                    if (payload.value === "inc") {
                        let newAmount = item.amount + 1;
                        if (newAmount > item.max) {
                            newAmount = item.max;
                        }
                        return {...item, amount: newAmount };
                    }
                    if (payload.value === "dec") {
                        let newAmount = item.amount - 1;
                        if (newAmount < 1) {
                            newAmount = 1;
                        }
                        return {...item, amount: newAmount };
                    }
                }
                return item;
            });

            return {...state, cart: tempCart3 };
        case COUNT_CART_TOTALS:
            const { totalItems, totalAmount } = state.cart.reduce((total, cartItem) => {
                const { amount, price } = cartItem;
                total.totalItems += amount;
                total.totalAmount += amount * price;
                return total;
            }, { totalItems: 0, totalAmount: 0 });

            return {...state, totalItems, totalAmount };

        default:
            throw new Error(`No Matching "${type}" - action type`);



    }

}