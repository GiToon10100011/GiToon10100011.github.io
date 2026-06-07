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

JavaScript는 기본적으로 변수를 할당할때 메모리를 참조하는 특성을 띠며, 값의 형식이 명확하게 지정되어 있지 않다. 필요할 때 자동으로 <mark style="background: #D2B3FFA6;">Boxing</mark>이 이루어진다.

> Boxing이란 원시형 데이터를 객체로 변환하는 과정이다. JavaScript에서는 필요할 때 자동으로 이루어지며, 명시적인 `new Number()`와 같은 생성자 호출은 일반적으로 권장되지 않는다.

일반적인 타입 기반 언어는 <mark style="background: #BBFABBA6;">컴파일러에 의한 오류확인이 가능</mark>하지만, JavaScript에서는 실행환경에 의한 오류 확인때문에 <mark style="background: #D2B3FFA6;">직접 코드를 실행해야 오류 여부</mark>를 알 수 있는 불편함이 존재한다.

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

타입 기반 언어에서는 위 코드가 에러를 발생시키지만, JavaScript에서는 에러가 발생하지 않고 연산까지 수행한다.

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

이러한 여러 문제점들 때문에 자바스크립트의 슈퍼셋 언어인 타입스크립트가 등장하게 됐다.

### JavaScript의 타입 확인 방법 🔍

자바스크립트의 `typeof` 연산자는 <mark style="background: #BBFABBA6;">원시형 타입의 데이터 타입을 조회</mark>하기 위해 생겼다. <span style="color:rgb(143, 143, 143)">(조회할 데이터의 형식이 원시타입이어야만 제대로 타입을 조회할 수 있음)</span>
참조형 타입을 typeof로 조회하면 대부분 'object'로 나오게 된다.

```js
var count = 10;
var array = [1, 2, 3];

console.log(typeof count); //number
console.log(typeof array); //object
```

<mark style="background: #D2B3FFA6;">참조형 타입을 확인</mark>하기 위해서는 `instanceof` 연산자를 사용할 수 있다.

```js
var name = "newlec";
var array = [1, 2, 3];

console.log(name instanceof String); // false (원시 문자열이므로)
console.log(array instanceof Array); // true
```

배열은 `Array.isArray()` 메서드로 확인할 수 있다.

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

<mark style="background: #FFB86CA6;">타입스크립트를 사용하면 이러한 불편한 타입 검사를 따로 할 필요가 없다</mark>.

---

## 타입스크립트 사용하기 🛠️

### 설치 및 기본 설정 ⚙️

```bash
npm i -g typescript
```

TypeScript 컴파일러(tsc)를 전역 설치한다.

### tsconfig.json 설정 📝

컴파일된 JS 파일을 별도 폴더에서 관리하고 싶을 때:

![](../../assets/images/Pasted%20image%2020250328105724.png)

명령줄에서 플래그로 지정할 수 있지만, tsconfig.json을 사용하면 더 편리하다:

```json
{
  "compilerOptions": {
    "outDir": "./dist"
  },
  "include": ["code.ts"]
}
```

`outDir`은 컴파일된 JS 파일들을 저장할 경로고, `include`는 컴파일할 파일들을 지정한다.

![](../../assets/images/Pasted%20image%2020250328110441.png)

---

## 타입 지정법 🏷️

> 타입스크립트에서는 다른 타입 기반 언어들과 달리, 타입 지정을 변수 이름 뒤에 콜론(:)으로 한다.

```c
// C 언어 예시
int number = 1;
```

```ts
// TypeScript
const number: number = 1;
```

### 기본 타입 📊

**원시 타입 지정** 🔢

```ts
let msg: string = "hello world";
console.log(msg);
msg = 2; //typeError 발생
```

기본 원시 타입: `string`, `number`, `boolean`, `null`, `undefined`, `bigint`, `symbol`

**배열 타입 지정** 📚

```ts
let array: number[] = [1, 2, 3, 4];
let array2: string[] = ["hi", "hello"];
```

배열 내 요소들의 타입이 섞여 있다면, 튜플 타입을 사용하거나 유니온 타입을 지정할 수 있다:

```ts
// 튜플 타입 (정확한 위치에 정확한 타입)
let array3: [number, string] = [1, "hello"];

// 유니온 타입 (여러 타입 중 하나)
let array4: (number | string)[] = [1, "hello"];

// 제네릭 사용
let array5: Array<number | string> = [1, "hello"];
```

**객체 타입 지정** 🏢

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

일회성으로 타입을 사용한다면 위와 같이 직접 지정할 수 있다. 재사용이 필요하다면, `type`이나 `interface`를 사용한다:

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

**any와 unknown** 🤔

| 타입        | 설명           | 특징                                                                                           | 사용 시점                                   |
| ----------- | -------------- | ---------------------------------------------------------------------------------------------- | ------------------------------------------- |
| **any**     | 모든 타입 허용 | <mark style="background: #FF5582A6;">타입 안전성 포기</mark>, 어떤 연산이나 메서드도 사용 가능 | 타입을 알 수 없거나 중요하지 않을 때        |
| **unknown** | 모든 타입 허용 | <mark style="background: #BBFABBA6;">타입 가드</mark>나 단언 후에만 사용 가능                  | 타입은 알 수 없지만 안전하게 처리해야 할 때 |

**any 예시**

```ts
let msg: any = "hello world";
msg = 123;

let total = msg + 10; // 오류가 발생하지 않음, 133이 됨
```

**unknown 예시**

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

TypeScript 프로젝트에서 `noImplicitAny` 컴파일러 옵션이 활성화된 경우, 타입이 명시되지 않아 암시적으로 any로 추론되는 상황에서 오류가 발생한다.

<h3 id="type-assertion">Type Assertions (타입 단언) 👉</h3>
타입 단언은 개발자가 컴파일러보다 더 정확하게 타입을 알고 있을 때 사용한다:

| 문법        | 예시                           | 비고                    |
| ----------- | ------------------------------ | ----------------------- |
| **as 문법** | `(someValue as string).length` | 권장 방식, JSX와 호환됨 |
| **<> 문법** | `(<string>someValue).length`   | JSX와 충돌 가능성 있음  |

```ts
let someValue: unknown = "this is a string";
let strLength: number = (someValue as string).length;
```

<mark style="background: #BBFABBA6;">타입 단언은 타입을 변환하는 것이 아니라, 컴파일러에게 "이 값은 이 타입이다"라고 알려주는 것이다.</mark>

<h3 id="type-interface">Interface vs Type 📌</h3>
TypeScript에서 `interface`와 `type`은 모두 타입을 정의하는 방법이지만, 몇 가지 중요한 차이점이 있다:

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

**유니온 타입 (Union Type)**

여러 타입 중 하나를 가질 수 있는 타입이다:

```ts
type ID = string | number;

{
  let kor: ID = 33; // 가능
  kor = "33"; // 가능
  let eng: number;
}
```

**인터섹션 타입 (Intersection Type)**

여러 타입을 모두 만족하는 타입이다:

```ts
type ID = string | number;
type Name = string | null;

type User = ID & Name; // string만 남음
let user: User = "hello"; // 가능
user = 1; // 오류: number 타입은 불가능
user = null; // 오류: null 타입은 불가능
```

<mark style="background: #D2B3FFA6;">인터섹션 타입에서는 모든 타입이 공통으로 가지는 속성만 사용할 수 있다.</mark>

### 리터럴 타입 📌

리터럴 타입은 값 자체가 타입이 되는 타입이다:

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

함수의 매개변수와 반환값에 타입을 지정할 수 있다. 반환값은 생략하면 타입 추론이 된다.

```ts
// Promise를 반환하는 함수
async function getFavoriteNumber(): Promise<number> {
  return 26;
}
```

### Enum 🔢

열거형 타입(Enum)은 관련된 상수 값들의 집합을 정의한다. Enum은 코드의 가독성과 유지보수성을 높여주며, 특히 제한된 선택지가 있는 상황에서 유용하다.

- Enum 사용 이유와 장점

  1. **가독성 향상**: 숫자 상수 대신 의미 있는 이름을 사용할 수 있다
  2. **타입 안전성**: 해당 Enum 타입에 정의된 값만 사용할 수 있도록 제한한다
  3. **자동 완성**: IDE에서 Enum 멤버들을 자동 완성으로 보여준다
  4. **리팩토링 용이성**: 상수 값이 변경되어도 사용처에서 수정할 필요가 없다

- Enum 종류

  **1. 숫자 Enum (Numeric Enum)**

  ```ts
  enum Direction {
    Up = 1,
    Down, // 자동으로 2가 됨
    Left, // 자동으로 3이 됨
    Right, // 자동으로 4가 됨
  }

  let dir: Direction = Direction.Down;
  console.log(dir); // 2
  console.log(Direction[2]); // "Down" (역방향 매핑)
  ```

  초기값을 지정하지 않으면 0부터 시작한다:

  ```ts
  enum Color {
    Red, // 0
    Green, // 1
    Blue, // 2
  }
  ```

  **2. 문자열 Enum (String Enum)**

  ```ts
  enum MediaTypes {
    JSON = "application/json",
    XML = "application/xml",
    TEXT = "text/plain",
  }

  fetch("api/data", {
    headers: {
      "Content-Type": MediaTypes.JSON,
    },
  });
  ```

  **3. 이종 Enum (Heterogeneous Enum)**

  문자열과 숫자를 혼합해서 사용할 수 있지만, 일반적으로 권장되지 않는다:

  ```ts
  enum BooleanLikeEnum {
    No = 0,
    Yes = "YES",
  }
  ```

  **4. 상수 Enum (const enum)**

  성능 최적화를 위해 사용한다. 컴파일 시 Enum 객체 자체가 생성되지 않고, 사용처에 직접 값이 인라인된다:

  ```ts
  const enum Directions {
    Up,
    Down,
    Left,
    Right,
  }

  let directions = [
    Directions.Up,
    Directions.Down,
    Directions.Left,
    Directions.Right,
  ];
  // 컴파일 결과: let directions = [0, 1, 2, 3];
  ```

#### Enum 실사용 예시

**HTTP 상태 코드 관리**

```ts
enum HttpStatus {
  OK = 200,
  Created = 201,
  BadRequest = 400,
  Unauthorized = 401,
  Forbidden = 403,
  NotFound = 404,
  InternalServerError = 500,
}

function handleResponse(status: HttpStatus) {
  if (status === HttpStatus.OK) {
    console.log("요청 성공");
  } else if (status === HttpStatus.NotFound) {
    console.log("리소스를 찾을 수 없음");
  }
}
```

**권한 관리**

```ts
enum UserRole {
  Admin = "ADMIN",
  Editor = "EDITOR",
  Viewer = "VIEWER",
}

function checkAccess(user: { role: UserRole }) {
  switch (user.role) {
    case UserRole.Admin:
      return true;
    case UserRole.Editor:
      return true;
    default:
      return false;
  }
}
```

**설정 옵션**

```ts
enum ThemeMode {
  Light = "light",
  Dark = "dark",
  System = "system",
}

function setTheme(mode: ThemeMode) {
  localStorage.setItem("theme", mode);
  applyTheme(mode);
}

// 사용 예
setTheme(ThemeMode.Dark);
```

- Enum의 주의사항과 대안

  1. **트리 쉐이킹 문제**: 숫자 Enum은 역방향 매핑을 위한 객체가 생성되어 번들 크기가 커질 수 있다
  2. **타입스크립트만의 문법**: Enum은 자바스크립트에 없는 기능이라 트랜스파일 시 추가 코드가 생성된다

  이런 문제를 피하고 싶다면 다음과 같은 대안을 고려할 수 있다:

  **유니온 타입과 const 객체 사용**

  ```ts
  // 대신 이렇게 사용할 수 있다
  const Directions = {
    Up: "UP",
    Down: "DOWN",
    Left: "LEFT",
    Right: "RIGHT",
  } as const;

  type Direction = (typeof Directions)[keyof typeof Directions];

  function move(direction: Direction) {
    console.log(`Moving ${direction}`);
  }

  move(Directions.Up); // OK
  move("SIDEWAYS"); // 오류: "SIDEWAYS"는 Direction 타입이 아님
  ```

---

## Interface와 Class 🏛️

인터페이스는 객체의 구조를 정의하는 계약(contract)이다:

```ts
interface IPoint {
  x: number;
  y: number;
}
```

### 상속과 확장 (Inheritance & Extension) 🔄

타입스크립트에서는 `extends` 키워드를 사용하여 인터페이스와 클래스의 상속을 구현할 수 있다.

**인터페이스 확장 (Interface Extension)**

인터페이스는 다른 인터페이스를 확장하여 새로운 속성을 추가할 수 있다:

```ts
interface BaseEntity {
  id: number;
  createdAt: Date;
}

interface User extends BaseEntity {
  name: string;
  email: string;
}

// User 타입은 id, createdAt, name, email 속성을 모두 가짐
const user: User = {
  id: 1,
  createdAt: new Date(),
  name: "홍길동",
  email: "hong@example.com",
};
```

하나의 인터페이스가 여러 인터페이스를 확장할 수도 있다:

```ts
interface Named {
  name: string;
}

interface Aged {
  age: number;
}

interface Person extends Named, Aged {
  gender: string;
}

// Person은 name, age, gender 속성을 모두 가짐
const person: Person = { name: "김철수", age: 30, gender: "남성" };
```

**클래스 상속 (Class Inheritance)**

클래스는 다른 클래스를 상속받아 기능을 확장할 수 있다:

```ts
class Animal {
  constructor(public name: string) {}

  move(distance: number = 0) {
    console.log(`${this.name}이(가) ${distance}m 이동했습니다.`);
  }
}

class Dog extends Animal {
  constructor(name: string) {
    super(name); // 부모 클래스의 생성자 호출 필수
  }

  bark() {
    console.log("멍멍!");
  }

  // 메서드 오버라이딩
  move(distance: number = 5) {
    console.log("달리는 중...");
    super.move(distance); // 부모 클래스의 메서드 호출
  }
}

const dog = new Dog("뽀삐");
dog.bark(); // 멍멍!
dog.move(); // 달리는 중... 뽀삐이(가) 5m 이동했습니다.
```

**상속 시 주의사항**:

1. 클래스 상속 시 `super()` 호출은 생성자에서 필수이다.
2. 자식 클래스에서 부모 메서드를 오버라이딩할 때, `super.메서드명()`으로 부모 메서드를 호출할 수 있다.
3. 타입스크립트는 **단일 상속**만 지원한다 (다중 상속 불가).

**추상 클래스 vs 인터페이스**

추상 클래스와 인터페이스는 모두 추상화를 제공하지만 중요한 차이점이 있다:

| 특성            | 추상 클래스                             | 인터페이스                         |
| --------------- | --------------------------------------- | ---------------------------------- |
| **구현 코드**   | 일반 메서드와 추상 메서드 모두 가능     | 메서드 시그니처만 정의 가능        |
| **생성자**      | 생성자를 가질 수 있음                   | 생성자를 가질 수 없음              |
| **접근 제한자** | private, protected, public 사용 가능    | 모든 멤버는 기본적으로 public      |
| **상속 방식**   | 클래스는 하나의 추상 클래스만 상속 가능 | 클래스는 여러 인터페이스 구현 가능 |
| **속성**        | 상태(필드)를 가질 수 있음               | 상태 없이 순수 계약만 정의         |
| **용도**        | 관련 클래스 간 공통 기능 공유           | 서로 다른 객체 간 계약 정의        |

```ts
// 추상 클래스 예시
abstract class Database {
  // 상태를 포함할 수 있음
  protected connection: string;

  // 구현된 메서드
  constructor(connectionString: string) {
    this.connection = connectionString;
  }

  // 공통 기능 구현
  disconnect(): void {
    console.log("연결 종료");
  }

  // 추상 메서드
  abstract connect(): void;
}

// 인터페이스 예시
interface Repository {
  // 구현 없는 메서드 시그니처만 정의
  findAll(): unknown[];
  findById(id: number): unknown;
  save(entity: unknown): void;
}

// 클래스는 하나의 추상 클래스만 상속 가능하지만, 여러 인터페이스 구현 가능
class PostgresDatabase extends Database implements Repository {
  connect(): void {
    console.log(`${this.connection}에 연결 중...`);
  }

  findAll(): unknown[] {
    return [];
  }

  findById(id: number): unknown {
    return {};
  }

  save(entity: unknown): void {
    console.log("엔티티 저장");
  }
}
```

추상 클래스는 "is-a" 관계를 나타내고, 인터페이스는 "can-do" 관계를 나타낸다. 공통 기능과 상태를 공유하는 관련 클래스들이 있다면 추상 클래스를, 서로 다른 클래스들이 특정 기능을 구현해야 한다면 인터페이스를 사용하는 것이 적합하다.

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

**확정 할당 단언 (!)**

변수나 속성이 선언 시점에 초기화되지 않아도 나중에 반드시 값이 할당될 것임을 컴파일러에 알린다:

```ts
class User {
  id!: number; // 생성자에서 초기화하지 않아도 오류 발생하지 않음
}
```

**Not-null 단언 연산자 (!)**

값이 null 또는 undefined가 아님을 컴파일러에 알린다:

```ts
function getLength(str: string | null) {
  return str!.length; // str이 null이 아님을 단언
}
```

---

## 제네릭 (Generics) 🧬

> 제네릭은 타입을 "매개변수처럼" 받는 기능이다. 함수가 값을 매개변수로 받는 것처럼, 제네릭은 **타입 자체를 매개변수로 받아** 재사용성을 높인다.

<mark style="background: #BBFABBA6;">특정 타입을 재사용하고 싶거나, 어떤 자료형의 데이터가 올지 모를 때 사용한다.</mark>

### 기본 사용법 📌

```ts
function identity<T>(arg: T): T {
  return arg;
}

const a = identity<string>("hello"); // T = string
const b = identity<number>(42); // T = number
const c = identity(true); // T = boolean (타입 추론)
```

`<T>`는 **타입 매개변수(Type Parameter)**다. 호출 시점에 실제 타입이 결정되며, 보통 컴파일러가 추론하므로 명시적으로 적지 않아도 된다.

### 제네릭 인터페이스 / 타입 별칭 📦

API 응답처럼 **구조는 같고 내부 데이터만 다른 패턴**에 자주 쓰인다.

```ts
// 공통 응답 형태 — data만 타입이 달라진다
interface IUserResponse<T = undefined> {
  result: "success" | "fail";
  message?: string;
  data?: T; // 성공 시에만 존재
}

// 회원가입 성공 시 payload
interface CreateUserData {
  insertId: number;
}

type CreateUserResponse = IUserResponse<CreateUserData>;
// → { result, message?, data?: { insertId: number } }
```

<mark style="background: #D2B3FFA6;">`T = undefined`처럼 제네릭에 기본값</mark>을 줄 수도 있다. 응답 본문이 없는 경우(예: 로그아웃) 별도 타입 지정 없이 그대로 사용 가능.

### 함수 호출 유틸리티 ⚙️

API 호출을 감싸는 유틸 함수에 제네릭을 쓰면 **반환 타입이 그대로 보존**된다.

```ts
// fn이 무엇을 반환하든 그 타입이 그대로 흘러간다
export const apiWrapper = async <T>(
  fn: () => Promise<T>,
  context: string
): Promise<T | null> => {
  try {
    return await fn();
  } catch (err) {
    handleError(err, context);
    return null;
  }
};
```

### 제약 조건 (extends) 🔒

제네릭이 너무 자유로우면 위험하므로, `extends`로 **타입의 모양을 강제**할 수 있다.

```ts
// length 속성을 가진 것만 허용
function logLength<T extends { length: number }>(arg: T): T {
  console.log(arg.length);
  return arg;
}

logLength("hello"); // OK (string은 length 있음)
logLength([1, 2, 3]); // OK (array도 length 있음)
logLength(42); // ❌ number에는 length가 없음
```

> 💡 제네릭은 "함수형 프로그래밍의 고차 함수"와 비슷한 직관으로 보면 된다. 값 대신 **타입을 다루는 추상화 도구**다.

---

## 유틸리티 타입 (Utility Types) 🧰

> TypeScript가 기본 제공하는 **타입 변환 도우미**. 기존 타입을 재가공해 새 타입을 만든다.

기본 인터페이스를 가지고 변형해 보자:

```ts
interface User {
  name: string;
  age: number;
  email: string;
  address: string;
}
```

### 주요 유틸리티 타입 한눈에 보기 📊

| **유틸리티**       | **하는 일**                          | **사용 예시**                  |
| ---------------- | ---------------------------------- | -------------------------- |
| **Partial\<T\>**     | 모든 프로퍼티를 `optional`로 변환      | 일부 필드만 업데이트할 때            |
| **Required\<T\>**    | 모든 프로퍼티를 `required`로 변환      | optional 필드를 강제 채워야 할 때    |
| **Pick\<T, K\>**     | 특정 키만 선택해서 새 타입 생성           | 응답에서 일부 필드만 노출            |
| **Omit\<T, K\>**     | 특정 키를 제외하고 새 타입 생성            | 기본 속성에서 충돌나는 키만 빼고 확장     |
| **Readonly\<T\>**    | 모든 프로퍼티를 `readonly`로 변환       | 외부에 넘기는 불변 객체              |
| **Record\<K, V\>**   | 키-값 형태의 매핑 타입 생성                | enum/리터럴 키 기반 룩업 테이블       |

### Partial — 부분 업데이트 🩹

```ts
type PartialUser = Partial<User>;
// {
//   name?: string;
//   age?: number;
//   email?: string;
//   address?: string;
// }

// 사용자 정보 업데이트 시 (일부 필드만 필요)
function updateUserInfo(userInfo: PartialUser) {
  // name, age, email, address 중 일부만 전달 가능
}
```

<mark style="background: #BBFABBA6;">`Partial`은 PATCH 요청, 폼 초안 저장처럼 "일부만 채워서 보내는" 상황에서 진짜 유용하다.</mark>

### Pick / Omit — 잘라내기와 빼내기 ✂️

```ts
// Pick: 원하는 키만 선택
type UserBasicInfo = Pick<User, "name" | "email">;
// { name: string; email: string; }

function sendWelcomeEmail(user: UserBasicInfo) {
  // name과 email만 사용 가능
}

// Omit: 특정 키만 제외
type UserWithoutAddress = Omit<User, "address">;
// { name, age, email }

function processUserData(user: UserWithoutAddress) {
  // address를 제외한 모든 필드 사용 가능
}
```

### Required / Readonly 🔐

```ts
type RequiredUser = Required<PartialUser>;
// 모든 ? 가 강제로 required로 바뀜

type ReadonlyUser = Readonly<User>;
// {
//   readonly name: string;
//   readonly age: number;
//   ...
// }

function displayUserInfo(user: ReadonlyUser) {
  // 모든 필드를 수정할 수 없음
  user.name = "..."; // ❌ Error
}
```

### Record — 키-값 매핑 🗂️

```ts
type UserRole = "ADMIN" | "EDITOR" | "VIEWER";

const rolePermissions: Record<UserRole, string[]> = {
  ADMIN: ["read", "write", "delete"],
  EDITOR: ["read", "write"],
  VIEWER: ["read"],
};
// ✅ UserRole의 모든 키가 반드시 존재해야 한다 (누락 시 컴파일 에러)
```

### interface로도 유틸리티 활용 가능 ⭐️

`type`만 유틸리티를 쓸 수 있다고 오해하기 쉬운데, **interface에서도 `extends`로 동일하게 활용** 가능하다.

```ts
interface PartialUser extends Partial<User> {}
interface UserBasicInfo extends Pick<User, "name" | "email"> {}
interface UserWithoutAddress extends Omit<User, "address"> {}
interface ReadonlyUser extends Readonly<User> {}
```

### 실전 활용 — React Props에서 Omit 패턴 💡

기본 HTML 속성을 확장하되, 충돌하는 속성은 `Omit`으로 제거하고 다시 정의하는 패턴이 자주 쓰인다.

```ts
export interface IInputProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    "value" | "onChange" | "className"
  > {
  value: string; // optional → required로 재정의
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string; // 내부 스타일 시스템과 결합
}
```

| **Omit 쓰는 이유**            | **설명**                                            |
| -------------------------- | ------------------------------------------------- |
| **1. 충돌 명시적 제거**         | 기본 optional이던 속성을 required로 바꿀 때 의도가 명확해짐 |
| **2. 에디터 자동완성 혼란 방지**  | `value?: string`과 `value: string`이 둘 다 노출되는 것 방지 |
| **3. 협업 시 의도 표현**         | "이 속성들은 우리가 새로 정의했다"는 신호                  |
| **4. strict 모드 타입 충돌 방지** | 다른 제네릭 조합에서 발생할 수 있는 충돌 사전 차단         |

> ⚠️ 사실 간단한 경우엔 그냥 `extends`만으로도 충분히 작동한다. 복잡해질 때 `Omit`이 명확성·안전성·협업 면에서 더 유리하다.

---

## as const와 타입 추론 ⚡

> `as const`는 값들을 **리터럴로 고정**해서 정확한 유니온 타입 추론을 가능하게 하는 키워드다.

### 왜 필요한가? 🤔

TypeScript는 기본적으로 값을 **최대한 일반적으로 추론**한다.

```ts
const a = "hello"; // 타입: string (❌ "hello"가 아님)
const b = "hello" as const; // 타입: "hello" (리터럴 ✅)
```

이 차이가 배열·객체에서 큰 문제를 만든다:

```ts
const theme = ["light", "dark"];
// 타입: string[] 😬 (각 요소가 그냥 string)

type Theme = (typeof theme)[number];
// Theme = string 😬 (원한 건 "light" | "dark"였는데...)
```

### as const 적용 시 🎯

```ts
const countries = {
  Korea: "Seoul",
  Japan: "Tokyo",
} as const;

// 내부적으로는?
// const countries: {
//   readonly Korea: "Seoul";
//   readonly Japan: "Tokyo";
// }
```

- 각 속성값이 그냥 `string`이 아니라 **리터럴 타입**
- 각 키도 `"Korea" | "Japan"`처럼 **정확한 유니온 타입으로 추론**
- 객체 전체가 `readonly`가 됨

### 활용 패턴 1 — 키에서 유니온 자동 추출 🔑

```ts
const countries = {
  Korea: "Seoul",
  Japan: "Tokyo",
  USA: "Washington",
} as const;

type Country = keyof typeof countries;
// "Korea" | "Japan" | "USA" ✅
```

> 👉 `keyof typeof`는 `as const`와 함께 자주 쓰이는 공식 조합이다.

### 활용 패턴 2 — 배열에서 값 유니온 추출 📌

select box, 사이즈 옵션, 라우팅 경로처럼 **목록과 타입을 한 곳에서 관리**할 때 강력하다.

```ts
const sizes = ["small", "medium", "large"] as const;

type Size = (typeof sizes)[number];
// "small" | "medium" | "large" ✅
// → sizes[number]는 "배열 요소를 인덱스 접근으로 유니온 추출"하는 공식 문법
```

```ts
// as const를 안 쓴다면?
const sizes = ["small", "medium", "large"];
// 타입: string[]

type Size = (typeof sizes)[number];
// string ❌ (정확한 값 유니온 아님)
```

### 비교표 📊

| **구분**            | **as const 없이** | **as const 사용 시**            |
| ----------------- | --------------- | --------------------------- |
| 문자열 리터럴            | `string`        | `"hello"`                   |
| 배열 타입              | `string[]`      | `readonly ["a", "b", "c"]`  |
| 객체 값               | `string`        | 리터럴 `"Seoul"`               |
| 키 추출 (keyof)       | 일반 객체 키         | 유니온 타입 생성 가능                |
| 값 수정 가능성           | 변경 가능           | `readonly` (수정 불가)         |

> ⭐️ **중복 선언 없이 한 곳에서 정의 → 타입 자동 추출**이 핵심 가치다. UI 옵션 목록, 버튼 variants, 라우팅 path 같은 곳에 적극 활용하자.

---

## 타입 가드 (Type Guards) 🛡️

> 런타임에 값의 타입을 좁혀(narrowing) 컴파일러가 더 정확하게 추론하도록 돕는 기법.

### 기본 타입 가드 🔍

| **연산자**         | **확인 대상**          | **예시**                            |
| --------------- | ------------------ | --------------------------------- |
| `typeof`        | 원시 타입              | `typeof x === "string"`           |
| `instanceof`    | 클래스 인스턴스           | `err instanceof Error`            |
| `in`            | 객체에 특정 속성 존재 여부    | `"name" in obj`                   |
| `Array.isArray` | 배열 여부              | `Array.isArray(x)`                |

```ts
function handleError(error: unknown) {
  // instanceof는 특정 클래스/생성자 함수로 생긴 인스턴스인지 검사
  // Error는 JS 내장 클래스
  if (error instanceof Error) {
    console.error(error.message); // ✅ Error로 좁혀짐
  } else {
    console.error(String(error));
  }
}
```

### unknown은 반드시 타입 가드 필요 ⚠️

```ts
function log(error: unknown) {
  console.log(error.toUpperCase()); // ❌ 에러! unknown은 바로 못 씀
}
```

<mark style="background: #FF5582A6;">`catch (err: Error)`로 타입을 박아두는 건 위험하다.</mark>

```ts
try {
  throw "string error";
} catch (err: Error) {
  // ❌ 위험: 실제로는 string이 들어왔는데 Error라고 거짓말한 셈
}
```

> 👉 try/catch의 err는 **항상 `unknown`으로 받고, `instanceof Error`로 좁히는 게 안전 패턴**이다.

### 사용자 정의 타입 가드 (is) ✨

> `매개변수 is 타입` 형태로 함수의 반환 시그니처를 작성하면, TS는 그 함수가 `true`를 반환할 때 인자를 해당 타입으로 좁혀준다.

배열 `filter`는 기본적으로 결과 배열 타입을 좁혀주지 못한다. 이때 **사용자 정의 타입 가드**가 빛난다.

```ts
type IconName = "home" | "search" | "settings";
const categoryIcons: IconName[] = ["home", "search"];

const tags = ["home", "unknown-tag", "search"];

const tagIcons = tags.filter((tag): tag is IconName =>
  categoryIcons.includes(tag as IconName)
);
// tagIcons의 타입: IconName[] ✅
// (이게 없으면 string[]로 추론됨)
```

`(tag): tag is IconName => ...` 부분이 핵심으로, **"이 함수가 true를 반환하면 tag는 IconName 타입이다"** 라고 TS에 알려주는 것이다.

### any vs unknown 정리 📋

| **종류**    | **의미**                                              |
| --------- | --------------------------------------------------- |
| `any`     | 타입 체크 안 함. 그냥 JS처럼 아무거나 다 허용 (안전성 ❌) |
| `unknown` | 타입 체크 안 함 + **사용 전에 안전성 검사 필요** (안전성 ✅) |

> ⭐️ 외부에서 들어오는 데이터(API 응답, JSON.parse, catch error)는 거의 무조건 `unknown`으로 받고 타입 가드로 좁히자. `any`는 정말 마지막 수단이다.
