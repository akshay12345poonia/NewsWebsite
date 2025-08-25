
import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import Button from './ui/Button';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="small"
      onClick={toggleTheme}
      className="p-2"
    >
      {isDark ? (
        <Sun size={20} className="text-yellow-400" />
      ) : (
        <Moon size={20} className="text-gray-800 dark:text-gray-200" />
      )}
    </Button>
  );
};

export default ThemeToggle;