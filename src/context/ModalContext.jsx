import { createContext, useContext, useState } from 'react';

export const ModalContext = createContext();

export const ModalContextProvider = ({ children }) => {
  const [modalActive, setModalActive] = useState(false);

  const togleModal = () => {
    setModalActive(prev => !prev);
  };

  return (
    <ModalContext.Provider value={{ modalActive, togleModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const value = useContext(ModalContext);

  return value;
};
