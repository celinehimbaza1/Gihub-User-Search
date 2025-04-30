import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import UserCard from './components/UserCard';

function App() {
  const [username, setUsername] = useState('octocat');
  const [userData, setUserData] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  const fetchUser = async (user) => {
    try {
      const res = await fetch(`https://api.github.com/users/${user}`);
      const data = await res.json();
      if (!data.message) {
        setUserData(data);
      } else {
        setUserData(null);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUser(username);
  }, [username]);

  useEffect(() => {
    const html = document.documentElement;
    if (darkMode) {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
  }, [darkMode]);

  const handleSearch = (value) => {
    setUsername(value);
  };

  return (
    <div className="min-h-screen bg-[#F6F8FF] dark:bg-[#141D2F] text-black dark:text-white p-4 md:p-10 font-sans transition-colors">
      <div className="max-w-3xl mx-auto">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">devfinder</h1>
          <button
            className="uppercase text-sm tracking-widest"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? 'Light' : 'Dark'}
          </button>
        </header>
        <SearchBar onSearch={handleSearch} />
        {userData && <UserCard user={userData} />}
      </div>
    </div>
  );
}

export default App;
