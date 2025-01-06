import { Fragment } from "react";
import ReactDOM from "react-dom";
import "./styles/modal.css";
import { useModalContext } from "../context/modal-context";
import Card from "./Card";

const Modal = ({ className, children, language }) => {
  const { showModal, closeModalHandler } = useModalContext();

  return (
    <Fragment>
      {showModal &&
        ReactDOM.createPortal(
          <>
            <section id="backdrop" onClick={closeModalHandler}></section>
            <Card className={className}>{children}</Card>
          </>,
          document.querySelector("#overlays")
        )}
    </Fragment>
  );
};

export default Modal;
