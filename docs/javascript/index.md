---
layout: post
title: "Javascript"
date: 2024-12-13 12:57:43 +0900
categories: etc
has_children: true
nav_order: 3
---

# Javascript

> 일급함수를 지원하는 가벼운, 인터프리터 컴파일 프로그래밍 언어.

자바스크립트는 웹 브라우저에서 동작하는 언어이다. 따라서 웹 브라우저에서 동작하는 모든 기능을 사용할 수 있다.

자바스크립트는 DOM을 조작하는 기능을 제공한다.
DOM은 문서 객체 모델(Document Object Model)의 약자로, 웹 브라우저에서 표시되는 요소들을 객체로 표현한 것이다.

DOM은 웹 에디터에서 작성한 코드를 순서대로 웹 브라우저가 인식하고, 브라우저측에서는 전달받은 코드를 인식하기 위해 메모리 공간을 할당시켜 문서 체계화를 시킨다. 

## 연산자

- 산술 연산자 - `+ - * / %` 
- 대입 연산자 - `= += -= *= /= %=`
- 비교 연산자 - `== === != !== > < >= <=`
- 논리 연산자 - `&& || !`
- 증감 연산자 - `++ --`
- 비트 연산자 - `& | ^ ~ << >> >>>`
- 대입 연산자 - `= += -= *= /= %=`
- 삼항 연산자 - `? :`
- 문자열 연산자 - `+`
- 대입 연산자 - `= += -= *= /= %=`

## 자바스크립트 내장 함수

- `alert()`: 경고창 출력
- `confirm()`: 확인/취소 버튼 출력
- `prompt()`: 입력창 출력
- `console.log()`: 콘솔 출력

## DOM 조작 메소드

- `document.write()`: 문서 출력
- `document.getElementById()`: 요소 출력
- `document.getElementsByClassName()`: 클래스 출력
- `document.getElementsByTagName()`: 태그 출력
- `document.querySelector()`: 선택자 출력
- `document.querySelectorAll()`: 선택자 출력
- `document.createElement()`: 요소 생성
- `document.appendChild()`: 요소 추가
- `document.removeChild()`: 요소 삭제
- `document.replaceChild()`: 요소 교체
- `document.cloneNode()`: 요소 복제
- `document.getAttribute()`: 속성 출력
- `document.setAttribute()`: 속성 추가
- `document.removeAttribute()`: 속성 삭제
- `document.hasAttribute()`: 속성 존재 여부 확인
- `document.getAttributeNode()`: 속성 노드 출력
- `document.setAttributeNode()`: 속성 노드 추가
- `document.removeAttributeNode()`: 속성 노드 삭제

