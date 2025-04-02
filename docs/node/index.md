---
layout: home-with-toc
title: Node.js
date: 2024-12-21 15:40:00 +0900
categories: Coding
has_children: true
---

# Node.js

> 자바스크립트 런타임 환경으로, 자바스크립트를 브라우저 뿐만 아니라 외부환경에서도 사용할 수 있게 하기 위해 등장하게 됐다.

서버 환경에서 자바스크립트를 실행할 수 있게 해주는 자바스크립트 실행 환경이다.
구글 크롬의 V8 자바스크립트 엔진의 등장으로 자바스크립트의 성능이 향상되었고, 이를 통해 Node.js가 등장하게 되었다.

기존의 자바스크립트는 DOM만을 조작할 수 있었지만, Node.js는 C, C++, 자바 등 다른 언어들 기반의 파일 시스템, 소켓, HTTP 등 다양한 기능을 제공하여 서버 프로그램도 만들 수 있으며, 다목적 언어의 특징을 가지고 있다.

Node.js 환경을 구축하기 위해서는 NPM(Node Package Manager)을 사용한다.
NPM은 Node.js의 패키지 매니저로, 패키지를 설치하고 관리할 수 있다.

Node.js 및 NPM 설치는 [여기](/docs/etc/setup/npm.html)에서 참고하자.

## Node.js의 특징

Node.js가 등장한 이후, JS는 두가지 플랫폼 모두를 다룰 수 있게 되었다.

1. Node.js(Backend)
2. DOM Tree(Frontend)

이벤트 모델을 사용하는 자바스크립트 환경에서는 스레드를 하나만 사용한다. (메모리 사용의 효율이 극대화됨)

처음에는 스레드를 하나 사용하는것에 의구심을 가졌지만, 아래의 자료에서 보이듯, 스레드를 남발하는 apache와 비교했을때, 스레드를 하나만 사용하는 nginx가 동시 접속자가 많아져도 메모리 사용률이 똑같(사람들을 한줄로 쭉 세움)으며, 요청 처리율이 매우 향상된 것을 확인할 수 있다.

|                     동시 접속자 처리 수                      |
| :----------------------------------------------------------: |
| ![](../../assets/images/Pasted%20image%2020250331085835.png) |

|                           처리속도                           |
| :----------------------------------------------------------: |
| ![](../../assets/images/Pasted%20image%2020250331090218.png) |

Node.js의 event-driven programming

이벤트 모델을 사용하는 자바스크립트 환경에서는 스레드를 하나만 사용한다.
나의 코드는 기본적으로 ui스레드에 속함. ui스레드가 멈춘다면, 사용자의 상호작용이 아예 작용하지 않게 되므로 반드시 지속적으로 스레드가 돌아가야한다.

> 여기서 스레드란 프로세스 내에서 실행되는 흐름의 단위로, [여기](/docs/javascript/function/async.html#thread)서 더 자세히 확인해볼 수 있다.

자바스크립트를 만든회사인 Netscape는 Navigator이라는 브라우저를 만들었었다.
하지만 해당 브라우저는 사용자의 입출력을 받을 때, 아래와 같은 문제점이 생겼다.

제출 버튼을 광클 -> 서버 프로세스가 계속해서 생김 -> 컴 성능이 너무 느려짐`
이러한 문제 때문에 인젝션이나 DDoS 공격에 너무 취약했다.

이때문에 유효성 검사가 필요해져서 이것이 바로 자바스크립트가 탄생하게 된 계기가 됐다.
최초엔 연산이나 그런 복잡한 작업이 아니라 단순히 제어를 위해 탄생하여, 폼 객체 api를 제공한다.

---

## Node 제공 기본 API

> Crypto, Debugger, DNS, Events, File system, HTTP등...

NodeJS는 다양한 입출력 API들을 모듈형식으로 붙일 수 있게 해주는 환경이다. express, mongo, parser, compression, ejs ... 등 다양한 오픈소스 모듈들이 존재한다.
기본적으로 노드는 모듈이 동기적으로 작동한다. 이때문에 blocking이 되는 코드들이 많아져, 비동기 방식의 api를 사용할 수 있다.

비동기 방식의 api 사용법을 알아보기 전에, 모듈 사용법을 먼저 알아보고 가자.
Node.js에서는 모듈을 사용할때 이전에는 파일간의 고립화가 안되어 변수들이 충돌하는 것과 같은 문제들이 발생했다. 이러한 문제를 해결하기 위해 반드시 가져와야하는 시스템과, 고립화가 가능한 시스템이 있어야했다.

1. AMD (Asynchronous Module Definition)
2. CommonJS

이에 따라 2가지 솔루션이 나왓고, CommonJS를 사용하게 됐다.
ES6이후로는 ESM 모듈 시스템을 사용하게 된다. 하지만, 여전히 CJS를 사용하는 라이브러리들이 많아, 서로간의 호환이 안될 수 있어 양측의 사용법을 모두 확인해보자.

### CommonJS

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

### ESM

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

ESM은 내보내는 방법이 2가지로, 기본값으로 내보내고 싶을 때는 `export default`를 사용하고, 기본값으로 내보낸 값을 가져올때는 `import 임의의 이름 from 경로`를 사용하고, 이름을 붙여서 가져오고 싶을 때는 `import { 이름 } from "경로"` 와 같이 사용한다.

---

그렇다면 이제 비동기 방식의 api를 사용해보자.
File System 모듈을 예시로 보자.

기존의 동기 방식의 코드를 먼저 확인해보자.

```js
const fs = require("fs");
//readFileSync는 동기형 함수이다.
const data = fs.readFileSync("example.txt", "utf8");
console.log(data);
```

<span style="color:rgb(143, 143, 143)">참고로, 파일을 실행시, 실행한 위치에 해당 파일이 존재해야하기 때문에 해당 파일의 루트디렉토리 이외의 경로에서 실행하게 되면 작동하지 않는다는 것을 유의하자. </span>

위의 코드는 동기 방식의 api를 사용하여, 파일을 읽는 작업이 끝나면 콜백 함수가 실행된다.  
~~<span style="color:rgb(143, 143, 143)">해당 코드는 보통 백준환경에서 코테를 node.js로 풀때 사용된다.</span>~~

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

위의 코드는 비동기 방식의 api를 사용하여, 파일을 읽는 작업이 끝나면 콜백 함수가 실행된다. 위와 같이 Callback을 이용하여 비동기 api를 사용할 수도 있지만, Promise를 이용한 방법도 있다.

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
## NPM(Node Package Manager)

> 모듈은 코드를 나눈 라이브러리 시스템이다.

kik, left-pad, npm사건
당시엔 npm에 versioning이 없어, 이름을 바꿔서 올리면 전부 에러가 발생하여 버져닝, 올릴때 반드시 버전을 업데이트 해야하는 규율이 생기게 됐다.

Node.js의 가장 강력한 힘은 노드 모듈을 쉽게 만들고 공유할 수 있다는 점이다.
파일입력/출력/HTTP 처리 등을 위한 코드

자바스크립트는 다중목적을 위해 만듦(배치파일도 만들 수 있고, 게임도 만들 수 있고, 객체지향도 가능하고, 함수형 프로그래밍도 가능하고)... 이러한 자유도가 협업때 해침.
반대로 자바는, 객체지향을 위해 나온 단일 목적의 언어로, 타입 안정성이 뛰어나다.

fs모듈(file system)
파일을 읽는 시스템
Promise, Callback, Synchronous API와 같은 비동기를 위한 api를 사용한다. 동기 api는 반드시 비동기안에서만 사용 (await)
fs는 빌트인 api중 하나이다.

빌트인 api 목록중에서는

모듈화, 번들링, 노드 프로젝트가 node.js의 key이다.

스크립트 수준에서 제공하는 모듈이 없었다.
고립된 영역이 존재하지 않아 변수명, 함수명 등의 이름 충돌이 발생하여 고립화가 가능한 모듈 시스템이 필요했었다.

모듈을 사용할때는 반드시 가져와야하는 시스템과, 고립화가 가능한 시스템이 있어야했음.

AMD (Asynchronous Module Definition)
CommonJS

2가지 솔루션이 나왓고, CommonJS를 사용하게 됐다. (ES6부터는 ESM을 사용하게 됨.)

CJS로 만든 라이브러리는 ESM형태로 거의 사용이 안된다.

npm에서 함수를 사용할때 반환값을 출력시키려는 습성을 가지고 있어, 해당 메소드가 void의 반환값을 가진다면, undefined가 출력된다.

```js
//app.js
console.log(module2.hello());

//newlec-hello/index.js
var msg = "Hello Javascript";
exports.hello = function () {
  console.log(msg);
};
```

hello함수 내에 반환값을 넣으면 반환값이 정상적으로 출력될 것이다.

---

## 외부 라이브러리

NPM(Node Project Package Manager)

예약어와 사용자가 정의한 이름이 존재. 그래서 npm run 중 run을 생략해서 실행할 수 있는 몇가지 키워드들이 있다.

start, test, stop, restart, install, version, publish등이 있다.

모듈은 라이브러리만 모듈이 아니라, 개발 도구도 모듈이다.

### Node상에서의 웹 개발 환경

Windows는 C, C++, Visual Basic, JScript를 통해 만들어짐. 그래서 javascript api가 내장되어 있음. 이때문에 로컬 환경에서 js를 실행하는것은 위험하며, 랜섬웨어 감염확률이 존재한다.

Bundler

CSS, JS 등을 번들로 만들어 빌드 시켜주는 도구

Webpack
webpack은 전용 dev-server가 있어 해당 서버를 사용하는것이 더 좋다.
번들링이나 빌드 후에나 dev-server을 사용할 수 있는 것을 주의하자.
webpack은 4.0.0 부터 기본값 설정이 존재하여, 따로 config 파일이 필요없어졌다.
webpack은 기본적으로 src내의 자바스크립트 파일을 가져와서 번들링을 하려고한다. config파일이 필요없다했지, 규칙은 지켜야한다.

모듈 시스템
