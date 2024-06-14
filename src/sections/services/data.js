import { BsAndroid2 } from "react-icons/bs";
import { RiJavascriptFill } from "react-icons/ri";
import { SiFlutter } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiPython } from "react-icons/si";

const data = [
  {
    id: 1,
    icon: <FaReact />,
    title: "React.js",
    level: 90,
  },
  {
    id: 2,
    icon: <FaNodeJs />,
    title: "Node.js",
    level: 80,
  },
  {
    id: 3,
    icon: <SiFlutter />,
    title: "Flutter",
    level: 90,
  },
  {
    id: 4,
    icon: <SiPython />,
    title: "Python",
    level: 60,
  },
  {
    id: 5,
    icon: <BsAndroid2 />,
    title: "Java / Kotlin",
    level: 70,
  },
  {
    id: 6,
    icon: <RiJavascriptFill />,
    title: "Vanilla Javascript",
    level: 70,
  },
];

export default data;
