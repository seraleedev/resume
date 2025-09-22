import styled from "styled-components";

export const DirectionListWrap = styled.div`
  /* gap: 30px 170px;
  display: grid;
  grid-template-columns: repeat(2, 1fr); */
  height: 530px;
  overflow-y: auto;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  scrollbar-width: none;
`;
