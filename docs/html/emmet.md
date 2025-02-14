---
layout: post-with-comments
title: "Emmet"
date: 2024-06-17 21:10:00 +0900
categories: Coding
parent: HTML
---

# Emmet

> 프로그래밍 언어의 코드를 더 빠르게 작성할 수 있도록 돕는 도구.

HTML뿐만 아니라 [CSS](/docs/css/index.html#emmet)에서도 사용할 수 있다.

## 기본 문법

### 태그 작성

```html
<div></div>
```

일반적으로 태그를 작성하려면 위와 같이 작성해야 한다. 하지만 Emmet을 사용하면 아래와 같이 작성할 수 있다.

```html
div
```

div를 적고 탭을 누르면 위와 같은 태그가 자동으로 생성된다.

만약 태그 안에 내용을 지정하고 싶다면 중괄호를 사용하면 된다.

```html
div{Hello}
```

```html
<div>Hello</div>
```

### 태그 작성 예시

```html
div.container
```

div.container를 적고 탭을 누르면 위와 같은 태그가 자동으로 생성된다.

```html
<div class="container"></div>
```

클래스를 여러개 지니고 있는 태그를 작성하려면 다음과 같이 쓰면 된다. 

```html
div.container.item
```

```html
<div class="container item"></div>
```

클래스뿐만 아니라 아이디도 빠르게 작성할 수 있다. 

```html
div#container
```

```html
<div id="container"></div>
```

에밋으로 빠르게 부모 자식 관계를 표현할 수도 있다.

```html
div.container>div.item
```

div.container>div.item를 적고 탭을 누르면 아래와 같은 태그가 자동으로 생성된다.

```html
<div class="container">
  <div class="item"></div>
</div>
```

이를 통해 상당히 CSS의 선택자 사용과 유사하다는 것을 알 수 있다.

이를 활용하여 목록 리스트를 상당히 빠르게 작성할 수 있다.

이때, 순서와 괄호를 주의해야한다. 예를 들어, 아래와 같은 태그를 작성하려고 한다.

```html
<ul></ul>
  <li><a href=""></a></li>
  <li><a href=""></a></li>
  <li><a href=""></a></li>
  <li><a href=""></a></li>
  <li><a href=""></a></li>
</ul>
```

그렇다면 에밋으로는 어떻게 작성해야할까? 

```html
ul>li>a*5
```

ul>li>a\*5를 적고 탭을 누르면 아래와 같은 태그가 자동으로 생성된다.

```html
<ul>
  <li>
    <a href=""></a>
    <a href=""></a>
    <a href=""></a>
    <a href=""></a>
    <a href=""></a>
  </li>
</ul>
```
즉, li와 a를 괄호로 묶어야 그룹으로 반복이 된다.

```html
ul>(li>a)*5
```

해당 에밋을 통해 원하는 태그를 작성할 수 있게 된다.

부모 자식 관계 뿐만 아니라 형제 관계도 작성할 수 있다.

```html
ul>li+a
```

```html
<ul>
  <li></li>
  <a href=""></a>
</ul>
```
`input`태그의 type 지정 또한 에밋으로 빠르게 작성할 수 있다. 

```html
input:button
```

```html
<input type="button">
```

`head`태그 내에서도 메타데이터를 에밋으로 빠르게 작성할 수 있다. 

```html
<!-- 파비콘 링크(자동으로 favicon.ico 파일 경로 지정) -->
link:favicon
<!-- 스타일시트 링크(자동으로 style.css 파일 경로 지정) -->
link:css
<!-- 자바스크립트 링크(자동으로 모듈형 script.js 파일 경로 지정) -->
script:module
```

```html
<link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
<link rel="stylesheet" href="style.css">
<script src="script.js" type="module"></script>
```
## 심화 문법

중괄호 안에 $를 사용한다면 연속되는 값을 집어 넣을 수 있다. 
예를 들어, span{place$}*3이라면, 각각 place1, place2, place3의 내용이 들어가 있는 span태그가 형성된다. 

```html
span{place$}*3
```

```html
<span>place1</span>
<span>place2</span>
<span>place3</span>
```








