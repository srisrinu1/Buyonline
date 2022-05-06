import React,{useContext,createContext,useReducer,useEffect} from 'react';
import {
    LOAD_PRODUCTS,
    SET_GRID_VIEW,
    SET_LIST_VIEW,
    UPDATE_SORT,
    UPDATE_FILTERES,
    SORT_PRODUCTS,
    FILTER_PRODUCTS,
    CLEAR_FILTERS
} from './actions';
import {useProductsContext} from './product_context';
import {filter_reducer} from '../reducers/filter_reducer';

const initialState={
    filteredProducts:[],
    allProducts:[],
    gridView:true,
    sort:"price-lowest",
    filters:{
        text:"",
        company:"all",
        colors:"all",
        minxPrice:0,
        maxPrice:0,
        price:0,
        shipping:false,


    }
}

const FilterContext=createContext();

export const FilterProvider = () => {
    const {products}=useProductsContext();
    const [state,dispatch]=useReducer(filter_reducer,initialState);

    useEffect(()=>{
        dispatch({type:LOAD_PRODUCTS,payload:products});

    },[products]);
    useEffect(()=>{
      dispatch({type:FILTER_PRODUCTS});
      dispatch({type:SORT_PRODUCTS})
    },[products,state.sort,state.filters]);

    const setgridView =()=>{
        dispatch({type:SET_GRID_VIEW})
    }

    const setListView =()=>{
        dispatch({type:SET_LIST_VIEW});
    }


  return (
    <div>

    </div>
  )
}

