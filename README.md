# [프론트엔드] 이슬아 - 웹 이력서 사이트

![메타 이미지](https://seraleedev.github.io/resume/meta_img.png)

## 개요

웹에서 공개적으로 사용하기 위한 개인 이력서 및 경력기술서 사이트입니다.

>[제작 후기 벨로그 포스트](https://velog.io/@pingu944/%EC%9E%90%EA%B8%B0%EC%86%8C%EA%B0%9C-%EC%82%AC%EC%9D%B4%ED%8A%B8%EB%A5%BC-%EB%A7%8C%EB%93%A4%EC%96%B4%EB%B2%84%EB%A6%BC)

## 설치된 라이브러리 및 패키지
- React(18버전, ts 사용) : 컴포넌트의 재사용성을 위한 라이브러리. 제게 가장 익숙하고, 빠르게 작업할 수 있어 선택하였습니다.
- react-responsive : 반응형 디자인을 적용하기 위해 설치했습니다.
- styled-components : CSS-in-JS 방식으로 빠르게 스타일링을 하기 위해 설치했습니다.
- 상태 관리는 라이브러리를 따로 사용하지 않고 간단하게 context API를 이용하고 있습니다.

## 배포 방식
github page를 이용한 무료 호스팅, gh-pages를 이용하여 쉽고 빠르게 배포하였습니다.

## 파일구조
컴포넌트는 atomic design 패턴을 사용해 보았습니다. 자세한 사항은 소스 코드를 확인해주세요.
```
📦src
 ┣ 📂components
 ┃ ┣ 📂common
 ┃ ┗ 📂system
 ┃ ┃ ┣ 📂atoms
 ┃ ┃ ┣ 📂molcules
 ┃ ┃ ┣ 📂organisms
 ┃ ┃ ┗ 📂templates
 ┃ ┃ ┃ ┣ 📂Modal
 ┃ ┃ ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┃ ┃ ┣ 📜ModalHeader.tsx
 ┃ ┃ ┃ ┃ ┗ 📜styles.ts
 ┃ ┃ ┃ ┣ 📜CareerSection.tsx
 ┃ ┃ ┃ ┣ 📜DirectionSection.tsx
 ┃ ┃ ┃ ┣ 📜MainLayout.tsx
 ┃ ┃ ┃ ┗ 📜styles.ts
 ┣ 📂context
 ┣ 📂data
 ┣ 📂styles
 ┣ 📂type
 ┣ 📜App.tsx
 ┣ 📜index.tsx

```
## 앞으로의 개선 사항
- 이력서 내에 포트폴리오 섹션 만들기. 
- 프로젝트 상세 설명 컨텐츠 개선하기 (주변에서 도움을 받긴 했지만, 저만의 방식대로 개선해보려 합니다.)