import { H3, MobileH3, MobileParagraph, Paragraph } from "@/components/common/typography";
import { AboutMeData } from "@/data/static";

/**
 * 자기소개 컴포넌트
 * @param data
 * @param isMobile
 * @returns
 */

interface IAboutMeListList {
  data: AboutMeData;
  isMobile?: boolean;
}

const AboutMeList = ({ data, isMobile }: IAboutMeListList) => {
  return isMobile ? (
    <div style={{ margin: "0 0 20px" }}>
      <MobileH3 fontWeight={600} margin="0 0 10px">
        {data.title}
      </MobileH3>
      <MobileParagraph $whiteSpace="pre-line">{data.description}</MobileParagraph>
    </div>
  ) : (
    <div style={{ margin: "0 0 30px" }}>
      <H3 fontWeight={600} margin="0 0 20px">
        {data.title}
      </H3>
      <Paragraph $whiteSpace="pre-line">{data.description}</Paragraph>
    </div>
  );
};

export default AboutMeList;
