---
layout: home-with-toc
title: Scope
date: 2025-03-30 17:00:00 +0900
categories: Coding
parent: Javascript
---

## 스코프

> 스코프는 변수가 유효한 범위를 의미한다.

```javascript
var x = 10; //전역 스코프

function test() {
  var x = 20; //test 함수의 지역 스코프
  console.log(x);
}
test(); // 20
console.log(x); // 10
```

- `전역 스코프(global scope)` : 전체 코드에서 유효한 범위를 의미한다. 위 예시에서 x가 전역 스코프를 가지고 있다.

- `지역 스코프(local scope)` : 블럭이 끝나기 전까지 내부에서 유효한 범위를 의미한다. 위의 예시에서 test 함수 내부에 있는 변수 x는 지역 스코프를 가지고 있다.

Javascript는 렉시컬 스코프 언어이다. 렉시컬 스코프는 함수가 선언된 위치에 따라 스코프가 결정되는 것을 의미한다. 즉, 함수가 선언된 위치에 따라 스코프가 결정된다는 것이다.

변수나 함수를 지역화하고 싶으면, 중괄호 블록으로 묶어주면 된다.

```javascript
{
  let x = 10;
}

console.log(x); // ReferenceError: x is not defined
```

### var과 let, const의 스코프 차이

var는 함수 스코프, 전역스코프 두가지를 가지며, let과 const는 블록 스코프를 가진다.

```javascript
var x = 10;
let y = 20;
const z = 30;
```

var같은 경우에는, 함수 내에서 선언되지 않는다면, 전역 객체의 프로퍼티가 된다.
이때, 전역 객체는 브라우저에서는 `window`객체, Node.js에서는 `global`객체이다.

```javascript
var x = 10;
console.log(window.x); // 10
```

반면에, ES6에서 도입된 let과 const는 전역 객체의 프로퍼티가 되지 않는다. 자기만의 영역을 만들어서 변수를 저장하는 것이 특징이다. 

```javascript
let y = 20;
console.log(window.y); // undefined
```

더 자세한 예시를 살펴보자. 

```js
let f3;
let x = 100;
let f1 = function () {
  console.log("f1:", window.x, x) // 100 undefined
  let x = 40;
  f3 = function () {
    console.log(x);
  };
};

console.log("global:", window.x, x); // 100 100
```

위 코드에서 볼 수 있듯이, `let`과 `const`는 블록 스코프를 가지며, `var`는 함수 스코프와 전역 스코프를 가진다.

또한, `let`과 `const`는 선언 전에 접근하면 ReferenceError가 발생한다. 이는 선언 전에 접근하면 [호이스팅](#hoisting)이 발생하지만, 선언 전에 접근하면 [TDZ](#tdz)에 의해 차단되기 때문이다.

그렇다면, 선언 없이 변수를 초기화 시킨다면 어떻게 될까?

```js
x = 100;
{
   y = 100;
}
console.log(window.x, window.y); // 100 100
```

위 코드에서 볼 수 있듯이, 어디에서든 간에 선언 없이 변수를 초기화 시키면 항상 전역 객체의 프로퍼티가 된다. 

---

<h2 id="hoisting">호이스팅</h2>

> 호이스팅은 변수를 선언하기 전에 사용할 수 있게 만드는 것을 의미한다.

```javascript
console.log(name);
var name = "John";
```

위 코드는 호이스팅으로 인해 `undefined`가 출력된다. 이는 자바스크립트 엔진이 변수 선언을 코드의 최상단으로 끌어올리지만(호이스팅), **변수 초기화는 원래 위치에 그대로 남아있기** 때문이다. `var`로 선언된 변수는 선언과 동시에 `undefined`로 초기화되며, 실제 값 할당은 코드 작성 위치에서 발생한다.

⚠️ 호이스팅의 존재 이유

1. 함수 선언문 호이스팅

   ```javascript
   // 함수 호출이 선언보다 앞서 있는 경우
   calculate(5); // 정상 동작

   function calculate(n) {
     return n * 2;
   }
   ```

   - 함수 간의 **상호 참조**를 가능하게 하기 위한 설계
   - 코드 작성 순서에 얽매이지 않는 유연성 제공

2. var의 함수 스코프 동작

   ```javascript
   function init() {
     count = 0; // 암묵적 전역 변수 생성 방지
     var count; // 호이스팅으로 인해 스코프 상단에 선언
   }
   ```

3. 실행 컨텍스트 생성 과정

   - 컴파일 단계: 모든 선언문(변수/함수)을 먼저 수집
   - 실행 단계: 선언문 외 나머지 코드 실행

`let`과 `const`도 선언 호이스팅이 발생하지만, **Temporal Dead Zone(TDZ)** 으로 들어가 선언 전에 접근하면 ReferenceError가 발생한다:

```javascript
console.log(a); // ReferenceError
let a = 10;
```

| 키워드 | 호이스팅 | 초기값    | 재선언 |
| ------ | -------- | --------- | ------ |
| var    | O        | undefined | O      |
| let    | O (TDZ)  | 없음      | X      |
| const  | O (TDZ)  | 없음      | X      |

✅ 호이스팅의 이점

1. **레거시 코드 유지보수**: 아직도 많은 프로젝트에서 var 사용

2. **함수 호이스팅 유용성**:

   ```javascript
   // 이벤트 핸들러 등록 후 함수 정의
   button.addEventListener("click", handleClick);

   function handleClick() {
     // 핸들러 로직
   }
   ```

📌 핵심 정리

| 구분               | 예시                          | 호이스팅 | 특징                 |
| ------------------ | ----------------------------- | -------- | -------------------- |
| 함수 선언문        | function A() {}               | O        | 블록 전체 호이스팅   |
| 익명 함수 표현식   | const B = function() {}       | X        | 변수 호이스팅만 발생 |
| 화살표 함수        | const C = () => {}            | X        | 변수 호이스팅만 발생 |
| 명명된 함수 표현식 | const D = function named() {} | X        | 변수 호이스팅만 발생 |

<h3 id="tdz">TDZ의 핵심 특징</h3>

> TDZ는 컴퓨터에서 변수가 특정 값으로 초기화되기 전까지 접근 불가능한 영역을 의미한다.

1. **시간적 사각지대**

   - 변수 선언 전에 접근을 차단하는 개념적 공간
   - 스코프 시작점 ~ 선언문 도달 전까지의 구간

2. **에러 발생 메커니즘**

   ```javascript
   // TDZ 시작 (스코프 진입 시점)
   console.log(myVar); // ReferenceError
   let myVar = 42; // TDZ 종료 (선언문 실행 시점)
   ```

3. **var vs let/const 비교**

   ```javascript
   console.log(a); // undefined (var 호이스팅)
   var a = 10;

   console.log(b); // ReferenceError (TDZ)
   let b = 20;
   ```

4. **함수 매개변수와 TDZ**

   ```javascript
   function checkTdz(param = typeof value) {
     let value = 10; // 매개변수에서 아직 선언되지 않은 변수 사용
   }
   checkTdz(); // ReferenceError: Cannot access 'value' before initialization
   ```

총정리

| 구분          | 장점               | 단점                | 사용 권장      |
| ------------- | ------------------ | ------------------- | -------------- |
| 변수 호이스팅 | 없음               | 예측 불가, TDZ 에러 | ❌ 절대 금지   |
| 함수 선언문   | 코드 구성 유연성   | 의존성 관리 어려움  | ⚠️ 제한적 사용 |
| 화살표 함수   | 호이스팅 영향 없음 | 선언 전 사용 불가   | ✅ 적극 권장   |
