---
layout: post
title: "애니메이션"
date: 2024-09-07 23:12:00 +0900
categories: etc
parent: CSS
---

# 애니메이션

## Transition

> 트랜지션은 웹 요소의 스타일 속성이 조금씩 자연스럽게 바뀌게 해주는 속성이다.

```css
transition: all 1s linear 0.5s;
```

- `transition` - 아래 속성들의 축약형. `transition: property duration timing-function delay`와 같은 형식으로 사용한다. 필요한 속성들만 사용하여 불필요한 속성들은 생략하여 사용할 수 있다.
- `transition-property` - 애니메이션을 적용할 요소의 스타일 속성을 지정한다. 값은 `all, none` 또는 속성 이름으로 지정한다.
- `transition-duration` - 애니메이션의 지속 시간을 지정한다. 기본값은 `0s`이다.
- `transition-timing-function` - 애니메이션의 타이밍 함수를 지정한다. 값은 `ease, ease-in, ease-out, ease-in-out, linear, cubic-bezier(n,n,n,n)` 등이 있다.

  `ease` | 기본값
  `ease-in` | 시작을 느리게 함.
  `ease-out` | 끝을 느리게 함.
  `ease-in-out` | 시작과 끝을 느리게 함.
  `linear` | 일정하게 함.

- `transition-delay` - 애니메이션의 지연 시간을 지정한다. 기본값은 `0s`이다.

transition을 여러 대상한테 적용할 때는 쉼표(`,`)로 구분하여 여러 대상에 적용할 수 있다.

```css
transition: all 1s linear 0.5s, background-color 0.5s ease-in-out 0.5s;
```

좀 더 복잡한 트랜지션을 구동시키기 위해 cubic-bezier 함수를 사용할 수 있다.

```css
transition: all 1s cubic-bezier(0.25, 0.1, 0.25, 1);
```

cubic-bezier 함수는 4개의 값을 받아서 애니메이션의 타이밍을 지정한다. <br>

- <a href="https://cubic-bezier.com/#.17,.67,.83,.67" target="_blank">cubic-bezier 함수 테스트</a>

- <a href="https://easings.net/" target="_blank">다양한 transition 타이밍 함수 확인</a>

<span style="color: red;">transition을 사용할 때 유의할 점</span>은 특정 스타일 속성은 transition이 적용되지 않는다. <br>

> `display`, `z-index`, `속성의 값이 auto일 경우` 등

---

## Animation

> 애니메이션은 웹 요소의 스타일 속성이 조금씩 자연스럽게 바뀌게 해주는 속성이다.

```css
animation: rotation 1s linear 0.5s infinite;
```

- `animation` - 아래 속성들의 축약형. `animation: name duration timing-function delay iteration-count direction fill-mode play-state`와 같은 형식으로 사용한다. 필요한 속성들만 사용하여 불필요한 속성들은 생략하여 사용할 수 있다. 이때 순서가 중요한 속성들이 몇가지 존재한다.

  > `duration`(필수)은 항상 `delay`(선택)보다 앞에 위치 <br> `iteration-count`는 `duration`/`delay` 다음에 위치 <br> `animation-duration`은 필수값 <br>
  > 다른 속성들은 생략 가능하나, 포함할 경우 지정된 순서를 따라야 함.

  ```css
  /* duration(1s) → delay(0.5s) */
  animation: slide 1s ease 0.5s 3 alternate;

  /* duration만 사용 (delay 생략) */
  animation: pulse 200ms linear infinite;

  /* 잘못된 예: delay가 duration 앞에 위치 */
  animation: bounce 0.5s 2s ease; /* 0.5s를 delay로, 2s를 duration로 해석됨! */
  ```

- `animation-name` - keyframes로 지정한 애니메이션의 이름을 지정한다.
- `animation-duration` - 애니메이션의 지속 시간을 지정한다. 기본값은 `0s`이다.
- `animation-name` - keyframes로 지정한 애니메이션의 이름을 지정한다.
- `animation-duration` - 애니메이션의 지속 시간을 지정한다. 기본값은 `0s`이다.

- `animation-timing-function` - 애니메이션의 타이밍 함수를 지정한다. 기본값은 `ease`이다.
- `animation-delay` - 애니메이션의 지연 시간을 지정한다. 기본값은 `0s`이다.
- `animation-iteration-count` - 애니메이션의 반복 횟수를 지정한다. 기본값은 `1`이다. infinite을 주면 무한반복을 한다.
- `animation-direction` - 애니메이션의 방향을 지정한다. 값은 `normal, reverse, alternate, alternate-reverse` 등이 있다. alternate은 반복 혹은 끝날시 방향을 반대로 바꾼다.
- `animation-fill-mode` - 애니메이션의 시작과 끝을 지정한다. 기본값은 `none`이다.
- `animation-play-state` - 애니메이션의 재생 상태를 지정한다. 기본값은 `running`이다.

transition과 마찬가지로 애니메이션이 적용이 되지 않는 스타일 속성들이 있으므로 참고하자.

---

## Keyframes

> 키프레임은 애니메이션의 시작과 끝을 지정하는 속성이다.

animation 속성을 사용하기 위해 키프레임을 먼저 지정해야 한다.

```css
@keyframes name {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

/* 또는 */

@keyframes name {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
```

해당 중단점들 내에 선택자를 사용하여 애니메이션을 적용할 수도 있다.

```css
@keyframes name {
  to {
    span {
      transform: rotate(0deg);
    }
  }
}
```
