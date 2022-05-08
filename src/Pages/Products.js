import React from 'react';
import PageHero from '../components/PageHero';
import Product from '../components/Product';
import ProductList from '../components/ProductList';
import Sort from '../components/Sort';
const Products = () => {
  return (
    <main>

      <PageHero title="products"/>
      <Sort/>
      <ProductList/>
    </main>
  )
}



export default Products;