# MIRO

미로찾기 웹페이지

## Getting Started

이 프로젝트는 [yarn berry](https://github.com/yarnpkg/berry)를 사용합니다. 프로젝트 실행을 위해서는 `yarn` 패키지를 설치해야합니다.

이 프로젝트는 아래처럼 시작 할 수 있습니다.

```bash
yarn dev
```

이후 브라우저에서 [http://localhost:3000](http://localhost:3000)를 확인합니다.

## Project

이 프로젝트는 [FSD(Feature-Sliced Design)](https://feature-sliced.design/) 디자인 원칙에 따라 개발됐습니다.

구조는 다음과 같습니다.

```
src
ㄴ app
  ㄴ provider : 페이지들의 Layout을 지정하거나 context를 제공하는 컴포넌트입니다.
  ㄴ app-router : next의 app router 정의 코드입니다.
ㄴ processes : 여러 페이지가 상태에 따라 한 페이지에서 보여질 때 사용되는 페이지의 집합 컴포넌트입니다.
ㄴ pages : `widgets` 을 사용한 실제 페이지 컴포넌트입니다.
ㄴ widgets : 페이지에서 사용되는 복합적인 UI 컴포넌트입니다. `features`의 컴포넌트가 결합되어 사용돼야 할 때 여기에 정의합니다.
ㄴ features : 비즈니스 로직이 포함된 컴포넌트 입니다. 간단한 로직만 구현합니다.
ㄴ shared : 비즈니스 로직에 종속되지 않은 재사용 가능한 컴포넌트와 유틸리티 입니다.
```

각 디렉토리에는 `api`, `ui`, `model`, `lib`, `config`, `constant` 디렉토리가 포함될 수 있습니다.

각 디렉토리에는 `index.ts` 파일이 있으며, 여기에 정의된 컴포넌트들만이 다른 상위 디렉토리에서 접근할 수 있습니다. 그 외의 컴포넌트는 각 디렉토리의 내부에서만 접근할 수 있습니다.
