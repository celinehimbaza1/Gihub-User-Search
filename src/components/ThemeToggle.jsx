import React from 'react';
import { Moon, Sun } from 'lucide-react';

const ThemeToggle = ({ darkMode, setDarkMode }) => {
  return (
    <button
      className="uppercase text-sm tracking-widest flex items-center gap-2"
      onClick={() => setDarkMode(!darkMode)}
    >
      {darkMode ? <Sun size={18} /> : <Moon size={18} />}
      {darkMode ? 'Light' : 'Dark'}
    </button>
  );
};

export default ThemeToggle;
