import React, { useState } from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  onSearch: (query: string) => void;
  placeholder?: string;
  className?: string;
  initialValue?: string;
}

const SearchBar = ({
  onSearch,
  placeholder = 'Search beaches...',
  className = '',
  initialValue = '',
}: SearchBarProps) => {
  const [query, setQuery] = useState(initialValue);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };
  
  return (
    <form onSubmit={handleSubmit} className={`relative ${className}`}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder}
        className="w-full py-3 pl-12 pr-4 text-gray-700 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
      />
      <button
        type="submit"
        className="absolute inset-y-0 left-0 flex items-center pl-4 text-gray-500"
      >
        <Search className="h-5 w-5" />
      </button>
    </form>
  );
};

export default SearchBar;