import { IProjectData } from "@/data/static";
import { ProjectListWrap } from "./styles";
import ProjectTitle from "../../atoms/CareerItem/projectTitle/ProjectTitle";
import ProjectDetail from "../../atoms/CareerItem/projectDetail/ProjectDetail";

/**
 * 사내 프로젝트 리스트 컴포넌트
 * @param projectLists
 * @param onlyTitle
 * @returns
 */

export interface IProjectItems {
  projectLists: IProjectData[];
  onlyTitle?: boolean;
}

const ProjectItems = ({ onlyTitle, projectLists }: IProjectItems) => {
  return (
    <>
      {onlyTitle ? (
        <div style={{ margin: "15px 0 0" }}>
          {projectLists.map((project, index) => (
            <div key={`project-${index}`}>
              <ProjectTitle projectName={project.title} />
            </div>
          ))}
        </div>
      ) : (
        <ProjectListWrap>
          {projectLists.map((project, index) => (
            <div key={`project-${index}`}>
              <ProjectTitle projectName={project.title} />
              {project.detail && <ProjectDetail details={project.detail} />}
            </div>
          ))}
        </ProjectListWrap>
      )}
    </>
  );
};

export default ProjectItems;
