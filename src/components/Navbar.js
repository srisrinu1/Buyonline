import React from "react";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { links } from "../utils/constants";
// import CartButtons from "./CartButtons";
import {useProductsContext} from "../context/product_context";
// import { useUserContext } from "../context/user_context";

const Nav = () => {
  const { openSidebar } = useProductsContext();
//   const { myUser } = useUserContext();

  return (
    <NavContainer>
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            {/* <img src={logo} alt="comfy-sloth" /> */}
            <h4>
              <i>
                <span className="logo">Furni</span>Shop
              </i>
            </h4>
          </Link>
          <button type="button" className="nav-toggle" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          {links.map((link) => {
            const { id, text, url } = link;
            return (
              <li key={id}>
                <Link to={url}>{text}</Link>
              </li>
            );
          })}
          {/* {myUser && (
            <li>
              <Link to="/checkout">checkout</Link>
            </li>
          )}
          {myUser && (
            <li>
              <Link to="/orders">orders</Link>
            </li>
          )} */}
        </ul>
        {/* <CartButtons /> */}
      </div>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  h4 {
    font-size: 1.75rem;
    color: var(--clr-grey-3);
  }
  .logo {
    color: var(--clr-primary-5);
  }
  .nav-center {
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
  }
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      width: 175px;
      margin-left: -15px;
    }
  }

`;

export default Nav;