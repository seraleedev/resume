import { ModalHeaderStyle } from "./styles";
import { IModalProps } from ".";
import { Button, FlexBox } from "@/components/common/component";
import { BsArrowLeft } from "react-icons/bs";
import { theme } from "@/styles/theme";
import TitleWithDot from "../../atoms/TitieWithDot";
import { H4 } from "@/components/common/typhography";

/**
 * 모달창 > 헤더 컴포넌트
 * @param title
 * @param subTitle
 * @returns
 */

const ModalHeader = ({ title, subTitle }: IModalProps) => {
  return (
    <ModalHeaderStyle>
      <FlexBox justify="space-between" alignItems="center">
        <TitleWithDot title={title} margin="0" />
        <Button width="50px" height="50px">
          <BsArrowLeft color={theme.colors.green01} size={"2rem"} />
        </Button>
      </FlexBox>
      <H4 margin="10px 0 0" color={theme.colors.gray01}>
        {subTitle}
      </H4>
    </ModalHeaderStyle>
  );
};

export default ModalHeader;
