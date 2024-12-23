import styled from "styled-components";

interface IHeaderContainer {
  $isScroll?: boolean;
  headerHeight?: number;
}

export const HeaderContainer = styled.div<IHeaderContainer>`
  width: 100%;
  box-shadow: ${({ $isScroll }) =>
    $isScroll ? "none" : `0px 10px 20px 0px rgba(0, 0, 0, 0.08)`};
  padding: ${({ $isScroll }) => ($isScroll ? "10px 0" : "40px 0 60px")};
  position: ${({ $isScroll }) => ($isScroll ? "fixed" : "relative")};
  top: 0;
  transition: all 0.5s;
`;

export const WrapperH1 = styled.div`
  margin: 30px 0 52px;
`;
