---
layout: home-with-toc
title: "반응형"
date: 2024-09-07 23:12:00 +0900
categories: etc
parent: CSS
---

# 반응형

> 여러 기기의 종류에 따라 웹사이트가 유동적으로 바뀌는 것을 반응형 웹이라고 한다. 미디어 쿼리를 통해 반응형 웹을 구현할 수 있다.

이때, 반응형 웹은 기기의 종류에 반응하는 것이 아니라 <span style="color: yellowgreen;">기기의 너비에 반응</span>한다.

반응형 웹은 모든 기기에서 접속이 가능하며, 가로 모드에 맞춘 레이아웃 또한 변경이 가능하여 사이트 유지보수 및 관리가 유용하다.

---

## 그리드 시스템

> 그리드 시스템은 웹 페이지를 여러 개의 열로 나누어 레이아웃을 구성하는 시스템이다.

화면 너비 값 또는 칼럼 개수에 따라 그리드 시스템이 나뉘며, 주로 `960px 12column, 1024px 12column, 1440px 12column` 등이 있다. 피그마에서도 그리드 시스템을 제공하여 쉽게 그리드 시스템을 구현할 수 있다.

그리드의 종류로는 `고정, 가변` 두가지가 있으며, 고정은 pc전용 사이트를 만들때 편리하며, 화면 너비가 변경되어도 그리드의 너비가 변하지 않는 반면에, 가변은 화면 너비가 변경되면 그리드의 너비도 변하는 것을 뜻한다.

- **고정 그리드 레이아웃** - 너비를 `픽셀 값`으로 지정하여 <span style="color: yellowgreen;">고정된 너비</span>를 가지게 된다. 화면 너비가 좁아질 경우, 내용이 숨겨진다.

- **가변 그리드 레이아웃** - 너비를 `%`로 변환하여 전체를 감싸는 요소의 너비를 기준으로 각 요소의 너비를 계산하여 <span style="color: yellowgreen;">유동적인 너비</span>를 가지게 된다. 화면에 꽉 차게 하기 위해서는 100%를 주면 된다.

  > px를 가변으로 변환하는 공식 -> `(요소의 너비 / 부모요소의 너비) * 100`
  >
  > <p style="color: #aaa;">예시: 960px 컨테이너 안의 240px 요소 → `(240/960)*100 = 25%`</p>

---

## 미디어 쿼리

> 미디어 쿼리는 접속하는 장치에 따라 특정 스타일을 적용하는 것을 뜻한다.

ex) 브라우저 창의 너비를 조절할 때 레이아웃 및 화면에 표시되는 요소를 변경할 때 사용

```css
@media screen and (max-width: 768px) {
  /* 뷰포트 너비가 768px 이하일 때 적용되는 스타일 */
}
```

미디어 쿼리 구문 예시→ @media 미디어 유형 and (조건 1) and (조건2) ... { ... }
and말고 쉼표, only, not또한 사용할 수 있다.

```css
@media screen and (max-width: 768px) and (min-width: 480px) {
  /* 뷰포트 너비가 768px 이하이고 480px 이상일 때 적용되는 스타일 */
}
```

혹은 그냥 html 태그에 media 속성을 주어 미디어 쿼리를 작성할 수 있다.

```html
<html media="(max-width: 768px)">
  <body>
    ...
  </body>
</html>
```

### 미디어 유형

- `all` - 모든 미디어 유형
- `print` - 인쇄 미디어
- `screen` - 모니터 미디어
- `tv` - TV 미디어
- `speech` - 음성 미디어
- `embossed` - 점자 미디어
- `braille` - 점자 미디어
- `handheld` - 휴대용 미디어
- `projection` - 투영 미디어

### 미디어 조건

device 접두어가 붙은건 물리적인 기기의 특성을 나타내며, 일반적인 조건과 달리 창 크기에 따라 변하는 것이 아니라 기기 자체의 특성을 나타낸다.

- `device-width` - 장치의 물리적 너비(기기 자체의 해상도)
- `device-height` - 장치의 물리적 높이
- `width` - 웹 문서가 렌더링되는 뷰포트 너비(브라우저 창 크기)
- `height` - 웹 문서가 렌더링되는 뷰포트 높이

- `max-width` - 웹 문서의 최대 너비
- `min-width` - 웹 문서의 최소 너비

- `max-height` - 웹 문서의 최대 높이
- `min-height` - 웹 문서의 최소 높이

- `orientation` - 화면 방향

  - `portrait` - 세로 방향(세로모드)
  - `landscape` - 가로 방향(가로모드)

- `device-aspect-ratio` - 장치의 물리적 비율
- `aspect-ratio` - 화면 비율

- `device-min-aspect-ratio` - 장치의 최소 화면 비율
- `device-max-aspect-ratio` - 장치의 최대 화면 비율
- `min-aspect-ratio` - 최소 화면 비율
- `max-aspect-ratio` - 최대 화면 비율

- `color` - 색상
- `color-index` - 색상 인덱스
- `grid` - 그리드
- `scan` - 스캔
- `hover` - 호버

- `pointer` - 포인터

이러한 조건을 조합하여 미디어 쿼리를 작성할 수 있다. 일반적으로 모바일 레이아웃을 먼저 작성하고, 작은 화면에서 큰 화면으로 순서대로 작성하거나, pc 레이아웃을 먼저 작성하고, 큰 화면에서 작은 화면 순서대로 작성한다.

---

## 뷰포트 단위

- `vw` - 뷰포트 너비의 1%
- `vh` - 뷰포트 높이의 1%
- `vmin` - 뷰포트 너비와 높이 중 작은 값의 1%
- `vmax` - 뷰포트 너비와 높이 중 큰 값의 1%

---

## 반응형 이미지

picture태그와 [source 태그](/docs/html/mediaTags.html)를 사용하면 화면 해상도뿐만 아니라 <span style="color: yellowgreen;">화면 너비에 따라 다른 이미지 파일을 표시</span>할 수 있다. source 태그는 이전에 멀티미디어 태그를 사용할때 다양한 확장자를 지원하기 위해 여러개를 사용해서 브라우저에 호환되도록 만든다고 배웠다.

```html
<picture>
  <source srcset="images/shop-large.jpg 1024w" media="(min-width: 1024px)" />
  <source srcset="images/shop-medium.jpg 768w" media="(min-width: 768px)" />
  <img
    srcset="images/shop-small.jpg 320w"
    media="(max-width: 767px)"
    alt="이미지"
  />
</picture>
```

ex) `heart-small-480px.jpg 480w` : 뷰포트 너비가 `400w` 이하일 때 `heart-small-480px.jpg`가 랜더링됨.
w는 width로 px와 동일

반응형 이미지의 이점은 디스플레이 해상도나 브라우저의 뷰포트 너비에 따라 적절한 이미지를 렌더링하도록 하여 최적의 페이지의 로딩 속도와 이미지 해상도를 제공해준다.

### `src` vs `srcset` 비교

| 특성          | src                       | srcset                                                     |
| ------------- | ------------------------- | ---------------------------------------------------------- |
| 용도          | 단일 이미지 소스 지정     | 다양한 조건(해상도/화면 크기)에 따른 이미지 소스 세트 제공 |
| 브라우저 동작 | 무조건 지정된 이미지 로드 | 디바이스 특성(DPR, 화면 너비)에 따라 최적의 이미지 선택    |
| 필수 여부     | 항상 필요                 | 선택적 사용 (반응형 이미지 구현 시 권장)                   |
| 문법 예시     | `src="image.jpg"`         | `srcset="image-480w.jpg 480w, image-800w.jpg 800w"`        |

### 사용 예시

```html
<img
  src="fallback.jpg"
  srcset="small.jpg 480w, medium.jpg 800w, large.jpg 1200w"
  sizes="(max-width: 600px) 100vw, 50vw"
  alt="반응형 이미지 예시"
/>
```

주의 해야할 점은 <span style="color: red;">srcset을 사용해도 반드시 src 속성을 지정해야 한다.</span>

### 핵심 동작 원리

1. **src**: 기본 이미지 (구형 브라우저 폴백)
2. **srcset**: 브라우저가 다음 기준으로 선택
   - `w`(너비) 디스크립터: `sizes` 속성과 함께 사용 시 뷰포트/레이아웃 크기 고려
   - `x`(픽셀 밀도) 디스크립터: 디바이스 픽셀 비율(DPR) 기준 (예: `image@2x.jpg 2x`)
3. **sizes**: 이미지의 예상 레이아웃 너비 힌트 제공 (필수는 아니지만 권장)

- **미디어 조건 + 레이아웃 너비** 조합으로 작성
- `(미디어 조건) 레이아웃_너비` 형식
- 예: `(min-width: 768px) 50vw` → "뷰포트가 768px 이상일 때 이미지 너비는 뷰포트의 50%"
