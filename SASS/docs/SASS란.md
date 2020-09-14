# SASS
웹에서는 표준 css만 동작할 수 있다
커파일하는 과정을 통해 css로 변환 <- CSS Preprocessor

## CSS preprocessor 란?
sass, less 등이 있는데, 이를 css 전처리기라고 합니다.
css가 동작하기 전에 사용가능하므로 웹에서는 분명 css가 동작하지만 우리는 css의 불편함을 이런 확장 기능으로 상쇄할 수 있습니다.

컴파일 과정이 필요합니다.

여러개의 전처리기중 sass, less, stylus 가있습니다.

##  Sass와 SCSS 의 차이점
Sass(Syntactically Awesome Style Sheets)의 3버전에서 새롭게 등장한 SCSS는 CSS 구문과 완전히 호환되도록 새로운 구문을 도입해 만든 Sass의 모든 기능을 지원하는 CSS의 상위 집합입니다.

```Sass
.list
  width: 100px
  float: left
  li
    color: red
    background: url("./image.jpg")
    &:last-child
      margin-right: -10px
```

```SCSS
.list {
  width: 100px;
  float: left;
  li {
    color: red;
    background: url("./image.jpg");
    &:last-child {
      margin-right: -10px;
    }
  }
}
```

Sass의 선택자는 유효범위를 ‘들여쓰기’로 구분하고, SCSS는 `{}`로 범위를 구분합니다.

@mixin과 @include 로 기능을 사용하는 SCSS
`=`와 `+` 기호로 기능을 사용하는 Sass

```Sass
=border-radius($radius)
  -webkit-border-radius: $radius
  -moz-border-radius:    $radius
  -ms-border-radius:     $radius
  border-radius:         $radius

.box
  +border-radius(10px)
```

```SCSS
@mixin border-radius($radius) {
  -webkit-border-radius: $radius;
     -moz-border-radius: $radius;
      -ms-border-radius: $radius;
          border-radius: $radius;
}

.box { @include border-radius(10px); }
```


## 컴파일 방법
Sass(SCSS)는 웹에서 직접 동작할 수 없습니다.
어디까지나 최종에는 표준 CSS가 동작해야하며, 전차리기로 작성 후 CSS로 컴파일 해야합니다.
다양한 방법으로 컴파일이 가능하지만 자바스크립트 개발 환경(Node.js)에서 추천하는 몇가지 방법이 있습니다.

### SassMeister
간단한 Sass 코드는 컴파일러를 설치하는게 부담일 수 있습니다. 그럴 경우 [SassMeister] 를 사용할 수 있습니다.

페이지 접속 후 부로 Sass 나 SCSS 문법으로 코딩하면 CSS 실시간 변환합니다.
HTML 를 작성하여 적용된 결과를 보거나 Sass 버전 설정 등 여러 환경 설정을 지원합니다.

### parcel

html, scss 파일 생성

scss 파일내에
```scss
.container {
    $size: 100px;
    .item {
        width : Ssize;
        height: Ssize;
        background: tomato;
    }
}
```

```html
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SCSS test</title>
    <link rel="stylesheet" href="./main.scss">
</head>
<body>
    <div class="container">
        <div class="item"></div>
    </div>
</body>
</html>
```

```terminal
$ npm init -y
$ npm install --save-dev parcel-bundler
$ npx parcel index.html
```
## 문법
### 주석
css의 주석은 `/* */` 입니다.
Sass(SCSS)는 JS처럼 두가지 스타일의 주석을 사용합니다.

```
// 컴파일되지 않는 주석
/* 컴파일되는 주석*/
```
즉 `//`는 굳이 메모할 필요가 없는 주석에 사용합니다.

Sass의 경우 컴파일되는 여러 줄 주석을 사용할 때 각 줄 앞에 `*`를 붙여야 하고, 중요한 것을 `*`의 라인을 맞춰주어야 합니다.

## 데이터 종류
|데이터|설명|예시|
|--|--|--|
|Numbers|숫자|1, .8, 30px, 2em..|
|Strings|문자|bold, relative, “img/a.png”, “dotum”..|
|Colors|색상 표현| red, blue, #fff, rgba(255, 0, 0, .8)..|
|Booleans|논리|true, false|
|Nulls| 아무것도 없음| null|
|Lists| 공백이냐 `,`로 구분된 값의 목록|(apple, orange, banana), apple orange|
|Maps| Lists와 유사하나 값이 `key:value` 형태| (apple: a, orange: o, banana: b)|

[SassMeister]:https://www.sassmeister.com/
