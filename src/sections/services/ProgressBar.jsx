/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState, useRef } from "react";
import "./progress_bar.css";

const ProgressBar = (props) => {
  const { title } = props;
  const [isVisible, setIsVisible] = useState(false);

  const progressBarRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 1 } // Trigger when 100% of the element is visible
    );

    if (progressBarRef.current) {
      observer.observe(progressBarRef.current);
    }

    return () => {
      if (progressBarRef.current) {
        observer.unobserve(progressBarRef.current);
      }
    };
  }, []);

  return (
    <div ref={progressBarRef}>
      <div className="skill-box">
        <div className="skill-bar">
          <span className={`skill-per ${title} ${isVisible ? "animate" : ""}`}>
            {/* <span className="tooltip">{level}%</span> */}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
