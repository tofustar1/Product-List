import React, {useEffect, useState} from 'react';
import {Container, Row, Spinner} from "react-bootstrap";
import {useAppDispatch, useAppSelector} from "../../app/hook";
import {selectLoading, selectProducts} from "../../store/productsSlice";
import {getProductsInfo} from "../../store/productsThunk";
import Product from "../../components/Product/Product";
import PaginationProducts from "../../components/Pagination/PaginationProducts";

const Products = () => {
  const [offsetPage, setOffsetPage] = useState(0);
  const dispatch = useAppDispatch();
  const products = useAppSelector(selectProducts);
  const loading = useAppSelector(selectLoading);

  useEffect(() => {
    dispatch(getProductsInfo(offsetPage));
  }, [dispatch, offsetPage]);

  const nextPageHandler = () => setOffsetPage(prevState => prevState + 50);
  const prevPageHandler = () => setOffsetPage(prevState => prevState - 50);

  return (
      <Container>
        {
          loading ?
              <Spinner animation="border" variant="dark" />
              :
              <>
                <PaginationProducts
                    offsetPage={offsetPage}
                    nextPage={nextPageHandler}
                    prevPage={prevPageHandler}
                />
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
              </>
        }
      </Container>
  );
};

export default Products;