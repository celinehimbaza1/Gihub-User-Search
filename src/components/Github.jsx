import { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import UserCard from "./UserCard";
import { Moon, Sun } from "lucide-react";

function Github() {
  const [user, setUser] = useState(null);
  const [theme, setTheme] = useState("light");
  const [error, setError] = useState(false);

  const fetchUser = async (username) => {
    setError(false);
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (response.status === 404) {
        setError(true);
        setUser(null);
      } else {
        const data = await response.json();
        setUser(data);
      }
    } catch (err) {
      console.error("Error fetching user:", err);
      setError(true);
    }
  };

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  useEffect(() => {
    fetchUser("octocat"); // default user
    document.documentElement.classList.add("transition-colors", "duration-300");
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, []);

  return (
    <div className="min-h-screen font-mono bg-[#F6F8FF] dark:bg-[#141D2F] text-gray-900 dark:text-white transition-colors">
      <div className="max-w-3xl mx-auto p-6">
        <header className="flex justify-between items-center mb-8">
          <h1 className="font-bold text-2xl">devfinder</h1>
          <button
            onClick={toggleTheme}
            className="text-sm tracking-widest font-semibold flex items-center gap-2"
          >
            {theme === "light" ? (
              <>
                <Moon className="w-5 h-5" />
                DARK
              </>
            ) : (
              <>
                <Sun className="w-5 h-5" />
                LIGHT
              </>
            )}
          </button>
        </header>

        <SearchBar fetchUser={fetchUser} error={error} />
        {user && <UserCard user={user} />}
      </div>
    </div>
  );
}

export default Github;
