import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import ThemeToggle from './components/ThemeToggle';
import UserCard from './components/UserCard';

function Github() {
  const [darkMode, setDarkMode] = useState(() => {
    const stored = localStorage.getItem('darkMode');
    return stored === 'true';
  });

  const [username, setUsername] = useState('octocat');
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState('');

  const fetchUser = async (user) => {
    setError('');
    if (!user.trim()) {
      setUserData(null);
      setError('Please enter a username.');
      return;
    }

    try {
      const res = await fetch(`https://api.github.com/users/${user}`);
      const data = await res.json();

      if (res.status === 404 || data.message === 'Not Found') {
        setUserData(null);
        setError('User not found.');
      } else {
        setUserData(data);
      }
    } catch (err) {
      console.error('Fetch error:', err);
      setUserData(null);
      setError('Something went wrong. Please try again.');
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
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-[#F6F8FF] dark:bg-[#141D2F] text-black dark:text-white p-4 md:p-10 font-sans transition-colors">
      <div className="max-w-3xl mx-auto">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">devfinder</h1>
          <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
        </header>

        <SearchBar onSearch={setUsername} />

        {error && (
          <p className="text-red-500 text-sm mt-4 text-center">{error}</p>
        )}

        {userData && <UserCard user={userData} />}
      </div>
    </div>
  );
}

export default Github;
