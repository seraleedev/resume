import { MobileParagraph } from "@/components/common/typhography";
import { IServiceWithRole } from "./ServiceWithRole";
import { FlexBox } from "@/components/common/component";
import { Anchor, Paragraph } from "@/components/common/typhography";
import { theme } from "@/styles/theme";

/**
 * 서비스명 및 담당작업 설명 컴포넌트(모바일)
 * @param work
 * @param role
 * @param description
 * @param projectDetail
 * @returns
 */

const ServiceWithRole = ({
  work,
  role,
  description,
  projectDetail,
}: IServiceWithRole) => {
  return (
    <>
      <FlexBox width="100%" justify="space-between" margin="0 0 15px">
        <MobileParagraph fontWeight={600}>{role}</MobileParagraph>
        <MobileParagraph fontWeight={600}>{work}</MobileParagraph>
      </FlexBox>
      {description && <MobileParagraph>{description}</MobileParagraph>}

      {projectDetail && (
        <Anchor href={projectDetail} title="주요 프로젝트 상세" target="_blank">
          <FlexBox width="100%" justify="space-between" margin="10px 0 20px">
            <Paragraph color={theme.colors.gray01}>About project</Paragraph>
            <Paragraph color={theme.colors.gray01}>&gt;</Paragraph>
          </FlexBox>
        </Anchor>
      )}
    </>
  );
};
export default ServiceWithRole;
