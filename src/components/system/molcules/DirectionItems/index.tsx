import { H4, Paragraph } from "@/components/common/typhography";
import { theme } from "@/styles/theme";

/**
 * 지향점 키워드 설명 컴포넌트
 * @param keyword
 * @param description
 * @returns
 */

export interface IDirectionItems {
  keyword: string;
  description: string;
}

const DirectionItems = ({ keyword, description }: IDirectionItems) => {
  return (
    <div>
      <H4 color={theme.colors.white} fontWeight={500}>
        {keyword}
      </H4>
      <Paragraph
        margin="13px 0 0"
        color={theme.colors.white}
        $whiteSpace="pre-line"
      >
        {description}
      </Paragraph>
    </div>
  );
};

export default DirectionItems;
