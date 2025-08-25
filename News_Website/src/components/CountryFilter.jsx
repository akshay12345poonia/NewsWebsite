import React from 'react';
import { COUNTRIES } from '../utils/constants';
import { useNews } from '../contexts/NewsContext';

const CountryFilter = () => {
  const { getHeadlines } = useNews();

  return (
    <select
      onChange={(e) => getHeadlines(e.target.value)}
      className="px-4 py-2 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
    >
      {COUNTRIES.map(country => (
        <option key={country.code} value={country.code}>
          {country.name}
        </option>
      ))}
    </select>
  );
};

export default CountryFilter;