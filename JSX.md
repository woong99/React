# JSX

## JSX란?

JSX는 자바스크립트의 확장 문법이며 XML과 매우 비슷하게 생겼다. 이런 형식으로 작성한 코드는 브라우저에서 실행되기 전에 코드가 번들링되는 과정에서 바벨을 사용하여 일반 자바스크립트 형태의 코드로 변환된다.

```JS
function App() {
  return (
    <div>
      Hello <b>react</b>
    </div>
  );
}
```

이렇게 작성된 코드는 다음과 같이 변환된다.

```JS
function App() {
  return React.createElement("div", null, "Hello ", React.createElement("b", null, "react"))
}
```

---

## JSX의 장점

### 보기 쉽고 익숙하다.

일반 자바스크립트만 사용한 코드보다 JSX로 작성한 코드가 더 가독성이 높고 작성하기도 쉽다.

### 더욱 높은 활용도

JSX에서는 우리가 알고 있는 div나 span 같은 HTML 태그를 사용할 수 있을 뿐만 아니라, 컴포넌트도 JSX 안에서 작성할 수 있다.

---

## JSX 문법

### 감싸인 요소

컴포넌트에 여러 요소가 있다면 반드시 부모 요소 하나로 감싸야 한다.

잘못된 예시

```JS
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <h1>리액트 안녕!</h1>
    <h2>잘 작동하니?</h2>
  );
}

export default App;
```

맞는 예시

```JS
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <h1>리액트 안녕!</h1>
      <h2>잘 작동하니?</h2>
    </div>
  );
}

export default App;
```

Virtual DOM에서 컴포넌트 변화를 감지해 낼 때 효율적으로 비교할 수 있도록 컴포넌트 내부는 하나의 DOM 트리 구조로 이루어져야 한다는 규칙이 있다.

### 자바스크립트 표현

JSX 안에서는 자바스크립트 표현식을 쓸 수 있다. 자바스크립트 표현식을 작성하려면 JSX 내부에서 코드를 { }로 감싸면 된다.

```JS
function App() {
  const name = '리액트';
  return (
    <>
      <h1>{name} 안녕!</h1>
      <h2>잘 작동하니?</h2>
    </>
  );
}

export default App;
```

### if 문 대신 조건부 연산자

JSX 내부의 자바스크립트 표현식에서 if 문을 사용할 수는 없다. 하지만 조건에 따라 다른 내용을 렌더링해야 할 때는 JSX 밖에서 if 문을 사용하여 사전에 값을 설정하거나, { } 안에 조건부 연산자를 사용하면 된다. 조건부 연산자의 또 다른 이름은 삼항 연산자이다.

```JS
function App() {
  const name = '리액트';
  return (
    <>
    {name === '리액트' ? (
      <h1>리액트입니다.</h1>
    ) : (
      <h2>리액트가 아닙니다.</h2>
    )}
    </>
  );
}

export default App;
```

### AND 연산자(&&)를 사용한 조건부 렌더링

```JS
function App() {
  const name = '리액트';
  return <>{name === '리액트' ? <h1>리액트입니다.</h1> : null}</>;
}

export default App;
```

조건부 연산자를 통해 구현을 할 수는 있지만 && 연산자를 이용해 더 짧은 코드로 구현할 수 있다.

```JS
function App() {
  const name = '리액트';
  return <>{name === '리액트' && <h1>리액트입니다.</h1>}</>;
}

export default App;
```

&& 연산자로 조건부 렌더링을 할 수 있는 이유는 리액트에서 false를 렌더링할 때는 null과 마찬가지로 아무것도 나타나지 않기 때문입니다. 한 가지 예외로 falsy한 값인 0은 예외적으로 화면에 나타난다는 것이다.

### undefined를 렌더링하지 않기

리액트 컴포넌트에서는 함수에서 undefined만 반환하여 렌더링하는 상황을 만들면 안된다.

어떤 값이 undefined일 수도 있다면, OR(||) 연산자를 사용하여 오류를 방지할 수 있다.

```JS
function App() {
  const name = undefined;
  return <>{name || '리액트'}</>;
}

export default App;
```

### 인라인 스타일링

리액트에서 DOM 요소에 스타일을 적용할 때는 문자열 형태로 넣는 것이 아니라 객체 형태로 넣어 주어야 한다. 그리고 카멜 표기법을 사용한다.

```JS
function App() {
  const name = '리액트';
  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: '48px',
    fontWeight: 'bold',
    padding: 16,
  };
  return <div style={style}>{name}</div>;
}

export default App;
```

### class 대신 className

CSS 클래스를 사용할 때 JSX에서는 class가 아닌 className으로 설정해 주어야 한다.

```JS
import './App.css';

function App() {
  const name = '리액트';

  return <div className="react">{name}</div>;
}

export default App;
```

### 꼭 닫아야 하는 태그

HTML에서 닫지 않아도 되는 태그들을 JSX에서는 전부 닫아야 한다.

### 주석

```JS
import './App.css';

function App() {
  const name = '리액트';

  return (
    <>
      {/*주석은 이렇게 작성한다.*/}
      <div className="react">{name}</div>
    </>
  );
}

export default App;
```

시작 태그를 여러 줄로 작성할 때는 그 내부에서 // ... 과 같은 형태의 주석으로 작성할 수 있다.
