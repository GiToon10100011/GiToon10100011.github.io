---
layout: home-with-toc
title: Array
date: 2024-06-20 17:11:00 +0900
parent: 이터러블 객체
grand_parent: Javascript
categories: Coding
nav_order: 1
---

# 배열

> 배열은 여러 개의 데이터를 순서대로 저장하는 자료구조이다. 배열은 대괄호([]) 또는 `Array` 생성자를 사용하여 생성할 수 있다. 또한, 배열은 [이터러블한 객체](/docs/javascript/Iterable/index.html)에 해당된다.

```javascript
const array = [1, 2, 3, 4, 5];
const array = new Array(1, 2, 3, 4, 5);
```

<span style="color: red">배열의 요소들에 접근하기 위해서는 <span style="color: white">`index`</span>를 사용</span>한다.

```javascript
array[0]; // 1
array[1]; // 2
array[2]; // 3
```

<span style="color: red">index번호는 항상 0부터 시작</span>한다.

## 배열의 메소드

### from

`from()` 메소드는 배열로 변환할 수 있는 이터러블 객체를 받아 배열로 변환하여 반환한다.

```javascript
Array.from("hello"); // ["h", "e", "l", "l", "o"]
Array.from({ length: 5, 0: "a", 1: "b" }); // ["a", "b", undefined, undefined, undefined]
```

### isArray

`isArray()` 메소드는 주어진 값이 배열인지 확인하여 그 결과를 불리언 값으로 반환한다.

```javascript
Array.isArray([1, 2, 3]); // true
```

### map

`map()` 메소드는 배열의 각 요소에 대해 주어진 함수를 실행하고, 그 결과를 새로운 배열로 반환한다.

```javascript
const array = [1, 2, 3, 4, 5];
const newArray = array.map((item) => item * 2);
console.log(newArray); // [2, 4, 6, 8, 10]
```

### filter

`filter()` 메소드는 배열의 각 요소에 대해 주어진 함수를 실행하고, 그 결과가 참인 요소들만 모아서 새로운 배열로 반환한다.

```javascript
const array = [1, 2, 3, 4, 5];
const newArray = array.filter((item) => item % 2 === 0);
console.log(newArray); // [2, 4]
```

### reduce

`reduce()` 메소드는 배열의 각 요소에 대해 주어진 함수를 실행하고, 그 결과를 하나의 값으로 누적하여 반환한다.

```javascript
const array = [1, 2, 3, 4, 5];
const sum = array.reduce((acc, cur) => acc + cur, 0);
console.log(sum); // 15
```

### forEach

`forEach()` 메소드는 배열의 각 요소에 대해 주어진 함수를 실행한다.

```javascript
const array = [1, 2, 3, 4, 5];
array.forEach((item) => console.log(item)); // 1 2 3 4 5
```

### some

`some()` 메소드는 배열의 요소 중 하나 이상이 주어진 함수를 만족하는지 확인하여 그 결과를 불리언 값으로 반환한다.

```javascript
const array = [1, 2, 3, 4, 5];
const hasEven = array.some((item) => item % 2 === 0);
console.log(hasEven); // true
```

### every

`every()` 메소드는 배열의 모든 요소가 주어진 함수를 만족하는지 확인하여 그 결과를 불리언 값으로 반환한다.

```javascript
const array = [1, 2, 3, 4, 5];
const allEven = array.every((item) => item % 2 === 0);
console.log(allEven); // false
```

### 배열의 메소드 체이닝