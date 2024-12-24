import { MobileH3, MobileParagraph } from "@/components/common/typhography";
import { theme } from "@/styles/theme";
import { FlexBox } from "@/components/common/component";
import { ICompanyInfo } from "./CompanyInfo";

/**
 * 회사명 및 경력 히스토리 컴포넌트(mobile)
 * @param companyName
 * @param history
 * @returns
 */

const CompanyInfo = ({ companyName, history }: ICompanyInfo) => {
  return (
    <FlexBox width="100%" justify="space-between" margin="0 0 12px">
      <MobileH3 fontWeight={600}>{companyName}</MobileH3>
      <MobileParagraph color={theme.colors.gray01}>{history}</MobileParagraph>
    </FlexBox>
  );
};
export default CompanyInfo;
