---
layout: home-with-toc
title: DOM
date: 2024-06-19 17:29:00 +0900
categories: Coding
parent: Javascript
---

# DOM

> Document Object Model의 약자로, HTML에서 JS의 기능을 적용시키기 위해 태그를 가져와야하는 트리 구조

웹 에디터에서 작성한 코드를 순서대로 웹 브라우저가 인식하여 브라우저 측에서는 전달 받은 코드를 인식하기 위해 메모리 공간을 할당하여 문서 체계화를 시켜야한다. 이 체계화 된 트리 구조가 바로 DOM이다.

트리 구조의 요소를 Node라고 부른다. 이러한 Node는 문서의 구조를 표현하는 모든 객체를 의미하며, 부모와 자식 관계를 가진다.

<img src="/assets/images/js/DOM.png" alt="DOM">

DOM은 동기적 처리방식으로 코드를 처리하기 때문에, 브라우저에서 코드를 읽을때, script태그를 만나게 되면, 해당 script 파일로 들어가게 되어 DOM 생성이 차단(block)되어 브라우저가 멈추는 현상이 발생한다. 이러한 특성 때문에 html과 script파일을 동시다발적으로 읽도록 `defer` 속성을 사용한다. 이를 비동기 처리방식이라고 한다.

```html
<script src="script.js" defer></script>
```

실생활의 예를 통해 동기와 비동기의 차이를 이해해보자.

- 동기적 처리방식 - 알바가 주문을 받는 중에는 음식이나 음료를 제작하지 못함.
- 비동기적 처리방식 - 키오스크를 통해 주문을 받으면서 음료를 동시에 제작할 수 있게 됨.

---

## DOM 조작 메소드

- `document.write()`: 문서 출력
- `document.getElementById()`: 요소 출력
- `document.getElementsByClassName()`: 클래스 출력
- `document.getElementsByTagName()`: 태그 출력
- `document.querySelector()`: 선택자 출력
- `document.querySelectorAll()`: 선택자 출력
- `document.createElement()`: 요소 생성
- `document.appendChild()`: 요소 추가
- `document.removeChild()`: 요소 삭제
- `document.replaceChild()`: 요소 교체
- `document.cloneNode()`: 요소 복제
- `document.getAttribute()`: 속성 출력
- `document.setAttribute()`: 속성 추가
- `document.removeAttribute()`: 속성 삭제
- `document.hasAttribute()`: 속성 존재 여부 확인
- `document.getAttributeNode()`: 속성 노드 출력
- `document.setAttributeNode()`: 속성 노드 추가
- `document.removeAttributeNode()`: 속성 노드 삭제

---

## BOM

> BOM은 Browser Object Model의 약자로, 브라우저 창을 제어하는 모델이다.

`window` 객체를 최상위 객체로 하며 `location, navigator, screen, history` 등의 하위 객체들을 포함한다.

<img src="/assets/images/js/BOM.png" alt="BOM">

---

## QuerySelector

> DOM의 특정 요소를 선택하고 제어를 하기 위한 메소드 함수.

```javascript
const element = document.querySelector("[css 선택자]");
```

`querySelector`의 인자값으로는 <span style="color: yellowgreen">선택자 문법을 사용</span>한다.

```javascript
const classElement = document.querySelector('.class');
const idElement = document.querySelector('#id');
const tagElement = document.querySelector('tag');
const attributeElement = document.querySelector('[attribute="value"]');
const childElement = document.querySelector('parent > child');
...

```

`querySelector`는 DOM의 <u>요소 하나만을 선택</u>하고, <u>여러 요소를 선택</u>하기 위해서는 `querySelectorAll`을 사용한다.

```javascript
const multipleElement = document.querySelectorAll("[css 선택자]");
```

`querySelectorAll`은 여러 요소들을 <span style="color: yellowgreen">배열과 유사한 형태</span>로 값을 반환한다. 기존의 `querySelector`과 똑같이 인자값으로는 `css 선택자`를 받는데, 이때 선택자에 해당되는 모든 요소들을 `NodeList` 형태로 반환한다.

`NodeList`는 배열과 동일한 자료구조는 아니지만 <span style="color: yellowgreen">이터러블한 객체</span>로, 배열의 사용 가능 메소드들을 거의 다 사용가능하다. (`map, filter, reduce` 등은 사용할 수 없으며, 이들을 사용하기 위해서는 `Array.from()`을 통해 배열로 변환하여 사용할 수 있다. 이는 [여기](/docs/javascript/array.html)에서 더 자세히 알아볼 수 있다.)

```javascript
multipleElement.forEach((element) => {
  console.log(element);
});
```

```javascript
const array = Array.from(multipleElement);
```

### JS로 동적으로 스타일 부여하기

```javascript
const element = document.querySelector("div");
element.style.color = "red";
element.style.backgroundColor = "blue";
element.style = `
  color: red;
  background-color: blue;
  font-size: 16px;
  text-align: center;
`;
```

style객체는 객체 형태로 스타일을 부여할 수 있는 객체이다. 이 객체는 속성을 추가하거나 수정하거나 삭제할 수 있다. 이때 값은 문자열의 형태로 입력하고, 부여했던 스타일을 리셋 시키려면 빈 문자열을 입력한다.

⚠️ **스타일 속성 부여 시 주의할 점**

> 스타일 속성을 부여할 때, 속성 이름에 띄어쓰기가 있는 경우 띄어쓰기를 빼고 소문자로 입력해야 한다. 예를 들어, `background-color`는 `backgroundColor`로 입력해야 한다. 즉, 카멜표기법으로 속성을 입력한다고 생각하면 된다. 이는 `스크립트`에서 <span style="color: red">객체 속성에 특수문자는 들어갈 수 없</span>기 때문이다.

### JS로 동적으로 클래스 부여하기

```javascript
const element = document.querySelector("div");
element.classList.add("class");
element.classList.remove("class");
element.classList.toggle("class");
```

`classList`는 클래스 목록을 관리하는 객체이다. 이 객체는 클래스를 추가하거나 제거하거나 토글할 수 있다. 이때 클래스는 문자열의 형태로 입력한다.

---

## 요소의 컨텐츠 제어

| **특성**      | **innerHTML**                                                                   | **innerText**                                                                                           | **textContent**                                                           |
| ------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| **설명**      | 요소 내부의 HTML 마크업(태그 포함 문자열)을 읽거나 설정한다.                    | 요소 내부의 렌더링 된 텍스트를 반환한다. (HTML 태그는 제외되고 실제 화면에 보이는 텍스트를 기준으로 함) | 요소 내부의 순수 텍스트 데이터를 반환한다. (HTML 태그 없이 빠르게 처리됨) |
| **HTML 파싱** | 반환된 문자열을 HTML로 파싱하여 DOM을 재구성할 수 있다.                         | 렌더링 결과에 기반하므로 CSS 스타일이나 숨김 처리 등에 영향을 받을 수 있다.                             | 파싱 과정 없이 단순 텍스트만 추출한다.                                    |
| **사용 목적** | 요소 내부의 HTML 구조 전체(태그 포함)를 동적으로 수정하거나 확인할 때 유용하다. | 사용자에게 보여지는 텍스트를 얻거나 조작할 때 주로 사용한다.                                            | 순수 텍스트만 필요할 경우 (비교, 검색 등) 성능상의 이점으로 사용된다.     |

```html
⁠
<div id="example">Hello <span style="display: none;">world</span>!</div>
```

```javascript
let element = document.getElementById("example");
console.log(element.textContent); // Output: Hello world! console.log(element.innerText); // Output: Hello !
```
