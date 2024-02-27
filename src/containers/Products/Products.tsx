import React, {useEffect, useState} from 'react';
import {Container, Row, Spinner} from "react-bootstrap";
import {useAppDispatch, useAppSelector} from "../../app/hook";
import {selectError, selectLoading, selectProducts} from "../../store/productsSlice";
import {getProductsInfo} from "../../store/productsThunk";
import Product from "../../components/Product/Product";
import PaginationProducts from "../../components/Pagination/PaginationProducts";
import FilterFields from "../../components/FilterFields/FilterFields";

const Products = () => {
  const [offsetPage, setOffsetPage] = useState(0);
  const dispatch = useAppDispatch();
  const products = useAppSelector(selectProducts);
  const loading = useAppSelector(selectLoading);
  const error = useAppSelector(selectError);

  useEffect(() => {
    dispatch(getProductsInfo(offsetPage));
  }, [dispatch, offsetPage]);

  useEffect(() => {
    if (error) {
      console.log("ID error: " + error);
      dispatch(getProductsInfo(offsetPage));
    }
  }, [error, dispatch, offsetPage]);

  const nextPageHandler = () => setOffsetPage(prevState => prevState + 50);
  const prevPageHandler = () => setOffsetPage(prevState => prevState - 50);

  return (
      <Container>
        {
          loading ?
              <Spinner animation="border" variant="dark"/>
              :
              <>
                <FilterFields/>
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