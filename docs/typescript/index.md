---
layout: home-with-toc
title: "Typescript"
date: 2025-02-09 21:10:00 +0900
categories: Coding
nav_order: 5
---

# TypeScript 📘

`npm i -g typescript`

## TypeScript가 등장하게 된 배경 🔎

JavaScript는 기본적으로 변수를 할당할때 메모리를 참조하는 특성을 띠며, 값의 형식이 명확하게 지정되어 있지 않습니다. 필요할 때 자동으로 <mark style="background: #D2B3FFA6;">Boxing</mark>이 이루어집니다.

> Boxing이란 원시형 데이터를 객체로 변환하는 과정입니다. JavaScript에서는 필요할 때 자동으로 이루어지며, 명시적인 `new Number()`와 같은 생성자 호출은 일반적으로 권장되지 않습니다.

일반적인 타입 기반 언어는 <mark style="background: #BBFABBA6;">컴파일러에 의한 오류확인이 가능</mark>하지만, JavaScript에서는 실행환경에 의한 오류 확인때문에 <mark style="background: #D2B3FFA6;">직접 코드를 실행해야 오류 여부</mark>를 알 수 있는 불편함이 존재합니다.

### JavaScript의 타입 시스템 구조 🏗️

| 분류          | 타입                                                                   | 메모리 저장 방식 | 확인 방법           | 예시                          |
| ------------- | ---------------------------------------------------------------------- | ---------------- | ------------------- | ----------------------------- |
| **원시 타입** | `Boolean`, `Null`, `Undefined`, `Number`, `BigInt`, `String`, `Symbol` | 직접 값 저장     | `typeof` 연산자     | `typeof 42 // "number"`       |
| **참조 타입** | `Array`, `Object`, `Date`, `Function`, `RegExp` 등                     | 참조 저장        | `instanceof` 연산자 | `[] instanceof Array // true` |

```js
const x = 3;
//사실은 이거랑 같은 것
const x = new Number(3);
```

### JavaScript의 타입 관련 문제점 ⚠️

```js
let x = 20;
x = x + "abc"; //x는 문자열이 된다. 20abc
```

타입 기반 언어에서는 위 코드가 에러를 발생시키지만, JavaScript에서는 에러가 발생하지 않고 연산까지 수행됩니다.

```js
const obj = { width: 10, height: 15 };
const area = obj.width * obj.heigth; //고의적으로 오타를 냄
console.log(area); // NaN, undefined와 함께 연산이 됨.

//JS에서는 지정한 파라미터 개수와 인자 개수가 달라도 오류가 발생하지 않는다.
function greet(person, date) {
  console.log(person, date);
}

greet("Brendan"); //Brendan, undefined
```

이러한 여러 문제점들 때문에 자바스크립트의 슈퍼셋 언어인 타입스크립트가 등장하게 되었습니다.

### JavaScript의 타입 확인 방법 🔍

자바스크립트의 `typeof` 연산자는 <mark style="background: #BBFABBA6;">원시형 타입의 데이터 타입을 조회</mark>하기 위해 생겼습니다. <span style="color:rgb(143, 143, 143)">(조회할 데이터의 형식이 원시타입이어야만 제대로 타입을 조회할 수 있음)</span>
참조형 타입을 typeof로 조회하면 대부분 'object'로 나오게 됩니다.

```js
var count = 10;
var array = [1, 2, 3];

console.log(typeof count); //number
console.log(typeof array); //object
```

<mark style="background: #D2B3FFA6;">참조형 타입을 확인</mark>하기 위해서는 `instanceof` 연산자를 사용할 수 있습니다.

```js
var name = "newlec";
var array = [1, 2, 3];

console.log(name instanceof String); // false (원시 문자열이므로)
console.log(array instanceof Array); // true
```

배열은 `Array.isArray()` 메서드로 확인할 수 있습니다.

```js
var nums = [];
console.log(Array.isArray(nums)); //true
```

JavaScript의 특이한 동작 예시:

```js
console.log(typeof null); //object (JavaScript의 유명한 버그)
console.log(null == undefined); //true (느슨한 비교에서는 같게 취급)
console.log(null === undefined); //false (엄격한 비교에서는 다른 타입)
```

<mark style="background: #FFB86CA6;">타입스크립트를 사용하면 이러한 불편한 타입 검사를 따로 할 필요가 없습니다</mark>.

---

## 타입스크립트 사용하기 🛠️

### 설치 및 기본 설정 ⚙️

```bash
npm i -g typescript
```

TypeScript 컴파일러(tsc)를 전역 설치합니다.

### tsconfig.json 설정 📝

컴파일된 JS 파일을 별도 폴더에서 관리하고 싶을 때:

![](../../assets/images/Pasted%20image%2020250328105724.png)

명령줄에서 플래그로 지정할 수 있지만, tsconfig.json을 사용하면 더 편리합니다:

```json
{
  "compilerOptions": {
    "outDir": "./dist"
  },
  "include": ["code.ts"]
}
```

`outDir`은 컴파일된 JS 파일들을 저장할 경로고, `include`는 컴파일할 파일들을 지정합니다.

![](../../assets/images/Pasted%20image%2020250328110441.png)

---

## 타입 지정법 🏷️

> 타입스크립트에서는 다른 타입 기반 언어들과 달리, 타입 지정을 변수 이름 뒤에 콜론(:)으로 합니다.

```c
// C 언어 예시
int number = 1;
```

```ts
// TypeScript
const number: number = 1;
```

### 기본 타입 📊

#### 원시 타입 지정 🔢

```ts
let msg: string = "hello world";
console.log(msg);
msg = 2; //typeError 발생
```

기본 원시 타입: `string`, `number`, `boolean`, `null`, `undefined`, `bigint`, `symbol`

#### 배열 타입 지정 📚

```ts
let array: number[] = [1, 2, 3, 4];
let array2: string[] = ["hi", "hello"];
```

배열 내 요소들의 타입이 섞여 있다면, 튜플 타입을 사용하거나 유니온 타입을 지정할 수 있습니다:

```ts
// 튜플 타입 (정확한 위치에 정확한 타입)
let array3: [number, string] = [1, "hello"];

// 유니온 타입 (여러 타입 중 하나)
let array4: (number | string)[] = [1, "hello"];

// 제네릭 사용
let array5: Array<number | string> = [1, "hello"];
```

#### 객체 타입 지정 🏢

```ts
const user: { name: string; age: number } = { name: "Alice", age: 22 };

// 함수의 매개변수를 객체로 받는 경우
function printUser(user: { name: string; age: number }) {
  console.log(user.name, user.age);
}

// 객체 구조 분해할당의 타입 지정
function printUser({ name, age }: { name: string; age: number }) {
  console.log(name, age);
}
```

일회성으로 타입을 사용한다면 위와 같이 직접 지정할 수 있습니다. 재사용이 필요하다면, `type`이나 `interface`를 사용합니다:

```ts
interface IExam {
  kor: number;
  eng: number;
}

type User = {
  name: string;
  age: number;
};

const exam1: IExam = { kor: 100, eng: 90 };
const exam2: IExam = { kor: 100, eng: 90 };

const total1 = exam1.kor + exam2.eng;
```

### Special 타입 🔮

#### any와 unknown 🤔

| 타입        | 설명           | 특징                                                                                           | 사용 시점                                   |
| ----------- | -------------- | ---------------------------------------------------------------------------------------------- | ------------------------------------------- |
| **any**     | 모든 타입 허용 | <mark style="background: #FF5582A6;">타입 안전성 포기</mark>, 어떤 연산이나 메서드도 사용 가능 | 타입을 알 수 없거나 중요하지 않을 때        |
| **unknown** | 모든 타입 허용 | <mark style="background: #BBFABBA6;">타입 가드</mark>나 단언 후에만 사용 가능                  | 타입은 알 수 없지만 안전하게 처리해야 할 때 |

##### any 예시

```ts
let msg: any = "hello world";
msg = 123;

let total = msg + 10; // 오류가 발생하지 않음, 133이 됨
```

##### unknown 예시

```ts
let msg: unknown = "hello world";
msg = 2;
let total = msg + 10; // 타입 에러: 'unknown' 타입에 '+' 연산 불가
msg.toUpperCase(); // 타입 에러: 'unknown' 타입에 'toUpperCase' 메서드 없음

// 타입 가드 사용
{
  let msg: unknown = "hello world";
  msg = 123;
  if (typeof msg === "number") {
    let total = msg + 10; // 가능
  }
}
```

TypeScript 프로젝트에서 `noImplicitAny` 컴파일러 옵션이 활성화된 경우, 타입이 명시되지 않아 암시적으로 any로 추론되는 상황에서 오류가 발생합니다.

### Type Assertions (타입 단언) 👉 {#type-assertions}

타입 단언은 개발자가 컴파일러보다 더 정확하게 타입을 알고 있을 때 사용합니다:

| 문법        | 예시                           | 비고                    |
| ----------- | ------------------------------ | ----------------------- |
| **as 문법** | `(someValue as string).length` | 권장 방식, JSX와 호환됨 |
| **<> 문법** | `(<string>someValue).length`   | JSX와 충돌 가능성 있음  |

```ts
let someValue: unknown = "this is a string";
let strLength: number = (someValue as string).length;
```

<mark style="background: #BBFABBA6;">타입 단언은 타입을 변환하는 것이 아니라, 컴파일러에게 "이 값은 이 타입이다"라고 알려주는 것입니다.</mark>

### Interface vs Type 📌 {#type-interface}

TypeScript에서 `interface`와 `type`은 모두 타입을 정의하는 방법이지만, 몇 가지 중요한 차이점이 있습니다:

| 특성          | interface                      | type                                 |
| ------------- | ------------------------------ | ------------------------------------ |
| **확장 방법** | `extends` 키워드 사용          | `&` 연산자(인터섹션) 사용            |
| **선언 병합** | 동일 이름으로 여러번 선언 가능 | 동일 이름으로 재선언 불가능          |
| **주요 용도** | 객체 구조 정의                 | 유니온, 인터섹션, 프리미티브 타입 등 |

예시:

```ts
// Interface
interface Animal {
  name: string;
}

interface Bear extends Animal {
  honey: boolean;
}

// Type
type Animal = {
  name: string;
};

type Bear = Animal & {
  honey: boolean;
};
```

### 유니온과 인터섹션 타입 🔀

#### 유니온 타입 (Union Type) ∪

여러 타입 중 하나를 가질 수 있는 타입입니다:

```ts
type ID = string | number;

{
  let kor: ID = 33; // 가능
  kor = "33"; // 가능
  let eng: number;
}
```

#### 인터섹션 타입 (Intersection Type) ∩

여러 타입을 모두 만족하는 타입입니다:

```ts
type ID = string | number;
type Name = string | null;

type User = ID & Name; // string만 남음
let user: User = "hello"; // 가능
user = 1; // 오류: number 타입은 불가능
user = null; // 오류: null 타입은 불가능
```

<mark style="background: #D2B3FFA6;">인터섹션 타입에서는 모든 타입이 공통으로 가지는 속성만 사용할 수 있습니다.</mark>

### 리터럴 타입 📌

리터럴 타입은 값 자체가 타입이 되는 타입입니다:

```ts
let level: 1;
level = 1; // 가능
console.log(level);
level = 6; // 오류: 1만 할당 가능
```

### 함수의 타입 🧮

```ts
function greet(name: string): void {
  console.log("Hello, " + name.toUpperCase() + "!!");
}

greet("TypeScript"); // Hello, TYPESCRIPT!!
greet(42); // 타입 오류: 숫자를 전달할 수 없음
```

함수의 매개변수와 반환값에 타입을 지정할 수 있습니다. 반환값은 생략하면 타입 추론이 됩니다.

```ts
// Promise를 반환하는 함수
async function getFavoriteNumber(): Promise<number> {
  return 26;
}
```

### Enum 🔢

열거형 타입(Enum)은 상수 값의 집합을 정의합니다:

```ts
enum Direction {
  Up = 1,
  Down, // 2
  Left, // 3
  Right, // 4
}

let dir: Direction = Direction.Down;
console.log(dir); // 2
```

첫 번째 값을 초기화하면, 이후 값들은 자동으로 1씩 증가합니다.

---

## Interface와 Class 🏛️

인터페이스는 객체의 구조를 정의하는 계약(contract)입니다:

```ts
interface IPoint {
  x: number;
  y: number;
}
```

### 클래스와 인터페이스 활용 📚

```ts
function printCoord(pt: Point) {
  console.log(pt.x);
  console.log(pt.y);
}

printCoord({ x: 100, y: 100 });

// 클래스로 객체 생성
{
  class Exam {
    constructor(public kor: number, public eng: number) {}
    total() {
      return this.kor + this.eng;
    }
  }

  const exam: Exam = new Exam(100, 90);
}

// 인터페이스와 클래스 구현
{
  interface Exam {
    kor: number;
    eng: number;
    total(): number;
  }

  class ExamImpl implements Exam {
    constructor(public kor: number, public eng: number) {}
    total() {
      return this.kor + this.eng;
    }
  }

  const exam: Exam = new ExamImpl(100, 70);
}
```

### 특수 연산자 ⚡

#### 확정 할당 단언 (!)

변수나 속성이 선언 시점에 초기화되지 않아도 나중에 반드시 값이 할당될 것임을 컴파일러에 알립니다:

```ts
class User {
  id!: number; // 생성자에서 초기화하지 않아도 오류 발생하지 않음
}
```

#### Not-null 단언 연산자 (!)

값이 null 또는 undefined가 아님을 컴파일러에 알립니다:

```ts
function getLength(str: string | null) {
  return str!.length; // str이 null이 아님을 단언
}
```
