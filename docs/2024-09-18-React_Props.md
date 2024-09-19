---
layout: post
title: "Props"
date: 2024-09-18 22:46:12 +0900
categories: Coding
parent: REACT
---

# Props

> 컴포넌트 기반의 요소들이 서로간에 데이터를 주고 받기 위한 객체(Properties)의 약자.

Props는 컴포넌트들 사이에서 주고받을 수 있다. <br><br>
Props를 사용할때 가장 유의해야할 점은, 반드시 <span style="color: crimson">부모에서 직계자식</span>한테만 Props를 보내줄 수 있다. <br>
이로인해, 단계가 깊은 자식들한테 props를 전달해주기 위해서, 자식의 자식의 자식의 자식... 이런식으로 계속 타고타고 props를 전달할 수 밖에 없는 상황이 발생하게 됐다. <span style="color: yellowgreen">(Props Drilling)</span><br><br>
이러한 Props Drilling을 막기 위해, REACT에서 사용할 수 있는 유틸리티들이 대거 등장하게 됐다.

> Redux, Saga, Thunk, React Query...<br>
> 이들은 모두 미들웨어(중개기)라고 부른다.

<p style="color: #aaa; text-decoration: line-through">현재 미들웨어 중 Recoil은 메모리 누수 이슈로 인해 REACT의 최신 문법인 useQuery훅을 사용한다고 한다.</p>

Props는 Properties(키와 값의 한쌍을 Property라 부름)의 약자인만큼, 반드시 객체의 형태를 띤다.

## Props 예시(송신)

{%raw%}

```jsx
function App() {
  const name = "염동훈";
  const age = 73;
  return (
    <>
      <div className="App">
        <Header />
        <Body name={name} age={age} value={"true"} />
        <Footer />
      </div>
    </>
  );
}
```

{%endraw%}

Props는 예시에서 볼 수 있듯이 props를 보낼 자식 컴포넌트의 속성값으로 값을 전달하게 된다. (마치 함수의 매개변수와 비슷한 느낌이다.) 이때, 속성은 props의 키가 된다. 따라서 예시와 같이 props를 보내게 된다면 props는 이런 형태로 생성된다.

```js
{
  name: "염동훈",
  age: "73",
  value: true,
}
```

이러한 점을 이용하여 props를 자식컴포넌트에서 받을 때는 구조분해할당으로 받아온다.

## Props 예시(수신)

{%raw%}

```jsx
const Body = ({ name, age, value }) => {
  return (
    <div>
      <h1>Body</h1>
      <h2>
        {name}은 {age}세, {value}
      </h2>
    </div>
  );
};
```

{%endraw%}

결과는 다음과 같이 나올 것이다.

```
염동훈은 73세, true
```

허나, 이렇게 하나하나씩 props를 속성으로 일일이 주게 되면 전달해야할 값이 많을때는 몹시 비효율적일 것이다. <br>
이러한 상황을 방지하기 위해, 전달해야하는 모든 값들을 객체의 형태로 생성해서, 전개연산자를 사용해서 바로 보내주는 방식을 훨씬 많이 사용하게 된다. <br>

> `<Body {...bodyProps} />`

전개연산자를 사용하면 모든 요소들을 펼쳐서 보내주므로 키를 따로 만들어줄 필요도 없으며, 바로 구조분해 할당으로 필요한 값들을 받아주기만 하면 된다.<br><br>

Props는 이말고도 컴포넌트 또한 보내줄 수 있다. 이는 보내는 방식이 다른 거랑은 좀 다른데, 먼저 해당 컴포넌트는 children이라는 키로 전송이 된다.

## Props Component 예시

```jsx
const ChildComp = () => {
  return <div>child component</div>;
}; //컴포넌트 선언

//송신부
<Body>
  <ChildComp />
</Body>;

//수신부
const Body = ({ children }) => {
  return (
    <div>
      <h1>{children}</h1>
    </div>
  );
};
```

다음과 같이 컴포넌트를 props로 전달할 때는 <span style = "color: violet">전송할 컴포넌트</span>를 <span style = "color: yellowgreen">전송받을 컴포넌트 </span> 안에 넣어줘야한다. 수신부에서는 컴포넌트를 받을 때는 반드시 children이라는 키로 전송된다. 컴포넌트를 여러개로 보내면 children의 값에는 배열의 형태로 값들이 나열된다. <Br>

- <p style="color: #aaa">이러한 배열의 형태를 출력시키기 위해서는 보통 <span style = "color: crimson">map함수</span>를 사용한다.</p>

---

## Default Props

> props를 올바르게, 혹은 못 가져온 상황이 발생했을 경우, 오류를 방지하기 위해 default값을 정의해줄 수 있다.

**Default Props 예시**

```jsx
Body.defaultProps = {
  favorite: [],
};
```

- 해당 컴포넌트.defaultProps = 객체의 형태로 디폴트값을 정의한다.
