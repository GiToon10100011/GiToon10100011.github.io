---
layout: post
title: "박스 모델"
date: 2024-09-07 23:12:00 +0900
categories: etc
parent: CSS
---

# 박스 모델

<div style = "display: flex; gap: 10px">
  <img src="/assets/images/css/boxModel/boxModel.png" alt="박스 모델" style="width: 50%;">
  
  <p>
    개발자 도구창에서 왼쪽의 사진처럼 박스모델을 확인해 볼 수 있다. Computed(계산됨) 탭에서 브라우저에서 알아서 계산해서 설정해주는 값을 확인할 수 있다.
  </p>
</div>

---

## Margin

- `margin` - 아래 속성들의 축약형으로 `margin: 10px 20px 30px 40px;`와 같은 형식으로 사용한다. 이 때, 축약형은 <span style="color: yellowgreen;">4개의 값인 경우, 위, 오른쪽, 아래, 왼쪽 시계 방향 순서</span>로 지정해줄 수 있다. 3개의 값을 지정하면 <span style="color: yellowgreen;">위, 좌우, 아래 순서</span>로 지정해줄 수 있다. 2개의 값을 지정하면 <span style="color: yellowgreen;">상하, 좌우 순서</span>로 지정해줄 수 있다. 1개의 값을 지정하면 <span style="color: yellowgreen;">모든 방향에 동일한 값</span>을 지정해줄 수 있다.
- `margin-top` - 테두리와 다른 요소 사이의 <u>위쪽 여백</u>
- `margin-right` - 테두리와 다른 요소 사이의 <u>오른쪽 여백</u>
- `margin-bottom` - 테두리와 다른 요소 사이의 <u>아래쪽 여백</u>
- `margin-left` - 테두리와 다른 요소 사이의 <u>왼쪽 여백</u>

---

## Padding

- `padding` - 아래 속성들의 축약형으로 `padding: 10px 20px 30px 40px;`와 같은 형식으로 사용한다. 이 때, 축약형은 <span style="color: yellowgreen;">margin속성과 동일하게</span> 지정해줄 수 있다.
- `padding-top` - 테두리와 내용 사이의 <u>위쪽 여백</u>
- `padding-right` - 테두리와 내용 사이의 <u>오른쪽 여백</u>
- `padding-bottom` - 테두리와 내용 사이의 <u>아래쪽 여백</u>
- `padding-left` - 테두리와 내용 사이의 <u>왼쪽 여백</u>

---

## Border

- `border` - 아래 속성들의 축약형으로, `border: 1px solid black;`와 같은 형식으로 사용한다. 이 때, 축약형은 <span style="color: yellowgreen;">테두리 두께, 테두리 스타일, 테두리 색상</span>을 한번에 지정해줄 수 있다.
- `border-radius` - 테두리 모서리를 둥글게 만들어준다. 이 때, 둥글게 만들어주는 값은 테두리 모서리의 반지름이다. 단위는 `px, %, em`으로 준다. `margin`과 마찬가지로 4개의 값을 지정할 수 있다.
- `border-width` - 테두리 두께, 값은 `thin, medium, thick, px` 등이 있다.
- `border-color` - 테두리 색상
- `border-style` - 테두리 스타일, 값은 `dotted, dashed, solid, double, groove, ridge, inset, outset` 등이 있다.

  `dotted` | 점선
  `dashed` | 대쉬선
  `solid` | 실선
  `double` | 이중선
  `groove` | 3D 홈이 파인 효과 (테두리가 안으로 들어간 것처럼 보임)
  `ridge` | 3D 돌출된 경계 효과 (groove의 반대 방향)
  `inset` | 요소가 안으로 눌린 듯한 3D 효과
  `outset` | 요소가 바깥으로 튀어나온 듯한 3D 효과 (inset의 반대 효과)

---

## Width & Height

- `width` - 요소의 너비
- `height` - 요소의 높이
- `min-width` - 요소의 최소 너비
- `min-height` - 요소의 최소 높이
- `max-width` - 요소의 최대 너비
- `max-height` - 요소의 최대 높이

> 요소에게 width나 height를 따로 지정하지 않으면 내용이 표시될 만큼만 크기가 표시된다. (fit-content) 따라서 <span style="color: yellowgreen;">따로 width, height를 지정하지 않고 padding을 통해 보기 좋게 꾸밀 수</span>도 있다.

---

## 투명도 관련 속성

- `opacity` - 요소의 투명도를 지정한다. 값은 `0~1` 사이의 숫자로 지정한다.
- `rgba` - 요소의 투명도를 지정한다. 값은 `rgba(red, green, blue, alpha)` 형식으로 지정한다.
- `hsla` - 요소의 투명도를 지정한다. 값은 `hsla(hue, saturation, lightness, alpha)` 형식으로 지정한다.
