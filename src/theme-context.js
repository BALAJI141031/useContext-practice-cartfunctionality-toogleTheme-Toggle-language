import { createContext, useState, useContext } from "react";

const themeContext = createContext({ theme: true });

const ThemeProvider = ({ children }) => {
  const [theme, updateTheme] = useState(false);
  console.log(theme);
  const setTheme = () => {
    updateTheme((theme) => !theme);
  };

  return (
    <themeContext.Provider value={{ theme, setTheme }}>
      {children}
    </themeContext.Provider>
  );
};

const useTheme = () => useContext(themeContext);

export { ThemeProvider, useTheme };
