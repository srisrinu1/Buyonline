import React from 'react';
import ListView from './ListView';
import { useFilters } from '../context/filter_context';
import GridView from './GridView';

const ProductList = () => {
    const {filteredProducts:products,gridView} = useFilters();
    if(gridView===false){
     return( <ListView products={products}/>);
    }
    else{
      return(<GridView products={products}/>);
    }

}

export default ProductList