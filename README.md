# 23-React1

대림대 React 수업 레포지토리

</br>

<details>
<summary>
<b>README.md 작성요령</b>

</br>

</summary>

```markdown
파일이름은 대문자

1. 이름 : h1
2. 강의 날짜 : h2
3. 학습 내용(필수) : h2이하 사이즈 자유 사용
4. 작성 코드(선택)
5. 최근 내용이 위에 오도록 작성
6. 날짜 별 구분이 잘 가도록 작성
```

</details>

---

## 2023.05.25(목) 12주차

### 학습 내용

### chapter14 실습

**ThemeContext.jsx**

```jsx
import React from 'react';

const ThemeContext = React.createContext();
ThemeContext.displayName = 'ThemeContext';

export default ThemeContext;
```

**MainContent**

```jsx
import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';

function MainContent() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        padding: '1.5rem',
        backgroundColor: theme === 'light' ? 'white' : 'black',
        color: theme === 'light' ? 'black' : 'white',
      }}
    >
      <p>안녕하세요, 테마 변경이 가능한 웹사이트 입니다.</p>
      <button onClick={toggleTheme}>테마 변경</button>
    </div>
  );
}

export default MainContent;
```

**DatkOrLight**

```jsx
import React, { useCallback, useState } from 'react';
import MainContent from './MainContent';
import ThemeContext from './ThemeContext';

function DatkOrLight(props) {
  const [theme, setTheme] = useState('light');

  const toggleTheme = useCallback(() => {
    if (theme === 'light') {
      setTheme('dark');
    } else if (theme === 'dark') {
      setTheme('light');
    }
  }, [theme]);
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <MainContent />
    </ThemeContext.Provider>
  );
}

export default DatkOrLight;
```

### CSS

- ID 선택자 (#)
  ```css
  #id {
    font-size: 20px;
    color: blue;
  }
  ```
- CSS 선택자 (.)
  ```css
  .class {
    font-size: 20px;
    color: blue;
  }
  ```
- 태그 선택자 (a.tag)

  ```css
  p.midium {
    font-size: 20px;
    color: blue;
  }
  ```

- 전체 선택자 (\*)

  ```css
  * {
    font-size: 20px;
    color: blue;
  }
  ```

- `:hove` - 마우스 커서가 엘리먼트 위에 올라왔을 때를 의미한다
- `:avtive` - 주로 `<a>` 태그(link)에 사용되는데 엘리먼트가 클릭됐을 때를 의미한다.
- `:focus` - 주로 `<input>` 태그에서 사용, 엘리먼트에 초점을 갖고 있을 때
- `:checked` - `radio button`이나 `checkbox` 같은 유형의 `<input>` 태그가 체크됐을 때
- `:first-child`, `:last-child` - 상위 엘리먼트를 기준으로 각각 첫번째 child, 마지막 child일 경우를 의미

<br>

---

## 2023.05.18(목) 11주차

### 학습 내용

<br>

### 13.1 합성에 대해 알아보기

- 합성(Composition)은 여러 개의 컴포넌트를 합쳐서 새로운 컴포넌트를 만드는 것이다.

<br>

### Containment (담다, 포함하다, 격리하다)

- 특정 컴포넌트가 하위 컴포넌트를 포함하는 형태의 합성 방법
- 범용적인 박스 역할을 하는 sidebar 혹은 dialog와 같은 컴포넌트에서 자주 볼 수 있다.

### `React.createEliment()`에 관하여

- jsx를 사용하지 않고 React로 엘리먼트를 생성하는 방법

```jsx
// JSX를 이용한 간단한 방법
const jsxElement = <h1 className='jsx'>JSX Element</h1>;
```

```jsx
// 리액트 기능을 사용한 방법
const reactElement = React.createElement(
  'h1', //tag
  { className: 'obj' }, //props
  'OBJ Element' // child element
);
```

### Specialization (특수화, 전문화)

- 웰컴다이얼로그는 다이얼로그의 특별한 케이스다.
- 범용적인 개념을 구별이 되게 구체화하는 것을 특수화라고 한다.
- 객체지향 언어에서는 상속을 사용하여 특수화를 구현한다.
- 리액트에서는 합성을 사용하여 특수화를 구현한다.

### Containment와 Specialization을 같이 사용하기.

- Containment를 위해서 `props.children`을 사용하고, Specialization을 위해

### 13.2 상속에 대해 알아보기

- 합성과 대비되는 개념으로 상속(inheritance)이 있다.
- 자식 클래스는 부모 클래스가 가진 변수나 함수등의 속성을 모두 갖게 되는 개념이다.
- 리액트에서는 상속보다는 합성을 통해 새로운 컴포넌트를 생성한다.

### 컨텍스트란 무엇인가?

- 기존의 일반적인 리액트에서는 데이터가 컴포넌트의 props를 통해 부모에서 자식으로 단방향으로 전달되었음
- 컨텍스트는 리액트 컴포넌트 사이에서 데이터를 기존의 props를 통해 전달하는 방식 대신 '컴포넌트 트리를 통해 곧바로 컴포넌트에 전달하는 새로운 방식'을 제공한다.

### 14.3 컨텍스트를 사용하기 전에 고려할 점

- 컨텍스트는 다른 레벨의 많은 컴포넌트가 특정 데이터를 필요로 하는 경우에 주로 사용한다.
- 컴포넌트와 컨텍스트가 연동되면 재사용성이 떨어지기 때문에 무조건 사용하는 것은 좋지 않다.

### 컨텍스트 API

### `React.createContext`

- 컨텍스트를 생성하기 위한 함수
- 파라미터에는 기본값을 넣어주면 된다.
- 하위 컴포넌트는 가장 가까운 상위 레벨의 Provider로 부터 컨텍스트를 받게 되지만, 만일 Provider를 찾을 수 없다면 위에서 설정한 기본값은 사용하게 된다.

### `Context.Provider`

- `Context.Provider` 컴포넌트로 하위 컴포넌트들을 감싸주면 모든 하위 컴포넌트들이 해당 컨텍스트의 데이터에 접근할 수 있게 된다.
- Provider는 value라는 prop이 있고, 이것은 Provider 컴포넌트 하위에 있는 컴포넌트에게 전달된다.
- 하위 컴포넌트를 counsumer 컴포넌트라고 부른다.

### `Class.contextType`

- provider 하위에 있는 클래스 컴포넌트에서 컨텍스트의 데이터에 접근하기 위해 사용

### `Context.Consumer`

- 함수형 컴포넌트에서 `Context.Consumer`를 사용하여 컨텍스트를 구독할 수 있다.
- 컴포넌트의 자식으로 함수가 올 수 있는데 이걸을 function as a child라고 부른다.

### `Context.displayName`

- 컨텍스트 객체는 displayName 이라는 문자 속성을 갖는다.
- 크롬의 리액트 개발자 도구에서 컨텍스트의 Provider나 Consumer를 표시할 때 displayName을 함께 표시 해준다.

---

## 2023.05.11(목) 10주차

### 학습 내용

<br>

### 섭씨온도를 화씨 온도 표기하기

**TemperatureInput**

```jsx
<fieldset>
  <legend>온도를 입력해주세요(단위:{scaleNames[props.scale]}): </legend>
  <input value={props.temperature} onChange={hanldeChange} />
</fieldset>
```

**Calculator**

```jsx
function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>물이 끓습니다.</p>;
  }
  return <p>물이 끓지 않습니다.</p>;
}

function toCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

function Calculator(props) {
  const [temperature, setTemperature] = useState('');
  const [scale, setScale] = useState('c');

  const handleCelsiusChange = (temperature) => {
    setTemperature(temperature);
    setScale('c');
  };

  const handleFahrenheitChange = (temperature) => {
    setTemperature(temperature);
    setScale('f');
  };

  const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
  const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

  return (
    <div>
      <TemperatureInput scale='c' temperature={celsius} onTemperatureChange={handleCelsiusChange} />
      <TemperatureInput
        scale='f'
        temperature={fahrenheit}
        onTemperatureChange={handleFahrenheitChange}
      />
      <BoilingVerdict celsius={parseFloat(celsius)} />
    </div>
  );
}
```

###

---

## 2023.05.04(목) 9주차

### 학습 내용

<br>

### 리스트와 키란 무엇인가?

- 리스트는 자바스크립트의 변수나 객체를 하나의 변수로 묶어놓은 배열과 같은 것이다.
- 키는 각 객체나 아이템을 구분할 수 있는 고유한 값을 의미한다.
- 리액트에서는 배열과 키를 사용하는 반복되는 다수의 엘리먼트를 쉽게 렌더링 할 수 있다.

### 여러 개의 컴포넌트 렌더링하기

- 같은 컴포넌트를 화면에 반복적으로 나타내야 할 경우 배열에 들어있는 엘리먼트를 `map()`함수를 이용하여 렌더링 한다.
- `map()`함수를 사용한 예제

  ```jsx
  const numbers = [1, 2, 3, 4, 5];
  const listItems = numbers.map((number) => <li>{number}</li>);
  ```

  ```jsx
  ReactDOM.render(
    <ul>
      <li>{1}</li>
      <li>{2}</li>
      <li>{3}</li>
      <li>{4}</li>
      <li>{5}</li>
    </ul>
    document.getElementById('root');
  );
  ```

- 리턴된 listItems는 위 코드처럼 `<ul>`태그와 결합하여 랜더링된다.
- `map()`함수를 실행하면 "리스트 아이템에 무조건 키가 있어야 한다"는 경고 문구가 나온다.
- 경고문구가 나오는 이유는 각각의 아이템에 `key props`가 없기 때문이다.

### 리스트의 키에 대해 알아보기

- 리스트에서의 키는 "리스트에서 아이템을 구별하기 위한 고유한 문자열"이다.
- 키는 리스트에서 어떤 아이템이 변경, 추가 또는 제거되었는지 구분하기 위해 사용한다.
- 키는 같은 리스트에 있는 엘리먼트 사이에서만 고유한 값이면 된다. ex) 학번, id값

---

## 2023.04.27(목) 8주차

### 학습 내용

<br>

### 컴포넌트 렌더링 막기

- 컴포넌트를 렌더링하고 싶지 않을 때에는 `null`을 리턴한다.

```jsx
function WarningBanner(props) {
  if (!props.warning) {
    return null;
  }

  return <div>경고!</div>;
}
```

### 인라인 조건

- 필요한 곳에 조건문을 직접 넣어 사용하는 방법

1. 인라인 if

- if문을 직접 사용하지 않고, 동일한 효과를 내기 위해 `&&`논리 연산자를 사용한다.
- `&&`는 `and`연산자로 모든 조건이 참일때만 참이 된다.
- 첫 번째 조건이 거짓이면 두 번째 조건은 판단할 필요가 없다.

```js
true && expression; // expression
false && expression; // false
```

2. 인라인 if else

- 삼항 연산자를 사용한다. `조건문 ? 참일 경우 : 거짓일 경우`
- 문자열이나 엘리먼트를 넣어서 사용할 수 있다.

### 엘리먼트 변수

- 렌더링해야 될 컴포넌트를 변수처럼 사용하는 방법
- `state`에 따라 `button` 변수에 컴포넌트의 객체를 저장하여 `return`문에서 사용했다

```jsx
    let button;
    if (isLoggedIn) {
      button = <LogoutButton onClick={handleLogoutClick} />
    }else {
      button = <LoginButton onClick={handleLoginClick} />
    }

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
      </div>
    )
  }
}
```

### 조건부 렌더링이란?

```jsx
function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}
```

- props로 전달 받은 `isLoggedIn`이 `true`면 `<UserGreeting />`을, `flase`면 `<GuestGreeting />`을 `return`한다.
- 이와 같은 렌더링을 조건부 렌더링이라고 한다.

### Arguments 전달하기

- 함수를 정의할 때는 **파라미터(Parameter)** 혹은 **매개변수**,
- 함수를 사용할 때는 **아규먼트(Argument)** 혹은 **인자** 라고 부른다.
- 이벤트 핸들러에 매개변수를 전달해야 하는 경우도 많다.

```jsx
<button onClick={(event) => this.deleteItem(id, event)}>삭제하기</button>

<button onClick={this.deleteItem.bind(this, id)}>삭제하기</button>
```

- 위 코드는 모두 동일한 역할을 하지만 하나는 화살표 함수, 다른 하나는 bind를 사용했다.
- event라는 매개변수는 리액트 이벤트의 객체를 의미한다.

### 이벤트 처리하기

- DOM에서 클릭 이벤트를 처리하는 방법

```html
<button onclick="activate()">Activate</button>
```

- React에서 클릭 이벤트를 처리하는 방법

```jsx
<button onClick={activate}>Activate</button>
```

- 차이점
  1. 이벤트 이름이 onclick에서 onClick으로 변경(camelCase)
  2. 전달하려는 함수는 문자열에서 함수 그대로 전달
- 이벤트가 발생했을 때 해당 이벤트를 처리하는 함수를 "이벤트 핸들러"라고 한다. 또는 이벤트가 발생하는 것을 계속 듣고 있다는 의미로 "이벤트 리스너"라고도 한다.

```jsx
const useCounter = (initialValue) => {
  const [isToggle, setIsToggle] = useState(true);

  // 방법 1. 함수 안에 함수로 정의
  function handleClick() {
    setIsToggle(() => !isToggle);
  }
  // 방법 2. arrow function을 사용하여 정의
  const handleClick = () => {
    setIsToggle(() => !isToggle);
  };

  return <button onClick={handleClick}>{isToggle ? '켜짐' : '꺼짐'}</button>;
};
```

---

## 2023.04.13(목) 6주차

### 학습 내용

<br>

### 훅의 규칙

- 무조건 최상의 레벨에서만 호출해야 한다.(최상위는 컴포넌트의 최상위 레벨)
- 반복문이나 조건문 또는 중첩된 함수들 안에서 훅을 호출하면 안됨
- 컴포넌트가 렌더링 될 때마다 같은 순서로 호출해야한다.

### 훅이란?

- 'state'와 생명주기 기능에 갈고리를 걸어 원하는 시점에 정해진 함수를 실행되도록 만든 함수이다.
- 훅의 이름은 모두 'use'로 시작한다.
- 사용자정의 훅(custom hook)을 만들 수 있으며, 이름은 자유롭게 하되 'use'로 시작하는 것이 권장된다.

<br>

### `useState`

- 함수형 컴포넌트에서 state를 사용하기 위한 hook이다.
- useState를 사용하지 않아도 변화를 줄 수 있지만 재렌더링이 일어나지 않는다.
- 사용법

  ```javascript
  const [변수명, set변수명] = useState(초기값);
  ```

- 첫번째 항목은 state의 이름(변수명)
- 두번째 항목은 state의 set함수, 즉 state를 업데이트 하는 함수이다.
- 함수를 호출할 때 state의 초기값을 설정한다.
- 함수의 리턴 값은 배열의 형태이다.

<br>

### `useEffect`

- '사이드 이펙트'를 수행하기 위한 것이다.
- 영어로 side effect는 부작용을 의미한다. 일반적으로 프로그래밍에서 사이드 이펙트는 '개발자가 의도하지 않은 코드가 실행되면서 버그가 발생하는 것'을 말한다.
- 클래스 컴포넌트의 생명주기 함수와 같은 기능을 하나로 통합한 기능을 제공한다.
- 결국 side effect는 렌더링 외에 실행해야 한느 부수적인 코드를 말한다.
- 사용법
  ```javascript
  useEffect(이펙트 함수, 의존성 배열);
  ```
- 의존성 배열은 이펙트가 의존하고 있는 배열로, 배열 안에 있는 변수 중에 하나라도 값이 변경되었을 때 이펙트 함수가 실행된다.
- 만약 이펙트 함수가 마운트, 언마운트 될 때만 한번씩 실행되게 하고 싶으면 빈 배열을 넣으면 된다.
- 의존성 배열을 생략하는 경우는 업데이트 될 때마다 호출된다.

<br>

### `useMemo`

- Memoized value를 리턴하는 훅이다.
- 이전 계산값을 갖고 있기 때문에 연산량이 많은 작업의 반복을 피할 수 있다.
- 이 훅은 렌더링이 일어나는 동안 실행된다.
- 따라서 렌더링이 일어나는 동안 실행돼서는 안될 작업을 넣으면 안된다.
- 예를 들면 useEffect 같은 것이다.

- ```javascript
   const memoizedValue = useMemo(() => {
     // 연상량이 높은 작업을 수행하여 결과를 반환
     return computerExpensiveValue(의존성 변수1, 의존성 변수2);
   },[의존성 변수1, 의존성 변수2]);
  ```
- 의존성 배열을 넣지 않을 경우, 렌더링이 일어날 때마다 매번 함수가 실행된다.
- 따라서 의존성 배열을 넣지 않는 것은 의미가 없다.
- 만약 빈 배열을 넣게 되면 컴포넌트 마운트 시에만 함수가 실행된다.

<br>

### `useCallback`

- useMemo()와 유사한 역할을 한다.
- 차이점은 값이 아닌 함수를 반환한다는 점이다.
- 파라미터로 받은 함수를 콜백이라고 부른다.
- useMemo와 마찬가지로 의존성 배열 중 하나라도 변경되면 콜백함수를 반환한다.

<br>

### `useRef`

- 레퍼런스를 사용하기 위한 훅이다.
- 레퍼런스란 특정 컴포넌트에 접근할 수 있는 객체를 의미힌다.
- 레퍼런스 객체에는 .current라는 속성이 있는데, 이것은 현재 참조하고 있는 엘리먼트를 의미한다.
- ```javascript
  const refContainer = useRef(초기값);
  ```
- 이렇게 반환된 레퍼런스 객체는 컴포넌트의 라이프타임 전체에 걸쳐서 유지된다.

---

## 2023.04.06(목) 5주차

### 학습 내용

### 컴포넌트 추출

- 복잡한 컴포넌트를 쪼개서 여러 개의 컴포넌트로 나눌 수 있음
- 큰 컴포넌트에서 일부를 추출해서 새로운 컴포넌트를 만드는 것
- 실무에서는 처음부터 1개의 컴포넌트에 하나의 기능만 사용하도록 설계하는것이 좋음

<br>

### 컴포넌트 예제 실습

**Comment.jsx**

```jsx
function Comment(props) {
  return (
    <div style={styles.wrapper}>
      <div style={styles.imageContainer}>
        <img
          src='https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png'
          style={styles.image}
        />
      </div>

      <div style={styles.contentContainer}>
        <span style={styles.nameText}>{props.name}</span>
        <span style={styles.commentText}>{props.comment}</span>
      </div>
    </div>
  );
}
```

**CommentList.jsx**

```jsx
function CommentList() {
  return (
    <div>
      {comments.map(function (v) {
        return <Comment name={v.name} comment={v.comment} />;
      })}
    </div>
  );
}
```

<br>

### state란?

- State는 리액트 컴포넌트의 상태를 의미
- 상태의 의미는 정상인지 비정상인지가 아니라 컴포넌트의 데이터를 의미
- 정확히는 컴포넌트의 **변경가능한 데이터**를 의미
- State가 변하면 재 렌더링이 되기 떄문에 렌더링과 관련된 값만 state에 포함시켜야함
- 리액트만의 특별한 형태가 아닌 자바스크립트 객체이다.
- State는 변경은 가능하나, 직접 수정하면 안된다.
- State를 변경하고 싶다면 `setState()`함수를 사용해야한다.

<br>

### 생명주기에 대해 알아보기

- 생명주기는 컴포넌트의 생성 시점, 사용 시점, 종료 시점을 나타내는 것이다.
- `constructor`가 실행되면서 컴포넌트가 생성된다.
- 생성 직후 `componentDidMount()` 함수가 호출된다.
- 컴포넌트가 소멸하기 전까지 여러 번 렌더링된다.
- 렌더링은 `props`, `setState()`, `forceUpdate()`에 의해 상태가 변경되면 이루어진다.
- 렌더링이 끝나면 `componentDidMount()` 함수가 호출된다.
- 마지막으로 컴포넌트가 언마운트 되면 `componentWillUnMount()` 함수가 호출된다.
- 실습 예제를 통해 실습하였음.

---

## 2023.03.30(목) 4주차

### 학습 내용

<li>깃허브 클론하기 및 Node Module 설치 (npm install)</li>
<li>CDN 방식으로 React 현재시간을 보여주는 코드 작성하기</li>
<br>

### 엘리먼트에 대해 알아보기

- 리액트 앱을 구성하는 요소
- 리액트 앱의 가장 작은 빌딩 블록들
- 웹사이트의 경우는 DOM 엘리먼트이며 HTML요소를 의미

### 엘리먼트의 생김새

- 리액트 엘리먼트는 자바스크립트 객체의 형태로 존재
- 컴포넌트, 속성 및 내부의 모든 자식을 포함하는 일반 JS 객체
- 이 객체는 마음대로 변경할 수 없는 불변성을 갖고있음

<br>

### 컴포넌트에 대해 알아보기

- 컴포넌트 구조는 작은 컴포넌트가 모여 큰 컴포넌트를 구성하고 이러한 컴포넌트들이 모여서 전체 페이지를 구성하는 것
- 컴포넌트 재사용이 가능하기 때문에 전체 코드 양을 줄일 수 있어 개발시간 및 유지보수 비용도 줄일 수 있음
- 컴포넌트는 자바스크립트 함수와 입력과 출력이 있다는 면에서 유사함
- 이름은 항상 대문자로 시작한다
- 그 이유는 리액트는 소문자로 시작하는 컴포넌트를 DOM 태그로 인식하기 때문.
  - 컴포넌트 파일 이름과 컴포넌트 이름은 같게한다.

<br>

### Props에 대해 알아보기

- props는 prop(property : 속성, 특성)의 준말
- props는 컴포넌트의 속성
- 컴포넌트에 어떤 속성, props를 넣는지에 따라 속성이 다른 엘리먼트가 출력
- props는 컴포넌트에 전달 할 다양한 정보를 담고있는 자바스크립트 객체
- 속성이 다른 엘리먼트를 생성하려면 새로은 props를 컴포넌트에 전달해야함
- JSX에서는 key-value쌍으로 props를 구성
  ```javascript
  {
  	name: "소플",
  	introduction: "안녕하세요, 소플입니다.",
  	viewCount: 1500
  }
  ```
  - JSX에서는 중괄호를 사용하면 JS코드를 삽입할 수 있다.

<br>

### Pure 함수 vs Impure 함수

- Pure함수는 인수로 받은 정보가 함수 내부에서도 **변하지 않는 함수**이다
- Impure함수는 인수로 받은 정보가 함수 내부에서 **변하는 함수**이다.

<br>

---

## 2023.03.23(목) 3주차

### 학습 내용

1. README.md 백업
2. local에 있는 저장소 이름 바꾸기/삭제
3. 새 프로젝트 생성(23-React1)
4. README.md 덮어쓰기
5. Github 저장소 삭제
6. 로컬에서 23-React1 push
7. Github 저장소 확인

<li>JSX란 JavaScript에 XML을 추가한 확장 문법</li>
<li>React는 Babel을 통해 해석된다.</li>
<li>JSX 실습 예제 작성 해보기</li>

<br>

### JSX 사용법

<li>모든 자바스크립트 문법을 지원</li>
<li>자바스크립트 문법에 XML과 HTML을 섞어서 사용</li>
<li>HTML이나 XML에 자바스크립트 코드를 사용하고 싶으면 중괄호{}를 사용한다.</li>
<br>

<br>

<details>
<summary>
JSX 장점
</summary>

<li>코드가 간결해진다.</li>
<li>가독성이 향상된다</li>
<li>Injection Attack이라 불리는 해킹 방법을 방어함으로써 보안에 강하다.</li>
</details>
<br>

---

## 2023.03.16(목) 2주차

### 학습 내용

<li>
윈도우 패키지 매니저

[chocolatey](https://chocolatey.org/)

</li>
<li>Node.js 설치 후 패키지별 버전 확인

```bash
//Node.js Version
node --version
node -v

//npm,npx Version
npm -v
npx -v
```

</li>

</br>

<details>
<summary>
리액트의 장점
</summary>

### 빠른 업데이트와 렌더링 속도

<ul>

<li>이 것을 가능하게 하는 것이 바로 Virtual DOM</li>
<li>DOM(Document Object Model)이란 XML, HTML 문서의 각 항목을 계층으로 표현하여 생성.
변형, 삭제할 수 있도록 돕는 인터페이스</li>
<li>Virtual DOM은 DOM 조작이 비효율적인 이유로 속도가 느리기 때문에 고안된 방법</li>
<li><b>DOM은 동기식</b>, <b>Virtual DOM은 비동기식</b> 방법으로 렌더링</li>

</ul>
</details>

</br>

<details>
<summary>
리액트의 단점
</summary>

### 1. 방대한 학습량

- 자바스크립트를 공부한 경우 빠르게 학습할 수 있지만 그렇지 않은 초심자는 어려울 수 있음

### 2. 높은 상태 관리 복잡도

- state, component life cycle 등의 개념이 있지만 Hook의 등장으로 그리 어렵진 않음
</details>

</br>

<li>웹사이트에 React 추가하기(설치 없이 html에 추가)</li>
<li>Create React app으로 React 설치하기</li>

</br>

### 코드 규약

<ul>
<li>File명과 Component명은 동일하게 작성</li>
<li><b>Functional Component</b>로 작성</li>
<li>모든 Component명은 Pascal Case로 작성</li>
</ul>

</br>

---

## 2023.03.09(목) 1주차

### 학습 내용

<li>깃허브 계정 생성 방법</li>
<li>깃허브 & vscode 연동 방법</li>
<li>git commit & push 방법</li>
<li>gitignore 설정방법

[링크](https://www.toptal.com/developers/gitignore)

</li>
<li>클론하는 방법</li>
</ul>

</br>

<details>
<summary>
MarkDown 문법
</summary>
<ul>
<li>

## 1. 제목 (Header)

- \# 뒤에 띄어쓰기를 넣어주는게 권장하는 방법 이다.

- \<h1> ~ \<h6> 까지 표현 가능하다.

```markdown
# 제목1

## 제목 2

### 제목 3

#### 제목 4

##### 제목 5

###### 제목 6
```

# 제목1

## 제목2

### 제목3

#### 제목4

##### 제목5

###### 제목6

## 2. 줄바꿈 (Line Breaks)

- 띄어쓰기 2번 또는 \<br/>로 표현 가능 하다.

```markdown
# 줄바꿈(Line Breaks)

띄어쓰기 2번  
또는 <br/>
```

## 3. 수평선 (Horizontal Rule) \<hr/>

- 하기 코드들은 모두 수평선을 나타낸다. 가시적으로 페이지를 나누는 용도로 많이 사용된다.

```markdown
---
---

---

---

---
```

---

---

---

---

---

</li>
</details>
