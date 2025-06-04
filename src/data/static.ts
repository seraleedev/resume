export const headerData = {
  title: ["작은 부분부터 실천하는", "Frontend Developer", "이슬아입니다."],
  intro: `안녕하세요, 저는 웹 디자이너에서 시작한 주니어 프론트엔드 개발자입니다.\n"천릿길도 한 걸음부터" 라는 말처럼,\n좋은 코드는 하나씩 정리하는 습관부터 시작된다고 생각합니다.`,
};

export interface ICareerData {
  index: number;
  company: string;
  history: string;
  work: string;
  role: string;
  description?: string;
  techs: string[];
  projectList: IProjectData[];
  onlyTitle?: boolean;
}

export interface IProjectData {
  title: string;
  detail?: string[];
}

export const careerData: ICareerData[] = [
  {
    index: 0,
    company: "(주)같다",
    history: "2022.08-2024.11\n(2년 4개월)",
    work: "UI 신규 개발 및 유지보수",
    role: "웹 프론트엔드",
    description: `'빼기'는 대형폐기물 처리 플랫폼으로 하이브리드 앱 형태로 개발되었으며 고객용 클라이언트 앱과 제휴 파트너용 파트너즈 앱으로 구분됩니다. 입사 후 빼기 서비스 리뉴얼 프로젝트에 참여하여 아토믹 디자인 시스템을 기반으로, 컴포넌트 재사용성을 고려한 개발을 수행했습니다. 
리뉴얼 완료 후에는 서비스 고도화를 위해 다양한 신규 서비스 기능이 추가되었고, 기존 로직과의 원활한 통합을 위해 구성된 TF팀 내에서 다양한 직군 간 협업을 통해 개발을 담당했습니다.`,
    techs: [
      "Next.js",
      "Typescript",
      "React",
      "React-query",
      "Github",
      "AWS",
      "Antd",
    ],
    projectList: [
      {
        title: "빼기 홈페이지 개발",
        detail: [
          "로그인 및 회원가입 기능 개발",
          "회원 정보수정 기능 개발",
          "홈페이지 리뉴얼 디자인 구현",
          "사이트 유지보수",
        ],
      },
      {
        title: "빼기 파트너즈 앱 개발",
        detail: [
          "파트너즈 앱 리뉴얼 디자인 구현",
          "앱 내 신규 서비스 개발",
          "앱 서비스 유지보수",
        ],
      },
      {
        title: "빼기 클라이언트 앱 개발",
        detail: [
          "클라이언트 앱 리뉴얼 디자인 구현",
          "앱 내 신규 서비스 개발",
          "앱 서비스 유지보수",
        ],
      },
      {
        title: "빼기 관리자 페이지 개발",
        detail: [
          "관리자페이지 사이트 디자인 구현",
          "관리자페이지 기능 신규 개발",
          "사이트 유지보수",
        ],
      },
    ],
  },
  {
    index: 1,
    company: "(주)플리지",
    history: "2022.05-2022.06\n(1개월)",
    work: "UI 신규 개발",
    role: "인턴",
    description: `앱 내 채팅 기능으로 간편하게 출차를 요청하는 서비스 '플리지' 홈페이지 화면 개발을 담당했습니다.웹 퍼블리싱 경험을 바탕으로 UI 구현 및 공통 디자인 컴포넌트 구조 설계에 집중하였으며, 기존 팀원들이 작업 내역과 변경 히스토리를 쉽게 확인할 수 있도록 프로젝트 파일 문서화 작업을 추가로 수행했습니다.`,
    techs: ["Next.js", "Typescript", "recoil", "Github"],
    projectList: [
      {
        title: "플리지 홈페이지 개발",
        detail: [
          "프로필 화면 및 정보 수정 기능 구현",
          "채팅화면 UI 구현",
          "공통 리스트 컴포넌트 구현",
          "프로젝트 파일 문서화",
        ],
      },
    ],
  },
  {
    index: 2,
    company: "(주)바른손",
    history: "2019.10-2021.12\n(2년 3개월)",
    work: "UI/BI 디자인 및 웹사이트 화면 개발",
    role: "UI/BI 디자이너, 웹퍼블리셔",
    description: `바른손 내 자회사 및 사업들의 BI, UI/UX, 홍보영상, 웹사이트 제작을 담당했습니다.`,
    techs: ["HTML", "CSS", "Javascript", "Jquery"],
    projectList: [
      {
        title: "nPlanet 사이트 구축",
        detail: [
          "nPlanet 웹사이트 UI 디자인",
          "이미지 콘텐츠 제작",
          "데이터 관리",
        ],
      },
      {
        title: "바른손랩스 사이트 구축",
        detail: ["바른손랩스 BI 디자인", "바른손랩스 웹사이트 디자인 및 제작"],
      },
      {
        title: "모바일 게임 매드햄스 제작",
        detail: [
          "게임기획 및 레벨 디자인",
          "캐릭터 디자인 및 UI 그래픽 구현",
          "사운드 및 번역",
        ],
      },
      {
        title: "Jolsey 사이트 구축",
        detail: [
          "Jolsey 웹사이트 UI 디자인",
          "Jolsey BI 디자인",
          "이미지 콘텐츠 제작",
        ],
      },
      {
        title: "바른손 홈페이지",
        detail: ["웹사이트 유지보수 및 디자인 ", "외부 홍보 영상 콘텐츠 제작"],
      },
      {
        title: "defiVR 서비스 운영",
        detail: [
          "defiVR 웹사이트 기획 및 디자인, 제작",
          "유튜브 채널 콘텐츠 제작",
        ],
      },
    ],
  },
  {
    index: 3,
    company: "(주)이온소프트",
    history: "2018.10-2019.10\n(1년)",
    work: "UI 디자인 및 웹사이트 기획, 화면 개발을 담당했습니다.",
    role: "웹퍼블리셔",
    techs: ["HTML", "CSS", "Javascript", "Jquery"],
    onlyTitle: true,
    projectList: [
      {
        title: "AML 프로그램 화면 퍼블리싱",
      },
      {
        title: "금융서비스 및 교육서비스 관리자 페이지 화면 퍼블리싱",
      },
      {
        title: "내/외부업체 소개 홈페이지 기획 및 제작",
      },
    ],
  },
];

export const directionData = [
  {
    keyword: "Description",
    description: `주석을 통해 이 함수가 어떤 역할을 하는 함수인지,\n어디에 사용되는 데이터인지 설명합니다.\n남들이 알아보기 쉬운 코드를 작성하려 합니다.`,
  },
  {
    keyword: "Stability",
    description: `테스트 시 오류가 없는 결과물을 내려 합니다.\n1개라도 버그의 개수를 줄이기 위해\n스스로 여러 번의 테스트를 실행합니다.`,
  },
  {
    keyword: "Unity",
    description: `컴포넌트 생성 시, 디자인 가이드 수칙을 따르는 것을 중요시합니다.\n프로젝트 때마다 달라지는 컴포넌트가 아닌,\n전체적인 틀 안에서 변할 수 있는 컴포넌트를 추구합니다.`,
  },
  {
    keyword: "Improvement",
    description: `서비스가 업데이트되듯이 개개인의 역량을 개선하는 것이 중요하다 생각합니다.부족한 기술 경험을 채우기 위해 틈틈이 알고리즘에 대해 공부하거나 작은 프로젝트를 진행합니다.`,
  },
  {
    keyword: "Communication",
    description: `여러 직군의 팀원들과 소통하고 합의점을 찾을 수 있습니다.\n타인의 시선에 맞추어 설명하려고 하며\n다른 사람의 경험을 존중하는 것을 중요히 여깁니다.`,
  },
];

export const contactData = [
  { platform: "Github", link: "https://github.com/seraleedev/resume" },
  { platform: "Velog", link: "https://velog.io/@pingu944" },
];

export const resumeLink =
  "https://drive.google.com/file/d/1AlsMe0Bdy3SXryPJRHvPVvCWJycobIAO/view?usp=sharing";
