import ProjectTitle from "../../atoms/CareerItem/projectTitle/ProjectTitle";
import ProjectDetail from "../../atoms/CareerItem/projectDetail/ProjectDetail";
import { IProjectItems } from ".";

/**
 * 사내 프로젝트 리스트 컴포넌트(mobile)
 * @param projectLists
 * @param onlyTitle
 * @returns
 */

const MobileProjectItems = ({ onlyTitle, projectLists }: IProjectItems) => {
  return (
    <>
      {onlyTitle ? (
        <div style={{ margin: "5px 0 0" }}>
          {projectLists.map((project, index) => (
            <div key={`project-${index}`}>
              <ProjectTitle projectName={project.title} isMobile />
            </div>
          ))}
        </div>
      ) : (
        <>
          {projectLists.map((project, index) => (
            <div key={`project-${index}`} style={{ margin: "15px 0" }}>
              <ProjectTitle projectName={project.title} isMobile />
              {project.detail && (
                <ProjectDetail details={project.detail} isMobile />
              )}
            </div>
          ))}
        </>
      )}
    </>
  );
};

export default MobileProjectItems;
