import { theme } from "@/styles/theme";
import styled from "styled-components";

interface ITitleWrapper {
  margin?: string;
}

export const TitleWrapper = styled.div<ITitleWrapper>`
  margin: ${({ margin }) => margin || "32px 0"};
`;

export const Dot = styled.div`
  width: 13px;
  height: 13px;
  border-radius: 100%;
  background: ${theme.colors.green01};
`;
