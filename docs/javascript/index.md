---
layout: home-with-toc
title: "Javascript"
date: 2024-06-19 18:26:00 +0900
categories: Coding
has_children: true
nav_order: 3
---

# Javascript

> 일급함수를 지원하는 가벼운, 객체지향 프로그래밍 언어.

자바스크립트는 웹 브라우저에서 동작하는 언어이다. 따라서 웹 브라우저에서 동작하는 모든 기능을 사용할 수 있다.

자바스크립트는 `DOM`을 조작하는 기능을 제공한다.
`DOM`은 문서 객체 모델`(Document Object Model)`의 약자로, 웹 브라우저에서 표시되는 요소들을 객체로 표현한 것이다.

`DOM`은 웹 에디터에서 작성한 코드를 순서대로 웹 브라우저가 인식하고, 브라우저측에서는 전달받은 코드를 인식하기 위해 메모리 공간을 할당시켜 문서 체계화를 시킨다. `DOM`에 관련된건 [여기](/docs/javascript/dom.html)서 더 자세히 알아볼 수 있다.

---

## 모듈화

> 모듈화는 자바스크립트에서 코드를 재사용하기 위해 사용하는 기능이다. 모듈화는 코드를 재사용하기 위해 사용하는 기능이다.

```html
<script src="script.js" type="module" defer></script>
```

위와 같이 `script`태그의 `type`속성을 `module`로 작성하면 모듈화를 사용할 수 있다.

`script`는 <span style="color: yellowgreen;">기능을 분리해서 각 파일을 만드는것이 좋</span>기 때문에 서로 간의 데이터 공유를 위해서 모듈 형식을 사용한다.

## 변수

> 변수는 데이터를 저장하는 공간이다. 변수는 데이터를 저장하는 공간이므로, 변수의 이름은 데이터의 의미를 표현해야 한다.

```javascript
var name = "John";
const age = 20;
let isStudent = true;
```

javascript에서는 변수를 선언할 때 `var`, `const`, `let` 키워드를 사용한다.

각 키워드는 독자적인 특징을 지니고 있는데, 지금부터 알아보자.

| 키워드 | 재할당 | 재선언 |
| ------ | ------ | ------ |
| var    | o      | o      |
| const  | x      | x      |
| let    | o      | x      |

🤔 재할당이 뭐야?

재할당은 기존의 변수에 값을 다시 `할당(initialize)`하는 것을 의미한다.

```javascript
let a = 10;
a = 20;
```

🤔 재선언이 뭐야?

재선언은 동일한 이름으로 변수를 `선언(declare)`하는 것을 의미한다.

```javascript
var a = 10;
var a = 20;
```

⚠️ **변수 작성법**

- 카멜 케이스 - `camelCase`
- 스네이크 케이스 - `snake_case`
- 헝가리안 케이스 - `HungarianCase`
- 케밥 케이스 - `kebab-case`

---

## 자료형

> 자료형은 변수에 저장되는 데이터의 형식을 의미한다.

자료형에는 `원시 자료형`과 `참조 자료형`이 있다.

- 원시 자료형 - 변수에 값을 직접 저장하는 자료형이다. `숫자, 문자열, 불리언, 심볼, null, undefined, BigInt, Symbol` 등이 있다.

- 참조 자료형 - 변수에 객체의 주소를 저장하는 자료형이다. `배열, 객체, 함수, 날짜, 정규표현식` 등이 있다.

이처럼 어떤 자료형이냐에 따라 메모리 할당 방식이 달라진다.

- 원시 자료형은 변수에 <mark style="background: #D2B3FFA6;">값을 직접 저장</mark>하기 때문에, 메모리 할당 방식이 단순하다.
- 참조 자료형은 변수에 <mark style="background: #D2B3FFA6;">객체의 주소를 저장</mark>하기 때문에, 메모리 할당 방식이 복잡하다.

또한, 원시 자료형은 불변성을 가지고 있고, 참조 자료형은 가변성을 가지고 있다.

- 원시 자료형은 값을 변경하면 새로운 메모리 공간을 할당받는다.
- 참조 자료형은 값을 변경하면 주소를 참조하는 객체의 값을 변경한다.

### 원시 자료형과 참조 자료형 요소들의 복사

원시 자료형의 복사 방식은 값을 직접 복사하는 방식이다.

```js
const a = 1;
const b = a;
a = 2;
console.log(b); // 1
```

참조 자료형의 복사 방식은 주소를 복사하는 방식이다.

```js
const obj = { a: 1, b: 2 };
const obj2 = obj;
obj.a = 3;
console.log(obj2); // {a: 3, b: 2}

//참조타입은 연결이 끊어지지 않는다.
const obj3 = { a: 1, b: 2 };
const obj4 = obj3;
obj3.a = 3;
console.log(obj4); // {a: 3, b: 2}
```

이러한 차이점들로 인해 원시 자료형과 참조 자료형의 복사 방식은 다르다.

<p id="deep-copy">이때, 원시 자료형과 원본 데이터의 연결을 끊는 복사를 `얕은 복사`라고 하며, 참조 자료형까지 연결을 끊어지게 하는 것을 `깊은 복사`라고 한다.</p>

깊은 복사를 하는 방법은 아래와 같다.

```js
const obj5 = { a: 1, b: 2 };
const obj6 = { ...obj5 };
obj5.a = 3;
console.log(obj6); // {a: 1, b: 2}
```

이때, 배열 내에 참조 자료형이 있을 경우 결과는 또 달라진다.

```js
const arr1 = [1, { name: "John" }];
const arr2 = [...arr1];
arr2[1].name = "Jane";
console.log(arr1[1].name); // Jane

const obj1 = { a: 1, b: { c: 2 } };
const obj2 = { ...obj1 };
obj2.b.c = 3;
console.log(obj1.b.c); // 3 (변경됨)
```

여기서 배열 자체는 독립적으로 복사되었지만, 참조 자료형은 연결이 끊어지지 않았다.
이런 상황에서는 전개연산자가 아니라, `JSON.parse(JSON.stringify(obj))` 방식을 사용하여 깊은 복사를 해야한다.

```js
const obj7 = { a: 1, b: 2, c: [3, 4, 5] };
const obj8 = JSON.parse(JSON.stringify(obj7));
obj7.c[0] = 6;
console.log(obj8); // {a: 1, b: 2, c: [3, 4, 5]}
```

중요한 점은 <mark style="background: #FF5582A6;">전개연산자(...)는 항상 1단계 깊이만 복사</mark>한다는 것이다. 즉, 위와 같은 예시로 내부에 있는 중첩 객체 혹은 배열은 원본과 같은 참조를 유지하게 된다.

---

### 형변환

> 형변환은 데이터의 형식을 변환하는 것을 의미한다.

형변환에는 `명시적 형변환`과 `암시적 형변환`이 있다.

<h4 id="explicit-type-conversion" class="hidden-header">명시적 형변환</h4>

<span style="color: violet;">명시적 형변환</span>은 개발자가 의도적으로 데이터의 형식을 변환하는 것을 의미한다.

```javascript
let a = "10";
let b = Number(a);
console.log(b); // 10
```

<h4 id="implicit-type-conversion" class="hidden-header">암시적 형변환</h4>

<span style="color: violet;">암시적 형변환</span>은 자바스크립트 엔진이 자동으로 데이터의 형식을 변환하는 것을 의미한다.

```javascript
let a = "10";
let b = a * 2;
console.log(b); // 20
```

형변환 메소드들은 아래와 같다.

- `Number()`: 숫자로 변환
- `String()`: 문자열로 변환
- `Boolean()`: 불리언으로 변환
- `Symbol()`: 심볼로 변환
- `null`: null로 변환
- `undefined`: undefined로 변환
- `BigInt()`: BigInt로 변환

---

## 심화 문법

### 템플릿 리터럴

템플릿 리터럴은 문자열을 표현하는 방법 중 하나이다. 템플릿 리터럴은 반드시 ` 백틱(``) `을 사용하여 문자열을 표현한다.

```javascript
const name = "John";
const age = 20;

const result = `이름은 ${name}이고, 나이는 ${age}살입니다.`;

console.log(result); // 이름은 John이고, 나이는 20살입니다.
```

위처럼 문자열 안에 변수를 사용할 수 있다. 변수를 사용하기 위해서는 `$`기호와 중괄호를 사용하여 중괄호 내에 변수를 입력한다.

---

## 자바스크립트 내장 함수

- `alert()`: 경고창 출력
- `confirm()`: 확인/취소 버튼 출력
- `prompt()`: 입력창 출력
- `console.log()`: 콘솔 출력
- `console.error()`: 콘솔 에러 출력
- `console.dir()`: 객체 정보 출력(외부 API에 유용)
