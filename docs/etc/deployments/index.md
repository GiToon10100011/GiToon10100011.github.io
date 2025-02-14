---
layout: post
title: Deployments
date: 2025-02-09 21:10:00 +0900
categories: Coding
has_children: true
parent: ETC.
---

# 배포

> 다양한 플랫폼에 웹사이트를 배포하는 방법을 정리해둔 페이지.

배포 전에는 항상 디버깅을 꼼꼼하게 하는 것을 잊지말자!
호스팅 - 서버에 데이터를 업로드하는 작업

## 배포 플랫폼

고전 방식

- `filezilla` - FTP(File Transfer Protocol) 프로토콜을 사용하는 파일 전송 프로그램, 데이터를 올릴 수 있는 가상의 서버를 필요로하여 닷홈으로 도메인을 얻어 업로드하는 방식으로 많이 사용됐음.
- `dothome`
- `cafe24`

현대 방식 (각 플랫폼의 배포법을 자세히 알아보고 싶다면 클릭)

- [`firebase`](/docs/etc/deployments/firebase.html) - 클라우드 서비스
- [`netlify`](/docs/etc/deployments/netlify.html) - 서버리스 플랫폼
- [`aws`](/docs/etc/deployments/aws.html) - 클라우드 서비스
- [`vercel`](/docs/etc/deployments/vercel.html) - `Next.js` 환경에 최적화된 서버리스 플랫폼

---

## OpenGraph

> 웹 페이지의 메타데이터를 정의하는 표준 형식

`opengraph`는 웹 페이지의 제목, 설명, 이미지 등을 정의하는 데 사용되는 표준 형식이다. 배포 후, 웹 페이지의 메타데이터를 정의하는 데 사용된다.

`opengraph`의 등장을 통해 디자인을 미리보기(썸네일) 할 수 있으며, 어떤 내용의 컨텐츠인지 미리 알 수 있게 됐다. opengraph 사용시에는 항상 content 속성값이 들어간다.

```html
<head>
  <!-- 사이트 제목(미리보기에서 보이는 제목) -->
  <meta property="og:title" content="웹 페이지 제목" />
  <!-- 사이트 설명(미리보기에서 보이는 설명) -->
  <meta property="og:description" content="웹 페이지 설명" />
  <!-- 사이트 썸네일 -->
  <meta property="og:image" content="웹 페이지 이미지" />
</head>
```

⚠️ **주의사항**

`opengraph`에서는 상대경로를 지원하지 않게 되어 `http/https` 프로토콜로 시작하는 절대경로가 필요하게 됨. 이에 따라 이미지를 먼저 서버에 올리는 작업이 필요하게 됨.

이미지나 동영상을 그럼 cafe24를 통해 호스팅 후 절대경로로 사용하자.

### 🎯 cafe24 파일 업로더 사용법

```
쇼핑몰 만들기 → 회원가입 → 디자인 → 파일업로더 → 좌측 피일 대시보드에서 폴더 추가 
→ 추가한 폴더 내에 이미지 첨부 → 사용할때는 하단의 파일 대시보드에서 주소 복사 후 html파일에서 content 속성 값에 넣기
```

