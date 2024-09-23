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
6. [useMemo & React.memo() & useCallback](#6-usememo--reactmemo--usecallback)

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

허나, 이러한 방법을 사용해서 State를 다중으로 관리하게 되면 나중에 어떤 State가 어느 상태를 지칭하는지 혼란이 생길 수 있다. 또한, State값이 많아지게 되면 브라우저가 마운트 / 렌더링 시, 부하가 커지게 된다.

<span style = "color: crimson">useState는 반드시 함수 컴포넌트 내부 안에서만 사용</span>할 수 있기 때문에, 복수의 값이 하나의 컴포넌트 안에서 관리될 경우 리렌더링이 다른 요소한테도 영향을 주기 때문에, 이를 방지하기 위해 <span style = "color: crimson">State를 밖으로 빼내</span>도록 [useReducer](#4-usereducer)를 사용하여 상태를 관리한다.

<p style = "text-decoration: line-through; color: #888">허나, 미들웨어를 배우게 되면 useState가 훨씬 많이 사용된다. </p>

### 함수형 업데이트

> useState의 초깃값으로 콜백함수를 부여하거나 setState함수를 통해 콜백함수를 부여하여 불필요한 렌더링을 방지하는 최적화 기법. [`useCallback()`](#6-usememo--reactmemo--usecallback)에서 의존성배열을 빈배열을 할당시킬 경우, 최신 상태 업데이트 정보를 가져오기 위해 사용된다.

```jsx
//Before
const handleChangeEmotion = (emotionId) => {
  setState({
    ...state,
    emotionId,
  });
};

//After
const handleChangeEmotion = useCallback((emotionId) => {
  //실행문으로 사용
  setState((state) => ({
    ...state,
    emotionId,
  }));
}, []);
```

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

<p style = "color: #aaa">useEffect는 외부에서 데이터를 끌어올 때 많이 사용되며, 렌더링이 되는 상황에서의 상태를 제어하기 위해 주로 사용된다.</p>

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

> <span style = "color: yellowgreen">누산</span>기, 계산을 <span style = "color: yellowgreen" >누</span>적하여 연<span style = "color: yellowgreen">산</span>하는 작업을 수행.<span style = "color: crimson">state</span>와 <span style = "color: crimson">dispatch</span> 함수를 통해 상태 관리를 할 수 있는 훅 함수. 복잡한 상태 관리를 할때 주로 사용된다.

관리해야할 State가 많아질수록, 컴포넌트의 부하를 줄이기 위해 전역적인 상태관리를 위해 action객체를 활용하여 복잡한 상태관리 로직을 구현하는 훅 함수이다.

useReducer 또한 [useState](#1-usestate)와 마찬가지로 다음과 같이 구조분해할당으로 먼저 선언된다.

```jsx
const [todo, dispatch] = useReducer(reducer, mockTodo);
```

구조분해할당의 첫번째 값으로는 관리할 state를 받으나, useState와는 다르게 2번째 값으로 <span style = "color: yellowgreen">**상태변화촉발함수**</span>를 받게 된다. 통상적으로 이를 <span style = "color: yellowgreen">dispatch</span>라는 이름으로 많이 사용한다.

또한 useState와 다르게 useReducer 함수의 <span style = "color: crimson">인자값은 1개가 아닌 2개</span>를 받는다. 첫번째값은 <span style = "color: yellowgreen">**상태변화실행함수**</span>, 2번째값은 동일하게 관리할 state의 초깃값을 넣는다. 상태변화 실행함수는 통상적으로 <span style = "color: yellowgreen">reducer</span>이라는 이름으로 사용된다.

<p style = "color: #aaa">앞으로 본문에서는 상태변화촉발함수는 dispatch, 상태변화실행함수는 reducer이라는 이름으로 통일시켜 설명할 예정이다.</p>

## useReducer 사용 예시

```jsx
//reducer함수는 인자로 관리할 상태, action객체를 받아 특정 상황에 맞게 상태를 관리한다.
const reducer = (state, action) => {
  switch (action.type) {
    case "INCREASE":
      return state + action.data;
    case "DECREASE":
      return state - action.data;
      //default는 switch의 정석적인 문법, 넣고 안넣고는 선택사항.
    default:
      return state;
  }

//간단한 카운터 예시
  const TestComp = () => {
    const [count, dispatch] = useReducer(reducer, 0); //초깃값은 0

    <div>
      <b>{count}</b>
    </div>

    //dispatch함수를 통해 action객체를 정의함.
    <div>
      <button onClick={() => dispatch({ type: "INCREASE", data: 1 })}>
        +
      </button>
      <button onClick={() => dispatch({ type: "DECREASE", data: 1 })}>
        -
      </button>
    </div>
  };
};
```

useReducer를 사용하기 위해서는 reducer 함수를 먼저 정의해야한다. reducer함수는 관리할 상태, action객체 2가지 값을 인자로 받는다.

> dispatch 함수는 <span style = "color: crimson">action객체를 매개변수로</span> 받고 정의한다. action객체는 type속성을 통해 상태를 상황에 맞게 구분하여 상태를 관리할 수 있게끔하며, <span style = "color: crimson">switch문</span>을 통해 상황을 검사한다.

action객체는 반드시 type 프로퍼티가 필요하다.<span style = "color: #aaa">(마치 전후문자선택자의 content와 같이 필수적임.)</span> type의 값은 통상적으로 모두 대문자로 선언된다.

예시에서 볼 수 있듯이 action객체의 type속성을 통해 switch문으로 상황을 검사하고, 특정 상황에 맞게끔 상태를 변화시킨다. type속성 말고도 <span style = "color: yellowgreen" >추가로 데이터를 전달하기 위해 data속성을 추가하기도 한다.</span> 위의 간단한 카운터 예시에서는 type이 INCREASE일때 증가, DECREASE일때는 감소 시키게끔 설계되어 있으며, data를 통해 추가로 전달한 데이터(1)로 증가, 감소의 값을 정의했다.

- <p style = "color: #aaa">즉, type속성은 일종의 이름을 부여하는것으로, 가상클래스와 유사하게 요소에 가상클래스의 유무 검사하여 DOM요소를 제어한 것처럼 사용된다고 이해하면 편하다. </p>

---

<span style = "display : none">#useContext</span>

## 5. useContext

---

<span style = "display : none">#useMemo</span>

## 6. useMemo & React.memo() & useCallback

> 메모이제이션을 위한 Reack Hook 함수 3인방. 모두 [최적화](/docs/2024-09-08-React.html#optimization)를 위해 만들어진 함수들이며, `React.memo()`는 고차 컴포넌트화를 통해 컴포넌트를 직접적으로 메모이제이션하여 리렌더링을 최적화, `useMemo()`나 `useCallback()`은 함수나 값을 메모이제이션한다.

1. ### useMemo()

   > 주로 컴포넌트 내부의 요소나 함수의 제어를 통해 최적화 시키는 방법이다.

   `useMemo()`는 `useEffect`나 `useCallback`와 동일하게, 인자값으로 콜백이랑 <span style = "color: violet">의존성배열</span>을 받는다. 보통 의존성 배열에 빈배열을 할당하여 브라우저가 최초에 마운트 됐을 때 렌더링 시키도록 사용하거나, 특정 요소를 의존성 배열 안에 넣어서 해당 요소들의 상태변화가 일어날때 리렌더링이 되도록 한다.

   ```jsx
   //자식컴포넌트
   const analyzeTodo = useMemo(() => {
     const totalCount = todo.length;
     const doneCount = todo.filter((it) => it.isDone).length;
     const notDoneCount = totalCount - doneCount;
     return {
       totalCount,
       doneCount,
       notDoneCount,
     };
   }, [todo]);
   ```

2. ### React.memo()

   > 컴포넌트 자체를 제어하여 최적화 시키는 기법으로, React객체의 memo 메소드 함수를 사용한다.

   컴포넌트들을 횡으로 나열해 두면 교차/겹쳐지는(Cross)렌더링, 횡단 관심사에서 컴포넌트를 차원 밖으로 빼냄으로써 최적화시켜주는 React 객체의 메소드 함수이다. 특정 컴포넌트를 차원 밖으로 빼내는 것을 다른말로 <span style = "color: crimson">**고차컴포넌트화**</span>라고 한다.

   - <p style = "color: #aaa">CSS에서 position: absolute 혹은 fixed로 요소의 차원을 빼내어 독립적인 구조를 갖게 하는것과 유사.</p>

   특정 컴포넌트를 고차컴포넌트로 업그레이드(pivot)시킴으로 인해 고차컴포넌트화가 된 요소의 상태변화에 따라 다른 컴포넌트들이 같이 렌더링이 되지 않도록 한다.
   즉, 고정된 값, 변동이 없는 컴포넌트 ( ex ) Header, Footer) 들은 고차컴포넌트화를 해줘야 한다.

   ```jsx
   export default React.memo(Header);
   ```

   `React.memo()`는 다음과 같이 export 단계에서 함수의 인자값으로 고차컴포넌트화 시킬 컴포넌트를 집어넣는다.

   <p style = "color: #aaa">이로써 따로 해당 컴포넌트에 직접적으로 어떤 작업을 수행하지 않는 이상 절대로 변화가 일어나지 않는다.</p>

3. ### useCallback()

   > 주로 React.memo()를 사용했으나, 부모컴포넌트로 인해 리렌더링이 발생되는 경우, 함수를 제어하여 최적화 시키는 기법.

   `useCallback()` 또한 `useMemo()`와 형태가 동일하게, 콜백과 의존성배열을 인자값으로 받으며, `React.memo()`를 사용했음에도 불구하고 부모컴포넌트에서 관리되는 함수, 혹은 props로 인해 리렌더링이 발생되는경우, `useCallback`을 사용하여 함수가 호출되지 않는이상 리렌더링이 발생되지 않도록 한다. 즉, useCallback은 거의 대부분 <span style = "color: yellowgreen">React.memo()와 함께 사용</span>된다.

   ```jsx
   //App.js - 최상위 부모 컴포넌트
   const onCreate = useCallback((content) => {
     dispatch({
       type: "CREATE",
       newItem: {
         id: idRef.current,
         isDone: false,
         createdDate: new Date().getTime(),
         content,
       },
     });
     idRef.current += 1;
   }, []);
   ```

   허나 위의 예시처럼, 의존성배열에 빈배열을 할당하게 되면 마운트 된 이후로는 상태가 업데이트가 안되므로 최신 상태를 받아오기위한 <span style = "color: crimson">[useState](#1-usestate)의 함수형 업데이트</span>가 필요하다.

`useMemo`, 혹은 `useCallback`을 사용할때,
기존에 만들어뒀던 함수를 해당 훅 함수들의 콜백함수 인자로 넣어주기만 하면 된다. 허나, 이때 전에 해당 함수를 호출하였다면, 저장된 변수의 자료형태가 더이상 함수가 아니므로 선언문을 바꿔줄 필요가 있다.

```jsx
//Before
const { totalCount, doneCount, notDoneCount } = analyzeTodo();

//After
const { totalCount, doneCount, notDoneCount } = analyzeTodo;
```

### 최적화 Hooks 총정리

---
