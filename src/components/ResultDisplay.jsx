// /src/components/ResultsDisplay.jsx
import PropTypes from 'prop-types';
import React from 'react';

const ResultsDisplay = ({ results }) => {
  if (results.length === 0) {
    return <p>No results found</p>;
  }

  return (
    <div>
      <ul>
        {results.map((result) => (
          <li key={result.id}>
            <h3>{result.title}</h3>
            <p>{result.category}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

ResultsDisplay.propTypes = {
  results: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired
    })
  ).isRequired
};

export default ResultsDisplay;
