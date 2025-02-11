---
layout: post-with-comments
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



