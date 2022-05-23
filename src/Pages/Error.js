import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const Error = () => {
  return (
    <Wrapper className="page-100">
       <section>
         <h1>404</h1>
         <h3>Sorry, the page you tried cannot be found</h3>
         <Link to="/" className="btn">
            Go to Home
         </Link>

       </section>

    </Wrapper>
  )
}

const Wrapper =styled.main `
 display:flex;
 align-items:center;
 justify-content:center;
 text-align:center;

 h1{
     font-size:9rem;
 }

 h3{
     text-transform:none;
     margin-bottom:2rem;
 }
`;

export default Error;