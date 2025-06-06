import { Paragraph } from "@/components/common/typhography";
import { ListDot } from "../../atoms/CareerItem/styles";
import { FlexBox } from "@/components/common/component";

/**
 * 프로젝트 상세설명 컴포넌트 항목(한줄짜리)
 * @param contentTitle
 * @param content
 * @returns
 */

interface IMainProjectDetailItem {
  contentTitle: string;
  content: string | string[];
}

const MainProjectDetailItem = ({
  contentTitle,
  content,
}: IMainProjectDetailItem) => {
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

export default MainProjectDetailItem;
