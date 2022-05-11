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
        <form onSubmit={(e) => e.preventDefault()}>
          {/* search input */}
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

          {/*  search input end */}

          {/* categories */}
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
          {/* categories end */}

          {/* .Companies */}
          <div className="form-control">
            <h5>Company</h5>
            <select
              name="company"
              value={company}
              onChange={updateFilters}
              className="company"
            >
              {companies.map((c, index) => {
                return (
                  <option key={index} value={c}>
                    {c}
                  </option>
                );
              })}
            </select>
          </div>
          {/* Companies end*/}

          {/* Colors */}
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

          {/* Colors end */}

          {/* price */}
          <div className="form-control">
            <h5>price</h5>
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

          {/* price end */}

          {/* shipping */}
          <div className="form-control shipping">
            <label htmlFor="shipping">
              <h5>Free Shipping</h5>
            </label>
            <input
              type="checkbox"
              name="shipping"
              id="shipping"
              onChange={updateFilters}
              checked={shipping}
            />
          </div>
          {/* shipping end */}
        </form>
        <button type="button" className="clear-btn" onClick={clearFilters}>
          clear filters
        </button>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section `
 .form-control{
   margin-bottom:1.25rem;
 }

 h5{
   margin-bottom:0.5rem;
   font-size:1.125rem;
 }

 .search-input{
   padding:0.5rem;
   background: var(--clr-grey-10);
   border-radius: var(--radius);
   border-color:transparent;
   outline:none;
   letter-spacing: var(--spacing);
 }

 .search-input::placeholder{
   text-transform:capitalize;
 }

 button{
   display:block;
   margin:0.25em 0;
   padding:0.25em 0;
   text-transform: capitalize;
    background: transparent;
    border:transparent;
    border-bottom: 1px solid transparent;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-5);
    cursor: pointer;

 }

 .active{
   border-color:var(--clr-grey-5);
 }

 .company{
  background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    outline:none;
    padding:0.25rem;
 }

 .colors{
   display:flex;
   align-items: center;
 }

 .color-btn{
   display:inline-block;
   width:1rem;
   height:1rem;
   border-radius:50%;
   background: #222;
   margin-right: 0.5rem;
   border: none;
    cursor: pointer;
    opacity: 0.5;
    display:flex;
    align-items: center;
    justify-content: center;

    svg{
      font-size:0.5rem;
      color: var(--clr-white);
    }
 }

 .all-btn{
   display: flex;
   align-items: center;
   justify-content: center;
   margin-right: 0.5rem;
 }

 .active{
   opacity:1;
 }

 .all-btn .active{
   text-decoration:underline;

 }

 .shipping{
   display:grid;
   align-items: center;
   grid-template-columns:auto 1fr;
   column-gap:0.5rem;
   text-transform: capitalize;
   font-size: 1rem;
 }

 .clear-btn{
  background: var(--clr-red-dark);
  color: var(--clr-white);
  padding: 0.5rem;
  padding: 0.25rem 0.5rem;
  border-radius: var(--radius);
 }

@media (min-width: 768px){
  .content{
    position: sticky;
    top:1rem;
  }
}

   `
export default Filters;