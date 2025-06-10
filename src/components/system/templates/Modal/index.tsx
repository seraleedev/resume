import { ModalOverlay, ModalContainer, ModalWrapper } from "./styles";
import ModalHeader from "./ModalHeader";
import ModalBody from "./ModalBody";

/**
 * 모달창 컴포넌트
 * @param show
 * @param title
 * @param subTitle
 * @param closeModal
 * @returns
 */

export interface IModalProps {
  title: string;
  subTitle?: string;
  show?: boolean;
  closeModal?: () => void;
}

const Modal = ({ title, subTitle, closeModal, show }: IModalProps) => {
  return (
    <ModalOverlay show={show}>
      <ModalWrapper>
        <ModalContainer>
          <ModalHeader
            title={title}
            subTitle={subTitle}
            closeModal={closeModal}
          />
          <ModalBody />
        </ModalContainer>
      </ModalWrapper>
    </ModalOverlay>
  );
};

export default Modal;
