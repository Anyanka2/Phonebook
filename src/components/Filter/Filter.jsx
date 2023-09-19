import React from 'react';
import { FilterCont, Label, Input } from './Filter.styled';
import { getFilter, setFilter } from 'redux/filterSlice';
import { useDispatch, useSelector } from 'react-redux';

export function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  const onChange = event => {
    dispatch(setFilter(event.target.value));
  };
  
  return (
    <FilterCont>
      <Label>
        Find contact by name or phone number
        <Input type="text" value={filter} onChange={onChange} />
      </Label>
    </FilterCont>
  );
}


