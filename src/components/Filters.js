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
                      color === c ? "color-btn acctive" : "color-btn"
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
`;

export default Filters;