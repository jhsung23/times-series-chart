# Time-series Chart

> 원티드 FE 프리온보딩 인턴십 4주차 과제입니다.
>
> - 개발자: 성지현
> - 개발 기간: 2023.09.10 ~ 2023.09.13

데이터를 시계열 차트로 보여주는 웹 사이트입니다.

## 📄 요구사항

- 시계열 차트 만들기
  - 주어진 JSON 데이터의 key 값(시간)을 기반으로 시계열 차트 보여주기
  - 하나의 차트에 Area와 Bar 형태의 그래프가 모두 존재하게 만들기
    - Area는 value_area 기준
    - Bar는 value_bar 기준
  - Y축에 수치 표현하기
- 호버 시 툴팁 제공하기
  - 툴팁에는 id, value_area, value_bar 데이터를 담기
- 필터링 기능 구현하기
  - 지역 이름을 필터링 버튼으로 만들기
  - 버튼 클릭 시 선택한 버튼에 해당하는 데이터 구역을 하이라이트 처리하기
  - 데이터 영역 클릭 시 선택한 데이터 영역에 해당하는 데이터 구역을 하이라이트 처리하기

## 🔗 배포 링크

[https://times-series-chart.vercel.app](https://times-series-chart.vercel.app)

## 🏃‍♂️ 실행 방법

본 레포지토리를 clone한 후, 다음 절차를 따라주세요.

1. 패키지 설치
```bash
yarn
```

2. 개발 환경에서 실행
```bash
yarn dev
```
위 명령어 입력 후 `http://localhost:5173/`에 접속해 주세요.

## 🎬 실행 화면

![Sep-12-2023 23-54-55](https://github.com/jhsung23/times-series-chart/assets/69228045/36f64372-21f6-4332-bb23-80e46d844e31)

## 🧑🏻‍💻 개발 내용

### 시계열 차트

시계열 차트 구현을 위해 `recharts` 라이브러리를 사용했습니다.

요구사항에 부합하는 기능을 제공하고 최근까지 지속적인 업데이트가 이루어지고 있다는 점에서 해당 라이브러리를 선택하였고, `ComposedChart`를 활용해 복합 그래프 구현했습니다.

### hover 시 툴팁 보여주기

툴팁으로 사용할 컴포넌트를 만들어 `recharts`에서 제공하는 `Tooltip`의 `content` props로 활용했습니다.

### 필터링을 위한 Chip 버튼 구현 및 데이터 필터링

데이터의 `id`를 버튼으로 만들기 위해 `Chip` 컴포넌트를 만들었고 이를 쉽게 사용할 수 있도록 `useChip` 커스텀 훅을 만들었습니다.

Chip의 onClick 핸들러에 `changeSelectedChip` 함수를 할당하여 선택되지 않은 경우 해당 버튼이 선택되고, 이미 선택된 버튼이라면 선택을 해제하도록 구현했습니다.

```tsx
const useChip = () => {
  const [selectedChip, setSelectedChip] = useState<ChipValue>(null);

  const changeSelectedChip = (chip: ChipValue) => {
    if (selectedChip === chip) setSelectedChip(null);
    else setSelectedChip(chip);
  };

  return { selectedChip, changeSelectedChip };
};
```

차트에서 데이터를 렌더링할 때, 해당 데이터가 하이라이트 돼야 하는지 빠르게 확인할 수 있도록 `selectedChip`으로 필터링한 데이터들을 `Set 자료구조`에 저장했습니다.

```tsx
const filteredDatas = new Set(
  chartDatas.filter((data) => data.id === selectedChip).map((data) => data.time),
);
```

`Set 자료구조`의 `has` 메서드를 사용해 배열을 사용했을 때보다 빠르게 포함 여부를 알 수 있게 했습니다.

```tsx
{chartDatas.map((data) => (
  <Cell
    key={data.time}
    fill={filteredDatas.has(data.time) ? chartColors.primaryBar : chartColors.secondaryBar}
  />
))}
```

### 
### 라이트/다크 모드

`styled-components`의 `ThemeProvider`를 사용해 라이트/다크 모드에 따른 일관된 UI를 구성하였습니다.

## 🛠️ 기술 스택

<div>
  <img src="https://img.shields.io/badge/react-61DAFB?style=flat&logo=react&logoColor=white">
  <img src="https://img.shields.io/badge/typescript-3178C6?style=flat&logo=typescript&logoColor=white">
  <img src="https://img.shields.io/badge/styled components-DB7093?style=flat&logo=styledcomponents&logoColor=white">
  <img src="https://img.shields.io/badge/recharts-20b5bf?style=flat&logo=recharts&logoColor=white">
  <img src="https://img.shields.io/badge/jest-C21325?style=flat&logo=jest&logoColor=white">
</div>
