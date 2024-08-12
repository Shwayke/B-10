'use client';
import { FaLightbulb , FaRegLightbulb} from 'react-icons/fa';
import { useTheme } from 'next-themes';

// Functional component to render a theme toggle button
function DarkLightButthon() {
  // Destructure theme and setTheme from useTheme hook
  const { theme, setTheme } = useTheme();

   // Function to toggle between light and dark themes
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  // Check if the current theme is dark mode
  const isDarkMode = theme === 'dark';

  return (
    <button
      className="relative inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 cursor-pointer focus:outline-none transition-colors duration-200"
      onClick={toggleTheme}
    >
      <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-200">
        <FaLightbulb 
          className={`w-6 h-6 text-yellow-500 ${isDarkMode ? 'opacity-100' : 'opacity-0'}`} 
        />
      </div>
      <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-200">
        <FaRegLightbulb 
          className={`w-6 h-6 text-blue-400 ${isDarkMode ? 'opacity-0' : 'opacity-100'}`} 
        />
      </div>
    </button>
  );
}

export default DarkLightButthon;