---
layout: post
title: "React Hooks"
date: 2024-09-19 23:08:13 +0900
categories: Coding
parent: REACT
---

# React Hooks

> - react에서 hook을 import할 수 있음.
> - 모든 훅은 함수이며, use~로 시작한다.

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

> [Props](/docs/2024-09-18-React_Props.html)는 반드시 부모에서 직계자식으로만 보내줄 수 있는 속성으로 인해 보통 state를 관리하는 요소는 최상위 부모에 부여된다. (<span color = "violet">이는 미들웨어를 사용하기 전에 해당된다.</span>)

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

useRef를 할당한 변수(textRef)를 콘솔에 조회해보면, current라는 키에 ref속성을 부여한 요소가 할당된다. <br>

예시에서 나온것처럼 useRef는 form 요소를 관리할때도 많이 사용된다.

## useRef의 컴포넌트 제어

> ex) 비동기 처리 방식으로 A라는 데이터가 먼저 실행되고, B라는 데이터가 나중에 실행되어야 하는 상황

useRef의 인자값으로 false(불린값)을 부여해서, [useEffect](#3-useeffect)에서 Ref를 검사하여 처음에 브라우저가 마운트 됐을때는 B 데이터 실행을 방지하고, 그 이후로 부터 렌더링이 될때 B 데이터에 관한 컴포넌트가 렌더링되도록 함. 해당 방법은 useRef로 컴포넌트 자체를 관리하는 유일한 방법이다.

```jsx
//Boolean값으로 current를 초기화
const didMountRef = useRef(false);

//current의 값을 검사해서 최초실행을 방지함. 이후에는 current의 값을 바꿔줘서 렌더링이 될때마다 useEffect의 콜백을 실행.
useEffect(() => {
  if (!didMountRef.current) {
    didMountRef.current = true;
  } else {
    console.log("component update");
  }
});
```

 <p style = "color: #aaa">마치 우리가 Vanilla JS에서 일종의 let변수로 플래그를 만들어서 부정연산자로 조건문을 통해 값을 검사하는 것과 유사함.</p>

### useRef의 성질

> useRef는 <span style = "color: yellowgreen">current 값이 변경되어도 리렌더링이 유발되지 않으며, 컴포넌트가 재렌더링될 때도 초기화되지 않는 특성</span>을 가지고 있다. 이러한 성질 덕분에 화면에 즉각적으로 반영될 필요가 없는 값(예: DOM 참조, 고유 id, 타이머 ID, 애니메이션 상태 등)을 추적하거나 저장하는 용도로 사용됨.

---

<span style = "display : none">#useEffect</span>

## 3. useEffect

> REACT의 Component Life Cycle(컴포넌트 생애 주기)를 관리 하기 위한 훅 함수. (= 생애 주기 단계들에 각각 도달했을때 무언가를 실행)

### 컴포넌트 생애 주기

`탄생 - 성장(업데이트) - 죽음(사용자가 더이상 컴포넌트의 업데이트를 하지 않는 상태 - Unmount)`

useEffect는 컴포넌트의 생애 주기를 관리하며, 인자값으로 2가지 값을 받는다. 첫번째 인자값으로는 콜백함수를 받고, 2번째 인자값으로는 <span style = "color: crimson">의존성배열</span>(dependency array)를 받는다.

의존성배열은 안에 관리할 상태 요소들을 넣으며, 의존성배열 안의 요소들에게 어떠한 상태변화가 일어났을 때만 useEffect의 콜백함수을 실행시킨다.

<p style = "color: #aaa">useEffect는 외부에서 데이터를 끌어올 때 많이 사용되며, 렌더링이 되는 상황에서의 상태를 제어하기 위해 주로 사용된다. </p>

## useEffect의 사용법 3가지

1.  기본기능: 의존성 배열에 입력된 state의 값이 업데이트 될때, 콜백함수가 실행됨.

    ```jsx
    const [count, setCount] = useState(0);
    const [text, setText] = useState("");

    useEffect(() => {
      console.log("Update", count, text);
    }, [count, text]); //count, text의 상태가 변할때는 콜백이 실행됨.
    ```

2.  컴포넌트가 실행되자마자 무조건 실행되어야 할때, useEffect의 인자값으로 의존성배열을 주지 않음. 이때, 컴포넌트 안에 있는 모든 상태의 값이 렌더링 될때마다 콜백함수가 실행된다.

    ```jsx
    useEffect(() => {
      console.log("Component Update");
    });
    ```

3.  컴포넌트가 마운트 되는 시점에만 딱 1번 실행되도록 할 때, 의존성배열을 빈배열로 부여한다.

    ```jsx
    useEffect(() => {
      console.log("component mount");
    }, []);
    ```

### CleanUp

기존의 컴포넌트가 마운트 된 이후에 실행되고 있던 어떤 작업이 종료(언마운트/Unmount)되었을 때, 기존 작업을 종료시키는 명칭을 CleanUp이라 한다. 컴포넌트가 언마운트 되기 위해서는 필히 이 CleanUp 단계를 거쳐야한다.

```jsx
useEffect(() => {
  const blinker = setInterval(() => {
    console.log("깜빡");
  }, 1000); //실행중이던 작업들이 없어지지 않고 계속 실행됨.

  return () => {
    console.log("CleanUp");
    clearInterval(blinker); //CleanUp 수행
  };
});
```

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
