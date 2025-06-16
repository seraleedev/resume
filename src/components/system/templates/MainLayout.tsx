import Header from "../organisms/Header";
import Footer from "../organisms/Footer";
import { useRef, useState, useEffect } from "react";
import CareerSection from "./CareerSection";
import DirectionSection from "./DirectionSection";
import Modal from "./Modal";
import ProjectDetailList from "../organisms/ProjectDetailLists";
import {
  aboutMeTitle,
  gatdaProjectTitle,
  gatdaProject,
  aboutMe,
} from "@/data/static";
import { useModal } from "@/context/ModalContext";
import AboutMeList from "../organisms/AboutMeList";
import MobileProjectDetailList from "../organisms/ProjectDetailLists/mobile";

export interface IMainLayout {
  isMobile: boolean;
}

/**
 * 메인 페이지
 * @param isMobile
 * @returns
 */
const MainLayout = ({ isMobile }: IMainLayout) => {
  const pointRef = useRef<HTMLDivElement>(null);
  const START_POINT = 150;

  const [isPoint, setIsPoint] = useState<boolean>(false);
  const { isOpen, closeModal } = useModal();

  const setPoint = () => {
    const isReachPoint = window.scrollY >= START_POINT;
    if (isReachPoint !== isPoint) setIsPoint(isReachPoint);
  };

  useEffect(() => {
    window.addEventListener("scroll", setPoint);
    return () => {
      window.removeEventListener("scroll", setPoint);
    };
  }, [isPoint, pointRef]);


  return (
    <>
      {/* 프로젝트 상세 모달 */}
      <Modal
        isMobile={isMobile}
        title={gatdaProjectTitle.title}
        subTitle={gatdaProjectTitle.subTitle}
        show={isOpen["projectDetail"]}
        data={gatdaProject.map((project) =>
          isMobile ? (
            <MobileProjectDetailList project={project} key={project.id} />
          ) : (
            <ProjectDetailList project={project} key={project.id} />
          )
        )}
        closeModal={() => closeModal("projectDetail")}
      />

      {/* 자기소개 상세 모달 */}
      <Modal
        isMobile={isMobile}
        title={aboutMeTitle.title}
        show={isOpen["aboutMe"]}
        data={aboutMe.map((data, index) => (
          <AboutMeList data={data} key={index} />
        ))}
        closeModal={() => closeModal("aboutMe")}
      />

      <Header isScroll={isPoint} isMobile={isMobile} />

      <CareerSection isMobile={isMobile} isPoint={isPoint} />

      <DirectionSection isMobile={isMobile} />

      <Footer isMobile={isMobile} />
    </>
  );
};
export default MainLayout;
