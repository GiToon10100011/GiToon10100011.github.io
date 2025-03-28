---
layout: home-with-toc
title: Object
date: 2024-07-08 16:08:00 +0900
categories: Coding
parent: Javascript
---

## 객체

> 객체는 키와 값의 쌍으로 이루어진 자료구조이다.

```javascript
const obj = {
  name: "John",
  age: 20,
};
```

`함수, 배열, 문자열, 숫자, 불리언` 등은 모두 객체에 포함된다.

자바스크립트에서의 객체는 동적으로 크기를 확장시키거나, 속성을 동적으로 할당 시킬 수 있는것이 특징이다. 

```js
let exam = new Object();
exam.kor = 30;
exam.eng = 70;
exam.math = 80;

console.log(exam.kor + exam.eng); // 100
```

객체의 속성에 접근하는 방법은 크게 2가지이다. 

1. 온점 표기법
2. 대괄호 표기법

대괄호표기법은 문자열로 키를 접근하거나, 변수로 키를 직접 접근할 때 사용하며, 이러한 특성때문에 평소에는 객체의 키에 사용하기 힘든 특수문자를 대괄호 표기법을 통해 사용할 수 있다. 

```js
exam.background-image = "Test" //불가능
exam["background-image"] = "Test" //가능
```

이를 이용하여, 모든 데이터를 객체화 시키는 자바스크립트의 특성에 따라 함수를 대괄호 표기법으로 지정하여 동적으로 함수를 바꿔줄 수도 있다. 

```js
function solution(my_string) {
    return Array.from(my_string).map(t => {
        return t[t.charCodeAt() < 91 ? 'toLowerCase' : 'toUpperCase']()
    }).join('');
}
```

객체의 속성을 제거하고 싶을때는 delete예약어를 통해 제거할 수 있다. 

```js
let exam = new Object();
exam.kor = 30;
console.log(exam); //{ kor: 30 }

delete exam.kor;
console.log(exam); //{}
```

---

### 객체지향형 언어

> 객체 지향형 언어는 객체를 통해 데이터를 관리하고, 코드를 재사용하고, 코드를 구조화하는 것을 목표로 한다.

사용자 정의 객체를 생성하고, 이를 통해 데이터를 관리하고, 코드를 재사용하고, 코드를 구조화하는 것을 목표로 한다. `javascript`뿐만 아니라, `파이썬, 자바, C#` 등 모든 객체지향형 언어는 이 개념을 사용한다.

📝 **객체지향형 언어의 특징**

1. 캡슐화 - 캡슐화는 객체의 내부 구현을 외부에 숨기고, 외부에서는 객체의 기능만을 사용할 수 있도록 하는 것을 의미한다.

2. 상속 - 상속은 부모 객체의 기능을 자식 객체가 상속받아 사용할 수 있도록 하는 것을 의미한다.

3. 다형성 - 다형성은 객체의 기능을 여러 가지 형태로 재사용할 수 있도록 하는 것을 의미한다.

### 클래스

클래스는 객체를 생성하기 위한 틀이다. 클래스는 `class` 키워드를 사용하여 정의한다.

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
```

클래스에 대해 더 자세한건 [여기](/docs/javascript/class.html)서 더 자세히 알아볼 수 있다.

---

### 객체의 구조분해할당

> 객체의 구조분해할당은 객체의 키와 값을 변수에 할당하는 방법이다.

```javascript
const obj = {
  name: "John",
  age: 20,
};

const { name, age } = obj;
console.log(name); // John
console.log(age); // 20
```

객체의 구조분해할당은 변수를 직관적으로 표현할 수 있어 가독성을 높이는데 도움을 준다.

---

### 객체 축약

> 객체 축약은 객체의 키와 값을 축약하는 방법이다.

프로퍼티의 이름과 값이 동일하다면 축약할 수 있다.

```javascript
const title = "example";
const content = "example content";
const author = "example author";

const obj = {
  title, // title: title
  content, // content: content
  author, // author: author
  age: 20,
};
```
