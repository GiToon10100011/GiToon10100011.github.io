---
layout: post-with-comments
title: FE의 역사
date: 2025-03-25 20:09:00 +0900
categories: Coding
parent: CS
---
## FrontEnd의 변화

Static Web Page(정적 페이지)
- HTML, CSS
- 문서를 미리 다 만들어놔서 변화가 존재하지 않음. 

Dynamic Server Web Page
- 문서를 미리 만들 수 없는 페이지 (농구 경기의 스코어 등 예측 불가한 페이지) 
- Dynamic Page / Server Page / On Demand Page
- LAMP(PHP, Linux, Apache, MySQL)
- WISA(Windows, IIS, MSSQL, ASP)
- JSP, Tomcat, MySQL, Linux 등 
- 서버사이드가 중심인 방식, DOM, JS/jQuery와 sprint/node.js, ASP 등으로 제작

Fat Client
- 기존에는 서버에서 무조건 만들어져서 오는 페이지를 봤어야함. (장바구니 아이템을 삭제할때, DB서버한테 삭제해달라고 부탁해서, 삭제된 문서를 서버측에서 받아왔어야함. )
- DOM & JS을 사용하게 됨. 
- 클라이언트의 기능이 많아져 Fat Client라고 불리게 됨. 

SPA 
- XHR(XMl & HTTP Request)
- CSV, XML, JSON으로 데이터 가공 
- AJAX

Full-Stack
- SPA를 원활하게 만들어주는 기능
- MEAN Stack, MongoDB, Express, Node, Angular
- React, Vue, Angular + spring/fastAPI/nest.js

Frontend: SSR
- SPA 정말 좋다. 하지만, SEO최적화가 안됨. (서버에서는 빈페이지만 있으니까 최ㅁ적화가 안됨.)
- Next, Nuxt(Vue), Angular Universal (가장 미래형)

100개의 페이지가 있는 프로젝트가 있다고 가정하자. 
CSR이 기반인데, SSR도 필요한 
CSR이 중심이구나.. 클라이언트 기술을 그대로 가져가서 서버관리도 할 수 있는 프레임워크들이 나오게 된 것. 

