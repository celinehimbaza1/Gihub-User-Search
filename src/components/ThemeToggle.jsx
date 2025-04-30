import React from 'react';
import { Moon, Sun } from 'lucide-react';

export default function ThemeToggle({ theme, setTheme }) {
  return (
    <button
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className="flex items-center gap-2 text-sm font-semibold"
    >
      {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
      <span className="uppercase">{theme === 'light' ? 'DARK' : 'LIGHT'}</span>
    </button>
  );
}
