import { theme } from "@/styles/theme";
import styled from "styled-components";

interface IGreenContainer {
  padding?: string;
}

export const ListWrap = styled.div`
  margin: 30px 0 0;
`;

export const GreenContainer = styled.div<IGreenContainer>`
  width: 100%;
  background: ${theme.colors.green02};
  padding: ${({ padding }) => padding || 0};
  position: relative;
`;
