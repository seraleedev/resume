import { H4, Paragraph, H1, H2 } from "@/components/common/typhography";
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
    <div
      style={{
        scrollSnapAlign: `start`,
        height: `100%`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        gap: 30,
      }}
    >
      <H2
        color={theme.colors.white}
        fontWeight={500}
        style={{ flexBasis: "30%" }}
      >
        {keyword}
      </H2>
      <Paragraph
        style={{ fontSize: "2.4rem", lineHeight: "3rem", flexBasis: "50%" }}
        margin="13px 0 0"
        color={theme.colors.white}
      >
        {description}
      </Paragraph>
    </div>
  );
};

export default DirectionItems;
