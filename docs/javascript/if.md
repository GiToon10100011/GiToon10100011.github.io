---
layout: home-with-toc
title: 조건문
date: 2024-07-03 18:50:00 +0900
categories: Coding
parent: Javascript
---

# 조건문

## 단락회로평가

> 단락회로평가는 조건문을 평가할 때 조건이 참인 경우 조건문을 종료하는 것을 의미한다.

```javascript
const a = 1;
const b = 2;
const c = 3;

console.log(a && b && c); // 3
console.log(a || b || c); // 1
```

위 코드에서 `a && b && c`는 a가 참이므로 b를 평가하고, b가 참이므로 c를 평가하여 3을 반환한다.

`a || b || c`는 a가 참이므로 조건문을 종료하고 1을 반환한다.

단락회로평가는 이처럼 조건문에서 효율적인 코드를 작성하기 위해 사용된다.

## if문

## 삼항조건연산

### 깊은/얕은 비교

- `===` : 깊은 비교 (자료형까지 같은지 검사)
- `==` : 얕은 비교 (자료형 상관없이 값만 같은지 검사)

```Javascript
console.log(1 === '1'); // false
console.log(1 == '1'); // true
```

이때 중요한 것은, 참조형 변수와의 비교에서는 얕은비교, 깊은비교의 차이가 없이 둘다 참조 비교를 하게 된다. 이는 자바스크립트의 비교 연산 규칙이다. 

```js
const obj1 = { x: 10 };
const obj2 = { x: 10 };  // 같은 내용이지만 다른 객체
const obj3 = obj1;       // obj1과 같은 참조

console.log(obj1 == obj2);   // false (다른 객체 참조)
console.log(obj1 === obj2);  // false (다른 객체 참조)
console.log(obj1 == obj3);   // true (같은 객체 참조)
console.log(obj1 === obj3);  // true (같은 객체 참조)
```

참조형 타입은 항상 메모리 주소를 비교하며, 내용이 같더라도 다른 객체면 false를 반환한다. 

내용 비교가 필요한 경우:

- 객체/배열:`JSON.stringify(obj1) === JSON.stringify(obj2)` 또는 깊은 비교 함수 사용

- 함수: 함수 내용 비교는 일반적으로 불가능 (함수의 `toString()`을 비교할 수는 있지만 권장되지 않음)

### 논리 연산자

- `&&` : 논리곱 (모든 조건이 참이어야 참)
- `||` : 논리합 (하나의 조건이 참이면 참)
- `!` : 논리부정 (조건이 참이면 거짓, 거짓이면 참)

```Javascript


```
