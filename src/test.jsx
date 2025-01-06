import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const TestAOS = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 200,
      easing: "ease-in-out",
      once: false,
      mirror: true,
    });
    return () => AOS.refresh(); // Refresh on cleanup
  }, []);

  return (
    <div>
      <div style={{ height: "100vh" }}>Scroll Down</div>
      <div
        data-aos="fade-up"
        style={{ height: "200px", backgroundColor: "lightblue" }}
      >
        Test Element
      </div>
      <div style={{ height: "100vh" }}>Scroll Up</div>
    </div>
  );
};

export default TestAOS;
