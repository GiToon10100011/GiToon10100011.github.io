---
layout: home-with-toc
title: Event
date: 2024-06-19 15:53:00 +0900
categories: Coding
parent: Javascript
---

## 이벤트 핸들러

> 이벤트 핸들러는 이벤트가 발생했을 때 실행되는 함수를 의미한다.

특정 DOM요소에서 일어난 이벤트를 감지하고 이에 따른 동작을 수행하기 위해서는 이벤트 핸들러를 등록해야 한다. 감지할 DOM요소는 [querySelector](/docs/javascript/dom.html#queryselector)를 통해 지정하여 선택하고, 이벤트 핸들러는 함수 형태로 등록한다.

```javascript
const element = document.querySelector("[css 선택자]");

element.addEventListener("이벤트 이름", 이벤트 핸들러);
```



