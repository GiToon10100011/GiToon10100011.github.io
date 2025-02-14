---
layout: post-with-comments
title: Firebase
date: 2024-06-21 15:39:00 +0900
categories: Coding
parent: Deployments
grand_parent: ETC.
---

# Firebase

배포를 하기 위해서는 먼저 <a href="https://firebase.google.com/" target="_blank">Firebase 홈페이지</a>에 접속하자.

|        시작하기를 누르면 프로젝트를 생성할 수 있다.        |
| :--------------------------------------------------------: |
| ![](/assets/images/etc/deployments/firebase/firebase1.png) |

|    프로젝트를 생성하면 프로젝트 설정 페이지로 이동한다.    |
| :--------------------------------------------------------: |
| ![](/assets/images/etc/deployments/firebase/firebase2.png) |

프로젝트를 제작하고 나면 프로젝트 설정 페이지로 이동한다. (이때, 구글 애널리틱스는 선택사항)

| 좌측의 사이드바에서 빌드 드롭다운을 열고 Hosting을 선택한다. |
| :----------------------------------------------------------: |
|  ![](/assets/images/etc/deployments/firebase/firebase3.png)  |

|   시작하기 버튼을 누르면 호스팅 설정 페이지로 이동한다.    |
| :--------------------------------------------------------: |
| ![](/assets/images/etc/deployments/firebase/firebase4.png) |

이후에 호스팅 설정 페이지에서 지시사항에 따라 호스팅을 설정한다.

```bash
npm install -g firebase-tools
```

로컬 컴퓨터에 firebase-tools를 전역으로 설치.
윈도우 환경이라면 명령 프롬프트를 관리자 권한으로 열어서 설치, 맥 환경이라면 sudo를 붙여서 설치.

```bash
firebase login
```

firebase 계정과 연동

```bash
firebase init

# 호스팅이라면 선택할 필요없이 다음 명령어 사용
firebase init hosting
```

프로젝트 초기화 과정

1. hosting 기능 선택 (configure files for firebase hosting and optionally setup github actions), `firebase init hosting`이라면 해당 단계는 스킵된다.

2. 호스팅할 프로젝트 선택

3. 호스팅할 프로젝트 디렉토리 선택, 빌드 폴더는 프로젝트 환경에 따라 다름.

   `public` | 빌드 도구를 따로 사용하지 않고 `MPA` 환경에서는 `public` 이름의 폴더를 만들어 지정
   `dist` | `VITE` 등과 같은 빌드 도구를 사용하는 `SPA` 환경에서는 `dist` 이름의 폴더를 만들어 지정
   `build` | `SPA`를 사용하는 환경에서는 보통 `build`로 폴더가 생성되므로 해당 폴더를 지정

4. 빌드 폴더 지정 후 호스팅 설정 파일 생성

  4-1. SPA(Single Page Application)로 배포할 것인지에 대한 여부 선택
  4-2. 깃헙과 빌드 및 호스팅 연동 여부 선택

  해당 단계들이 끝나면 지정한 프로젝트 디렉토리에 호스팅 설정 파일 등이 생성된다.

  <span style="color: violet;">MPA(Multi Page Application)환경</span>에서는 `index, 404.html`파일을 제거하고 배포할 파일들을 선택해서 해당 디렉토리에 붙여넣어야한다. 

  <span style="color: violet;">SPA환경(React, Next.js, Vue.js 등)</span>에서는 `index.html`파일을 덮어쓸 것인지 아닌지 여부를 결정하게 되는데, `No`를 눌러 기존에 우리가 빌드를 하여 만들어진 `SPA` 파일을 그대로 배포하자. 

Final. 배포

```bash
firebase deploy
```
추후에 수정사항이 생긴다면 위 명령어를 다시 입력하면 된다.
<p style="color: #aaa;">(SPA 환경이라면 빌드를 다시 하고 배포해야한다.)</p>

