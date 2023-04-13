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
