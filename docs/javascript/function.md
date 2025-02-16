---
layout: home-with-toc
title: 함수
date: 2024-06-20 17:11:00 +0900
parent: Javascript
categories: Coding
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

## 동기/비동기

> 자바스크립트는 동기적으로 실행되는 언어이다. 즉, 한 번에 하나의 작업만 처리할 수 있는 특성을 가지고 있다. 이 때문에 비동기 처리 함수를 사용하면 비동기적으로 실행되는 함수를 만들 수 있다.

### 이벤트 루프

> 이벤트 루프는 비동기 처리 함수를 실행하고 콜스택을 관리하는 역할을 한다. 이벤트 루프는 콜스택에 있는 함수를 실행하고, 타이머 함수를 실행하고, 이벤트 핸들러를 실행하고, 이벤트 루프를 실행한다.

이벤트루프는 여러 페이즈로 나뉘어 각 단계마다 실행해야할 콜백들이 존재한다.

지금부터 이벤트루프의 페이즈들을 자세히 살펴보자.

1. Timers 단계 - setTimeout, setInterval로 예약된 시간이 지난 경우 작업 실행

2. Pending Callbacks 단계 - 일부 시스템 I/O 작업의 콜백 실행(주로 내부 I/O 작업의 오류 처리 등, <span style="color: red;">시스템에서 호출</span>하는 콜백이 실행되는 단계)

   ```javascript
   /*
   예를 들어, TCP 소켓에서 에러가 발생하여 아래와 같이 등록한 에러 핸들러가 내부적으로 Pending Callbacks 단계에서 실행될 수 있다.
   */
   socket.on("error", (err) => {
     console.error("소켓 에러 발생:", err);
   });
   ```

   이때, 해당 콜백은 우리가 직접 호출하는 코드가 아니라, `Node.js 이벤트 루프`에 의해 자동으로 실행됨. 보통 이벤트 루프 단계들에 대해 개발자는 오류나 연결 종료 이벤트 등에 대해 콜백을 등록할 수는 있지만, 어떤단계에 의해 호출될지는 JS 시스템인 `Node.js 런타임`이 결정하는 것이다.

3. Idle/Prepare 단계 - Node.js 내부 준비 작업, 개발자가 제어하지 못함. 주로 이벤트 루프에 들어가기 전 `내부 초기화 작업, 리소스 관리, 최적화` 등과 같은 작업들을 처리하는 단계이다.

4. Poll 단계 - 새로운 I/O 이벤트 확인 및 처리, 대기 중인 I/O 이벤트가 있는지 확인하고 처리하는 단계. 파일 읽기와 같이 비동기 I/O 완료 콜백이 해당 단계에서 실행됨.

5. Check 단계 - `setImmediate`로 예약된 콜백 실행, 이 단계는 타이머 함수의 콜백보다 우선 순위가 높다.

6. Close Callbacks 단계 - 닫힘 관련 이벤트 처리, 소켓, 타이머, 서버 닫기와 같은 리소스가 종료될 때 실행되는 콜백 처리

7. Microtasks - 각 이벤트 루프의 단계가 종료될 때마다, `process.nextTick` 또는 `Promise`의 후속 콜백 등 마이크로테스크 콜백들이 실행됨.

요약해보자면, 동기 코드가 실행된 후 바로 마이크로태스크가 처리되고, 그 뒤 이어지는 각 이벤트 루프 단계 (Timers, Pending Callbacks, …, Check 등)에서 상황에 맞게 콜백이 실행된다.

⚠️ **이벤트 루프 주의사항**

만약 메인 모듈에서 `setTimeout(..., 0)`과 `setImmediate()`를 모두 호출하면, I/O 사이클이 없을 경우 대부분 `setImmediate()`의 콜백이 먼저 실행되지만, I/O 작업이 있는 경우 순서가 바뀔 수 있다.

> 따라서 단순히 "동기 → 마이크로태스크 → Check → Timer"로만 이해하기는 어렵고, 상황과 코드 작성 위치에 따라 실제 실행 순서는 달라질 수 있다.

---

```javascript
// event-loop-order.js
console.log("시작");

setTimeout(() => {
  console.log("타이머 콜백 (Timers 단계)");
}, 0);

setImmediate(() => {
  console.log("setImmediate 콜백 (Check 단계)");
});

process.nextTick(() => {
  console.log("process.nextTick (마이크로태스크)");
});

console.log("끝");
```

예상 출력 순서:

1. 시작 → 동기 코드 실행
2. 끝 → 동기 코드 실행 종료
3. process.nextTick → 현재 작업(동기 코드) 종료 후 즉시 실행
4. 이후, 어느 단계가 먼저 도달하겠느냐에 따라 다르지만 일반적으로 Check 단계의 setImmediate 콜백이 실행되고, 그 다음에 Timers 단계의 setTimeout 콜백이 실행될 수 있습니다.
   (실행 순서는 Node.js의 내부 I/O 상황, 시스템 부하 등에 따라 미세하게 달라질 수 있습니다.)

---

이벤트 루프 과정 중 사용자 코드는 보통 `동기, 마이크로테스크, 타이머, 체크` 단계에서 실행된다.

<h4 id="timerFunctions" class="hidden-header">타이머 함수</h4>

1. `setTimeout` - 일정 시간 후 실행

   ```javascript
   setTimeout(() => {
     console.log("타이머 콜백 (Timers 단계)");
   }, 0);
   ```

2. `setInterval` - 일정 시간 간격으로 실행

   ```javascript
   setInterval(() => {
     console.log("인터벌 콜백 (Timers 단계)");
   }, 1000);
   ```

3. `setImmediate` - 즉시 실행

   ```javascript
   setImmediate(() => {
     console.log("setImmediate 콜백 (Check 단계)");
   });
   ```

※ `setClear`, `clearInterval`, `clearImmediate` 등은 타이머 함수를 취소하는 함수들이다.

### Call Stack

> 자바스크립트 엔진은 함수를 호출하면 함수의 실행 컨텍스트를 생성하고 스택에 쌓는다. 이 스택을 콜 스택이라고 한다.

콜스택은 말그대로 스택의 형태를 가지고 있어, 마지막에 들어온 함수가 가장 먼저 실행되고, 가장 먼저 실행된 함수가 가장 마지막에 실행된다. 이 때문에 Interval과 같은 비동기 처리 함수를 실행도중에 사용자가 수동으로 요소 이벤트를 트리거 시키면 콜스택이 꼬이게 되어 반드시 이러한 현상을 막기 위해 스택 플로우를 리셋시켜주는 행위가 필요하다. (clearInterval, clearTimeout 등)

---

## 콜백 함수

> 콜백 함수는 함수의 인자로 전달되어 함수 내부에서 실행되는 함수이다. 콜백 함수는 함수의 실행이 끝난 후 실행되는 함수이다.

```javascript
forEach((item) => {
  console.log(item);
});
```

위 코드에서 `forEach` 함수는 콜백 함수를 인자로 받아 배열의 각 요소에 대해 콜백 함수를 실행한다. forEach의 인자값으로 준 콜백 함수는 배열의 각 요소를 매개변수로 받아 실행된다.
