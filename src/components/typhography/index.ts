import styled, { css } from "styled-components";
import { theme } from "@/styles/theme";

interface ITextStyleProps {
  color?: string;
  margin?: string;
  padding?: string;
  fontWeight?: string;
}

const textStyle = css<ITextStyleProps>`
  color: ${({ color }) => color || theme.colors.black};
  margin: ${({ margin }) => margin || 0};
  padding: ${({ padding }) => padding || 0};
  ${({ fontWeight }) => `font-weight:${fontWeight};`}
`;

export const H1 = styled.h1`
  font-size: 6rem;
  line-height: 7.5rem;
  font-weight: 700;
  ${textStyle}
`;

export const H2 = styled.h2`
  font-size: 4rem;
  line-height: 5rem;
  font-weight: 700;
  ${textStyle}
`;

export const H3 = styled.h3`
  font-size: 2.4rem;
  line-height: 3rem;
  font-weight: 600;
  ${textStyle}
`;
export const H4 = styled.h4`
  font-size: 1.8rem;
  line-height: 2.6rem;
  font-weight: 400;
  ${textStyle}
`;
export const Paragraph = styled.p`
  font-size: 1.6rem;
  line-height: 2.4rem;
  font-weight: 400;
  ${textStyle}
`;
