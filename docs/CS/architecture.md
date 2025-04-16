---
layout: home-with-toc
title: 아키텍처
date: 2025-04-15 16:42:00 +0900
categories: Coding
parent: CS
---

클린아키텍처를 만들자. 

기획 - 분석 - 설계 - 구현 - 테스트 - 배포
폭포수 방식

하지만 배포를 할떄마다 시스템을 멈춰야하니까, 무중단 배포 시스템을 탐구하기 시작했다. 

프로젝트 구조
폴더 구조 부터 도메인 단위로 분리시켜서 운용함. 

엔티티 - 도메인 계층
유즈케이스 - 어플리케이션 계층
레포지토리 - 인프라스트럭쳐 계층
api - 인터페이스 어댑터 계층 
레포지토리는 db에서 데이터를 받아와서 엔티티에 담음

<img src="../../../../assets/images/Pasted image 20250403142003.png" alt="" width="200">

계층의 명칭으로 먼저 폴더를 만들자. 이때 usecases의 root에 있는 menu는 조회, admin내의 menu는 menu관리(crud)시스템이다. 

등록페이지 요청 -> ui는 등록페이지를 요청 , 이때 usecase(업무로직)는 역할이 없음. 하지만 카테고리 같은 기본값이 설정되어 있다면 업무로직에서 카테고리를 제공해야한다. 이러한 업무로직들을 다음과 같이 설계하자. 

<img src="../../../../assets/images/Pasted image 20250403142449.png" width="400"/>

다음과 같이 유즈케이스를 하나하나 만들어나가면 된다. 

나중에 객체지향을 더 원한다면 해당 유즈케이스를 캡슐로 바꿀 수 있다. 
레포지토리는 테이블의 정보를 저장해두는 곳이기 때문에 테이블 개수마다 만들어주면 된다. 

참조형은 entity로 interface 사용, 구현체는 repository로 클래스 생성

getMenu라는 함수의 이름은 이상하다. 조회 같은 기능 등에서 find라는 이름을 요새 많이 사용한다. 
Sb는 Supabase로 구현한 레포지토리라는 뜻 

infra에 만든 repo폴더는 db서비스를 통해 가져오는 거고, domain의 repo폴더는 모지

왜 두개를 만든건데..? 설마 양방향때문에? 엔티티는 레포랑 매우 가까운놈.. 

레포지토리 인터페이스를 위해 도메인에 레포지토리 폴더를 만든것.
클린아키텍처에서는 도메인계층이 시스템의 중심이고 외부시스템(DB, API)에 대한 의존성을 없애기 위해 추상화(interface) 계약을 도메인에서 정의하는것.

도메인 계층이 외부에 의존하지 않도록 내가 뭘 필요하는지를 스스로 정의하고, 인프라 계층이 해당 요구를 충족하계끔 설계하기 위함이다. 이게 바로 의존성 역전(DIP)원칙이다.

이게 왜 필요한건데?

만약 수파베이스를 통해 만든 레포를 프리스마로 바꾸고 싶다해보자. 틀만 짜인 인터페이스를 통해 바로 프리스마를 주입할 수 있지만, 직접 클래스로 구현했다면 이가 불가능

그렇다면, 인터페이스를 만들면 어째서 독립성과 유연성이 증가하고 종속에서 벗어날 수 있는거지?

형태가 확정되어 있지않고 형태만 약속되는 인터페이스를 통해 다형성이 생기는건가?

### 클래스와 인터페이스

클래스: 구체적인 설계도
ex) 햄버거를 만드는 기계로, 버튼을 누르면 실제로 햄버거를 만든다
인터페이스: 약속, 혹은 주문서 같은 것. 햄버거를 만들어주는 기계는 이런 버튼이 있어야해 라는 규칙만 정해놓고, 어떻게 동작하는지에 대한건 없음

클래스로 구현했다 생각하자. 요리사는 A햄버거기계만으로 햄버거를 만들라고 보조한테 시키는건데, A햄버거기계가 고장나면 모든 프로세스는 중지됨.

인터페이스는, 햄버거만 만들어 라는 약속을 정해놓고, 어느 브랜드의 햄버거 기계를 쓰던 상관이 없어 종속에서 벗어남.

클래스는 객체의 붕어빵틀이고 인터페이스는 그 클래스의 붕어빵틀 같은 느낌

2차에는 ORM을 사용하여 prisma api를 통해 레포지토리 구현

어댑터는 따로 폴더를 만들진 않을 것이다. api니까 바깥 세상일이니까

페칭방법은 원격이나 로컬에서 하던 둘다 사용법은 똑같아. 이를 통해 api를 사용하면 해당 데이터를 외부인지 내부에서 가져온건지 모르게 할 수 있다. (캡슐화, 어댑터 계층) 

api를 만들때 폴더구조를 따라가자 

<img src="../../../../assets/images/Pasted image 20250403161231.png" alt="" width= "200"/>

api폴더에서는 page.tsx가 아니라 route.ts를 만든다. 

```ts
import { NextRequest, NextResponse } from "next/server";
import { SbMenuRepository } from "../../../../infra/repositories/supabase/SbMenuRepository";

export async function GET(request: NextRequest) {
  try {
    const menuRepository = new SbMenuRepository();
    const menus = await menuRepository.findAll();
    
    return NextResponse.json({ 
      success: true, 
      data: menus 
    }, { status: 200 });
  } catch (error) {
    console.error("Error fetching menus:", error);
    return NextResponse.json({ 
      success: false, 
      error: "Failed to fetch menus" 
    }, { status: 500 });
  }
}
```

전반적인 아키텍처가 보기엔 너무 어려운 구조라고 생각할 수 있지만, 상당히 직관적인 구조다. 

DB에서 테이블하나의 레코드를 하나 가져온것은 엔티티
이러한 엔티티가 화면에 바로 꽃아지면 참 좋을텐데.. 가공이 필요하다. 가공된 엔티티를 모델이라 한다. 
하지만 api가 중간에 껴들었으니까 api로 usecase의 결과를 내보내야한다.  DTO(Data Transfer Object)는 usecase의 결과물이다. 


가공된 데이터가 모델이라매???? DTO는 또 뭔데

dto  - ui가 usecase로 올때도, 갈때도 dto가 관여함
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

- Domain
	- 가장 핵심적인 비즈니스 개념과 규칙을 담고 있음.
	- 다른 어떤 계층에도 의존하지 않는 독립적인 계층
	- 예시: 메뉴항목, 사용자, 주문과 같은 엔티티와 그 규칙들
	- 비즈니스의 핵심 개념과 규칙이 담겨있음. 
	- “순수 데이터”
- Application
	- 구체적인 비즈니스 시나리오(use case)를 구현
	- Domain 계층의 엔티티를 사용하여 작업을 수행
	- 예시: 메뉴조회, 주문처리, 사용자 인증 등의 기능
	- 구체적인 사용 사례와 애플리케이션 로직이 담겨있음. 
- Infra
	- DB, 외부 API, 파일시스템등 외부 시스템과의 연동을 담당합니다.
	- Domain과 Application에서 정의한 인터페이스를 구현
	- DB연결, API클라이언트, 인증 서비스 등
	- 외부 시스템과의 연동을 담당하는 코드가 담겨있음. 
- Presentation(/app)
	- Next.js의 app router
	- 사용자와의 상호작용을 담당
	- Application의 use case를 호출하여 기능 수행 
	- app router 구조에 따른 ui컴포넌트와 페이지 

해당 클린 아키텍처의 의존성 방향
> 클린아키텍처의 핵심 원칙: 의존성이 항상 안쪽 계층을 향해야 함.

```
app → application → domain ← infra
```

- app폴더의 코드는 application 계층을 사용할 수 있지만, 그 반대는 불가능
- Application 계층은 domain 계층을 사용할 수 있으나, 그 반대는 불가능
- infra계층은 domain에서 정의한 인터페이스를 구현(의존성 역전, SOLID원칙의 D, DIP)

전반적으로 GraphQL이 좀 생각난다.. 모듈화하는게 특히나 그런듯 
역할들이 서로 대응하면서 구조가 짜여있는게 확실히 직관적으로 느껴진다
독립화로 인해 유지보수나 디버깅도 용이하고 여러모로 장점이 많네

클린 아키텍처의 장점

1. 관심사 분리
	- 각 계층은 자신의 책임만 집중하여 코드 이해와 유지보수가 쉬워짐
	- UI, 비즈니스 로직, 데이터 접근 등이 명확히 분리됨. 
2. 테스트 용이성
	- 각 계층을 독립적으로 테스트 할 수 있음
	- 모의 객체(mocks)를 사용한 단위 테스트가 용이함.
3. 확장성과 유연성
	- 새로운 기능 추가가 용이함
	- 특정 기술(DB, UI 프레임워크)교체가 쉬움
4. 코드 재사용
	- 비즈니스 로직이 ui나 인프라와 분리되어 다른 프로젝트에서도 재사용 가능
5. 팀 협업 
	- 프론트엔드와 백엔드 개발자가 명확히 구분된 영역에서 작업 가능
	- 인터페이스가 정의되어있어 병렬 개발이 용이 

---
### Service 계층 분리하기

업무란, 사용자가 요구하는것을 말한다.
우리는 사용자가 요구하는 페이지를 만드는 것이 곧 업무이다.  
주문하기 라는 버튼이 있다면 주문할 수 있는 메뉴의 목록을 요구하는 것이고, 이를 제공하는게 우리의 업무이다. 

업무로직을 얼마나 잘 하느냐는 함수명을 얼마나 잘 짓느냐이다. 함수명은 사용자가 요구하는 것의 행위를 이름으로 해야한다. 하트를 누른다 -> 함수명: toggleLike

사용자의 행위와 관련되며 toggleLike처럼 간단한 이름의 함수를 짓기

DB에서 보내준 데이터를 가공하는 곳과, 요청을 하는 곳은 분리 되어야 한다. 
가공하는 곳이 컨트롤러, 가공한 데이터가 변수에 담기는것이 모델, 화면에 해당 모델이 출력되는 것이 뷰. 이것이 바로 프로그램이다. 

모델은 사용자의 요청을 받고, 

repository 추가: 3계층

레포지토리는 데이터를 전부 저장해두는 곳. crud, 데이터 페칭의 역할로, 컨트롤러한테 엔티티를 전달
좋아요같은 토글형식의 데이터는 update()를 사용하지 않고 create, delete을 사용한다. 

3계층 : I/O | Business | Data

---
### 클린아키텍처(4계층)

| 로버트 마틴 용어 | DDD 영향 용어 | 주요 역할 |
|-----------------|-------------|----------|
| 엔티티 | 도메인 | 핵심 비즈니스 규칙과 데이터 구조 |
| 유스케이스 | 애플리케이션/유스케이스 | 애플리케이션 특화 비즈니스 규칙 |
| 인터페이스 어댑터 | 어댑터 | 외부 시스템과 내부 시스템의 변환 |
| 프레임워크와 드라이버 | 인프라스트럭처 | 데이터베이스, 웹 프레임워크 등 외부 도구 |

- 도메인 - Entity - 요리사와 레시피
	- 핵심 비즈니스 규칙과 데이터
	- 외부 요소에 전혀 의존하지 않음
-  어플리케이션 - Usecase  - 주방장
	- 비즈니스 로직을 조율하고 실행
	- 요리사(엔티티)에게 무엇을 어떻게 요리할지 지시
- API - Interface Adapter  - 웨이터
	- 고객(외부)과 주방(내부) 사이의 중개자
	- 주문을 받아 주방에 전달하고, 완성된 요리를 고객에게 전달
	- 외부세계(HTTP, CLI, UI, 컨트롤러 등)과 내부 애플리케이샨 계층을 연결시켜줌
- Infrastructure - 프레임워크와 드라이버 - 레스토랑 시설과 고객 
	- ui, DB, 외부 프레임워크 등
	- 가장 구체적이고 교체 가능한 부분

의존성 방향
```
바깥쪽 → 안쪽
(구체적) → (추상적)
```

- 주방(내부)는 웨이터나 고객(외부)에 대해 알 필요가 없음. 
- 웨이터(어댑터)는 주방(내부)을 알지만, 주방은 웨이터를 모름
- 이렇게 해야 주방은 레스토랑 인테리어가 바뀌어도 영향 받지 않음. 

Project Structure

- Hexagonal Architecture 
- Onion Architecture
- Domain-Driven Design(DDD) / Domain Centric Architecture
- vertical Slice Architecture
- Clean Architecture

Independent of UI
Database Independent
Independent of External agency/libraries/Drivers
Independent Frameworks

다 독립되어야 한다는 로직

업무로직은 Use Case라는 이름으로 불린다. 
서로 종속되면 안되는 시스템으로, 객체를 생성하는 흐름이 단방향방식으로 이루어져야 한다. 

내부계층은 외부계층에 의존할 수 없으며, 외부 계층은 내부 계층에 의존해야 한다. 
ui는 use case를 호출하지만, use case는 ui를 몰라야 한다. 
use case는 repository를 호출하지만, repository의 구현 방식(supabase, mongo ...)을 몰라야한다. 

즉, 의존성으로부터 탈피한다는 이야기 
서로에게 종속되어 있으면 어떤곳에 문제가 발생하면 연쇄적으로 문제가 발생하는 크나큰 문제가 발생했다. 독립적이면 해당 영역에서만 고치면 되니까 매우 효율적

레코드를 가져와서 담는 그릇이 엔티티
Page -> MenuService -> Repository -> Entity

돌아가는 원판이었구나.. 흐름을 만들어나가네

레포지토리와 엔티티의 역할 구분이 잘 안와닿아...

IOC(Inversion of Control)
제어의 역전은 소프트웨어 디자인 원칙으로, 프로그램의 제어 흐름을 직접 제어하는 것이 아니라 외부 프레임워크나 컨테이너에 위임하는 개념

제품이자 부품은 상대적인 개념(하드디스크는 제품일수 있고 컴퓨터의 부품이 될수도 있다. )

도식화에서 작은 마름모는 생성한다는 뜻이다. A는 b를 생성하고..


전통적인 제어 흐름
`내 코드 → 라이브러리 호출 → 내 코드로 제어 반환`

IOC의 제어 흐름 
`프레임워크 → 내 코드 호출 → 프레임워크로 제어 반환`

제어라는것은 흐름이다. 

IOC의 주요 형태
1. 의존성 주입(DI, Dependency Injection)
	- 배터리 일체형 vs 배터리를 만든다(Dependency). 배터리 탈착식, 배터리를 꽃아 넣자(Injection)
	- 생성자주입
	- setter 주입
	- Injection이 효율적인 코드 작성의 key이다. 
	- 이전에는 객체 내부에서 필요한 의존성 등을 만들어서 사용
	- 훗날에는 외부의 프레임워크등에 의존성을 주입받아 제어를 위임하는 IOC방식을 사용(DI를 한다 -> IOC)
	- 기업용 애플리케이션은 IOC가 필수이다. (하나 잘 만들어둔걸 다시 만들고 싶지 않으니까)

2. 서비스 로케이터
3. 템플릿 메소드 패턴
4. 이벤트 기반 프로그래밍 

Composition has a 
~님 도와주세요~ (유연하지 않음)
```ts
class A{
	private B b;
	public A(){
		b = new B();
	}
}
```

Association has a
아무나 도와주세요~ (유연하고 새로 다시 만들일이 거의 없어 부분적으로 고쳐 쓰는 방식)
```ts
class A{
	private B b;
	public A(){
	}
	public void setB(B b){
		this.b = b;
	}
}
```

수정을 지양하고 확장을 좋아하고 추가/삭제를 하자?
모든 클래스는 부모형식으로 참조가 가능하다. 
B라는 부모 클래스가 있다 하자. b1, b2, b3, b4같은 자식들이 생긴다면 이들 모두 B를 참조할 수 있다. 

IoC 컨테이너
방법론?

언어와 상관없이 ui와 서비스가 소통하기 위해서는 api가 사이에 들어가서 데이터를 끌어오게끔해준다. 아니면 di도구를 사용할 수 있다. 

### 코드로 보는 클린 아키텍처 구조의 예시

1. Domain

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

2. Application

```ts
// application/menus/getAllMenus.ts
import { menuRepository } from '@/infra/repositories/menuRepository';

export async function getAllMenus() {
  // 레포지토리에서 메뉴 목록 가져오기
  const menus = await menuRepository.findAll();
  
  // 필요한 비즈니스 로직 적용
  // 예: 품절된 메뉴 필터링, 가격순 정렬 등
  
  return menus;
}
```

3. Infrastructure

```ts
// infra/repositories/menuRepository.ts
import { Menu } from '@/domain/menu';
import { MenuRepository } from '@/domain/repositories/MenuRepository';

// 실제 구현체
class ApiMenuRepository implements MenuRepository {
  async findAll(): Promise<Menu[]> {
    // 외부 API나 데이터베이스에서 데이터 가져오기
    const response = await fetch('https://api.cafe.com/menus');
    const data = await response.json();
    
    // 도메인 객체로 변환
    return data.map(item => new Menu(
      item.id, 
      item.name, 
      item.price, 
      item.description
    ));
  }
  
  async findById(id: string): Promise<Menu | null> {
    // 구현 생략
    return null;
  }
}

// 싱글톤 인스턴스 내보내기
export const menuRepository: MenuRepository = new ApiMenuRepository();
```
``
4. Interface Adapter

```ts
// app/api/menus/route.ts
import { NextResponse } from 'next/server';
import { getAllMenus } from '@/application/menus/getAllMenus'; // 유스케이스

// GET 요청 처리
export async function GET() {
  try {
    // 유스케이스 호출
    const menus = await getAllMenus();
    
    // 성공적인 응답 반환
    return NextResponse.json(menus);
  } catch (error) {
    // 오류 처리
    console.error('메뉴 조회 실패:', error);
    return NextResponse.json(
      { message: '메뉴를 불러오는데 실패했습니다' }, 
      { status: 500 }
    );
  }
}
```

1. 사용자가 /api/menus로 GET 요청을 보냅니다
2. API 라우트가 요청을 받고 유스케이스를 호출합니다
3. 유스케이스는 필요한 데이터를 레포지토리에 요청합니다
4. 레포지토리는 외부 데이터 소스에서 데이터를 가져옵니다
5. 데이터는 도메인 객체로 변환됩니다
6. 유스케이스는 비즈니스 로직을 적용합니다
7. API 라우트는 결과를 JSON으로 응답합니다

도메인: 엔티티의 타입정의 + 메소드 인터페이스 정의 + 비즈니스 규칙(금액은 반드시 0 이상이어야한다와 같은 로직)
인프라: 도메인에서 정의된 타입을통해 메소드 인터페이스 정의 및 데이터 페칭 및 도메인객체 변환 
애플리케이션: 인프라에서 반환된 도메인객체를 통해 유즈케이스 사용
어댑터: 애플리케이션의 유즈케이스 호출

여기서 또 추가되는것이 DTO이다.

### DTO(Data Transfer Object)

식당이라 가정했을때, 음식을 접시에 담아서 전달하는것과 비슷한 이치

접시: 음식을 담아서 옮기는 역할(일종의 상자)

왜 필요한데?
ex) supabase를 통해 받은 데이터는 json의 형식이라 도메인에서 사용하기 위해서는 변환이 필요하다. DTO가 이때 그 중간다리 역할을 한다. 도메인객체로 인프라에서 변환시키기전에 잠깐 들고 다니는 용도이다. 그럼 DTO도 의존성 독립의 비슷한 역할을 수행하고, 엔티티와 같은 순수데이터를 온전히 보존하고 외부에서 노출되지않도록 대신에 옮길 데이터가 DTO의 역할. 도메인에 맞게 데이터를 전달해주기 위해 잠깐 담는 용도

인프라에서 도메인객체로 변환

```ts
// infra/repositories/supabaseMenuRepository.ts
import { Menu } from '@/domain/entities/menu';
import { MenuRepository } from '@/domain/repositories/menuRepository';
import { MenuDto } from '@/infra/dtos/menuDto';
import { supabase } from '@/infra/supabaseClient';

export class SupabaseMenuRepository implements MenuRepository {
  async findAll(): Promise<Menu[]> {
    const { data } = await supabase.from('menus').select('*');
    const dtos = data.map(item => new MenuDto(item.id, item.name, item.price, item.description));
    return dtos.map(dto => new Menu(dto.id, dto.name, dto.price, dto.description));
  }
}
```

supabase에서 데이터를 가져와서 dto에 담고 다시 도메인객체로 변환함.
DI(Dependency Injection)

탈착식 배터리와 같은 이치

> 직접 무언가를 만들지 않고, 외부에서 필요한걸 받아서 쓰겠다 


객체 내부가 아닌, 외부에서 인스턴스의 형태를 주입한다는 느낌으로 보면 될듯. 외부는 도메인 밖, 즉 애플리케이션이나 인프라, 실행환경과 같은 다른 계층을 말하는것.
di가 있으면, 다른 형태로 바꾸고 싶으면 매개변수만 바꾸고 코드의 수정이 필요없어짐.

```ts
// application/useCases/getMenusUseCase.ts
import { Menu } from '@/domain/entities/menu';
import { MenuRepository } from '@/domain/repositories/menuRepository';

export class GetMenusUseCase {
  constructor(private menuRepo: MenuRepository) {} // DI로 주입
  async execute(): Promise<Menu[]> {
    return this.menuRepo.findAll();
  }
}

// pages/api/menus.ts (Next.js API 라우트, 어댑터)
import { SupabaseMenuRepository } from '@/infra/repositories/supabaseMenuRepository';
import { GetMenusUseCase } from '@/application/useCases/getMenusUseCase';

export default async function handler(req, res) {
  const menuRepo = new SupabaseMenuRepository(); // 인프라에서 구현체 생성
  const useCase = new GetMenusUseCase(menuRepo); // DI로 주입
  const menus = await useCase.execute();
  res.status(200).json(menus);
}
```

데이터는 인프라 - dto - 도메인 객체 - 애플리케이션 - 클라이언트의 흐름으로 이동되고, di는 애플리케이션에서 레포지토리를 직접 만들지 않고 외부에서 주입해서 연결

ui에서 출력시킬 데이터의 목록을 생각하고 그에 맞게 dto를 구성하자. 
dto를 만들때 interface로 만들지, class로 만들지 생각할 수 있다. 혹은 타입별칭

3가지 중 어떤걸 골라야할까?

이들의 차이점을 알아보도록 하자. 

type은 확장성이 떨어짐. 무엇을 상속받아 확장하는거에 약함. (상속이 없음)
type이나 interface는 형식에 빈객체를 만들 방법이 없음. 
class는 형식을 표현할 수 있고 형태에 빈객체를 만들 수도 있지만, 코드량이 많다. 만드는 작업이 좀 번잡해짐. 

파라미터 같은건 빈객체나 확장이 필요없으니까 파라미터는 타입을 통해 만들기 
dto같은 확장이 필요한것들엔 type을 전혀 사용하지 않음. 

class로 빈객체를 만들어서 기본값 설정 및 최솟값만 넣어서 넘길것인지, 아니면 형식을 지정하고 interface를 사용할 것인지를 정하고 고르면 된다. 

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

레포지토리 보다 유즈케이스의 수가 더 많음 유즈케이스는 조합이고 레포지토리는 재료의 개수로, 조합이 많음. 

함수는 매개변수와 반비례 관계인것 처럼 레포지토리와 유즈케이스도 똑같다. 
함수를 하나로 다 만드려면 매개변수의 수가 늘어나지만, 함수를 여러개 만들면 매개변수의 수를 줄일 수 있다. 

어 속성을 잘못썼다 그럼 다 엔티티부터 다 싹 타입을 고쳐야하나?
전혀 아니다. 결국 어댑터에게 데이터를 제공해주는 레포지토리에서만 속성이름만 매핑으로 바꿔주면 됨. 어댑터에서는 아무것도 하면 안된다. 어댑터는 그냥 단순히 유즈케이스를 호출만해서 전달하는 역할

그니까 타입을 고치려들지말고, 변환함수들을 사용해서 쉽게 오류를 고칠 수 잇는거구나

```ts
const menus: Menu[] = (data || []).map(item => ({
      id: item.id,
      korName: item.kor_name,
      engName: item.eng_name,
      price: item.price
    }));
    console.log(menus);
    return menus;
  }
```

