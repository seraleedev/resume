import { H3, Paragraph } from "@/components/common/typhography";

/**
 * 서비스명 및 담당작업 설명 컴포넌트
 * @param work
 * @param role
 * @param description
 * @returns
 */
export interface IServiceWithRole {
  work: string;
  role: string;
  description?: string;
}

const ServiceWithRole = ({
  work,
  role,
  description,
}: IServiceWithRole) => {
  return (
    <>
      <H3 fontWeight={600}>{role}</H3>
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
