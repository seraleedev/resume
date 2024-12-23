import { careerData, directionData } from "@/data/static";
import TitleWithDot from "../atoms/TitieWithDot";
import Header from "../organisms/Header";
import CareerList from "../organisms/CareerList";
import { Container } from "@/components/common/component";
import { GreenFullContainer, ListWrap } from "./styles";
import { H1 } from "@/components/common/typhography";
import { theme } from "@/styles/theme";
import DirectionList from "../organisms/DirectionList";
import Footer from "../organisms/Footer";
import { useRef, useState, useEffect } from "react";

interface IMainLayout {
  isMobile: boolean;
}

/**
 * 메인 페이지
 * @returns
 */
const MainLayout = ({ isMobile }: IMainLayout) => {
  const pointRef = useRef<HTMLDivElement>(null);

  const START_POINT = 50;
  const [isPoint, setIsPoint] = useState<boolean>(false);

  const setPoint = () => {
    const isReachPoint = window.scrollY >= START_POINT;
    if (isReachPoint !== isPoint) setIsPoint(isReachPoint);
  };

  useEffect(() => {
    window.addEventListener("scroll", setPoint);
    return () => {
      window.removeEventListener("scroll", setPoint);
    };
  }, [isPoint, pointRef]);

  console.log(isMobile);

  return (
    <>
      <Header isScroll={isPoint} />

      <Container padding={isPoint ? `150px 0` : "20px 0 150px"} ref={pointRef}>
        <TitleWithDot title="어떤 경험을 했나요?" />
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

      <GreenFullContainer>
        <Container>
          <H1 fontWeight={700} color={theme.colors.white} margin="0 0 60px">
            지향하는 것.
          </H1>
          <DirectionList directionData={directionData} />
        </Container>
      </GreenFullContainer>

      <Footer />
    </>
  );
};
export default MainLayout;
