import { Divider, FlexBox } from "@/components/common/component";
import { CompanyInfo, ServiceWithRole } from "../../atoms/CareerItem";
import {
  ICareerData,
  getProjectDetailModalName,
  projectDetailData,
} from "@/data/static";
import Tag from "../../atoms/Tag";
import { CareerItemWrap } from "./styles";
import ProjectItem from "../../molecules/ProjectItems";

/**
 * 경력 기술 리스트 컴포넌트(PC)
 * @param showDivider
 * @param company
 * @param service
 * @param history
 * @param role
 * @param description
 * @param techs
 * @param projectList
 * @returns
 */

export interface ICareerList {
  careerData: ICareerData;
  showDivider: boolean;
}

//프로젝트 상세 데이터가 있는 회사만 모달 이름 반환
export const getCareerProjectDetailModal = (company: string) =>
  projectDetailData.some((detail) => detail.company === company)
    ? getProjectDetailModalName(company)
    : undefined;

const CareerList = ({ careerData, showDivider }: ICareerList) => {
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
      <CareerItemWrap>
        <CompanyInfo companyName={company} history={history} />

        <div>
          <ServiceWithRole
            work={work}
            role={role}
            description={description}
            projectDetailModal={getCareerProjectDetailModal(company)}
          />

          <ProjectItem projectLists={projectList} onlyTitle={onlyTitle} />

          <FlexBox justify="flex-start" gap="10px" margin="30px 0 0">
            {techs.map((tech, index) => (
              <Tag keyword={tech} key={`tech-${index}`} />
            ))}
          </FlexBox>
        </div>
      </CareerItemWrap>

      {showDivider && <Divider margin="60px 0" />}
    </>
  );
};

export default CareerList;
