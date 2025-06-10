import { useState, useContext, createContext, useMemo, ReactNode } from "react";

//모달 컨텍스트

interface IModalProviderProps {
  children: ReactNode;
}

interface IModalClassType {
  isOpen: { [key: string]: boolean };
  openModal: (modalName: string) => void;
  closeModal: (modalName: string) => void;
}

export const ModalContext = createContext<IModalClassType>({
  isOpen: {},
  openModal: () => {},
  closeModal: () => {},
});

export const ModalProvider = ({ children }: IModalProviderProps) => {
  const [isOpen, setIsOpen] = useState<{ [key: string]: boolean }>({});

  const disableScroll = () => {
    document.body.style.cssText = `
    position:fixed;
    top: -${window.scrollY}px;
    overflow-y:scroll;
    width:100%;
  `;
  };

  const ableScroll = () => {
    const scrollY = document.body.style.top;
    document.body.style.cssText = "";
    window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
  };

  const openModal = (modalName: string) => {
    disableScroll();
    setIsOpen({ [modalName]: true });
  };

  const closeModal = (modalName: string) => {
    ableScroll();
    setIsOpen({ [modalName]: false });
  };

  const contextValue = useMemo(
    () => ({ isOpen, openModal, closeModal }),
    [isOpen]
  );

  return (
    <ModalContext.Provider value={contextValue}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = (): IModalClassType => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};
