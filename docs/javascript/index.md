---
layout: home-with-toc
title: "Javascript"
date: 2024-06-19 18:26:00 +0900
categories: Coding
has_children: true
nav_order: 3
---

# Javascript

> 일급함수를 지원하는 가벼운, 인터프리터 컴파일 프로그래밍 언어.

자바스크립트는 웹 브라우저에서 동작하는 언어이다. 따라서 웹 브라우저에서 동작하는 모든 기능을 사용할 수 있다.

자바스크립트는 DOM을 조작하는 기능을 제공한다.
DOM은 문서 객체 모델(Document Object Model)의 약자로, 웹 브라우저에서 표시되는 요소들을 객체로 표현한 것이다.

DOM은 웹 에디터에서 작성한 코드를 순서대로 웹 브라우저가 인식하고, 브라우저측에서는 전달받은 코드를 인식하기 위해 메모리 공간을 할당시켜 문서 체계화를 시킨다. DOM에 관련된건 [여기](/docs/javascript/dom.html)서 더 자세히 알아볼 수 있다.

## 변수

> 변수는 데이터를 저장하는 공간이다. 변수는 데이터를 저장하는 공간이므로, 변수의 이름은 데이터의 의미를 표현해야 한다.

```javascript
var name = "John";
const age = 20;
let isStudent = true;
```

javascript에서는 변수를 선언할 때 `var`, `const`, `let` 키워드를 사용한다.

각 키워드는 독자적인 특징을 지니고 있는데, 지금부터 알아보자.

`var` 키워드는 변수를 선언할 때 사용하는 키워드이다.

`const` 키워드는 상수를 선언할 때 사용하는 키워드이다.

`let` 키워드는 변수를 선언할 때 사용하는 키워드이다.

| 키워드 | 재할당 | 재선언 |
| ------ | ------ | ------ |
| var    | o      | o      |
| const  | x      | x      |
| let    | o      | x      |

### 호이스팅

> 호이스팅은 변수를 선언하기 전에 사용할 수 있게 만드는 것을 의미한다.

```javascript
console.log(name);
var name = "John";
```

위 코드는 호이스팅으로 인해 `undefined`가 출력된다. 이는 자바스크립트 엔진이 변수 선언을 코드의 최상단으로 끌어올리지만(호이스팅), **변수 초기화는 원래 위치에 그대로 남아있기** 때문이다. `var`로 선언된 변수는 선언과 동시에 `undefined`로 초기화되며, 실제 값 할당은 코드 작성 위치에서 발생한다.

`let`과 `const`도 호이스팅이 발생하지만, **Temporal Dead Zone(TDZ)** 으로 인해 선언 전에 접근하면 ReferenceError가 발생합니다:

```javascript
console.log(a); // ReferenceError
let a = 10;
```

| 키워드 | 호이스팅 | 초기값    | 재선언 |
| ------ | -------- | --------- | ------ |
| var    | O        | undefined | O      |
| let    | O (TDZ)  | 없음      | X      |
| const  | O (TDZ)  | 없음      | X      |

### 스코프

> 스코프는 변수가 유효한 범위를 의미한다.

```javascript
var x = 10;
```

- 전역 스코프 : 전체 코드에서 유효한 범위를 의미한다.

```javascript
function test() {
  var x = 20;
  console.log(x);
}
test(); // 20
console.log(x); // 10
```

- 지역 스코프 : 블럭이 끝나기 전까지 내부에서 유효한 범위를 의미한다.

### TDZ의 핵심 특징

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

---

## 기본 문법

### 연산자

- 산술 연산자 - `+ - * / %`
- 대입 연산자 - `= += -= *= /= %=`
- 비교 연산자 - `== === != !== > < >= <=`
- 논리 연산자 - `&& || !`
- 증감 연산자 - `++ --`
- 비트 연산자 - `& | ^ ~ << >> >>>`
- 대입 연산자 - `= += -= *= /= %=`
- 삼항 연산자 - `? :`
- 문자열 연산자 - `+`
- 대입 연산자 - `= += -= *= /= %=`

---

## 자바스크립트 내장 함수

- `alert()`: 경고창 출력
- `confirm()`: 확인/취소 버튼 출력
- `prompt()`: 입력창 출력
- `console.log()`: 콘솔 출력
