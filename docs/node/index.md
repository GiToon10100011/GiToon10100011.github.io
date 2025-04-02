---
layout: home-with-toc
title: Node.js
date: 2024-12-21 15:40:00 +0900
categories: Coding
has_children: true
---

# Node.js 🚀

> 자바스크립트 런타임 환경으로, 자바스크립트를 브라우저 뿐만 아니라 외부환경에서도 사용할 수 있게 하기 위해 등장하게 됐다.

서버 환경에서 자바스크립트를 실행할 수 있게 해주는 자바스크립트 실행 환경이다.
구글 크롬의 V8 자바스크립트 엔진의 등장으로 자바스크립트의 성능이 향상되었고, 이를 통해 Node.js가 등장하게 되었다.

기존의 자바스크립트는 DOM만을 조작할 수 있었지만, Node.js는 C, C++, 자바 등 다른 언어들 기반의 파일 시스템, 소켓, HTTP 등 다양한 기능을 제공하여 서버 프로그램도 만들 수 있으며, 다목적 언어의 특징을 가지고 있다.

Node.js 환경을 구축하기 위해서는 NPM(Node Package Manager)을 사용한다.
NPM은 Node.js의 패키지 매니저로, 패키지를 설치하고 관리할 수 있다.

Node.js 및 NPM 설치는 [여기](/docs/etc/setup/npm.html)에서 참고하자.

## Node.js의 특징 🔍

Node.js가 등장한 이후, JS는 두가지 플랫폼 모두를 다룰 수 있게 되었다.

1. Node.js(Backend)
2. DOM Tree(Frontend)

### 이벤트 기반 프로그래밍 ⚡

이벤트 모델을 사용하는 자바스크립트 환경에서는 <mark style="background: #BBFABBA6;">스레드를 하나만 사용</mark>한다. (메모리 사용의 효율이 극대화됨)

처음에는 스레드를 하나 사용하는것에 의구심을 가졌지만, 아래의 자료에서 보이듯, 스레드를 남발하는 apache와 비교했을때, 스레드를 하나만 사용하는 nginx가 동시 접속자가 많아져도 메모리 사용률이 똑같(사람들을 한줄로 쭉 세움)으며, 요청 처리율이 매우 향상된 것을 확인할 수 있다.

|                     동시 접속자 처리 수                      |
| :----------------------------------------------------------: |
| ![](../../assets/images/Pasted%20image%2020250331085835.png) |

|                           처리속도                           |
| :----------------------------------------------------------: |
| ![](../../assets/images/Pasted%20image%2020250331090218.png) |

이벤트 모델을 사용하는 자바스크립트 환경에서는 스레드를 하나만 사용한다.
코드는 기본적으로 UI 스레드에 속한다. UI 스레드가 멈춘다면, 사용자의 상호작용이 불가능해지므로 반드시 스레드가 지속적으로 실행되어야 한다.

> 여기서 스레드란 프로세스 내에서 실행되는 흐름의 단위로, [여기](/docs/javascript/function/async.html#thread)서 더 자세히 확인해볼 수 있다.

### 자바스크립트의 탄생 배경 📜

자바스크립트를 만든 회사인 Netscape는 Navigator라는 브라우저를 개발했다. 하지만 해당 브라우저는 사용자의 입출력을 받을 때 다음과 같은 문제점이 발생했다.

`제출 버튼 광클 → 서버 프로세스가 계속 생성 → 성능 저하`

이러한 문제로 인해 인젝션이나 DDoS 공격에 매우 취약했다. 이런 문제를 해결하기 위해 유효성 검사가 필요해졌고, 이것이 자바스크립트가 탄생하게 된 계기가 되었다. 최초에는 복잡한 연산보다는 단순한 제어를 위해 탄생하여 폼 객체 API를 제공했다.

---

## Node 제공 기본 API 📦

> Crypto, Debugger, DNS, Events, File system, HTTP 등...

NodeJS는 다양한 입출력 API들을 모듈형식으로 사용할 수 있는 환경이다. `express, mongo, parser, compression, ejs` 등 다양한 오픈소스 모듈들이 존재한다.

기본적으로 노드는 모듈이 동기적으로 작동한다. 이로 인해 blocking이 발생하는 코드들이 많아져, 비동기 방식의 API를 사용할 수 있다.

## 모듈 시스템 🧩

Node.js에서는 모듈을 사용할 때 이전에는 파일 간 고립화가 되지 않아 변수 충돌과 같은 문제가 발생했다. 이러한 문제를 해결하기 위해 다음과 같은 모듈 시스템이 등장했다:

1. AMD (Asynchronous Module Definition)
2. CommonJS

이 중 CommonJS가 채택되었고, ES6 이후로는 ESM 모듈 시스템을 사용하게 되었다. 하지만 여전히 CJS를 사용하는 라이브러리들이 많아 호환성 문제가 발생할 수 있다.

### CommonJS vs ESM 비교 ⚖️

| 특징 | CommonJS | ESM |
|------|----------|-----|
| 구문 | `require()`, `module.exports` | `import`, `export` |
| 로딩 방식 | 동기적 | 비동기적 |
| 호환성 | 기존 Node.js | 최신 브라우저, Node.js |
| 확장자 | .js | .mjs 또는 .js (package.json에 "type": "module" 필요) |

### CommonJS 사용법

```js
//app.js
// 새로 만들어서 내보내고 싶을때
module.exports = {
  name: "John",
  age: 30,
};

// 이미 만들어둔것을 내보내고 싶을때
function add() {
  return x + y;
}

exports.add = add; // {add : add}와 같음

//가져올때
let module1 = require("./app.js");
```

위의 코드는 현재 파일에서 모듈을 내보내는 방법이다.
선언해둔 변수나 함수를 내보내고 싶으면 `exports.변수명 = 변수명` 과 같이 내보내면 된다. 직접적으로 바로 내보내고 싶으면 `module.exports = 변수명` 과 같이 내보내면 된다.
가져올때는 해당 파일의 경로를 적어주면 된다. 만약, index라는 이름으로 스크립트가 작성됐다면, .js를 생략하고 파일명만 적어주면 된다.

```js
//newlec-hello/index.js
var msg = "Hello Javascript";
exports.hello = function () {
  console.log(msg);
};

// app.js
let module2 = require("./newlec-hello");
```

### ESM 사용법

```js
//내보내고 싶을 때
export const add = (a, b) => a + b;

//기본값으로 내보내고 싶을 때
export default function hello() {
  console.log("Hello");
}

//app.js
import hi, { add } from "./app.js";
console.log(hi()); // Hello
```

ESM은 내보내는 방법이 2가지이다:
1. <mark style="background: #BBFABBA6;">`export default`</mark> - 기본값으로 내보내기
2. <mark style="background: #BBFABBA6;">`export 이름`</mark> - 이름을 붙여서 내보내기

기본값으로 내보낸 값을 가져올 때는 `import 임의의이름 from 경로`, 이름을 붙여서 가져올 때는 `import { 이름 } from "경로"` 형태로 사용한다.

---

## 비동기 API 사용 예제 ⏱️

File System 모듈을 예시로 살펴보자.

### 비동기 처리 방식 비교

| 방식 | 특징 | 코드 패턴 |
|------|------|----------|
| 동기 방식 | 코드 실행이 완료될 때까지 대기 | `const data = fs.readFileSync()` |
| 콜백 기반 | 작업 완료 시 콜백 함수 실행 | `fs.readFile(path, (err, data) => {})` |
| Promise 기반 | Promise 객체를 반환, 체이닝 가능 | `fs.promises.readFile().then()` |
| Async/Await | 동기 코드와 유사한 가독성 | `const data = await fs.promises.readFile()` |

### 동기 방식

```js
const fs = require("fs");
//readFileSync는 동기형 함수이다.
const data = fs.readFileSync("example.txt", "utf8");
console.log(data);
```

<span style="color:rgb(143, 143, 143)">참고로, 파일을 실행시, 실행한 위치에 해당 파일이 존재해야하기 때문에 해당 파일의 루트디렉토리 이외의 경로에서 실행하게 되면 작동하지 않는다는 것을 유의하자.</span>

### 콜백 기반 비동기 방식

```js
const fs = require("fs");

fs.readFile("example.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }
  console.log("File content:", data);
});
```

### Promise 기반 비동기 방식

```js
const fs = require("fs/promises");

async function readFileAsync() {
  try {
    const data = await fs.readFile("example.txt", "utf8");
    console.log("File content:", data);
  } catch (err) {
    console.error("Error reading file:", err);
  }
}

readFileAsync();
```

---

## NPM (Node Package Manager) 📦

> NPM은 자바스크립트 패키지 매니저로, 코드를 모듈화하여 라이브러리 시스템으로 관리한다.

### NPM의 중요성

Node.js의 가장 강력한 특징 중 하나는 노드 모듈을 쉽게 만들고 공유할 수 있다는 점이다. 파일 입출력, HTTP 처리 등을 위한 다양한 코드 모듈을 npm을 통해 쉽게 관리할 수 있다.

### NPM 라이프사이클 스크립트 ⚙️

NPM에서는 특정 키워드들이 예약어로 지정되어 있어, `npm run` 없이도 실행할 수 있다.

| 키워드 | 기능 |
|--------|------|
| `start` | 애플리케이션을 실행하는 스크립트. `npm start` 명령어로 실행. 일반적으로 `node index.js` 와 같이 애플리케이션의 진입점을 실행. |
| `test` | 테스트를 실행하는 스크립트. `npm test` 명령어로 실행. 테스트 프레임워크 실행 명령어 (예: mocha, jest) 를 지정. |
| `stop` | 애플리케이션을 중지하는 스크립트. `npm stop` 명령어로 실행. |
| `restart` | 애플리케이션을 재시작하는 스크립트. `npm restart` 명령어로 실행. 일반적으로 stop 스크립트와 start 스크립트를 순차적으로 실행. |
| `install` | 패키지를 설치할 때 실행되는 스크립트. `npm install` 명령어로 실행. |
| `version` | 패키지 버전을 업데이트할 때 실행되는 스크립트. `npm version` 명령어로 실행. |
| `publish` | 패키지를 npm 저장소에 게시할 때 실행되는 스크립트. `npm publish` 명령어로 실행. |

### 커스텀 스크립트 작성하기 ✏️

package.json에 스크립트를 추가해서 사용할 수 있다.

```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "firebase deploy",
  "dev": "webpack-dev-server",
  "build": "webpack --mode production",
  "lint": "eslint src/**/*.js"
}
```

<mark style="background: #BBFABBA6;">`pre`</mark> 접두어가 붙은 스크립트는 직접 입력이 아닌, 커스텀 스크립트 실행 이전에 자동으로 실행된다. 

예를 들어, `npm run deploy` 명령어를 실행하면, `predeploy` 스크립트가 먼저 실행되고, 그 다음 `deploy` 스크립트가 실행된다.

```json
"scripts": {
  "preprod": "npm run build",
  "prod": "npm start"
}
```

### 모듈의 반환값 처리 ⚠️

npm에서 함수를 사용할 때 반환값을 출력하려는 특성이 있어, 해당 메소드가 <mark style="background: #D2B3FFA6;">void 반환값을 가진다면 undefined가 출력</mark>된다.

```js
//app.js
console.log(module2.hello());

//newlec-hello/index.js
var msg = "Hello Javascript";
exports.hello = function () {
  console.log(msg);
};
```

hello함수에 반환값을 추가하면 정상적으로 반환값이 출력될 것이다.

---

## 웹 개발 도구 🛠️

> [여기](/docs/etc/setup/npm.html)에서 말했듯이, 웹개발도구는 -D 플래그를 사용하여 설치하는것이 좋으며, npx로 즉시 실행할 수도 있다. 

### Bundler

CSS, JS 등을 번들로 만들어 빌드 시켜주는 도구이다.

#### Webpack

`npx webpack` 명령어로 실행한다.

webpack의 주요 특징:
- 전용 dev-server를 제공하여 개발 환경을 향상시킨다
- 번들링/빌드 후에야 dev-server를 사용할 수 있다
- webpack 4.0.0부터 기본값 설정이 제공되어 별도의 config 파일이 필요 없다
- 기본적으로 src 디렉토리 내의 자바스크립트 파일을 번들링한다

### HTTP-Server

개발용 웹서버로, 간단한 정적 파일 서비스를 제공한다.

```bash
npm install -g http-server
http-server ./dist
```
