---
layout: home-with-toc
title: "Typescript"
date: 2025-02-09 21:10:00 +0900
categories: Coding
nav_order: 5
---

# Typescript

`npm i -g typescript`

## Typescript가 등장하게 된 배경

JS는 기본적으로 변수를 할당할때 메모리를 참조하는 특성을 띤다. 값의 형식이 따로 명확하게 지정되어 있지 않고, Wrapper클래스를 통해 <mark style="background: #D2B3FFA6;">Boxing</mark>이 이루어진다.

> Boxing이란 원시형 데이터를 객체로 변환하는 과정이다.

일반적인 타입 기반 언어는, <mark style="background: #BBFABBA6;">컴파일러에 의한 오류확인이 가능</mark>하지만, JS에서는 실행환경에 의한 오류 확인때문에 <mark style="background: #D2B3FFA6;">직접 코드를 실행을 해야 오류 여부</mark>를 알 수 있는 불편함이 존재한다.

`Number(정수, 실수), Boolean, String(문자, 문자열)`이 Wrapper 클래스에 해당된다.

```js
const x = 3;
//사실은 이거랑 같은 것
const x = new Number(3);
```

Type 기반이 아닌 언어들의 문제점

```js
let x = 20;
x = x + "abc"; //x는 문자열이 된다. 20abc
```

타입기반의 언어들에서는, 해당 코드는 반드시 에러가 떠야하는 코드인데, js에서는 에러가 나지 않는것 뿐만 아니라, 연산까지 된다.

이처럼 따로 타입이 지정되어 있지 않으면 출력 결과를 예측하기가 힘들다.

```js
const obj = { width: 10, height: 15 };
const area = obj.width * obj.heigth; //고의적으로 오타를 냄
console.log(area); // NaN, undefined와 함깨 연산이 됨.

//JS에서는 지정한 파라미터 개수와 인자 개수가 달라도 오류가 발생하지 않는다.
function greet(person, date) {
  console.log(person, date);
}

greet("Brendan"); //Brendan, undefined
```

이러한 여러 문제점들 때문에 자바스크립트의 슈퍼셋 언어인 타입스크립트가 등장하게 됐다.

자바스크립트는 타입의 종류가 2가지로 크게 나뉜다.

1. Primitive Wrapper Type
2. Reference Type

1)은 `Boolean, Null, Undefined, Number, BigInt, String, Symbol` 등이 해당되고,

2)는 `Array, Object, Date, Function, RegExp, UserType` 등이 해당된다.

자바스크립트의 `typeof` 연산자는 <mark style="background: #BBFABBA6;">원시형 타입의 데이터의 타입을 조회</mark>하기 위해 생겼다. <span style="color:rgb(143, 143, 143)">(조회할 데이터의 형식이 원시타입이어야만 제대로 타입을 조회할 수 있음) </span>
참조형 타입을 typeof로 조회하게 되면, 전부 object로 나오게 된다.

```js
var count = 10;
var array = [1, 2, 3];

console.log(typeof count); //number
console.log(typeof array); //object
```

<mark style="background: #D2B3FFA6;">참조형 타입을 확인</mark>하기 위해서는 `instanceof` 연산자를 사용할 수 있다. 이를 사용하게 되면 특정 타입의 instance인지 조회하여 불린값을 반환해준다.

```js
var name = "newlec";
var array = [1, 2, 3];

console.log(name instanceof String); // false
console.log(array instanceof Array); // true
```

이때, 배열은 배열만 가지는 검증 방법이 존재한다.
`isArray`를 통해 배열인지 확인해볼 수 있다.

```js
var nums = [];
console.log(Array.isArray(nums)); //true
```

```js
console.log(typeof null); //object
console.log(null == undefined); //true
console.log(null === undefined); //false
```

typeof null이 object로 나오는건 상당히 유명한 Javascript 버그라고 한다.

얕은 비교는 값만을 비교하여 둘다 falsy한 값이 같다고 간주되는 것이다. 깊은 비교는 참조까지 비교하므로 false가 나오게 되는것이다.

타입스크립트를 사용하면 이러한 불편한 검사를 따로 하지 않아도 된다

---

## 타입스크립트 사용하기

`npm i -g typescript`

tsc(typescript complier)을 먼저 전역적으로 설치하기

tsconfig.json설정
컴파일된 js파일을 따로 다른 폴더에서 관리하고 싶은데 어떻게 해야할까?
![](../../assets/images/Pasted%20image%2020250328105724.png)
다음과 같이 직접 플래그로 지정해줄 수 있지만, 매번 이렇게 플래그 설정을 해주기 너무 귀찮다.

tsconfig.json에서 이를 해결할 수 있다.

```json
{
  "compilerOptions": {
    "outDir": "./dist"
  },
  "include": ["code.ts"]
}
```

outDir은 컴파일된 JS파일들을 어디에 넣어 놓을 건지에 대한 옵션이다.

이후에 tsc만 사용하여 모든 ts파일들을 dist폴더에 넣을 수 있다. 이때, include를 통해 어떤 ts파일들만 컴파일할 것인지 결정할 수 있다.
![](../../assets/images/Pasted%20image%2020250328110441.png)

---

## 타입 지정법

> 다른 타입 기반 언어들과 다르게, 타입스크립트에서는 타입 지정을 왼쪽이 아닌 오른쪽에 한다.

```C
int number = 1;
```

```ts
const number: number = 1;
```

원시형 타입 지정

> string, number, boolean, null, undefined, bigint, symbol, Infinity, NaN...

```ts
let msg: string = "hello world";
console.log(msg);
msg = 2; //typeError 발생
```

배열 타입 지정

```ts
let array: number[] = [1, 2, 3, 4];
let array2: string[] = ["hi", "hello"];
```

위와 같은 타입은, 배열에 들어갈 요소들의 타입이 전부 일관될때만 사용할 수 있다.

배열 내 요소들의 타입이 섞여 있다면, 직접 타입을 지정해줘야한다.

```ts
let array3: [number, string] = [1, "hello"];
```

하지만, 위와 같은 방법으로 타입을 지정하게 되면, 타입을 확장하거나, 나중에 데이터가 커지면 타입을 지정하기 어려워진다.

이때, 타입을 확장하는 방법이 있다.

```ts
let array4: (number | string)[] = [1, "hello"];
let array5: Array<number | string> = [1, "hello"];

type Array<T> = T[];
```

array4와 같이, 유니온 타입으로 타입을 지정하여 타입을 확장하거나, 나중에 자세히 다뤄볼 [제네릭](#generic) 타입을 통해 타입을 확장할 수 있다.

객체 타입 지정

```ts
const user: { name: string; age: number } = { name: "Alice", age: 22 };

//함수의 매개변수를 객체로 받는 경우
function printUser(user: { name: string; age: number }) {
  console.log(user.name, user.age);
}

//객체 구조 분해할당의 타입 지정
function printUser({ name, age }: { name: string; age: number }) {
  console.log(name, age);
}
```

일회성으로 타입을 사용한다면 위와 같이 직접 지정할 수 있다. 하지만 재사용이 필요하다면, type혹은 interface라는 타입별칭을 통해 사용 가능하다.

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

둘의 차이는 [추후에](#type-interface) 알아보도록 하자.

### special 타입

1. any: 모든 타입을 허용(안정성이 떨어짐)
2. unknown: 알 수 없는 타입 (안전한 any대안)

`any`는 형변환이 막 일어나서 전용 타입 메소드를 사용할때도 <mark style="background: #FF5582A6;">오류가 생기지 않는다는 문제</mark>가 있다.

```ts
let msg: any = "hello world";
msg = 123;

let total = msg + 10; //오류가 나지 않는다. 133이 나온다.
```

`unknown`은 모든 타입의 데이터를 받되, 거의 모든 연산에 직접 사용할 수 없다. 타입 가드(조건문)나 [단언](#assertion)을 통해 <mark style="background: #BBFABBA6;">특정 타입 전용 메소드를 사용할 수 있</mark>도록 해준다.

```ts
let msg: unknown = "hello world";
msg = 2;
let total = msg + 10;
console.log(total); //typeError(Object is of type unknown)
msg.toUpperCase(); //typeError

{
  let msg: unknown = "hello world";
  msg = 123;
  if (typeof msg === "number") {
    let total = msg + 10;
  }
}
```

<span style="color:rgb(97, 97, 97)">(중괄호는 지역화를 위해 적용)</span>

TypeScript 프로젝트에서 noImplicitAny 컴파일러 옵션이 활성화된 경우, 타입이 명시되지 않아 암시적으로 any로 추론되는 상황에서 오류가 발생한다. 이를 무시하려면 tsconfig.json 파일에서 noImplicitAny 옵션을 false로 설정하면 된다.

<h3 id="assertion">Type Assertions</h3>
이때, 일일이 if조건문을 사용해야하는 타입가드의 불편함 때문에 타입단언(as)가 등장하게 됐다.

```ts
{
  let msg: unknown = "hello world";
  msg = 123;
  let total = (msg as number) + 10;
}
```

`as`를 사용하여 확장된 타입을 좁히는 등, 안전하게 연산을 수행할 수 있다.

`<>`을 사용하여 타입단언을 하는 방법도 존재한다. 하지만 이는 JSX문법과 충돌할 수 있어 as문법이 권장된다.

```ts
let total = <number>msg + 10;
let strLength: number = (<string>someValue).length;
```

유니온 타입

```ts
type ID = string | number;

{
  let kor: ID = 33;
  kor = "33";
  let eng: number;
}
```

유니온 타입은 합집합의 타입이다.

인터섹션 타입

```ts
type ID = string | number;
type Name = string | null;

type User = ID & Name;
let user: User = "hello";
user = 1; //typeError
user = null; //typeError
```

string만 교집합이므로 string의 타입만 가지게 된다.
인터섹션 타입은 교집합의 타입이다.

리터럴 타입

> 값이 타입이 되는 타입

```ts
let level: 1;
level = 1;
console.log(level);
level = 6; //typeError
```

함수의 타입

```ts
function greet(name: string) {
  console.log("Hello, " + name.toUpperCase() + "!!");
}

greet("TypeScript"); // Hello, TYPESCRIPT!!
greet(42); //typeError
```

함수의 매개변수(파라미터)의 타입을 지정해주고, 반환값의 타입도 지정해줘야한다.
이때 반환값은 파라미터 뒤쪽에 지정하고, 파라미터는 소괄호 안에 지정한다.

함수의 반환값은 타입 추론이 가능하다.

```ts
//Promise를 반환하는 함수의 경우
async function getFavoriteNumber(): Promise<number> {
  return 26;
}
```

### Enum

> 열거형 타입, Enumerate의 약자이다.

상수형 데이터의 집합이다.

미리 정의된 코드를 사용하는 경우
ex: 방향을 위한 값을 숫자로 정의하기

이떄, 방향을 위한 값을 문자로 정의한 것이 방향 "코드"

```ts
const walkTo = 5;

const N = 1;
const NE = 2;
const E = 3;
//...

const walkTo = S;
```

이처럼 숫자만으로 알아보기 힘든 코드를 이름을 붙여주는 것이다.
코드는 바뀌면 안되기 때문에 상수로 지정되는 것이다.
하지만, 존재하지 않는 코드의 값을 넣으면 대처가 안되기 때문에, enum타입이 나오게 됐다.

Numeric Enums

```ts
{
  enum Direction {
    Up = 1,
    Down,
    Left,
    Right,
  }

  let dir: Direction = Direction.Down;
  console.log(dir);
}
```

이처럼 1을 맨처음의 리스트 값으로 초기화하면 알아서 1개씩 증가된 값이 이후의 요소들에 할당된다.

심볼은 어쩔때 쓰이지

---

## Interface 타입

코드를 나눌 때 가장 작게 나누는 단위가 함수
함수를 묶어주는 것이 클래스

### Class, Interface와 Type의 차이

```ts
interface IPoint {
  x: number;
  y: number;
}
```

빈 공백을 갖는 객체를 만들거나 기본값이 존재하는 객체를 만들고자 할때, 타입은 클래스로 만드는것이 좋다.

솔직히 클래스와 인터페이스잘 모르겠당

약속: 인터페이스
구조가 맞는지 안맞는지에 대한 일치여부 확인: 타입 사용

인터페이스와 타입은 일관되게 사용하고, 각자의 장단점이 있으니 회사의 컨벤션에 맞춰서 사용하면 되겠다.

```ts
function printCoord(pt: Point) {
  console.log(pt.x);
  console.log(pt.y);
}

printCoord({ x: 100, y: 100 });

{
  class Exam {
    constructor(public kor: number, public eng: number) {}
    total() {
      return this.kor + this.eng;
    }
  }

  const exam: Exam = new Exam(100, 90);
}

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

### 확정 할당 단언

> 변수나 속성이 선언 시점에 초기화되지 않아도 나중에 반드시 값이 할당될 것임을 컴파일러에 알림

```ts
class User {
  id!: number; // 생성자에서 초기화하지 않음
}
```

### Not-null 연산자

> 값이 null 또는 undefined가 아님을 컴파일러에 알림

```ts
function getLength(str: string | null) {
  return str!.length; // str이 null이 아님을 단언
}
```
