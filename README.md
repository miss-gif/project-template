# project-template

> Yarn Berry + Vite + React + TS 템플릿

최초 작성일 : 2024.11.01
최근 수정일 : 2024.11.21

## ✨ 템플릿 설치 및 실행

> Yarn PnP 환경 사용을 위한
> `ZipFS` VSCode 확장 프로그램 설치가 필요

```bash
npm install -g yarn # yarn 설치 (설치되어 있지 않은 경우)

yarn install # 의존성 설치
yarn dlx @yarnpkg/sdks vscode # Yarn PnP 환경 VSCode TS 설정
yarn run dev # 개발 서버 실행
```

### 템플릿 내용

> Yarn PnP 환경 사용을 위한
> `ZipFS` VSCode 확장 프로그램 설치가 필요

```bash
yarn create vite ./
yarn set version berry
yarn install
yarn config get nodeLinker
yarn dlx @yarnpkg/sdks vscode
```

#### VSCode에서 TypeScript 설정 (수동)

1. `ctrl` + `p`
2. `> select type`
3. sdk 사용

#### gitignore에 env를 버전 관리에서 제외

```
# yarn Zero-Install
.yarn/*
!.yarn/cache
!.yarn/patches
!.yarn/plugins
!.yarn/releases
!.yarn/sdks
!.yarn/versions

.env
```

#### 설치 플러그인

- `yarn add -D eslint prettier eslint-plugin-react eslint-config-prettier eslint-plugin-prettier @typescript-eslint/eslint-plugin @typescript-eslint/parser`
- `yarn dlx @yarnpkg/sdks vscode`

#### 경로 별칭 (임의 설정)

- tsconfig.app.json
- vite.config.ts

#### 설치 라이브러리

- react-router-dom
- @tanstack/react-query
- axios
- tailwindcss
- autoprefixer
- postcss

#### 폴더 구조 샘플

도메인 중심 설계(Clean Architecture) 원칙에 기반한 모듈화

```
src/
│
├── assets/           # 이미지, 폰트, 아이콘 등 정적 자원
├── components/       # 공용 UI 컴포넌트 (재사용 가능한 UI 조각)
│   ├── Button/
│   │   ├── Button.tsx
│   │   ├── Button.styles.ts
│   │   └── index.ts
│   └── Modal/
│       ├── Modal.tsx
│       ├── Modal.styles.ts
│       └── index.ts
│
├── features/         # 기능/도메인 기반 모듈
│   ├── About/
│   │   ├── components/   # 해당 도메인 전용 UI
│   │   │   ├── AboutCard.tsx
│   │   │   └── index.ts
│   │   ├── hooks/
│   │   │   └── useAboutData.ts
│   │   ├── pages/       # 라우팅되는 주요 페이지
│   │   │   └── AboutPage.tsx
│   │   ├── api/
│   │   │   └── aboutApi.ts
│   │   └── routes.tsx
│   │   └── index.ts      # 이 모듈의 진입점
│   ├── Contact/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── pages/
│   │   ├── api/
│   │   └── index.ts
│   └── ...
│
├── hooks/            # 전역 레벨에서 재사용 가능한 Custom Hook
│   └── useTheme.ts
│
├── layouts/          # 페이지 공용 레이아웃
│   ├── MainLayout.tsx
│   └── HeaderLayout.tsx
│
├── pages/            # 전체 앱의 라우팅을 설정
│   ├── App.tsx
│   ├── routes.ts
│   └── index.tsx
│
├── styles/           # 전역 스타일, 테마 관련 설정
│   ├── theme.ts
│   ├── GlobalStyles.ts
│   └── variables.scss
│
├── types/            # 전역 타입 정의
│   ├── api.d.ts
│   ├── common.d.ts
│   └── ...
│
├── utils/            # 유틸리티 함수 (공용 로직)
│   ├── dateUtils.ts
│   ├── validation.ts
│   └── ...
│
└── index.tsx         # 앱의 진입점

```
