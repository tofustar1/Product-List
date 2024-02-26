import React, {useState} from 'react';
import {Button, Form} from "react-bootstrap";
import {useAppDispatch} from "../../app/hook";
import {getProductsByFilter} from "../../store/productsThunk";

const FilterFields = () => {
  const dispatch = useAppDispatch();

  const [name, setName] = useState<string>('');
  const [brand, setBrand] = useState('');
  const [price, setPrice] = useState('');

  const onClickHandlerName = () => {
    dispatch(getProductsByFilter({
      key: "product",
      value: name
    }));
    setName('');
  };

  const onClickHandlerBrand = () => {
    dispatch(getProductsByFilter({
      key: "brand",
      value: brand
    }));
    setBrand('');
  };


  const onClickHandlerPrice = () => {
    dispatch(getProductsByFilter({
      key: "price",
      value: Number(price)
    }));
    setPrice('');
  };


  return (
      <div className="w-50">
        <Form.Group className="mb-3 d-flex">
          <Form.Control
              type="text"
              placeholder="Filter by product name"
              value={name}
              name="product"
              onChange={e => setName(e.target.value)}
          />
          <Button
              type="button"
              variant="dark"
              className="ms-2"
              onClick={onClickHandlerName}
          >
            Filter
          </Button>
        </Form.Group>
        <Form.Group className="mb-3 d-flex">
          <Form.Control
              type="text"
              placeholder="Filter by brand name"
              value={brand}
              name="brand"
              onChange={e => setBrand(e.target.value)}
          />
          <Button
              type="button"
              variant="dark"
              className="ms-2"
              onClick={onClickHandlerBrand}
          >
            Filter
          </Button>
        </Form.Group>
        <Form.Group className="mb-3 d-flex">
          <Form.Control
              type="text"
              placeholder="Filter by price"
              value={price}
              name="price"
              onChange={e => setPrice(e.target.value)}
          />
          <Button
              type="button"
              variant="dark"
              className="ms-2"
              onClick={onClickHandlerPrice}
          >Filter</Button>
        </Form.Group>
      </div>
  );
};

export default FilterFields;