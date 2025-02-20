---
layout: home-with-toc
title: Event
date: 2024-06-19 15:53:00 +0900
categories: Coding
parent: Javascript
---

# 이벤트

> 이벤트는 사용자가 웹 페이지에서 특정 작업을 수행할 때 발생하는 신호이다. 이벤트는 사용자의 입력, 페이지 로드, 타이머 등 다양한 상황에서 발생할 수 있다.

컴퓨터에서 이벤트가 발생한다면 이벤트 객체가 생성된다. 이벤트 객체는 이벤트 발생 시 발생한 이벤트에 대한 정보를 담고 있는 객체이다.

---

## 이벤트 핸들러

> 이벤트 핸들러는 이벤트가 발생했을 때 실행되는 함수를 의미한다.

특정 DOM요소에서 일어난 이벤트를 감지하고 이에 따른 동작을 수행하기 위해서는 이벤트 핸들러를 등록해야 한다. 감지할 DOM요소는 [querySelector](/docs/javascript/dom.html#queryselector)를 통해 지정하여 선택하고, 이벤트 핸들러는 함수 형태로 등록한다.

```javascript
const element = document.querySelector("[css 선택자]");

element.addEventListener("이벤트 이름", 이벤트 핸들러);
```
---

## 이벤트 종류

### Mouse Event

- `click`
- `dblclick`
- `mouseenter`
- `mouseleave`
- `mousemove`
- `mousedown`
- `mouseup`
- `mouseover`
- `mouseout`
- `mouseenter`
- `mouseleave`

### Keyboard Event

- `keydown`
- `keyup`
- `keypress`

### Form Event

- `submit`
- `reset`
- `change`
