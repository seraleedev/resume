import { H2 } from "@/components/common/typhography";
import { TitleWrapper } from "./styles";
import { Dot } from "./styles";

interface ITitleWithDotProp {
  title: string;
}
/**
 * 점 달린 타이틀 컴포넌트
 * @param title
 * @returns
 */
const TitleWithDot = ({ title }: ITitleWithDotProp) => {
  return (
    <TitleWrapper>
      <Dot />
      <H2 margin="0 0 0 13px" fontWeight={700}>
        {title}
      </H2>
    </TitleWrapper>
  );
};

export default TitleWithDot;
