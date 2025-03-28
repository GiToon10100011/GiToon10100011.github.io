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

<mark style="background: #D2B3FFA6;">배열의 요소들에 접근하기 위해서는 <code>index</code>를 사용한다.
</mark>

```javascript
array[0]; // 1
array[1]; // 2
array[2]; // 3
```

<mark style="background: #D2B3FFA6;">index번호는 항상 0부터 시작</mark>한다.

---
## 배열의 데이터 변환 메소드 

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

### sort

`sort()` 메소드는 배열의 요소를 정렬하고, 정렬된 배열을 반환한다. 또한, 원본배열을 변경한다.

```Javascript
const array = [5, 3, 2, 4, 1];
array.sort();
console.log(array); // [1, 2, 3, 4, 5]
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
 
---
## 자료구조 구현 배열 메소드

[Deque](/docs/CS/index.html#deque)는 양쪽 끝에서 요소를 추가하고 제거할 수 있는 자료구조이다. JS에서는 `shift()`와 `unshift()` 메소드를 사용하여 덱의 자료구조를 구현할 수 있다. 

### shift

`shift()` 메소드는 배열의 첫 번째 요소를 제거하고, 제거된 요소를 반환한다.

```javascript
const array = [1, 2, 3, 4, 5];
const first = array.shift();
console.log(first); // 1
console.log(array); //[2, 3, 4, 5]
```

### unshift

`unshift()` 메소드는 배열의 첫 번째 위치에 하나 이상의 요소를 추가하고, 배열의 새로운 길이를 반환한다.

```Javascript
const array = [1, 2, 3, 4, 5];
array.unshift(0);
console.log(array); // [0, 1, 2, 3, 4, 5]
```

### pop

`pop()` 메소드는 배열의 마지막 요소를 제거하고, 제거된 요소를 반환한다.

```javascript
const array = [1, 2, 3, 4, 5];
const last = array.pop();
console.log(last); // 5
console.log(array); //[1, 2, 3, 4]
```

### push

`push()` 메소드는 배열의 마지막에 하나 이상의 요소를 추가하고, 배열의 새로운 길이를 반환한다.

```Javascript
const array = [1, 2, 3, 4, 5];
array.push(6);
console.log(array); // [1, 2, 3, 4, 5, 6]
```

---
## 원본배열 조작 메소드

### splice

`splice()` 메소드는 배열의 요소를 추가, 제거, 또는 교체할 수 있다.

```javascript
const arr6 = [1, 2, 3, 4, 5];
arr6.splice(2, 1, 'a', 'b'); // 반환값: [3] (제거된 요소)
console.log(arr6); // [1, 2, 'a', 'b', 4, 5]

// 삭제 없이 요소만 추가 (두 번째 인자가 0)
const arr7 = [1, 2, 3, 4, 5];
arr7.splice(2, 0, 'a', 'b', 'c'); // 반환값: [] (제거된 요소 없음)
console.log(arr7); // [1, 2, 'a', 'b', 'c', 3, 4, 5]

// 모든 요소 제거 후 새 요소로 대체
const arr8 = [1, 2, 3, 4, 5];
arr8.splice(0, arr8.length, 'x', 'y', 'z'); // 반환값: [1, 2, 3, 4, 5]
console.log(arr8); // ['x', 'y', 'z']
```
세번째 인자 부터는 추가할 값, 2번째 인자값은 1번째 인덱스 부터 몇개의 요소를 제거할 것인지를 결정한다. 

splice는 인자값을 1~2개만 받을 수도 있다.

```javascript
// 인자 1개: 시작 인덱스부터 끝까지 모든 요소 제거
const arr1 = [1, 2, 3, 4, 5];
arr1.splice(2); // 반환값: [3, 4, 5] (제거된 요소들)
console.log(arr1); // [1, 2]

// 음수 인덱스 사용 (끝에서부터 카운트)
const arr2 = [1, 2, 3, 4, 5];
arr2.splice(-2); // 반환값: [4, 5] (제거된 요소들)
console.log(arr2); // [1, 2, 3]

// 인자 2개: 시작 인덱스부터 지정된 개수만큼 요소 제거
const arr3 = [1, 2, 3, 4, 5];
arr3.splice(1, 2); // 반환값: [2, 3] (제거된 요소들)
console.log(arr3); // [1, 4, 5]

// 범위를 벗어나는 개수 지정 시 가능한 만큼만 제거
const arr5 = [1, 2, 3, 4, 5];
arr5.splice(3, 10); // 반환값: [4, 5] (제거된 요소들)
console.log(arr5); // [1, 2, 3]
```
이처럼 splice() 메소드는 매우 유연하게 배열을 수정할 수 있어, 삭제, 추가, 교체 등 다양한 작업을 할 수 있다.

### slice

`slice()` 메소드는 배열의 일부를 추출하여 새로운 배열을 반환한다.

```javascript
const array = [1, 2, 3, 4, 5];
const newArray = array.slice(2, 4);
console.log(newArray); // [3, 4]
```
splice와 slice의 중요한 차이점은, splice는 원본 배열을 변경하지만, slice는 원본 배열을 변경하지 않는다는 것이다.

### reverse

`reverse()` 메소드는 배열의 요소를 역순으로 배열한다.

```javascript
const array = [1, 2, 3, 4, 5];
array.reverse();
console.log(array); // [5, 4, 3, 2, 1]
```

---
## 기타 배열의 메소드

### find

`find()` 메소드는 배열의 요소 중 주어진 함수를 만족하는 첫 번째 요소를 반환한다.

```javascript
const array = [1, 2, 3, 5, 4];
const found = array.find((item) => item > 3);
console.log(found); // 5
```

find는 배열을 순회하면서 주어진 함수를 만족하는 첫 번째 요소를 반환한다. 만족하는 요소가 없으면 undefined를 반환한다. 
이때문에 5가 반환되었다.

### findIndex

`findIndex()` 메소드는 배열의 요소 중 주어진 함수를 만족하는 첫 번째 요소의 인덱스를 반환한다.

```javascript
const array = [1, 2, 3, 5, 4];
const foundIndex = array.findIndex((item) => item > 3);
console.log(foundIndex); // 3
```

`findIndex`는 배열을 순회하면서 주어진 함수를 만족하는 첫 번째 요소의 인덱스를 반환한다. 만족하는 요소가 없으면 `-1`을 반환한다.

### indexOf

`indexOf()` 메소드는 배열의 요소 중 주어진 값이 처음 나타나는 인덱스를 반환한다.

```javascript
const array = [1, 2, 3, 3, 5, 3];
const foundIndex = array.indexOf(3); //3의 값이 나타나는 첫 번째 인덱스를 반환
console.log(foundIndex); // 2
```

`indexOf`는 배열을 순회하면서 주어진 값이 처음 나타나는 인덱스를 반환한다. 찾지 못하면 `-1`을 반환한다.

### fill

`fill()` 메소드는 배열의 요소를 주어진 값으로 채우고, 채운 배열을 반환한다.

```javascript
const array = [1, 2, 3, 4, 5];
array.fill(0);
console.log(array); // [0, 0, 0, 0, 0]
```

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

### includes

`includes()` 메소드는 배열에 특정 요소가 포함되어 있는지 확인하여 그 결과를 불리언 값으로 반환한다.

```javascript
const array = [1, 2, 3, 4, 5];
const hasThree = array.includes(3);
console.log(hasThree); // true
```

### join

`join()` 메소드는 배열의 모든 요소를 연결하여 하나의 문자열로 반환한다.

```Javascript
const array = [1, 2, 3, 4, 5];
const joined = array.join();
console.log(joined); // "1, 2, 3, 4, 5"
```

join은 배열의 요소를 문자열로 변환하여 연결한다. 따라서 배열의 요소가 문자열이 아니면 문자열로 변환된다.
인자값으로 구분자를 받을 수 있다. 구분자를 생략하면 기본값은 쉼표(,)이다.

```javascript
const array = [1, 2, 3, 4, 5];
const joined = array.join("-");
console.log(joined); // "1-2-3-4-5"
```

### concat

`concat()` 메소드는 배열을 합치고, 합친 배열을 반환한다.

```javascript
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combined = array1.concat(array2);
console.log(combined); // [1, 2, 3, 4, 5, 6]
```
concat은 ES6이후 도입된 전개 연산자(...)가 나오면서 더 간단하게 사용할 수 있다.

```javascript
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combined = [...array1, ...array2];
console.log(combined); // [1, 2, 3, 4, 5, 6]
```

---

## 다차원 배열 평탄화

### flat

`flat()` 메소드는 배열의 중첩된 배열을 하나의 배열로 평탄화하여 반환한다.

```javascript
const array = [1, [2, 3], [4, 5]];
const flattened = array.flat();
console.log(flattened); // [1, 2, 3, 4, 5]
```

flat은 인자값으로 평탄화할 깊이를 지정할 수 있다. 기본값은 1이다.

### flatMap

`flatMap()` 메소드는 배열의 각 요소에 대해 주어진 함수를 실행하고, 그 결과를 평탄화하여 반환한다.

```javascript
const array = [1, 2, 3, [4, 5]];
const mapped = array.flatMap((item) => [item * 2]);
console.log(mapped); // [2, 4, 6, 8, 10]
```

flatMap은 `map`과 `flat`을 합친 메소드이다. 

---

## 배열의 구조분할할당

배열의 구조분해할당은 배열의 요소를 변수에 할당하는 방법이다.

```javascript
const array = [1, 2, 3, 4, 5];
const [first, second, ...rest] = array;
console.log(first); // 1
console.log(second); // 2
console.log(rest); // [3, 4, 5]
```

