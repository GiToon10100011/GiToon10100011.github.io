---
layout: post
title: "Components"
date: 2024-09-08 22:24:43 +0900
categories: Coding
parent: REACT
---

# React Components

2018년 이전에는 모든 REACT 컴포넌트는 클래스형으로 이루어져 있었으나, 이후부터 REACT 컴포넌트는 전부 <span style = "color : yellowgreen">함수형 컴포넌트</span>로 바뀌었다. <br><br>

함수형 컴포넌트를 만들 때는 첫글자를 대문자로 이름을 만드는것이 형식적이다. <bR>
컴포넌트는 함수 이름을 홑태그로 불러오는 형식을 띠며, 기존의 HTML과 달리,<span style = "color: crimson">반드시 마지막에 /로 태그의 끝을 명시</span>해줘야한다.<br><br>

함수형 컴포넌트의 return문은 출력부라고 부른다. 이는 기존의 return과 다르게, ui 화면에 출력시켜줄 수 있는 공간을 의미한다. 절대로 배열 및 객체의 형태는 반환할 수 없다. <br>
출력부의 공간에는 <span style = "color: crimson">반드시 숫자, 문자형태의 자료형</span>만 들어올 수 있다.

REACT에서는 <span style = "color: crimson">src 폴더 밖의 파일 import가 불가능</span>하므로, 컴포넌트들은 src 폴더 안에 components 폴더를 제작하여 그 속에서 관리한다.

---

## 컴포넌트 예시(부모)

```jsx
import Header from "./components/Header.js";
function App() {
  return (
    <>
      <div className="App">
        <Header />
      </div>
    </>
  );
}

export default App;
```

js문법의 module방식으로 가능해진 REACT는, 부모는 항상 자식을 import받아서 태그요소를 반환한다.

`<> </>`는 <span style = "color: yellowgreen">Fragment Element</span>로, 반드시 최상위 부모가 존재해야하는 [JSX문법](/docs/2024-09-18-React_JSX.html)에서는, 최상위부모를 다음과 같이 아무 의미가 없는 태그인 Fragment Element를 사용한다.
<br><br>

## 컴포넌트 예시(자식)

```jsx
function Header() {
  return (
    <header>
      <h1>Header</h1>
    </header>
  );
}

export default Header;
```

자식에서는 반드시 제작한 컴포넌트를 <span style = "color: crimson">export</span>해야 부모요소에서 import로 해당 컴포넌트를 받아올 수 있다.

---

<span style="display: none">#style-components</span>

# Style Components

REACT에서는 SCSS, CSS보다, 스타일 컴포넌트를 많이 사용하게 된다.
