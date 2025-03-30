---
layout: home-with-toc
title: Babel
date: 2025-06-17 16:04:00 +0900
categories: Coding
parent: CS
---

# Babel

> 자바스크립트 트랜스파일러

Babel은 자바스크립트 트랜스파일러로, 자바스크립트 코드를 브라우저에서 실행할 수 있는 코드로 변환해준다. 
모든 버전의 자바스크립트 코드를 하나로 통합하여 사용할 수 있게 만들어진 트랜스파일러이다. 

Babel을 세팅하는 방법은 여러가지가 존재한다.

1. CDN을 사용하는 방법
2. NPM을 사용하는 방법

CDN으로 사용한다면, <a href="https://babeljs.io/setup#installation">여기에서</a> script를 복사하여 붙여넣기 하면 된다. 

이때, 주의해야할 점은 컴파일 하고자하는 스크립트 파일에, `type="text/babel"` 속성을 추가해야한다는 점이다. 

```html
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
<script type="text/babel" src="script.js"></script>
```

NPM을 사용한다면, 다음과 같이 설치하면 된다. 

```bash
npm i @babel/core @babel/cli
```









