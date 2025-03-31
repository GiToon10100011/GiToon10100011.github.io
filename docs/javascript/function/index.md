---
layout: home-with-toc
title: 함수
date: 2024-06-20 17:11:00 +0900
parent: Javascript
categories: Coding
has_children: true
---

# 함수

> 함수는 특정 작업을 수행하기 위해 필요한 코드들을 하나로 묶어놓은 코드의 집합이다. 함수를 사용하면 동일한 코드를 반복해서 작성하지 않아도 되며, 코드의 재사용성과 유지보수성을 높일 수 있다.

```javascript
// 함수 선언
function add(a, b) {
  return a + b;
}

// 함수 호출
add(1, 2); // 3
```

ECMAScript6 부터는 화살표 함수를 사용할 수 있다.

```javascript
const add = (a, b) => a + b;
```

### 매개변수(Parameters)

```js
//함수의 선언부에서 작성한 함수 내부에서 사용할 변수들을 정의해 놓은것을 파라미터(매개변수) 라고 부른다. 
function add(a, b){
	//a, b는 파라미터에 해당된다. 
	return a + b;
}

//함수 호출부에서 실제로 함수에 전달해줄 함수를 Argument(인자)라고 부른다. 
add(3, 7)
```

자바스크립트는 다른 언어들과 달리, <mark style="background: #BBFABBA6;">파라미터의 개수와 아규먼트의 개수가 달라도 오류가 발생하지 않는다.</mark> 호출부에서 전달해준 인자값들은, `arguments`라는 객체를 통해 접근이 가능하며, 배열의 형태로 담겨 인덱스를 통해 접근할 수 있다. 

```js
function add(a, b){
  console.log(arguments) //[3, 7]
	console.log(arguments[0]) //3
  console.log(arguments[2]) //undefined
}

add(3, 7)
```

<p id="rest-parameter">또한, ES6 이후로는 지정한 파라미터의 개수를 초과한 인자를 부여하게 되면, `나머지 연산자(Rest Parameter)`로 접근이 가능하다. </p>

```js
function add(a, b, ...c){
  console.log(arguments) //[3, 7, 10, 12]
  console.log(c) //[10, 12]
}

add(3, 7, 10, 12)
```

이처럼 함수의 파라미터에 `...`을 붙여주면, 나머지 연산자로 접근이 가능하다. 이때 나머지 연산자는 배열의 형태로 담겨 위처럼 접근이 가능하다. 

---
## 클로저 함수(Closure)



---
## 즉시 실행 함수(Self-Invoking Functions)

```js
let funcs = function(){
	console.log(1);
}

funcs();
```

해당 함수를 아래와 같이 따로 호출부를 적지 않고 바로 실행하게 하는 함수를 말한다. 

```js
(function(){
	console.log(1)
})();

//화살표 함수로 표현
(() => {
	console.log(1)
})();
```

