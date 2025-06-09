import { FlexBox } from "@/components/common/component";
import { H3, Paragraph } from "@/components/common/typhography";
import ProjectDetailButton from "../ProjectDetailButton";

/**
 * 서비스명 및 담당작업 설명 컴포넌트
 * @param work
 * @param role
 * @param description
 * @param projectDetail
 * @param onClick
 * @returns
 */
export interface IServiceWithRole {
  work: string;
  role: string;
  description?: string;
  projectDetail?: string;
  onClick?: () => void;
}

const ServiceWithRole = ({
  work,
  role,
  description,
  projectDetail,
  onClick,
}: IServiceWithRole) => {
  return (
    <>
      <FlexBox width="100%" justify="space-between">
        <H3 fontWeight={600}>{role}</H3>
        {projectDetail && <ProjectDetailButton onClick={onClick} />}
      </FlexBox>
      <Paragraph margin="10px 0 0" fontWeight={600}>
        {work}
      </Paragraph>
      {description && (
        <Paragraph
          margin="15px 0 30px"
          $maxWidth="760px"
          $whiteSpace="pre-line"
        >
          {description}
        </Paragraph>
      )}
    </>
  );
};
export default ServiceWithRole;
