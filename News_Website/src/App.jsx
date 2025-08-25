import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { NewsProvider } from './contexts/NewsContext';
import { BookmarkProvider } from './contexts/BookmarkContext';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import NewsList from './components/NewsList';
import CountryFilter from './components/CountryFilter';
import SortFilter from './components/SortFilter';
import ThemeToggle from './components/ThemeToggle';

function App() {
  return (
    <ThemeProvider>
      <NewsProvider>
        <BookmarkProvider>
          <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors">
            <Navbar />
            
            <main className="max-w-7xl mx-auto px-4 py-6">
              <div className="flex flex-col md:flex-row justify-between items-center mb-6 space-y-4 md:space-y-0">
                <div className="flex items-center space-x-4">
                  <CountryFilter />
                  <SortFilter />
                  <ThemeToggle />
                </div>
                
                <SearchBar />
              </div>
              
              <NewsList />
            </main>
          </div>
        </BookmarkProvider>
      </NewsProvider>
    </ThemeProvider>
  );
}

export default App;