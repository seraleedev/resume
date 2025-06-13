//헤더
export const headerData = {
  title: ["작은 부분부터 실천하는", "Frontend Developer", "이슬아입니다."],
  intro: `안녕하세요, 저는 웹 디자이너에서 시작한 주니어 프론트엔드 개발자입니다.\n"천릿길도 한 걸음부터" 라는 말처럼,\n좋은 코드는 하나씩 정리하는 습관부터 시작된다고 생각합니다.`,
};

//경력데이터 타입
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
  projectDetail?: string;
}
//경력데이터 >프로젝트 타입
export interface IProjectData {
  title: string;
  detail?: string[];
}

//경력 내용
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
    projectDetail:
      "https://www.notion.so/20a6e88b4c798067a08ec695fe5b45f2?source=copy_link",
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

//목표 내용
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

//연락처 내용
export const contactData = [
  { platform: "Github", link: "https://github.com/seraleedev/resume" },
  { platform: "Velog", link: "https://velog.io/@pingu944" },
];

//이력서 pdf
export const resumeLink =
  "https://drive.google.com/file/d/1AlsMe0Bdy3SXryPJRHvPVvCWJycobIAO/view?usp=sharing";

//프로젝트 상세기술 데이터타입
export interface IProjectDetailData {
  id: number;
  projectName: string;
  rate: number;
  contribution: string[];
  content: IProjectDetailContents;
}
export interface IProjectDetailContents {
  goal: string;
  range: string;
  period: string;
  member: string;
  tech: string;
}
// 프로젝트 내용 타이틀
export const gatdaProjectTitle = {
  title: "주요 프로젝트",
  subTitle:
    "모든 프로젝트의 개인 기여도는 작업 구성원을 기준으로 산출되었습니다.",
};
// 프로젝트 내용
export const gatdaProject: IProjectDetailData[] = [
  {
    id: 1,
    projectName: "빼기 클라이언트 : 재활용 계산기 서비스",
    rate: 14,
    contribution: [
      "재활용 계산기 거점 리스트 조회 및 필터링, 계산기 화면, 거점 상세페이지 및 후기 작성기능 구현",
      "재활용 계산기 QA테스트",
    ],
    content: {
      goal: "신규 유저 유입률 증가 및 기존 유저의 앱 체류시간 증가",
      range: "빼기 클라이언트 내 재활용 계산기 신규 서비스 화면 작업",
      period: "2024.08~2024.09(4주)",
      member: "백엔드 3인, 프론트엔드 2인, 디자이너 1인",
      tech: "Typescript, Next.js,styled-component,React-query,Redux",
    },
  },
  {
    id: 2,
    projectName: "빼기 클라이언트 : 직접버림&내려드림 연계 서비스",
    rate: 35,
    contribution: [
      "직접버림&내려드림 연계 서비스 전용 신청 화면 및 상세페이지 구현",
      "연계 서비스로 인한 관리자페이지 UX 플로우 수정",
      "연계 서비스 데이터 QA 테스트",
    ],
    content: {
      goal: "직접버림+내려드림 연계를 통한 작업건수 및 매출 증가",
      range: "빼기 클라이언트 내 직접버림,내려드림 연계서비스 화면 작업",
      period: "2022.10~2022.10(2주)",
      member: "백엔드 1인, 프론트엔드 1인, 기획자 1인",
      tech: "Typescript, Next.js,styled-component,React-query,Redux",
    },
  },
  {
    id: 3,
    projectName: "빼기 관리자 페이지 리뉴얼",
    rate: 20,
    contribution: [
      "고객정보,파트너 정보, 작업정보 조회 및 수정 페이지 기능구현",
      "앱내 콘텐츠 조회, 신규작성, 수정 페이지 기능구현",
      "관리자 페이지 공통 레이아웃 설정",
    ],
    content: {
      goal: "관리자 페이지 리뉴얼을 통한 브랜딩 강화, 사용자 UX 개선",
      range: "빼기 관리자 페이지 리뉴얼 작업 (신규 화면 구현 및 API 교체)",
      period: "2022.09~2022.09(4주)",
      member: "백엔드 2인, 프론트엔드 2인, 기획자 1인",
      tech: "Typescript,React,Ant design,React-query,Redux",
    },
  },
  {
    id: 4,
    projectName: "빼기 홈페이지 리뉴얼",
    rate: 25,
    contribution: [
      "홈 화면, 서브 페이지 등 정적 페이지 화면구현",
      "API 및 상태관리 라이브러리 교체 작업 (redux chunk > redux toolkit)",
      "로그인,회원가입, 마이페이지 화면 및 기능구현",
    ],
    content: {
      goal: "홈페이지 리뉴얼을 통한 브랜딩 강화, 사용자 UX 개선",
      range: "빼기 홈페이지 리뉴얼 작업 (신규 화면 구현 및 API 교체)",
      period: "2022.08~2022.08(4주)",
      member: "백엔드 1인, 프론트엔드 2인, 디자이너 1인",
      tech: "Typescript, Next.js,styled-component,React-query,Redux",
    },
  },
];

//자기소개 데이터 타입
export interface AboutMeData {
  title: string;
  description: string;
}
//자기소개 타이틀
export const aboutMeTitle = { title: "어떤 사람인가요?" };
// 자기소개 내용
export const aboutMe: AboutMeData[] = [
  {
    title: "정리하고 기록하는 개발자",
    description: `저는 코드를 정리하는 것을 즐기며 가독성과 유지보수성을 높이는 것에 가치를 두는 사람입니다. 
"천릿길도 한 걸음부터" 라는 말처럼, 좋은 코드는 하나씩 정리하는 습관부터 시작된다고 생각합니다. 
이처럼 좋은 코드를 구현하기 위해 코드 작성 시 주석을 첨부하는 습관을 들이고, 코드 컨벤션 및 업데이트 히스토리를 기록하는 것을 중요하게 여깁니다. 
작은 정보들을 문서화하는 것만으로도 빠른 서비스 파악과 원활한 협업에 도움을 줄수 있기에 프로덕트의 완성도를 올려준다고 생각하기 때문입니다.`,
  },
  {
    title: "함께 고민하는 개발자",
    description: `작은 프로젝트라도 완성도를 높이기 위해 기획과 디자인 단계에서 의견을 내는 것을 겁내지 않습니다. 
프로덕트의 목적을 이해하고, 내가 쓰기 좋은 제품이 되어야 시장에서도 경쟁력 있는 제품을 만들 수 있기 때문입니다. 
개발이 완료된 후에는 개발 테스트까지 직접 참여하여 기획 단계에서 생길 수 있는 변수에 대해 고민하고 이야기를 나누었습니다. 
또한 웹디자이너로 근무한 경험을 살려 프론트엔드에서 컴포넌트의 크기와 간격을 지키는 등 디자인 QA를 미연에 방지하는 것을 중요하게 여깁니다.`,
  },
  {
    title: "편의성을 추구하는 개발자",
    description: `관리자 페이지를 리뉴얼하는 프로젝트에서는 시간상 디자이너가 투입되지 못한 프로젝트였습니다. 
디자이너가 없는 상황이라도 사용자 편의성을 신경쓰는 것이 프론트엔드 단계에서 이루어져야 한다고 느껴 팀원들과 함께 
UI 컴포넌트 라이브러리를 이용해 기획서에 명시되지 않았던 레이아웃들을 재구성하였습니다. 
리뉴얼 이후에도 관리자 페이지를 운영하는 팀원들에게 피드백을 받아 매 스프린트 별로 개선된 UI를 제공하는 패치를 진행하기도 했습니다. 
사용자의 귀찮음을 줄일 수 있다면, 저는 기꺼이 시간을 할애합니다.`,
  },
];
