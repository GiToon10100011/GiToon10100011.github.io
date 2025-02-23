---
layout: post-with-comments
title: JSON
date: 2024-06-21 17:00:00 +0900
categories: Coding
parent: Javascript
---

# JSON

> JavaScript Object Notation의 약자로, 데이터를 표현하는 형식

자바스크립트의 객체 표기법의 약자이며, 서버와 웹에서 클라이언트가 공통된 데이터베이스를 서로 주고받을 수 있게끔 하는 표준 형식이다.

JSON을 JS에서 제어 및 활용하기 위해서는 `fetch` API를 사용한다.

```javascript
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((json) => console.log(json));
```

`fetch` 다음에 메소드체이닝으로 사용하는 `then()` 함수를 통해 가져온 데이터를 어떻게 처리할지 정의할 수 있다.

위의 코드는 `fetch` API를 사용하여 `https://jsonplaceholder.typicode.com/todos/1`에서 데이터를 가져오고, 가져온 데이터를 `json`으로 변환하여 콘솔에 출력한다.

`json`은 원래 웹브라우저에서 인식 혹은 출력을 할 수 없다. 따라서 위처럼 `fetch` API를 사용하여 데이터를 가져오고, 가져온 데이터를 `json()`함수를 통해 객체화를 시켜서 사용할 수 있게 된다. 


