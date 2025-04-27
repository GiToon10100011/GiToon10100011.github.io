---
layout: home-with-toc
title: "CSS"
date: 2024-09-07 23:12:00 +0900
categories: etc
has_children: true
nav_order: 2
---

# CSS

> CSS는 Cascading Style Sheets의 약자로, 이름과 동일하게 언어를 위에서 아래로 폭포가 흐르듯이 순차적으로 스타일이 부여되는 언어이다. <span style="color: #aaa;">(`Cascading`은 폭포가 흐르듯이 순차적으로 스타일이 부여되는 것을 의미한다.)</span>

css는 선택자를 통해 특정 요소를 선택하여 스타일을 부여한다. <mark style="background: #E0E0E060;"><a href="/docs/css/selectors.html">선택자에 대해 자세히 알아보기</a></mark> <br><br>
스타일은 다양한 스타일 속성들을 통해 부여할 수 있는데, 이는 다음과 같다.

1. [텍스트 스타일](/docs/css/textStyles.html)
2. [박스 모델](/docs/css/boxModel.html)
3. [레이아웃](/docs/css/layout.html)
4. [배경 스타일](/docs/css/backgroundStyles.html)
5. [애니메이션](/docs/css/animation.html)
6. [반응형 디자인](/docs/css/responsive.html)

---

## 단위

- `px` - 픽셀 단위이다. <mark style="background: #BBFABBA6;">절대적인 크기</mark>를 지정할 때 사용한다.
- `%` - 백분율 단위이다. <mark style="background: #BBFABBA6;">상대적인 크기</mark>를 지정할 때 사용한다.
- `em` - 배수 단위이다. <span style="color: #aaa;"><del>em을 읽으면 m, 즉, multiple의 약자라고 생각하자.</del></span> 해당 단위는 부모요소가 중첩될 경우 크기가 달라져, rem이 등장하게 되었다.
- `rem` - 루트 기준의 배수(루트는 html 요소) 팀환경에서는 루트 기준의 배수를 사용하는 것이 좋다. 1rem은 16px, 2rem은 32px, 3rem은 48px 등으로 사용된다. rem을 확인하고 싶다면 개발자 도구의 computed 탭에서 확인할 수 있다.
- `vh` - 뷰포트 높이(뷰포트는 브라우저 화면)
- `vw` - 뷰포트 너비
- `rgb()` - 빛의 삼원색 모두 조합하여 색상을 표현하는 방법이다.
- `rgba()` - 빛의 삼원색 모두 조합하여 색상을 표현하는 방법이다. <mark style="background: #BBFABBA6;">알파값을 추가하여 투명도를 조절</mark>할 수 있다.
- `hsl()` - 색상, 채도, 명도를 조합하여 색상을 표현하는 방법이다.
- `hsla()` - 색상, 채도, 명도를 조합하여 색상을 표현하는 방법이다. 알파값을 추가하여 투명도를 조절할 수 있다.
- `#000` - 16진수 색상 코드이다. 본래는 6자리 코드이지만, 3자리 코드도 사용할 수 있다. 이런 경우에는 각 자리가 두번씩 반복되어 표현된다.
- `url` - `uniform resource locator`의 약자로, 이미지 경로를 지정하는 방법이다.

✅ 실무에서의 단위

- 먼저 body 혹은 전체선택자로 기본 폰트 사이즈를 지정한다.
- 그 후 모든 요소에 상대적인 단위를 사용한다.

```css
body {
  font-size: 16px;
}

p {
  font-size: 1.2rem;
}
```

위 코드에서 폰트 사이즈는 `16px`이 기본이고, `p` 요소는 `1.2rem`이므로 `19.2px`이 된다. 이런식으로 작업을 하게 되면, 나중에 폰트를 좀 전체적으로 키워야하거나 줄여야하는 경우에 `body`혹은 전체선택자에 부여한 폰트사이즈만 바꿔주면 되기에 효율적이다.

---

## 폰트

> CSS에서 폰트를 불러오는 방법은 2가지가 있다. embed 코드 방식을 통해 `@import`를 사용하는 방식과, 외부 폰트 파일을 `@font-face`를 통해 불러오는 방식이 있다.

```css
/* embed 코드 방식 */
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

/* @font-face 방식 */
@font-face {
  font-family: "Roboto";
  /* 폰트 파일 경로를 url을 통해 불러옴. format으로 폰트 파일의 형식을 지정해줄 수도 있다다. */
  src: url("fonts/Roboto-Regular.ttf") format("truetype");
  /* 폰트 두께를 지정해줄 수도 있다. */
  font-weight: 400;
}
```

외부파일을 불러올때 파일의 크기가 너무 크다면, 웹폰트 형식인 `woff`, `woff2`를 사용하는 것이 좋다.

⚠️ **iOS 환경에서 `font-face` 사용시 폰트 적용안되는 경우**

<a href="https://www.fontsquirrel.com/tools/webfont-generator" target="_blank">fontsquirrel</a>에서 폰트를 여러 확장자로 제작하여 사용하는 것이 좋다. 

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

`&`는 현재 요소를 참조하는 가상 선택자이다. 이는 중첩된 요소에서 사용되어 현재 요소를 참조하여 스타일을 부여할 수 있다.

⚠️ **네스팅 사용시 주의사항**

반응형 미디어 쿼리를 작성할때 <mark style="background: #FF5582A6;">반드시 네스팅 구조를 전부 동일하게 맞춰줘야 한다.</mark> 안그러면 스타일이 적용되지 않는 현상이 발생할 수 있다.

---

## 스타일 리셋

> 스타일 리셋은 모든 요소의 스타일을 초기화하는 것이다. 이는 모든 요소의 스타일을 초기화하여 브라우저마다 다른 스타일을 적용하지 않도록 하는 역할을 한다.

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

a {
  text-decoration: none;
  color: inherit;
}

ul,
ol {
  list-style: none;
}

img,
video {
  max-width: 100%;
  vertical-align: middle;
}

input,
button,
textarea,
select {
  font-family: inherit;
}

input:focus {
  outline: none;
}

table {
  border-collapse: collapse;
}

address, i, em{
  font-style: normal;
}

button{
  cursor: pointer;
}

/* 공통 클래스 */

.skip-menu a {
  display: block;
  position: absolute;
  top: -9999px;
  line-height: 50px;
  text-align: center;
  background: #0099DA;
  &:focus {
    top: 0;
  }
}

.blind {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  border: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
}
```

---

## Emmet

<span id="emmet"></span>

> 프로그래밍 언어의 코드를 더 빠르게 작성할 수 있도록 돕는 도구.

[HTML](/docs/html/emmet.html)에서도 사용할 수 있지만, CSS에서도 사용할 수 있다.

CSS에서는 스타일 속성과 값을 빠르게 작성할 수 있다.

속성을 보통 축약해서 타이핑하면 자동완성 드롭다운에서 찾을 수 있지만, 에밋을 활용하여 값까지 한번에 작성할 수 있다.

```css
m0
```

```css
margin: 0;
```

```css
fz24
```

```css
font-size: 24px;
```

하이픈으로 연결하여 여러 개의 값을 한번에 작성할 수 있다.

| Emmet       | 결과                       |
| ----------- | -------------------------- |
| `p10-20`    | `padding: 10px 20px;`      |
| `p10-20-30` | `padding: 10px 20px 30px;` |

---

## 변수

> 변수는 값을 저장하는 공간으로, CSS에서는 :root 선택자를 통해 변수를 선언할 수 있다.

<p style="color: #aaa;">사실, 변수는 <code>:root</code> 말고도 어디에서든 선언할 수 있다. 다만 전역적으로 변수를 사용하기 위해서는 <code>:root</code> 선택자를 사용하는 것이 좋다.</p>

```css
:root {
  --primary-color: #000;
}
```

`--변수이름: 변수값;` 과 같은 형태로 선언<span style="color: #aaa;">(통상적으로 --를 붙임)</span>하고 사용할 때는 `var(--변수이름)` 함수를 사용하여 변수를 사용할 수 있다.

```css
.box {
  color: var(--primary-color);
}
```

### 변수와 html 데이터셋의 활용

```html
<div style="--i:1">Item 1</div>
<div style="--i:2">Item 2</div>
<div style="--i:3">Item 3</div>
```

```css
div {
  /* var(--i)를 사용하여 각 요소별로 다른 값을 적용할 수 있습니다 */
  animation-delay: calc(0.1s * var(--i)); //1, 2, 3
  transform: rotate(calc(var(--i) * 45deg)); //45, 90, 135
}
```

1. HTML 요소에 `style="--i:n"`을 추가하면 해당 요소에 대해 `--i`라는 CSS 커스텀 속성을 생성하고 값 `n`을 할당한다.

2. CSS에서 `var(--i)`를 사용하여 이 값을 참조할 수 있다.

즉, <mark style="background: #FF5582A6;">html에서 커스텀 변수를 선언 및 할당</mark>을 하여 css에서 동적으로 스타일을 적용할 수 있다.

앞서 말했듯이 변수는 어디에서든 선언할 수 있기에, 요소마다 자기만의 값을 할당받아 사용할 수 있는 것이다. 

데이터셋은 `content` 속성에서만 완전히 지원되므로 커스텀 변수만 동적으로 스타일을 적용할 수 있다.

---

## 브라우저 접두사

> 브라우저 접두사(vendor prefix)는 브라우저마다 지원하는 스타일 속성이 다르기 때문에, 브라우저마다 다른 스타일을 적용하기 위해 사용되는 것이다.

```css
-webkit-
-moz-
-ms-
-o-
```

<del style="color: #aaa;">요새는 근데 크로스 브라우징이 잘 되어서 그냥 써도 되는 경우가 많다.</del>
