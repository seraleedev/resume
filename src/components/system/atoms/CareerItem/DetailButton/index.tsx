import { Paragraph } from "@/components/common/typhography";
import { useModal } from "@/context/ModalContext";
import { theme } from "@/styles/theme";

/**
 * 모달 오픈 버튼
 * @param modalName
 * @param buttonName
 * @returns
 */

interface IDetailButton {
  modalName: string;
  buttonName: string;
}

const DetailButton = ({ modalName, buttonName }: IDetailButton) => {
  const { openModal } = useModal();
  return (
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
