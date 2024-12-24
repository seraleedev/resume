import { FlexBox } from "@/components/common/component";
import { MobileParagraph, Paragraph } from "@/components/common/typhography";
import { theme } from "@/styles/theme";

/**
 * 상세 작업내역 컴포넌트
 * @param details
 * @returns
 */

export interface IProjectDetail {
  details: string[];
  isMobile?: boolean;
}

const ProjectDetail = ({ details, isMobile }: IProjectDetail) => {
  return (
    <FlexBox
      $flexDirection="column"
      gap="4px"
      justify="flex-start"
      $alignItems="flex-start"
      margin="0 0 0 10px"
    >
      {details.map((text, index) =>
        isMobile ? (
          <MobileParagraph
            color={theme.colors.gray01}
            key={`career-detail-${index}`}
          >
            {text}
          </MobileParagraph>
        ) : (
          <Paragraph color={theme.colors.gray01} key={`career-detail-${index}`}>
            {text}
          </Paragraph>
        )
      )}
    </FlexBox>
  );
};
export default ProjectDetail;
