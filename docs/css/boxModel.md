---
layout: post
title: "박스 모델"
date: 2024-09-07 23:12:00 +0900
categories: etc
parent: CSS
---

# 박스 모델

## Margin

- `margin`
- `margin-collapse`

## Padding

- `padding`
- `box-sizing`

## Border

- `border-radius`
- `box-shadow`

## Display

- `block`
- `inline`
- `inline-block`

## 여백 스타일 속성

- `padding` - 아래 속성들의 축약형으로 `padding: 10px 20px 30px 40px;`와 같은 형식으로 사용한다. 이 때, 축약형은 <span style="color: yellowgreen;">4개의 값인 경우, 위, 오른쪽, 아래, 왼쪽 순서</span>로 지정해줄 수 있다. 3개의 값을 지정하면 <span style="color: yellowgreen;">위, 오른쪽, 아래 순서</span>로 지정해줄 수 있다. 2개의 값을 지정하면 <span style="color: yellowgreen;">위, 오른쪽 순서</span>로 지정해줄 수 있다. 1개의 값을 지정하면 <span style="color: yellowgreen;">모든 방향에 동일한 값</span>을 지정해줄 수 있다.
- `padding-top` - 테두리와 내용 사이의 <u>위쪽 여백</u>
- `padding-right` - 테두리와 내용 사이의 <u>오른쪽 여백</u>
- `padding-bottom` - 테두리와 내용 사이의 <u>아래쪽 여백</u>
- `padding-left` - 테두리와 내용 사이의 <u>왼쪽 여백</u>

- `margin` - 아래 속성들의 축약형으로 `margin: 10px 20px 30px 40px;`와 같은 형식으로 사용한다. 이 때, 축약형은 <span style="color: yellowgreen;">4개의 값인 경우, 위, 오른쪽, 아래, 왼쪽 순서</span>로 지정해줄 수 있다. 3개의 값을 지정하면 <span style="color: yellowgreen;">위, 오른쪽, 아래 순서</span>로 지정해줄 수 있다. 2개의 값을 지정하면 <span style="color: yellowgreen;">위, 오른쪽 순서</span>로 지정해줄 수 있다. 1개의 값을 지정하면 <span style="color: yellowgreen;">모든 방향에 동일한 값</span>을 지정해줄 수 있다.
- `margin-top` - 테두리와 다른 요소 사이의 <u>위쪽 여백</u>
- `margin-right` - 테두리와 다른 요소 사이의 <u>오른쪽 여백</u>
- `margin-bottom` - 테두리와 다른 요소 사이의 <u>아래쪽 여백</u>
- `margin-left` - 테두리와 다른 요소 사이의 <u>왼쪽 여백</u>

## 테두리 스타일 속성

- `border` - 아래 속성들의 축약형으로, `border: 1px solid black;`와 같은 형식으로 사용한다. 이 때, 축약형은 <span style="color: yellowgreen;">테두리 두께, 테두리 스타일, 테두리 색상</span>을 한번에 지정해줄 수 있다. 테두리 스타일에는 `dotted, dashed, solid, double, groove, ridge, inset, outset` 등이 있다.
- `border-radius` - 테두리 모서리를 둥글게 만들어준다. 이 때, 둥글게 만들어주는 값은 테두리 모서리의 반지름이다.
- `border-width` - 테두리 두께를 지정해준다.
- `border-color` - 테두리 색상을 지정해준다.
- `border-style` - 테두리 스타일을 지정해준다.
