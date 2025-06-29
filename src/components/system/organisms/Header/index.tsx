import { theme } from "@/styles/theme";
import { Container } from "@/components/common/component";
import { Button, FlexBox } from "@/components/common/component";
import { Caption, H1, H4, MobileH1 } from "@/components/common/typhography";
import { HeaderContainer, MobileHeaderContainer, WrapperH1 } from "./styles";
import { BsDownload } from "react-icons/bs";
import { headerData, resumeLink } from "@/data/static";
import { IMainLayout } from "../../templates/MainLayout";
import DetailButton from "../../atoms/CareerItem/DetailButton";

/**
 * 상단 헤더 컴포넌트
 * @param isScroll
 * @param isMobile
 * @returns
 */

interface IHeader extends IMainLayout {
  isScroll: boolean;
}

const Header = ({ isScroll, isMobile }: IHeader) => {
  //스크롤 버튼 클릭
  const onClickScroll = () => {
    const pageHeight = window.innerHeight;
    window.scrollTo({ top: pageHeight, behavior: "smooth" });
  };

  //인쇄 버튼 클릭
  const onClickPrint = () => {
    window.open(resumeLink);
  };

  return isMobile ? (
    <>
      <MobileHeaderContainer $isScroll={isScroll}>
        <div style={{ padding: "0 20px" }}>
          {headerData.title.map((title, index) => (
            <MobileH1
              key={`header-title-${index}`}
              fontWeight={700}
              color={index === 1 ? theme.colors.green01 : undefined}
            >
              {title}
            </MobileH1>
          ))}
          <H4 $whiteSpace="pre-line" margin="35px 0 0">
            {headerData.intro}
          </H4>
          <FlexBox margin="20px 0 0" justify="flex-end">
            <DetailButton modalName="aboutMe" buttonName="MORE" />
          </FlexBox>
        </div>
        <FlexBox position="absolute" bottom={30} width="100%">
          <Caption
            color={theme.colors.green01}
            fontWeight={500}
            onClick={onClickScroll}
          >
            SCROLL DOWN
          </Caption>
        </FlexBox>
      </MobileHeaderContainer>
    </>
  ) : (
    <HeaderContainer $isScroll={isScroll}>
      <Container width={"1000px"}>
        <FlexBox justify="flex-end" width="100%">
          {/* <Button
            background={theme.colors.green01}
            $borderRadius="100%"
            width="40px"
            height="40px"
            onClick={onClickPrint}
          >
            <BsDownload size={"2rem"} />
          </Button> */}
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
            <FlexBox justify="space-between" $alignItems="end">
              <H4 $whiteSpace="pre-line">{headerData.intro}</H4>
              <DetailButton modalName="aboutMe" buttonName="More" />
            </FlexBox>
          </>
        )}
      </Container>
    </HeaderContainer>
  );
};
export default Header;
