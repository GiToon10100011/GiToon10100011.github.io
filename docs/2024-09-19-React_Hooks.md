---
layout: post
title: "React Hooks"
date: 2024-09-19 23:08:13 +0900
categories: Coding
parent: REACT
---

# React Hooks

> - react에서 hook을 import할 수 있음.

- 모든 훅은 함수이며, use~로 시작한다.

### 목차

1. [useState](#1-usestate)
2. [useRef](#2-useref)
3. [useEffect](#3-useeffect)
4. [useReducer](#4-usereducer)
5. [useContext](#5-usecontext)
6. [useMemo & React.memo()](#6-usememo--reactmemo)
7. [useCallback](#7-usecallback)
8. [useNavigate](#8-usenavigate)

<span style = "display : none">#useState</span>

## 1. useState

### State

> 원본 DOM을 건들지 않고 그대로 복제한 VDOM에서 어떤 변경이 일어난 것을 일컫는 말 /= 상황

VDOM에서는 어떤 상태 변경이 일어났을때, 원본 DOM과 사본을 비교해서 바뀐 값만 서버로 보내준다. 이러한 State를 관리해주는 Hook이 useState이다. <br><br>

useState는 구조분해할당으로 먼저 선언된다.

```jsx
const [state, setState] = useState(0);
```

<p style = "opacity : 0.8">설명하기에 앞서 구조분해할당을 해준 모든 값들은 이름을 직접 커스텀해도 되나, 통일성을 위해 <span style = "color : yellowgreen">본문에서는 state는 상태 변수, setState는 setState 로 통일</span>하겠다</p>

useState의 인자값으로는 해당 state의 초깃값을 설정해준다. 인자값으로는 어느 자료형태던지 들어갈 수 있다.
구조분해할당은 첫번째값은 상태 변수, 두번째 값은 상태를 변경/세팅해주는 함수이다. 이들은 모두 이름을 직접 커스텀해도 된다. ex) `[YDH, setYDH]` <br><br>

setState함수로 해당 함수에 넣은 인자값으로 state를 변경시킬 수 있으며, 변경된 값은 선언해둔 상태 변수에 저장된다.

### State로 value 관리하기

> form요소를 state로 관리할 때, setState함수로 form요소의 value를 세팅해주는게 형식적이다.

## 복수의 상태 관리

<br>state를 관리하다 보면 한두개가 아닌, 7, 8개씩 관리해야할 때도 온다. 이럴때 다음과 같은 방법으로 state관리를 하게 되면, 코드도 길어지며 매우 비효율적인 작업을 하게 된다.

```jsx
const [name, setName] = useState("");
const [gender, setGender] = useState("");
const [birth, setBirth] = useState("");
const [bio, setBio] = useState("");

const onChangeName = (e) => {
  setName(e.target.value);
};

const onChangeGender = (e) => {
  setGender(e.target.value);
};

const onChangeBirth = (e) => {
  setBirth(e.target.value);
};

const onChangeBio = (e) => {
  setBio(e.target.value);
};
```

그래서 [props](2024-09-18-React_Props.html)처럼 state또한 객체의 형태로 관리해주면 된다.

> state 객체 형태 관리 예시

```jsx
const [state, setState] = useState({
  name: "",
  gender: "",
  birth: "",
  bio: "",
});

const handleOnChange = (e) => {
  console.log(e.target.name);
  console.log(e.target.value);
  setState({
    ...state,
    //대괄호 표기법을 활용해서 프로퍼티 값을 재할당
    [e.target.name]: e.target.value,
  });
};
```

- <p style = "color: #aaa">e.target.name에 해당되는 키가 존재한다면 값을 대체해 주고, 아니면 그냥 온전히 보존</p>

### useState 총정리

> REACT에서는 VDOM을 사용하므로 반드시 하나의 ui화면에서 상태변화가 발생되는 요소는 <span style = "color: crimson">state라는 변수안에 담아서 관리</span>를 해야한다. 이때, state라는 상태변수는 react의 useState 훅 함수를 사용한다. useState 함수는 state라는 상태변수와, setState함수를 모두 반환하는데, 이때 <span style = "color: crimson">setState() 함수만이 유일하게 상태변수를 제어</span>할 수 있다.

> [Props](/docs/2024-09-18-React_Props.html)는 반드시 부모에서 직계자식으로만 보내줄 수 있는 속성으로 인해 보통 state를 관리하는 요소는 최상위 부모에 부여된다. 

---

<span style = "display : none">#useRef</span>

## 2. useRef

> 각각의 태그 요소를 참조(Refer)하는 쿼리셀렉터와 유사한 역할을 수행하는 REACT 훅 함수.

useRef는 쿼리셀렉터와 유사하게 가상돔의 요소들을 참조하여 제어할 수 있게 해주는 훅 함수이다. 특정 변수에 useRef함수를 할당해주면, 참조해오고 싶은 요소에 ref라는 속성을 부여하고 useRef를 할당한 변수를 값으로 할당시키면 된다. <br><br>

```jsx
const textRef = useRef();

<div>
  <input ref={textRef} onChange={handleOnChange} />
</div>;
```

useRef를 할당한 변수(textRef)를 콘솔에 조회해보면, current라는 키에 ref속성을 부여한 요소가 할당된다.

---

<span style = "display : none">#useEffect</span>

## 3. useEffect

---

<span style = "display : none">#useReducer</span>

## 4. useReducer

---

<span style = "display : none">#useContext</span>

## 5. useContext

---

<span style = "display : none">#useMemo</span>

## 6. useMemo & React.memo()

---

<span style = "display : none">#useCallback</span>

## 7. useCallback

---

<span style = "display : none">#useNavigate</span>

## 8. useNavigate
