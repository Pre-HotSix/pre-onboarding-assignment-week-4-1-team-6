# 🎉 원티드 프리온보딩 프론트엔드 코스 6차 과제

## 과제 소개

- 목표 :
- 작업기간 :

<br/>

## 구현 영상

<br/>

## 팀원들을 소개합니다.

| 멤버                                          | 담당       | 포부                                      |
| :-------------------------------------------- | :--------- | :---------------------------------------- |
| [김승모(팀장)](https://github.com/endmoseung) | 프론트엔드 | 프리온보딩 코스 수료후 관련기업 취업성공! |
| [손우영](https://github.com/dndud2906)        | 프론트엔드 | 프리온보딩 기반으로 하루빨리 이직         |
| [이종호](https://github.com/devfrank9)        | 프론트엔드 | 원피스 완결 전에 오픈소스 컨트리뷰터 달기 |
| [민유경](https://github.com/MINYUKYUNG)       | 프론트엔드 | 10월 안에 취직!                           |
| [강다현](https://github.com/KKangdaa)         | 프론트엔드 | 실무를 아는 신입개발자 되기               |

<br/>

## Commit & Merge Convention

```
1. dev (개발) 브랜치를 생성한다.
2. 각자 주어진 작업에 대한 issue를 생성한다.
3. 생성된 issue 번호로 개별 branch 이름을 갖는다
4. 개별 branch에서 작업후 Git 컨벤션에 따라 커밋 및 PR을 한다.
5. 이때, PR은 dev(개발)로 한다.
6. 모든 issue close 및 작업사항 없을시 main으로 dev(개발) 브랜치를 PR한다.
7. 이후 작업 발생시 1~6을 반복한다.
```

<br />

## 실행 방법

레포지토리를 `clone` 합니다

```markdown
$ git clone https://github.com/Pre-HotSix/pre-onboarding-assignment-week-3-2-team-6
```

dependencies를 설치합니다

```markdown
$ npm install
```

env를 설정합니다

```markdown
$ 내려받은 프로젝트의 최상위 폴더 안에 .env 파일을 생성합니다.
REACT_APP_API_URL=http://localhost:4000/comments
```

api 서버를 실행합니다

```markdown
$ npm run api
```

프로젝트를 실행합니다

```markdown
$ npm start
```

<br/>

## 폴더 구조

```
root
├── .eslintrc
├── .vscode
├── .prettierrc
├── package-lock.json
├── package.json
├── public
|   ├── favicon.ico
|   └── index.html
└── src
    ├── apis
    ├── containers
    ├── components
    ├── pages
    ├── routes
    ├── redux
    ├── styles
    ├── App.jsx
    └── index.js
```

| 폴더       | 구분                                    |
| :--------- | :-------------------------------------- |
| apis       | api함수들을 모아둔 폴더                 |
| containers | 컴포넌트들에 대한 부모 Container모음    |
| components | 코드 재사용을 위한 컴포넌트 관리형 폴더 |
| pages      | url주소에 따른 페이지 구성 폴더         |
| routes     | 라우팅 관련 처리 폴더                   |
| redux      | redux를 활용한 폴더                     |
| styles     | 전역으로 사용하는 style 관리 폴더       |

<br/>

## 과제범위

## 요구사항

<br />

## 기술 스택

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
![Redux](https://img.shields.io/badge/redux-764ABC?style=for-the-badge&logo=redux&logoColor=white)

<br />

## Best Practice

### 1.

💡 이유 :
