import React from 'react';
import { BookmarkButton } from './BookmarkButton';
import { Calendar, User } from 'lucide-react';

const NewsItem = ({ article }) => {
  const {
    title,
    description,
    urlToImage,
    url,
    publishedAt,
    author,
    source
  } = article;

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <article className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative">
        <img
          src={urlToImage || '/placeholder-image.jpg'}
          alt={title}
          className="w-full h-48 object-cover"
          onError={(e) => {
            e.target.src = '/placeholder-image.jpg';
          }}
        />
        <BookmarkButton article={article} />
      </div>
      
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2 line-clamp-2">
          {title}
        </h2>
        
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
          {description}
        </p>
        
        <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <User size={16} className="mr-1" />
              <span>{author || source?.name || 'Unknown'}</span>
            </div>
            
            <div className="flex items-center">
              <Calendar size={16} className="mr-1" />
              <span>{formatDate(publishedAt)}</span>
            </div>
          </div>
          
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300"
          >
            Read more →
          </a>
        </div>
      </div>
    </article>
  );
};

export default NewsItem;