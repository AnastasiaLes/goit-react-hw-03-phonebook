import React from 'react';

export const FilterField = ({ value, onChange }) => {
  return (
    <div>
      <label>Find contacts by name</label>
      <input type="text" value={value} onChange={onChange} />
    </div>
  );
};
