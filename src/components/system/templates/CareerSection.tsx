import { Container } from "@/components/common/component";
import { ListWrap } from "./styles";
import TitleWithDot from "../atoms/TitieWithDot";
import { careerData } from "@/data/static";
import CareerList from "../organisms/CareerList";
import { IMainLayout } from "./MainLayout";
import MobileCareerList from "../organisms/CareerList/MobileCareerList";

/**
 * 경력기술 섹션
 * @param isMobile
 * @param isPoint
 * @returns
 */

interface ICareerSection extends IMainLayout {
  isPoint: boolean;
}

const CareerSection = ({ isMobile, isPoint }: ICareerSection) => {
  const title = "어떤 경험을 했나요?";

  return isMobile ? (
    <Container padding="30px 20px 70px" width="100%">
      <TitleWithDot title={title} isMobile />
      <ListWrap>
        {careerData.map((career, index) => (
          <MobileCareerList
            careerData={career}
            showDivider={index < careerData.length - 1}
            key={`career-${index}`}
          />
        ))}
      </ListWrap>
    </Container>
  ) : (
    <Container
      padding={"50px 0 150px"}
      margin={isPoint ? "200px auto 0" : undefined}
    >
      <TitleWithDot title={title} />
      <ListWrap>
        {careerData.map((career, index) => (
          <CareerList
            careerData={career}
            showDivider={index < careerData.length - 1}
            key={`career-${index}`}
          />
        ))}
      </ListWrap>
    </Container>
  );
};

export default CareerSection;
