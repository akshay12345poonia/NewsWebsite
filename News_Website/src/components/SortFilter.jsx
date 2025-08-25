import React from 'react';
import { SORT_OPTIONS } from '../utils/constants';
import { useNews } from '../contexts/NewsContext';

const SortFilter = () => {
  const { searchArticles } = useNews();

  return (
    <select
      onChange={(e) => searchArticles('', e.target.value)}
      className="px-4 py-2 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
    >
      {SORT_OPTIONS.map(option => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default SortFilter;