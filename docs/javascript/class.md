---
layout: home-with-toc
title: Class
date: 2025-04-03 20:18:00 +0900
categories: Coding
parent: Javascript
---

## 생성자

객체지향 프로그래밍의 3대요소

1. 캡슐화(Encapsulation)
2. 상속(Inheritance)
3. 다형성(Polymorphism)

### 생성자와 일반함수의 차이

객체지향에는 원래함수가 존재하지 않는다. (모든 함수로 보이는 것들은 객체의 메소드임.)
자바스크립트는 프로토타입 기반 언어로, 일반 함수를 정의해놓고 new키워드를 통해 인스턴스를 생성하면 생성자 함수가 호출되는 기이한 기능을 가지고 있다. (constructor을 사용하지 않고도 )

```js
function Exam() {
  kor = 1;
  eng = 2;
  math = 3;

  console.log(kor, eng, math);
}

let exam1 = Exam(); // 1 2 3
console.log("exam1", exam1); // undefined(반환값이 없음)

let exam2 = new Exam(); // 1 2 3
console.log("exam2", exam2); // Exam {}
```

생성자는 반드시 기본적으로 자기가 생성한 객체를 반환한다. 빈객체더라도. (그래서 exam2에서는 빈객체가 반환되는 것이다.)

![](../../assets/images/Pasted%20image%2020250404092218.png)
왼쪽은 this바인딩이 없을때, 오른쪽은 this바인딩이 있을때의 결과가 출력된 것이다.

### 생성자 오버로드

자바스크립트는 C++이나 Java와 같은 전통적인 객체지향 언어처럼 함수 시그니처 기반의 오버로딩을 공식적으로 지원하지 않는다. 그러나 매개변수의 존재 여부나 타입을 확인하는 방식으로 오버로딩 효과를 구현할 수 있다.

```js
function Exam(kor, eng, math) {
  // 매개변수에 값이 없을 경우 기본값 0 사용
  this.kor = kor || 0;
  this.eng = eng || 0;
  this.math = math || 0;

  this.total = function () {
    return this.kor + this.eng + this.math;
  };

  this.avg = function () {
    return this.total() / 3;
  };
}

// 매개변수 없이 호출 (모든 값이 0으로 초기화)
var exam1 = new Exam();
console.log(exam1.total()); // 0
console.log(exam1.avg()); // 0

// 매개변수와 함께 호출
var exam2 = new Exam(1, 2, 3);
console.log(exam2.total()); // 6
console.log(exam2.avg()); // 2=77 
```

이 방식이 "생성자 오버로드"로 간주되는 이유는 다음과 같다:

1. **다양한 매개변수 패턴 지원**: 같은 생성자 함수가 다른 수의 인자로 호출되어도 정상적으로 동작한다.

2. **의미적 오버로딩**: 비록 자바스크립트가 문법적으로 다중 시그니처를 지원하지 않지만, 로직을 통해 다양한 호출 패턴을 처리한다.

보다 명시적인 방법으로는 `arguments` 객체나 매개변수 개수를 확인하는 방식이 있다:

```js
function Exam() {
  // arguments 객체의 길이에 따라 다르게 처리
  if (arguments.length === 0) {
    // 기본 초기화
    this.kor = 0;
    this.eng = 0;
    this.math = 0;
  } else if (arguments.length === 1 && typeof arguments[0] === "object") {
    // 객체로 전달된 경우
    var options = arguments[0];
    this.kor = options.kor || 0;
    this.eng = options.eng || 0;
    this.math = options.math || 0;
  } else {
    // 개별 인자로 전달된 경우
    this.kor = arguments[0] || 0;
    this.eng = arguments[1] || 0;
    this.math = arguments[2] || 0;
  }

  // 메서드는 동일
  this.total = function () {
    return this.kor + this.eng + this.math;
  };

  this.avg = function () {
    return this.total() / 3;
  };
}

// 다양한 방식으로 호출 가능
var exam1 = new Exam();
var exam2 = new Exam(80, 90, 70);
var exam3 = new Exam({ kor: 100, eng: 90 }); // math는 기본값 0
```

ES6 이후에는 기본 매개변수를 사용하여 더 간결하게 작성할 수 있다:

```js
function Exam(kor = 0, eng = 0, math = 0) {
  this.kor = kor;
  this.eng = eng;
  this.math = math;

  this.total = function () {
    return this.kor + this.eng + this.math;
  };

  this.avg = function () {
    return this.total() / 3;
  };
}
```

클래스 문법에서도 동일한 패턴을 적용할 수 있다:

```js
class Exam {
  constructor(kor = 0, eng = 0, math = 0) {
    this.kor = kor;
    this.eng = eng;
    this.math = math;
  }

  total() {
    return this.kor + this.eng + this.math;
  }

  avg() {
    return this.total() / 3;
  }
}
```

생성자 오버로드 패턴은 API의 유연성을 높이지만, 함수 내부 로직이 복잡해질 수 있으므로 적절히 주석을 달아 사용 방법을 명확히 하는 것이 좋다.

## 프로토타입

자바스크립트는 기본적으로 객체를 동적으로 확장하는 습성 때문에, this바인딩을 통해 만들어진 변수들은 속성까지도 객체에 추가된다. 이러한 이유때문에, 인스턴스를 찍어낼때마다 항상 빈객체인 상태에서 속성을 추가하기 때문에 공간을 무지막지하게 잡아먹게 된다. 이런 문제점때문에 일종의 형식을 가지고 이를 공유하고자 하는 "형식"이 만들어졌으며, 이가 바로 프로토타입이다.

생성자로 사용이 된다면, 반드시 자기 자신의 프로토타입을 지니고 있다.

모든 객체는 생성자를 가지고 있다. 모든 생성자는 prototype을 가지고 잇다.

```js
Array.prototype.aaa = function () {
  console.log("aaaaa");
};
```

has a 상속

이것저것 다른걸 가져와서 상속을 받음(조립해서 사용)

is 상속

일종의 틀로 그대로 가져와서 추가만 함.

코드 재사용
바이너리 재사용(배포된 바이너리를 그대로 가져와서 사용)

```js
{
  function Exam() {
    kor = 1;
    eng = 2;
    math = 3;
  }

  console.log("===Exam1===");
  let exam1 = Exam(); //일반 함수 호출
  console.log(exam1.kor, window.kor); //Cant read property Error, 1

  console.log("===Exam2===");
  //function Exam의 형식을 가진 인스턴스를 생성한다는 뜻
  let exam2 = new Exam(); //함수로 인스턴스 생성
  console.log(exam2.kor, window.kor); //undefined, 1

  //브라우저에서 실행되면 전역객체는 window, node기반의 환경이라면 global이 전역객체가 된다.
}

{
  function Exam() {
    this.kor = 30;
    console.log(this.kor);
  }

  Exam(); //전역객체에 kor이라는 속성을 확장시킴
  new Exam(); //인스턴스의 kor을 참조
}

{
  function Exam() {
    this.kor = 10;
    this.eng = 22;
    this.math = 30;

    this.total = function () {
      return this.kor + this.eng + this.math;
    };

    this.avg = function () {
      return this.total() / 3;
    };
  }

  var exam = new Exam();
  console.log(exam.total());
  console.log(exam.avg());
}

var exam = new Exam(1, 2, 3);
function Exam(kor, eng, math) {
  let ar1 = [];
  console.log(ar1.aaa());
  Array.prototype.aaa = function () {
    console.log("aaa");
  };

  let ar2 = [];
  console.log(ar1.aaa());
}
```

## this 속성

클래스에서 this는 상위 인스턴스를 가리키게 된다. 이때, 생성자가 만들어낼 객체를 의미 하는 것이다. 그래서 파라미터로 받은 인자들을 만들어질 객체의 속성인 this.kor, this.eng에 할당시켜야하는 것이다. 

메소드들 또한 객체 내의 속성이므로 this바인딩으로 접근이 가능한것이다. 

```ts
function Exam(kor, eng, math) {
	this.kor = kor || 0;
	this.eng = eng || 0;
	this.math = math || 0;
	this.total = function(){
		return this.kor+this.eng+this.math;
	}
	this.avg = function(){
		return this.total() / 3;
	}
}
```

