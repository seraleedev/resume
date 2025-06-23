import styled from "styled-components";

interface IModalProps {
  show?: boolean;
  top?: number;
}
// ModalOverlay > ModalWrapper > ModalContainer
export const ModalOverlay = styled.div<IModalProps>`
  display: ${({ show }) => (show ? "block" : "none")};
  top: ${({ top }) => top}px;
  position: absolute;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.2);
  z-index: 100;
  cursor: pointer;
  @media only screen and (max-width: 1023px) {
    background: none;
  }
`;

export const ModalWrapper = styled.div`
  width: 1000px;
  height: 100%;
  display: flex;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  position: relative;
  @media only screen and (max-width: 1023px) {
    width: 100%;
  }
`;

export const ModalContainer = styled.div`
  background-color: #fff;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  overflow-x: hidden;
  border-radius: 5px;
  position: relative;
  @media only screen and (max-width: 1023px) {
    max-height: 100vh;
    border-radius: 0;
  }
`;

export const ModalHeaderStyle = styled.div`
  background-color: #fff;
  padding: 40px 40px 20px;
  border-radius: 5px 5px 0 0;
  width: 1000px;
  position: sticky;
  top: 0;
  @media only screen and (max-width: 1023px) {
    padding: 30px 20px 0;
    width: 100%;
    border-radius: 0;
  }
`;

export const ModalBodyStyle = styled.div`
  background-color: #fff;
  padding: 20px 40px;
  border-radius: 0 0 5px 5px;
  width: 100%;
  @media only screen and (max-width: 1023px) {
    padding: 20px;
    border-radius: 0;
  }
`;
