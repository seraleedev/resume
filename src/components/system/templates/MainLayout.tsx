import { careerData } from "@/data/static";
import TitleWithDot from "../atoms/TitieWithDot";
import Header from "../organisms/Header";
import CareerList from "../organisms/CareerList";
import { Container, ListWrap } from "./styles";

/**
 * 메인 페이지
 * @returns
 */
const MainLayout = () => {
  return (
    <>
      <Header />
      <Container padding="20px 0 150px" width="1000px">
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
    </>
  );
};
export default MainLayout;
