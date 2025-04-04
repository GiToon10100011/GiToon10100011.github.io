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
