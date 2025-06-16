import { MobileParagraph } from "@/components/common/typhography";
import { IServiceWithRole } from "./ServiceWithRole";
import { FlexBox } from "@/components/common/component";
import DetailButton from "../DetailButton";

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
        <DetailButton
          modalName={"projectDetail"}
          buttonName="About project"
          isMobile
        />
      )}
    </>
  );
};
export default ServiceWithRole;
