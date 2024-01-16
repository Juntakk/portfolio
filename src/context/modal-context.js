import { createContext, useContext, useState } from "react";

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
    const [showModal, setShowModal] = useState(false);

    const showModalHandler = () => {
        setShowModal(true);
    }

    const closeModalHandler = () => {
        setShowModal(false);
    }

    return <ModalContext.Provider value={{ showModal, showModalHandler, closeModalHandler }}>{children}
    </ModalContext.Provider>

}

//Custom hook to consume modal context anywhere in app
export const useModalContext = () => {
    return useContext(ModalContext);
}