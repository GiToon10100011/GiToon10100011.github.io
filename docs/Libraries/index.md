---
layout: home-with-toc
title: "라이브러리"
date: 2024-07-13 14:29:00 +0900
categories: Coding
has_children: true
nav_order: 6
---

# 라이브러리

> NPM, CDN, 프레임워크 등 외부 라이브러리를 사용하는 방법을 정리한 페이지입니다.

---

## JS 라이브러리

라이브러리는 보통 `min.js`나 원본 `js 파일`로 구성되어 있다.

`min.js`는 띄어쓰기가 없는 최대한으로 간소화한 (minimum) 파일이다. 번들러를 사용하여 보통 만들어진다. 번들러는 여러 파일을 하나로 묶어주는 도구이다.

이때, 어느정도 커스텀을 하면서 입맛에 맞춰쓰고 싶다면 원본 js파일로 라이브러리를 사용하는것이 바람직하다.

---

## CDN

> Contents Delivery Network의 약자로, 개발자들이 자주 사용하는 라이브러리 소스들을 업로드 해놓는 일종의 클라우드 공간이다.

예를 들어,

```html
<script defer src="https://cdn.jsdelivr.nset/npm/jquery@3.6.0/dist/jquery.min.js"></script>
```

이렇게 사용할 수 있다. 해당 예시는 jQuery 라이브러리를 사용하는 예시이다. <p style="color: #aaa">변수에 달러기호가 붙어있다면 무조건 <code style="color: white">jQuery</code>를 사용했다는 뜻이다.</p>

위의 예시와 같이 라이브러리 역시 `defer` 속성을 사용하여 브라우저가 페이지를 렌더링 하기 전에 먼저 로드 할 수 있도록 하자.

---

## 프레임워크
