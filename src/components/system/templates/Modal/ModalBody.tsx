import { ModalBodyStyle, ModalHeaderStyle } from "./styles";
import { IModalProps } from ".";
import { Button, FlexBox } from "@/components/common/component";
import { BsArrowLeft } from "react-icons/bs";
import { theme } from "@/styles/theme";
import TitleWithDot from "../../atoms/TitieWithDot";
import { H3, H4, Paragraph } from "@/components/common/typhography";

/**
 * 모달창 > 바디 컴포넌트
 * @param
 * @param
 * @returns
 */

const ModalBody = () => {
  return (
    <ModalBodyStyle>
      <H3 fontWeight={600} margin="0 0 20px">
        빼기 클라이언트 : 재활용 계산기 서비스 (기여도 14%)
      </H3>
      <Paragraph>
        목표: 신규 유저 유입률 증가 및 기존 유저의 앱 체류시간 증가 범위: 빼기
        클라이언트 내 재활용 계산기 신규 서비스 화면 작업 기간 :
        2024.08~2024.09(4주) 구성원 : 백엔드 3인, 프론트엔드 2인, 디자이너 1인
        사용기술: Typescript, Next.js,styled-component,React-query,Redux 기여한
        부분  재활용 계산기 거점 리스트 조회 및 필터링, 계산기 화면, 거점
        상세페이지 및 후기 작성기능 구현
      </Paragraph>
    </ModalBodyStyle>
  );
};

export default ModalBody;
