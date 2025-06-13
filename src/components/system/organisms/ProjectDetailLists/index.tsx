import { H3, Paragraph } from "@/components/common/typhography";
import { IProjectDetailData } from "@/data/static";
import { ListDot } from "../../atoms/CareerItem/styles";
import { FlexBox } from "@/components/common/component";
import { theme } from "@/styles/theme";
import MainProjectDetailItem from "../../atoms/MainProjectDetailItem";

/**
 * 프로젝트 상세설명 컴포넌트(PC)
 * @param project
 * @returns
 */

interface IProjectDetailList {
  project: IProjectDetailData;
}

const ProjectDetailList = ({ project }: IProjectDetailList) => {
  return (
    <div style={{ margin: "0 0 30px" }}>
      <H3 fontWeight={600} margin="0 0 20px">
        {project.id}. {project.projectName} (기여도 {project.rate}%)
      </H3>
      {Object.entries(project.content).map((item, index) => (
        <MainProjectDetailItem
          contentTitle={item[0]}
          content={item[1]}
          key={index}
        />
      ))}
      <FlexBox justify="flex-start" gap="5px">
        <ListDot />
        <Paragraph>기여한 부분 : </Paragraph>
      </FlexBox>
      {project["contribution"].map((text, index) => (
        <Paragraph color={theme.colors.gray01} padding="0 0 0 10px" key={index}>
          - {text}
        </Paragraph>
      ))}
    </div>
  );
};

export default ProjectDetailList;
