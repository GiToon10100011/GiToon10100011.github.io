---
layout: home-with-toc
title: 이터러블 객체
date: 2024-06-20 17:19:00 +0900
categories: Coding
parent: Javascript
has_children: true
---

# 이터러블 객체

> iterable(iterate = 반복) - 본인의 데이터 공간에 들어온 자식 요소들을 하나씩 가져와서 반복적으로 무언가를 실행시켜줄 수 있는 자료의 형태를 말한다.

이터러블 객체는 `Array, String, Map, Set` 등의 자료구조를 의미한다. 이터러블 객체는  반복문을 사용할 수 있으며, `Symbol.iterator` 메소드를 통해 이터레이터를 반환할 수 있다. 또한, 각 요소마다 고유의 `index`번호가 존재한다.

각 이터러블 객체에 대해 자세히 알아보려면 아래의 링크를 참고하자.

- [Array](/docs/javascript/Iterable/array.html)
- [String](/docs/javascript/Iterable/string.html)
- [Map](/docs/javascript/Iterable/map.html)
- [Set](/docs/javascript/Iterable/set.html)


## 제네레이터

> 제네레이터는 이터러블 객체를 반환하는 함수를 말한다. 제네레이터는 `function*` 키워드를 사용하여 정의한다.

```javascript

```