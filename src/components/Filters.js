import React from 'react';
import styled from 'styled-components';
import {useFilters} from '../context/filter_context';
import {getAllUniqueValues ,formatPrice} from '../utils/helpers';
import { FaCheck } from "react-icons/fa";

const Filters = () => {
    const { filters:{
        text,
        category,
        company,
        color,
        minPrice,
        maxPrice,
        price,
        shipping,


    },
updateFilters,
clearFilters,
allProducts}=useFilters();

const categories=getAllUniqueValues(allProducts,"category");
const companies=getAllUniqueValues(allProducts,"company");
const colors=getAllUniqueValues(allProducts,"colors");
  return (
    <Wrapper>
    <div className="content">
      <form onSubmit={(e)=>e.preventDefault()}>
       {/* Search Input */}
       <div className="form-control">
           <h5>Search</h5>
           <input
              type="text"
              name="text"
              placeholder="search"
              className="search-input"
              value={text}
              onChange={updateFilters}
            />
       </div>
       {/* input end */}

       {/* Category Input */}
       <div className="form-control">
           <h5>Category</h5>
           <div>
              {categories.map((c, index) => {
                return (
                  <button
                    name="category"
                    type="button"
                    key={index}
                    className={`${
                      category === c.toLowerCase() ? "active" : null
                    }`}
                    onClick={updateFilters}
                  >
                    {c}
                  </button>
                );
              })}
            </div>
       </div>
       {/* Category input end */}

        {/* Companies */}

        <div className="form-control">
            <h5>company</h5>
            <select name="company"
            value={company}
            onChange={updateFilters}>
            {companies.map((c,index) =>{
                return(
                    <option key={index} value={c} >
                    {c}
                    </option>
                )
            })}

            </select>
        </div>
         {/* Companies end */}

         {/* Colors start */}

         <div className="form-control">
            <h5>colors</h5>
            <div className="colors">
              {colors.map((c, index) => {
                if (c === "all") {
                  return (
                    <button
                      key={index}
                      name="color"
                      onClick={updateFilters}
                      data-color="all"
                      className={`${
                        color === "all" ? "all-btn active" : "all-btn"
                      }`}
                    >
                      all
                    </button>
                  );
                }
                return (
                  <button
                    key={index}
                    name="color"
                    style={{ background: c }}
                    className={`${
                      color === c ? "color-btn active" : "color-btn"
                    }`}
                    data-color={c}
                    onClick={updateFilters}
                  >
                    {color === c ? <FaCheck /> : null}
                  </button>
                );
              })}
            </div>
          </div>

        {/* Colors end  */}

        {/* Price Start */}

        <div className="form-control">
          <h5>Price</h5>
          <p style={{ marginBottom: 0 }}>{formatPrice(price)}</p>
          <input
              type="range"
              name="price"
              onChange={updateFilters}
              min={minPrice}
              max={maxPrice}
              value={price}
            />
        </div>

        {/* Price end */}

        {/* Shipping Start */}

        <div className="form-control">
         <h5>Free Shipping</h5>
         <input
           type="checkbox"
           name="shipping"
           id="shipping"
           onChange={updateFilters}
           checked={shipping}
         />

        </div>

          {/* Shiiping end */}
      </form>

      {/* Clear all filters */}

     <button
     type="button"
     className="clear-btn"
     onClick={clearFilters}
     >
       Clear Filters
     </button>
    </div>

    </Wrapper>
  )
}

const Wrapper = styled.section `
`;

export default Filters;