import React from 'react';
import SearchPage from './pages/SearchPage';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center ">
      <div className="w-full max-w-lg p-6 bg-white rounded-lg m-40 shadow-md">
        <SearchPage />
      </div>
    </div>
  );
};

export default App;
