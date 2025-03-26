---
layout: home-with-toc
title: 디자인 패턴
date: 2025-06-17 16:04:00 +0900
categories: Coding
parent: CS
---
## MVC

DOM 조작 메소드 (createElement, appendChild etc.)를 통해 만들게 되면, 일명 Spaghetti code(실타래 코드)로, 한번꼬이면 대책이 없으며 오류가 찾기 어려운 코드로 만들수밖에 없게 된다. 

이러한 문제를 없애기 위해 나온것이 MVC 코드이다. 
innerHTML과 템플릿 리터럴 방식을 사용하여 템플릿을 만들어 바인딩을 시켜주는것이 innerHTML이다. 

> MVC - Model(화면에 출력할 변수) View(모델을 컨트롤러로 조작을 하여 화면에 보이게끔 함.) Controller(모델을 조작)

즉, MVC는 각 역할(모델이면 모델, 컨트롤러면 컨트롤러, 뷰면 뷰 역할)을 세분화해서 만드는 디자인 패턴이다. 

모델이 변수를 꽃아넣을 곳, 뷰가, jsx, controller은 모델을 제어하는 함수 

Angular이 MVC의 최초 라이브러리였으며, Vue가 이후에 나옴. 

React는 MVC가 아님. Flux임. 
Model -> State라는 용어로 바뀜.

---

## Flux
