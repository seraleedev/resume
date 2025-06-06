import { ModalBodyStyle, ModalHeaderStyle } from "./styles";
import { IModalProps } from ".";
import { Button, FlexBox } from "@/components/common/component";
import { BsArrowLeft } from "react-icons/bs";
import { theme } from "@/styles/theme";
import TitleWithDot from "../../atoms/TitieWithDot";
import { H3, H4, Paragraph } from "@/components/common/typhography";
import ProjectDetailList from "../../organisms/ProjectDetailLists";
import { gatdaProject } from "@/data/static";

/**
 * 모달창 > 바디 컴포넌트
 * @param
 * @param
 * @returns
 */

const ModalBody = () => {
  return (
    <ModalBodyStyle>
      {gatdaProject.map((project) => (
        <ProjectDetailList project={project} key={project.id} />
      ))}
    </ModalBodyStyle>
  );
};

export default ModalBody;
