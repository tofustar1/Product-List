import React, {ChangeEvent} from 'react';
import {Button, Form} from "react-bootstrap";

interface Props {
  filterValue: string;
  filterName: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onButtonClick: (arg: string) => void;
}
const FilterField : React.FC<Props> = ({filterValue, onChange, onButtonClick, filterName}) => {

  return (
      <Form.Group className="mb-3 d-flex">
        <Form.Control
            type="text"
            placeholder={`Filter by ${filterName}`}
            value={filterValue}
            name={filterName}
            onChange={onChange}
        />
        <Button
            type="button"
            variant="dark"
            className="ms-2"
            onClick={() => onButtonClick(filterName)}
            disabled={filterValue.length < 3}
        >
          Filter
        </Button>
      </Form.Group>
  );
};

export default FilterField;