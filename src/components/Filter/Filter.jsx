import React from 'react';
import PropTypes from 'prop-types';
import { Styled } from './StyleFilter';

const Filter = ({ filter, onChangeInput }) => {
  return (
    <>
      <label>
        Find contacts by name
        <br />
        <Styled.Input
          onChange={onChangeInput}
          value={filter}
          type="text"
          name="filter"
        />
      </label>
      <br />
    </>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChangeInput: PropTypes.func.isRequired,
};

export default Filter;
