# React & Next.js 실습 모음 (`react-next`)

코리아IT아카데미 `(디지털컨버전스) 공공데이터 융합 풀스택 개발자 양성과정Ⅰ`에서  
React와 Next.js를 학습하며 진행한 실습 예제들을 모아둔 저장소입니다.

## 1. 교육/진행 정보

- **교육기관**: 코리아IT아카데미  
- **과정**: 공공데이터 융합 풀스택 개발자 양성과정Ⅰ  
- **역할**: React / Next.js 구간 실습 코드 정리  
- **유형**: 수업 예제, 연습 과제, 미니 프로젝트 모음

이 레포에서 React와 Next.js의 기초 문법·라우팅·상태 관리·API 연동을 단계적으로 연습한 뒤,  
학습 내용을 바탕으로 **개인 프로젝트 ToDo 리스트**를 별도 저장소에서 구현했습니다.  
- React 개인 프로젝트: [Todo-list](https://github.com/hyebin-dev/Todo-list)

## 2. 주요 학습 내용

### React

- JSX 문법과 함수형 컴포넌트 구조
- props / state 기본 개념과 이벤트 처리
- 컴포넌트 분리, 재사용 가능한 UI 구성
- React Router를 이용한 SPA(Single Page Application) 라우팅

### Next.js

- 파일 기반 라우팅, 동적 라우팅 패턴
- `app` 디렉터리 구조와 레이아웃 구성
- API Route를 이용한 간단한 백엔드 API 구현
- MySQL과 연동한 게시판 / Todo 데이터 CRUD 실습
- 상태 관리 패턴(useReducer 등)과 컴포넌트 분리

## 3. 폴더 구성

| 폴더명         | 내용 |
|---------------|------|
| `react/`      | React 기본 문법 및 환경 설정, 첫 컴포넌트 실습 |
| `react-basic/`| JSX, props/state, 이벤트 처리, 간단한 컴포넌트 연습 |
| `react-router/` | React Router를 사용한 페이지 전환, 헤더/푸터 레이아웃 구성 |
| `next-app/`   | Next.js 기본 구조, 페이지/레이아웃/글로벌 스타일 실습 |
| `next-router/`| 파일 기반/동적 라우팅, 파라미터 전달, 레이아웃 컴포넌트 실습 |
| `next-api/`   | Next.js API Route로 간단한 데이터 조회 API 구현 |
| `next-reducer/` | useReducer 기반 상태 관리, 컴포넌트 간 상태 전달 패턴 실습 |
| `next-board/` | Next.js + MySQL을 이용한 게시판 CRUD, API 및 DB 연동 연습 |
| `next-todo/`  | Next.js + MySQL 기반 Todo 리스트 미니 프로젝트 (API/DB/화면 구성) |

## 4. 실행 방법

각 예제 폴더는 독립적인 프로젝트로 구성되어 있으며,  
폴더별로 아래 명령으로 실행할 수 있습니다.

```bash
# 예시: next-todo 실행
cd next-todo

npm install
npm run dev   # 또는 npm start (프로젝트 설정에 따라 다를 수 있음)
````

일부 Next.js 예제(`next-board`, `next-todo`)는
로컬 MySQL 설정 및 환경 변수(.env) 설정이 필요합니다.
실제 프로젝트에서는 환경 변수 파일과 민감 정보는 Git에 포함하지 않고 관리했습니다.
