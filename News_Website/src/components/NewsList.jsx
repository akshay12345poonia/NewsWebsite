import React from 'react';
import { useNews } from '../contexts/NewsContext';
import { useInfiniteScroll } from '../hooks/useInfiniteScroll';
import NewsItem from './NewsItem';
import LoadingSpinner from './ui/LoadingSpinner';

const NewsList = () => {
  const { articles, loading, error, hasMore, loadMore } = useNews();

  useInfiniteScroll(loadMore, hasMore);

  if (error) {
    return (
      <div className="text-center py-8">
        <p className="text-red-500 dark:text-red-400">Error: {error}</p>
      </div>
    );
  }

  if (!loading && articles.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-600 dark:text-gray-400">No articles found.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article, index) => (
          <NewsItem key={`${article.url}-${index}`} article={article} />
        ))}
      </div>
      
      {loading && (
        <div className="flex justify-center py-8">
          <LoadingSpinner />
        </div>
      )}
      
      {!hasMore && articles.length > 0 && (
        <div className="text-center py-8">
          <p className="text-gray-600 dark:text-gray-400">
            No more articles to load.
          </p>
        </div>
      )}
    </div>
  );
};

export default NewsList;