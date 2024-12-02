import { FlexBox } from "@/components/common/component";
import { ListDot } from "./styles";
import { Paragraph } from "@/components/common/typhography";

/**
 * 상세 작업 타이틀 컴포넌트
 * @param projectName
 * @returns
 */

interface IProjectTitle {
  projectName: string;
}
const ProjectTitle = ({ projectName }: IProjectTitle) => {
  return (
    <FlexBox gap="5px" justify="flex-start" margin="0 0 10px">
      <ListDot />
      <Paragraph>{projectName}</Paragraph>
    </FlexBox>
  );
};
export default ProjectTitle;
