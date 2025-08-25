import React from 'react';
import { useBookmark } from '../contexts/BookmarkContext';
import { Bookmark, BookmarkCheck } from 'lucide-react';

export const BookmarkButton = ({ article }) => {
  const { addBookmark, removeBookmark, isBookmarked } = useBookmark();
  const bookmarked = isBookmarked(article.url);

  const handleClick = () => {
    if (bookmarked) {
      removeBookmark(article.url);
    } else {
      addBookmark(article);
    }
  };

  return (
    <button
      onClick={handleClick}
      className="absolute top-2 right-2 p-2 bg-white dark:bg-gray-800 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-700"
    >
      {bookmarked ? (
        <BookmarkCheck size={20} className="text-blue-500" />
      ) : (
        <Bookmark size={20} className="text-gray-600 dark:text-gray-400" />
      )}
    </button>
  );
};