# React 란?

[리액트 교과서 - React 살펴보기](https://velog.io/@kyusung/React-%EC%82%B4%ED%8E%B4%EB%B3%B4%EA%B8%B0#%EB%8B%A8%EB%B0%A9%ED%96%A5-%EB%8D%B0%EC%9D%B4%ED%84%B0-%ED%9D%90%EB%A6%84)

UI 컴포넌트 라이브러리

## 특징

- 컴포넌트 기반 아키텍처
  - 템플릿 언어가 아닌 자바스크립트로 컴포넌트 작성
  - 특정 관심사가 집중된 기능 블록 (관심사 분리)
- JSX
- Virtual DOM
- 단방향 데이터 흐름 지향

### 컴포넌트 기반 아키텍처

- 컴포넌트는 프로그래밍의 한 부분을 의미, 재사용이 가능한 최소 단위
- 컴포넌트 기반으로 개발하는 이유?

  - 현대 웹은 크고 복잡
  - 복잡한 문제(개발할 시스템)을 작게 나누어서 해결하기 위해
  - 컴포넌트 단위로 코드를 작성하면 캡슐화(테스트 가용성, 신뢰성), 확장성, 결합성, 재사용성 같은 이점이 있다.

- 관심사 분리

  - 각 부문이 각자의 관심사를 갖도록 컴퓨터 프로그램을 여러 부문으로 나누는 설계 원칙

- React 의 관심사의 분리는 무엇을 뜻하는지?

  - 기존의 웹 개발 방식은 관심사의 분리보단 마크업, 디자인, 로직을 분리하는 기술의 분리에 가까웠다.
  - React는 기존의 방식이 아닌 컴포넌트 형태로 관심사를 분리하도록 했다.

    ![alt text](https://user-images.githubusercontent.com/6733004/44943427-2c864f00-ae01-11e8-84b0-e013c2a4611e.png)

> React.js는 컴포넌트로써 마크업과 뷰의 로직을 하나의 컴포넌트 function 혹은 createClass() 안에서 작성한다. 하지만 마크업은HTML이나 mustache로 작성하고 뷰의 로직은 자바스크립트로 나눠서 작성하는 기존의 방식을 취하지 않는다. 이에 대해 React.js의 개발자는 기술의 분리(Separation of technologies) 보다 관심사의 분리(Separation of concerns) 가 되어야 하며, 마크업과 뷰의 로직은 긴밀해야 한다 고 하며 템플릿의 문법으로 불필요하게 코드를 작성하는 것보다 자바스크립트로 작성하는 것이 더 좋다고 말했다.
>
> - 마크업과 뷰의 긴밀한 로직 - component function and createClass()
> - Separation of concerns not Separation of technologies
> - 자바스크립트로 작성 no 템플릿 문법

- 명령형과 선언형
  - 명령형 프로그래밍
  - 선언형 프로그래밍
    - 함수형 프로그래밍
    - 반응형(Reactive) 프로그래밍

### JSX

JSX는 자바스크립트 확장문법으로 템플릿엔진이라 불리우는 것과 유사한 방식의 표현방식이다. 간단히 말해, 자바스크립트 문법과 HTML 태그가 혼용되어 사용하는 방식이다.

- HMTL 친화적
- 마크업과 로직을 분리하지 않고 UI 작성 가능
- React 컴파일 과정에서 에러 감지 가능

#### 확장자 선택 JS vs. JSX

[ReactJS - .JS vs .JSX - Stack Overflow](https://stackoverflow.com/questions/46169472/reactjs-js-vs-jsx)

https://github.com/airbnb/javascript/pull/985

요약하자면,.`jsx could work for this, but as I already said, people don’t agree on syntax extensions.`
즉, JSX는 XML -like syntax extension of JS 로 extension으로 쓸 수 있긴 하나 원래는 Syntax라는 개념이며 이를 확장자로 써서 JSX에 포함되지 않는 JS와 분리시켜야 할 필요가 있나라는 의견인 듯

### Virtual DOM

- 기존(예..jQuery) 방식
  DOM에 변화가 생기면 렌터 트리를 재생성하고 이 과정에서 모든 요소들의 스타일이 다시 계산되고 레이아웃을 만들고 페인팅하는 과정 반복된다. 즉, DOM의 변화가 많아져 연산이 많아진다.

  ![alt text](https://media.vlpt.us/post-images/kyusung/1667deb0-6345-11e9-b9fb-c5519db56e71/1dPsRfoMnizQc1FYveSWr-g.png)

#### Virtual DOM 동작방식

DOM 트리에 변화를 감지하면 실제 변경이 일어난 부분에 대해 오프라인 DOM을 적용하고, 이 연산이 끝나면 최종적으로 변경되는 부분을 실제 DOM에 한번에 적용하는
것.

React는 성능 개선을 위해 `Diff Algorithm`을 수행하여 컴포넌트를 렌더링한다.

### 단방향 데이터 흐름

React.js는 단방향 데이터 흐름을 지향한다. 양방향 데이터 바인딩을 사용할 때처럼 작성한 코드의 양이 확연히 줄거나 하지는 않으나, 애플리케이션의 데이터를 관리하는 데이터 컴포넌트가 있고 그 데이터를 UI 컴포넌트에 전달하는 단순한 데이터 흐름, 이해와 관리가 용이한 어플리케이션 만들 수 있다.

![alt text](https://miro.medium.com/max/1838/0*35JeHn5u_Kldva32.png)
![alt text](https://user-images.githubusercontent.com/6733004/44943425-2c864f00-ae01-11e8-84d3-3757af3451d2.jpg)
