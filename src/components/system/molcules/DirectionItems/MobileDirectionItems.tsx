import { MobileH3, MobileParagraph } from "@/components/common/typhography";
import { theme } from "@/styles/theme";
import { IDirectionItems } from ".";

/**
 * 지향점 키워드 설명 컴포넌트(mobile)
 * @param keyword
 * @param description
 * @returns
 */

const MobileDirectionItems = ({ keyword, description }: IDirectionItems) => {
  return (
    <div style={{ margin: "0 0 20px" }}>
      <MobileH3 color={theme.colors.white} fontWeight={500}>
        {keyword}
      </MobileH3>
      <MobileParagraph
        margin="10px 0 0"
        color={theme.colors.white}
        $whiteSpace="pre-line"
      >
        {description}
      </MobileParagraph>
    </div>
  );
};

export default MobileDirectionItems;
