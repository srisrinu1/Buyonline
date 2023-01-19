import React from 'react';
import styled from 'styled-components';
import PageHero from '../components/PageHero';
import aboutImage from '../assets/hero-bcg.jpeg';

const AboutPage = () => {
  return (
    <main>
        <PageHero title='about'/>
        <Wrapper className='page section section-center'>
          <img src={aboutImage}/>
          <article>
            <div className="title">
            <h2>Our Story</h2>
            <div className="underline"></div>
            </div>
            <p>
            A one stop store for all your furniture needs. Combining the
            traditional practices with the modern technologies. Our mission is
            to create elegant and functional furniture, that become an integral
            part of your life. Love to have you tag along our journey and become
            a member of Comfy-Sloth.
          </p>
          </article>
        </Wrapper>
    </main>
  )
}

const Wrapper=styled.section`
 display:grid;
 gap:4rem;
 img{
    width:100%;
    display:block;
    border-radius: var(--radius);
    height: 500px;
    object-fit:cover;
 }
 p{
    line-height:2;
    max-width:45em;
    margin:0 auto;
    margin-top:2rem;
    color: var(--clr-grey-5);
 }
 .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }

  @media(min-width:992px){
    grid-template-columns:1fr 1fr;
  }
`

export default AboutPage
