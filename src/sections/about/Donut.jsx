import React, { useState, useCallback, useEffect, useRef } from "react";
import { arc, pie } from "d3-shape";
import { easeExpOut } from "d3-ease";
import sortBy from "lodash/sortBy";
import { NodeGroup } from "react-move";
import AboutImage from "../../assets/header2-removebg.png";
import "./donut.css";
import useVisibility from "../../hooks/useVisibility";

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

const pieLayout = pie()
  .value((d) => d.value)
  .sort(null);

const Donut = () => {
  const [arcs, setArcs] = useState([]);
  const [isTablet, setIsTablet] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const updateArcs = useCallback(() => {
    const data = mockData.map(({ name }) => ({
      name,
      value: getRandom(10, 100),
    }));
    setArcs(pieLayout(sortBy(data, (d) => d.name)));
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsTablet(window.innerWidth < 1400);
      setIsMobile(window.innerWidth < 700);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    updateArcs();
    const interval = setInterval(updateArcs, 2000);
    return () => clearInterval(interval);
  }, [updateArcs]);

  const view = isMobile ? [250, 250] : isTablet ? [850, 850] : [1200, 1200];
  const dims = [view[0], view[1]];
  const radius = isMobile ? 65 : isTablet ? 150 : 400;
  const imageSize = radius * 1.4;
  const fontSize = isMobile ? "6px" : isTablet ? "23px" : "50px";

  const innerArcPath = arc()
    .innerRadius(radius * 0.7)
    .outerRadius(radius * 0.9);
  const outerArcPath = arc()
    .innerRadius(radius * 1.01)
    .outerRadius(radius * 1.01);
  const mid = (d) => Math.PI > d.startAngle + (d.endAngle - d.startAngle);
  const myRef = useRef();
  const isVisible = useVisibility(myRef);

  return (
    <section id="about" ref={myRef}>
      <svg
        className="donut"
        width="100%"
        length="auto"
        viewBox={`0 0 ${dims[0]} ${dims[1]}`}
      >
        <g transform={`translate(${dims[0] / 2}, ${dims[1] / 2})`}>
          <image
            className={`about__image ${
              isVisible ? "magictime slideRightReturn" : "none"
            }`}
            href={AboutImage}
            x={-imageSize / 2}
            y={-imageSize / 2}
            width={imageSize}
            height={imageSize}
            style={{
              pointerEvents: "none",
              position: "relative",
              zIndex: "20",
            }}
          />
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
              <g
                className={`${
                  isVisible ? "magictime slideDownReturn" : "none"
                }`}
              >
                {nodes.map(({ key, data, state }) => {
                  const p1 = outerArcPath.centroid(state);
                  const p2 = [
                    mid(state) ? p1[0] + radius * 0.2 : p1[0] - radius * 0.2,
                    p1[1],
                  ];
                  return (
                    <g key={key}>
                      <path
                        d={innerArcPath(state)}
                        className={`arc-path-${data.data.name}`}
                        opacity={0.9}
                      />
                      <text
                        dy="4px"
                        fontSize={fontSize}
                        transform={`translate(${p2})`}
                        textAnchor={mid(state) ? "start" : "end"}
                      >
                        {data.data.name}
                      </text>
                      <polyline
                        fill="none"
                        stroke="gray"
                        points={`${innerArcPath.centroid(state)},${p1},${p2}`}
                      />
                    </g>
                  );
                })}
              </g>
            )}
          </NodeGroup>
        </g>
      </svg>
    </section>
  );
};

export default Donut;
