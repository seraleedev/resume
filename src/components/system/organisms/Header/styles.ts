import styled from "styled-components";

interface IHeaderContainer {
  $isScroll?: boolean;
}

export const HeaderContainer = styled.div<IHeaderContainer>`
  width: 100%;
  position: sticky;
  padding: 40px 0 60px;
  top: 0;
`;

export const WrapperH1 = styled.div`
  margin: 30px 0 52px;
`;

export const MobileHeaderContainer = styled.div<IHeaderContainer>`
  position: sticky;
  top: 0;
  width: 100%;
  height: 100vh;
  box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: all 0.5s;
`;
