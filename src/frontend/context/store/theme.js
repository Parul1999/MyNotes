import { createContext, useContext, useState } from "react";

const themeContext = createContext();

const ThemeChanger = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme")||"light-theme");
  const themeChange = () => {
    if (theme === "light-theme") {

      localStorage.setItem("theme","dark-theme")
      setTheme("dark-theme");
    } else {

      localStorage.setItem("theme","light-theme")
            setTheme("light-theme");
    }
  };

  return (
    <themeContext.Provider value={{ theme, themeChange }}>
      {children}
    </themeContext.Provider>
  );
};

const UseTheme = () => useContext(themeContext);

export { ThemeChanger, UseTheme };
        