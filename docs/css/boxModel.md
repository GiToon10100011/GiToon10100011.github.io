---
layout: post-with-comments
title: "박스 모델"
date: 2024-09-07 23:12:00 +0900
categories: etc
parent: CSS
---

# 박스 모델

<div style = "display: flex; gap: 10px">
  <img src="/assets/images/css/boxModel/boxModel.png" alt="박스 모델" style="width: 50%;">
  
  <p>
    개발자 도구창에서 왼쪽의 사진처럼 박스모델을 확인해 볼 수 있다. Computed(계산됨) 탭에서 브라우저에서 알아서 계산해서 설정해주는 값을 확인할 수 있다.
  </p>
</div>

---

## Margin

- `margin` - 아래 속성들의 축약형으로 `margin: 10px 20px 30px 40px;`와 같은 형식으로 사용한다. 이 때, 축약형은 <span style="color: yellowgreen;">4개의 값인 경우, 위, 오른쪽, 아래, 왼쪽 시계 방향 순서</span>로 지정해줄 수 있다. 3개의 값을 지정하면 <span style="color: yellowgreen;">위, 좌우, 아래 순서</span>로 지정해줄 수 있다. 2개의 값을 지정하면 <span style="color: yellowgreen;">상하, 좌우 순서</span>로 지정해줄 수 있다. 1개의 값을 지정하면 <span style="color: yellowgreen;">모든 방향에 동일한 값</span>을 지정해줄 수 있다.
- `margin-top` - 테두리와 다른 요소 사이의 <u>위쪽 여백</u>
- `margin-right` - 테두리와 다른 요소 사이의 <u>오른쪽 여백</u>
- `margin-bottom` - 테두리와 다른 요소 사이의 <u>아래쪽 여백</u>
- `margin-left` - 테두리와 다른 요소 사이의 <u>왼쪽 여백</u>

✅ **Margin 속성의 응용**

```css
div {
  margin: 0 auto;
}
```

위 코드에서 `div` 요소의 좌우 여백을 0으로 지정하고 위아래 여백을 자동으로 지정하여 가운데 정렬을 할 수 있다. 이때 주의해야할 점은 `div`에는 `width`가 지정되어 있어야 가운데 정렬이 된다.

이때, `width`값을 고정값으로 지정하고 그리드 레이아웃을 사용하여 레이아웃을 일관적으로 가져갈 수 있게된다.

---

## Padding

- `padding` - 아래 속성들의 축약형으로 `padding: 10px 20px 30px 40px;`와 같은 형식으로 사용한다. 이 때, 축약형은 <span style="color: yellowgreen;">margin속성과 동일하게</span> 지정해줄 수 있다.
- `padding-top` - 테두리와 내용 사이의 <u>위쪽 여백</u>
- `padding-right` - 테두리와 내용 사이의 <u>오른쪽 여백</u>
- `padding-bottom` - 테두리와 내용 사이의 <u>아래쪽 여백</u>
- `padding-left` - 테두리와 내용 사이의 <u>왼쪽 여백</u>

---

## Border

- `border` - 아래 속성들의 축약형으로, `border: 1px solid black;`와 같은 형식으로 사용한다. 이 때, 축약형은 <span style="color: yellowgreen;">테두리 두께, 테두리 스타일, 테두리 색상</span>을 한번에 지정해줄 수 있다.
- `border-radius` - 테두리 모서리를 둥글게 만들어준다. 이 때, 둥글게 만들어주는 값은 테두리 모서리의 반지름이다. 단위는 `px, %, em`으로 준다. `margin`과 유사하게 4개의 값을 지정할 수 있다.

  값이 1개일 경우 | 좌상단, 우상단, 우하단, 좌하단 모두 동일한 값
  값이 2개일 경우 | 좌상단, 우상단, 우하단, 좌하단 순서대로 값 지정
  값이 3개일 경우 | 좌상단, 우상단, 우하단, 좌하단 순서대로 값 지정
  값이 4개일 경우 | 좌상단, 우상단, 우하단, 좌하단 순서대로 값 지정

  이때, border-radius는 중첩해서 사용할 수도 있다. 예를 들어,

  ```css
  border-radius: 20px 10px / 120px 50px;
  ```

  <div style="display: flex; gap: 20px; align-items: center;">
    <div style="border: 2px solid white; width: 200px; height: 150px; border-radius: 20px 10px / 120px 50px;">
      <div style="padding: 20px;">
        타원형 모서리 예시
      </div>
    </div>
  </div>

  위 코드는 다음과 같이 해석됩니다:

  - `20px 10px`: 첫 번째 값들은 시계방향으로 각 모서리에 순서대로 적용된다.

  - `120px 50px`: 두 번째 값들도 같은 방식으로 적용된다.

  즉, 각 모서리는 (가로크기/세로크기) 형태로 타원을 그리게 된다:

  - 왼쪽 위 모서리: `20px/120px`
  - 오른쪽 위 모서리: `10px/50px`
  - 오른쪽 아래 모서리: `20px/120px`
  - 왼쪽 아래 모서리: `10px/50px`

- `border-width` - 테두리 두께, 값은 `thin, medium, thick, px` 등이 있다.

  border-width도 값을 여러개 지정할 수 있다. 예를 들어,

  ```css
  border-width: 10px 20px 30px 40px;
  ```

  위 코드에서 10px은 위쪽 테두리 두께, 20px은 오른쪽 테두리 두께, 30px은 아래쪽 테두리 두께, 40px은 왼쪽 테두리 두께이다.

- `border-color` - 테두리 색상
- `border-style` - 테두리 스타일, 값은 `dotted, dashed, solid, double, groove, ridge, inset, outset` 등이 있다.

  `dotted` | 점선
  `dashed` | 대쉬선
  `solid` | 실선
  `double` | 이중선
  `groove` | 3D 홈이 파인 효과 (테두리가 안으로 들어간 것처럼 보임)
  `ridge` | 3D 돌출된 경계 효과 (groove의 반대 방향)
  `inset` | 요소가 안으로 눌린 듯한 3D 효과
  `outset` | 요소가 바깥으로 튀어나온 듯한 3D 효과 (inset의 반대 효과)

⚠️ **Border의 자연스러운 transition 효과**

```css
div {
  border: 1px solid transparent;
  transition: border-color 0.3s ease;
}

div:hover {
  border: 1px solid black;
}
```

위 코드에서 `div` 요소에 마우스를 올리면 테두리 색상이 검정색으로 변경된다. 이렇게 자연스러운 효과를 주기 위해서는 `transition` 속성을 사용해야 한다.

`border`이 없는 상태에서 `border`가 생기게 되면 요소의 크기가 조금 줄어들게 된다. 이 때문에 크기가 갑자기 변동되어 부자연스럽게 `transition`이 되는 현상이 발생한다. 이를 방지하기 위해서는 미리 `border`을 지정하고 투명하게 만들어놓아 크기의 변동이 없도록 하면 된다.

---

## Width & Height

- `width` - 요소의 너비
- `height` - 요소의 높이
- `min-width` - 요소의 최소 너비
- `min-height` - 요소의 최소 높이
- `max-width` - 요소의 최대 너비
- `max-height` - 요소의 최대 높이

> 요소에게 width나 height를 따로 지정하지 않으면 내용이 표시될 만큼만 크기가 표시된다. (fit-content) 따라서 <span style="color: yellowgreen;">따로 width, height를 지정하지 않고 padding을 통해 보기 좋게 꾸밀 수</span>도 있다.

---

## 투명도 관련 속성

- `opacity` - 요소의 투명도를 지정한다. 값은 `0~1` 사이의 숫자로 지정한다.
- `rgba` - 요소의 투명도를 지정한다. 값은 `rgba(red, green, blue, alpha)` 형식으로 지정한다.
- `hsla` - 요소의 투명도를 지정한다. 값은 `hsla(hue, saturation, lightness, alpha)` 형식으로 지정한다.
