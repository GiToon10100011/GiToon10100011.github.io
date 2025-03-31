---
layout: post
title: NPM
date: 2024-06-21 15:40:00 +0900
categories: Coding
parent: Setups
grand_parent: ETC.
---

# NPM

> Node Package Manager의 약자로, 자바스크립트 패키지 매니저이다.

`CLI(Command Line Interface)`를 통해 패키지를 설치하고 관리할 수 있다.

<a href="https://www.npmjs.com/">NPM 공식 홈페이지</a>에서 각종 요소를 찾아서 사용할 수 있다.

NPM을 사용하기 위해서는 [Node.js](/docs/node/index.html)가 설치되어 있어야 한다.

Node.js 설치는 <a href="https://nodejs.org/en">여기</a>에서 할 수 있다.

설치 버전은 LTS(Long Term Support) 버전을 설치하는 것을 권장한다.
<mark style="background: #E0E0E060;">(버전은 보통 0.0.0 형식으로 표기된다. 첫번째는 메이저 업데이트, 두번째는 마이너 업데이트, 세번째는 버그픽스를 뜻함. 20.15.0이라면 20번의 메이저 업데이트, 15번의 마이너 업데이트, 0개의 버그를 뜻함)</mark>

✅ 버전 확인

```bash
node -v
npm -v
```

위의 명령어를 통해 Node.js와 NPM의 설치여부 및 버전을 확인할 수 있다.

✅ 패키지 설치

```bash
npm i <package-name>
```

위의 명령어를 통해 패키지를 설치할 수 있다.

✅ 패키지 제거

```bash
npm uninstall <package-name>
```

---

## 자바스크립트 실행

```bash
node <filename>
```

위의 명령어를 통해 자바스크립트 파일을 실행할 수 있다.

또한, node 명령어를 통해 cli환경에서 자바스크립트 환경을 구축할수도 있다. 

```bash
node
```

위의 명령어를 통해 자바스크립트 환경을 구축할 수 있다.

![](../../../assets/images/Pasted%20image%2020250330204254.png)
