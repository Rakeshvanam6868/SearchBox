// /src/components/FilterBox.jsx
import PropTypes from 'prop-types';
import React from 'react';

const FilterBox = ({ filter, setFilter, categories, query }) => {
  return (
    <select
      value={filter}
      onChange={(e) => setFilter(e.target.value)}
      className="w-full p-3 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      <option value="">All Categories</option>
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};

FilterBox.propTypes = {
  filter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired,
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  query: PropTypes.string.isRequired  // Ensuring query is a required string
};

export default FilterBox;
