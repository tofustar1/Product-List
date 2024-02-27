import React, {ChangeEvent, useState} from 'react';
import {useAppDispatch} from "../../app/hook";
import {getProductsByFilter} from "../../store/productsThunk";
import {IFilters} from "../../types";
import FilterField from "./FilterField";
import {FILTER_FIELDS} from "../../constants";

const initialState : IFilters = {
  product: '',
  brand: '',
  price: ''
}
const FilterFields = () => {
  const dispatch = useAppDispatch();
  const [filters, setFilters] = useState(initialState);

  const onChangeEventHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setFilters(prevState => ({
          ...prevState,
          [name]: value
        }
    ));
  };

  const onButtonClickHandler = (name: string) => {
    dispatch(getProductsByFilter({
      key: name,
      value: name === "price" ? Number(filters[name]) : filters[name]
    }));
    setFilters(initialState);
  };

  return (
      <div className="w-50">
        {
          FILTER_FIELDS.map(filterName => (
             <FilterField
                 key={filterName}
                 filterValue={filters[filterName]}
                 filterName={filterName}
                 onChange={onChangeEventHandler}
                 onButtonClick={onButtonClickHandler}
             />
          ))
        }
      </div>
  );
};

export default FilterFields;