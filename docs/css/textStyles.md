---
layout: post-with-comments
title: "텍스트 스타일"
date: 2024-09-07 23:12:00 +0900
categories: etc
parent: CSS
---

# 텍스트 스타일

- `font` - 아래 속성들의 축약형으로 `font: italic bold 16px/20px Arial, sans-serif;`와 같은 형식으로 사용한다. 이 때, 축약형은 <mark style="background: #BBFABBA6;">글자 스타일, 글자 굵기, 글자 크기, 글자 글꼴, 글자 줄 간격</mark>을 한번에 지정해줄 수 있다.

  > 주의해야할 점은, `font-size`와 `line-height`를 함께 설정할때 `슬래시(/)`를 사용하여 두값을 구분해야한다. <span style="color: #aaa;">(슬래시 없이 공백만 사용하면 브라우저가 두번째 값을 줄간격으로 인식 못하고 다른 속성으로 오해하기 때문이다.)</span>

- `font-family` - 글자 글꼴, `ex) body {font-family : 맑은 고딕,  돋움, 굴림}` 이런 형식으로 사용한다. <mark style="background: #BBFABBA6;">콤마로 구분된 글꼴 이름들은 순서대로 우선순위</mark>를 가진다. 즉, 첫번째 글꼴(맑은 고딕)이 없으면 두번째 글꼴(돋움)을 사용하고, 두번째 글꼴(돋움)이 없으면 세번째 글꼴(굴림)을 사용한다.

- `font-size` - 글자 크기

- `font-weight` - 글자 굵기, 값은 숫자를 주거나, `normal, bold, lighter, bolder` 등의 값을 주기도 한다. 숫자는 `100~900`까지 사용할 수 있다. `100`은 가장 얇고, `900`은 가장 굵다.

- `font-style` - 글자 스타일, 값은 `normal, italic(기울임체), oblique(기울임체)` 등이 있다. <span style = "color: #aaa;">oblique보다 italic사용이 권장되며, italic은 oblique와 다르게 폰트 파일에 내장되어 있는 기울임체를 불러온다.</span>

- `font-variant` - 글자 대소문자, 값은 `normal, small-caps(대문자를 소문자 크기로 나타냄)` 등이 있다.

- `text-align` - 글자 정렬, 값은 `left, right, center, justify(양쪽정렬)` 등이 있다.

- `text-decoration` - 글자 장식, 주로 a태그의 기본 스타일을 없애기 위해 none값을 주기도 한다. 값은 `none, underline(밑줄), overline(윗줄), line-through(취소줄)` 등이 있다.

- `text-transform` - 글자 대소문자, 값은 `none, capitalize(첫글자만 대문자), uppercase(대문자), lowercase(소문자), full-width(전각문자)` 등이 있다. <mark style="background: #BBFABBA6;">full-width</mark>는 반각문자를 전각문자로 변환시켜주는 것으로, <mark style="background: #BBFABBA6;">한자, 히라가나, 한글은 모두 전각문자</mark>인거에 반해, 한국에서 사용되는 특수문자들은 대부분 반각문자로 사용된다. 이때문에 다국어 서비스를 개발하는 경우, 전각문자를 반각문자로 자동 치환해주는 작업이 필요하다.

- `text-shadow` - 글자 그림자, 값은 `x축, y축, 그림자 크기, 그림자 색상` 형식으로 사용한다. x축, y축의 값값은 원래 요소에서 부터 그림자를 어느정도로 띄워놓을지 결정한다.

- `text-indent` - 글자 들여쓰기, 특정 요소를 숨기고 싶을때 -9999px와 같은 큰 값을 줘서 없애기도 한다.

- `letter-spacing` - 글자 간격(자간)

- `line-height` - 텍스트의 높이 조절, 행간은 오히려 `margin`으로 조절하는 것이 좋다.

- `word-spacing` - 단어 간격

- `white-space` - 공백 처리 방법, 값은 `normal, nowrap, pre, pre-wrap, pre-line` 등이 있으며, 기본값은 `normal`이다. 

    `html`은 기본적으로 부모요소 내의 자식요소가 텍스트일 경우 보호하려는 속성이 있다. 이를 바로 `white-space`라 하는데, 텍스트가 영역 밖으로 나가는 경우 자동으로 줄바꿈을 시켜준다. 이를 방지하는 것이 바로 `no-wrap`값이다.

  `normal` | 연속 공백을 하나로 합치고, 자동 줄바꿈 발생 <span style="color: #aaa;">(기본값)</span>
  `nowrap` | 연속 공백을 합치지만 줄바꿈 없이 한 줄로 표시 <span style="color: #aaa;">(overflow 발생)</span>
  `pre` | 공백과 개행을 원본 그대로 유지 <span style="color: #aaa;">(pre 태그처럼 동작)</span>
  `pre-wrap` | 공백 유지하되 필요시 자동 줄바꿈
  `pre-line` | 연속 공백을 합치지만 개행은 유지하고 필요시 자동 줄바꿈

- `text-overflow` - 글자 넘침 처리, 값은 `clip, ellipsis, string` 등이 있다. clip은 넘치는 텍스트를 자르고, ellipsis는 넘치는 부분을 생략하고 말줄임표(...)를 표시한다.

- `text-wrap` - 글자 줄바꿈 처리

- `word-break` - 단어 줄바꿈 처리

- `word-wrap` - 단어 줄바꿈 처리

> <mark style="background: #BBFABBA6;">만약 특정 줄에서 말줄임표를 표시하고 싶다면</mark>, `display: -webkit-box` 속성과 `-webkit-line-clamp` 속성, `-webkit-box-orient: vertical` 속성, `text-overflow: ellipsis` 속성, `white-space: nowrap` 속성을 함께 사용하면 된다.

예시:

```css
/* 2줄 이상 넘치는 경우 말줄임표 표시 */
.text-ellipsis {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  white-space: nowrap;
}
```
한줄을 그냥 말줄임표로 표시하고 싶다면 아래와 같이 사용하면 된다.

```css
.text-ellipsis {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
```

이 3인방은 항상 같이 사용된다.

## 문단 스타일링

- `direction` - 문단 방향, 값은 `ltr(왼쪽에서 오른쪽), rtl(오른쪽에서 왼쪽)` 등이 있다.

- `text-align` - 정렬, `justify`, `match-parent`, `start`, `end`를 사용하며, `start`와 `end`는 현재 텍스트의 `direction`에 따라 시작위치에 맞춰서 정렬된다. 만약 `left to right`이라면 `start`는 왼쪽, `end`는 오른쪽에 맞춰서 정렬된다. `match-parent`는 부모 요소를 따라 문단이 정렬된다.

- `text-justify` - 문단 정렬, `auto`, `none`, `inter-word`, `inter-character`, `distribute`, `distribute-all-lines`를 사용하며, `auto`는 브라우저에 따라 정렬 방법이 다르다. `inter-word`는 단어 단위로 정렬하고, `inter-character`는 문자 단위로 정렬한다. `distribute`는 문단을 균등하게 정렬하고, `distribute-all-lines`는 문단을 균등하게 정렬하되 줄 간격을 조정한다.
