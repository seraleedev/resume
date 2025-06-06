import { theme } from "@/styles/theme";
import { CSSProperties } from "react";
import styled from "styled-components";
import { StyleProps } from "@/type";

interface IFlexBoxProps extends StyleProps<CSSProperties> {
  width?: string;
  height?: string;
  overflow?: string;
  position?: string;
  flexDirection?: string;
  flex?: string;
  flexWrap?: string;
  alignItems?: string;
  justify?: string;
  margin?: string;
  padding?: string;
  gap?: string;
  bottom?: number;
}

// 공통 컴포넌트
interface IContainerProps {
  width?: string;
  height?: string;
  padding?: string;
  margin?: string;
}

export const Container = styled.div<IContainerProps>`
  width: ${({ width }) => width || "1000px"};
  height: ${({ height }) => height || "auto"};
  margin: ${({ margin }) => margin || "0 auto"};
  padding: ${({ padding }) => padding || 0};
`;

export const FlexBox = styled.div<IFlexBoxProps>`
  display: flex;
  ${({ width }) => width && `width: ${width};`}
  ${({ height }) => height && `width: ${height};`}
  ${({ overflow }) => overflow && `overflow: ${overflow};`}
  ${({ position }) => position && `position: ${position};`}
  ${({ $flexDirection }) =>
    $flexDirection && `flex-direction: ${$flexDirection};`}
  ${({ flex }) => flex && `flex: ${flex};`}
  ${({ flexWrap }) => flexWrap && `flex-wrap: ${flexWrap};`}
  align-items: ${({ $alignItems }) => $alignItems || "center"};
  justify-content: ${({ justify }) => justify || "center"};
  ${({ gap }) => gap && `gap: ${gap};`}
  ${({ margin }) => margin && `margin: ${margin};`}
  ${({ padding }) => padding && `padding: ${padding};`}
   ${({ bottom }) => bottom && `bottom: ${bottom}px;`}
`;

interface IButtonProps extends StyleProps<CSSProperties> {
  width?: string;
  height?: string;
  borderRadius?: string;
  background?: string;
  border?: string;
}

export const Button = styled.button<IButtonProps>`
  width: ${({ width }) => width || "auto"};
  height: ${({ height }) => height || "auto"};
  border-radius: ${({ $borderRadius }) => $borderRadius || "5px"};
  background: ${({ background }) => background || theme.colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  outline: none;
  border: ${({ border }) => border || "none"};
  text-align: center;
  color: ${theme.colors.white};
  &:hover {
    background-color: ${theme.colors.gray02};
  }
  transition: all 0.3s;
`;

interface IDividerProps {
  width?: string;
  height?: string;
  margin?: string;
}

export const Divider = styled.div<IDividerProps>`
  width: ${({ width }) => width || "100%"};
  height: ${({ height }) => height || "1px"};
  background: ${theme.colors.gray02};
  ${({ margin }) => margin && `margin: ${margin};`}
`;
