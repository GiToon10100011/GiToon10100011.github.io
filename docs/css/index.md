---
layout: post
title: "CSS"
date: 2024-09-07 23:12:00 +0900
categories: etc
has_children: true
---

# CSS

> CSS는 Cascading Style Sheets의 약자로, 이름과 동일하게 언어를 위에서 아래로 폭포가 흐르듯이 순차적으로 스타일이 부여되는 언어이다.

css는 선택자를 통해 특정 요소를 선택하여 스타일을 부여한다. <a href="/docs/css/selectors.html" style="color: #aaa;">선택자에 대해 자세히 알아보기</a> <br><br>
스타일은 다양한 스타일 속성들을 통해 부여할 수 있는데, 이는 다음과 같다.

1. [텍스트 스타일](/docs/css/textStyles.html)
2. [박스 모델](/docs/css/boxModel.html)
3. [레이아웃](/docs/css/layout.html)
4. [배경 스타일](/docs/css/backgroundStyles.html)
5. [애니메이션](/docs/css/animation.html)
6. [반응형 디자인](/docs/css/responsive.html)

---

## 단위

- `px` - 픽셀 단위이다. 절대적인 크기를 지정할 때 사용한다.
- `%` - 백분율 단위이다. 상대적인 크기를 지정할 때 사용한다.
- `em` - 배수 단위이다. <span style="color: #aaa;"><del>em을 읽으면 m, 즉, multiple의 약자라고 생각하자.</del></span>
- `rem` - 루트 기준의 배수(루트는 html 요소) 팀환경에서는 루트 기준의 배수를 사용하는 것이 좋다. 1rem은 16px, 2rem은 32px, 3rem은 48px 등으로 사용된다. rem을 확인하고 싶다면 개발자 도구의 computed 탭에서 확인할 수 있다.
- `vh` - 뷰포트 높이(뷰포트는 브라우저 화면)
- `vw` - 뷰포트 너비
- `rgb()` - 빛의 삼원색 모두 조합하여 색상을 표현하는 방법이다.
- `rgba()` - 빛의 삼원색 모두 조합하여 색상을 표현하는 방법이다. <span style="color: yellowgreen;">알파값을 추가하여 투명도를 조절</span>할 수 있다.
- `hsl()` - 색상, 채도, 명도를 조합하여 색상을 표현하는 방법이다.
- `hsla()` - 색상, 채도, 명도를 조합하여 색상을 표현하는 방법이다. 알파값을 추가하여 투명도를 조절할 수 있다.
- `#000` - 16진수 색상 코드이다. 본래는 6자리 코드이지만, 3자리 코드도 사용할 수 있다. 이런 경우에는 각 자리가 두번씩 반복되어 표현된다.
- `url` - uniform resource locator의 약자로, 이미지 경로를 지정하는 방법이다.

---

## 폰트

> CSS에서 폰트를 불러오는 방법은 2가지가 있다. embed 코드 방식을 통해 @import를 사용하는 방식과, 외부 폰트 파일을 @font-face를 통해 불러오는 방식이 있다.

```css
/* embed 코드 방식 */
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

/* @font-face 방식 */
@font-face {
  font-family: "Roboto";
  /* 폰트 파일 경로를 url을 통해 불러옴. format으로 폰트 파일의 형식을 지정해줄 수도 있다다. */
  src: url("fonts/Roboto-Regular.ttf") format("truetype");
}
```

외부파일을 불러올때 파일의 크기가 너무 크다면, 웹폰트 형식인 `woff`, `woff2`를 사용하는 것이 좋다.

---

## 네스팅

<span id="nesting">네스팅</span>은 스타일 시트 내부에 스타일 시트를 중첩하는 것이다. 이는 스타일 시트를 더 간결하게 만들어주는 역할을 한다.

```css
div {
  color: red;
  p {
    color: blue;
    span {
      color: green;
      &:hover {
        color: yellow;
      }
    }
  }
}
```

---

## 스타일 리셋

> 스타일 리셋은 모든 요소의 스타일을 초기화하는 것이다. 이는 모든 요소의 스타일을 초기화하여 브라우저마다 다른 스타일을 적용하지 않도록 하는 역할을 한다.

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

ul,
li {
  list-style: none;
}

a {
  text-decoration: none;
  color: inherit;
}
```
