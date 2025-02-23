---
title: "Dataset 속성"
layout: post-with-comments
date: 2024-07-01 00:16:00 +0900
categories: etc
parent: HTML
---

# Dataset 속성

> html에서 속성으로 data-를 사용하여 데이터를 저장할 수 있다.

html에서 내가 직접 고유한 속성을 만들 수 있다. 이를 데이터 속성이라고 한다.

```html
<div data-text="Hello">Hello</div>
```

## CSS 활용하기

```css
div[data-text] {
  color: red;
}

div {
  content: attr(data-text);
}
```

CSS에서 데이터셋을 사용하기 위해서는 `attr()`함수를 사용한다.

⚠️ 이때, `attr()`함수는 오직 `content` 속성에서만 완전히 지원되므로 주의하자.

## JavaScript 활용하기

```js
const div = document.querySelector("div");
console.log(div.dataset.text);
```

JavaScript에서 데이터셋을 사용하기 위해서는 `dataset` 속성을 사용한다. 이때, data-접두어를 뺀 이름만 사용한다.
dataset 속성으로 접근하는 경우 속성 이름은 자동으로 낙타표기법으로 변환된다.

```html
<div data-index-number="1">Hello</div>
```

```js
const div = document.querySelector("div");
console.log(div.dataset.indexNumber);
```
