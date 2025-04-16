---
layout: home-with-toc
title: 아키텍처
date: 2025-04-15 16:42:00 +0900
categories: Coding
parent: CS
---

# 클린 아키텍처 🏗️

## 개요

> 클린 아키텍처는 <mark style="background: #FFB86CA6;">소프트웨어 시스템을 구축할 때 의존성 방향을 제어</mark>하여 유지보수성, 확장성, 테스트 용이성을 높이는 아키텍처 패턴이다. 로버트 마틴(Uncle Bob)이 제안한 이 아키텍처는 시스템을 여러 계층으로 분리하고, <mark style="background: #BBFABBA6;">의존성이 항상 안쪽 계층을 향하도록 설계</mark>한다.

## 프로젝트 구조 📂

폴더 구조는 도메인 단위로 분리하여 다음과 같이 구성한다:

| 폴더명      | 해당 계층                   |
| ----------- | --------------------------- |
| domain      | 도메인 계층 (Entity)        |
| application | 애플리케이션 계층 (Usecase) |
| infra       | 인프라스트럭처 계층         |
| api         | 인터페이스 어댑터 계층      |

```
next-cafe01/
├── domain/       👉 핵심 비즈니스 규칙 (가장 안쪽 계층)
├── application/  👉 usecase, 비즈니스 로직 (두 번째 계층)
├── infra/        👉 외부 시스템 연동 코드 (가장 바깥쪽 계층)
├── app/          👉 Next.js의 프레젠테이션 계층 (UI)
├── utils/        👉 유틸리티 함수들
└── [기타 설정 파일들]
```

계층의 명칭으로 먼저 폴더를 만들어야 한다. 여기서 usecases 폴더의 root에 있는 menu는 조회 기능을, admin 내의 menu는 menu 관리(CRUD) 시스템을 담당한다.

예를 들어 등록 페이지 요청 시, UI는 등록 페이지를 요청하고 이때 usecase(업무로직)는 특별한 역할이 없다. 그러나 카테고리와 같은 기본값이 설정되어 있다면 업무로직에서 카테고리를 제공해야 한다. 이러한 업무로직들은 다음과 같이 설계한다:

<img src="../../../../assets/images/Pasted image 20250403142449.png" width="400"/>

## 클린 아키텍처의 주요 계층 🔄

| 로버트 마틴 용어      | DDD 영향 용어           | 주요 역할                                |
| --------------------- | ----------------------- | ---------------------------------------- |
| 엔티티                | 도메인                  | 핵심 비즈니스 규칙과 데이터 구조         |
| 유스케이스            | 애플리케이션/유스케이스 | 애플리케이션 특화 비즈니스 규칙          |
| 인터페이스 어댑터     | 어댑터                  | 외부 시스템과 내부 시스템의 변환         |
| 프레임워크와 드라이버 | 인프라스트럭처          | 데이터베이스, 웹 프레임워크 등 외부 도구 |

### 1. 도메인 계층 (Entity) 🧠

- <mark style="background: #BBFABBA6;">핵심 비즈니스 규칙과 데이터</mark>
- 다른 어떤 계층에도 의존하지 않는 독립적인 계층
- 예시: 메뉴항목, 사용자, 주문과 같은 엔티티와 그 규칙들
- 비즈니스의 핵심 개념과 규칙이 담겨있는 "순수 데이터"
- 레스토랑 비유: 요리사와 레시피

### 2. 애플리케이션 계층 (Usecase) ⚙️

- 비즈니스 로직을 조율하고 실행
- Domain 계층의 엔티티를 사용하여 작업을 수행
- 예시: 메뉴조회, 주문처리, 사용자 인증 등의 기능
- <mark style="background: #FFB8EBA6;">구체적인 사용 사례와 애플리케이션 로직 담당</mark>
- 레스토랑 비유: 주방장

### 3. 인터페이스 어댑터 계층 (API) 🔌

- 고객(외부)과 주방(내부) 사이의 중개자 역할
- 주문을 받아 주방에 전달하고, 완성된 요리를 고객에게 전달
- <mark style="background: #D2B3FFA6;">외부세계(HTTP, CLI, UI 등)와 내부 애플리케이션 계층을 연결</mark>
- 레스토랑 비유: 웨이터

### 4. 인프라스트럭처 계층 🏗️

- DB, 외부 API, 파일시스템 등 외부 시스템과의 연동을 담당
- Domain과 Application에서 정의한 인터페이스를 구현
- DB연결, API클라이언트, 인증 서비스 등을 포함
- <mark style="background: #ABF7F7A6;">가장 구체적이고 교체 가능한 부분</mark>
- 레스토랑 비유: 레스토랑 시설과 고객

## 의존성 방향 ⬇️

클린 아키텍처의 핵심 원칙: <mark style="background: #BBFABBA6;">의존성이 항상 안쪽 계층을 향해야 한다.</mark>

```
app → application → domain ← infra
(바깥쪽) → (안쪽)
(구체적) → (추상적)
```

- app 폴더의 코드는 application 계층을 사용할 수 있지만, 그 반대는 불가능하다
- Application 계층은 domain 계층을 사용할 수 있으나, 그 반대는 불가능하다
- infra 계층은 domain에서 정의한 인터페이스를 구현한다 (의존성 역전, SOLID원칙의 D, DIP)

레스토랑 비유로 설명하면:

- 주방(내부)는 웨이터나 고객(외부)에 대해 알 필요가 없다
- 웨이터(어댑터)는 주방(내부)을 알지만, 주방은 웨이터를 모른다
- 이렇게 해야 주방은 레스토랑 인테리어가 바뀌어도 영향 받지 않는다

## 인터페이스와 구현의 분리 🔍

레포지토리 인터페이스를 위해 도메인에 레포지토리 폴더를 만든다. 클린 아키텍처에서는 <mark style="background: #FFB86CA6;">도메인 계층이 시스템의 중심</mark>이고 외부 시스템(DB, API)에 대한 의존성을 없애기 위해 추상화(interface) 계약을 도메인에서 정의한다.

도메인 계층이 외부에 의존하지 않도록 내가 무엇을 필요로 하는지를 스스로 정의하고, 인프라 계층이 해당 요구를 충족하도록 설계하는 것이 <mark style="background: #BBFABBA6;">의존성 역전(DIP) 원칙</mark>이다.

예를 들어, Supabase를 통해 구현한 레포지토리를 나중에 Prisma로 바꾸고 싶다면, 인터페이스를 통해 프리스마를 주입할 수 있지만, 직접 클래스로 구현했다면 이것이 불가능하다.

### 클래스와 인터페이스 💻

> 클래스는 객체를 찍어내는 붕어빵 틀과 같은 존재, 인터페이스는 그러한 클래스를 찍어내는 붕어빵 틀과 같은 존재.

| 개념       | 설명              | 비유                      |
| ---------- | ----------------- | ------------------------- |
| 클래스     | 구체적인 설계도   | 햄버거를 만드는 특정 기계 |
| 인터페이스 | 약속, 혹은 주문서 | 햄버거 기계의 규격 정의   |

클래스로 구현하면 요리사는 A햄버거기계만으로 햄버거를 만들라고 보조에게 시키는 것인데, A햄버거기계가 고장나면 모든 프로세스는 중지된다.

인터페이스는 "햄버거만 만들어" 라는 약속을 정해놓고, 어느 브랜드의 햄버거 기계를 쓰던 상관이 없어 종속에서 벗어난다.

## API 구현 예시 📡

어댑터 계층 사용 예시:

<img src="../../../../assets/images/Pasted image 20250403161231.png" alt="" width= "200"/>

```ts
import { NextRequest, NextResponse } from "next/server";
import { SbMenuRepository } from "../../../../infra/repositories/supabase/SbMenuRepository";

export async function GET(request: NextRequest) {
  try {
    const menuRepository = new SbMenuRepository();
    const menus = await menuRepository.findAll();

    return NextResponse.json(
      {
        success: true,
        data: menus,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching menus:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to fetch menus",
      },
      { status: 500 }
    );
  }
}
```

## 데이터 흐름과 DTO 📊

DB에서 테이블 하나의 레코드를 가져온 것이 엔티티다. 이러한 엔티티가 화면에 바로 표시되면 좋겠지만 보통 가공이 필요하다. 가공된 엔티티를 모델이라 한다. API가 중간에 관여하기 때문에 API로 usecase의 결과를 내보내야 한다. <mark style="background: #FFB86CA6;">DTO(Data Transfer Object)는 usecase의 결과물</mark>로 계층 간 데이터 전송을 위한 객체다.

데이터 흐름:

| 계층       | 역할                | 특징                                                    |
| ---------- | ------------------- | ------------------------------------------------------- |
| DTO        | 계층 간 데이터 전송 | UI와 usecase 사이의 데이터 교환 담당                    |
| Usecase    | 비즈니스 로직 처리  | Repository 데이터를 DTO로 변환하고, DTO를 Entity로 변환 |
| Repository | 데이터 관리         | Entity를 저장, 조회, 수정, 삭제하는 인터페이스          |
| Entity     | 데이터 구조         | DB 테이블의 레코드 구조를 표현                          |

### DTO(Data Transfer Object) 🔄

DTO는 계층 간 데이터를 주고받을 때 사용하는 객체다. 레스토랑으로 비유하면 음식을 접시에 담아서 전달하는 것과 비슷하다.

<mark style="background: #D2B3FFA6;">DTO가 필요한 이유</mark>:

- 외부 데이터 소스(예: Supabase)에서 받은 데이터는 JSON 형식으로, 도메인에서 사용하기 위해 변환이 필요하다
- DTO는 이때 중간다리 역할을 한다
- 도메인 객체로 변환하기 전에 임시로 데이터를 보관하는 용도
- 엔티티와 같은 순수 데이터를 보존하고 외부에 노출되지 않도록 보호
- 도메인에 맞게 데이터를 전달하기 위한 변환 레이어

인프라에서 도메인 객체로 변환 예시:

```ts
// infra/repositories/supabaseMenuRepository.ts
import { Menu } from "@/domain/entities/menu";
import { MenuRepository } from "@/domain/repositories/menuRepository";
import { MenuDto } from "@/infra/dtos/menuDto";
import { supabase } from "@/infra/supabaseClient";

export class SupabaseMenuRepository implements MenuRepository {
  async findAll(): Promise<Menu[]> {
    const { data } = await supabase.from("menus").select("*");
    const dtos = data.map(
      (item) => new MenuDto(item.id, item.name, item.price, item.description)
    );
    return dtos.map(
      (dto) => new Menu(dto.id, dto.name, dto.price, dto.description)
    );
  }
}
```

DTO 클래스 예시:

```ts
import { MenuDto } from "./MenuDto";

export class MenuListDto {
  constructor(
    public menus: MenuDto[],
    public totalCount: number,
    public totalPages: number,
    public hasPreviousPage: boolean,
    public hasNextPage: boolean,
    public pages: number[]
  ) {}
}
```

## 의존성 주입 (DI, Dependency Injection) 💉

의존성 주입은 "탈착식 배터리"와 같은 원리다.

> <mark style="background: #BBFABBA6;">직접 무언가를 만들지 않고, 외부에서 필요한 것을 받아서 쓰는 방식</mark>

객체 내부가 아닌, 외부에서 인스턴스의 형태를 주입한다. 외부는 도메인 밖, 즉 애플리케이션이나 인프라, 실행환경과 같은 다른 계층을 말한다. DI가 있으면 다른 형태로 바꾸고 싶을 때 매개변수만 바꾸고 코드의 수정이 필요 없어진다.

| 접근 방식                               | 코드 예시                                                                                               | 특징              |
| --------------------------------------- | ------------------------------------------------------------------------------------------------------- | ----------------- |
| **직접 의존성 생성<br>(배터리 일체형)** | `ts<br>class A{<br>	private B b;<br>	public A(){<br>		b = new B();<br>	}<br>}`                               | 유연하지 않음     |
| **의존성 주입<br>(배터리 탈착식)**      | `ts<br>class A{<br>	private B b;<br>	public A(){<br>	}<br>	public void setB(B b){<br>		this.b = b;<br>	}<br>}` | 유연함, 변경 용이 |

DI를 통한 유스케이스 구현 예:

```ts
// application/useCases/getMenusUseCase.ts
import { Menu } from "@/domain/entities/menu";
import { MenuRepository } from "@/domain/repositories/menuRepository";

export class GetMenusUseCase {
  constructor(private menuRepo: MenuRepository) {} // DI로 주입
  async execute(): Promise<Menu[]> {
    return this.menuRepo.findAll();
  }
}

// pages/api/menus.ts (Next.js API 라우트, 어댑터)
import { SupabaseMenuRepository } from "@/infra/repositories/supabaseMenuRepository";
import { GetMenusUseCase } from "@/application/useCases/getMenusUseCase";

export default async function handler(req, res) {
  const menuRepo = new SupabaseMenuRepository(); // 인프라에서 구현체 생성
  const useCase = new GetMenusUseCase(menuRepo); // DI로 주입
  const menus = await useCase.execute();
  res.status(200).json(menus);
}
```

## IOC(Inversion of Control, 제어의 역전) 🔄

제어의 역전은 <mark style="background: #FFB86CA6;">프로그램의 제어 흐름을 직접 제어하는 것이 아니라 외부 프레임워크나 컨테이너에 위임</mark>하는 개념이다.

| 접근 방식              | 제어 흐름                                          | 특징              |
| ---------------------- | -------------------------------------------------- | ----------------- |
| **전통적인 제어 흐름** | 내 코드 → 라이브러리 호출 → 내 코드로 제어 반환    | 개발자가 제어     |
| **IOC의 제어 흐름**    | 프레임워크 → 내 코드 호출 → 프레임워크로 제어 반환 | 프레임워크가 제어 |

IOC의 주요 형태:

1. 의존성 주입(DI, Dependency Injection)
2. 서비스 로케이터
3. 템플릿 메소드 패턴
4. 이벤트 기반 프로그래밍

## 레포지토리와 유스케이스의 관계 🔗

레포지토리는 데이터 소스와의 상호작용을 담당하는 "재료" 역할을 하며, 유스케이스는 이러한 재료를 활용한 "조합"이다.

<mark style="background: #D2B3FFA6;">레포지토리보다 유즈케이스의 수가 더 많은 이유</mark>는 유즈케이스는 조합이고 레포지토리는 재료의 개수이기 때문에, 조합이 더 많을 수밖에 없다.

함수는 매개변수와 반비례 관계인 것처럼 레포지토리와 유즈케이스도 똑같다. 함수를 하나로 다 만드려면 매개변수의 수가 늘어나지만, 함수를 여러개 만들면 매개변수의 수를 줄일 수 있다.

함수명 작성 시에는 사용자의 행위를 반영하는 것이 좋다:

- 예: 하트를 누른다 → `toggleLike`
- 조회 기능은 `getMenu` 보다는 `findMenu`와 같은 이름을 사용하는 것이 더 명확하다

## 클린 아키텍처의 장점 ✅

| 장점               | 설명                                                                                                                        |
| ------------------ | --------------------------------------------------------------------------------------------------------------------------- |
| 1. 관심사 분리     | • 각 계층은 자신의 책임만 집중하여 코드 이해와 유지보수가 쉬워진다<br>• UI, 비즈니스 로직, 데이터 접근 등이 명확히 분리된다 |
| 2. 테스트 용이성   | • 각 계층을 독립적으로 테스트 할 수 있다<br>• 모의 객체(mocks)를 사용한 단위 테스트가 용이하다                              |
| 3. 확장성과 유연성 | • 새로운 기능 추가가 용이하다<br>• 특정 기술(DB, UI 프레임워크)교체가 쉽다                                                  |
| 4. 코드 재사용     | • 비즈니스 로직이 UI나 인프라와 분리되어 다른 프로젝트에서도 재사용 가능하다                                                |
| 5. 팀 협업         | • 프론트엔드와 백엔드 개발자가 명확히 구분된 영역에서 작업 가능하다<br>• 인터페이스가 정의되어있어 병렬 개발이 용이하다     |

## 코드로 보는 클린 아키텍처 구조의 예시 🧩

### 1. Domain

```ts
// domain/menu.ts
export class Menu {
  constructor(
    public id: string,
    public name: string,
    public price: number,
    public description: string
  ) {}

  // 비즈니스 로직 메서드
  isPromotionEligible() {
    return this.price > 5000; // 5000원 초과 메뉴만 프로모션 대상
  }
}

// domain/repositories/MenuRepository.ts
export interface MenuRepository {
  findAll(): Promise<Menu[]>;
  findById(id: string): Promise<Menu | null>;
}
```

### 2. Application

```ts
// application/menus/getAllMenus.ts
import { menuRepository } from "@/infra/repositories/menuRepository";

export async function getAllMenus() {
  // 레포지토리에서 메뉴 목록 가져오기
  const menus = await menuRepository.findAll();

  // 필요한 비즈니스 로직 적용
  // 예: 품절된 메뉴 필터링, 가격순 정렬 등

  return menus;
}
```

### 3. Infrastructure

```ts
// infra/repositories/menuRepository.ts
import { Menu } from "@/domain/menu";
import { MenuRepository } from "@/domain/repositories/MenuRepository";

// 실제 구현체
class ApiMenuRepository implements MenuRepository {
  async findAll(): Promise<Menu[]> {
    // 외부 API나 데이터베이스에서 데이터 가져오기
    const response = await fetch("https://api.cafe.com/menus");
    const data = await response.json();

    // 도메인 객체로 변환
    return data.map(
      (item) => new Menu(item.id, item.name, item.price, item.description)
    );
  }

  async findById(id: string): Promise<Menu | null> {
    // 구현 생략
    return null;
  }
}

// 싱글톤 인스턴스 내보내기
export const menuRepository: MenuRepository = new ApiMenuRepository();
```

### 4. Interface Adapter

```ts
// app/api/menus/route.ts
import { NextResponse } from "next/server";
import { getAllMenus } from "@/application/menus/getAllMenus"; // 유스케이스

// GET 요청 처리
export async function GET() {
  try {
    // 유스케이스 호출
    const menus = await getAllMenus();

    // 성공적인 응답 반환
    return NextResponse.json(menus);
  } catch (error) {
    // 오류 처리
    console.error("메뉴 조회 실패:", error);
    return NextResponse.json(
      { message: "메뉴를 불러오는데 실패했습니다" },
      { status: 500 }
    );
  }
}
```

## 프로세스 흐름 🔄

1. 사용자가 /api/menus로 GET 요청을 보낸다
2. API 라우트가 요청을 받고 유스케이스를 호출한다
3. 유스케이스는 필요한 데이터를 레포지토리에 요청한다
4. 레포지토리는 외부 데이터 소스에서 데이터를 가져온다
5. 데이터는 도메인 객체로 변환된다
6. 유스케이스는 비즈니스 로직을 적용한다
7. API 라우트는 결과를 JSON으로 응답한다
