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

const App = () => {
  const { themeState } = useThemeContext();
  const mainRef = useRef();
  const [showFloatingNav, setShowFloatingNav] = useState(true);
  const [siteYPostion, setSiteYPosition] = useState(0);

  const showFloatingNavHandler = () => {
    setShowFloatingNav(true);
  };

  const hideFloatingNavHandler = () => {
    setShowFloatingNav(false);
  };

  // check if floating nav should be shown or hidden
  const floatingNavToggleHandler = () => {
    if (!mainRef.current) return;
    // check if we scrolled up or down at least 20px
    if (
      siteYPostion < mainRef?.current?.getBoundingClientRect().y - 5 ||
      siteYPostion > mainRef?.current?.getBoundingClientRect().y + 5
    ) {
      showFloatingNavHandler();
    } else {
      hideFloatingNavHandler();
    }

    setSiteYPosition(mainRef?.current?.getBoundingClientRect().y);
  };

  useEffect(() => {
    const checkYPosition = setInterval(floatingNavToggleHandler, 1000);
    return () => clearInterval(checkYPosition);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <LanguageProvider>
      <main
        className={`${themeState.primary} ${themeState.background}`}
        ref={mainRef}
      >
        <Navbar />
        <Header />
        <About />
        <Portfolio />
        <Services />
        <Contact />
        <Footer />
        <Themes />
        {showFloatingNav && <FloatingNav />}
      </main>
    </LanguageProvider>
  );
};

export default App;
