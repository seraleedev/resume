import { FlexBox } from "@/components/common/component";
import { Paragraph } from "@/components/common/typhography";
import { useModal } from "@/context/ModalContext";
import { theme } from "@/styles/theme";

/**
 * 모달 오픈 버튼
 * @param modalName
 * @param buttonName
 * @param isMobile
 * @returns
 */

interface IDetailButton {
  modalName: string;
  buttonName: string;
  isMobile?: boolean;
}

const DetailButton = ({ modalName, buttonName, isMobile }: IDetailButton) => {
  const { openModal } = useModal();
  return isMobile ? (
    <FlexBox
      width="100%"
      justify="space-between"
      margin="10px 0 20px"
      onClick={() => openModal(modalName)}
    >
      <Paragraph color={theme.colors.gray01}>{buttonName}</Paragraph>
      <Paragraph color={theme.colors.gray01}>&gt;</Paragraph>
    </FlexBox>
  ) : (
    <Paragraph
      color={theme.colors.gray01}
      onClick={() => openModal(modalName)}
      style={{ cursor: "pointer" }}
    >
      {buttonName} &gt;
    </Paragraph>
  );
};

export default DetailButton;
