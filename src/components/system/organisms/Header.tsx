import { theme } from "@/styles/theme";
import { Container } from "../templates/styles";
import { Button, FlexBox } from "@/components/common";
import { H1, H4 } from "@/components/common/typhography";
import { HeaderComponent, WrapperH1 } from "./styles";
import { BsDownload } from "react-icons/bs";

const Header = () => {
  return (
    <HeaderComponent>
      <Container width="1000px">
        <FlexBox justify="flex-end" width="100%">
          <Button
            background={theme.colors.green01}
            borderRadius="100%"
            width="40px"
            height="40px"
          >
            <BsDownload size={"2rem"} />
          </Button>
        </FlexBox>
        <WrapperH1>
          <H1 fontWeight={700}>작은 부분부터 실천하는</H1>
          <H1 color={theme.colors.green01} fontWeight={700}>
            Frontend Developer
          </H1>
          <H1 fontWeight={700}>이슬아입니다.</H1>
        </WrapperH1>
        <H4>
          안녕하세요, 저는 웹 디자이너에서 시작한 주니어 프론트엔드
          개발자입니다.
          <br />
          좋은 코드는 기본을 다지는 습관에서부터 시작된다고 생각합니다.
          <br />
          기초부터 탄탄히 설계하여 안정적인 서비스를 제공하는 것을 가장 큰
          가치로 여깁니다.
        </H4>
      </Container>
    </HeaderComponent>
  );
};
export default Header;
