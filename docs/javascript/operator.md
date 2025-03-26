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

### Truthy값

![](../../assets/images/Pasted%20image%2020250326194025.png)

### Falsy값

![200](../../assets/images/Pasted%20image%2020250326194049.png)
<span style="color:rgb(143, 143, 143)">0n은 BigInt의 자료형이다. </span>

---
## 단락 회로 평가

### OR 연산자

> 먼저 참이 오는 값을 반환한다. 

`"Cat" || "Dog"` -> Cat이 반환됨. 
OR연산자는 참값을 뱉어내는것이 아니라, 참인 값만을 반환하는 것이다. 
둘다 거짓인 경우에는, 뒤의 값이 반환된다. 

그렇다면 `"Cat" && "Dog"` -> Dog가 반환됨. 
&&는 먼저 오는 falsy인 값을 반환하기 때문에, 앞단이 true라면 뒤의 값도 검사해봐야하기 때문에 Dog가 반환된다. 

false가 먼저 오고 true가 나중에 온다면, falsy의 값이 반환될 것이다. 

연산자들 간의 우선순위도 존재한다. 예를들어, &&는 || 보다 우선적으로 처리됨. 

- 기본값 연산
- NaN과 Infinity 비교
	- isNaN(), isFinite() 함수를 통해 비교 확인 가능 