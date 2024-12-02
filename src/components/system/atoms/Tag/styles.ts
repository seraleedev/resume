import { theme } from "@/styles/theme";
import styled from "styled-components";

export const TagContainer = styled.div`
  text-align: center;
  padding: 8px 12px;
  background: ${theme.colors.white};
  border: 1px solid ${theme.colors.green01};
  border-radius: 5px;
`;

export const TagWord = styled.p`
  font-size: 14px;
  color: ${theme.colors.green01};
`;
