import DirectionItems, { IDirectionItems } from "../../molcules/DirectionItems";
import MobileDirectionItems from "../../molcules/DirectionItems/MobileDirectionItems";
import { DirectionListWrap } from "./styles";

/**
 * 지향점 키워드 리스트 컴포넌트
 * @param projectLists
 * @param isMobile
 * @returns
 */

interface IDirectionList {
  directionData: IDirectionItems[];
  isMobile?: boolean;
}

const DirectionList = ({ directionData, isMobile }: IDirectionList) => {
  return isMobile ? (
    <>
      {directionData.map((direction, index) => (
        <MobileDirectionItems
          keyword={direction.keyword}
          description={direction.description}
          key={`direction-${index}`}
        />
      ))}
    </>
  ) : (
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
