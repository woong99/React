# ref: DOM에 이름 달기

## ref는 어떤 상황에서 사용해야 할까?

ref는 **DOM을 꼭 직접적으로 건드려야 할 때** 사용한다.

### 예제 컴포넌트 생성

```JS
// ValidationSample.js
import React, { Component } from 'react';
import './ValidationSample.css';

class ValidationSample extends Component {
  state = {
    password: '',
    clicked: false,
    validated: false,
  };

  handleChange = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  handleButtonClick = (e) => {
    this.setState({
      clicked: true,
      validated: this.state.password === '0000',
    });
  };
  render() {
    return (
      <div>
        <input
          type="password"
          value={this.state.password}
          onChange={this.handleChange}
          className={
            this.state.clicked
              ? this.state.validated
                ? 'success'
                : 'failure'
              : ''
          }
        />
        <button onClick={this.handleButtonClick}>검증하기</button>
      </div>
    );
  }
}

export default ValidationSample;
```

input에서는 onChange 이벤트가 발생하면 handleChange를 호출하여 state의 password 값을 업데이트하게 했다. button에서는 onClick 이벤트가 발생하면 handleButtonClick을 호출하여 clicked 값을 참으로 설정했고, validated 값을 검증 결과로 설정했다.

input의 className 값은 버튼을 누르기 전에는 비어 있는 문자열을 전달하며, 버튼을 누른 후에는 검증 결과에 따라 success 값 또는 failure 값을 설정한다.

### DOM을 꼭 사용해야 하는 상황

- 특정 input에 포커스 주기
- 스크롤 박스 조작하기
- Canvas 요소에 그림 그리기 등

---

## ref 사용

### 콜백 함수를 통한 ref 설정

가장 기본적인 방법은 콜백 함수를 사용하는 것이다. ref를 달고자 하는 요소에 ref라는 콜백 함수를 props로 전달해준다. 이 콜백 함수는 ref 값을 파라미터롤 전달받는다. 그리고 함수 내부에서 파라미터로 받은 ref를 컴포넌트의 멤버 변수로 설정해 준다.

```JS
<input ref={(ref) => {this.input=ref}} />
```

이렇게 하면 앞으로 this.input은 input 요소의 DOM을 가리킨다.

### createRef를 통한 ref 설정

리액트에 내장되어 있는 `createRef`라는 함수를 사용하는 것이다.

```JS
class RefSample extends Component {
  input = React.createRef();

  handleFocus = () => {
    this.input.current.focus();
  }

  render() {
    return (
      <div>
        <input ref={this.input} />
      </div>
    );
  }
}
```

우선 컴포넌트 내부에서 멤버 변수로 `React.createRef()`를 담아 주어여 한다. 그리고 해당 멤버 변수를 ref를 달고자 하는 요소에 ref props로 넣어 주면 ref 설정이 완료된다. 설정한 뒤 나중에 ref를 설정해 준 DOM에 접근하려면 `this.input.current`를 조회한다.

### 적용

#### input에 ref 달기

콜백 함수를 사용하여 ref를 달아본다.

```JS
 <input
    ref={(ref) => (this.input = ref)}
    (...)
  />
```

#### 버튼 onClick 이벤트 코드 수정

```JS
  handleButtonClick = (e) => {
    this.setState({
      clicked: true,
      validated: this.state.password === '0000',
    });
    this.input.focus();
  };
```

---

## 컴포넌트에 ref 달기

컴포넌트에도 ref를 달 수 있다. 이 방법은 주로 컴포넌트 내부에 있는 DOM을 컴포넌트 외부에서 사용할 때 쓴다.

### 사용법

```JS
<MyComponent
  ref={(ref) => {this.myComponent.ref}}
/>
```

이렇게 하면 MyComponent 내부의 메서드 및 멤버 변수에도 접근할 수 있다.

### 컴포넌트 초기 설정

#### 컴포넌트 파일 생성

```JS
// ScrollBox.js
import React, { Component } from 'react';

class ScrollBox extends Component {
  render() {
    const style = {
      border: '1px solid black',
      height: '300px',
      width: '300px',
      overflow: 'auto',
      position: 'relative',
    };

    const innerStyle = {
      width: '100%',
      height: '650px',
      background: 'linear-gradient(white,black',
    };
    return (
      <div
        style={style}
        ref={(ref) => {
          this.box = ref;
        }}
      >
        <div style={innerStyle} />
      </div>
    );
  }
}

export default ScrollBox;
```

### 컴포넌트에 메서드 생성

컴포넌트에 스크롤바를 맨 아래쪽으로 내리는 메서드를 만든다. 자바스크립트로 스크롤바를 내릴 때는 DOM 노드가 가진 다음 값을들 사용한다.

- scrollTop: 세로 스크롤바 위치
- scrollHeight: 스크롤이 있는 박스 안의 div 높이
- clientHeight: 스크롤이 있는 박스의 높이

```JS
// ScrollBox.js
import React, { Component } from 'react';

class ScrollBox extends Component {
  scrollToBottom = () => {
    const { scrollHeight, clientHeight } = this.box;
    /* 앞 코드에는 비구조화 할당 문법을 사용했다.
       다음 코드와 같은 의미이다.
       const scrollHeight = this.box.scrollHeight;
       const clientHeight = this.box.clientHeight
     */
    this.box.scrollTop = scrollHeight - clientHeight;
  };

  render() {
    ~~~
  }
}
export default ScrollBox;
```

### 컴포넌트에 ref 달고 내부 메서드 사용

App 컴포넌트에서 ScrollBox에 ref를 달고 버튼을 만들어, ScrollBox 컴포넌트의 scrollToBottom 메서드를 실행하도록 한다.

```JS
import { Component } from 'react';
import ScrollBox from './ScrollBox';

class App extends Component {
  render() {
    return (
      <div>
        <ScrollBox ref={(ref) => (this.scrollBox = ref)} />
        <button onClick={() => this.scrollBox.scrollToBottom()}>
          맨 밑으로
        </button>
      </div>
    );
  }
}

export default App;
```
