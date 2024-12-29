import Navbar from "./sections/navbar/Navbar";
import Header from "./sections/header/Header";
import About from "./sections/about/About";
import Services from "./sections/services/Services";
import Portfolio from "./sections/portfolio/Portfolio";
import Contact from "./sections/contact/Contact";
import Footer from "./sections/footer/Footer";
import FloatingNav from "./sections/floating-nav/FloatingNav";
import Themes from "./theme/Themes";
import { useThemeContext } from "./context/theme-context";
import { useRef, useState, useEffect } from "react";
import { LanguageProvider } from "./theme/LanguageContext";
import Loader from "./components/Loader";

const App = () => {
  const { themeState } = useThemeContext();
  const mainRef = useRef();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const loadingElement = document.querySelector(".loading-screen");
    if (loadingElement) {
      setTimeout(() => {
        loadingElement.classList.add("fade-in");
        setTimeout(() => setIsLoading(false), 2000); // Matches transition time
      }, 2000);
    } else {
      setIsLoading(false); // Fallback if element doesn't exist
    }
  }, []);

  return (
    <LanguageProvider>
      {isLoading && <Loader />}
      <main
        className={`${themeState.primary} ${themeState.background}`}
        ref={mainRef}
        style={{
          backgroundColor: isLoading ? "#111" : "inherit", // Dark background when loading
          opacity: isLoading ? 0.25 : 1,
          visibility: isLoading ? "hidden" : "visible",
          transition: "opacity 2s ease-out, background-color 1s ease-out", // Smooth transition
          width: "100%", // Ensure it covers the entire screen
          height: "100%", // Ensure it covers the entire screen
        }}
      >
        <Navbar />
        <Header />
        <About />
        <Portfolio />
        <Services />
        <Contact />
        <Footer />
        <Themes />
        <FloatingNav />
      </main>
    </LanguageProvider>
  );
};

export default App;
