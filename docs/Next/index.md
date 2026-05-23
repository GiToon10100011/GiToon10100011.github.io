---
layout: home-with-toc
title: "Next.js"
date: 2026-05-23 22:00:00 +0900
categories: Coding
has_children: true
nav_order: 7
---

# Next.js 14 (App Router) ⚡️

> React 위에 서버 렌더링·라우팅·번들링·배포 최적화를 얹은 풀스택 프론트엔드 프레임워크.

Next.js는 Vercel이 만든 React 메타 프레임워크다. <mark style="background: #D2B3FFA6;">파일 시스템 기반 라우팅</mark>과 <mark style="background: #D2B3FFA6;">서버 컴포넌트</mark>를 1급으로 지원해, SPA처럼 코드를 짜면서도 SSR/SSG/ISR을 자연스럽게 섞을 수 있게 해준다.

📎 공식 문서: <a href="https://nextjs.org/docs" target="_blank">nextjs.org/docs</a>

---

## Next.js가 풀어준 문제 🔎

순수 React만 쓰면 다음과 같은 고민거리가 항상 따라온다.

- 라우팅을 어떻게 정의할 것인가 (`react-router-dom` 직접 설정)
- 서버 사이드 렌더링은 어떻게 붙일 것인가 (Express + ReactDOMServer 직접 구현)
- 이미지·폰트·번들 최적화는 누가 책임지는가 (`webpack` 설정 노가다)
- 환경 변수·API 키 보안은 어디서 처리하는가 (별도 백엔드 필요)

Next.js는 이 모든 결정을 <mark style="background: #BBFABBA6;">관례(convention)</mark>로 흡수해버린다. 폴더를 만들면 라우트가 되고, 컴포넌트는 기본적으로 서버에서 렌더되며, `<Image>` 한 줄로 이미지 최적화가 끝난다.

---

## 두 가지 라우터 모델 🛤️

Next.js는 역사적으로 **Pages Router**와 **App Router** 두 모델을 지원한다.

| 항목 | Pages Router (~v12) | App Router (v13+) |
| --- | --- | --- |
| 위치 | `pages/` | `app/` |
| 기본 컴포넌트 | 클라이언트 컴포넌트 | <mark style="background: #D2B3FFA6;">서버 컴포넌트 (RSC)</mark> |
| 데이터 페칭 | `getServerSideProps`, `getStaticProps` | `async` 컴포넌트 + 확장 `fetch` |
| 레이아웃 | `_app.tsx` 단일 | 폴더별 `layout.tsx` 중첩 |
| 메타데이터 | `<Head>` 컴포넌트 | `metadata` export |
| 권장 | 유지보수 모드 | <mark style="background: #BBFABBA6;">신규 프로젝트 권장</mark> |

> 본 문서는 <mark style="background: #FFB86CA6;">App Router (v13+)</mark> 기준으로 작성한다.

---

## 설치와 프로젝트 생성 🛠️

```bash
# 공식 CLI로 새 프로젝트 생성
npx create-next-app@latest my-app

# 옵션 (대화형)
✔ TypeScript? Yes
✔ ESLint? Yes
✔ Tailwind CSS? Yes
✔ `src/` directory? Yes
✔ App Router? Yes
✔ Import alias `@/*`? Yes
```

생성 후 폴더 구조:

```
my-app/
├── src/
│   └── app/
│       ├── layout.tsx        # 루트 레이아웃 (필수)
│       ├── page.tsx          # 홈 페이지 (/)
│       ├── globals.css
│       └── favicon.ico
├── public/                   # 정적 파일
├── next.config.mjs
├── tsconfig.json
└── package.json
```

---

## 파일 시스템 라우팅 📁

> 폴더가 곧 URL. 파일이 곧 페이지/레이아웃이다.

### 기본 라우트

```
app/
├── page.tsx              → /
├── about/
│   └── page.tsx          → /about
└── tournament/
    └── page.tsx          → /tournament
```

각 폴더의 `page.tsx`가 해당 경로의 화면이 된다. <mark style="background: #FF5582A6;">`page.tsx`가 없는 폴더는 라우트로 노출되지 않는다</mark> (헬퍼 컴포넌트 폴더로 활용 가능).

### 동적 라우트

```
app/
└── game/
    └── [id]/
        └── page.tsx      → /game/1, /game/foo 등
```

```tsx
// app/game/[id]/page.tsx
interface IPageProps {
  params: { id: string };
}

export default function GamePage({ params }: IPageProps) {
  return <h1>Game {params.id}</h1>;
}
```

여러 세그먼트를 잡으려면 `[...slug]`(catch-all), 옵셔널이면 `[[...slug]]`을 쓴다.

### 라우트 그룹 — `(name)`

URL에 영향을 주지 않으면서 폴더만 묶는다. 인증·비인증 영역 레이아웃을 분기할 때 유용.

```
app/
├── (auth)/
│   ├── login/page.tsx    → /login
│   └── signup/page.tsx   → /signup
└── (main)/
    ├── layout.tsx        # 메인 레이아웃
    └── page.tsx          → /
```

### 특수 파일

| 파일 | 역할 |
| --- | --- |
| `layout.tsx` | 자식 라우트 공통 레이아웃 (중첩 가능) |
| `page.tsx` | 해당 경로의 화면 |
| `loading.tsx` | Suspense 폴백 자동 적용 |
| `error.tsx` | 에러 바운더리 (클라이언트 컴포넌트 필수) |
| `not-found.tsx` | 404 화면 |
| `template.tsx` | layout과 비슷하지만 매 네비게이션마다 재마운트 |
| `route.ts` | API Route (Route Handler) |

---

## 서버 컴포넌트 vs 클라이언트 컴포넌트 🧩

> App Router에서 모든 컴포넌트는 <mark style="background: #D2B3FFA6;">기본적으로 서버 컴포넌트(RSC)</mark>다. 클라이언트 동작이 필요한 컴포넌트만 명시적으로 `"use client"`를 선언한다.

### 서버 컴포넌트 (RSC, 기본값)

```tsx
// app/page.tsx — 'use client' 없음 → 서버 컴포넌트
async function fetchGames() {
  const res = await fetch("https://api.rawg.io/api/games");
  return res.json();
}

export default async function Home() {
  const games = await fetchGames(); // 서버에서 await
  return <ul>{games.results.map(g => <li key={g.id}>{g.name}</li>)}</ul>;
}
```

- 서버에서만 실행 (브라우저 번들에 코드 포함 안 됨)
- `async/await` 직접 사용 가능
- DB·파일시스템·환경 변수 직접 접근 가능
- 단, <mark style="background: #FF5582A6;">`useState`/`useEffect`/이벤트 핸들러 사용 불가</mark>

### 클라이언트 컴포넌트

```tsx
"use client";

import { useState } from "react";

export default function Counter() {
  const [n, setN] = useState(0);
  return <button onClick={() => setN(n + 1)}>{n}</button>;
}
```

- 파일 최상단에 `"use client"` 지시어
- 브라우저 번들에 포함, 하이드레이션됨
- 훅·이벤트 핸들러·브라우저 API 사용 가능

### 사용 기준 (정리)

| 상황 | 선택 |
| --- | --- |
| 데이터 페칭, DB 접근 | 서버 |
| API 키·시크릿 사용 | 서버 |
| `useState`, `useEffect`, `useReducer` | 클라이언트 |
| `onClick`, `onChange` 등 이벤트 | 클라이언트 |
| `window`, `localStorage` | 클라이언트 |
| 외부 라이브러리(상태/UI) 래핑 | 클라이언트 |

> 📝 서버 컴포넌트는 클라이언트 컴포넌트를 자식으로 가질 수 있다. <mark style="background: #FF5582A6;">반대는 불가</mark>(클라이언트 컴포넌트 안에서는 서버 컴포넌트를 직접 import 못함. children prop으로 주입은 가능).

---

## 레이아웃 중첩 🪟

`layout.tsx`는 자식 라우트들의 공통 셸을 만든다. <mark style="background: #BBFABBA6;">네비게이션 시에도 리마운트되지 않아 상태가 유지</mark>된다.

```
app/
├── layout.tsx           # 루트 (HTML/Body)
├── page.tsx             # /
└── tournament/
    ├── layout.tsx       # /tournament 하위 공통 레이아웃
    └── page.tsx         # /tournament
```

```tsx
// app/layout.tsx — 루트 레이아웃 (필수)
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <header>나의 헤더</header>
        {children}
        <footer>푸터</footer>
      </body>
    </html>
  );
}
```

---

## 데이터 페칭 📡

### 확장된 `fetch`

Next.js는 표준 `fetch`를 확장해 캐시 동작을 옵션으로 제어한다.

```tsx
// 빌드 타임 캐시 (기본값, SSG와 유사)
const res = await fetch(url, { cache: "force-cache" });

// 매 요청마다 새로 (SSR과 유사)
const res = await fetch(url, { cache: "no-store" });

// N초마다 재검증 (ISR과 유사)
const res = await fetch(url, { next: { revalidate: 60 } });

// 태그 기반 무효화
const res = await fetch(url, { next: { tags: ["games"] } });
// 어디서든:
import { revalidateTag } from "next/cache";
revalidateTag("games");
```

### 동적 세그먼트 사전 생성 — `generateStaticParams`

```tsx
// app/game/[id]/page.tsx
export async function generateStaticParams() {
  const games = await fetch("...").then(r => r.json());
  return games.map(g => ({ id: String(g.id) }));
}
```

빌드 타임에 위 함수의 반환값으로 가능한 경로들을 미리 생성한다.

---

## 메타데이터 API 🏷️

`<Head>` 컴포넌트 대신 export 형태로 정적/동적 메타데이터를 선언한다.

```tsx
// app/layout.tsx — 정적 메타데이터
export const metadata = {
  title: "툰로그",
  description: "샛파란 개발자의 공부 블로그",
};

// app/game/[id]/page.tsx — 동적 메타데이터
export async function generateMetadata({ params }) {
  const game = await fetch(`https://api.rawg.io/api/games/${params.id}`)
    .then(r => r.json());
  return {
    title: game.name,
    description: game.description_raw?.slice(0, 160),
    openGraph: { images: [game.background_image] },
  };
}
```

---

## API Route (Route Handler) 🔌

`app/api/<path>/route.ts` 파일은 HTTP 엔드포인트가 된다.

```ts
// app/api/games/route.ts
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get("q");

  const res = await fetch(
    `https://api.rawg.io/api/games?search=${q}&key=${process.env.RAWG_API_KEY}`
  );
  const data = await res.json();
  return NextResponse.json(data);
}

export async function POST(request: Request) {
  const body = await request.json();
  // ...
  return NextResponse.json({ ok: true });
}
```

> ❗️ **API Route는 API 키 프록시 용도로 자주 쓴다.** 클라이언트에 키를 노출하지 않고 서버에서 외부 API를 호출한 뒤 응답만 전달.

---

## 환경 변수 🔐

```
# .env.local
DATABASE_URL=postgres://...        # 서버에서만 접근 가능
NEXT_PUBLIC_GA_ID=G-XXXXX          # NEXT_PUBLIC_ 접두사 → 클라이언트 번들에 포함
```

```tsx
process.env.DATABASE_URL          // 서버 컴포넌트·API Route에서만 OK
process.env.NEXT_PUBLIC_GA_ID     // 어디서든 OK (브라우저에 노출됨)
```

⚠️ <mark style="background: #FF5582A6;">`NEXT_PUBLIC_` 접두사를 붙이면 빌드 결과물에 평문으로 박혀버린다</mark>. 진짜 시크릿은 절대 접두사를 붙이지 말 것.

---

## 이미지·폰트 최적화 🖼️

### `<Image>`

```tsx
import Image from "next/image";

<Image
  src="/cover.jpg"
  alt="cover"
  width={1200}
  height={630}
  priority         // LCP 후보면 priority
  sizes="(max-width: 768px) 100vw, 50vw"
/>
```

자동으로 WebP/AVIF 변환, lazy load, 반응형 srcset 생성.

외부 도메인 이미지는 `next.config.mjs`에 등록 필요:

```js
// next.config.mjs
export default {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "media.rawg.io" },
    ],
  },
};
```

### `next/font`

```tsx
// app/layout.tsx
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="ko" className={inter.className}>
      <body>{children}</body>
    </html>
  );
}
```

빌드 타임에 폰트 파일을 셀프 호스팅으로 가져와 CLS 0, 외부 요청 0을 달성.

---

## 네비게이션 🧭

```tsx
import Link from "next/link";

<Link href="/tournament" prefetch>토너먼트 시작</Link>;
```

- `<Link>`는 자동으로 백그라운드 prefetch (뷰포트 진입 시)
- 프로그램적 이동:

```tsx
"use client";
import { useRouter } from "next/navigation";

const router = useRouter();
router.push("/result");
router.refresh(); // 서버 컴포넌트 재실행
```

---

## 자주 쓰는 명령 📜

```bash
npm run dev       # 개발 서버 (포트 3000)
npm run build     # 프로덕션 빌드
npm run start     # 프로덕션 서버 (빌드 후)
npm run lint      # ESLint
```

---

## Next.js 사용 시 함정과 팁 ⚠️

❗️ **클라이언트 컴포넌트 경계를 최대한 깊숙이 밀어넣기**

페이지 전체에 `"use client"`를 박으면 RSC의 장점이 사라진다. 상태가 필요한 잎(leaf) 컴포넌트만 클라이언트로 격리하고, 그 위는 서버 컴포넌트로 유지하자.

❗️ **`fetch`는 자동 중복 제거된다**

같은 URL·옵션의 `fetch`를 한 렌더 트리에서 여러 번 호출해도 한 번만 실제 요청이 나간다. 굳이 중복 제거를 직접 안 해도 됨.

❗️ **`use client` 안에서 `fs`/`crypto` 등 Node API 쓰지 말 것**

번들에 포함되면 빌드 에러 발생. 서버 전용 코드는 서버 컴포넌트나 API Route에 격리.

❗️ **`searchParams`는 props로 들어온다 (서버 컴포넌트에서)**

```tsx
// app/search/page.tsx
export default function Search({ searchParams }: {
  searchParams: { q?: string };
}) {
  return <p>검색어: {searchParams.q}</p>;
}
```

❗️ **`async` 서버 컴포넌트는 자식만 가능**

`async function Page() {}`는 OK. `async function RootLayout() {}`도 OK. 하지만 클라이언트 컴포넌트는 `async`로 만들 수 없다.

---

## 3계층 아키텍처와의 매칭 🏗️

> Next.js App Router의 폴더 모델은 <mark style="background: #BBFABBA6;">Presentation / Business / Data 3계층</mark>과 자연스럽게 분리된다.

| 계층 | 위치 (예시) |
| --- | --- |
| Presentation | `src/app/**/page.tsx`, `src/components/**` |
| Business | `src/modules/**` (검색·토너먼트·결과 로직) |
| Data | `src/lib/externalApiClient.ts`, `src/app/api/**/route.ts` |

- 서버 컴포넌트가 Business → Data 호출
- 클라이언트 컴포넌트는 Business를 hook으로 사용
- Data 모듈은 서버에서만 import (API 키 보호)

---

## 참고 자료 📚

- <a href="https://nextjs.org/docs/app" target="_blank">App Router 공식 문서</a>
- <a href="https://nextjs.org/learn" target="_blank">Next.js 공식 튜토리얼</a>
- <a href="https://react.dev/reference/rsc/server-components" target="_blank">React 서버 컴포넌트 (react.dev)</a>
- <a href="https://vercel.com/templates" target="_blank">Vercel 템플릿</a>
