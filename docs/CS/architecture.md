---
layout: home-with-toc
title: 아키텍처
date: 2025-04-15 16:42:00 +0900
categories: Coding
parent: CS
---

# 클린 아키텍처

## 개요

클린 아키텍처는 소프트웨어 시스템을 구축할 때 의존성 방향을 제어하여 유지보수성, 확장성, 테스트 용이성을 높이는 아키텍처 패턴이다. 로버트 마틴(Uncle Bob)이 제안한 이 아키텍처는 시스템을 여러 계층으로 분리하고, 의존성이 항상 안쪽 계층을 향하도록 설계한다.

## 프로젝트 구조

폴더 구조부터 도메인 단위로 분리시켜서 운용한다.

엔티티 - 도메인 계층
유즈케이스 - 어플리케이션 계층
레포지토리 - 인프라스트럭쳐 계층
api - 인터페이스 어댑터 계층
레포지토리는 db에서 데이터를 받아와서 엔티티에 담는다.

<img src="../../../../assets/images/Pasted image 20250403142003.png" alt="클린 아키텍처 계층" width="200">

계층의 명칭으로 먼저 폴더를 만들자. 이때 usecases의 root에 있는 menu는 조회, admin내의 menu는 menu관리(crud)시스템이다.

등록페이지 요청 -> ui는 등록페이지를 요청, 이때 usecase(업무로직)는 역할이 없다. 하지만 카테고리 같은 기본값이 설정되어 있다면 업무로직에서 카테고리를 제공해야 한다. 이러한 업무로직들을 다음과 같이 설계하자.

<img src="../../../../assets/images/Pasted image 20250403142449.png" alt="프로젝트 구현 예시" width="400"/>

다음과 같이 유즈케이스를 하나하나 만들어나가면 된다.

나중에 객체지향을 더 원한다면 해당 유즈케이스를 캡슐로 바꿀 수 있다.
레포지토리는 테이블의 정보를 저장해두는 곳이기 때문에 테이블 개수마다 만들어주면 된다.

참조형은 entity로 interface 사용, 구현체는 repository로 클래스 생성한다.

getMenu라는 함수의 이름은 이상하다. 조회 같은 기능 등에서 find라는 이름을 요새 많이 사용한다.
Sb는 Supabase로 구현한 레포지토리라는 뜻이다.

infra에 만든 repo폴더는 db서비스를 통해 가져오는 거고, domain의 repo폴더는 뭐지?

왜 두개를 만든건데? 설마 양방향때문에? 엔티티는 레포랑 매우 가까운놈..

레포지토리 인터페이스를 위해 도메인에 레포지토리 폴더를 만든 것이다.
클린아키텍처에서는 도메인계층이 시스템의 중심이고 외부시스템(DB, API)에 대한 의존성을 없애기 위해 추상화(interface) 계약을 도메인에서 정의하는 것이다.

도메인 계층이 외부에 의존하지 않도록 내가 뭘 필요하는지를 스스로 정의하고, 인프라 계층이 해당 요구를 충족하계끔 설계하기 위함이다. 이게 바로 의존성 역전(DIP)원칙이다.

이게 왜 필요한건데?

만약 수파베이스를 통해 만든 레포를 프리스마로 바꾸고 싶다해보자. 틀만 짜인 인터페이스를 통해 바로 프리스마를 주입할 수 있지만, 직접 클래스로 구현했다면 이가 불가능하다.

그렇다면, 인터페이스를 만들면 어째서 독립성과 유연성이 증가하고 종속에서 벗어날 수 있는거지?

형태가 확정되어 있지않고 형태만 약속되는 인터페이스를 통해 다형성이 생기는건가?

### 클래스와 인터페이스

클래스: 구체적인 설계도
ex) 햄버거를 만드는 기계로, 버튼을 누르면 실제로 햄버거를 만든다
인터페이스: 약속, 혹은 주문서 같은 것. 햄버거를 만들어주는 기계는 이런 버튼이 있어야해 라는 규칙만 정해놓고, 어떻게 동작하는지에 대한건 없다.

클래스로 구현했다 생각하자. 요리사는 A햄버거기계만으로 햄버거를 만들라고 보조한테 시키는건데, A햄버거기계가 고장나면 모든 프로세스는 중지된다.

인터페이스는, 햄버거만 만들어 라는 약속을 정해놓고, 어느 브랜드의 햄버거 기계를 쓰던 상관이 없어 종속에서 벗어난다.

클래스는 객체의 붕어빵틀이고 인터페이스는 그 클래스의 붕어빵틀 같은 느낌이다.

2차에는 ORM을 사용하여 prisma api를 통해 레포지토리 구현했다.

어댑터는 따로 폴더를 만들진 않을 것이다. api니까 바깥 세상일이니까

페칭방법은 원격이나 로컬에서 하던 둘다 사용법은 똑같다. 이를 통해 api를 사용하면 해당 데이터를 외부인지 내부에서 가져온건지 모르게 할 수 있다. (캡슐화, 어댑터 계층)

api를 만들때 폴더구조를 따라가자.

<img src="../../../../assets/images/Pasted image 20250403161231.png" alt="API 구현" width= "200"/>

api폴더에서는 page.tsx가 아니라 route.ts를 만든다.

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

전반적인 아키텍처가 보기엔 너무 어려운 구조라고 생각할 수 있지만, 상당히 직관적인 구조다.

DB에서 테이블하나의 레코드를 하나 가져온것은 엔티티다.
이러한 엔티티가 화면에 바로 꽃아지면 참 좋을텐데.. 가공이 필요하다. 가공된 엔티티를 모델이라 한다.
하지만 api가 중간에 껴들었으니까 api로 usecase의 결과를 내보내야한다. DTO(Data Transfer Object)는 usecase의 결과물이다.

가공된 데이터가 모델이라매???? DTO는 또 뭔데

dto - ui가 usecase로 올때도, 갈때도 dto가 관여한다.
usecase - repository의 데이터를 dto로 바꿔주고, dto를 엔티티로 바꿔준다.
repository - 엔티티를 넣거나 빼거나 조작하는 역할(엔티티의 수와 똑같음, 각 레포 파일은 엔티티 하나에 대응됨)
entity - db의 테이블이 있을때 테이블에 데이터가 하나 채워질때 행 하나의 구조를 의미(테이블데이터의 수와 똑같음, 각 엔티티는 레코드 하나에 대응됨)

```
next-cafe01/
├── domain/       👉 핵심 비즈니스 규칙 (가장 안쪽 계층)
├── application/  👉 usecase, 비즈니스 로직 (두 번째 계층)
├── infra/        👉 외부 시스템 연동 코드 (가장 바깥쪽 계층)
├── app/          👉 Next.js의 프레젠테이션 계층 (UI)
├── utils/        👉 유틸리티 함수들
└── [기타 설정 파일들]
```

## 클린 아키텍처의 주요 계층

<img src="../../../../assets/images/Pasted image 20250403142003.png" alt="클린 아키텍처 계층" width="200">

| 로버트 마틴 용어      | DDD 영향 용어           | 주요 역할                                |
| --------------------- | ----------------------- | ---------------------------------------- |
| 엔티티                | 도메인                  | 핵심 비즈니스 규칙과 데이터 구조         |
| 유스케이스            | 애플리케이션/유스케이스 | 애플리케이션 특화 비즈니스 규칙          |
| 인터페이스 어댑터     | 어댑터                  | 외부 시스템과 내부 시스템의 변환         |
| 프레임워크와 드라이버 | 인프라스트럭처          | 데이터베이스, 웹 프레임워크 등 외부 도구 |

### 1. 도메인 계층 (Entity)

- 가장 핵심적인 비즈니스 개념과 규칙을 담고 있다
- 다른 어떤 계층에도 의존하지 않는 독립적인 계층
- 예시: 메뉴항목, 사용자, 주문과 같은 엔티티와 그 규칙들
- 비즈니스의 핵심 개념과 규칙이 담겨있는 "순수 데이터"
- 레스토랑 비유: 요리사와 레시피

### 2. 애플리케이션 계층 (Usecase)

- 구체적인 비즈니스 시나리오(use case)를 구현한다
- Domain 계층의 엔티티를 사용하여 작업을 수행한다
- 예시: 메뉴조회, 주문처리, 사용자 인증 등의 기능
- 구체적인 사용 사례와 애플리케이션 로직이 담겨있다
- 레스토랑 비유: 주방장

### 3. 인터페이스 어댑터 계층 (API)

- 고객(외부)과 주방(내부) 사이의 중개자 역할을 한다
- 주문을 받아 주방에 전달하고, 완성된 요리를 고객에게 전달한다
- 외부세계(HTTP, CLI, UI, 컨트롤러 등)과 내부 애플리케이션 계층을 연결한다
- 레스토랑 비유: 웨이터

### 4. 인프라스트럭처 계층

- DB, 외부 API, 파일시스템 등 외부 시스템과의 연동을 담당한다
- Domain과 Application에서 정의한 인터페이스를 구현한다
- DB연결, API클라이언트, 인증 서비스 등을 포함한다
- 가장 구체적이고 교체 가능한 부분이다
- 레스토랑 비유: 레스토랑 시설과 고객

## 의존성 방향

클린 아키텍처의 핵심 원칙: 의존성이 항상 안쪽 계층을 향해야 한다.

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

## 클린 아키텍처의 장점

1. 관심사 분리
   - 각 계층은 자신의 책임만 집중하여 코드 이해와 유지보수가 쉬워진다
   - UI, 비즈니스 로직, 데이터 접근 등이 명확히 분리된다
2. 테스트 용이성
   - 각 계층을 독립적으로 테스트 할 수 있다
   - 모의 객체(mocks)를 사용한 단위 테스트가 용이하다
3. 확장성과 유연성
   - 새로운 기능 추가가 용이하다
   - 특정 기술(DB, UI 프레임워크)교체가 쉽다
4. 코드 재사용
   - 비즈니스 로직이 UI나 인프라와 분리되어 다른 프로젝트에서도 재사용 가능하다
5. 팀 협업
   - 프론트엔드와 백엔드 개발자가 명확히 구분된 영역에서 작업 가능하다
   - 인터페이스가 정의되어있어 병렬 개발이 용이하다

## 도메인 계층과 레포지토리

도메인 계층이 외부에 의존하지 않도록 내가 뭘 필요로 하는지를 스스로 정의하고, 인프라 계층이 해당 요구를 충족하도록 설계한다. 이것이 의존성 역전(DIP) 원칙이다.

예를 들어, 도메인 계층에 레포지토리 인터페이스를 정의하고, 인프라 계층에서 이를 구현하는 방식을 사용한다:

```ts
// domain/repositories/MenuRepository.ts (인터페이스)
export interface MenuRepository {
  findAll(): Promise<Menu[]>;
  findById(id: string): Promise<Menu | null>;
}

// infra/repositories/SbMenuRepository.ts (구현체)
export class SbMenuRepository implements MenuRepository {
  // Supabase를 사용한 구현
}
```

이렇게 하면 데이터베이스 구현체(예: Supabase)를 나중에 다른 것(예: Prisma)으로 쉽게 교체할 수 있다.

## DTO(Data Transfer Object)

DTO는 계층 간에 데이터를 주고받을 때 사용하는 객체다. 레스토랑으로 비유하면 음식을 담아서 전달하는 접시와 같다.

DTO가 필요한 이유:

- 외부 데이터소스(예: Supabase)에서 받은 JSON 데이터를 도메인 객체로 변환할 때 중간 단계 역할을 한다
- 도메인 객체를 외부에 노출하지 않고 필요한 데이터만 전달한다
- 계층 간 데이터 전송 시 형식을 맞추는 역할을 한다

```ts
// infra/repositories/supabaseMenuRepository.ts
import { Menu } from "@/domain/entities/menu";
import { MenuRepository } from "@/domain/repositories/menuRepository";
import { MenuDto } from "@/infra/dtos/menuDto";
import { supabase } from "@/infra/supabaseClient";

export class SupabaseMenuRepository implements MenuRepository {
  async findAll(): Promise<Menu[]> {
    const { data } = await supabase.from("menus").select("*");
    // DTO로 변환
    const dtos = data.map(
      (item) => new MenuDto(item.id, item.name, item.price, item.description)
    );
    // 도메인 객체로 변환
    return dtos.map(
      (dto) => new Menu(dto.id, dto.name, dto.price, dto.description)
    );
  }
}
```

DTO 예시:

```ts
// infra/dtos/menuDto.ts
export class MenuDto {
  constructor(
    public id: string,
    public name: string,
    public price: number,
    public description: string
  ) {}
}

// infra/dtos/menuListDto.ts
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

## 의존성 주입 (DI, Dependency Injection)

의존성 주입은 객체가 필요한 의존성을 외부에서 받아 사용하는 패턴으로, "탈착식 배터리"와 같은 원리다.

- **직접 의존성 생성(배터리 일체형)**: 유연하지 않다

  ```ts
  class A {
    private b: B;
    public A() {
      b = new B(); // 직접 생성 - 종속성 발생
    }
  }
  ```

- **의존성 주입(배터리 탈착식)**: 유연하다
  ```ts
  class A {
    private b: B;
    constructor(b: B) {
      // 외부에서 주입
      this.b = b;
    }
  }
  ```

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

// API 라우트에서 사용
import { SupabaseMenuRepository } from "@/infra/repositories/supabaseMenuRepository";
import { GetMenusUseCase } from "@/application/useCases/getMenusUseCase";

export default async function handler(req, res) {
  const menuRepo = new SupabaseMenuRepository(); // 인프라에서 구현체 생성
  const useCase = new GetMenusUseCase(menuRepo); // DI로 주입
  const menus = await useCase.execute();
  res.status(200).json(menus);
}
```

## IOC(Inversion of Control, 제어의 역전)

제어의 역전은 프로그램의 제어 흐름을 직접 제어하지 않고 외부 프레임워크나 컨테이너에 위임하는 개념이다.

- **전통적인 제어 흐름**: `내 코드 → 라이브러리 호출 → 내 코드로 제어 반환`
- **IOC의 제어 흐름**: `프레임워크 → 내 코드 호출 → 프레임워크로 제어 반환`

IOC의 주요 형태:

1. 의존성 주입(DI, Dependency Injection)
2. 서비스 로케이터
3. 템플릿 메소드 패턴
4. 이벤트 기반 프로그래밍

DI를 사용하면 코드 변경 없이 외부에서 의존성을 교체할 수 있어 유지보수와 테스트가 용이해진다.

## 레포지토리와 유스케이스의 관계

레포지토리는 데이터 소스와의 상호작용을 담당하는 "재료" 역할을 하며, 유스케이스는 이러한 재료를 활용한 "조합"이다.

- 레포지토리: 엔티티 단위로 CRUD 작업 수행
- 유스케이스: 비즈니스 로직 구현, 여러 레포지토리 조합 가능

일반적으로 유즈케이스의 수가 레포지토리보다 많은 이유는 같은 재료(레포지토리)로 여러 요리(유즈케이스)를 만들 수 있기 때문이다.

특히 함수명을 지을 때는 사용자의 행위를 반영하는 것이 좋다:

- 예: 하트를 누른다 → `toggleLike`

이러한 클린 아키텍처 구조를 통해 시스템의 유지보수성과 확장성을 크게 향상시킬 수 있다.
