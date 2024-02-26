import React from 'react';
import {Card, Col} from "react-bootstrap";
import {IProduct} from "../../types";

const Product : React.FC<IProduct> = ({id, product, price, brand}) => {
  return (
      <Col xs={12} md={6} xl={4} className="mb-3">
        <Card className="h-100">
          <Card.Header>
            <Card.Text>
              Id: {id}
            </Card.Text>
          </Card.Header>
          <Card.Body>
            <Card.Text as={'h5'}>Название: {product}</Card.Text>
            <Card.Text>Price: {price}</Card.Text>
            <Card.Text>Brand: {brand ? brand : 'Не указан'}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
  );
};

export default Product;