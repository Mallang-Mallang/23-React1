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

## 2023.03.16(목) 2주차

### 학습 내용

<ul>
	<li>
		asd
	</li>
</ul>

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
