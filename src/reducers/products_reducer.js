import React from 'react';
import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
} from "../actions";

const ProductsReducer = (state,action) => {
    const {type,payload} = action;
 switch(type){

    case SIDEBAR_OPEN:
        return {...state,isSideBarOpen:true};
    case SIDEBAR_CLOSE:
        return {...state,isSideBarOpen:false};
    case GET_PRODUCTS_BEGIN:
        return {...state,
            productsError:false,
            productsLoading:true};
    case GET_PRODUCTS_SUCCESS:
        const featuredProducts=payload.filter((product) =>product.featured===true);
        return {...state,
            productsLoading: false,
            products:payload,
            featuredProducts
        }
    case GET_PRODUCTS_ERROR:
        return {...state,
            productsLoading: false,
            prodproductsError:true};
    case GET_SINGLE_PRODUCT_BEGIN:
        return {...state,
            singleProductLoading:true,
            singleProductError:false,
        }
    case GET_SINGLE_PRODUCT_SUCCESS:
        return {...state,
            singleProductLoading:false,
            singleProduct:payload,

        }
    case GET_SINGLE_PRODUCT_ERROR:
        return{
            ...state,
            singleProductLoading:false,
            singleProductError:true,
        }

    default:
        throw new Error(`No Matching "${type}" - action type`);
 }
}

export default ProductsReducer;