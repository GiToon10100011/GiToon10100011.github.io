---
layout: home-with-toc
title: 비동기
date: 2025-04-15 16:42:00 +0900
categories: Coding
parent: CS
---

# JavaScript 비동기 처리 ⏱️

## 동기와 비동기의 개념 🔄

<mark style="background: #FFB86CA6;">JavaScript는 싱글 스레드 언어</mark>로 한 번에 하나의 작업만 처리할 수 있다. 그러나 웹 환경에서는 네트워크 요청, 타이머, 이벤트 처리 등 시간이 걸리는 작업이 많다. 이러한 작업을 처리하기 위해 JavaScript는 비동기 처리 방식을 제공한다.

| 특성        | 동기 (Synchronous)               | 비동기 (Asynchronous)                            |
| ----------- | -------------------------------- | ------------------------------------------------ |
| 실행 방식   | 순차적 실행                      | 병렬적 실행                                      |
| 코드 흐름   | 이전 작업 완료 후 다음 작업 실행 | 작업 시작 후 완료를 기다리지 않고 다음 작업 진행 |
| 작업 완료   | 직접 결과를 반환                 | 콜백, Promise, async/await 등으로 완료 알림      |
| 적합한 상황 | 간단하고 빠른 연산               | 네트워크 요청, 파일 I/O, 타이머 등               |

### 동기 처리 예시

```javascript
function doTask1() {
  console.log("Task 1");
}

function doTask2() {
  console.log("Task 2");
}

doTask1();
doTask2();

// 출력:
// Task 1
// Task 2
```

### 비동기 처리 예시

```javascript
function doTask1() {
  console.log("Task 1 시작");
  setTimeout(() => {
    console.log("Task 1 완료");
  }, 2000);
}

function doTask2() {
  console.log("Task 2");
}

doTask1();
doTask2();

// 출력:
// Task 1 시작
// Task 2
// (2초 후) Task 1 완료
```

---

## 이벤트 루프 (Event Loop) 🔄

<mark style="background: #BBFABBA6;">이벤트 루프는 JavaScript 엔진이 비동기 코드를 처리하는 메커니즘</mark>이다. JavaScript는 콜 스택, 콜백 큐(태스크 큐), 마이크로태스크 큐로 구성된 이벤트 루프를 통해 비동기 작업을 관리한다.

### 이벤트 루프의 구성 요소 ⚙️

| 구성 요소                           | 역할                                                            |
| ----------------------------------- | --------------------------------------------------------------- |
| 콜 스택 (Call Stack)                | 실행 중인 함수를 추적하는 스택 구조                             |
| 태스크 큐 (Task Queue)              | setTimeout, setInterval, I/O 등의 콜백을 저장하는 큐            |
| 마이크로태스크 큐 (Microtask Queue) | Promise 콜백 등을 저장하는 큐로, 태스크 큐보다 우선 순위가 높음 |
| 이벤트 루프                         | 콜 스택이 비었을 때 큐에서 작업을 가져와 콜 스택에 넣는 역할    |

### 작동 방식 🔍

1. <mark style="background: #D2B3FFA6;">콜 스택이 비어있는지 확인</mark>
2. 비어있다면 마이크로태스크 큐에서 작업을 가져와 실행
3. 마이크로태스크 큐가 비어있다면 태스크 큐에서 작업을 가져와 실행
4. 렌더링이 필요하다면 렌더링 수행
5. 다시 1번으로 돌아가 반복

```
┌───────────────────────┐
│        Call Stack     │
└───────────────┬───────┘
                │
                ↓
┌───────────────────────┐
│     Event Loop        │◄─────┐
└───────────────┬───────┘      │
                │               │
                ↓               │
┌───────────────────────┐      │
│   Microtask Queue     │      │
└───────────────┬───────┘      │
                │               │
                ↓               │
┌───────────────────────┐      │
│     Task Queue        │      │
└───────────────┬───────┘      │
                │               │
                └───────────────┘
```

### 태스크 큐와 마이크로태스크 큐의 차이 🔢

```javascript
console.log("시작");

setTimeout(() => {
  console.log("타임아웃 콜백");
}, 0);

Promise.resolve().then(() => {
  console.log("프로미스 콜백");
});

console.log("종료");

// 출력:
// 시작
// 종료
// 프로미스 콜백 (마이크로태스크)
// 타임아웃 콜백 (매크로태스크)
```

> <mark style="background: #FFB8EBA6;">마이크로태스크는 항상 현재 실행 중인 스크립트 또는 태스크가 완료된 직후에 실행</mark>되며, 새로운 태스크나 렌더링 전에 실행된다.

---

## 비동기 처리 방법 💡

### 1. 콜백 함수 (Callback) 📞

가장 기본적인 비동기 처리 방법으로, 작업이 완료되면 호출되는 함수를 전달한다.

```javascript
function fetchData(callback) {
  setTimeout(() => {
    const data = { name: "John", age: 30 };
    callback(data);
  }, 2000);
}

fetchData((data) => {
  console.log("데이터 받음:", data);
});
console.log("fetchData 호출 후");

// 출력:
// fetchData 호출 후
// (2초 후) 데이터 받음: { name: 'John', age: 30 }
```

#### 콜백 지옥 (Callback Hell) 🔥

콜백 함수를 중첩해서 사용할 경우 가독성이 떨어지고 코드 유지보수가 어려워진다.

```javascript
fetchUserData(function (userData) {
  fetchUserPosts(userData.id, function (posts) {
    fetchPostComments(posts[0].id, function (comments) {
      fetchCommentAuthor(comments[0].authorId, function (author) {
        console.log(author);
        // 계속되는 중첩...
      });
    });
  });
});
```

---

### 2. Promise 🤝

<mark style="background: #BBFABBA6;">Promise는 비동기 작업의 최종 완료(또는 실패)와 그 결과값을 나타내는 객체</mark>다. 콜백 지옥을 해결하고 더 나은 에러 처리를 제공한다.

#### Promise의 상태 📊

| 상태             | 설명                                        |
| ---------------- | ------------------------------------------- |
| Pending (대기)   | 초기 상태, 비동기 작업이 아직 완료되지 않음 |
| Fulfilled (이행) | 작업이 성공적으로 완료됨                    |
| Rejected (거부)  | 작업이 실패함                               |

```javascript
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;
      if (success) {
        resolve({ name: "John", age: 30 });
      } else {
        reject(new Error("데이터를 가져오는데 실패했습니다."));
      }
    }, 2000);
  });
}

fetchData()
  .then((data) => {
    console.log("데이터 받음:", data);
    return data.name;
  })
  .then((name) => {
    console.log("이름:", name);
  })
  .catch((error) => {
    console.error("에러 발생:", error);
  })
  .finally(() => {
    console.log("작업 완료");
  });

console.log("fetchData 호출 후");

// 출력:
// fetchData 호출 후
// (2초 후) 데이터 받음: { name: 'John', age: 30 }
// 이름: John
// 작업 완료
```

#### Promise 체이닝 ⛓️

Promise는 `.then()`을 통해 여러 비동기 작업을 순차적으로 처리할 수 있다.

```javascript
fetchUserData()
  .then((userData) => fetchUserPosts(userData.id))
  .then((posts) => fetchPostComments(posts[0].id))
  .then((comments) => fetchCommentAuthor(comments[0].authorId))
  .then((author) => console.log(author))
  .catch((error) => console.error("에러 발생:", error));
```

#### Promise.all과 Promise.race 🏁

| 메서드                 | 설명                                                                         | 사용 예시                   |
| ---------------------- | ---------------------------------------------------------------------------- | --------------------------- |
| `Promise.all()`        | 여러 프로미스를 병렬로 실행하고 모든 프로미스가 이행되면 결과 배열 반환      | 여러 API 요청 동시 처리     |
| `Promise.race()`       | 여러 프로미스 중 가장 먼저 완료된 결과(또는 에러) 반환                       | 타임아웃 처리               |
| `Promise.allSettled()` | 모든 프로미스가 처리될 때까지 기다린 후 결과 배열 반환 (성공/실패 모두 포함) | 여러 작업의 모든 결과 확인  |
| `Promise.any()`        | 여러 프로미스 중 가장 먼저 성공한 결과 반환                                  | 가장 빠른 성공 결과 필요 시 |

```javascript
// Promise.all 예시
Promise.all([fetch("/api/users"), fetch("/api/posts"), fetch("/api/comments")])
  .then((responses) => Promise.all(responses.map((res) => res.json())))
  .then((data) => {
    const [users, posts, comments] = data;
    console.log({ users, posts, comments });
  })
  .catch((error) => console.error("하나라도 실패하면 여기서 처리:", error));

// Promise.race 예시
const fetchWithTimeout = (url, ms) => {
  const fetchPromise = fetch(url).then((res) => res.json());
  const timeoutPromise = new Promise((_, reject) =>
    setTimeout(() => reject(new Error("시간 초과")), ms)
  );

  return Promise.race([fetchPromise, timeoutPromise]);
};
```

---

### 3. async/await ⚡

<mark style="background: #D2B3FFA6;">async/await는 Promise를 더 직관적으로 사용할 수 있게 해주는 문법적 설탕(syntactic sugar)</mark>이다. 비동기 코드를 동기 코드처럼 작성할 수 있게 해준다.

```javascript
async function getUserData() {
  try {
    const userData = await fetchUserData();
    const posts = await fetchUserPosts(userData.id);
    const comments = await fetchPostComments(posts[0].id);
    const author = await fetchCommentAuthor(comments[0].authorId);
    console.log(author);
    return author;
  } catch (error) {
    console.error("에러 발생:", error);
  } finally {
    console.log("작업 완료");
  }
}

console.log("함수 호출 전");
getUserData().then((result) => console.log("최종 결과:", result));
console.log("함수 호출 후");

// 출력:
// 함수 호출 전
// 함수 호출 후
// (비동기 작업 완료 후) 작업 완료
// 최종 결과: [author 객체]
```

#### async/await의 장점 ✨

1. <mark style="background: #FFB8EBA6;">가독성 향상</mark>: 비동기 코드를 동기 코드처럼 작성할 수 있어 더 직관적
2. <mark style="background: #FFB8EBA6;">에러 처리 간소화</mark>: try/catch 블록을 사용하여 동기 코드와 같은 방식으로 에러 처리
3. <mark style="background: #FFB8EBA6;">디버깅 용이성</mark>: 콜 스택을 유지하여 디버깅이 더 쉬움

#### 병렬 처리 최적화 ⚡

```javascript
async function getDataInParallel() {
  try {
    // 병렬로 요청 시작
    const userPromise = fetchUserData();
    const postsPromise = fetchAllPosts();

    // 두 요청이 모두 완료될 때까지 대기
    const [userData, posts] = await Promise.all([userPromise, postsPromise]);

    console.log("사용자:", userData);
    console.log("포스트:", posts);
  } catch (error) {
    console.error("에러 발생:", error);
  }
}
```

---

## 비동기 처리 방식 비교 📊

| 방식        | 장점                          | 단점                        | 적합한 상황             |
| ----------- | ----------------------------- | --------------------------- | ----------------------- |
| 콜백 함수   | 간단한 구현                   | 콜백 지옥, 에러 처리 어려움 | 간단한 비동기 작업      |
| Promise     | 체이닝 가능, 에러 처리 개선   | 여전히 다소 복잡한 구문     | 여러 단계의 비동기 작업 |
| async/await | 직관적인 코드, 쉬운 에러 처리 | 오래된 환경 지원 문제       | 복잡한 비동기 흐름 제어 |

---

## 실전 예제: API 호출 🌐

### fetch와 async/await 활용

```javascript
async function fetchUserProfile(userId) {
  try {
    // 사용자 정보 가져오기
    const userResponse = await fetch(`/api/users/${userId}`);
    if (!userResponse.ok)
      throw new Error("사용자 정보를 가져오는데 실패했습니다.");
    const userData = await userResponse.json();

    // 사용자의 포스트 가져오기
    const postsResponse = await fetch(`/api/users/${userId}/posts`);
    if (!postsResponse.ok) throw new Error("포스트를 가져오는데 실패했습니다.");
    const posts = await postsResponse.json();

    return {
      user: userData,
      posts: posts,
    };
  } catch (error) {
    console.error("프로필 로딩 중 오류:", error);
    throw error; // 에러를 호출자에게 전파
  }
}

// 사용 예시
document.getElementById("loadProfile").addEventListener("click", async () => {
  try {
    const profileData = await fetchUserProfile(123);
    renderProfile(profileData);
  } catch (error) {
    showErrorMessage(error.message);
  }
});
```

---

## 마무리 📝

JavaScript에서 <mark style="background: #BBFABBA6;">비동기 프로그래밍은 성능 향상과 반응성 있는 사용자 경험을 위해 필수적</mark>이다. 콜백 함수부터 시작하여 Promise, async/await로 발전하면서 비동기 코드의 가독성과 유지보수성이 크게 향상되었다.

이벤트 루프의 작동 방식을 이해하면 비동기 코드의 실행 순서를 더 잘 예측할 수 있고, 마이크로태스크와 매크로태스크의 차이점을 알면 더 효율적인 코드를 작성할 수 있다.

비동기 프로그래밍은 처음에는 어렵게 느껴질 수 있지만, 기본 개념을 이해하고 충분한 연습을 통해 자연스럽게 습득할 수 있는 기술이다.
