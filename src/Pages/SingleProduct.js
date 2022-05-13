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
import AddtoCart from '../components/AddtoCart';

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
      <div className="section-center page-100">
        <Link to="/products" className="btn">
          back to products
        </Link>
         <div className="product-center">
          <ProductImages images={images}/>
          <section className="content">
             <h2>{name}</h2>
             <Stars stars={stars} reviews={reviews}/>
             <h5 className="price">{formatPrice(price)}</h5>
             <p className="desc">{description}</p>
             <p className="info">Available:{stock>0? "in stock":"out of stock"}</p>
             <p className="info">
              SKU:<span>{uid}</span>
             </p>
             <p className="info">
               Brand: <span>{company}</span>
             </p>
             <hr />
             {stock>0?<AddtoCart/>:null}

          </section>
         </div>

      </div>
    </Wrapper>
  )
}

const Wrapper = styled.main`
  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }
  .price {
    color: var(--clr-primary-5);
  }
  .desc {
    line-height: 2;
    max-width: 45em;
  }

  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    span {
      font-weight: 700;
    }
  }
  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .price {
      font-size: 1.25rem;
    }
  }
`;

export default SingleProduct;