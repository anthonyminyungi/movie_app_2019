# Movie App 2019
## using create-react-app

React JS Fundamentals Course (2019 Update!)
--> 강의 들으면서 정리한 내용

### 1. Introduce
*React의 동작* 
- React는 내가 그곳에 쓰는 모든 요소를 생성한다. (자바스크립트와 함께 만들고 HTML로 밀어 넣는다.)
- 나의 모든 리액트 application을 하나의 div 사이에 넣는다.
- ReactDOM.render 를 통해 `<App />`를  특정 id를 갖는 div에 입력한다.
- 소스코드에서 우리가 보는 것은 비어있는 index.html 파일이다. ( react가 빠른 이유 )
- 리액트는 소스코드에 처음부터 HTML을 넣지 않고 HTML을 추가하거나 제거하는 법을 알고 있다.
- 그래서 Application이 Load될 때, 비어있는 HTML을 로드하게 되고, 그 후에 내가 Component에 작성한 내용을 리액트가 HTML에 밀어넣게 된다.

* **Virtual DOM** (Document Object Model)
    - 소스코드는 실재하지 않고 가상으로 존재한다. 리액트가 그것을 만들어 낸다.
    - 이것이 리액트가 하는 일이고 빠른 이유이다.

### 2. JSX & Props
*Component*
- `<App />`?  --> Component.
- 리액트는 컴포넌트와 함께 동작하며 모든 것은 컴포넌트다. 
- Component란? HTML을 반환하는 함수이다.
- 리액트는 컴포넌트를 이용해서 HTML처럼  작성하려는 경우에 필요하다.
- 이와 같은 Javascript와 HTML의 조합을 JSX라고 한다. JSX는 javascript 안의 HTML. (리액트가 소개한 유일한 개념) 
- 새로운 컴포넌트를 작성할 때마다 `import React from "react"`를 써줘야만 리액트가 JSX와 컴포넌트를 사용하는 것을 이해할 수 있다.
- 리액트 Appliction은 하나의 컴포넌트만을 Rendering한다. (그래서 Componet가 App) 따라서 컴포넌트를 나란히 쓰는것은 오류를 발생시킨다.
- 따라서 Appliction 안에서 컴포넌트를 넣어서 사용하는 것인데, 더 많은 컴포넌트를 import 할 수 있다.
- Component는 대문자로 시작해야 한다.

*Props*
- JSX에서 두 번째로 이해해야 할 것은, 컴포넌트에 정보를 보낼 수 있다는 점이다.
- 리액트는 재사용이 가능한 컴포넌트를 만들 수 있다. (계속해서 반복해서 사용할 수 있다.)
- 컴포넌트 (호출부?) 에서 Property를 작성하면 함수 컴포넌트(선언부) 에서 사용할 수 있다. (인자로 전달 가능, console에 찍으면 Object 형태로 찍힌다.)
- 인자로 전달된 `props`는 `.`으로 각 value에 접근 가능하고, `{}` 을 사용하여 직접 접근할 수 있고 `,`로 구분한다.(`{}`가 더 나이스한 방법)
- 앞서 말한 것처럼, JSX와 Props를 이용하여 "같은" 함수 컴포넌트를 다르게 재사용할 수 있다.

*동적 데이터 추가*
- Object list를 다루기 위해 javascript의 map 함수를 이용한다.
- **map은 array를 받아서 array를 반환해준다.** 즉, array의 각 item에서 function을 실행하는 array를 갖는 자바스크립트 함수이며, function의 result를 갖는 array를 return한다.
 용법은 다음과 같다.
```javascript
arr = ["a", "b", "c", "d"];

arr.map(current => { //instead of =>, can use like function(current) in old javascript. and the space of current can replaced by anything else.
    console.log(current);
    return 0
})
```
- **map은 위처럼 function을 취해서 그 function을 각 item에 적용한 뒤 그 연산의 결과로 array를 만들어 반환해준다.**
- 위의 예시에서 `current` 자리에 들어가는 것은 Object이다. 따라서 각 Object 내의 필드에 접근할 수 있다.
- map에 인자로 전달할 function을 inline 혹은 arrow function으로 두지 않고도 별도로 작성하고, 이름만 써놓을 수 있다.
- 리액트의 모든 element들은 유일해야 하고, List에 집어 넣으면 이들은 유일성을 잃는다. 따라서 List 내의 child는 unique한 key prop을 가져야 한다. (property를 부여해줘야 한다.)
- 리액트의 모든 element는 모두 다르게 보일 필요가 있고, 다른 특성들을 부여해줬다고 해서 리액트가 그것을 알진 못한다. 때문에 key prop을 지정해줘야 한다.
- key prop은 function component로 전달되지 않는다. 왜냐하면 사용되지 않기 때문이다. 이는 기본적으로 리액트 내부에서만 사용하기 위한 것이다.

*PropTypes*
- 우리가 원하는 props가 우리가 갖고 있는 props인지 명확하게 체크하는 방법이 필요하다. (즉, 다시 말하면 부모 컴포넌트로부터 전달 받은 props가 예상한 props인지)
- 이를 사용하기 위해 `npm i prop-types`를 통해 설치하면  `package.json`에 자동으로 추가되고 이를 `import PropTypes from 'prop-types'`와 같이 적용하여 사용할 수 있다.
- 해당 컴포넌트의 propTypes 필드를 통해 각 prop에서 `string`, `int`, `array`, `boolean` 와 같은 type과 `isRequired`처럼 필수적인 prop을 지정할 수 있다.
- `isRequired` prop은 해당 type을 갖거나 `undefined`라는 의미이므로 지정하지 않아도 에러가 발생하지 않늗다. 그러나 type이 일치하지 않으면 에러가 발생한다.

[공식 문서의 PropTypes 설명](https://ko.reactjs.org/docs/typechecking-with-proptypes.html) 

### 3. State
*Class*
- 지금까지의 food 예제는 복사 붙여넣기를 통해 작성되었지만 State는 존재하지 않는, 변화하는 데이터, 즉 동적 데아터와 함께 작업할 때 만들어진다.
- 그러한 것들은 생겨나고, 사라지고, 변경되거나, 하나가 되거나 두개가 되고, 혹은 0이 되는 등의 것들을 말한다.
- 여기에서 기존 `function App(){}` 로 작성된 함수 컴포넌트를 삭제하고 `class App extends React.Component{}` 와 같은 클래스 컴포넌트로 변경한다.
- 이는 우리가 만들 App 클래스가 리액트 컴포넌트 클래스를 확장함을 의미한다. (예를 들면 samsung은 cell phone에서 확장된 것. cell phone은 screen camera, charger 등의 다양한 특성을 가지며 iphone과 samsung은 이를 공유한다. 따라서 이와 같은 특성들을 cell phone 클래스에서 확장한 samsung 클래스를 작성할 수 있는 것.)
- function 컴포넌트는 함수이고 무언가를 return 하여 화면에 표시되지만, class 컴포넌트는 리액트 컴포넌트를 확장하여 화면에 표시된다. 우리는 그것을 render 메소드에 넣어야만 한다.
- 리액트는 **자동으로 모든 class 컴포넌트의 render 메소드를 실행**하려고 한다.

*State* 
- class 컴포넌트에 대해서 논하는 이유는 이 클래스 컴포넌트가 우리가 원하는 State를 가지고 있기 때문.
- State는 Object이며, 컴포넌트의 data를 넣을 공간이 있고, 이 데이터는 변화한다.
- 즉, state에 내가 바꾸고 싶은 data를 넣는 것. 문제는 App에서 data를 어떻게 바꿀것인가 이다.
- 리액트는 기본적으로 Javascript, 즉 es6를 따르므로 클래스 내부에 함수를 작성할 수 있다. `add = () => {};` 와 같이 작성할 수 있으며, 각 태그 요소에 포함된 prop을 사용해 `onClick={this.add}`와 같이 호출할 수 있다.  
- 함수를 통해 state를 `this.state.count = -1`과 같이 직접 변경하려고 하면 `Do not mutate state directly`와 같은 워닝이 발생하며 동작하지 않는다. 왜냐하면 그렇게 작성하면 리액트가 render function을 refresh 하지 않기 때문이다. 
- 따라서 `setState()` 함수를 사용해야 하는데, **이 함수를 호출하면 리액트가 새로운 state와 함께 render function을 refresh 해준다.** `this.setState({count: 1});`와 같이 작성할 수 있다.
- 반대로 말하면, setState를 사용하지 않으면 새로운 state와 함께 render function이 호출되지 않을 것이다.
- `this.setState({count: this.state.count + 1});`와 같이 작성하는 것은 좋은 코드는 아니다. 왜냐하면 외부 state에 의존하고 싶지 않기 때문이다. 나중에 몇 가지의 성능 문제가 있기 때문에.
- `this.setState(current = > ({count: current.count + 1}))`과 같이 작성하는 것이 state를 set할 때, 리액트에서 외부의 상태에 의존하지 않는 가장 좋은 방법이다.

*Life Cycle*
- 리액트 클래스 컴포넌트는 단순히 render 말고도 life cycle method를 가지는데, 이는 기본적으로 리액트가 컴포넌트를 생성하고 없애는 방법을 말한다.
- 컴포넌트가 생성될 때, render 전에, 그리고 render 된 후,컴포넌트가 업데이트 될 떄 호출되는 다른 function들이 존재한다. 그 중 하나가 mounting이다.
- mounting은 태어나는 것과 같고, updating은 일반적인 업데이트, unmounting은 컴포넌트가 죽는 것(페이지를 바꾸는 등)을 의미한다.
- mounting 과정에서, 컴포넌트가 mount될 때(웹사이트로 들어갈 때) `constructor()` 를 호출한다. 이후 `render()`가 호출해 나타난 뒤에 `componentDidMount()`를 통해 이 컴포넌트가 처음 render됐음을 알려준다. 
- `getDerivedStateFromProps()` 혹은 `shouldComponentUpdate()` , `getSnapshotBeforeUpdate()` 에 대해선 이야기하지 않는다.
- update 과정은, state가 동적으로 변경될 때, 그게 업데이트다. `setState()`를 호출하면 먼저 컴포넌트를 호출하여 `render()`를 호출하고, `componentDidUpdate()`가 실행된다.
- 컴포넌트가 unmount될 때 (페이지를 떠날 때), `componentWillUnmount()`가 호출될 수 있지만 이는 새로고침을 통해 시뮬레이션 할 수 없었다.
- 컴포넌트에서 state를 사용하기 위해 `this.state`를 사용해야 하는데, `const {isLoading} = this.state;`와 같은 정의를 통해 생략할 수 있다. (es6의 문법)
- delay function을 다음과 같이 사용할 수 있다. (timeout은 javascript thing)
```javascript
componentDidMount() {
    setTimeout(() =>{
         this.setState({isLoading: false});
    }, 6000);
}
```
- 앞으로 할 일은 위처럼 componentDidMount에서 data를 fetch 하는 것이다. 이렇게 API로부터 data fetching이 완료되면, 영화를 render하고, map을 만들고, movie를 render한다.
- 내가 미래에 쓰고자 하는 state를 선언하는 건 필수가 아니다. 따라서 존재하지 않는 state를 사용하더라도 에러는 발생하지 않는다. 미래에 있을수도 있는 것에 대한 것이기 때문에 처음부터 `state = {}`내에 선언할 필요는 없다. state를 추가하는 것은 자유이고, setState를 사용할 때, state 내에 default 값을 선언할 필요는 없다.

### 4. Making the Movie App
*Data fetching from API and Rendering*
- 많은 사람들이 일반적으로 Javascriptd에서 data를 fetch할 때 사용하는 방법은 `fetch()`인데, 이 강좌에서는 Axios라는 더 좋은 방법을 사용할 것이다. (마치 fetch 위의 작은 layer이다.)
- 영화 API를 가져오기 위해 YTS의 `https://yts-proxy.now.sh/list_movies.json`를 사용한다.
- `axios.get()` 은 느릴 수 있기 때문에 javascript에게 componentDidMount 함수가 끝날 때까지 시간이 걸릴 수 있음을 알려줘야 한다. 때문에 `async` 키워드를 사용한다.
- getMovie 라는 새로운 함수를 만들어 componentDidMount 함수에서 호출하도록 하고, 아래와 같이 작성하여 호출하는 함수가 비동기이며, axios를 기다려야 함을 얘기해 준다는 것이다. async를 사용하지 않으면 await 키워드를 사용할 수 없다.
```javascript
getMovies = async() => {
    const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json");
}
```
- 위의 axios.get을 통해 가져온 data의 movie에 접근하려면 `movies.data.data.movies` 와 같이 매번 작성해야 하는데, es6의 문법에 따라 movies 내부에만 접근하려 한다면 위의 const movies를 이렇게 바꿀 수 있다. `const {data : {data : {movies}}}`
- state 내에 존재한 `movies = []`을 위해 `setState({movies : movies})`와 같이 작성해야 할 것 같지만 javascript는 똑똑하기 때문에 `setState({movies})`처럼만 작성해줘도 된다.
- 실제로 Movie를 render하기 위한 js파일을 별도로 만들건데, 여기서는 state가 필요하지 않으므로 class component가 아닌 function component를 사용한다.
- render function에서 isLoading이 완료되면 "We are Ready" 대신에 새로 작성한 Movie 컴포넌트를 import하여 map 함수를 수행한다.
```javascript
    <div>
      {isLoading ? "Loading..." : movies.map(movie => (
          <Movie 
            key={movie.id}
            id={movie.id} 
            year={movie.year} 
            title={movie.title} 
            summary={movie.summary} 
            poster={movie.medium_cover_image}
          />
        ))}
    </div>
```

*Styling*
- create-react-app 덕분에 css 통합이 매우 쉽다.
- javascript에서는 `style={{backgroundColor: "red"}}` 와 같이 CSS를 작성할 수 있다. 하지만 선호되는 방식은 아니다. 다른 방법은 css 파일을 만드는 것.
- 원하는 모든 컴포넌트에 대한 css 파일을 만들 수 있고, 또한 하나의 css파일에 모든 것을 넣을 수도 있다.
- 기존에 HTML 태그에서 사용하던 식별자인 class는 JSX에서 사용하는 `class {}` 와 동일하기 때문에 Warning을 유발한다. 따라서 class 컴포넌트 내에서 사용할 때에는 `className`을 사용해야 한다. 작성은 className으로 해도 요소 검사에서는 HTML에서의 class로 인식한다.
- 추가적으로 HTML에서 `<label for></label>` 에서의 for는 javascript의 loop에 해당하는 것과 동일하기 때문에 `<label htmlFor></label>` 와 같이 작성해야 한다.
- Genre를 사용하기 위해 지금까지와 마찬가지로 map을 사용하면 key prop을 제공해야 한다는 에러가 발생하는데(**map의 각 item은 key가 필요하기 때문에**), 이 경우에는 장르에 대한 id가 존재하지 않으므로 key prop을 작성할 필요가 없다. **대신 map을 사용하면 각 item들에 대한 index를 활용할 수 있는데**, 이를 key로 활용하면 된다.
- CSS 스타일링은 이 강좌에서 자세히 다루지 않을 것이므로 TimeLapse로 보여줄 것이다.
- String은 하나의 Array이다. 화면에 나타나는 긴 문장을 같은 길이로 제한하고 싶다면 문장 요소에 javascript 문법인 slice를 이용하면 된다. 이렇게 `summary.slice(0, 180)`

### 5. Conclusions
- `npm i gh-pages`를 통해서 github page 도메인으로 나타나게 해주는 툴이다. 내 github 안에서 HTML,CSS,Javascript 정적 웹사이트를 무료로 제공해준다.
- gh-pages를 사용하기 위해 `package.json`에 `"homepage" : "https://{github username}.github.io/{the name of project in github}"`와 같이 입력해주는 과정이 필요하다.(영문 소문자)
- `npm run build`를 통해 build 폴더를 생성하고 `package.json`의 scripts 섹션에 `deploy` 명령어를 추가해준다. `"deploy" : "gh-pages -d build"`, 그리고 deploy를 호출하기 전에 새로운 build 폴더를 생성하도록 `"predeploy" : "npm run build"`명령어 또한 추가해준다.

이 과정까지 마치고 생성된 나의 [Movie App](https://anthonyminyungi.github.io/movie_app_2019/)

- 사실 나는 더이상 state를 갖기 위해서 class component를 사용해야 할 필요가 없다. 강의에서 언급하지 않은 이유는 이것이 리액트의 새로운 부분이고 이해하는 데 많은 시간이 걸릴 것이기 때문이다.
- 이는 react hook이라는 것 때문이다. 다른 방식이긴 하지만 class 컴포넌트의 대체물이라는 것(class 컴포넌트가 구식이라는) 말은 아니다.

### 6. Bonus. Routing
*Router*
- 리액트에서 navigation을 사용하기 위해 react-router-dom 이라는 것을 사용할 수 있다. `npm install react-router-dom`
- 디렉토리 생성 및 두 화면으로 나누기 위한 Home, About file 생성
- router는 기본적으로 url을 통해 현재 페이지와 이동하려는 페이지의 길잡이 역할을 하는 간단한 리액트 컴포넌트이다. 
- react-router-dom 에서 Route 컴포넌트는 두가지 중요한 prop이 있는데, 하나는 URL에 해당하는**path**이고, 그 경로로 이동해서 화면에 보여줄 **component**이다.
- 리액트는 작성된 Router에 있는 모든 경로들을 비교하여 매치되는 것을 찾고 그것을 화면에 보여준다. 때문에 `/home`경로에 작성된 내용과 `/home/introduction`에 작성된 내용이 `/home/introduction`에서 두 경로가 매치되어 동시에 render되어 보여지는 것이다.
- 이를 해결하기 위해 **`exact={true}`** 와 같은 방식으로 prop을 작성하여 해당 URL과 정확하게 일치하는 경로에서만 해당 컴포넌트를 보여줄 수 있도록 할 수 있다. 

*Navigation*
- HTML은 `a href`를 통헤 페이지를 이동할 때마다 화면을 새로고침한다.
- 따라서 `a href`가 아닌 `Link to`를 사용한다.
- `Link`는 반드시 Router 컴포넌트 안에 존재해야 한다.
- 모든 태그를 라우터 내에 작성할 필요는 없지만 (다른 페이지에서도 공통으로 보여지길 원하는 것은 Router 바깥에 쓸 수도 있음. ex. footer)
- HashRouter는 `/#/`와 같은 경로를 가지지만 BrowserRouter에는 존재하지 않는다. 선택적으로 사용할 수 있다. (깃헙 페이지에서 정확하게 세팅하는게 귀찮기 때문에 HashRouter 사용)
- Router 내의 모든 Route는 리액트에 의해 자동으로 어떤 prop들이 들어간다. 이 prop들은 활용할 수 있다.
- [react-router 문서](https://reacttraining.com/react-router/web/api/Link/to-object)에 의하면 `Link` 컴포넌트를 사용할 때, `to` prop은 String이 아닌 Object로 대체할 수 있다. 이를 활용하여 다양한 것들을 구체화 할 수 있다.
- `Link to`에서 작성한 Object는 해당 경로로 이동할 때, props로 전달될 수 있으며 이를 활용할 수 있다. 이는 자동으로 전달되는 prop중 `location`의 하위에서 확인할 수 있다.
- 그러나 클릭을 통한 화면 전환을 통하지 않으면 prop이 제대로 전달되지 않을 수 있다.
- 전달하려는 props가 `undefined`일 경우 home으로 redirect 할 수도 있다.
- 이러한 movie-detail 페이지에 접근하는 유일한 방법은 메인 페이지의 요소를 클릭해서만 가능하도록 하고 임의로 url을 통해 접근하려고 할 때, 메인 페이지로 강제로 redirect해버리는 것이다.
- (복습)생명주기에 따르면 `render()`가 호출된 뒤에 `componentDidMount()`가 호출되는 것에 주의해야 한다. 
- 현재는 Home에서 About에 갔다가 다시 Home을 누르면 로딩을 다시 하는데, 이는 현재 Home.js에 state가 보존되어 있기 때문이다. 따라서 다른 패이지로 이동하여 Home이 사라졌다가 다시 돌아올 때마다 state는 비어있기 때문에 datad를 다시 Load해야 한다.
- 이렇게 하는 대신에 [redux](https://redux.js.org/) 라는 것을 활용할 수 있다. `redux`는 이 state를 화면으로부터 떨어뜨려 놓을 수 있다. 이 말은 기본적으로 현재 우리가 보고 있는 화면의 state와 data를 다른 어떠한 곳에 저장시켜 두었다가 사용하므로 다른 페이지에 갔다가 돌아와도 state가 비어있지 않게 된다. 따라서 loading은 한 번만 일어나게 된다. 