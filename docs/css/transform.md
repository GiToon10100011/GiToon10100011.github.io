---
layout: home-with-toc
title: "요소 변형"
date: 2024-02-03 21:01:00 +0900
categories: etc
parent: CSS
---

# CSS Transform

> transform(변형) 속성은 요소를 변형시키는 속성이다.

2차원 변형은 수평이나 수직으로 웹 요소를 변형 시키며 크기나 각도, 위치만 지정하여 2차원 좌표를 사용한다.
3찬원 변형은 기존의 x, y축에 z축(앞, 뒤)를 추가하여 원근감이 생긴다. 값이 커질 수록 보는 사람쪽으로 가까워진다.

다양한 변형함수들을 알아보자. 해당 변형함수들은 사용시 `transform : 변형함수()` 형식으로 사용된다.

- `translate` - 요소를 이동시키는 속성
- `rotate` - 요소를 회전시키는 속성, 값을 양수로 두면 시계방향, 음수로 두면 반시계방향으로 회전한다.
- `scale` - 요소를 확대하거나 축소하는 속성
- `skew` - 요소를 기울이는 속성
- `matrix` - 요소를 변형시키는 속성, 4\*4 행렬을 사용하여 이동, 확대/축소, 회전 등의 변환을 3차원 함수에서 지정해준다.

- `transform-origin` - 요소를 변형시키는 속성의 기준점을 설정하는 속성

  ```css
  /* 값이 하나 */
  transform-origin: center;

  /* 값이 두개, (x, y) */
  transform-origin: left top;
  ```

- `transform-style` - 요소를 변형시키는 속성의 기준점을 설정하는 속성, 부모 요소에 적용한 3d변형을 하위 요소에도 적용시킨다. 값은 `flat`, `preserve-3d`이 있다. 요소를 3차원으로 보이게 하려면 `preserve-3d`를 사용해야한다.

---

## ⚠️ transform 주의사항

transform 속성은 해당 함수들을 한번에 적용할 수 있는데, 이때 주의해야하는것은 순서이다. 순서에 따라 변형되는 결과가 달라질 수 있기 때문이다. (예: `rotate(45deg) translateX(100px)`와 `translateX(100px) rotate(45deg)`는 서로 다른 결과를 만듦)

이는 CSS transform 함수들의 적용 순서가 다른 결과를 만드는 이유는 좌표계 변환의 누적 효과 때문이다. <span style="color: red;">rotate를 먼저 사용한다면 좌표계도 함께 회전</span>되어 좌표계가 회전된 채로 요소를 이동하면 원하는 결과가 나오지 않을 수 있다. 따라서 `rotate속성`을 마지막에 사용하는 것이 의도한 바대로 대부분 작동할 것이다.

`scale`도 마찬가지로 비슷한 이유로 마지막에 적용되어야 한다. 이때, `rotate`보다 마지막에 사용되어야한다.

좀 더 자세히 알아보자.

`scale`이 `rotate`보다 나중에 적용해야 하는 이유:

1. **비율 유지**: `scale`을 먼저 적용하면 회전 시 왜곡 발생

   ```css
   /* 나쁜 예시 - scale 먼저 적용 */
   transform: scale(1.5) rotate(30deg);
   /* → 회전 시 확대된 요소가 찌그러져 보임 */

   /* 좋은 예시 - rotate 먼저 적용 */
   transform: rotate(30deg) scale(1.5);
   /* → 원본 비율 유지한 채 회전 후 안정적으로 확대 */
   ```

2. **좌표계 보존**: `scale`은 요소의 좌표계 자체를 변경함

   - `scale(2)` 적용 시 → 1px 이동 = 실제 2px 이동 효과
   - 회전 후 `scale` 적용 시: 원본 좌표계에서 회전 → 정확한 위치 계산 가능

3. **반전 효과 정확성**:

   ```css
   /* 좌우 반전 후 회전 (의도치 않은 결과) */
   transform: scaleX(-1) rotate(25deg);

   /* 회전 후 좌우 반전 (의도한 대로 작동) */
   transform: rotate(25deg) scaleX(-1);
   ```

최종 사용법

```css
transform: translate(100px, 100px) rotate(45deg) scale(1.2);
```

---

## translate

> translate 속성은 요소를 이동시키는 속성이다.

```css
transform: translate(100px, 100px);
```

- `translate(x, y)` - 요소를 x축과 y축으로 이동시키는 속성
- `translateX(x)` - 요소를 x축으로 이동시키는 속성
- `translateY(y)` - 요소를 y축으로 이동시키는 속성
- `translateZ(z)` - 요소를 z축으로 이동시키는 속성
- `translate3d(x, y, z)` - 요소를 x축, y축, z축으로 이동시키는 속성

`translate` 속성은 [position 속성](/docs/css/layout.html#position)과 함께 사용되어 요소를 이동시키는 것이 일반적이다. <span style="color: yellowgreen;">요소의 위치는 기준점이 왼쪽 위 꼭짓점이 기준</span>인데, `translate` 속성을 통해 <span style="color: yellowgreen;">기준점을 중간으로 변경</span>할 수 있다.

```css
div {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
```

---

## rotate

> rotate 속성은 요소를 회전시키는 속성이다.

```css
transform: rotate(45deg);
```

- `rotate(angle)` - 요소를 회전시키는 속성
- `rotateX(angle)` - 요소를 x축으로 회전시키는 속성
- `rotateY(angle)` - 요소를 y축으로 회전시키는 속성
- `rotateZ(angle)` - 요소를 z축으로 회전시키는 속성
- `rotate3d(x, y, z, angle)` - 요소를 x축, y축, z축으로 회전시키는 속성

css 에서는 js와 달리 주로 `각도(degree)` 단위를 사용한다. `1도(1deg)`는 원 한 바퀴`(360도)`의 `1/360`을 의미한다. CSS에서도 `라디안(rad)` 단위를 사용할 수 있지만, <span style="color: yellowgreen;">일반적으로 더 직관적인 <span style="color: white;">`degree`</span> 단위가 더 자주 사용</span>된다. <span style="color: #aaa;">(JavaScript의 Math 관련 함수는 기본 단위로 라디안을 사용)</span>

---

## scale

> scale 속성은 요소를 확대하거나 축소하는 속성이다.

```css
transform: scale(1.2);
```

- `scale(x, y)` - 요소를 x축과 y축으로 확대하거나 축소하는 속성, 값을 하나만 주면 해당 값이 x와 y에 모두 적용된다.
- `scaleX(x)` - 요소를 x축으로 확대하거나 축소하는 속성
- `scaleY(y)` - 요소를 y축으로 확대하거나 축소하는 속성
- `scaleZ(z)` - 요소를 z축으로 확대하거나 축소하는 속성
- `scale3d(x, y, z)` - 요소를 x축, y축, z축으로 확대하거나 축소하는 속성

`scale` 속성을 통해 요소들을 <span style="color: yellowgreen;">좌우, 상하반전</span> 시킬 수 있다.

```css
/* 좌우반전 */
div {
  transform: scaleX(-1);
}

/* 상하반전 */
div {
  transform: scaleY(-1);
}
```

---

## skew

> skew 속성은 요소를 기울이는 속성이다(왜곡).

```css
transform: skew(45deg);
```

- `skew(x, y)` - 요소를 x축과 y축으로 기울이는 속성, 값이 하나라면 y축에 대한 왜곡 각도는 0으로 간주된다.
- `skewX(x)` - 요소를 x축으로 기울이는 속성
- `skewY(y)` - 요소를 y축으로 기울이는 속성

`skew`<span style="color: #aaa;">는 z축 값이 없다.</span>

---

## matrix

> matrix 속성은 요소를 변형시키는 속성이다.

```css
transform: matrix(1, 0, 0, 1, 0, 0);
```

- `matrix(a, b, c, d, e, f)` - 요소를 변형시키는 속성
  - a: 가로 방향 확대/축소 (scaleX)
  - b: 세로 방향 기울이기 (skewY)
  - c: 가로 방향 기울이기 (skewX)
  - d: 세로 방향 확대/축소 (scaleY)
  - e: x축 이동 (translateX)
  - f: y축 이동 (translateY)

---

## perspective 속성

> perspective 속성은 요소를 3D로 변형시키는 속성이다.

```css
transform: perspective(1000px);
```

- `perspective` - 요소를 3D로 변형시키는 속성과 함께 사용되는 속성, 값이 클수록 원근감이 덜하다.

  <p style="color: #aaa;">가끔 브라우저 호환성을 위해 <code>perspective</code> 사용시 <a href="/docs/css/index.html#브라우저-접두사">브라우저 접두사</a>를 붙여야 하는 경우가 있다.</p>

- `perspective-origin` - 요소를 3D로 변형시키는 속성의 기준점을 설정하는 속성, `transform-origin`과 같이 x축, y축 값을 설정할 수 있다.

  ```css
  perspective-origin: center;
  perspective-origin: left top;
  ```

- `backface-visibility` - 요소를 3D로 변형시키는 속성의 기준점을 설정하는 속성, 값은 `visible`, `hidden이` 있다.
