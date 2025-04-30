import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(input);
    setInput('');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white dark:bg-[#1E2A47] p-2 md:p-4 rounded-xl shadow-md flex items-center gap-4"
    >
      <input
        type="text"
        placeholder="Search the username"
        className="flex-1 bg-transparent outline-none text-sm md:text-base placeholder-gray-500 dark:placeholder-gray-400"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
