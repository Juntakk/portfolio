/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState, useRef } from "react";
import "./services.css";

const ProgressBar = (props) => {
  const { completed } = props;
  const [dynamicHeight, setDynamicHeight] = useState("15px");
  const [progressWidth, setProgressWidth] = useState(0);
  const progressBarRef = useRef(null);

  useEffect(() => {
    const updateProgressHeight = () => {
      if (window.innerWidth < 1400) {
        setDynamicHeight("10px");
      } else {
        setDynamicHeight("15px");
      }
    };

    updateProgressHeight();

    window.addEventListener("resize", updateProgressHeight);

    return () => {
      window.removeEventListener("resize", updateProgressHeight);
    };
  }, []);

  useEffect(() => {
    // Use Intersection Observer to detect when the progress bar is in view
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setProgressWidth(completed); // Trigger animation when in view
        }
      },
      { threshold: 0.2 } // Adjust threshold as needed
    );

    if (progressBarRef.current) {
      observer.observe(progressBarRef.current);
    }

    return () => {
      if (progressBarRef.current) {
        observer.unobserve(progressBarRef.current);
      }
    };
  }, [completed]);

  const style = {
    height: dynamicHeight,
    width: `${progressWidth}%`,
    background: "var(--color-primary)",
    borderRadius: "10px",
    textAlign: "right",
    marginTop: "10px",
    marginBottom: "10px",
    padding: "3px",
    transition: "width 1s ease-out",
  };

  return (
    <>
      <div style={style} ref={progressBarRef}>
        <div className="percentage">{completed}%</div>
      </div>
    </>
  );
};

export default ProgressBar;
