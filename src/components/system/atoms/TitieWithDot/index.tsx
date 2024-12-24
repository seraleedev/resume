import { H2, MobileH1 } from "@/components/common/typhography";
import { TitleWrapper } from "./styles";
import { Dot } from "./styles";

interface ITitleWithDotProp {
  title: string;
  isMobile?: boolean;
}
/**
 * 점 달린 타이틀 컴포넌트
 * @param title
 * @param isMobile
 * @returns
 */
const TitleWithDot = ({ title, isMobile }: ITitleWithDotProp) => {
  return (
    <TitleWrapper>
      <Dot />
      {isMobile ? (
        <MobileH1 margin="0 0 0 13px" fontWeight={700}>
          {title}
        </MobileH1>
      ) : (
        <H2 margin="0 0 0 13px" fontWeight={700}>
          {title}
        </H2>
      )}
    </TitleWrapper>
  );
};

export default TitleWithDot;
