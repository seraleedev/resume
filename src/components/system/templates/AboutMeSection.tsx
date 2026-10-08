import { Container, WhiteBox } from "@/components/common/component";
import { ListWrap } from "./styles";
import TitleWithDot from "../atoms/TitleWithDot";
import { aboutMe, aboutMeSectionId, aboutMeTitle } from "@/data/static";
import AboutMeList from "../organisms/AboutMeList";
import { IMainLayout } from "./MainLayout";

/**
 * 자기소개 섹션
 * @param isMobile
 * @returns
 */

const AboutMeSection = ({ isMobile }: IMainLayout) => {
  return isMobile ? (
    <WhiteBox id={aboutMeSectionId}>
      <Container padding="30px 20px 50px" width="100%">
        <TitleWithDot title={aboutMeTitle.title} isMobile />
        <ListWrap>
          {aboutMe.map((data, index) => (
            <AboutMeList data={data} key={`about-me-${index}`} isMobile />
          ))}
        </ListWrap>
      </Container>
    </WhiteBox>
  ) : (
    <WhiteBox id={aboutMeSectionId}>
      <Container padding="50px 0 120px">
        <TitleWithDot title={aboutMeTitle.title} />
        <ListWrap>
          {aboutMe.map((data, index) => (
            <AboutMeList data={data} key={`about-me-${index}`} />
          ))}
        </ListWrap>
      </Container>
    </WhiteBox>
  );
};

export default AboutMeSection;
