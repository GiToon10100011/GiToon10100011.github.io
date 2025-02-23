---
layout: home-with-toc
title: 기타 태그들
date: 2024-07-08 16:08:00 +0900
categories: HTML
parent: HTML
---

# 기타 태그들

## dialog

> dialog는 대화 상자를 정의하는 태그이다.

```html
<dialog>
  <p>Hello</p>
</dialog>
```

dialog 태그는 대화 상자를 정의하는 태그이다. 대화 상자는 사용자와 상호작용을 할 수 있는 창을 말한다. modal창을 쉽게 제작할 수 있게 해주는 태그 중 하나이다.

---

## details

> details는 세부 정보를 정의하는 태그이다.

```html
<details>
  <summary>Hello</summary>
  <p>Hello</p>
</details>
```

details 태그는 세부 정보를 정의하는 태그이다. summary 태그는 세부 정보의 제목을 정의하는 태그이다.

---

## code

> code는 코드를 정의하는 태그이다.

```html
<code>Hello</code>
```

내부의 텍스트를 인라인 코드로 표시할 수 있다.

---

## pre

> pre는 미리 서식화된 텍스트를 정의하는 태그이다.

```html
<pre><code class="language-javascript">
function example() {
    console.log("Hello World!");
}
</code></pre>
```

코드 블럭을 표시할 때 사용한다. 코드 블럭은 코드를 미리 서식화하여 표시할 때 사용한다.

사용 시 구분감을 위해 따로 배경 같은 스타일링을 주는 것을 권장한다.
