import { BsAndroid2 } from "react-icons/bs";
import { FaCircleNodes } from "react-icons/fa6";
import { SiCsharp } from "react-icons/si";
import { SiPhp } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiCplusplus } from "react-icons/si";
import { SiPython } from "react-icons/si";

const data = [
  {
    id: 1,
    icon: <SiPython />,
    title: "Python",
    desc: "Python is fascinating. Learning in my free time, I've made small apps and can't wait to delve deeper into its scripting and automation possibilities.",
    level: 60,
  },
  {
    id: 2,
    icon: <FaReact />,
    title: "React.js",
    desc: "Passionnate about it's structure and logic, I fell in love while crafting my portfolio. Excited about its simplicity, I'm eager to continue exploring this powerful framework.",
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
    icon: <SiCsharp />,
    title: "C#",
    desc: "I have built websites and applications using C#, ASP.NET, and SQL. With C#, I've added dynamic features and made Visual Studio 2022 my playground.",
    level: 60,
  },
  {
    id: 5,
    icon: <SiPhp />,
    title: "PHP",
    desc: "With PHP, I seamlessly integrate databases for dynamic functionality and smooth management, enhancing user experience and managing very complex databases.",
    level: 50,
  },
  {
    id: 6,
    icon: <BsAndroid2 />,
    title: "Java/Kotlin",
    desc: "Proficient in these beautiful languages, I create Android applications with a focus on simplicity, efficiency and user-experience. Mainly with Android Studio. ",
    level: 70,
  },
  {
    id: 7,
    icon: <SiCplusplus />,
    title: "C++",
    desc: "Currently learning C++ during my free time, I'm excited to explore its basics, OOP structure / architecture and use it for crafting interesting video games.",
    level: 60,
  },
];

export default data;
