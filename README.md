# Movie App 2019
## create-react-app

React JS Fundamentals Course (2019 Update!)

.#1
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

.#2
- `<App />`?  --> Component.
- 리액트는 컴포넌트와 함께 동작하며 모든 것은 컴포넌트다. 
- Component란? HTML을 반환하는 함수이다.
- 리액트는 컴포넌트를 이용해서 HTML처럼 작성하려는 경우에 필요하다.
- 이와 같은 Javascript와 HTML의 조합을 JSX라고 한다. JSX는 javascript 안의 HTML. (리액트가 소개한 유일한 개념) 
- 새로운 컴포넌트를 작성할 때마다 `import React from "react"`를 써줘야만 리액트가 JSX와 컴포넌트를 사용하는 것을 이해할 수 있다.
- 리액트 Appliction은 하나의 컴포넌트만을 Rendering한다. (그래서 Componet가 App) 따라서 컴포넌트를 나란히 쓰는것은 오류를 발생시킨다.
- 따라서 Appliction 안에서 컴포넌트를 넣어서 사용하는 것인데, 더 많은 컴포넌트를 import 할 수 있다.
- Component는 대문자로 시작해야 한다.

- JSX에서 두 번째로 이해해야 할 것은, 컴포넌트에 정보를 보낼 수 있다는 점이다.
- 리액트는 재사용이 가능한 컴포넌트를 만들 수 있다. (계속해서 반복해서 사용할 수 있다.)
- 컴포넌트 (호출부?) 에서 Property를 작성하면 함수 컴포넌트(선언부) 에서 사용할 수 있다. (인자로 전달 가능, console에 찍으면 Object 형태로 찍힌다.)
- 인자로 전달된 `props`는 `.`으로 각 value에 접근 가능하고, `{}` 을 사용하여 직접 접근할 수 있고 `,`로 구분한다.(`{}`가 더 나이스한 방법)
- 앞서 말한 것처럼, JSX와 Props를 이용하여 "같은" 함수 컴포넌트를 다르게 재사용할 수 있다.

동적 데이터 추가
- Object list를 다루기 위해 javascript의 map 함수를 이용한다.
- map은 array를 받아서 array를 반환해준다. 즉, array의 각 item에서 function을 실행하는 array를 갖는 자바스크립트 함수이며, function의 result를 갖는 array를 return한다.
 용법은 다음과 같다.
```javascript
arr = ["a", "b", "c", "d"];

arr.map(current => { //instead of =>, can use like function(current) in old javascript. and the space of current can replaced by anything else.
    console.log(current);
    return 0
})
```
- map은 위처럼 function을 취해서 그 function을 각 item에 적용한 뒤 그 연산의 결과로 array를 만들어 반환해준다.
- 위의 예시에서 `current` 자리에 들어가는 것은 Object이다. 따라서 각 Object 내의 필드에 접근할 수 있다.
- map에 인자로 전달할 function을 inline 혹은 arrow function으로 두지 않고도 별도로 작성하고, 이름만 써놓을 수 있다.
- 리액트의 모든 element들은 유일해야 하고, List에 집어 넣으면 이들은 유일성을 잃는다. 따라서 List 내의 child는 unique한 key prop을 가져야 한다. (property를 부여해줘야 한다.)
- 리액트의 모든 element는 모두 다르게 보일 필요가 있고, 다른 특성들을 부여해줬다고 해서 리액트가 그것을 알진 못한다. 때문에 key prop을 지정해줘야 한다.
- key prop은 function component로 전달되지 않는다. 왜냐하면 사용되지 않기 때문이다. 이는 기본적으로 리액트 내부에서만 사용하기 위한 것이다.
- 우리가 원하는 props가 우리가 갖고 있는 props인지 명확하게 체크하는 방법이 필요하다. (즉, 다시 말하면 부모 컴포넌트로부터 전달 받은 props가 예상한 props인지)
- 이를 사용하기 위해 `npm i prop-types`를 통해 설치하면  `package.json`에 자동으로 추가되고 이를 `import PropTypes from 'prop-types'`와 같이 적용하여 사용할 수 있다.
