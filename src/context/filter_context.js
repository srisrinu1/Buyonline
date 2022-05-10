import React,{useContext,createContext,useReducer,useEffect} from 'react';
import {
    LOAD_PRODUCTS,
    SET_GRID_VIEW,
    SET_LIST_VIEW,
    UPDATE_SORT,
    UPDATE_FILTERS,
    SORT_PRODUCTS,
    FILTER_PRODUCTS,
    CLEAR_FILTERS
} from '../actions';
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
        category:'all',
        color:"all",
        minPrice:0,
        maxPrice:0,
        price:0,
        shipping:false,


    }
}

const FilterContext=createContext();

export const FilterProvider = (props) => {
    const {products}=useProductsContext();
    const [state,dispatch]=useReducer(filter_reducer,initialState);

    useEffect(() => {
      dispatch({ type: LOAD_PRODUCTS, payload: products });
    }, [products]);

    useEffect(() => {
      dispatch({ type: FILTER_PRODUCTS });
      dispatch({ type: SORT_PRODUCTS });
    }, [products, state.sort, state.filters]);

    const setgridView =()=>{
        dispatch({type:SET_GRID_VIEW})
    }

    const setListView =()=>{
        dispatch({type:SET_LIST_VIEW});
    }
    const updateSort=(e)=>{
        let value=e.target.value;
        dispatch({type:UPDATE_SORT,payload:value});
    }
    const updateFilters = (e) => {
      let name = e.target.name;
      let value = e.target.value;
      if (name === "category") {
        value = e.target.textContent;
      }
      if (name === "color") {
        value = e.target.dataset.color;
      }

      if (name === "price") {
        //value was being saved as a string on changing slider
        value = Number(value);
      }

      if (name === "shipping") {
        value = e.target.checked;
      }

      dispatch({ type: UPDATE_FILTERS, payload: { name, value } });
    };

    const clearFilters=()=>{
        dispatch({type:CLEAR_FILTERS});
    }


  return (
   <FilterContext.Provider value={{
       ...state,
       setgridView,
       setListView,
       updateSort,
       updateFilters,
       clearFilters

   }

   }>
      {props.children}
   </FilterContext.Provider>
  )
}

export const useFilters=()=>{
    const context=useContext(FilterContext);
    if(context===undefined){
        throw new Error("useFilterContext was used outside of its Provider");
    }
    return(context);
}

