import React from 'react';

const SortControls = ({ onSort }) => {
  return (
    <select onChange={(e) => onSort(e.target.value)}>
      <option value="name">Name</option>
      <option value="price">Price</option>
    </select>
  );
};

export default SortControls;
