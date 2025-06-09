import { Paragraph } from "@/components/common/typhography";
import { theme } from "@/styles/theme";

interface IProjectDetailButton {
  onClick?: () => void;
}

const ProjectDetailButton = ({ onClick }: IProjectDetailButton) => {
  return (
    <Paragraph color={theme.colors.gray01} onClick={onClick}>
      About project &gt;
    </Paragraph>
  );
};

export default ProjectDetailButton;
