import React, { useState } from 'react';
import { useDebounce } from '../hooks/useDebounce';
import { useNews } from '../contexts/NewsContext';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const debouncedQuery = useDebounce(query, 500);
  const { searchArticles } = useNews();

  React.useEffect(() => {
    if (debouncedQuery) {
      searchArticles(debouncedQuery);
    }
  }, [debouncedQuery, searchArticles]);

  return (
    <div className="relative max-w-md mx-auto">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for news..."
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
      />
    </div>
  );
};

export default SearchBar;