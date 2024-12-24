import { FlexBox } from "@/components/common/component";
import { ListDot } from "../styles";
import { MobileParagraph, Paragraph } from "@/components/common/typhography";

/**
 * 상세 작업 타이틀 컴포넌트
 * @param projectName
 * @param isMobile
 * @returns
 */

export interface IProjectTitle {
  projectName: string;
  isMobile?: boolean;
}

const ProjectTitle = ({ projectName, isMobile }: IProjectTitle) => {
  return (
    <FlexBox
      gap="5px"
      justify="flex-start"
      margin={isMobile ? "0 0 5px" : "0 0 10px"}
    >
      <ListDot />
      {isMobile ? (
        <MobileParagraph>{projectName}</MobileParagraph>
      ) : (
        <Paragraph>{projectName}</Paragraph>
      )}
    </FlexBox>
  );
};
export default ProjectTitle;
