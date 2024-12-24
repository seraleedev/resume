import { Divider, FlexBox } from "@/components/common/component";
import { CompanyInfo, ServiceWithRole } from "../../atoms/CareerItem";
import { ICareerData } from "@/data/static";
import Tag from "../../atoms/Tag";
import { CareerItemWrap } from "./styles";
import ProjectItem from "../../molcules/ProjectItems";

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

const CareerList = ({ careerData, showDivider }: ICareerList) => {
  const {
    company,
    service,
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
            serviceName={service}
            role={role}
            description={description}
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
