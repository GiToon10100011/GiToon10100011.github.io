---
layout: home-with-toc
title: String
date: 2024-06-20 17:49:00 +0900
parent: 이터러블 객체
grand_parent: Javascript
categories: Coding
nav_order: 2
---

# String

> 문자열 객체

## 자주 사용하는 메소드 & 속성

## String 자체 메소드

- `length` - 문자열의 길이
- `charAt()` - 특정 위치의 문자 반환
- `charCodeAt()` - 특정 위치의 유니코드 반환
- `concat()` - 문자열 결합
- `includes()` - 특정 문자열 포함 여부 확인
- `indexOf()` - 특정 문자열의 위치 반환
- `lastIndexOf()` - 특정 문자열의 마지막 위치 반환
- `replace()` - 특정 문자열 치환
- `slice()` - 특정 범위의 문자열 추출
- `split()` - 특정 문자열을 기준으로 배열로 분리
- `substring()` - 특정 범위의 문자열 추출
- `toLowerCase()` - 소문자로 변환
- `toUpperCase()` - 대문자로 변환
- `padStart()` - 첫번째 인자로 지정한 문자의 길이, 두번째로 채울 값을 받는다. 채울 값이 없으면 공백으로 채운다.

  ```javascript
  "123".padStart(5, "0"); // '00123'
  "123".padEnd(5, "0"); // '12300'
  ```
