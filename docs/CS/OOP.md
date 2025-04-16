---
layout: home-with-toc
title: OOP
date: 2025-04-16 23:10:00 +0900
categories: Coding
parent: CS
---

# 객체 지향 프로그래밍(Object Oriented Programming)

> 객체 지향 프로그래밍은 프로그램을 작성할 때 객체를 중심으로 프로그램을 구성하는 방법이다. 

## SOLID원칙

> 객체지향의 5원칙이다. 

### 1. 단일 책임 원칙(S, Single Responsibility Principle)

> 한 클래스는 한 가지 일만 책임져야 한다. 

한 클래스는 한 가지 일만 담당하는 원칙으로, 한사람이 요리, 설거지, 장보기를 모두 하지 않고 각자 역할을 나눠서 수행함

```js
// 나쁜 예: 여러 책임
class User {
  saveToDatabase() { /* DB 저장 */ }
  sendEmail() { /* 이메일 전송 */ }
}

// 좋은 예: 책임 분리
class User { /* 사용자 데이터만 관리 */ }
class UserRepository { saveUser() { /* DB 저장 */ } }
class EmailService { sendEmail() { /* 이메일 전송 */ } }
```

### 2. 개방-폐쇄 원칙(O, Open/Closed Principle)

> 코드는 확장에는 열려있고, 수정에는 닫혀 있어야 한다. 

코드 수정 없이 기능을 확장할 수 있게 만드는 거로, 렌즈를 바꿀 수 있는 카메라처럼, 코드의 핵심은 그대로 두고 새 기능만 추가할 수 있도록 설계하는 것. 

```js
// 나쁜 예: 도형 추가 시 함수 수정 필요
function getArea(shape) {
  if (shape.type === 'circle') return Math.PI * shape.radius ** 2;
  if (shape.type === 'square') return shape.side ** 2;
}

// 좋은 예: 확장 가능한 구조
class Circle { getArea() { return Math.PI * this.radius ** 2; } }
class Square { getArea() { return this.side ** 2; } }
// 새 도형 추가해도 getArea 함수 수정 불필요
```

### 3. 리스코프 치환 원칙 (L, Liskov Substitution Principle)

> 자식 클래스는 부모 클래스의 자리를 대체할 수 잇어야 한다. 

자식 클래스는 부모 클래스처럼 동작하게 만드는 걸로, 요리사가 휴가를 가도 대체 요리사가 동일한 메뉴를 만들 수 있어야 하는 것과 같이, 자식 클래스도 부모 클래스의 역할을 완벽히 수행할 수 있어야 함. 

```js
// 나쁜 예: 정사각형이 직사각형 대체 불가
class Rectangle { setWidth(w) { this.width = w; } }
class Square extends Rectangle {
  setWidth(w) { 
    this.width = w; 
    this.height = w; // 예상치 못한 동작
  }
}

// 좋은 예: 올바른 상속 구조
class Shape { area() {} }
class Rectangle extends Shape { area() { return this.w * this.h; } }
class Square extends Shape { area() { return this.side ** 2; } }
```

### 4. 인터페이스 분리 원칙(I, Interface Segregation Principle)

> 클라이언트는 필요하지 않은 인터페이스에 의존하지 않아야 한다. 

필요한 기능만 제공하는 작은 인터페이스가 좋음. 모든 방에 출입할 수 있는 마스터키 대신에, 각 직원에게 필요한 방의 열쇠만 주는 것이 안전함.

```js
// 나쁜 예: 너무 큰 인터페이스
class Printer {
  print() {}
  scan() {}  // 일부 프린터는 스캔 기능 없음
  fax() {}   // 일부 프린터는 팩스 기능 없음
}

// 좋은 예: 작은 인터페이스들
class Printer { print() {} }
class Scanner { scan() {} }
class FaxMachine { fax() {} }
// 필요한 기능만 구현
```

### 5. 의존성 역전 원칙(D, Dependency Inversion Principle)

> 고수준 모듈은 저수준 모듈에 의존하지 말고, 둘 다 추상화에 의존해야 한다. 

구체적인 구현보다 추상화에 의존하기. 콘센트와 플러그 같은 표준 규격이 있으면, 어떤 전자제품이던 연결할 수 있다. 코드도 구체적인 구현보다 추상적인 인터페이스에 의존하는것이 좋음. 

```js
// 나쁜 예: 직접 의존
class Light { turnOn() {} }
class Switch {
  constructor() {
    this.light = new Light(); // 직접 의존
  }
}

// 좋은 예: 추상화에 의존
class Device { turnOn() {} }
class Light extends Device { turnOn() {} }
class Switch {
  constructor(device) {
    this.device = device; // 추상화에 의존
  }
}
```
