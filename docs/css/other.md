---
layout: post-with-comments
title: "기타 스타일링"
date: 2024-09-07 23:12:00 +0900
categories: etc
parent: CSS
---

## 목록 스타일 속성

- `list-style` - 아래 속성들의 축약형으로 `list-style: disc outside;`와 같은 형식으로 사용한다.
- `list-style-type` - 목록 불릿의 모양 지정, 값은 `disc, circle, square, decimal, lower-roman, upper-roman, lower-alpha, upper-alpha` 등이 있다.
- `list-style-position` - 목록 불릿의 위치 조정, 값은 `inside, outside` 등이 있다.
- `list-style-image` - 목록 불릿을 이미지로 지정

> 목록 스타일 속성은 목록 태그에만 사용할 수 있다.

## 그림자 스타일 속성

- `box-shadow` - 요소에 그림자를 추가한다. 값은 `box-shadow: inset offset-x offset-y blur-radius spread-radius color;` 형식으로 사용한다. <span style="color: #aaa;">ex) `box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);`</span>

  `inset` | 그림자를 요소 내부에 추가한다.
  `offset-x` | 그림자의 가로 위치
  `offset-y` | 그림자의 세로 위치
  `blur-radius` | 그림자의 흐림 정도
  `spread-radius` | 그림자의 확장 정도
  `color` | 그림자의 색상

- drop-shadow - 요소에 그림자를 추가한다. 값은 `drop-shadow(offset-x offset-y blur-radius spread-radius color);` 형식으로 사용한다.
- text-shadow - 요소에 텍스트 그림자를 추가한다. 값은 `text-shadow: offset-x offset-y blur-radius color;` 형식으로 사용한다.

## 필터 속성

- `filter` - 요소에 필터를 추가한다. 값은 `filter: blur(10px);` 형식으로 사용한다.

  `blur` | 요소를 블러링 처리한다.
  `brightness` | 요소의 밝기를 조절한다.
  `contrast` | 요소의 대비를 조절한다.
  `grayscale` | 요소를 흑백으로 변환한다.
  `hue-rotate` | 요소의 색상을 회전시킨다.
  `invert` | 요소의 색상을 반전한다.
  `saturate` | 요소의 채도를 조절한다.
  `sepia` | 요소에 세피아 필터를 추가한다.
