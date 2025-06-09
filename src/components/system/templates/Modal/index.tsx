import { ModalOverlay, ModalContainer, ModalWrapper } from "./styles";
import ModalHeader from "./ModalHeader";
import ModalBody from "./ModalBody";
import { useEffect, useState, useContext, createContext } from "react";

/**
 * 모달창 컴포넌트
 * @param show
 * @param title
 * @param subTitle
 * @param onClick
 * @returns
 */

export interface IModalProps {
  title: string;
  subTitle?: string;
  show?: boolean;
  onClick?: () => void;
}

export const ModalContext = createContext<
  { isOpen: boolean; setIsOpen: (isOpen: boolean) => void } | undefined
>(undefined);

export const ModalProvider: React.FC = ({ children }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <ModalContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};

const Modal = ({ title, subTitle, onClick, show }: IModalProps) => {
  useEffect(() => {
    document.body.style.cssText = `
      position:fixed;
      top: -${window.scrollY}px;
      overflow-y:scroll;
      width:100%;
    `;

    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = "";
      window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
    };
  }, []);

  return (
    <ModalOverlay show={show}>
      <ModalWrapper>
        <ModalContainer>
          <ModalHeader
            title={title}
            subTitle={subTitle}
            onClick={onClick}
          ></ModalHeader>
          <ModalBody />
        </ModalContainer>
      </ModalWrapper>
    </ModalOverlay>
  );
};

export default Modal;
