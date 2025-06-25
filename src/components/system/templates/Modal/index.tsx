import {
  ModalOverlay,
  ModalContainer,
  ModalWrapper,
  ModalBodyStyle,
} from "./styles";
import ModalHeader from "./ModalHeader";
import { useEffect, useState } from "react";

/**
 * 모달창 컴포넌트
 * @param show
 * @param title
 * @param subTitle
 * @param data
 * @param closeModal
 * @param isMobile
 * @returns
 */

export interface IModalProps {
  title: string;
  subTitle?: string;
  show?: boolean;
  data?: JSX.Element[];
  isMobile?: boolean;
  closeModal?: () => void;
}

const Modal = ({
  title,
  subTitle,
  closeModal,
  show,
  data,
  isMobile,
}: IModalProps) => {
  const [isAnimate, setIsAnimate] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    if (show) {
      setIsAnimate(true);
    } else {
      timeoutId = setTimeout(() => setIsAnimate(false), 300);
    }

    return () => {
      if (timeoutId !== undefined) {
        clearTimeout(timeoutId);
      }
    };
  }, [show]);

  if (!isAnimate) return null;

  return (
    <ModalOverlay
      $show={show}
      top={window.scrollY}
      onClick={isMobile ? undefined : closeModal}
    >
      <ModalWrapper>
        <ModalContainer>
          <ModalHeader
            title={title}
            subTitle={subTitle}
            closeModal={closeModal}
            isMobile={isMobile}
          />
          <ModalBodyStyle>{data}</ModalBodyStyle>
        </ModalContainer>
      </ModalWrapper>
    </ModalOverlay>
  );
};

export default Modal;
