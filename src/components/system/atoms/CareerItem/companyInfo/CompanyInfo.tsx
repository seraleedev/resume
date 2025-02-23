import { H3, Paragraph } from "@/components/common/typhography";
import { theme } from "@/styles/theme";
import { CompanyInfoWrapper } from "../styles";

/**
 * 회사명 및 경력 히스토리 컴포넌트
 * @param companyName
 * @param history
 * @returns
 */

export interface ICompanyInfo {
  companyName: string;
  history: string;
}

const CompanyInfo = ({ companyName, history }: ICompanyInfo) => {
  return (
    <CompanyInfoWrapper>
      <H3 fontWeight={600}>{companyName}</H3>
      <Paragraph
        margin="10px 0 0"
        color={theme.colors.gray01}
        $whiteSpace="pre-wrap"
      >
        {history}
      </Paragraph>
    </CompanyInfoWrapper>
  );
};
export default CompanyInfo;
