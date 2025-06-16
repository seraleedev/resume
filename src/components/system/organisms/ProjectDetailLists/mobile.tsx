import { MobileParagraph, Paragraph } from "@/components/common/typhography";
import { IProjectDetailData } from "@/data/static";
import { ListDot } from "../../atoms/CareerItem/styles";
import { FlexBox } from "@/components/common/component";
import { theme } from "@/styles/theme";
import MainProjectDetailItem from "../../atoms/MainProjectDetailItem";

/**
 * 프로젝트 상세설명 컴포넌트(mobile)
 * @param project
 * @returns
 */

interface IProjectDetailList {
  project: IProjectDetailData;
}

const MobileProjectDetailList = ({ project }: IProjectDetailList) => {
  return (
    <div style={{ margin: "0 0 20px" }}>
      <Paragraph fontWeight={600} margin="0 0 10px">
        {project.id}. {project.projectName} (기여도 {project.rate}%)
      </Paragraph>
      {Object.entries(project.content).map((item, index) => (
        <MainProjectDetailItem
          contentTitle={item[0]}
          content={item[1]}
          key={index}
          isMobile
        />
      ))}
      <FlexBox justify="flex-start" gap="5px">
        <ListDot />
        <Paragraph>기여한 부분</Paragraph>
      </FlexBox>
      {project["contribution"].map((text, index) => (
        <MobileParagraph
          color={theme.colors.gray01}
          padding="0 0 0 10px"
          key={index}
        >
          - {text}
        </MobileParagraph>
      ))}
    </div>
  );
};

export default MobileProjectDetailList;
