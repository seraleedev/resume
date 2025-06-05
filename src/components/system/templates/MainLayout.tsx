import Header from "../organisms/Header";
import Footer from "../organisms/Footer";
import { useRef, useState, useEffect } from "react";
import CareerSection from "./CareerSection";
import DirectionSection from "./DirectionSection";
import Modal from "./Modal";

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
      <Header isScroll={isPoint} isMobile={isMobile} />

      <CareerSection isMobile={isMobile} isPoint={isPoint} />

      <DirectionSection isMobile={isMobile} />

      <Footer isMobile={isMobile} />
    </>
  );
};
export default MainLayout;
