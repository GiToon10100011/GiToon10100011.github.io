---
layout: home-with-toc
title: "선택자"
date: 2024-09-07 23:12:00 +0900
categories: etc
parent: CSS
toc: true
---

# 선택자

## 전체 선택자

- `*`(와일드카드)를 사용한다. 전체 선택자는 <u>모든 요소를 선택</u>한다.

---

## 태그 선택자

- `태그이름`을 사용한다. 태그 선택자는 <u>특정 태그를 선택</u>한다.

---

## 클래스 선택자

- `.`을 사용한다. 클래스 선택자는 <u>특정 클래스를 가진 요소를 선택</u>한다. 다중 클래스를 가진 요소를 선택하기 위해서는 `.`을 사용하여 클래스를 여러개 지정해줄 수 있다. <mark style="background: #FF5582A6;">이때 주의해야할 점은 띄어쓰기이다.</mark>

  > `.class1 .class2`라면 `.class1`을 가진 요소 내에 있는 .class2를 가진 요소들을 선택해줄 수 있다.

  > `.class1.class2`라면 `.class1`과 `.class2`를 <mark style="background: #BBFABBA6;">모두 가진 요소</mark>한테만 스타일이 적용된다. 이를 활용하여 첫번째 클래스는 공용으로 모두 적용 시킬 클래스로 지정하고, 특정 요소한테만 스타일을 다르게 적용시키고 싶으면 클래스를 추가적으로 지정하여 스타일을 덮어쓰면 된다.

  > 이를 응용하여 특정 클래스를 지닌 태그를 지정해줄수도 있다. `div.class1`이라면 `div`태그 중에 `class1`클래스를 가진 요소들을 선택해줄 수 있다. 반대로 `div .class1`이라면 `div`태그 내에 있는 `class1`클래스를 가진 요소들을 선택해줄 수 있다.

- ✅ 가상 클래스

  ```css
  /* 버튼 클릭 시 버튼 색상 변경 */

  .toggle-button {
    background-color: red;
    &.active {
      background-color: blue;
    }
  }
  ```

  해당 가상 클래스는 스크립트로 부여가 되며 이벤트가 발생했을 때 스타일을 적용할 수 있다.

  현재는 없는 클래스지만 스크립트를 통해 부여될 클래스에 대한 스타일링을 정의하여 사용할 수 있는 것이다.

  ```js
  document.querySelector(".toggle-button").addEventListener("click", () => {
    document.querySelector(".toggle-button").classList.toggle("active");
  });
  ```

스크립트는 나중에 [여기](/docs/javascript/index.html)에서 더 자세히 알아보자.

---

## ID 선택자

- `#`을 사용한다. 아이디 선택자는 <u>특정 id속성이 있는 요소를 선택</u>한다. <mark style="background: #BBFABBA6;">id속성은 웹 페이지 내부에서 중복되면 안된다</mark>는 규정이 있기에 특정 요소를 선택하는데 유용하다.

---

## 속성 선택자

- `태그[attribute]`와 같은 형식으로 사용된다. <u>특정 속성을 가진 요소를 선택</u>할 수 있다.

속성 선택자는 다양한 연산자를 활용하여 더 정교한 선택이 가능하다. <span style="color: #aaa;">(이는 이후에 배울 정규표현식과 유사하기도 하다)</span>:

`[속성 ~= 값]` | 공백으로 구분된 여러 값 중 <u>특정 단어를 포함</u>하는 요소 선택
`[속성 |= 값]` | `하이픈(-)`으로 연결된 단어나 <u>정확한 값으로 시작</u>하는 요소 선택 (언어 코드 선택에 유용)
`[속성 ^= 값]` | 값으로 <u>시작하는</u> 요소 선택
`[속성 $= 값]` | 값으로 <u>끝나는</u> 요소 선택 (파일 확장자 선택 시 유용)
`[속성 *= 값]` | 값을 <u>포함하는</u> 모든 요소 선택

이 연산자들은 정규표현식의 패턴 매칭과 유사하게 동작하며, 복잡한 요소 선택이 필요할 때 활용할 수 있다.

```css
/* href 속성이 있는 <a> 요소 선택 */
a[href] {
  color: red;
}

/* type 속성이 text인 <input> 요소 선택 */
input[type="text"] {
  color: blue;
}
```

---

## 자식 선택자

- `>`를 사용한다. 자식 선택자는 <u>특정 요소의 자식 요소를 선택</u>한다. table태그에는 후손 선택자를 사용할 수 없으며, `table > tr > th`가 아닌, `table tr th{}` 와 같이 사용해야 한다. 이는 [HTML문서](/docs/html/index.md#tabledesc)에서 언급했듯이 <mark style="background: #BBFABBA6;">웹 브라우저에서 tbody, thead, tfoot 태그를 자동으로 추가</mark>하기 때문이다.

---

## 후손 선택자

- ` `(공백)을 사용한다. 후손 선택자는 <u>특정 요소의 후손 요소를 선택</u>한다.<mark style="background: #FF5582A6;"> >는 직계 자식을 선택하는 것이며, 후손 선택자는 모든 자손을 선택</mark>한다.

---

## 인접 형제/동위 선택자

- `+`를 사용한다. 인접 형제 선택자는 특정 요소의 <u>인접 형제 요소를 선택</u>한다.

---

## 일반 형제/동위 선택자

- `~`를 사용한다. 일반 형제 선택자는 <u>일반 형제 요소를 선택</u>한다. <mark style="background: #BBFABBA6;">+는 바로 다음 형제를 선택하는 것이며, ~는 모든 형제를 선택</mark>한다.

  ```html
  <!-- 예시 -->
  <h1>Hello</h1>
  <p>Hello</p>
  <p>Hello</p>
  <p>Hello</p>
  <p>Hello</p>
  ```

  ```css
  /* 인접 형제 선택자 */
  h1 + p {
    color: red;
  }
  /* 첫번째 h1과 인접한 p만 스타일 적용*/

  /* 일반 형제 선택자 */
  h1 ~ p {
    color: red;
  }
  /* 첫번째 h1과 동위관계의 p들 모두에게 스타일 적용*/
  ```

---

## 부모 선택자

- `:has(포함할 요소)`를 사용한다. 부모 선택자는 <u>특정 요소를 포함하는 부모 요소를 선택</u>한다. 연산자를 활용하여 동위관계에 있는 요소를 선택할 수도 있다.

  ```css
  /* h1, h2에 스타일 적용 */
  h1,
  h2 {
    margin: 0 0 1rem 0;
  }

  /* h1요소 중에 바로 다음 요소가 h2인 h1요소를 선택 */
  h1:has(+ h2) {
    margin: 0 0 0.25rem 0;
  }
  ```

---

## 부정 선택자

- `:not(제외할 요소)`를 사용한다. 부정 선택자는 <u>특정 요소를 제외한 요소를 선택</u>한다.

  ```css
  /* body요소 내에 h2요소가 아닌 요소들을 전부 선택 */
  body:not(h2) {
    color: red;
  }
  ```

---

## 반응 선택자

- `:반응`를 사용한다. `:active, :checked, :hover, :focus, :disabled` 등이 있다. 반응 선택자는 <u>특정 요소의 특정 반응 시의 상태를 선택</u>한다.

  문자에만 적용되는 반응 문자 선택자도 존재한다. `::selected`은 선택된 텍스트(드래그 된)를 선택한다.

⚠️ **active와 focus의 차이**

active는 클릭 시 발생하는 이벤트이며, focus는 커서가 올라가 있는 상태(활성화 된 상태, `input`태그에 커서가 올라가 있는 상태)이다.

```css
/* 버튼에 호버 시 배경색이 변경 */
button:hover {
  background-color: red;
}
```

---

## 유일 자식 선택자

- `:only-child`를 사용한다. 유일 자식 선택자는 <u>특정 요소의 유일 자식 요소를 선택</u>한다.

  ```css
  /* 부모 요소 안에 자식이 하나뿐인 <li> 요소 선택 */
  li:only-child {
    color: red;
  }
  ```

---

## 일반 구조 선택자

- `:nth-child()`를 사용한다. 일반구조선택자는 <u>특정 요소의 첫 번째 자식 요소를 선택</u>한다. 1개의 부모 요소 안에 있는 모든 형제들을 형태와 관계없이 입력된 순서대로 카운팅한다.

  이때, 맨 첫번째 자식은 `:first-child`, 맨 마지막 자식은 `:last-child`로 선택할 수 있다.

  뒤쪽에서부터 카운팅을 하고 싶다면 `:nth-last-child()`를 사용하면 된다.

  ```css
  /* 두번째 자식 */
  li:nth-child(2) {
    color: red;
  }

  /* 홀수번째 자식 */
  li:nth-child(odd) {
    color: red;
  }

  li:nth-child(2n + 1) {
    color: red;
  }

  /* 짝수번째 자식 */
  li:nth-child(even) {
    color: red;
  }

  li:nth-child(2n) {
    color: red;
  }

  /* 뒤쪽에서부터 카운팅 */
  li:nth-last-child(2) {
    color: red;
  }
  ```

---

## 형식 구조 선택자

- `:nth-of-type()`를 사용한다. 형식 구조 선택자는 <u>특정 요소의 형식 구조 요소를 선택</u>한다. 1개의 부모 요소 안에 동일한 형태의 형제요소(ex: 동일한 클래스를 가지고 있는 구조의 형태/동일한 태그)가 여러개 있을 때, 순서대로 카운팅한다. `-child`는 자식을 선택하는 것이며, `-of-type`은 형식 구조를 선택하는 것이다.

  마찬가지로 `first-of-type`, `last-of-type`, `nth-last-of-type`도 사용할 수 있다.

  ```css
  /* 첫 번째 <p> 요소 선택 */
  p:first-of-type {
    color: red;
  }

  /* 마지막 <p> 요소 선택 */
  p:last-of-type {
    color: red;
  }

  /* 두번째 <p> 요소 선택 */
  p:nth-of-type(2) {
    color: red;
  }

  /* 홀수번째 <p> 요소 선택 */
  p:nth-of-type(odd) {
    color: red;
  }
  ```

---

## 링크 선택자

- `:link(링크를 지닌 요소), :visited(클릭 후), :hover(호버 시), :active(클릭 시)`를 사용한다. 링크 선택자는 <u>특정 요소의 링크 상태를 선택</u>한다.

  ```css
  a:link {
    color: red;
  }

  a:visited {
    color: blue;
  }
  ```

---

## 문자 선택자

- `:first-letter`, `:first-line`을 사용한다. 문자 선택자는 <u>특정 요소의 첫번째 문자 혹은 첫번째 문장을 선택</u>한다. 이때, 줄은 줄바꿈이 되는 기준까지를 줄로 친다.

  ```css
  p:first-letter {
    color: red;
  }

  p:first-line {
    color: red;
  }
  ```

### 전후문자선택자

- `::before, ::after`를 사용한다. 전후문자선택자는 <u>특정 요소의 전후문자를 선택</u>한다.

`&`를 사용하여 자기 자신을 선택할 수도 있다. 이는 [네스팅](/docs/css/index.html#nesting)에서 매우 유용하게 사용된다.

해당 선택자는 주로 콘텐츠를 추가하는데 사용된다. 요소의 바로 뒤, 혹은 앞쪽에 콘텐츠를 추가할 수 있다는 것이 특징이며, 이를 활용하여 레이어를 겹치는 효과 등도 줄 수 있다.

```css
div {
  &::before {
    content: "Hello";
  }
}
```

가장 중요한 점은, 전후 문자 선택자는 반드시 `content` 속성을 사용해야 요소가 나온다.

`content` 속성을 활용하여 css의 `attr()` 함수를 사용할 수 있다.

```html
<div data-text="Hello">Hello</div>
```

```css
div::before {
  content: attr(data-text);
}
```

이를 활용하여 개별적으로 요소의 컨텐츠 설정을 유용하게 할 수 있다.

이외의 선택자들도 존재하는데, <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors" target="_blank">mdn docs</a>에서 확인해보자. <span style="color: #aaa;">참고로 mdn docs에서 휴지통 모양이 표시된 속성은 곧 중단될 의미이며, 필터 아이콘이 표시되어 있다면 아직 테스팅(특정 브라우저에서만 되어 현재 실험중) 중인 속성이다.</span>

선택자 여러개에 한번에 속성을 적용할 수도 있다. 이는 콤마(`,`)를 사용한다.

```css
h1,
h2,
h3 {
  color: red;
}
```
