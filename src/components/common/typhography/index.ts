import styled, { css } from "styled-components";
import { theme } from "@/styles/theme";

interface ITextStyleProps {
  color?: string;
  margin?: string;
  padding?: string;
  fontWeight?: number;
}

const textStyle = css<ITextStyleProps>`
  color: ${({ color }) => color || theme.colors.black};
  margin: ${({ margin }) => margin || 0};
  padding: ${({ padding }) => padding || 0};
  font-weight: ${({ fontWeight }) => fontWeight || 400};
`;

export const H1 = styled.h1<ITextStyleProps>`
  font-size: 6rem;
  line-height: 7.5rem;
  ${textStyle}
`;

export const H2 = styled.h2<ITextStyleProps>`
  font-size: 4rem;
  line-height: 5rem;
  ${textStyle}
`;

export const H3 = styled.h3<ITextStyleProps>`
  font-size: 2.4rem;
  line-height: 3rem;
  ${textStyle}
`;
export const H4 = styled.h4<ITextStyleProps>`
  font-size: 1.8rem;
  line-height: 2.6rem;
  ${textStyle}
`;
export const Paragraph = styled.p<ITextStyleProps>`
  font-size: 1.6rem;
  line-height: 2.4rem;
  ${textStyle}
`;
