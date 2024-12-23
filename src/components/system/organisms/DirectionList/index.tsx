import { H4, Paragraph } from "@/components/common/typhography";
import { theme } from "@/styles/theme";
import DirectionItems, { IDirectionItems } from "../../molcules/DirectionItems";
import { DirectionListWrap } from "./styles";

/**
 * 지향점 키워드 리스트 컴포넌트
 * @param projectLists
 * @param onlyTitle
 * @returns
 */

interface IDirectionList {
  directionData: IDirectionItems[];
}

const DirectionList = ({ directionData }: IDirectionList) => {
  return (
    <DirectionListWrap>
      {directionData.map((direction, index) => (
        <DirectionItems
          keyword={direction.keyword}
          description={direction.description}
          key={`direction-${index}`}
        />
      ))}
    </DirectionListWrap>
  );
};

export default DirectionList;
