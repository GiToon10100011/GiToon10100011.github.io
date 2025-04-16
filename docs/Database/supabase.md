---
layout: home-with-toc
title: Supabase
date: 2025-04-15 10:57:00 +0900
categories: Coding
parent: Database
---

# Supabase 🚀

> PostgreSQL DB 기반의 서버리스 데이터베이스 서비스

서버리스 백엔드가 필요한 경우 Supabase나 Firebase와 같은 BaaS(Backend as a Service)를 사용할 수 있다.

📎 공식 사이트: https://supabase.com/

## Supabase 특징 ✨

| 기능           | 설명                                       |
| -------------- | ------------------------------------------ |
| 데이터베이스   | PostgreSQL 기반의 관계형 데이터베이스 제공 |
| 인증(Auth)     | 이메일/소셜 로그인 등 인증 시스템 내장     |
| 스토리지       | 파일 저장 및 관리 기능                     |
| API            | RESTful 및 GraphQL API 자동 생성           |
| Edge Functions | 서버리스 함수 실행 환경                    |

<mark style="background: #D2B3FFA6;">Supabase의 Authentication을 사용하면 별도로 회원 테이블을 구현할 필요 없이 완전한 인증 시스템을 구축</mark>할 수 있다.

## 프로젝트 시작하기 🏁

1. Supabase에서는 New Organization으로 팀별로 조직을 만들기
2. New Project로 특정 팀 내에 프로젝트 생성하기

=<img src="../../assets/images/Pasted%20image%2020250401141314.png" alt="Supabase 프로젝트 생성" width="600">

> ⚠️ **주의사항**: 무료 티어는 프로젝트를 2개만 사용할 수 있으며, 무료 티어로 생성한 프로젝트는 일정 기간 이후 접근이 제한될 수 있다.

## 데이터베이스 관리 💾

### 테이블 생성하기

Table Editor에서 테이블을 생성할 수 있다.

<img src="../../../assets/images/Pasted%20image%2020250401141907.png" alt="Table Editor" width="600">

#### 데이터 타입 선택 🔤

Supabase에서 제공하는 자료형은 PostgreSQL 자료형을 기반으로 한다.

| 데이터 타입 | 설명                       | 사용 예시                                                       |
| ----------- | -------------------------- | --------------------------------------------------------------- |
| text        | 무제한 길이 텍스트         | 본문, 설명 등                                                   |
| varchar     | 최대 길이 지정 가능 텍스트 | 사용자명, 제목 등                                               |
| int4        | 4바이트 정수               | 일반적인 ID 값                                                  |
| int8        | 8바이트 정수               | <mark style="background: #BBFABBA6;">대량 데이터의 ID 값</mark> |
| timestamp   | 날짜와 시간                | 생성일, 수정일 등                                               |
| boolean     | 참/거짓 값                 | 활성화 상태 등                                                  |
| jsonb       | JSON 데이터                | 설정, 메타데이터 등                                             |

<img src="../../../assets/images/Pasted%20image%2020250401142616.png" alt="데이터 타입 설정" width="600">

#### 컬럼 속성 설정 ⚙️

- <mark style="background: #BBFABBA6;">Nullable 여부 설정</mark> (기본값은 nullable)
- 코드 컨벤션으로 스네이크 표기법(언더바) 사용 권장
- 주키(Primary Key) 설정 시 식별자로 사용 여부 지정
- 대량의 데이터가 예상되면 int8 선택 (int4는 용량이 부족할 수 있음)

<img src="../../../assets/images/Pasted%20image%2020250401145604.png" alt="컬럼 속성 설정" width="600">

#### 외래키 설정 🔗

외래키는 테이블 하단에서 추가하거나, 각 열의 링크 아이콘을 클릭하여 추가할 수 있다.

**설정 시 주의사항:**

- ✅ 외래키 설정 전 참조할 엔티티가 먼저 생성되어 있어야 함
- ✅ 참조하는 타입과 참조되는 타입 일치 필요
- ✅ public은 기본 스키마 영역으로 사용

**외래키 액션 유형:**

| 액션 유형 | 설명                                                      | 사용 상황      |
| --------- | --------------------------------------------------------- | -------------- |
| CASCADE   | 부모 레코드 삭제 시 연결된 자식 레코드도 함께 삭제        | 강한 종속 관계 |
| SET NULL  | 부모 레코드 삭제 시 자식 레코드의 참조 필드를 NULL로 설정 | 약한 종속 관계 |
| NO ACTION | 참조 무결성을 유지하기 위해 부모 레코드 삭제 불가         | 중요 참조 관계 |

> 💡 **추천**: <mark style="background: #ABF7F7A6;">UPDATE는 CASCADE로, DELETE는 NO ACTION이나 SET NULL로 설정하는 것이 권장</mark>된다.

### 데이터 관리 📊

데이터 삽입 화면:

<img src="../../../assets/images/Pasted%20image%2020250401145752.png" alt="데이터 삽입 화면" width="600">

### 제약조건 설정 🛡️

<img src="../../../assets/images/Pasted%20image%2020250401151549.png" alt="제약조건 설정" width="200">

SQL Editor를 통해 제약조건을 추가할 수 있다:

<img src="../../../assets/images/Pasted%20image%2020250401151610.png" alt="SQL Editor" width="600">

> 💡 CHECK 제약조건은 프론트엔드에서도 검증 가능하므로 적절히 사용하는 것이 좋다. UI 변경 시 유지보수 비용을 고려하라.

### 데이터베이스 다이어그램 📊

Database 메뉴에서 ERD(Entity-Relationship Diagram) 다이어그램을 확인할 수 있다:

<img src="../../../assets/images/Pasted%20image%2020250401153444.png" alt="ERD 다이어그램" width="600">

## API 활용하기 🔌

Next.js와 같은 프레임워크에서 Supabase를 접근하여 데이터를 관리할 수 있다. 팀 내에서는 한 명만 Supabase 프로젝트를 만들고 API 키를 공유하는 것이 효율적이다.

<img src="../../../assets/images/Pasted%20image%2020250401161140.png" alt="API 활용" width="600">

API Docs에서 curl 명령이나 JavaScript 코드 예제를 확인할 수 있다:

- 🐚 curl은 유닉스 환경(git bash, zsh 등)에서 사용
- 🔑 Settings -> API에서 Project API Keys의 anon 키를 클라이언트에서 사용

<img src="../../../assets/images/Pasted%20image%2020250401162043.png" alt="API 키 설정" width="600">

## 데이터 무결성과 제약조건 🔒

테이블에는 결함 데이터(무결성을 해치는 데이터)가 쌓일 수 있다. 이를 방지하기 위해 도메인, 엔티티, 관계 단위의 제약조건을 설정한다.

### 제약조건 유형

| 제약조건 단위 | 설명                            | 예시                     |
| ------------- | ------------------------------- | ------------------------ |
| 도메인        | 컬럼/필드의 유효한 값 범위 설정 | NOT NULL, CHECK, DEFAULT |
| 엔티티        | 테이블 레코드의 식별성 보장     | PRIMARY KEY, UNIQUE      |
| 관계          | 테이블 간 참조 무결성 유지      | FOREIGN KEY              |

### 도메인 단위의 제약조건 📏

> <mark style="background: #BBFABBA6;">모든 속성은 각자 유효한 값의 형태를 가지고 있어야 한다.</mark>

도메인은 컬럼/필드/속성을 의미하며, 각 컬럼에 올바른 값이 설정되도록 한다:

- **필수 컬럼**: 데이터 입력 시 반드시 값을 지정해야 함
- **조건부 컬럼**: 선택적으로 값을 지정할 수 있음

**제약조건 종류:**

1. **NOT NULL**: 필수 컬럼에 데이터가 없으면 에러 발생
2. **DEFAULT**: 값을 지정하지 않을 때 기본값 설정 (예: has_ice, price 등)
3. **CHECK**: 컬럼 값의 범위 제한 (예: price가 100~100,000 사이)

### 엔티티 단위의 제약조건 🏷️

> <mark style="background: #D2B3FFA6;">엔티티는 식별이 불가능하면 결함이다.</mark>

1. **PRIMARY KEY**: 각 레코드를 고유하게 식별하는 키
2. **UNIQUE KEY**: 특정 컬럼(이메일, 아이디 등)의 값이 중복되지 않도록 함

### 관계 단위의 제약조건 🔄

> <mark style="background: #FFB86CA6;">참조 무결성은 테이블 간 관계의 일관성을 유지한다.</mark>

관계형 데이터베이스에서는 테이블 간 참조 관계가 유지되어야 한다. 자식 테이블이 존재하지 않는 부모를 참조하면 관계에 결함이 생긴다.

테이블 간의 관계는 논리적으로 하나의 큰 테이블을 분할한 것으로 볼 수 있으므로, 참조 관계가 깨지면 데이터 일관성이 손상된다.

## 실무 활용 팁 💡

- 📚 API 문서를 참고하여 쿼리를 작성하는 것이 효율적이다
- 🔗 URL은 1000자 내외로 간결하게 작성하라 (쿼리스트링 파라미터도 간결하게: q(쿼리), p(페이지), c(카테고리) 등)
- 🌐 쿼리스트링은 화면 상태를 결정하는 변수로, 제거 시 기본 상태로 돌아간다
- 🔐 프로덕션 환경에서는 anon 키의 보안에 주의하고, 서버 측 검증을 반드시 구현하라
- 📊 대규모 데이터 처리가 필요한 경우 Row Level Security(RLS)를 활용하여 성능과 보안을 최적화하라

## Next.js와 Supabase 연동하기 🔌

먼저, Supabase를 사용하여 DB를 연동해보자
https://supabase.com/docs

다양한 환경세팅에 대한 가이드를 제공해준다. 
https://supabase.com/docs/guides/getting-started/quickstarts/nextjs

이미 넥스트 프로젝트를 만든 상태에서 supabase를 연동하기 위해서는 어떻게 해야할까?

`npm i @supabase/ssr @supabase/supabase-js`

환경변수를 만들어서 supabase경로와 클라이언트 키를 할당하자. 
해당 환경변수들은 프로젝트 대시보드의 Project Settings의 Data API에서 확인할 수 있다. 시크릿 키를 사용해야한다. 환경변수들은 공개되면 안되니까 따로 외장 드라이브 등을 통해 관리하는것이 좋다. 

테이블에서 데이터를 가져올때 그냥은 못가져온다. RLS 정책을 추가해야한다. 

![](../../assets/images/Pasted%20image%2020250416230038.png)

