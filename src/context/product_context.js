import axios from 'axios';
import React, { useEffect, createContext, useContext, useReducer } from 'react';
import { products_url as url } from '../utils/constants';

import {
    SIDEBAR_OPEN,
    SIDEBAR_CLOSE,
    GET_PRODUCTS_BEGIN,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_ERROR,
    GET_SINGLE_PRODUCT_BEGIN,
    GET_SINGLE_PRODUCT_SUCCESS,
    GET_SINGLE_PRODUCT_ERROR,

} from '../actions';
import ProductsReducer from '../reducers/products_reducer';

const initialState = {
    isSideBarOpen: false,
    productsLoading: true,
    productsError: true,
    products: [],
    featuredProducts: [],
    singleProductLoading: true,
    singleProductError: false,
    singleProduct: []

}

const ProductsContext = createContext();

export const ProductsProvider = (props) => {
    const [state, dispatch] = useReducer(ProductsReducer, initialState);
    const openSideBar = () => {
        dispatch({ type: SIDEBAR_OPEN });
    }
    const closeSideBar = () => {
        dispatch({ type: SIDEBAR_CLOSE });
    }
    const fetchProducts = async() => {
        dispatch({ type: GET_PRODUCTS_BEGIN });
        try {
            const response = await axios.get(url);
            const products = response.data;
            dispatch({ type: GET_PRODUCTS_SUCCESS, payload: products });
        } catch {
            dispatch({ type: GET_PRODUCTS_ERROR })
        }

    }
    const fetchSingleProduct = async(url) => {
        dispatch({ type: GET_PRODUCTS_BEGIN });
        try {
            const response = await axios.get(url);
            const singleProduct = response.data;
            dispatch({ type: GET_SINGLE_PRODUCT_SUCCESS, payload: singleProduct });
        } catch {
            dispatch({ type: GET_SINGLE_PRODUCT_ERROR });
        }
    }

    useEffect(() => {
        fetchProducts(url);
    }, []);

    return ( <
        ProductsContext.Provider value = {
            {...state, openSideBar, closeSideBar, fetchSingleProduct } } > { props.children }

        <
        /ProductsContext.Provider>
    )


}

export const useProductsContext = () => {
    const context = useContext(ProductsContext);
    if (context === undefined) {
        throw new Error("useProductsContext was used outside of its Provider");
    }
    return (context);

}