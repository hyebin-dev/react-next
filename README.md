# React & Next.js 실습 모음 (`react-next`)

코리아IT아카데미 **(디지털컨버전스) 공공데이터 융합 풀스택 개발자 양성과정Ⅰ** 과정에서  
React와 Next.js를 학습하며 진행한 실습 예제들을 모아둔 저장소입니다.

---

## 1. 교육/진행 정보

- **교육기관**: 코리아IT아카데미  
- **과정**: 공공데이터 융합 풀스택 개발자 양성과정Ⅰ  
- **유형**: 수업 예제, 연습 과제, 미니 프로젝트 모음  
- **정리 목적**: React / Next.js 핵심 문법과 구조를 단계적으로 복습할 수 있도록 폴더별로 분리하여 관리

학습 내용을 바탕으로 **개인 확장 프로젝트는 별도 저장소로 분리**하여 관리하고 있습니다.

- Next.js 개인 프로젝트(확장): https://github.com/hyebin-dev/next-todo

---

## 2. 주요 학습 내용

### React

- JSX 문법과 함수형 컴포넌트 구조
- props / state 개념과 이벤트 처리
- 컴포넌트 분리 및 재사용 가능한 UI 구성
- React Router를 이용한 SPA 라우팅

### Next.js

- 파일 기반 라우팅, 동적 라우팅 패턴
- `app` 디렉터리 구조와 레이아웃 구성
- API Route를 이용한 간단한 백엔드 API 구현
- 상태 관리 패턴(useReducer 등)과 컴포넌트 분리

---

## 3. 폴더 구성

각 폴더는 **독립적인 프로젝트(폴더 1개 = 프로젝트 1개)** 로 구성되어 있습니다.

| 폴더명 | 내용 |
|---|---|
| `react/` | React 기본 문법 및 환경 설정, 첫 컴포넌트 실습 |
| `react-basic/` | JSX, props/state, 이벤트 처리, 컴포넌트 연습 |
| `react-router/` | React Router 기반 라우팅, 레이아웃 구성 |
| `next-app/` | Next.js 기본 구조, 페이지/레이아웃/스타일 실습 |
| `next-router/` | 파일 기반/동적 라우팅, 파라미터 전달 실습 |
| `next-api/` | Next.js API Route로 간단한 데이터 조회 API 구현 |
| `next-reducer/` | useReducer 기반 상태 관리 패턴 실습 |
| `next-board/` | 게시판 CRUD 실습 (API 및 DB 연동 예제 포함) |

> `next-todo`는 수업 실습을 기반으로 개인적으로 기능을 확장하여 **별도 저장소로 분리**했습니다.  
> https://github.com/hyebin-dev/next-todo

---

## 4. 실행 방법

실행하려는 프로젝트 폴더로 이동한 뒤 실행합니다.

```bash
cd <폴더명>
npm install
npm run dev
````

일부 예제(예: `next-board`)는 로컬 DB 또는 환경 변수 설정이 필요할 수 있습니다.
환경 변수(.env.local)에는 민감 정보가 포함될 수 있으므로 Git에 커밋하지 않습니다.

