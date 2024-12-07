// /src/pages/SearchPage.jsx
import React, { useState } from 'react';
import FilterBox from '../components/FilterBox';
import { data } from '../utils/data';
import SearchBox from '../components/SearchBox';
import ResultsDisplay from '../components/ResultDisplay';

const SearchPage = () => {
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState('');
  const filteredResults = data
    .filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase()) &&
      (filter === '' || item.category === filter)
    );

  return (
    <div className="p-8 max-w-lg mx-auto">
      <h1 className="text-4xl font-bold mb-6">Search Page</h1>
      <SearchBox query={query} setQuery={setQuery} />
      <FilterBox filter={filter} setFilter={setFilter} categories={['React', 'JavaScript', 'CSS']} />
      <ResultsDisplay results={filteredResults} />
    </div>
  );
};

export default SearchPage;
