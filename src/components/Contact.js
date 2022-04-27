import React from 'react';
import styled from 'styled-components';

const Contact = () => {
  return (
      <Wrapper>
    <div className="section-center">
     <h3>Join our newsletter and get 20% off</h3>
     <div className="content">
     <p>Hurry! Subscribe now. We promise we won't spam you :)</p>
     </div>
    </div>
    </Wrapper>
  )
}

const Wrapper= styled.section `
padding:5rem 0;
h3{
    text-transform:none;

}
p {
    line-height: 2;
    max-width: 45em;
    color: var(--clr-grey-5);
  }
  @media (min-width:992px){
    .content{
        display:grid;
        grid-template-columns: 1fr 1fr;
        margin-top:2rem;
    }
    p {
      margin-bottom: 0;
    }
  }
  @media (min-width:1280px){
      padding:15rem 0;
  }

`

export default Contact