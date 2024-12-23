import { theme } from "@/styles/theme";
import { Container } from "@/components/common/component";
import { Button, FlexBox } from "@/components/common/component";
import { H1, H4 } from "@/components/common/typhography";
import { HeaderContainer, WrapperH1 } from "./styles";
import { BsDownload } from "react-icons/bs";
import { headerData } from "@/data/static";

/**
 * 상단 헤더 컴포넌트
 * @param
 * @returns
 */

interface IHeader {
  isScroll: boolean;
}

const Header = ({ isScroll }: IHeader) => {
  return (
    <HeaderContainer $isScroll={isScroll}>
      <Container width="1000px">
        <FlexBox justify="flex-end" width="100%">
          <Button
            background={theme.colors.green01}
            $borderRadius="100%"
            width="40px"
            height="40px"
          >
            <BsDownload size={"2rem"} />
          </Button>
        </FlexBox>

        {!isScroll && (
          <>
            <WrapperH1>
              {headerData.title.map((title, index) => (
                <H1
                  key={`header-title-${index}`}
                  fontWeight={700}
                  color={index === 1 ? theme.colors.green01 : undefined}
                >
                  {title}
                </H1>
              ))}
            </WrapperH1>
            <H4 $whiteSpace="pre-line">{headerData.intro}</H4>
          </>
        )}
      </Container>
    </HeaderContainer>
  );
};
export default Header;
