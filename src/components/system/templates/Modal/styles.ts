import styled from "styled-components";

// ModalOverlay > ModalWrapper > ModalContainer
export const ModalOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.2);
  z-index: 100;
`;

export const ModalWrapper = styled.div`
  width: 1000px;
  height: 100%;
  display: flex;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const ModalContainer = styled.div`
  background-color: white;
  width: 100%;
  max-height: 90vh;
  border-radius: 5px;
  position: relative;
`;

export const ModalHeaderStyle = styled.div`
  position: fixed;
  background-color: #fff;
  padding: 20px 40px 0;
  border-radius: 5px 5px 0 0;
  width: 1000px;
`;

export const ModalBodyStyle = styled.div`
  background-color: #fff;
  position: absolute;
  top: 119px;
  padding: 20px 40px;
  border-radius: 0 0 5px 5px;
  width: 1000px;
`;
