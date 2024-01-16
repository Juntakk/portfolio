import { GrTechnology } from "react-icons/gr";
import data from "./data"
import { IoIosColorPalette } from "react-icons/io";
import "./navbar.css"
import { useModalContext } from "../../context/modal-context";

const Navbar = () => {
    const { showModalHandler } = useModalContext();

    return (
        <nav>
            <div className="container nav__container">
                <a href="index.html" className="nav__logo">
                    <GrTechnology />
                </a>
                <ul className="nav__menu">
                    {
                        data.map(item => <li key={item.id}><a href={item.link}>{item.title}</a></li>)
                    }
                </ul>
                <button id="theme__icon" onClick={showModalHandler}>
                    <IoIosColorPalette />
                </button>
            </div>
        </nav>
    )
}

export default Navbar