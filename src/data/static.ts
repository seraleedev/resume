export const headerData = {
  title: ["작은 부분부터 실천하는", "Frontend Developer", "이슬아입니다."],
  intro: `안녕하세요, 저는 웹 디자이너에서 시작한 주니어 프론트엔드 개발자입니다.\n좋은 코드는 기본을 다지는 습관에서부터 시작된다고 생각합니다.\n기초부터 탄탄히 설계하여 안정적인 서비스를 제공하는 것을 가장 큰 가치로 여깁니다.`,
};

export interface ICareerData {
  index: number;
  company: string;
  history: string;
  service: string;
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
    history: "2022.08-2024.11",
    service: "대형폐기물 서비스 빼기",
    role: "웹 프론트엔드",
    description: `대형폐기물 처리 플랫폼인 '빼기' 는 하이브리드 앱으로 만들어졌으며 B2C 서비스인 내려드림과\nG2C 서비스인 직접버림을 중심으로 운영 중입니다. 프로젝트에 사용된 디자인 시스템을 통해\n컴포넌트의 재사용성을 고려했습니다.`,
    techs: ["Next.js", "Typescript", "React", "Github", "AWS", "Antd"],
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
          "앱내 신규 서비스 개발",
          "앱 서비스 유지보수",
        ],
      },
      {
        title: "빼기 클라이언트 앱 개발",
        detail: [
          "클라이언트 앱 리뉴얼 디자인 구현",
          "앱내 신규 서비스 개발",
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
    history: "2022.05-2022.06",
    service: "출차요청 서비스 플리지",
    role: "인턴",
    description: `앱내 채팅기능으로 간편히 출차를 요청하는 서비스 ‘플리지’의 홈페이지 화면 개발을 담당했습니다.`,
    techs: ["Next.js", "Typescript", "Antd"],
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
    history: "2019.10-2021.12",
    service: "내부 사업 프로젝트",
    role: "UI/BI 디자이너, 웹퍼블리셔",
    description: `바른손에서 진행하는 사업들의 웹페이지 디자인 및 제작을 담당했습니다.`,
    techs: ["HTML", "CSS", "Javascript"],
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
        detail: ["웹사이트 유지보수 및 디자인 "],
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
    history: "2018.10-2019.10",
    service: "외부 사업 프로젝트",
    role: "웹퍼블리셔",
    techs: ["HTML", "CSS", "Jquery"],
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
    description: `서비스에서 개선점을 찾아 발전시키는 작업에서 보람을 느낍니다.\n하나의 프로젝트를 장기적으로 유지하는 것을 전제로\n작업에 임하고 있습니다.`,
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
