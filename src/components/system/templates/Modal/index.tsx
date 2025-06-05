import { ModalOverlay, ModalContainer, ModalWrapper } from "./styles";
import ModalHeader from "./ModalHeader";
import ModalBody from "./ModalBody";

/**
 * 모달창 컴포넌트
 * @param title
 * @param
 * @returns
 */

export interface IModalProps {
  title: string;
  subTitle?: string;
}

const Modal = ({ title, subTitle }: IModalProps) => {
  return (
    <ModalOverlay>
      <ModalWrapper>
        <ModalContainer>
          <ModalHeader title={title} subTitle={subTitle}></ModalHeader>
          <ModalBody />
        </ModalContainer>
      </ModalWrapper>
    </ModalOverlay>
  );
};

export default Modal;
