import React, {useEffect} from 'react';
import {Container, Row, Spinner} from "react-bootstrap";
import {useAppDispatch, useAppSelector} from "../../app/hook";
import {selectLoading, selectProducts} from "../../store/productsSlice";
import {getProductsInfo} from "../../store/productsThunk";
import Product from "../../components/Product/Product";

const Products = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector(selectProducts);
  const loading = useAppSelector(selectLoading);

  useEffect(() => {
    dispatch(getProductsInfo());
  }, [dispatch]);


  return (
      <Container>
        {
          loading ?
              <Spinner animation="border" variant="dark" />
              :
              <Row>
                {products.map((product) => (
                    <Product
                        key={product.id}
                        id={product.id}
                        product={product.product}
                        brand={product.brand}
                        price={product.price}
                    />
                ))}
              </Row>
        }
      </Container>
  );
};

export default Products;