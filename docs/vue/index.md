---
layout: home-with-toc
title: Vue
date: 2025-03-30 20:32:00 +0900
categories: Coding
nav_order: 999
---

# Vue

> Vue는 프론트엔드 프레임워크로, 컴포넌트 기반의 라이브러리이다. 

Vue는 다음과 같은 특징이 있다. 

1. 컴포넌트 기반의 라이브러리
2. 반응형 데이터 바인딩
3. 가볍고 빠른 성능
4. 모바일 친화적

```js
<input class="x-input" dir="rtl" v-model.number="x" />
<span class="resultWindow" v-text="result">0</span>
<input
	type="submit"
	value="계산하기"
	class="calculate-btn"
	@click.prevent="calculateHandler"
/>
```
위는 vue를 사용한 html의 일부분이다. 자체 속성을 통해 데이터를 바인딩하고, 이벤트를 처리할 수 있다. 
또한, window객체를 일절 사용하지 않으며 자체 핸들러를 통해 이벤트를 처리하는 것을 확인할 수 있다.

```js
Vue.createApp({
  data() {
    return {
      x: 20, 
      y: 20,
      result: 0
    }
  },
  methods: {
    calculateHandler(){
      this.result = this.x + this.y;
    }
  },
}).mount("#app");
```

스크립트에서는 MVC패턴에 대한 객체를 생성하고, 데이터를 바인딩하고, 이벤트를 처리하는 것을 확인할 수 있다. 