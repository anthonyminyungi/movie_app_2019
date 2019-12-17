# Movie App 2019

React JS Fundamentals Course (2019 Update!)


React의 동작
- React는 내가 그곳에 쓰는 모든 요소를 생성함. (자바스크립트와 함께 만들고 HTML로 밀어 넣는다.)
- 나의 모든 리액트 application을 하나의 div 사이에 넣는다.
- ReactDOM.render 를 통해 <App />를  특정 id를 갖는 div에 입력한다.
- 소스코드에서 우리가 보는 것은 비어있는 index.html 파일이다. ( react가 빠른 이유 )
- 리액트는 소스코드에 처음부터 HTML을 넣지 않고 HTML을 추가하거나 제거하는 법을 알고 있다.
- 그래서 Application이 Load될 때, 비어있는 HTML을 로드하게 되고, 그 후에 내가 Component에 작성한 내용을 리액트가 HTML에 밀어넣게 된다.

* Virtual DOM (Document Object Model)
    - 소스코드는 실재하지 않고 가상으로 존재한다. 리액트가 그것을 만들어 낸다.
    - 이것이 리액트가 하는 일이고 빠른 이유이다.
