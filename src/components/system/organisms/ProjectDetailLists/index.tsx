import { H3, H4, Paragraph } from "@/components/common/typhography";
import { gatdaProject, IProjectDetailContents } from "@/data/static";
import { ListDot } from "../../atoms/CareerItem/styles";
import { FlexBox } from "@/components/common/component";
/**
 * 프로젝트 상세설명 컴포넌트(PC)
 * @param 
 * @param 

 * @returns
 */
interface IProjectDetailItem {
  contentTitle: string;
  content: string | string[];
}
const ProjectDetailItem = ({ contentTitle, content }: IProjectDetailItem) => {
  const createListName = (contentTitle: string) => {
    switch (contentTitle) {
      case "goal":
        return "목표";
      case "range":
        return "범위";
      case "period":
        return "기간";
      case "member":
        return "구성원";
      case "tech":
        return "사용기술";
      case "contribution":
        return "기여한 부분";
      default:
        return "";
    }
  };

  return (
    <FlexBox justify="flex-start" gap="5px">
      <ListDot />
      <Paragraph>{createListName(contentTitle)} : </Paragraph>
      <Paragraph>{content}</Paragraph>
    </FlexBox>
  );
};

const ProjectDetailList = () => {
  return (
    <>
      <H3 fontWeight={600} margin="0 0 20px">
        {gatdaProject[0].projectName} (기여도 {gatdaProject[0].rate}%)
      </H3>
      {Object.entries(gatdaProject[0].content).map((item) => (
        <ProjectDetailItem contentTitle={item[0]} content={item[1]} />
      ))}
    </>
  );
};

export default ProjectDetailList;
