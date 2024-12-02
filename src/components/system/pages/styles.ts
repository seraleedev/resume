import styled from "styled-components";

interface IContainerProps {
  width?: string;
  padding?: string;
}

export const Container = styled.div<IContainerProps>`
  width: ${({ width }) => width || "100%"};
  margin: 0 auto;
  ${({ padding }) => `padding:${padding};`}
`;

export const ListWrap = styled.div`
  margin: 28px 0 0;
`;
