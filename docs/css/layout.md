---
layout: home-with-toc
title: "레이아웃"
date: 2024-05-22 15:48:00 +0900
categories: etc
parent: CSS
---

# 레이아웃

## Box-sizing

- `box-sizing` - 요소의 크기를 계산하는 방법을 지정한다. 값은 `content-box, border-box` 등이 있다.
  - `content-box` - <mark style="background: #BBFABBA6;">기본값</mark>으로, 요소의 크기를 계산할 때, 테두리와 패딩을 포함하지 않는다. 너비 공식은 `(margin + border + padding)*2 + width`이다.
  - `border-box` - 요소의 크기를 계산할 때, 테두리와 패딩을 포함한다. 너비 공식은 `(margin*2) + width`이다.

<img src="/assets/images/css/layout/boxSizing.webp" alt="box-sizing" style="margin-top: 30px;">

---

## Position

<span id="position"></span>

전에 [html](/docs/html/index.html#inline&block)에서 블록태그와 인라인 태그에 대해 설명했었다. <mark style="background: #BBFABBA6;">블록태그는 차지하는 공간이 한줄</mark>이며, <mark style="background: #D2B3FFA6;">인라인 태그는 차지하는 공간이 해당 요소의 크기만큼 차지</mark>한다. 대표적인 예시로 `div, p`는 블록태그이고, `a, span`은 인라인 태그이다.

포지셔닝에서 가장 중요한 점 중 하나는, <mark style="background: #FF5582A6;">포지셔닝할 요소의 왼쪽 위 꼭짓점을 기준으로 위치가 지정된다</mark>는 것이다. 이 때문에 보통 `transform`의 `translate` 속성을 사용하여 요소의 기준점을 가운데로 옮긴다.

⚠️ 참고로, 포지션 속성이 지정된 요소와 지정이 안된 요소는 포지션 속성이 지정된 요소가 레이어링에서 우선순위를 가지게 된다.

또한, `z-index` 속성을 사용하지 않은 상태에서는 `position: absolute`를 부여한 요소들 기준으로, 아래서부터 차곡차곡 쌓이게 된다.

- `static` - 기본값으로, 요소를 일반적인 문서 흐름에 따라 배치한다. `top, right, bottom, left, z-index` <mark style="background: #FF5582A6;">속성을 사용할 수 없다.</mark>

- `relative` - 요소를 일반적인 문서 흐름에 따라 배치하지만, 요소의 위치를 지정할 수 있다.

- `absolute` - 요소를 일반적인 문서 흐름에서 제거하고, <mark style="background: #FF5582A6;">요소의 절대적인 위치를 지정</mark>할 수 있다. 이때, <mark style="background: #FF5582A6;">position을 relative로 준 요소를 기준으로 위치를 지정</mark>한다. 이를 활용하여 특정 요소 안에서만 포지셔닝을 할 수 있다. <span style="color: #aaa;">relative 요소가 존재하지 않으면 루트 요소를 기준으로 위치를 지정</span>한다.

- `fixed` - 요소를 일반적인 문서 흐름에서 제거하고, 반드시 루트 요소의 기준으로 위치를 지정할 수 있다. <mark style="background: #BBFABBA6;">스크롤을 내려도 요소의 위치가 변하지 않는다.</mark>

- `sticky` - 요소를 일반적인 문서 흐름에 따라 배치하지만, 요소의 위치를 지정할 수 있다. 이때, 스크롤 시 요소가 계속 따라오다가 요소가 특정 위치에 도달하면 그 위치에 고정된다.
  > ⚠️ `sticky`를 충족시키기 위한 조건들이 있다.
  >
  > 1. `overflow` 속성의 영향을 받아서는 안되며, 부모 요소가 스크롤 가능한 높이가 존재해야한다.
  > 2. `top, left, right, bottom` 중 하나 이상의 속성이 지정되어야 한다.

요소의 포지셔닝은 static 이외의 position값을 주고, `top, right, bottom, left` 속성을 사용하여 지정할 수 있다. 단위는 `px, %, em, rem, vh, vw` 등이 있다.

---

## 배치 스타일 속성

- `display` - 요소 표시 방법을 지정한다. 값은 `block, inline, flex, grid, none` 등이 있다. 블록요소가 보통 한 행의 공간을 차지하는 것을 활용하여 그때 그때 추가하고 제거해야하는 `br`태그 대신, 스타일에 `display` 속성으로 줄바꿈을 자유자재로 조절하여 코드의 재사용성을 높일 수 있다.

  `block` | 요소를 블록 요소로 만든다.
  `inline` | 요소를 인라인 요소로 만든다.
  `inline-block` | 요소를 인라인 블록 요소로 만든다. 인라인 블록 요소는 요소를 <mark style="background: #BBFABBA6;">인라인 레벨로 배치할 수 있음과 동시에 블록 레벨 속성도 사용</mark>할 수 있다.
  `flex` | 요소를 유연한 박스로 만든다. 자세한 사항은 <a href="#flexbox">여기</a>서 알아보자.
  `grid` | 요소를 그리드로 만든다. 자세한 사항은 <a href="#grid">여기</a>서 알아보자.
  `none` | 요소를 표시하지 않는다. 당연히 요소가 차지하고 있던 공간 또한 사라지게 된다.

- `visibility` - 요소 표시 여부를 지정한다. 값은 `visible, hidden, collapse` 등이 있다. display 속성과 다르게 요소가 차지하는 공간은 사라지지 않는다.

- `float` - 요소 배치 방법으로, 보통 그림과 글이 같이 있을때 사진 옆에 바로 글을 배치하는데 사용한다.
- `clear` - float 속성을 해제한다. float 속성은 상속되기 때문에 이를 무효화 시키기 위해 사용한다. 값은 `none, left, right, both` 등이 있다.
- `z-index` - 요소 순서 지정, z-index값이 크면 값이 작은 요소보다 위에 쌓인다. 값이 같으면 순서는 html기준 먼저 나오는 요소부터 위에 쌓인다.
- `overflow` - 요소 넘침 처리를 지정한다. 값은 `visible, hidden, scroll, auto` 등이 있다.
- `clip-path` - 요소 잘라내기 경로

---

## Flexbox

```css
.container {
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
}
```

<span id="flexbox">flexbox</span>는 요소를 유연한 박스로 만든다. <mark style="background: #BBFABBA6;">flexbox내의 자식 요소들은 전부 <code>block</mark>레벨 요소</span>가 된다.

✅ flexbox를 사용할때는 부모요소에 `display: flex`를 준다.

`display` 속성을 `flex` 또는 `inline-flex`로 지정하면 요소가 `flexbox(유연한 박스)`로 변환된다.

`flex`는 박스레벨 요소, `inline-flex`는 인라인레벨 요소로 변환된다.

### flexbox를 부여한 요소에게 부여하는 속성

- `flex-direction` - 박스의 방향을 지정한다. 값은 `row, column, row-reverse, column-reverse` 등이 있다.

- `align-items` - 박스의 수직 정렬을 지정한다. 값은 `flex-start, flex-end, center, baseline, stretch` 등이 있다.

  `flex-start` | 박스를 위쪽에 정렬한다.
  `flex-end` | 박스를 아래쪽에 정렬한다.
  `center` | 박스를 가운데에 정렬한다.
  `baseline` | 축의 중심 수평선을 기준으로 요소들의 아랫부분을 해당 선에 맞춰서 정렬시킨다. <mark style="background: #BBFABBA6;">이미지와 텍스트를 같이 사용하거나 다른 크기의 텍스트들을 맞추기 위해 사용</mark>한다.
  `stretch` | 기본값으로, 높이가 따로 지정되지 않았을 경우, 부모요소의 높이만큼 늘어남.

  ```css
  .icon-text {
    display: flex;
    align-items: baseline;
  }
  ```

  ```html
  <!-- 아이콘과 텍스트 정렬 -->
  <div class="icon-text">
    <img src="icon.svg" width="24" height="24" />
    <span>텍스트</span>
  </div>

  <!-- 다른 크기의 텍스트 정렬 -->
  <div class="icon-text">
    <h2>큰 제목</h2>
    <p>일반 텍스트</p>
  </div>
  ```

- `align-content` - 플렉스 항목이 여러 줄로 표시될 때의 배치 방법을 지정한다. 값은 `flex-start, flex-end, center, space-between, space-around, space-evenly` 등이 있다. flex-wrap이 wrap일 경우에 사용된다.

  <img src="/assets/images/css/flexBox/alignContent.png" alt="align-content" style="height: 70%;">

- `justify-content` - 박스의 수평 정렬을 지정한다. 값은 `flex-start, flex-end, center, space-between, space-around, space-evenly` 등이 있다.

  `flex-start` | 박스를 왼쪽에 정렬한다. (모든 웹상의 요소들은 좌 -> 우 방향으로 나열된다.)
  `flex-end` | 박스를 오른쪽에 정렬한다.
  `center` | 박스를 가운데에 정렬한다.
  `space-between` | 박스를 양쪽에 정렬한다.
  `space-around` | 박스를 둘레에 평등한 간격으로 정렬한다.
  `space-evenly` | 박스를 모든 간격이 동일한 간격으로 정렬한다.

- `flex-flow` - `flex-direction`과 `flex-wrap`을 한번에 지정한다. 값은 `flex-direction값 flex-wrap값`의 형태로 사용된다.

- `flex-wrap` - 박스의 너비가 넘칠 경우 줄바꿈 여부를 지정한다. 값은 `nowrap, wrap, wrap-reverse` 등이 있다.

- `gap` - 박스 사이의 간격을 지정한다. 값은 `length, %, calc` 등이 있다.

### flexbox의 자식요소들에게 부여하는 속성

- `order` - 박스의 순서를 지정한다. 값은 정수를 사용한다. 기본값은 0이다. 반응형에서 <span style="color: #aaa;">특정 요소의 순서를 낮추고 싶으면 의도적으로 음수의 값</span>을 주면 된다.

- `flex` - 아래 3가지 flex 속성의 축약형. 값은 `flex-grow값, flex-shrink값, flex-basis값`의 형태로 사용된다. `flex-grow`값은 필수값으로, 값을 하나만 준다면 나머지는 0으로 처리된다.

  ```css
  .parent {
    display: flex;
    /* 부모 요소의 너비를 1:1로 나눠가진다. (1/4) */
    .item {
      flex: 1;
    }

    /* 부모 요소의 너비를 3:1로 나눠가진다. (3/4) */
    .item2 {
      flex: 3;
    }
  }

  /* flex를 3가지 값으로 나눠서 사용할 수 있다. */
  .item {
    /* 박스의 너비가 넘칠 경우 박스의 너비를 늘리는 정도를 1로 지정하고, 줄이는 정도를 1로 지정하고, 박스의 너비를 100px로 지정한다. */
    flex: 1 1 100px;
  }
  ```

- `flex-grow` - 자식요소들의 너비 비율을 결정한다. 값은 정수를 사용한다. 기본값은 0이다.

- `flex-shrink` - 자식요소들의 너비가 줄어들 때의 비율을 결정한다. 값은 정수를 사용한다. 기본값은 1이다.

- `flex-basis` - 박스의 기본 크기를 지정한다. 값은 `auto, length(px, em, rem 등), %` 등이 있다. `width` 속성과 비슷하지만 더 유연하게 동작한다.

- `justify-self` - 자식요소들의 수평 정렬을 지정한다. 값은 `flex-start, flex-end, center, space-between, space-around, space-evenly` 등이 있다.

- `align-self` - `align-items`의 영향에서 벗어나 현재 요소의 수직 정렬을 지정한다. 값은 `flex-start, flex-end, center, baseline, stretch` 등이 있다.

---

## Grid

<span id="grid">grid</span>는 요소를 그리드로 만든다.

grid는 가로와 세로에 대한 구획이 완벽한 레이아웃일 때 사용하는것이 좋다.

- `grid-template-columns`
- `grid-template-rows`

---

## 다단으로 편집하기

- `column-width` - 단의 너비를 고정해서 화면을 분할한다. (신문 칼럼과 유사)
- `column-count` - 단의 개수를 먼저 정해두고 화면을 분할한다. 단의 개수가 정해져있기에 화면이 커질수록 단의 너비가 넓어진다.
- `column-gap` - 단과 단 사이의 간격을 지정한다. 값은 `normal, length, %` 등이 있다. <span style="color: #aaa;">(참고로 W3C에서는 1em을 권장한다.)</span>
- `column-rule` - 여러단으로 구성할 때 단과 단 사이에 구분선을 지정한다. 값은 `border`속성과 유사한 형태로 사용되며, 마찬가지로 스타일 또한 값들이 동일하다.
- `column-span` - 요소가 단을 몇 개 차지할지 지정한다. 값은 `none, all, 합칠 개수` 등이 있다. `all`은 전체 단을 하나로 합쳐 표현하며, 합칠 개수는 1이상의 정수를 사용한다. (기본값은 1)

보통 웹문서는 내비, 사이드바, 푸터를 제외하고 컨텐츠 부분만 다단으로 구성하므로 다단을 어디서부터 시작할지 지정하는 요소가 필요하다.

아래 3가지 속성을 통해 다단을 어디서부터 시작할지 지정할 수 있으며 값은 모두 column을 받는다.

- `break-before` - 페이지 나누기 전에 요소를 분리한다.
- `break-after` - 페이지 나누기 후에 요소를 분리한다.
- `break-inside` - 요소 내부에서 페이지 나누기를 지정한다.

다단 레이아웃의 예시를 한번 이미지를 통해 보자.

<img style="width: 50%;" src="/assets/images/css/layout/columnLayout.png" alt="column">

---

## 테이블

- `border-collapse` - 테이블의 테두리를 합칠지 여부를 지정한다. 값은 `separate, collapse` 등이 있다.
- `border-spacing` - <u>테이블의 셀 테두리 사이의 간격</u>을 지정한다. 값은 가로 간격과 세로 간격을 지정한다. ex) `border-spacing: 10px 20px;` (가로폭 10px, 세로폭 20px)
- `caption-side` - 테이블의 캡션 위치를 지정한다. 값은 `top, bottom` 등이 있다.
- `empty-cells` - 테이블의 빈 셀 표시 여부를 지정한다. 값은 `show, hide` 등이 있다.
- `table-layout` - 테이블의 레이아웃을 지정한다. <u>셀 안의 내용 양에 따라 셀 너비를 변하게 할지 고정시킬지 결정</u>해준다. 값은 `auto, fixed` 등이 있다. fixed는 셀 너비가 고정되어 셀 내용에 따라 셀의 너비가 달라지지 않도록 함.
- `vertical-align` - 테이블 셀 안의 요소의 수직 정렬을 지정한다. 값은 `top, bottom, middle, baseline, sub, super, text-top, text-bottom` 등이 있다.

  `top` | 요소를 위쪽에 정렬한다.
  `bottom` | 요소를 아래쪽에 정렬한다.
  `middle` | 요소를 가운데에 정렬한다.
  `baseline` | 요소를 기본 라인에 정렬한다.
  `sub` | 요소를 기준선 아래 첨자 위치로 정렬한다.
  `super` | 요소를 기준선 위 첨자 위치로 정렬한다.
  `text-top` | 요소를 부모 텍스트 상단에 정렬한다.
  `text-bottom` | 요소를 부모 텍스트 하단에 정렬한다.
