import { Divider, FlexBox } from "@/components/common/component";
import {
  MobileCompanyInfo,
  MobileServiceWithRole,
} from "../../atoms/CareerItem";
import Tag from "../../atoms/Tag";
import { ICareerList } from ".";
import MobileProjectItems from "../../molcules/ProjectItems/MobileProjectItems";

/**
 * 경력 기술 리스트 컴포넌트(mobile)
 * @param showDivider
 * @param company
 * @param work
 * @param history
 * @param role
 * @param description
 * @param techs
 * @param projectList
 * @returns
 */

const MobileCareerList = ({ careerData, showDivider }: ICareerList) => {
  const {
    company,
    work,
    history,
    role,
    description,
    techs,
    projectList,
    onlyTitle,
  } = careerData;

  return (
    <>
      <MobileCompanyInfo companyName={company} history={history} />
      <MobileServiceWithRole
        work={work}
        role={role}
        description={description}
      />

      <MobileProjectItems projectLists={projectList} onlyTitle={onlyTitle} />

      <FlexBox
        justify="flex-start"
        gap="10px"
        margin="20px 0 0"
        width="100%"
        flexWrap="wrap"
      >
        {techs.map((tech, index) => (
          <Tag keyword={tech} key={`tech-${index}`} />
        ))}
      </FlexBox>

      {showDivider && <Divider margin="30px 0" />}
    </>
  );
};

export default MobileCareerList;
