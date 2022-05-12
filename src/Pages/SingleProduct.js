import React,{useEffect} from 'react';
import {Link,useHistory,useParams} from 'react-router-dom';
import {useProductsContext} from '../context/product_context';
import { single_product_url as url} from '../utils/constants';
import { formatPrice } from "../utils/helpers";
import Loading from '../components/Loading';
import Error from '../components/Error';
import PageHero from '../components/PageHero';
import ProductImages from '../components/ProductImages';
import styled from 'styled-components';
import Stars from '../components/Stars';

const SingleProduct = () => {
  const {id}=useParams();
  const history=useHistory();

  const {
    singleProductLoading: loading,
    singleProductError: error,
    singleProduct: product,
    fetchSingleProduct,
  } = useProductsContext();

  useEffect(() => {
    fetchSingleProduct(`${url}${id}`);
    //eslint-disable-next-line
  }, [id]);

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        history.push("/");
      }, 3000);
    }
    //eslint-disable-next-line
  }, [error]);

  if (loading) {
    return (
      <div className="section-center page-100">
        <Loading />
      </div>
    );
  }
  if (error) {
    return <Error />;
  }

  const {
    name,
    price,
    description,
    stock,
    stars,
    reviews,
    id: uid,
    company,
    images,
  } = product;

  return (
    <Wrapper>
      <PageHero title={name} product={product}/>
      <div className="section-center page">
        <Link to="/products">
          back to products
        </Link>
         <div className="product-center">
          <ProductImages images={images}/>
          <section className="content">
             <h2>{name}</h2>
             <Stars stars={stars} reviews={reviews}/>
             <p className="desc">{description}</p>
             <p className="info">
               Brand: <span>{company}</span>
             </p>
          </section>
         </div>

      </div>
    </Wrapper>
  )
}

const Wrapper = styled.main `

`;

export default SingleProduct;