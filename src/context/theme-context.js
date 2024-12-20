import { createContext, useContext, useReducer, useEffect } from "react";
import themeReducer from "./themeReducer";

export const ThemeContext = createContext();

const initialThemeState = JSON.parse(localStorage.getItem("themeSettings")) || {
  primary: "color-4",
  background: "bg-2",
  // language: "en",
};

export const ThemeProvider = ({ children }) => {
  const [themeState, dispatchTheme] = useReducer(
    themeReducer,
    initialThemeState
  );

  const themeHandler = (buttonClassName) => {
    dispatchTheme({ type: buttonClassName });
  };

  //Save theme settings to local storage
  useEffect(() => {
    localStorage.setItem("themeSettings", JSON.stringify(themeState));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [themeState.primary, themeState.background /*, themeState.language*/]);

  return (
    <ThemeContext.Provider value={{ themeState, themeHandler }}>
      {children}
    </ThemeContext.Provider>
  );
};

//Hook to use Theme context wherever we want
export const useThemeContext = () => {
  return useContext(ThemeContext);
};
