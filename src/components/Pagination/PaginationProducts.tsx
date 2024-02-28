import React from 'react';
import {Pagination} from 'react-bootstrap';

interface Props {
  offsetPage : number;
  nextPage: () => void;
  prevPage: () => void;
}
const PaginationProducts : React.FC<Props> = ({offsetPage, nextPage, prevPage}) => {
      return (
          <Pagination>
            <Pagination.Prev
                disabled={!offsetPage}
                onClick={prevPage}
            >&lt; Prev</Pagination.Prev>
            <Pagination.Next
                onClick={nextPage}
            >Next &gt;</Pagination.Next>
          </Pagination>
      );
};

export default PaginationProducts;