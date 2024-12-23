import { H3, Paragraph } from "@/components/common/typhography";

/**
 * 서비스명 및 담당작업 설명 컴포넌트
 * @param serviceName
 * @param role
 * @param description
 * @returns
 */
interface IServiceWithRole {
  serviceName: string;
  role: string;
  description?: string;
}
const ServiceWithRole = ({
  serviceName,
  role,
  description,
}: IServiceWithRole) => {
  return (
    <>
      <H3 fontWeight={600}>{serviceName}</H3>
      <Paragraph margin="10px 0 0" fontWeight={600}>
        {role}
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
