import { BsAndroid2 } from "react-icons/bs";
import { FaCircleNodes } from "react-icons/fa6";
import { SiCsharp } from "react-icons/si";
import { SiPhp } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiCplusplus } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiPython } from "react-icons/si";

const data = [
  {
    id: 1,
    icon: <FaReact />,
    title: "React.js",
    desc: "Passionnate about it's structure and logic, I fell in love while crafting my portfolio. Excited about its simplicity, I'm eager to continue exploring this powerful framework.",
    level: 80,
  },
  {
    id: 2,
    icon: <FaNodeJs />,
    title: "Node.js",
    desc: "Node is brilliant, making it easy and fun to build strong and secure routes to ensure a solid backend to any project. Making everything behind the curtains with ease.",
    level: 70,
  },
  {
    id: 3,
    icon: <FaCircleNodes />,
    title: "JavaScript",
    desc: "Using this splendid language, I built interactive websites and backend API's and with Node.js, I handled server-side tasks, creating efficient and scalable applications.",
    level: 70,
  },
  {
    id: 4,
    icon: <SiPython />,
    title: "Python",
    desc: "Python is fascinating. Learning in my free time, I've made small apps and can't wait to delve deeper into its scripting and automation possibilities.",
    level: 60,
  },

  {
    id: 5,
    icon: <BsAndroid2 />,
    title: "Java/Kotlin",
    desc: "Proficient in these beautiful languages, I create Android applications with a focus on simplicity, efficiency and user-experience. Mainly with Android Studio. ",
    level: 70,
  },
];

export default data;
