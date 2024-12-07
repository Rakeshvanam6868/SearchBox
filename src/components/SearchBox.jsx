// /src/components/SearchBox.jsx
import PropTypes from 'prop-types';
import React from 'react';

const SearchBox = ({ query, setQuery }) => {
  return (
    <input
      type="text"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      placeholder="Search..."
      className="w-full p-3 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  );
};

SearchBox.propTypes = {
  query: PropTypes.string.isRequired,
  setQuery: PropTypes.func.isRequired
};

export default SearchBox;
