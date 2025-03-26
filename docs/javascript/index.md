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

---

## 호이스팅

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

`let`과 `const`도 호이스팅이 발생하지만, **Temporal Dead Zone(TDZ)** 으로 인해 선언 전에 접근하면 ReferenceError가 발생한한다:

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

### TDZ의 핵심 특징

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

| 구분      | 장점         | 단점            | 사용 권장     |
| ------- | ---------- | ------------- | --------- |
| 변수 호이스팅 | 없음         | 예측 불가, TDZ 에러 | ❌ 절대 금지   |
| 함수 선언문  | 코드 구성 유연성  | 의존성 관리 어려움    | ⚠️ 제한적 사용 |
| 화살표 함수  | 호이스팅 영향 없음 | 선언 전 사용 불가    | ✅ 적극 권장   |

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

### 전개연산자

전개연산자는 배열이나 객체를 펼치는 연산자이다.

```javascript
const array = [1, 2, 3, 4, 5];
const result = [...array];
```

전개연산자는 어디에 쓰이냐에 따라 다른 역할을 한다.

- 배열 복사
- 배열 결합
- 함수 매개변수
- 객체 복사
- 객체 결합

---

## 자바스크립트 내장 함수

- `alert()`: 경고창 출력
- `confirm()`: 확인/취소 버튼 출력
- `prompt()`: 입력창 출력
- `console.log()`: 콘솔 출력
- `console.error()`: 콘솔 에러 출력
- `console.dir()`: 객체 정보 출력(외부 API에 유용)
