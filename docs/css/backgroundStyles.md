---
layout: post
title: "배경 스타일"
date: 2024-09-07 23:12:00 +0900
categories: etc
parent: CSS
---

# 배경효과

## Background

- `background` - 아래 속성들의 축약형으로 `background: url("image.jpg") no-repeat center center fixed;`와 같은 형식으로 사용한다. 이 때, 축약형은 <span style="color: yellowgreen;">배경 색상, 배경 이미지, 배경 이미지 반복, 배경 이미지 위치, 배경 이미지 크기, 배경 이미지 고정</span>을 한번에 지정해줄 수 있다.
- `background-color` - 배경 색상
- `background-image` - 배경 이미지
- `background-repeat` - 배경 반복, 값은 `repeat, repeat-x, repeat-y, no-repeat` 등이 있다.
- `background-position` - 배경 위치, 값은 `left, right, center, top, bottom, px, %` 등이 있다.
- `background-size` - 배경 크기, 값은 `cover, contain, px, %` 등이 있다. `cover`는 <span style="color: yellowgreen;">원본이미지의 가로폭</span>을 기준으로 채우고, `contain`은 <span style="color: yellowgreen;">원본 이미지의 세로폭</span>을 기준으로 채운다.
- `background-attachment` - 배경 이미지 고정, 값은 `scroll, fixed` 등이 있다. `fixed`는 배경 이미지를 고정시키고, `scroll`는 배경 이미지를 스크롤과 함께 배경이미지도 스크롤되게끔 한다.
- `background-clip` - 배경을 어디까지 적용할지 지정할 수 있게 해준다. 값은 `border-box, padding-box, content-box` 등이 있다.
- `background-origin` - 배경 이미지의 배치 기준점을 지정할 수 있게 해준다. 값은 `border-box, padding-box, content-box` 등이 있다.

## Gradient

- `linear-gradient` - 선형 그라데이션, `linear-gradient(direction || angle, color-stop1, color-stop2, ...)` 형식으로 사용

  - direction: `to left`, `to top right` 등 방향 지정
  - angle: `45deg`와 같이 각도로 기울기 지정 가능
  - color-stop: 중단점으로, `#000 0%`, `#fff 30%`와 같이 색상과 위치를 지정할 수 있다. <span style="color: #aaa;">(30% 지점에서 흰색을 멈추고 색깔을 바꿈)</span>
  - 예시: `linear-gradient(to right, #000, #fff)` 또는 `linear-gradient(45deg, #000 0%, #fff 100%)`

- `radial-gradient` - 방사형 그라데이션, 중심점에서 바깥으로 퍼지는 형태. `radial-gradient(shape size at position, color-stop1, color-stop2, ...)` 형식으로 사용한다.

  - position: `at center` (기본값), `at 30% 50%`
    등으로 중심점 지정, <span style="color: yellowgreen;">linear-gradient와 달리 to수식어가 아닌 at 수식어를 사용</span>한다는것을 알 수 있음.
  - shape: `circle`(원형) 또는 `ellipse`(타원형, 기본값)
  - size: `closest-side`, `farthest-corner`, `100px 50px`(가로 세로 크기) 등으로 지정 가능
  - 예시: `radial-gradient(circle 100px at center, #000, #fff)`

- `conic-gradient` - 원뿔형 그라데이션, `conic-gradient(from angle at position, color-stop1, color-stop2, ...)` 형식으로 사용
  - angle: `0deg`부터 시작하는 회전 각도
  - position: `at center` (기본값), `at 30% 50%` 등으로 중심점 지정
  - 예시: `conic-gradient(from 90deg at 50% 50%, red, yellow, lime, aqua, blue, magenta, red)`

> 이미지와 그라데이션을 함께 사용할 때는 이미지를 먼저 지정하고, 그라데이션을 지정한다.

```css
background: linear-gradient(to right, #000, #fff),
  url(image.jpg) no-repeat center center fixed;
```
