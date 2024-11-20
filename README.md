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
2. > select type
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
