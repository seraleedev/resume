import { directionData } from "@/data/static";
import { Container } from "@/components/common/component";
import { GreenContainer } from "./styles";
import { H2, MobileH1 } from "@/components/common/typography";
import { theme } from "@/styles/theme";
import DirectionList from "../organisms/DirectionList";
import { IMainLayout } from "./MainLayout";

/**
 * 목표 섹션
 * @param isMobile
 * @returns
 */

const DirectionSection = ({ isMobile }: IMainLayout) => {
  const sectionTitle = "지향하는 것.";

  return isMobile ? (
    <GreenContainer padding="48px 20px">
      <MobileH1 fontWeight={700} color={theme.colors.white} margin="0 0 30px">
        {sectionTitle}
      </MobileH1>
      <DirectionList directionData={directionData} isMobile />
    </GreenContainer>
  ) : (
    <GreenContainer padding="60px 0 120px">
      <Container>
        <H2 fontWeight={700} color={theme.colors.white} margin="0 0 60px">
          {sectionTitle}
        </H2>
        <DirectionList directionData={directionData} />
      </Container>
    </GreenContainer>
  );
};

export default DirectionSection;
