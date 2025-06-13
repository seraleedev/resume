import {
  ModalOverlay,
  ModalContainer,
  ModalWrapper,
  ModalBodyStyle,
} from "./styles";
import ModalHeader from "./ModalHeader";

/**
 * 모달창 컴포넌트
 * @param show
 * @param title
 * @param subTitle
 * @param data
 * @param closeModal
 * @returns
 */

export interface IModalProps {
  title: string;
  subTitle?: string;
  show?: boolean;
  data?: JSX.Element[];
  closeModal?: () => void;
}

const Modal = ({ title, subTitle, closeModal, show, data }: IModalProps) => {
  return (
    <ModalOverlay show={show}>
      <ModalWrapper>
        <ModalContainer>
          <ModalHeader
            title={title}
            subTitle={subTitle}
            closeModal={closeModal}
          />
          <ModalBodyStyle>{data}</ModalBodyStyle>
        </ModalContainer>
      </ModalWrapper>
    </ModalOverlay>
  );
};

export default Modal;
