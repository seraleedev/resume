import { H3, Paragraph } from "@/components/common/typhography";
import { AboutMeData } from "@/data/static";

/**
 * 자기소개 컴포넌트(PC)
 * @param data
 * @returns
 */

interface IAboutMeListList {
  data: AboutMeData;
}

const AboutMeList = ({ data }: IAboutMeListList) => {
  return (
    <div style={{ margin: "0 0 30px" }}>
      <H3 fontWeight={600} margin="0 0 20px">
        {data.title}
      </H3>
      <Paragraph $whiteSpace="pre-line">{data.description}</Paragraph>
    </div>
  );
};

export default AboutMeList;
