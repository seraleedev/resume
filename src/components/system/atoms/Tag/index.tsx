import { TagContainer } from "./styles";
import { TagWord } from "./styles";

interface ITagProp {
  keyword: string;
}
/**
 * 태그 컴포넌트
 * @param keyword
 * @returns
 */
const Tag = ({ keyword }: ITagProp) => {
  return (
    <TagContainer>
      <TagWord>#{keyword}</TagWord>
    </TagContainer>
  );
};

export default Tag;
