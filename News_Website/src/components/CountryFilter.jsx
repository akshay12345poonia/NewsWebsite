
import React from 'react';
import Dropdown from './ui/Dropdown';
import { COUNTRIES } from '../utils/constants';
import { useNews } from '../contexts/NewsContext';

const CountryFilter = () => {
  const { getHeadlines, currentCountry } = useNews();
  
  const countryOptions = COUNTRIES.map(country => ({
    value: country.code,
    label: country.name
  }));

  const handleCountryChange = (countryCode) => {
    getHeadlines(countryCode);
  };

  return (
    <Dropdown
      options={countryOptions}
      value={currentCountry}
      onChange={handleCountryChange}
      className="w-48"
    />
  );
};

export default CountryFilter;