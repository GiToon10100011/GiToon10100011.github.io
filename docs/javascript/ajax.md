---
layout: home-with-toc
title: AJAX
date: 2024-07-08 16:08:00 +0900
categories: Coding
parent: Javascript
---

# AJAX

> Asynchronous JavaScript and XML의 약자로, 비동기적으로 데이터를 주고받을 수 있는 기술이다.

AJAX는 비동기적으로 데이터를 주고받을 수 있는 기술이다. 이 기술은 웹 페이지의 일부분만 새로고침하여 페이지의 로드 시간을 줄이고, 사용자 경험을 향상시키는데 도움을 준다.

---

## Promise

> Promise는 비동기 작업의 결과를 나타내는 객체이다.

```javascript
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("성공");
  }, 2000);
});
```


