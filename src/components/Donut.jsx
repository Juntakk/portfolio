import React, { useState, useCallback, useEffect } from "react";
import { arc, pie } from "d3-shape";
import { easeExpOut } from "d3-ease";
import sortBy from "lodash/sortBy";
import { NodeGroup } from "react-move";
import "./donut.css";
import { useLanguage } from "../theme/LanguageContext";

const view = [900, 550]; // [width, height]
const trbl = [0, 0, 0, 0]; // [top, right, bottom, left] margins
const dims = [view[0] - trbl[1] - trbl[3], view[1] - trbl[0] - trbl[2]];
const radius = (dims[1] / 2) * 0.7;

const pieLayout = pie()
  .value((d) => d.value)
  .sort(null);
const innerArcPath = arc()
  .innerRadius(radius * 0.8)
  .outerRadius(radius * 1.05);
const outerArcPath = arc()
  .innerRadius(radius * 1.2)
  .outerRadius(radius * 1.2);
const mid = (d) => Math.PI > d.startAngle + (d.endAngle - d.startAngle);
const getRandom = (min, max) =>
  Math.floor(Math.random() * (max - (min + 1))) + min;

const mockData = [
  { name: "Code" },
  { name: "Volleyball" },
  { name: "Passion" },
  { name: "Backend" },
  { name: "Design" },
  { name: "Frontend" },
  { name: "Geek" },
  { name: "Technique" },
];

const getArcs = () => {
  const data = mockData
    .slice(0, 8)
    .map(({ name }) => ({ name, value: getRandom(10, 100) }));

  return pieLayout(sortBy(data, (d) => d.name));
};

const Donut = () => {
  const [arcs, setArcs] = useState(getArcs());
  const language = useLanguage();

  const update = useCallback(() => {
    setArcs(getArcs());
  }, []);

  useEffect(() => {
    const intervalId = setInterval(update, 3000);
    return () => clearInterval(intervalId);
  }, [update]);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="donut_container">
      <div>
        <svg className="donut" width={view[0]} height={view[1]}>
          <g transform={`translate(${dims[0] / 2}, ${dims[1] / 2})`}>
            <NodeGroup
              data={arcs}
              keyAccessor={(d) => d.data.name}
              start={({ startAngle }) => ({
                startAngle,
                endAngle: startAngle,
              })}
              enter={({ endAngle }) => ({
                endAngle: [endAngle],
                timing: { duration: 1000, delay: 350, ease: easeExpOut },
              })}
              update={({ startAngle, endAngle }) => ({
                startAngle: [startAngle],
                endAngle: [endAngle],
                timing: { duration: 1350, ease: easeExpOut },
              })}
            >
              {(nodes) => (
                <g>
                  {nodes.map(({ key, data, state }) => {
                    const p1 = outerArcPath.centroid(state);
                    const p2 = [
                      mid(state) ? p1[0] + radius * 0.5 : p1[0] - radius * 0.5,
                      p1[1],
                    ];
                    const pathClass = `arc-path-${data.data.name}`;
                    return (
                      <g key={key}>
                        <path
                          d={innerArcPath(state)}
                          className={pathClass}
                          opacity={0.9}
                        />
                        <text
                          dy="4px"
                          fontSize="25px"
                          transform={`translate(${p2.toString()})`}
                          textAnchor={mid(state) ? "start" : "end"}
                        >
                          {data.data.name}
                        </text>
                        <polyline
                          fill="none"
                          points={`${innerArcPath.centroid(
                            state
                          )},${p1},${p2.toString()}`}
                        />
                      </g>
                    );
                  })}
                </g>
              )}
            </NodeGroup>
          </g>
        </svg>
      </div>
      {/* Add the header__cta section */}
      {/* <div className="header__cta">
        <button className="ui-btn" onClick={() => scrollToSection("contact")}>
          <a href="#contact" className="">
            Contact
          </a>
        </button>
        <button className="ui-btn" onClick={() => scrollToSection("portfolio")}>
          <a href="#portfolio" className="">
            {language === "en" ? "Projects" : "Projets"}
          </a>
        </button>
      </div> */}
    </div>
  );
};

export default Donut;
