---
layout: home-with-toc
title: Operators
date: 2025-03-26 09:34:00 +0900
categories: Coding
parent: Javascript
---

## Truthy/Falsy 연산

- `if("" == 0) console.log("hello")`는 출력이 될까 안될까? 된다. (빈문자열, 0은 둘다 false로 간주. 즉, 빈 문자열은 falsy한 값이다.)

```js
let x;

console.log(1 < x); //false
console.log(x < 3); //false
if(1 < x < 3) console.log("hi") //hi
```

위의 코드에서는 `x < 3 `마저도 `false`가 출력되고, `1 < x < 3`이 연산되는 기묘한 현상이 일어난다. 

비교 연산자는 `undefined`랑 연산을 할때, `NaN`으로 간주되어 무조건 `false`를 반환한다. 

그렇다면, `null`은 어떨까? `null`은 놀랍게도 `0`으로 간주된다. 

이는 `Javascript`의 `타입변환(Type Coercion)` 규칙 중 하나이다. 
이러한 암묵적 형변환 때문에 실제 개발에서는 <mark style="background: #D2B3FFA6;">가능한 명시적인 비교나 타입 체크</mark>를 하는 것이 권장되는 것이다. 

`1 < x < 3`은 놀랍게도 참으로 간주된다. 이는 순차적으로 연산이 되기 때문이다. 
`1 < x` 는 false를 반환, false는 0으로 간주되므로 `false < 3`은 true가 되어 hi가 출력되는 것이다. 

### Truthy값

![](../../assets/images/Pasted%20image%2020250326194025.png)

### Falsy값

<img src="../../assets/images/Pasted%20image%2020250326194049.png" style="width: 250px"/>
<p style="color:rgb(143, 143, 143)">0n은 BigInt의 자료형이다. </p>

---
## 단락 회로 평가

### OR 연산자

> 먼저 참이 오는 값을 반환한다. 

```js
true || true
false || true
true || false
false || (3 == 4)
```

위의 코드는 당연히 `true, true, true, false` 순으로 값이 반환될 것이다. 

하지만, `"Cat" || "Dog"` -> Cat이 반환됨. 

이는 OR연산자는 참값을 뱉어내는것이 아니라, <mark style="background: #D2B3FFA6;">먼저 오는 참인 값을 반환</mark>하는 것이기 때문이다. 
<mark style="background: #D2B3FFA6;">둘다 거짓인 경우에는, 뒤의 값이 반환</mark>된다. 

```js
"Cat" || "Dog" // "Cat"
"Cat" || false // "Cat"
false || "Cat" // "Cat"
"" || false // false
false || "" // ""
false || varObject // varObject

const result = null || 0 || undefined || "" || " " || 2 || "hello";
// result는 " "가 반환됨.
```

이를 활용한 간단한 예시

```js
let input = prompt("값을 입력하세요")
let result = parseInt(input) || 10;
result += 2
```

> 입력값이 존재하지 않거나 숫자가 아니라면 기본값이 12가 된다. 

### AND 연산자

```js
true && true
false && true
true && false
false && (3 == 4)
```

위의 코드는 당연히 `true, false, false, false`가 반환된다. 

하지만, `"Cat" && "Dog"` -> Dog가 반환됨. 

이는 AND 연산자는 먼저 오는 falsy인 값을 반환하기 때문에, 앞단이 true라면 뒤의 값도 검사해봐야하기 때문에 Dog가 반환된다. 

false가 먼저 오고 true가 나중에 온다면, falsy의 값이 반환될 것이다. 

```js
false && "Cat"
"Cat" && false
"" && false
false && ""
false && varObject

const result = "a" && 3 && "undefined" && 0 && " " && 2;
// result는 0를 반환
```

이처럼, 단락회로 평가를 이용하면 불필요한 중첩 조건문을 간결하게 만들어줄 수 있다. 
아래는 x의 형식이 string형식이며, 숫자형식의 문자열이고 30을 넘지 않는지 검사하는 코드이다.

```js
//Before
if(typeof x = "string"){
	if(!isNaN(x)){
		if(parseInt(x) < 30){
			console.log("통과")
		}
	}
}

//After
let valid = typeof x === "string" && !isNaN(x) && parseInt(x) < 30;
```

연산자들 간의 우선순위도 존재한다. 예를들어, &&는 || 보다 우선적으로 처리됨. 

`const result = true || false && false` true가 반환
`const result = (true || false) && false` false가 반환

---
## 기본값 설정하는 법

### 1. OR 연산자를 사용하는 방법

```js
let name = null || "default string" //기본값으로 항상 default string을 반환
```

OR 연산자는 <mark style="background: #BBFABBA6;">모든 falsy한 값에 대해 기본값을 적용</mark>하게 된다. 

### 2. 널 병합 연산자를 사용하는 방법

> 좌항이 null/undefined일 경우, 우항을 반환하는 연산자. 이외의 경우는 좌항을 반환함.

```js
let foo = null ?? "default string" //기본값으로 항상 default string을 반환
let baz = 0 ?? 42 // 0
```

널병합 연산자를 사용할때 유의할 점은, 오직 좌항이 <mark style="background: #D2B3FFA6;">null/undefined의 자료형일때만 우항을 반환</mark>하며, false나 기타 falsy값이어도 좌항을 반환한다. 

---
## 숫자 산술 연산 

```js
3 + "3" // 33
3 * "3" // 9

3 + "a" // NaN
3 * "a" // NaN
```

<span style="color:rgb(143, 143, 143)">NaN은 Not a Number의 약자</span>

특정 값이`NaN`인지 `Infinity`인지 확인하는 방법은 한가지 밖에 없다. 
`isNaN(), isFinite()` 함수를 통해 비교 확인 가능


