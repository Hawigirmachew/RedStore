import React from "react";

function Dropdown({ handleSelecteChage, options, value }) {
  return (
    <select value={value} onChange={handleSelecteChage}>
      {options.map((option) => (
        <option key={option.id} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

export default Dropdown;
