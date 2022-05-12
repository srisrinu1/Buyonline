import React from 'react';
import styled from 'styled-components';
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

const Stars = (props) => {
    const {stars,reviews}=props;

    const tempStars=Array.from({length:5},(_,index)=>{

        return(
            <span key={index}>
              {
                  stars>=index+1?
                  <BsStarFill/>:stars>=index+0.5?
                  <BsStarHalf/>:
                  <BsStar/>
              }

            </span>
        )

    })
  return (
    <Wrapper>
       <div className="stars">{tempStars}</div>
       <div className="reviews">{reviews} reviews</div>
    </Wrapper>
  )
}

const Wrapper = styled.div `
 display:flex;
 align-items:center;
 span{
     color:#f2b01e;
     font-size: 1rem;
     margin-right:0.3rem;
 }

margin-bottom: 0.5rem;
`

export default Stars