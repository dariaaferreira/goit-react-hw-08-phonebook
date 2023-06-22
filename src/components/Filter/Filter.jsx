import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/filterSlice';
import { getFilter } from '../../redux/selectors'

import { LabelContacts, Input } from './Filter.styled';

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const changeFilterHandler = (event) => {
    const newFilter = event.currentTarget.value.toLowerCase().trim();
    dispatch(changeFilter(newFilter));
  };

  return (
    <LabelContacts>
      Find contacts by name
      <Input type="text" value={filter} onChange={changeFilterHandler} />
    </LabelContacts>
  );
};

export default Filter;
